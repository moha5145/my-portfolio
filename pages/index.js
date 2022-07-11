import Head from "next/head";
import Navbar from "../components/nav/Navbar";
import Main from "../components/Main";
import About from "../components/About";
import Projects from "../components/projects/Projects";
import Skills from "../components/Skills";
import Contact from "../components/contact/Contact";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect } from "react";
import navStyle from "../utils/navStyle";
import Footer from "../components/Footer";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default function Home({ locale }) {
  const { t } = useTranslation();

  const router = useRouter();

  console.log(router);
  const addNavClass = (color) => {
    const nav = document.querySelector(".nav");
    nav.classList.add(color);
  };
  const removeNavClass = (color) => {
    const nav = document.querySelector(".nav");
    nav.classList.remove(color);
  };
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const links = document.querySelectorAll(".link");

    window.onscroll = () => {
      if (sections[0].getBoundingClientRect().top <= 0 && sections[0].getBoundingClientRect().bottom > 0) {
        links[0].classList.add("bg-main");

        addNavClass("bg-mainDark");
      } else {
        links[0].classList.remove("bg-main");
        removeNavClass("bg-mainDark");
      }

      if (sections[1].getBoundingClientRect().top <= 0 && sections[1].getBoundingClientRect().bottom > 1) {
        links[1].classList.add("bg-projects");
        addNavClass("bg-projectsDark");
      } else {
        links[1].classList.remove("bg-projects");
        removeNavClass("bg-projectsDark");
      }

      if (sections[2].getBoundingClientRect().top <= 1 && sections[2].getBoundingClientRect().bottom > 1) {
        links[2].classList.add("bg-skills");
        addNavClass("bg-skillsDark");
      } else {
        links[2].classList.remove("bg-skills");
        removeNavClass("bg-skillsDark");
      }

      if (sections[3].getBoundingClientRect().top <= 1 && sections[3].getBoundingClientRect().bottom > 1) {
        links[3].classList.add("bg-about");
        addNavClass("bg-aboutDark");
      } else {
        links[3].classList.remove("bg-about");
        removeNavClass("bg-aboutDark");
      }

      if (sections[4].getBoundingClientRect().top <= 2) {
        links[4].classList.add("bg-contact");
        addNavClass("bg-contactDark");
      } else {
        links[4].classList.remove("bg-contact");
        removeNavClass("bg-contactDark");
      }
    };
  }, []);

  return (
    <div>
      <Head>
        <title>My portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="ml-10 md:ml-32 text-slate-200 scroll-smooth">
        {/* <h1>{t("common:title")}</h1>
        <h1>{locale}</h1> */}

        <Main />

        <Projects />

        <Skills />

        <About />

        {/* {contactInView && pushContact} */}
        <Contact />

        <Footer />
      </div>
    </div>
  );
}
