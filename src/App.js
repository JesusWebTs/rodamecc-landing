import "./App.css";
import { Header } from "./components";
import { ServicesPage, About } from "./pages";

function App() {
  return (
    <div className="App">
      <Header />
      <ServicesPage />
      <About />
    </div>
  );
}

export default App;
