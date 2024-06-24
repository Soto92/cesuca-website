import React from "react";
import MonitorIMG from "../../assets/images/monitor.png";
import Button from "../button";

const BannerQuality = () => {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#F2F2F2",
        padding: "50px",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ marginRight: "60px", maxWidth: "600px" }}>
        <h2 style={{ color: "#004AAD", fontSize: "40px" }}>
          Planilhas de Qualidade
        </h2>
        <p style={{ color: "black", fontSize: "18px" }}>
          <strong>
            Acesso rápido utilizando Google Sheets ou Excel
          </strong>
        </p>
        <p style={{ color: "black", fontSize: "15px" }}>
          PLANILHAS DE QUALIFICAÇÃO DE CLIENTES
        </p>
        <Button
          text="Eu quero"
            onClick={() =>
            window.open(
              "https://hotmart.com/pt-br/marketplace/produtos/arquivos-pre-prontos-para-apresentacoes-tcc-controle-financeiro-curriculo/F83402332H",
              "_blank"
            )
          }
        />
      </div>
      <div style={{ marginLeft: "60px" }}>
        <img
          src={MonitorIMG}
          alt="Monitor"
          style={{
            width: "400px",
            height: "380px",
            zIndex: "1",
          }}
        />
      </div>
    </div>
  );
};

export default BannerQuality;
