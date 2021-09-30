import "./App.css";
import { Banner, Header } from "./components";
import Footer from "./components/Footer";
import { ServicesPage, AboutPage, ContactPage } from "./pages";

function App() {
  return (
    <div className="App">
      <Header />
      <ServicesPage />
      <AboutPage />
      <Banner text="0 Clientes Satisfechos." />
      <ContactPage />
      <Footer text="Todos los derechos reservados." />
    </div>
  );
}

export default App;
