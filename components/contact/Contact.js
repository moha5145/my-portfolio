import axios from "axios";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMail, AiOutlineSend, AiOutlineUser } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { FiLinkedin, FiSend } from "react-icons/fi";
import { HiOutlinePencil } from "react-icons/hi";
import { ToastContainer, toast } from "react-toastify";

const Contact = () => {
  const { t } = useTranslation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [notifications, setNotifications] = useState("");

  const sendMessage = (event) => {
    event.preventDefault();
    setNotifications("");

    const expressionReguliere = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    try {
      const messageToSend = {
        name,
        email,
        message,
      };
      if (!name || !email || !message) {
        setNotifications("Tous les champs sont obligatoires");
        toast.error("Tous les champs sont obligatoires");
      } else {
        if (!expressionReguliere.test(email)) {
          setNotifications("Votre email n'est pas valide");
          toast.error("Votre email n'est pas valide");
        } else {
          const response = axios.post("https://email-form-tripadvisor.herokuapp.com/portfolio/contact/form", messageToSend);
          setName("");
          setEmail("");
          setMessage("");
          if (response) {
            console.log(response);
            toast.success("Le message est bien été envoyé!");
            // setNotifications("le message est bien été envoyé");
          }
        }
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <section id="contact" className="bg-contact h-screen w-full text-center p-2 flex flex-col  justify-center ">
      <h2>Contact me</h2>
      {/* <p>{t("common:home")}</p> */}

      <div className="container flex flex-col  gap-3 md:2/3 lg:w-1/2 mx-auto">
        <p>N &apos hésitez pas à me contacter, je suis à votre disposition pour plus d &apos informations.</p>
        <p>m.mohammed@outlook.fr</p>
        <p>0658372366</p>
      </div>
      <form className="container flex flex-col  gap-3 md:2/3 lg:w-1/2 mx-auto pt-10 text-contactDark" onSubmit={sendMessage}>
        <div className="flex items-center gap-2">
          {/* <div className="text-white">
            <AiOutlineUser size={40} />
          </div> */}
          <input
            type="text"
            placeholder="Your name"
            className="p-2 md-p4 flex-1 rounded-md placeholder:text-contact outline-red-400"
            onChange={(event) => {
              setName(event.target.value);
              console.log(name);
            }}
          />
        </div>

        <div className="flex items-center gap-2">
          {/* <div className="text-white">
            <AiOutlineMail size={40} />
          </div> */}

          <input
            type="email"
            placeholder="Your Email"
            className="p-2 md-p4 flex-1 rounded-md outline-red-400"
            onChange={(event) => {
              setEmail(event.target.value);
              console.log(email);
            }}
          />
        </div>

        <div className="flex items-start gap-2">
          {/* <div className="text-white">
            <HiOutlinePencil size={40} />
          </div> */}
          <textarea
            name=""
            id=""
            cols="30"
            rows="7"
            placeholder="Your Message"
            className="p-2 md-p4 flex-1 rounded-md outline-red-400"
            onChange={(event) => {
              setMessage(event.target.value);
              console.log(message);
            }}
          ></textarea>
        </div>

        {notifications && <p className="text-red-600 text-2xl">{notifications}</p>}
        <div className="flex items-center gap-2">
          {/* <div className="text-white">
            <FiSend size={40} />
          </div> */}
          <input
            type="submit"
            value="Send message"
            className="p-2 md-p4 flex-1 rounded-md bg-red-400 text-green-100 hover:opacity-70 active:opacity-50 font-bold  text-lg cursor-pointer"
          />
        </div>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </form>
    </section>
  );
};
export default Contact;
