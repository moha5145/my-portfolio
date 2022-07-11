import { t } from "i18next";
import Image from "next/image";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import img from "../public/assets/skills/html-css-js.png";
import { useTranslation } from "next-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className=" bg-about  h-[100%] md:h-screen md:py-20 flex flex-col items-center justify-between">
      <h1 className="py-5 md:py-20">{t("common:about_t")}</h1>
      <div className="flex flex-col-reverse md:flex-row container px-3 mx-auto gap-20 md:w-3/4 ">
        <div className="flex-3 items-start flex flex-col gap-10 text-lg md:text-xl">
          <p>{t("common:about_p1")}</p>
          <p>{t("common:about_p2")}</p>

          <p>{t("common:about_p3")}</p>
        </div>
        <div className="flex-2">
          <Image src={img} alt="" />
        </div>
      </div>

      <div className=" hover:opacity-70  cursor-pointer flex justify-center py-10 md:py-32">
        <a href="/files/cv.pdf" download target="_blank" rel="noopener noreferrer" className=" flex items-center gap-2">
          <span className="text-white">
            <HiOutlineDocumentDownload size={70} />
          </span>
          <span className=" text-4xl">CV</span>
        </a>
      </div>
    </section>
  );
};
export default About;
