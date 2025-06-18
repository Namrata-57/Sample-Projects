import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ message: message, type: type });
    setTimeout(() => setAlert(null), 1500);
  };

  const toogleFunction = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark Mode Enabled", "Sucess"); //alertimg about dark mode
      document.title = "TextUtils- Dark Mode"; //changing title dynamically
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "Sucess");
      document.title = "TextUtils- Light Mode"; //changing title dynamically
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toogleMode={toogleFunction} />
        <Alert alert={alert} />
        <div className="container my-5">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter Your Words"
                  mode={mode}
                />
              }
            />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
        <div>{/* <About /> */}</div>
      </Router>
    </>
  );
}

export default App;
