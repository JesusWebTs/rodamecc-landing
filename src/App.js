import "./App.css";
import { Banner, Header } from "./components";
import { ServicesPage, AboutPage, ContactPage } from "./pages";

function App() {
  return (
    <div className="App">
      <Header />
      <ServicesPage />
      <AboutPage />
      <Banner text="0 Clientes Satisfechos." />
      <ContactPage />
    </div>
  );
}

export default App;
