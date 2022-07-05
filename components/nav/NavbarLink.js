import Link from "next/link";
import { useRouter } from "next/router";

const NavbarLink = ({ path, icon, name, color }) => {
  const router = useRouter();
  console.log(router.asPath);
  return (
    <Link href={path} className="">
      <li className={`${path === "/" && "bg-main"} cursor-pointer py-10 border-b-[0.5px]  inline-flex hover:opacity-60 link`}>
        <span className="mx-2">{icon}</span>
        <span className=" md:visible invisible">{name}</span>
      </li>
    </Link>
  );
};
export default NavbarLink;
