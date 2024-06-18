/**
 * Nomes:
 *          Mauricio Soto
 *          Rodrigo Pereira
 *          Thiago Amaral
 * Cadeira:
 *          Desenvolvimento Web
 */
import "./App.css";
import BannerDiffs from "./components/banners/bannerDiffs";
import BannerGetOurSheets from "./components/banners/bannerGetOurSheets";
import BannerMission from "./components/banners/bannerMission";
import BannerQuality from "./components/banners/bannerQuality";
import BannerSheets from "./components/banners/bannerSheets";
import BannerModels from "./components/banners/bannerModels";
import Footer from "./components/footer";
import Header from "./components/header";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <Header />
      <div style={{ height: "87vh" }} />

      <BannerMission />
      <BannerQuality />
      <BannerSheets />
      <BannerModels />
      <BannerDiffs />
      <BannerGetOurSheets />

      <Footer />
    </div>
  );
};

export default App;
