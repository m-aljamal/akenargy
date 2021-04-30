import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Image } from "./Image";
import { Button } from "../../shared/Button";
import { Title } from "../../shared/Title";

export const ImagesSection = () => {
  const { images } = useStaticQuery(graphql`
    {
      images: allFile(filter: { relativeDirectory: { eq: "imageGalery" } }) {
        nodes {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1900) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);
  return (
    <div className="bg-lightGray text-center py-10 relative">
      <Title title="ما الجديد...؟" text="ألبوم صور خدماتنا" />
      <div className="flex container mt-10">
        <div className="w-2/4 ml-4 " data-sal="slide-up">
          <Image
            image={images.nodes[3].childImageSharp.fluid}
            text="إعادة تأهيل محطة الراعي"
            link="#"
            options="h-full"
            textStyle="text-xl"
            linkStyle="md:w-16 w-8"
          />
        </div>

        <div className="w-2/4">
          <div className="flex" data-sal="slide-down">
            <Image
              image={images.nodes[1].childImageSharp.fluid}
              text="إعادة تأهيل محطة الراعي"
              link="#"
              options="w-2/4"
              textStyle="md:text-md text-xs"
              linkStyle="md:w-8 w-4"
            />

            <Image
              image={images.nodes[0].childImageSharp.fluid}
              text="إعادة تأهيل محطة الراعي"
              link="#"
              options="w-2/4 mr-3"
              textStyle="md:text-md text-xs"
              linkStyle="md:w-8 w-4"
            />
          </div>
          <div data-sal="slide-left">
            <Image
              image={images.nodes[2].childImageSharp.fluid}
              text="إعادة تأهيل محطة الراعي"
              link="#"
              options="mt-3"
              textStyle="md:text-lg text-xs"
              linkStyle="md:w-12 w-8"
            />
          </div>
        </div>
      </div>
      <div data-sal="fade">
        <Button text="مشاهدة جميع الصور" otherStyles="mt-8 w-48" />
      </div>
    </div>
  );
};
