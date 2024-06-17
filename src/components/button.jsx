const Button = ({ text, onClick }) => {
  return (
    <div
      onClick={onClick}
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
          {text}
        </strong>
      </div>
    </div>
  );
};

export default Button;
