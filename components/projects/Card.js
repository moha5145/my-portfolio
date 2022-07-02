import Image from "next/image";
import Link from "next/link";
import ProjectImg from "../../public/assets/skills/css.png";

const Card = ({ project }) => {
  // console.log(project.img);
  return (
    <Link href={project.github}>
      <div
        className="flex flex-col justify-between 
                w-72 h-96 md:w-96  md:h-auto
                md:p10 bg-project2 rounded-lg 
                drop-shadow-md shrink-0 
              
                 hover:h-auto hover:position-fixed cursor-pointer hover:opacity-60"
      >
        <div className="w-58 h-56">
          {/* <Image src={ProjectImg} objectFit="cover" layout="fill" /> */}
          <img src={project.img} alt="" className=" rounded-t-md" />
          <h3 className=" p-3">{project.title}</h3>
        </div>

        <div className="px-2">
          <p>{project.description} </p>

          <div className="flex justify-between p-3 ">
            <Link href={project.github}>
              <button className="hover:border-2 p-1 rounded-md opacity-100">github</button>
            </Link>

            <Link href={project.link}>
              <button className="hover:border-2 p-1 rounded-md opacity-100">Live Demo</button>
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default Card;
