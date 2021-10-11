import "./App.css";
import { Banner, Header } from "./components";
import Footer from "./components/Footer";
import { ServicesPage, AboutPage, ContactPage } from "./pages";
import logo from "./Assets/imgs/logos/Small.svg";
import heroImage from "./Assets/imgs/hero-img.gif";

function App() {
  return (
    <div className="App">
      <Header text={"Rodamecc"} src={heroImage} />
      <ServicesPage id="services" />
      <AboutPage id="about" />
      <Banner text="CLIENTES" />
      <ContactPage id="contact" />
      <Footer
        logo={logo}
        text="Suministros de partes electromecanicas Rodamecc. Copyright ©. Todos los derechos reservados."
      />
    </div>
  );
}

export default App;
