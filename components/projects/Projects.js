import Carousel from "./Carousel";
import cloneProjects from "../../datas/cloneProjects";
import personalProjects from "../../datas/personalProjects";
import groupsProjects from "../../datas/groupsProject";

import { useTranslation } from "next-i18next";
import ReactPlayer from "react-player/lazy";
import { useState } from "react";

const Projects = () => {
  const { t } = useTranslation();
  const fripsVideo = "assets/videos/Composition.mp4";
  const [isPlayerIsVisible, setisPlayerIsVisible] = useState(false);
  const [isVideo, setisVideo] = useState(false);

  return (
    <section id="projects" className="  h-[100%] ">
      <div className=" mx-auto mr-0  pb-2 md:pl-8 bg-projects w-full">
        <h1 className="text-center pt-10">{t("common:projects_t1")}</h1>

        <div className="pl-3">
          <div>
            <h2>{t("common:projects_t2")}</h2>
            <Carousel projects={cloneProjects} isVideo={false} />
          </div>

          <div className="text-left">
            <h2>{t("common:projects_t3")}</h2>
            <Carousel projects={personalProjects} isVideo={false} />
          </div>

          {!isPlayerIsVisible ? (
            <div>
              <h2>{t("common:projects_t4")}</h2>
              <Carousel projects={groupsProjects} isVideo={true} isPlayerIsVisible={isPlayerIsVisible} setisPlayerIsVisible={setisPlayerIsVisible} />
            </div>
          ) : (
            <div className="flex flex-col justify-start w-full md:h-[750px] mb-16">
              {/* <h2 className="mb-5">{t("common:projects_t4")}</h2> */}
              <ReactPlayer
                url={fripsVideo}
                playing
                muted
                controls
                width="100%"
                height="100%"
                onEnded={() => {
                  setisPlayerIsVisible(false);
                }}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
export default Projects;
