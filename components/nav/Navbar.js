import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineHome, AiFillProject, AiOutlineFundProjectionScreen, AiOutlineMail } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import { GrProjects, GrLanguage } from "react-icons/gr";
import { GoProject } from "react-icons/go";
import { VscProject } from "react-icons/vsc";
import { GiSkills } from "react-icons/gi";
import { TbLanguageKatakana } from "react-icons/tb";
import { HiOutlineMailOpen, HiOutlineTranslate } from "react-icons/hi";
import { IoLanguageOutline } from "react-icons/io";
import NavbarLink from "./NavbarLink";

import { Menu } from "@headlessui/react";

import { useTranslation } from "react-i18next";
import { useState } from "react";

const Navbar = () => {
  const router = useRouter();
  let { locale } = router;
  const { t } = useTranslation();
  const [dropdownOpen, setdropdownOpen] = useState(true);
  return (
    <div
      className={`${
        router.asPath == "/"
          ? " bg-mainDark"
          : router.asPath == "/#projects"
          ? "bg-projectsDark"
          : router.asPath == "/#skills"
          ? "bg-skillsDark"
          : router.asPath == "/#about"
          ? "bg-aboutDark"
          : router.asPath == "/#contact"
          ? "bg-contactDark"
          : "bg-mainDark "
      } 
    flex flex-col justify-between py-10  h-screen w-10 md:w-32 fixed text-slate-100 `}
    >
      {/* <h2>{t("common:title")}</h2> */}

      <div>
        <div onClick={() => setdropdownOpen(!dropdownOpen)} class="overflow-hidden border-b-2 py-2 flex  hover:cursor-pointer hover:opacity-70">
          <div className="mx-2">
            <HiOutlineTranslate size={26} />
          </div>
          <div>Language</div>
        </div>

        <div
          class={`${
            dropdownOpen ? ` opacity-100 visible` : "top-[100%] invisible opacity-0"
          }  left-0 z-40 mt-2 w-full rounded border-[.5px] border-light  py-2 shadow-card transition-all`}
        >
          <Link href={router.asPath} locale="fr">
            <a
              className="block py-2 px-2 text-base font-semibold text-body-color hover:bg-primary hover:bg-opacity-5 hover:text-primary hover:opacity-70"
              onClick={() => setdropdownOpen(false)}
            >
              Fra
            </a>
          </Link>

          <Link href={router.asPath} locale="en">
            <a
              className="block py-2 px-2 text-base font-semibold text-body-color hover:bg-primary hover:bg-opacity-5 hover:text-primary hover:opacity-70"
              onClick={() => setdropdownOpen(false)}
            >
              Eng
            </a>
          </Link>
        </div>
      </div>

      <ul className="flex flex-col">
        <NavbarLink path="/" name="HOME" color="main" icon={<AiOutlineHome size={20} />} />

        <NavbarLink path="/#projects" name="PROJECTS" color="projects" icon={<VscProject size={20} />} />

        <NavbarLink path="/#skills" name="SKILLS" color="skills" icon={<GiSkills size={20} color="white" />} />

        <NavbarLink path="/#about" name="ABOUT" color="about" icon={<FcAbout size={20} />} />

        <NavbarLink path="/#contact" name="CONTACT" color="contact" icon={<AiOutlineMail size={20} />} />
      </ul>
    </div>
  );
};
export default Navbar;
