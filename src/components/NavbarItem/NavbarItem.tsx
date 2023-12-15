import Link from "next/link";
import React from "react";

type NavbarItemProps = {
  hrefLink: string;
  text: string;
};
function NavbarItem({ hrefLink, text }: NavbarItemProps) {
  return (
    <li className="hover:scale-110 hover:font-light transition-all duration-150">
      <Link href={hrefLink}>{text}</Link>
    </li>
  );
}

export default NavbarItem;
