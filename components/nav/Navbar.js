import Link from "next/link";

import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { useState } from "react";

import { AiOutlineHome, AiOutlineMail, AiOutlineInfoCircle } from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
import { VscProject } from "react-icons/vsc";
import { HiOutlineDocumentDownload, HiOutlineTranslate } from "react-icons/hi";

import NavbarLink from "./NavbarLink";

const Navbar = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const [dropdownOpen, setdropdownOpen] = useState(false);

  const setCookie = (lang) => {
    document.cookie = `NEXT_LOCALE=${lang}`;
    window.location.reload();
  };

  return (
    <div className=" nav flex flex-col justify-around  h-screen w-10 md:w-auto fixed bg-mainDark text-slate-100">
      <div className="py-4">
        <div onClick={() => setdropdownOpen(!dropdownOpen)} className="overflow-hidden border-b-[0.5px] pb-2 flex  hover:cursor-pointer hover:opacity-70">
          <div className="mx-2">
            <HiOutlineTranslate size={26} />
          </div>
          <div className=" md:visible invisible">{t("common:language")}</div>
        </div>

        <div
          className={`${
            dropdownOpen ? ` opacity-100 visible` : "top-[100%] invisible opacity-0"
          }  left-0 z-40 mt-2 w-full rounded border-[.5px] border-light  py-1 shadow-card transition-all`}
        >
          <Link href={router.asPath} locale="fr">
            <a
              className="block py-1 px-2 text-base font-semibold text-body-color hover:bg-primary hover:bg-opacity-5 hover:text-primary hover:opacity-70"
              onClick={() => {
                setdropdownOpen(false);
                setCookie("fr");
              }}
            >
              Fra
            </a>
          </Link>

          <Link href={router.asPath} locale="en">
            <a
              className="block py-1 px-2 text-base font-semibold text-body-color hover:bg-primary hover:bg-opacity-5 hover:text-primary hover:opacity-70"
              onClick={() => {
                setdropdownOpen(false);
                setCookie("en");
              }}
            >
              Eng
            </a>
          </Link>
        </div>
      </div>

      <ul className="flex flex-col last-of-type:border-b-0 ">
        <NavbarLink path="/" name={t("common:home")} border={true} icon={<AiOutlineHome size={20} />} />

        <NavbarLink path="/#projects" name={t("common:projects")} border={true} icon={<VscProject size={20} />} />

        <NavbarLink path="/#skills" name={t("common:skills")} border={true} icon={<GiSkills size={20} color="white" />} />

        <NavbarLink path="/#about" name={t("common:about")} border={true} icon={<AiOutlineInfoCircle size={20} />} />

        <NavbarLink path="/#contact" name={t("common:contact")} border={false} icon={<AiOutlineMail size={20} />} />

        <div className="px-2 border-t-[0.5px] hover:opacity-50 py-5 cursor-pointer">
          <a href="/files/cv-Mohamed-MUSTAFA.pdf" download target="_blank" rel="noopener noreferrer" className="w-full flex items-center gap-2">
            <span className="text-white">
              <HiOutlineDocumentDownload size={20} />
            </span>
            <span className=" md:visible invisible">CV</span>
          </a>
        </div>
      </ul>
    </div>
  );
};
export default Navbar;
