import { useTranslation } from "next-i18next";
import Link from "next/link";
import { AiOutlineMail, AiOutlineSend, AiOutlineUser } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { FiLinkedin, FiSend } from "react-icons/fi";
import { HiOutlinePencil } from "react-icons/hi";
const Contact = () => {
  const { t } = useTranslation();
  return (
    <section id="contact" className="bg-contact h-screen w-full text-center p-2 flex flex-col  justify-around ">
      <h2>Contact me</h2>
      {/* <p>{t("common:home")}</p> */}

      <div className="container flex flex-col  gap-3 md:2/3 lg:w-1/2 mx-auto">
        <p>N'hésitez pas à me contacter, je suis à votre disposition pour plus d'informations.</p>
        <p>m.mohammed@outlook.fr</p>
        <p>0658372366</p>
      </div>
      <form className="container flex flex-col  gap-3 md:2/3 lg:w-1/2 mx-auto pt-10 text-contactDark">
        <div className="flex items-center gap-2">
          <div className="text-white">
            <AiOutlineUser size={40} />
          </div>
          <input type="text" placeholder="Your name" className="p-2 md-p4 flex-1 rounded-md placeholder:text-contact outline-red-400" />
        </div>

        <div className="flex items-center gap-2">
          <div className="text-white">
            <AiOutlineMail size={40} />
          </div>

          <input type="email" placeholder="Your Email" className="p-2 md-p4 flex-1 rounded-md outline-red-400" />
        </div>

        <div className="flex items-start gap-2">
          <div className="text-white">
            <HiOutlinePencil size={40} />
          </div>
          <textarea name="" id="" cols="30" rows="7" placeholder="Your Message" className="p-2 md-p4 flex-1 rounded-md outline-red-400"></textarea>
        </div>

        <div className="flex items-center gap-2">
          <div className="text-white">
            <FiSend size={40} />
          </div>
          <input
            type="submit"
            value="Send message"
            className="p-2 md-p4 flex-1 rounded-md bg-red-400 text-green-100 hover:opacity-70 active:opacity-50 font-bold  text-lg cursor-pointer"
          />
        </div>
      </form>
    </section>
  );
};
export default Contact;
