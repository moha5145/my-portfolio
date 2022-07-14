import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <section id="footer" className="bg-contactDark  py-10">
      <div className="flex gap-10  justify-center mt-auto ">
        <div className="cursor-pointer hover:opacity-70">
          <Link href="https://www.linkedin.com/in/mohamed-mustafa-96ab84239">
            <a>
              <FiLinkedin size={45} />
            </a>
          </Link>
        </div>

        <div className="cursor-pointer hover:opacity-70">
          <Link href="https://github.com/moha5145">
            <a>
              <FaGithub size={45} />
            </a>
          </Link>
        </div>
      </div>
      <p className="text-sm mt-auto py-4 px-1 text-center">
        Copyright All Right Reserved 2022 <span className="text-red-400">Mohamed MUSTAFA</span>
      </p>
    </section>
  );
};
export default Footer;
