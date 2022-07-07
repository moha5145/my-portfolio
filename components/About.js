import Image from "next/image";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import img from "../public/assets/skills/html-css-js.png";

const About = () => {
  return (
    <section id="about" className=" bg-about  h-[100%] md:h-screen py-20 ">
      <div className="flex flex-col-reverse md:flex-row container px-3 mx-auto gap-20">
        <div className="flex-3 items-start flex flex-col gap-10">
          <h2>About</h2>

          <h1>Who i am</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ipsam esse, magni optio atque repellendus quasi incidunt perferendis quam reiciendis,
            omnis quod! Quam dignissimos incidunt culpa, voluptatum voluptate voluptas est? Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            assumenda voluptate, ea eligendi culpa soluta tempore ratione expedita cum laborum voluptatum,
          </p>
          <p>
            iure repellat enim quisquam totam placeat eaque ipsum incidunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem perferendis,
            numquam, rerum obcaecati odio sapiente voluptates odit ad ducimus illum nostrum magnam expedita molestiae tempore maiores nihil omnis, facilis iure.
          </p>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, minus ipsam mollitia consequuntur error modi ipsum quos iusto enim sunt
            distinctio sapiente excepturi, dolor voluptatem nemo molestias quam placeat maiores.
          </p>
        </div>
        <div className="flex-2">
          <Image src={img} alt="" />
        </div>
      </div>

      <div className=" hover:opacity-70  cursor-pointer flex justify-center py-10 md:py-32">
        <a href="/files/cv.pdf" download target="_blank" rel="noopener noreferrer" className=" flex items-center gap-2">
          <span className="text-white">
            <HiOutlineDocumentDownload size={70} />
          </span>
          <span className=" text-4xl">CV</span>
        </a>
      </div>
    </section>
  );
};
export default About;
