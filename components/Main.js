import { AiOutlineLinkedin } from "react-icons/ai";
import { FiLinkedin } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import myImage from "../public/my-img.jpg";
import { HiOutlineDocumentDownload } from "react-icons/hi";

const Main = () => {
  return (
    <section id="main" className=" bg-main w-full h-screen text-center">
      <div className="container mx-auto h-full flex flex-col justify-center items-center ">
        <div className="h-52 w-52 rounded-full border-double border-4">
          <Image src={myImage} width="200%" height="200%" className=" rounded-full" objectFit="cover" alt="" />
        </div>
        <h1 className="py-2">Hi I am Mohamed</h1>
        <h1 className="py-2 ">Full stack web/mobile developper </h1>
        <p className="py-4 max-w[70%] text-gray-400 mx-auto">
          Développeur web/mobile full stack, html, css, javascript,react, react Native, express.js, mongoDB
        </p>

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
