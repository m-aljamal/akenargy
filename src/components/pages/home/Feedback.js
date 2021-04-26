import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import { Title } from "../../shared/Title";
import { feedback } from "../../constant/feedback";
import { SingleFeedback } from "./SingleFeedback";
import man from "../../../images/feedback/man.png";
import Slider from "react-slick";

export const Feedback = () => {
  const { image } = useStaticQuery(graphql`
    {
      image: file(name: { eq: "feedback" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <BackgroundImage
      Tag="div"
      fluid={image.childImageSharp.fluid}
      className="heroImg  "
    >
      <div className="  container h-full pt-10 ">
        <Title title="ماذا قالو عنا...؟" text="توصيات وشهادات" />
        <div className=" h flex flex-col justify-between">
          {/* className="grid grid-cols-3   gap-4" */}
          <div>
            <Slider {...settings}>
              {feedback.map((f, i) => (
                <SingleFeedback data={f} key={i} index={i} />
              ))}
            </Slider>
          </div>
          <div
            className="bg-red relative py-3"
            data-sal="flip-down"
            data-sal-easing="easeOutQuad"
            data-sal-delay="300"
            data-sal-duration="1000"
          >
            <img src={man} className="w-48 absolute bottom-0" />
            <div className="justify-between items-center flex text-white">
              <div className="mr-56 border-r-4 border-white pr-4 ">
                <p className="text-2xl">هل تحتاج اي خدمة... !</p>
                <p className="font-bold text-2xl mt-2">
                  لا تتردد يمكنك اﻹتصال بنا في أي وقت.
                </p>
              </div>
              <p className="border-2 ml-12 py-2 px-24 rounded-lg font-bold text-lg">
                تواصل معنا
              </p>
            </div>
          </div>
        </div>
      </div>
    </BackgroundImage>
  );
};
