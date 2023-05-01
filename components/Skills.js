import Image from "next/image";

import Html from "../public/assets/skills/html.png";
import CSS from "../public/assets/skills/css.png";
import Js from "../public/assets/skills/javascript.png";
import ReactLogo from "../public/assets/skills/react.png";
import nodeLogo from "../public/assets/skills/node.png";
import expressLogo from "../public/assets/skills/express.png";
import githubLogo from "../public/assets/skills/github.png";
import mongoLogo from "../public/assets/skills/mongo.png";
import vueLogo from "../public/assets/skills/vue.png";
import quasarLogo from "../public/assets/skills/quasar.png";
import capacitorLogo from "../public/assets/skills/capacitor.png";
import HerokuLogo from "../public/assets/skills/Heroku.png";
import netlifyLogo from "../public/assets/skills/netlify.svg";
import forestLogo from "../public/assets/skills/forest.png"
import sanityLogo from "../public/assets/skills/sanity.png"
import gitlabLogo from "../public/assets/skills/gitlab.png"

import { useTranslation } from "next-i18next";

const Skils = () => {
  const { t } = useTranslation();
  return (
    <section id="skills" className=" bg-skills h-[100%] w-full lg:h-screen text-center p-2 py-24 md:py-20 text-slate-400  ">
      <div className="container mx-auto flex flex-col md:gap-28 gap-5  ">
        <h2 className="ml-10">{t("common:skills")}</h2>
        <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-16 ml-10 md:pt-18  items-center mt-auto ">
          <div className="flex flex-col justify-center items-center">
            <div className=" md:h-20 md:w-16 h-16 w-14 relative animate-bounce hover:animate-spin">
              <Image src={Html} alt="" layout="fill" objectFit="contain" className="" />
            </div>
            <h4>HTML</h4>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="md:h-20 md:w-16 h-16 w-14   relative animate-bounce hover:animate-spin">
              <Image src={CSS} alt="" layout="fill" className="object-contain" />
            </div>

            <h4>CSS</h4>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="md:h-20 md:w-16 h-16 w-14 relative animate-bounce hover:animate-spin">
              <Image src={Js} alt="" layout="fill" className="object-contain " />
            </div>
            <h4>JavaScript</h4>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="md:h-20 md:w-16 h-16 w-14  relative animate-bounce hover:animate-spin">
              <Image src={ReactLogo} alt="" layout="fill" className="object-contain" />
            </div>
            <h4>React</h4>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="md:h-20 md:w-16 h-16 w-14  relative animate-bounce hover:animate-spin">
              <Image src={expressLogo} alt="" layout="fill" className="object-contain" />
            </div>
            <h4>Express.js</h4>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="md:h-20 md:w-16 h-16 w-14  relative animate-bounce hover:animate-spin">
              <Image src={nodeLogo} alt="" layout="fill" className="object-contain" />
            </div>

            <h4>Node.js</h4>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="md:h-20 md:w-16 h-16 w-14   relative animate-bounce hover:animate-spin">
              <Image src={mongoLogo} alt="" layout="fill" className="object-contain" />
            </div>
            <h4>MongoDB</h4>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="md:h-20 md:w-16 h-16 w-14  relative animate-bounce hover:animate-spin">
              <Image src={vueLogo} alt="" layout="fill" className="object-contain" />
            </div>

            <h4>Vue.js</h4>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="md:h-20 md:w-16 h-16 w-14  relative animate-bounce hover:animate-spin ">
              <Image src={quasarLogo} alt="" layout="fill" className="object-contain" />
            </div>

            <h4>Quasar</h4>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="md:h-20 md:w-16 h-16 w-14  relative animate-bounce hover:animate-spin">
              <Image src={capacitorLogo} alt="" layout="fill" className="object-contain" />
            </div>

            <h4>Capacitor</h4>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="md:h-20 md:w-16 h-16 w-14  relative animate-bounce hover:animate-spin">
              <Image src={githubLogo} alt="" layout="fill" className="object-contain" />
            </div>

            <h4>Github</h4>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="md:h-20 md:w-16 h-16 w-14  relative animate-bounce hover:animate-spin">
              <Image
                src={gitlabLogo}
                alt=""
                layout="fill"
                className="object-contain"
              />
            </div>

            <h4>Gitlab</h4>
          </div>
          
          <div className="flex flex-col justify-center items-center">
            <div className="md:h-20 md:w-16 h-16 w-14  relative animate-bounce hover:animate-spin">
              <Image
                src={HerokuLogo}
                alt=""
                layout="fill"
                className="object-contain"
              />
            </div>

            <h4>Heroku</h4>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="md:h-20 md:w-16 h-16 w-14  relative animate-bounce hover:animate-spin">
              <Image src={netlifyLogo} alt="" layout="fill" className="object-contain" />
            </div>

            <h4>Netlify</h4>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="md:h-20 md:w-16 h-16 w-14  relative animate-bounce hover:animate-spin">
              <Image
                src={forestLogo}
                alt=""
                layout="fill"
                className="object-contain"
              />
            </div>

            <h4>Forest admin</h4>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="md:h-20 md:w-16 h-16 w-14  relative animate-bounce hover:animate-spin">
              <Image
                src={sanityLogo}
                alt=""
                layout="fill"
                className="object-contain"
              />
            </div>

            <h4>Sanity</h4>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skils;
