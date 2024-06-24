import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import IconIMG from "../../assets/images/icon.png";

const CarouselItem = ({ title, text }) => {
  return (
    <div
      style={{
        backgroundColor: "#DFDFDF",
      }}
    >
      <div
        style={{
          backgroundColor: "#399A52",
          height: "250px",
          borderRadius: "10px",
          padding: "20px",
          margin: "14px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              backgroundColor: "white",
              padding: "10px",
              borderRadius: "90px",
              width: "74px",
              height: "74px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <img
              src={IconIMG}
              alt="logo"
              style={{
                width: "50px",
                height: "50px",
              }}
            />
          </div>
          <div style={{ marginLeft: "10px" }}>
            <p
              style={{
                color: "white",
                fontSize: "30px",
                display: "flex",
                margin: 0,
              }}
            >
              {title}
            </p>
          </div>
        </div>

        <p style={{ color: "white", fontSize: "22px" }}>{text}</p>
      </div>
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
      title: "Fluxo de caixa",
      text: "Texto Referente",
    },
    {
      title: "Apresentações corporativas",
      text: "Texto Referente",
    },
    {
      title: "Resumo executivo",
      text: "Texto Referente",
    },
    {
      title: "Fluxo de caixa",
      text: "Texto Referente",
    },
    {
      title: "Apresentações corporativas",
      text: "Texto Referente",
    },
    {
      title: "Resumo executivo",
      text: "Texto Referente",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#DFDFDF",
        flexDirection: "column",
        paddingBottom: "30px",
      }}
    >
      <div
        style={{
          padding: "30px",
          alignSelf: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2 style={{ color: "#004AAD" }}>Nossas Planilhas</h2>
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
