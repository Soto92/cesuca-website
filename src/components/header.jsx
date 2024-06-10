import HeaderIMG from "../assets/images/header.png";

const Button = () => {
  return (
    <div
      onClick={() => alert("WOW")}
      style={{
        display: "flex",
        backgroundColor: "#399A52",
        justifyContent: "center",
        width: "470px",
        cursor: "pointer",
        height: "97px",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          backgroundColor: "#004AAD",
          borderRadius: "10px",
          width: "450px",
          height: "87px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <strong
          style={{
            fontSize: "35px",
            color: "white",
          }}
        >
          Quero as planilhas
        </strong>
      </div>
    </div>
  );
};

const Header = () => {
  return (
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
          transform: "translate(-50%, 250px)",
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

          <Button />
        </div>
      </div>
    </div>
  );
};

export default Header;
