import { useContext } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar";
import MainRouter from "../routes/MainRouter";
import Layout from "./Layout";
import { Context } from "../contexts/Context";
import { useLocation } from "react-router-dom";

const App = () => {
  return (
    <Layout>
      <Content />
    </Layout>
  );
};

const Content = () => {
  const { showBar } = useContext(Context);
  const location = useLocation();

  // onde o Header e o Footer não devem ser exibidos
  const hideHeaderFooterRoutes = ["/", "/login"];

  // Verifica se a rota atual está na lista de rotas que não devem exibir o Header e o Footer
  const shouldHideHeaderFooter = hideHeaderFooterRoutes.includes(
    location.pathname
  );

  return (
    <div className="w-full h-full flex">
      {showBar && <Navbar />}
      <div className="w-full h-full flex flex-col">
        {!shouldHideHeaderFooter && <Header />}
        <div className="w-full flex-1">
          <MainRouter />
        </div>
        {!shouldHideHeaderFooter && <Footer />}
      </div>
    </div>
  );
};

export default App;
