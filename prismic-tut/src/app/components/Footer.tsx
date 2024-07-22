import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import Bounded from "./Bounded";

export default async function Footer() {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <Bounded as="footer">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
        <Link href={"/"}>
          <Logo />
        </Link>
        <p>
          &copy; {new Date().getFullYear()} {settings.data.site_title}
        </p>
        <ul className="flex">
          {settings.data.navigation.map(({ label, link }) => (
            <li key={label}>
              <PrismicNextLink className="p-3" field={link}>{label}</PrismicNextLink>
            </li>
          ))}
        </ul>
      </div>
    </Bounded>
  );
}
