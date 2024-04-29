import HeaderIMG from "../assets/images/header.png";

const Header = () => {
  return (
    <div
      style={{
        width: "100%",
        padding: "10px 0",
        textAlign: "center",
        position: "relative",
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
          transform: "translate(-50%, 250px)",
          zIndex: "2",
          width: "598px",
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
      </div>
    </div>
  );
};

export default Header;
