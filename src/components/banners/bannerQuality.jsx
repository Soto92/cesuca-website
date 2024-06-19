import React from "react"
import MonitorIMG from "../../assets/images/monitor.png"


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
      <img
        src={MonitorIMG}
        alt="Monitor"
        style={{
            width: "400px",
            height: "380px",               
            zIndex: "1",
          
        }}
      />
      <div 
      style={{ marginLeft: "20px", maxWidth: "600px" }}>
        <h2 style={{ color: "#004AAD", fontSize: "40px" }}>
          Planilhas de Qualidade
        </h2>
        <p style={{ color: "black", fontSize: "18px" }}>
        <strong>
        Acesso rápido utilizando Google Sheets ou Excel          
          </strong>
          <p style={{ color: "black", fontSize: "15px" }}>  
          PLANILHAS DE QUALIFICAÇÃO DE CLIENTES
          </p>
        </p>
    </div>
    </div>
    );
};

export default BannerQuality;