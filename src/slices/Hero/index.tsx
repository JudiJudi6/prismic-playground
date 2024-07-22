import Bounded from "@/app/components/Bounded";
import Button from "@/app/components/Button";
import Heading from "@/app/components/Heading";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";

const components: JSXMapSerializer = {
  heading1: ({ children }) => (
    <Heading
      as="h1"
      size="xl"
      className="mb-4 md:mb-8 mt-12 first:mb-0 last:mb-0"
    >
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className="text-2xl font-normal leading-10 text-slate-600 mb-4 md:mb-8 max-w-md">
      {children}
    </p>
  ),
};

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <>
      {slice.variation === "default" && (
        <Bounded
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
        >
          <div className="grid grid-cols-1 place-items-center text-center">
            <PrismicRichText
              field={slice.primary.heading}
              components={components}
            />
            <PrismicRichText
              field={slice.primary.body}
              components={components}
            />
            <Button field={slice.primary.button_link} className="mb-8 md:mb-10">
              {slice.primary.button_text}
            </Button>
            <PrismicNextImage
              field={slice.primary.image}
              className="drop-shadow-xl max-w-4xl w-full"
            />
          </div>
        </Bounded>
      )}
      {slice.variation === "horizontal" && (
        <Bounded
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
            <div className="grid grid-rows-[1fr_auto_auto] h-fit">
              <PrismicRichText
                field={slice.primary.heading}
                components={components}
              />
              <PrismicRichText
                field={slice.primary.body}
                components={components}
              />
              <Button
                field={slice.primary.button_link}
                className="mb-8 md:mb-10"
              >
                {slice.primary.button_text}
              </Button>
            </div>
            <PrismicNextImage
              field={slice.primary.image}
              className="drop-shadow-xl max-w-4xl w-full"
            />
          </div>
        </Bounded>
      )}
    </>
  );
};

export default Hero;