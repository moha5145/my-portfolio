import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";

import myImage from "../public/my-img.jpg";

import { FiLinkedin } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

const Main = () => {
  const { t } = useTranslation();
  return (
    <section id="main" className=" bg-main px-1 w-full h-screen text-center">
      <div className="container mx-auto h-full flex flex-col justify-center items-center md:gap-5 ">
        <div className="flex rounded-full border-double border-4">
          <Image src={myImage} width="150%" height="150%" className=" rounded-full" objectFit="cover" alt="" />
        </div>
        <h1 className="py-2">{t("common:main_t1")}</h1>
        <h2 className="py-2 ">{t("common:main_t2")} </h2>
        <p className="py-4 max-w[70%] text-gray-400 mx-auto">{t("common:main_t3")}</p>

        <div className="flex gap-10 mt-10">
          <div className="cursor-pointer hover:opacity-70">
            <Link href="https://www.linkedin.com/in/mohamed-mustafa-96ab84239/">
              <FiLinkedin size={45} />
            </Link>
          </div>

          <div className="cursor-pointer hover:opacity-70">
            <Link href="https://github.com/moha5145">
              <FaGithub size={45} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Main;
