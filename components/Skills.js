import Image from "next/image";
import Html from "../public/assets/skills/html.png";
import CSS from "../public/assets/skills/css.png";
import Js from "../public/assets/skills/javascript.png";

import ReactLogo from "../public/assets/skills/react.png";

import nodeLogo from "../public/assets/skills/node.png";

import expressLogo from "../public/assets/skills/express.png";
import githubLogo from "../public/assets/skills/github.png";
import mongoLogo from "../public/assets/skills/mongo.png";

const Skils = () => {
  return (
    <section id="skills" className=" bg-skills h-[100%] md:h-screen w-full text-center p-2 md:py-20 text-slate-400  ">
      <div className="container mx-auto flex flex-col md:gap-28 gap-5">
        <h2 className="ml-10">What can do</h2>
        <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5   ml-10">
          <div className="flex flex-col justify-center items-center">
            <div className="md:h-50 md:w-46 sm:h-40 sm:w-36 h-32 w-28 relative">
              <Image src={Html} alt="" layout="fill" objectFit="contain" className="" />
            </div>
            <h3>HTML</h3>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="md:h-50 md:w-46 sm:h-40 sm:w-36 h-32 w-28   relative">
              <Image src={CSS} alt="" layout="fill" className="object-contain" />
            </div>

            <h3>CSS</h3>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="md:h-50 md:w-46 sm:h-40 sm:w-36 h-32 w-28 relative">
              <Image src={Js} alt="" layout="fill" className="object-contain " />
            </div>
            <h3>JavaScript</h3>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="md:h-50 md:w-46 sm:h-40 sm:w-36 h-32 w-28   relative">
              <Image src={ReactLogo} alt="" layout="fill" className="object-contain" />
            </div>
            <h3>React</h3>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="md:h-50 md:w-46 sm:h-40 sm:w-36 h-32 w-28   relative">
              <Image src={expressLogo} alt="" layout="fill" className="object-contain" />
            </div>
            <h3>Express.js</h3>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="md:h-50 md:w-46 sm:h-40 sm:w-36 h-32 w-28   relative">
              <Image src={nodeLogo} alt="" layout="fill" className="object-contain" />
            </div>

            <h3>Node.js</h3>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="md:h-50 md:w-46 sm:h-40 sm:w-36 h-32 w-28   relative">
              <Image src={mongoLogo} alt="" layout="fill" className="object-contain" />
            </div>
            <h3>MongoDB</h3>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="md:h-50 md:w-46 sm:h-40 sm:w-36 h-32 w-28  relative">
              <Image src={githubLogo} alt="" layout="fill" className="object-contain" />
            </div>

            <h3>Github</h3>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skils;
