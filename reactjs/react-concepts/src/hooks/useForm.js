import { useState } from "react";

function useForm(initialValues) {
  // initialValues is an object with the initial values of our form
  //{ name: '', email: '' }

  const [values, setValues] = useState(initialValues);

  //function to update state based on input change
  function handleChange(event) {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  }

  return [values, handleChange];
}

export default useForm;
