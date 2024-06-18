import InstaIMG from "../assets/images/insta.png";
import HotmartIMG from "../assets/images/hotmart.png";

const InstaButton = () => {
  return (
    <a target="_blank" href="https://www.instagram.com/ordem.financeira">
      <img
        src={InstaIMG}
        alt="Insta"
        style={{
          height: "40px",
          width: "auto",
        }}
      />
    </a>
  );
};

const HotmartButton = () => {
  return (
    <a
      style={{ marginLeft: "30px" }}
      target="_blank"
      href="https://hotmart.com/pt-br/marketplace/produtos/arquivos-pre-prontos-para-apresentacoes-tcc-controle-financeiro-curriculo/F83402332H"
    >
      <img
        src={HotmartIMG}
        alt="Hotmart"
        style={{
          height: "40px",
          width: "auto",
        }}
      />
    </a>
  );
};

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#004AAD",
        height: "128px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: "30px",
        paddingRight: "30px",
      }}
    >
      <p
        style={{
          margin: "0",
          textAlign: "center",
          color: "white",
          fontSize: "26px",
        }}
      >
        ©️ Todos os direitos reservados para Ordem Financeira
      </p>

      <div>
        <InstaButton />
        <HotmartButton />
      </div>
    </div>
  );
};

export default Footer;
