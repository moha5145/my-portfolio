import Image from "next/image";
import Link from "next/link";
import ProjectImg from "../../public/assets/skills/css.png";
import ReactLogo from "../../public/assets/skills/react.png";
import MongoLogo from "../../public/assets/skills/mongo.png";
import ExpressLogo from "../../public/assets/skills/express.png";
import SassLogo from "../../public/assets/skills/sass.png";
import NodeLogo from "../../public/assets/skills/node.png";

const Card = ({ project }) => {
  // console.log(project.img);
  const technos = project.technos;
  // console.log(technos);
  return (
    <Link href={project.github}>
      <div className=" relative group">
        <div
          className="flex flex-col justify-between 
                w-72 h-max md:w-[500px]  md:h-auto
                md:p10 bg-project2 rounded-lg 
                drop-shadow-md shrink-0 
              
                 hover:h-auto  "
        >
          <div>
            <div className="w-58 h-58">
              <img src={project.img} alt="" className=" rounded-t-md" />
            </div>
            <div className="flex gap-2 px-1 pt-2 justify-center bg-slate-500 ">
              {/* {console.log(project.technos)} */}
              {technos &&
                technos.map((techno) => {
                  // console.log(techno.link);
                  return <img src={techno.link} alt="/" width={40} height={40} />;
                })}
            </div>
          </div>
          <h3 className=" p-3">{project.title}</h3>

          <div className="px-2">
            <p>{project.description} </p>
            <div className="flex justify-between items-stretch p-3  lg:invisible ">
              <Link href={project.github}>
                <button className=" border-2 p-1 rounded-md opacity-100 py-2 px-5 bg-white text-black hover:text-white hover:bg-projectsDark">Github</button>
              </Link>

              <Link href={project.link}>
                <button className=" border-2 p-1 rounded-md opacity-100 py-2 px-5 text-white hover:bg-white hover:text-black">Live Demo</button>
              </Link>
            </div>
          </div>
        </div>

        <div className=" group-hover:md:visible invisible cursor-pointer absolute top-0 left-0 w-full h-full rounded-md flex justify-around items-center bg-slate-500 opacity-80">
          {/* <div className="flex justify-between items-center p-3 opacity-100 "> */}
          <Link href={project.github}>
            <button className="hover:opacity-80 border-2 p-1 rounded-md opacity-100 font-bold text-2xl py-2 px-5 bg-white text-black hover:text-white hover:bg-slate-500">
              Github
            </button>
          </Link>

          <Link href={project.link}>
            <button className="hover:opacity-80 border-2 p-1 rounded-md opacity-100 font-bold text-2xl py-2 px-5 text-white hover:bg-white hover:text-black">
              Live Demo
            </button>
          </Link>
          {/* </div> */}
        </div>
      </div>
    </Link>
  );
};
export default Card;
