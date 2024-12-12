import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCourseById } from "../../services/course.service";
import { getVideoOfCourse } from "../../services/video.service";
import { Avatar, List } from "flowbite-react";
import { MdVideocam } from "react-icons/md";
import VideoPlayer from "../../components/VideoPlayer";
import { baseUrl } from "../../config/axios.config";
import { Helmet } from "react-helmet";

const Learning = () => {
  const { courseId } = useParams();

  const [course, setCourse] = useState(null);
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);

  async function loadCourse() {
    const course = await getCourseById(courseId);
    setCourse(course);
    console.log(course);
  }

  async function loadVideos() {
    if (course) {
      const response = await getVideoOfCourse(course.id);
      setVideos(response);
      console.log(response);
      setCurrentVideo(response[0]);
    }
  }

  useEffect(() => {
    if (course) {
      loadVideos();
    } else {
      loadCourse();
    }
  }, [course]);

  function getActiveClass(video) {
    if (video.id == currentVideo.id) {
      return "dark:bg-green-700 bg-gray-800 text-gray-50";
    } else {
      return "dark:bg-gray-700";
    }
  }

  return (
    <div className="mt-4 px-8">
      <Helmet>
        <title>{currentVideo?.title}</title>
      </Helmet>
      <h1 className="text-xl font-semibold dark:text-gray-300">
        Learning : {course?.title}
      </h1>

      <div className="grid grid-cols-12 mt-4 gap-5">
        <div className="col-span-4  h-screen overflow-auto">
          {/* chapters */}

          <List
            unstyled
            className="   divide-y divide-gray-200 dark:divide-gray-500"
          >
            {videos.map((video, index) => (
              <List.Item
                active={true}
                onClick={() => {
                  setCurrentVideo(video);
                }}
                className={` ${getActiveClass(
                  video
                )} pb-3  sm:pb-4  p-2 rounded-lg cursor-pointer`}
              >
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div>
                    <MdVideocam size={30} />
                  </div>
                  <div className="min-w-0 mt-2 flex-1">
                    <p className="truncate text-sm font-medium ">
                      {video.title}
                    </p>
                    <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                      {course.title}
                    </p>
                  </div>
                </div>
              </List.Item>
            ))}
          </List>
        </div>
        <div className="col-span-8 flex flex-col gap-4">
          {/* main content: video player */}

          <VideoPlayer
            videoUrl={`${baseUrl}/videos/stream/${currentVideo?.id}`}
          />

          <h1 className="text-3xl">{currentVideo?.title}</h1>
          <p>{currentVideo?.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Learning;
