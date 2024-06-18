import React from "react";
import PersonsIMG from "../../assets/images/persons.png";

const BannerMission = () => {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#004AAD",
        padding: "50px",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src={PersonsIMG}
        alt="Persons"
        style={{
          width: "360px",
          height: "250px",
          zIndex: "1",
        }}
      />
      <div style={{ marginLeft: "20px", maxWidth: "600px" }}>
        <h2 style={{ color: "white", fontSize: "40px" }}>
          Qual o nosso Objetivo?
        </h2>
        <p style={{ color: "white", fontSize: "20px" }}>
          Foco em facilitar e otimizar o dia-a-dia de pessoas com arquivos
          pré-prontos para serem usados no{" "}
          <strong>
            {" "}
            trabalho, faculdade, escola e planilhas de controle financeiro
            pessoal.
          </strong>
        </p>
      </div>
    </div>
  );
};

export default BannerMission;
