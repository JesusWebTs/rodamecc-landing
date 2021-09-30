import "./App.css";
import { Header } from "./components";
import { ServicesPage, AboutPage } from "./pages";

function App() {
  return (
    <div className="App">
      <Header />
      <ServicesPage />
      <AboutPage />
    </div>
  );
}

export default App;
