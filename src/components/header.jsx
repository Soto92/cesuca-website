import HeaderIMG from "../assets/images/header.png";
import Button from "./button";

const Header = () => {
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          width: "100%",
          position: "relative",
          padding: "10px 0",
        }}
      >
        <img
          src={HeaderIMG}
          alt="Logo"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100vw",
            height: "90vh",
            objectFit: "cover",
            zIndex: "1",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "90vh",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            zIndex: "2",
          }}
        />
        <div
          style={{
            margin: "5px 0",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, 110px)",
            zIndex: "2",
            width: "598px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <h1
              style={{
                color: "white",
                fontWeight: "800",
                fontSize: "34px",
              }}
            >
              Tenha controle total das suas finanças e saiba para onde está indo{" "}
              <a style={{ color: "#399A52" }}>seu dinheiro.</a>
            </h1>
            <p style={{ color: "white", fontSize: "30px" }}>
              Não adianta ganhar dinheiro se você não sabe administrá-lo!
            </p>

            <Button
              text="Quero as planilhas"
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
    </div>
  );
};

export default Header;
