import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CarouselItem = ({ title, text }) => {
  return (
    <div
      style={{
        backgroundColor: "#399A52",
        width: "500px",
        height: "320px",
        borderRadius: "10px",
        padding: "16px",
      }}
    >
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
};

const BannerSheets = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const data = [
    {
      title: "DD1",
      text: "bla bla",
    },
    {
      title: "DD 2",
      text: "bla bla",
    },
    {
      title: "DD 3",
      text: "bla bla",
    },
    {
      title: "DD 4",
      text: "bla bla",
    },
    {
      title: "DD 5",
      text: "bla bla",
    },
    {
      title: "DD 6",
      text: "bla bla",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#F2F2F2",
        flexDirection: "column",
        paddingBottom: "30px",
      }}
    >
      <div style={{ padding: "30px" }}>
        <h2>Nossas Planilhas</h2>
        <p>Veja todos nossos modelos</p>
      </div>
      <div>
        <Carousel infinite={true} responsive={responsive}>
          {data.map((item) => (
            <CarouselItem {...item} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default BannerSheets;
