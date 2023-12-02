import axios from "axios";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import { ToastContainer, toast } from "react-toastify";

const Contact = () => {
  const { t } = useTranslation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [notifications, setNotifications] = useState("");

  const sendMessage = async (event) => {
    event.preventDefault();
    setNotifications("");

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

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
        if (!emailRegex.test(email)) {
          setNotifications("Votre email n'est pas valide");
          toast.error("Votre email n'est pas valide");
        } else {
          const response = await axios.post("https://emailform-2k813eta.b4a.run/portfolio/contact/form", messageToSend);
          setName("");
          setEmail("");
          setMessage("");
          if (response) {
            console.log(response);
            toast.success("Le message est bien été envoyé!");
          }
        }
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <section id="contact" className="bg-contact h-screen w-full text-center p-2 flex flex-col  justify-center ">
      <h2 className="mb-5">{t("common:contact_title")}</h2>

      <div className="container flex flex-col gap-3 md:2/3 lg:w-1/2 mx-auto">
        <p>m.mohammed@outlook.fr</p>
        <p>0658372366</p>
        <p>{t("common:contact_p1")}</p>
      </div>
      <form className="container flex flex-col  gap-3 md:2/3 lg:w-1/2 mx-auto pt-10 text-contactDark" onSubmit={sendMessage}>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder={t("common:contact_name")}
            className="p-2 md-p4 flex-1 rounded-md outline-red-400"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>

        <div className="flex items-center gap-2">
          <input
            type="email"
            placeholder={t("common:contact_email")}
            className="p-2 md-p4 flex-1 rounded-md outline-red-400"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>

        <div className="flex items-start gap-2">
          <textarea
            name=""
            id=""
            cols="30"
            rows="7"
            placeholder={t("common:contact_message")}
            className="p-2 md-p4 flex-1 rounded-md outline-red-400"
            value={message}
            onChange={(event) => {
              setMessage(event.target.value);
            }}
          ></textarea>
        </div>

        {notifications && <p className="text-red-600 text-2xl">{notifications}</p>}
        <div className="flex items-center gap-2">
          <input
            type="submit"
            value={t("common:contact_btn")}
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
