import React from "react";
import PcIMG from "../../assets/images/pc.png";
import Button from "../button";

const BannerModels = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          backgroundColor: "#F2F2F2",
          height: "150px",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            color: "#004AAD",
            fontSize: "50px",
            textAlign: "center",
            margin: "2",
          }}
        >
          <h1>Nossos diferenciais</h1>
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "0px",
          backgroundColor: "#F2F2F2",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "30px" }}>
            <p
              style={{
                color: "#004AAD",
                fontSize: "25px",
                textAlign: "left",
                margin: "0",
              }}
            >
              <strong>Nossos Diferencias aumentado </strong>
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "30px" }}>
            <p
              style={{
                color: "#004AAD",
                fontSize: "25px",
                textAlign: "left",
                margin: "0",
              }}
            >
              <strong>Nossos Diferencias aumentado </strong>
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "60px" }}>
            <p
              style={{
                color: "#004AAD",
                fontSize: "25px",
                textAlign: "left",
                margin: "0",
              }}
            >
              <strong>Nossos Diferencias aumentado </strong>
            </p>
          </div>
          <Button
            text="Eu quero!"
            onClick={() =>
              window.open(
                "https://hotmart.com/pt-br/marketplace/produtos/arquivos-pre-prontos-para-apresentacoes-tcc-controle-financeiro-curriculo/F83402332H",
                "_blank"
              )
            }
          />
        </div>
        <div style={{ marginLeft: "0px" }}>
          <img
            src={PcIMG}
            alt="Pc"
            style={{
              width: "500px",
              height: "480px",
              zIndex: "0",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default BannerModels;
