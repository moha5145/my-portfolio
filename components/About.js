import Image from "next/image";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import img from "../public/assets/qui.png";
import { useTranslation } from "next-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className=" bg-about md:py-20 ">
      <div className="h-[100%] md:h-screen mx-auto container flex flex-col items-center justify-around lg:px-20 ">
        <h1 className="py-5">{t("common:about_t")}</h1>
        <div className="flex flex-col-reverse lg:flex-row px-3 mx-auto gap-10 items-center">
          <div className="lg:flex-3 md:items-center flex flex-col gap-10 text-lg md:text-xl md:w-3/4">
            <p>{t("common:about_p1")}</p>
            <p>{t("common:about_p2")}</p>
            <p>{t("common:about_p3")}</p>
          </div>
          <div className="lg:flex-2 w-3/4">
            <Image src={img} alt="" />
          </div>
        </div>

        <div className=" hover:opacity-70  cursor-pointer flex justify-center pb-5">
          <a href="/files/cv-Mohamed-MUSTAFA.pdf" download target="_blank" rel="noopener noreferrer" className=" flex items-center gap-2">
            <span className="text-white">
              <HiOutlineDocumentDownload size={70} />
            </span>
            <span className=" text-4xl">CV</span>
          </a>
        </div>
      </div>
    </section>
  );
};
export default About;
