import Image from "next/image";
import Link from "next/link";
import ProjectImg from "../../public/assets/skills/css.png";
import ReactLogo from "../../public/assets/skills/react.png";
import MongoLogo from "../../public/assets/skills/mongo.png";
import ExpressLogo from "../../public/assets/skills/express.png";
import SassLogo from "../../public/assets/skills/sass.png";
import NodeLogo from "../../public/assets/skills/node.png";

const Card = ({ project }) => {
  const technos = project.technos;

  return (
    <div className=" relative group">
      <div
        className="flex flex-col justify-between  gap-10
                w-[98%] h-max 
                md:p10 bg-project2 rounded-lg 
                drop-shadow-md hover:h-auto  "
      >
        <div>
          <div className="w-62 h-66">
            <img src={project.img} alt="" className=" rounded-t-md" />
          </div>
          <div className="flex gap-2 px-1 py-2 justify-around bg-slate-500 ">
            {technos &&
              technos.map((techno, index) => {
                return <img src={techno.link} alt="/" width={25} height={25} key={index} />;
              })}
          </div>
        </div>
      </div>

      <div
        className=" group-hover:visible invisible  absolute top-0 
                    left-0 h-full w-[98%] rounded-md px-2 pb-2 flex flex-col justify-around
                  bg-slate-500 opacity-95"
      >
        <h3 className=" p-3">{project.title}</h3>
        <p>{project.description} </p>
        <div className="flex justify-between ">
          <Link href={project.github}>
            <a
              target="_blank"
              className="hover:opacity-80 border-2  rounded-md opacity-100 
                        font-bold md:text-xl p-2 md:px-10 bg-white text-black 
                      hover:text-white hover:bg-slate-500"
            >
              Github
            </a>
          </Link>

          <Link href={project.link}>
            <a
              target="_blank"
              className="hover:opacity-80 border-2 rounded-md 
                        opacity-100 font-bold md:text-xl p-2 md:px-10 
                      text-white hover:bg-white hover:text-black"
            >
              Live Demo
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Card;
