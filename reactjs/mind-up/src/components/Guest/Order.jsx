import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import {
  createOrder,
  getCourseById,
  verifyPaymentApi,
} from "../../services/course.service";
import { getPriceAfterDiscount } from "./CourseView";
import { Button, Label, Textarea } from "flowbite-react";
import ImageWithFallback from "../ImageWithFallback";
import toast from "react-hot-toast";
import {
  BUSINESS_DESC,
  BUSINESS_NAME,
  RAZORPAY_API_KEY,
} from "../../helpers/constants";

const Order = () => {
  const { courseId } = useParams();
  const { isLogin, user } = useAuth();
  const [course, setCourse] = useState(null);
  const [address, setAddress] = useState("");
  const navigate = useNavigate();
  async function getCourse() {
    const course = await getCourseById(courseId);
    console.log(course);
    setCourse(course);
  }

  useEffect(() => {
    getCourse();
  }, []);

  //create order
  async function handleCreateOrder() {
    if (address.trim() == "") {
      toast.error("Billing Address is required !!");
      return;
    }

    const order = {
      amount: getPriceAfterDiscount(course.price, course.discount),
      address: address,
      userId: user.userId,
      courseId: course.id,
      userName: user.name,
    };

    console.log(order);
    // call create order api
    const orderResponse = await createOrder(order);
    console.log(orderResponse);

    toast.success("order created.. now proceeding for payment..");

    var options = {
      key: RAZORPAY_API_KEY, // Enter the Key ID generated from the Dashboard
      amount: orderResponse.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: BUSINESS_NAME, //your business name
      description: BUSINESS_DESC,
      image: "http://localhost:5173/src/assets/study.png",
      order_id: orderResponse.razorpayOrderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: function (response) {
        toast.success("Payment done .. verify payment");

        console.log(response.razorpay_payment_id);
        console.log(response.razorpay_order_id);
        console.log(response.razorpay_signature);

        verifyPayment(
          response.razorpay_payment_id,
          response.razorpay_order_id,
          response.razorpay_signature
        );
      },
      prefill: {
        //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        name: user.name, //your customer's name
        email: user.email,
        contact: user.phoneNumber, //Provide the customer's phone number for better conversion rates
      },
      notes: {
        address: address,
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rpy = new window.Razorpay(options);

    rpy.on("payment.failed", function (response) {
      console.log(response.error.code);
      console.log(response.error.description);
      console.log(response.error.source);
      console.log(response.error.step);
      console.log(response.error.reason);
      console.log(response.error.metadata.order_id);
      console.log(response.error.metadata.payment_id);
      toast.error("payment failed");
    });

    rpy.open();
  }

  async function verifyPayment(paymentId, orderId, signature) {
    try {
      const response = await verifyPaymentApi({
        razorpayOrderId: orderId,
        razorpayPaymentId: paymentId,
        razorpaySignature: signature,
      });

      toast.success("all done , thanks for buying");
      console.log(response);
      navigate("/dashboard/courses");
    } catch (error) {
      toast.error("error in verifying the payment..");
      console.log(error);
    }
  }

  // load checkout js [razorpay]
  function loadCheckoutJS() {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.id = "razorpay_script";
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => {
        resolve("script loaded");
      };
      script.onerror = () => {
        reject("Failed to load razorpay script");
      };
      document.body.appendChild(script);
    });
  }

  useEffect(() => {
    loadCheckoutJS()
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="flex dark:text-gray-200 gap-7 w-1/2 mx-auto mt-4 lg:mt-16 bg-gray-300 dark:bg-gray-700 rounded-lg p-6">
      <div className="flex w-full  justify-center  flex-col gap-3">
        <ImageWithFallback
          className={"w-full  max-h-52 rounded object-cover"}
          src={course?.bannerUrl}
        />

        <p className="dark:text-gray-400">Course Information</p>
        <h1 className="font-bold text-xl">{course?.title}</h1>
        <p>{course?.shortDesc}</p>
        <p className="font-bold text-center text-4xl">
          ₹ {getPriceAfterDiscount(course?.price, course?.discount)}
        </p>
      </div>
      <div className="w-full flex  flex-col gap-3">
        <p className="dark:text-gray-400">Order Information</p>
        <h1 className="font-bold text-xl">{user?.name}</h1>
        <p>{user?.email}</p>

        <div className="w-full">
          <div className="mb-2 block">
            <Label htmlFor="address" value="Billing Address" />
          </div>
          <Textarea
            onChange={(event) => {
              setAddress(event.target.value);
            }}
            value={address}
            id="address"
            placeholder="Enter your billing address"
            required
            rows={4}
          />
        </div>
        <Button onClick={handleCreateOrder} color="indigo">
          Place Order
        </Button>
      </div>
    </div>
  );
};

export default Order;
