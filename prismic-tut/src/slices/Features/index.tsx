"use client";

import Bounded from "@/app/components/Bounded";
import Heading from "@/app/components/Heading";
import { Content } from "@prismicio/client";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import { CiCalendar } from "react-icons/ci";
import { BsFileBarGraph } from "react-icons/bs";
import { PiCloverThin } from "react-icons/pi";
import { FaRegHourglass } from "react-icons/fa6";
import { motion } from "framer-motion";

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading as="h2" size="md" className="text-center mb-12 ">
      {children}
    </Heading>
  ),
  heading3: ({ children }) => (
    <Heading
      as="h3"
      size="sm"
      className="text-center mb-3 font-medium sm:text-left"
    >
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className="text-base font-medium text-slate-600 sm:text-left text-center">
      {children}
    </p>
  ),
};

const icons = {
  calendar: <CiCalendar size={80} color="#33df2a" />,
  bargraph: <BsFileBarGraph size={80} color="#33df2a" />,
  clover: <PiCloverThin size={80} color="#33df2a" />,
  hourglass: <FaRegHourglass size={80} color="#33df2a" />,
};

export type FeaturesProps = SliceComponentProps<Content.FeaturesSlice>;

/**
 * Component for "Features" Slices.
 */
const Features = ({ slice }: FeaturesProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <motion.div
        whileInView={{ translateY: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        initial={{
          translateY: "50px",
          opacity: 0,
        }}
        transition={{ ease: "easeInOut", duration: 0.3, }}
      >
        <PrismicRichText
          components={components}
          field={slice.primary.heading}
        />
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 max-w-5xl gap-x-8 gap-y-12 mx-auto sm:place-items-start place-items-center">
        {slice.primary.card.map((item, i) => (
          <div
            key={i}
            className="max-w-xs grid sm:place-items-start place-items-center"
          >
            {item.icon && <div className="mb-4">{icons[item.icon]}</div>}
            <PrismicRichText components={components} field={item.title} />
            <PrismicRichText components={components} field={item.description} />
            <p>Dupa</p>
          </div>
        ))}
      </div>
    </Bounded>
  );
};

export default Features;
