import AvatarIMG from "../assets/images/avatar.png";
import StarsIMG from "../assets/images/stars.png";

const Rate = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "14px",
        margin: "30px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src={AvatarIMG}
          alt="Hotmart"
          style={{
            height: "100px",
            width: "auto",
          }}
        />
        <div>
          <p style={{ margin: 0, fontWeight: "700", fontSize: "35px" }}>
            João Silva
          </p>
          <img
            src={StarsIMG}
            alt="Hotmart"
            style={{
              height: "auto",
              width: "70px",
            }}
          />
        </div>
      </div>

      <p style={{ margin: 0, marginTop: "20px", fontSize: "35px" }}>
        "melhores planilhas da internet"
      </p>
    </div>
  );
};

export default Rate;
