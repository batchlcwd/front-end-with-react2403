import React from "react";
import { useState, useEffect } from "react";
import {
  Label,
  TextInput,
  Textarea,
  Select,
  Button,
  FileInput,
  Card,
  Spinner,
} from "flowbite-react";
import { FaVideo } from "react-icons/fa";
import axios from "axios";
import { getAllCourses } from "../../services/course.service";
import { createVideoMetaData, uploadVideo } from "../../services/video.service";
import toast from "react-hot-toast";
const UploadVideo = () => {
  const [videoDetails, setVideoDetails] = useState({
    title: "",
    desc: "",
    courseId: "",
    file: null,
  });
  const [courses, setCourses] = useState([]);
  const [errors, setErrors] = useState({});
  const [loadingCourses, setLoadingCourses] = useState(false);
  const [videoUploading, setVideoUploading] = useState(false);
  const [uploadPercentage, setUploadPercentage] = useState(0);

  useEffect(() => {
    // Fetch courses from API
    const fetchCourses = async () => {
      try {
        setLoadingCourses(true);
        const response = await getAllCourses();
        // Replace with your API endpoint

        setCourses(response.content);
      } catch (error) {
        console.error("Failed to fetch courses:", error);
      } finally {
        setLoadingCourses(false);
      }
    };

    fetchCourses();
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!videoDetails.title) newErrors.title = "Title is required.";
    if (!videoDetails.desc) newErrors.description = "Description is required.";
    if (!videoDetails.courseId) newErrors.course = "Please select a course.";
    if (!videoDetails.file) newErrors.file = "Video file is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVideoDetails({ ...videoDetails, [name]: value });
  };

  const handleFileChange = (e) => {
    setVideoDetails({ ...videoDetails, file: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        console.log(videoDetails);
        // Submit the form via API
        setVideoUploading(true);
        const videoMetaData = await createVideoMetaData({
          title: videoDetails.title,
          desc: videoDetails.desc,
          course: {
            id: videoDetails.courseId,
          },
        });

        //call upload video:
        const videoResponse = await uploadVideo(
          videoMetaData.id,
          videoDetails.file,
          videoDetails.courseId,
          (progressEvent) => {
            const total = progressEvent.total || 0;
            const percentage = Math.round((progressEvent.loaded * 100) / total);
            setUploadPercentage(percentage);
          }
        );

        console.log(videoMetaData);
        console.log(videoResponse);

        toast.success("Video Metadata saved..");
        toast.success("video uploaded");
        setVideoUploading(false);
      } catch (error) {
        toast.error("Error in uploading in video, check the video details");
        setVideoUploading(false);
      }
    }
  };

  return (
    <>
      <div className="max-w-3xl mx-auto mt-10">
        <Card>
          <div className="flex items-center mb-4">
            <FaVideo size={24} className="text-blue-600 dark:text-blue-400" />
            <h2 className="ml-2 text-xl font-bold text-gray-900 dark:text-gray-100">
              Upload Video
            </h2>
          </div>
          <p className="mb-6 text-gray-600 dark:text-gray-400">
            Add videos to your courses with title, description, and upload
            options.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label
                htmlFor="title"
                value="Video Title"
                className="text-gray-900 dark:text-gray-200"
              />
              <TextInput
                id="title"
                name="title"
                placeholder="Enter video title"
                required
                onChange={handleChange}
                value={videoDetails.title}
                className={`dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 ${
                  errors.title
                    ? "dark:border-red-500 border-red-500"
                    : "dark:border-gray-600 border-gray-300"
                }`}
              />
              {errors.title && (
                <p className="text-red-600 dark:text-red-500 text-sm mt-1">
                  {errors.title}
                </p>
              )}
            </div>
            <div>
              <Label
                htmlFor="description"
                value="Video Description"
                className="text-gray-900 dark:text-gray-200"
              />
              <Textarea
                id="description"
                name="desc"
                placeholder="Write a short description of the video"
                rows={4}
                required
                onChange={handleChange}
                value={videoDetails.desc}
                className="dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
              />
              {errors.desc && (
                <p className="text-red-600 dark:text-red-500 text-sm mt-1">
                  {errors.desc}
                </p>
              )}
            </div>
            <div>
              <Label
                htmlFor="course"
                value="Select Course"
                className="text-gray-900 dark:text-gray-200"
              />
              {loadingCourses ? (
                <div className="flex items-center">
                  <Spinner size="md" />
                  <span className="ml-2 text-gray-600 dark:text-gray-400">
                    Loading courses...
                  </span>
                </div>
              ) : (
                <Select
                  id="course"
                  name="courseId"
                  required
                  onChange={handleChange}
                  value={videoDetails.courseId}
                  className="dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
                >
                  <option value="">Select a course</option>
                  {courses.map((course) => (
                    <option key={course.id} value={course.id}>
                      {course.title}
                    </option>
                  ))}
                </Select>
              )}
              {errors.courseId && (
                <p className="text-red-600 dark:text-red-500 text-sm mt-1">
                  {errors.courseId}
                </p>
              )}
            </div>
            <div>
              <Label
                htmlFor="file"
                value="Video File"
                className="text-gray-900 dark:text-gray-200"
              />
              <FileInput
                id="file"
                name="file"
                accept="video/*"
                required
                onChange={handleFileChange}
                className="dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
              />
              {errors.file && (
                <p className="text-red-600 dark:text-red-500 text-sm mt-1">
                  {errors.file}
                </p>
              )}
            </div>
            <div className="flex justify-center flex-col items-center gap-10">
              {videoUploading && (
                <h1 className="text-2x font-semibold">
                  Uploading {uploadPercentage} %
                </h1>
              )}
              <Button type="submit" color="green" disabled={videoUploading}>
                {videoUploading && <Spinner size="md" className="mx-3" />}
                Upload Video
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </>
  );
};

export default UploadVideo;
