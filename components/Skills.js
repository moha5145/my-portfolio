import Image from "next/image";

import Html from "../public/assets/skills/html.png";
import CSS from "../public/assets/skills/css.png";
import Js from "../public/assets/skills/javascript.png";
import ReactLogo from "../public/assets/skills/react.png";
import nodeLogo from "../public/assets/skills/node.png";
import expressLogo from "../public/assets/skills/express.png";
import githubLogo from "../public/assets/skills/github.png";
import mongoLogo from "../public/assets/skills/mongo.png";

import { useTranslation } from "next-i18next";

const Skils = () => {
  const { t } = useTranslation();
  return (
    <section id="skills" className=" bg-skills h-full w-full text-center p-2 md:py-20 text-slate-400  ">
      <div className="container mx-auto flex flex-col md:gap-28 gap-5  ">
        <h2 className="ml-10">{t("common:skills")}</h2>
        <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-16 ml-10 md:pt-18  items-center mt-auto ">
          <div className="flex flex-col justify-center items-center">
            <div className=" h-20 w-16 relative animate-bounce hover:animate-spin">
              <Image src={Html} alt="" layout="fill" objectFit="contain" className="" />
            </div>
            <h3>HTML</h3>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="h-20 w-16   relative animate-bounce hover:animate-spin">
              <Image src={CSS} alt="" layout="fill" className="object-contain" />
            </div>

            <h3>CSS</h3>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="h-20 w-16 relative animate-bounce hover:animate-spin">
              <Image src={Js} alt="" layout="fill" className="object-contain " />
            </div>
            <h3>JavaScript</h3>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="h-20 w-16  relative animate-bounce hover:animate-spin">
              <Image src={ReactLogo} alt="" layout="fill" className="object-contain" />
            </div>
            <h3>React</h3>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="h-20 w-16  relative animate-bounce hover:animate-spin">
              <Image src={expressLogo} alt="" layout="fill" className="object-contain" />
            </div>
            <h3>Express.js</h3>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="h-20 w-16  relative animate-bounce hover:animate-spin">
              <Image src={nodeLogo} alt="" layout="fill" className="object-contain" />
            </div>

            <h3>Node.js</h3>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="h-20 w-16   relative animate-bounce hover:animate-spin">
              <Image src={mongoLogo} alt="" layout="fill" className="object-contain" />
            </div>
            <h3>MongoDB</h3>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="h-20 w-16  relative animate-bounce hover:animate-spin">
              <Image src={githubLogo} alt="" layout="fill" className="object-contain" />
            </div>

            <h3>Github</h3>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="h-20 w-16  relative animate-bounce hover:animate-spin">
              <img src="http://assets.stickpng.com/thumbs/58482acecef1014c0b5e4a1e.png" alt="" layout="fill" className="object-contain" />
            </div>

            <h3>Vue.js</h3>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="h-20 w-16  relative animate-bounce hover:animate-spin ">
              <img src="https://miro.medium.com/max/256/1*RuRQuMUSDUjPCPC_PJS8tg.png" alt="" layout="fill" className="object-contain" />
            </div>

            <h3>Quasar</h3>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="h-20 w-16  relative animate-bounce hover:animate-spin">
              <img src="https://seeklogo.com/images/C/capacitor-logo-DF3634DD70-seeklogo.com.png" alt="" layout="fill" className="object-contain" />
            </div>

            <h3>Capacitor</h3>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="h-20 w-16  relative animate-bounce hover:animate-spin">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Heroku_logo.svg/2560px-Heroku_logo.svg.png"
                alt=""
                layout="fill"
                className="object-contain"
              />
            </div>

            <h3>Heroku</h3>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="h-20 w-16  relative animate-bounce hover:animate-spin">
              <img src="https://www.svgrepo.com/show/331495/netlify.svg" alt="" layout="fill" className="object-contain" />
            </div>

            <h3>Netlify</h3>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="h-20 w-16  relative animate-bounce hover:animate-spin">
              <img
                src="https://aws1.discourse-cdn.com/business20/uploads/forest/original/2X/5/5082a340a4f666fee76b8f818dbbc230ceb92153.png"
                alt=""
                layout="fill"
                className="object-contain"
              />
            </div>

            <h3>Forest admin</h3>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skils;
