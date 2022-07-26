import Link from "next/link";

const Card = ({ project, isVideo, setisPlayerIsVisible }) => {
  const technos = project.technos;

  return (
    <div className=" relative group">
      <div
        className="flex flex-col  gap-10
                w-[98%] h-60 sm:h-96 lg:h-[450px]
                md:p10 bg-project2 rounded-lg 
                drop-shadow-md hover:h-auto  "
      >
        <div className="relative">
          <div className="w-full h-60 sm:h-96 md:96 lg:h-[450px]">
            <img src={project.img} alt="" className=" rounded-t-md w-full h-[100%] object-cover object-top " />
          </div>
          <div className="flex w-full justify-around px-1 z-10 bg-slate-500 absolute bottom-0 ">
            {technos &&
              technos.map((techno, index) => {
                return <img src={techno.link} alt="/" width={25} height={25} key={index} className="py-2" />;
              })}
          </div>
        </div>
      </div>

      <div
        className=" group-hover:visible invisible  absolute top-0
                    left-0 h-[120%] w-[98%] rounded-md px-2 pb-2 md:px-10 flex flex-col justify-around
                  bg-slate-500 opacity-95"
      >
        <h3 className=" ">{project.title}</h3>
        <p>{project.description} </p>
        {!isVideo ? (
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
        ) : (
          <div className="text-center">
            <button
              onClick={() => {
                setisPlayerIsVisible(true);
              }}
              className="hover:opacity-80 border-2 rounded-md 
                        opacity-100 font-bold md:text-xl p-2 md:px-10 
                      text-white hover:bg-white hover:text-black"
            >
              Play
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default Card;
