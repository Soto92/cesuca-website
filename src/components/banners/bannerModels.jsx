import React from "react";
import FolderIMG from "../../assets/images/folder.png";
import ElipseIMG from "../../assets/images/elipse.png";
import Button from "../button";

const BannerModels = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          backgroundColor: "#3B9857",
          height: "70px",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            color: "#FFFFFF",
            fontSize: "30px",
            textAlign: "center",
            margin: "0",
          }}
        >
          <strong>Com essas planilhas, você vai conseguir:</strong>
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "100px",
          backgroundColor: "#F2F2F2",
        }}
      >
        <div style={{ marginRight: "250px" }}>
          <img
            src={FolderIMG}
            alt="Folder"
            style={{
              width: "300px",
              height: "280px",
              zIndex: "1",
            }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
            <img
              src={ElipseIMG}
              alt="Elipse"
              style={{
                width: "25px",
                height: "25px",
                zIndex: "1",
                marginRight: "20px",
              }}
            />
            <p
              style={{
                color: "black",
                fontSize: "18px",
                textAlign: "left",
                margin: "0",
              }}
            >
              <strong>Planilhas de Qualificação de Clientes </strong>
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
            <img
              src={ElipseIMG}
              alt="Elipse"
              style={{
                width: "25px",
                height: "25px",
                zIndex: "1",
                marginRight: "20px",
              }}
            />
            <p
              style={{
                color: "black",
                fontSize: "18px",
                textAlign: "left",
                margin: "0",
              }}
            >
              <strong>Planilhas de Qualificação de Clientes </strong>
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
            <img
              src={ElipseIMG}
              alt="Elipse"
              style={{
                width: "25px",
                height: "25px",
                zIndex: "1",
                marginRight: "20px",
              }}
            />
            <p
              style={{
                color: "black",
                fontSize: "18px",
                textAlign: "left",
                margin: "0",
              }}
            >
              <strong>Planilhas de Qualificação de Clientes </strong>
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
      </div>
    </div>
  );
};

export default BannerModels;
