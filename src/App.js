import MatrixBackground from "./components/MatrixBackground";
import PasswordGenerator from "./components/PasswordGenerator";
import "./index.css";

function App() {
  return (
    <div className="w-screen h-screen ">
      <PasswordGenerator />
      <MatrixBackground />
    </div>
  );
}

export default App;
