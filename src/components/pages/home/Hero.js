import React from "react";
import BackgroundImage from "gatsby-background-image";
import { useStaticQuery, graphql } from "gatsby";
import { Button } from "../../shared/Button";
export const Hero = () => {
  const { images } = useStaticQuery(graphql`
    {
      images: allFile(filter: { relativeDirectory: { eq: "hero-images" } }) {
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
    <BackgroundImage
      Tag="div"
      fluid={images.nodes[0].childImageSharp.fluid}
      className="heroImg"
    >
      <div className="container mx-auto">
        <div className="bg-white bg-opacity-80 sm:w-80 w-64 absolute bottom-1/4  p-5 rounded-lg text-justify ">
          <div className="bg-red w-14 h-0.5"></div>
          <h1 className="font-bold sm:text-3xl text-xl tracking-wide mt-3">
            هدف
            <span className="text-red"> الشركة</span>
          </h1>
          <p className="mt-3 mb-3">
            تسعى الشركة لتبقى الأولى في موثوقية تقديم خدمات توزيع الكهرباء في
            المنطقة.
          </p>
          <Button text="مشاهدة المزيد" />
        </div>
      </div>
    </BackgroundImage>
  );
};
