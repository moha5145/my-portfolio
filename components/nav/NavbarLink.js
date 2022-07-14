import Link from "next/link";

const NavbarLink = ({ path, icon, name, border }) => {
  return (
    <Link href={path} className="">
      <li
        className={`${path === "/" && "bg-main"} 
                      ${border && "border-b-[0.5px]"} cursor-pointer py-8 md:py-10 inline-flex hover:opacity-60 link`}
      >
        <span className="mx-2">{icon}</span>
        <span className=" md:visible invisible">{name}</span>
      </li>
    </Link>
  );
};
export default NavbarLink;
