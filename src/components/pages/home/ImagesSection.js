import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Image } from "./Image";
import { Button } from "../../shared/Button";
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
    <div className="bg-lightGray text-white text-center py-10 relative">
      <p className="text-lg">ما الجديد...؟</p>
      <h2 className="font-bold text-2xl">
        ألبوم صور خدماتنا<span className="text-red">.</span>
      </h2>
      <div className="absolute w-16 h-24 top-6 right  border-2 border-red opacity-80"></div>
      <div className="flex container mt-10">
        <div className="w-2/4 ml-4 ">
          <Image
            image={images.nodes[2].childImageSharp.fluid}
            text="إعادة تأهيل محطة الراعي"
            link="#"
            options="h-full"
            textStyle="text-xl"
            linkStyle="w-16"
          />
        </div>
        <div className="w-2/4">
          <div className="flex">
            <Image
              image={images.nodes[1].childImageSharp.fluid}
              text="إعادة تأهيل محطة الراعي"
              link="#"
              options="w-2/4"
              textStyle="text-md"
              linkStyle="w-8"
            />

            <Image
              image={images.nodes[0].childImageSharp.fluid}
              text="إعادة تأهيل محطة الراعي"
              link="#"
              options="w-2/4 mr-3"
              textStyle="text-md"
              linkStyle="w-8"
            />
          </div>

          <Image
            image={images.nodes[3].childImageSharp.fluid}
            text="إعادة تأهيل محطة الراعي"
            link="#"
            options="mt-3"
            textStyle="text-lg"
            linkStyle="w-12"
          />
        </div>
      </div>
      <Button text="مشاهدة جميع الصور" otherStyles="mt-8 w-48" />
    </div>
  );
};
