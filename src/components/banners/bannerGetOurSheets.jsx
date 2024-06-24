import React from "react";
import Button from "../button";
import Rate from "../rate";

const BannerGetOurSheets = () => {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#DFDFDF",
        padding: "40px",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <p
        style={{
          color: "#004AAD",
          fontSize: "80px",
          fontWeight: "800",
          margin: 0,
        }}
      >
        Adquira as melhores planilhas
      </p>
      <p style={{ fontSize: "48px" }}>Melhor controle a um custo acessível</p>

      <Rate />

      <p style={{ color: "#004AAD", fontSize: "36px" }}>
        Obtenha o mesmo resultado a um click
      </p>

      <div style={{ marginTop: "30px", marginBottom: "30px" }}>
        <p style={{ margin: 0, color: "#004AAD", fontSize: "32px" }}>
          Por apenas:
        </p>
        <p
          style={{
            margin: 0,
            color: "#399A52",
            fontSize: "100px",
            fontWeight: "700",
          }}
        >
          R$ 99,99
        </p>
        <p style={{ margin: 0, fontSize: "26px", textAlign: "end" }}>
          ou em até 12 x de R$ 8,25
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
  );
};

export default BannerGetOurSheets;
