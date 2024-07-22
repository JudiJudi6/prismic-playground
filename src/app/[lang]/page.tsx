import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { LanguageSwitcher } from "../components/LanguageSwitcher";
import { getLocales } from "@/utils/getLocales";

export default async function Page({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const client = createClient();
  const page = await client.getSingle("homepage", { lang });
  const locales = await getLocales(page, client);

  return (
    <>
      <SliceZone slices={page.data.slices} components={components} />{" "}
      <LanguageSwitcher locales={locales} />
    </>
  );
}

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("homepage", { lang });

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}