import PropTypes from "prop-types";
import { useState } from "react";

const TextForm = (props) => {
  const upperCaseBtn = () => {
    let newWords = words.toUpperCase();
    setWords(newWords);
    props.showAlert("Converted to Upper Case !", "Success");
  };

  const lowerCaseBtn = () => {
    let lowerwords = words.toLowerCase();
    setWords(lowerwords);
    props.showAlert("Converted to Lower Case !", "Success");
  };

  const clearBtn = () => {
    setWords("");
    props.showAlert("All Text Clear !!", "Success");
  };

  const copyBtn = () => {
    let words = document.getElementById("exampleFormControlTextarea1");
    words.select();
    navigator.clipboard.writeText(words.value);
    props.showAlert("Text Copied!", "Success");
  };

  const trimBtn = () => {
    let newWord = words.split(/[ ]+/);
    setWords(newWord.join(" "));
    props.showAlert("Extra Spaced Trim !!", "Success");
  };

  const changeWords = (event) => {
    setWords(event.target.value);
  };

  const [words, setWords] = useState("");
  return (
    <>
      <div style={{ color: props.mode === "light" ? "black" : "white" }}>
        <h3>{props.heading}</h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={words}
            onChange={changeWords}
            id="exampleFormControlTextarea1"
            rows="9"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "grey",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
        </div>
        <button
          className="btn btn-dark mx-2 my-1"
          style={{
            backgroundColor: props.mode === "light" ? "#7CC1D7" : "black",
            color: props.mode === "light" ? "black" : "white",
          }}
          onClick={upperCaseBtn}
        >
          Convert To UpperCase
        </button>
        <button
          className="btn btn-dark mx-2 my-1"
          style={{
            backgroundColor: props.mode === "light" ? "#7CC1D7" : "black",
            color: props.mode === "light" ? "black" : "white",
          }}
          onClick={lowerCaseBtn}
        >
          Convert To LowerCase
        </button>
        <button
          className="btn btn-dark mx-2 my-1"
          style={{
            backgroundColor: props.mode === "light" ? "#7CC1D7" : "black",
            color: props.mode === "light" ? "black" : "white",
          }}
          onClick={clearBtn}
        >
          Clear All
        </button>
        <button
          className="btn btn-dark mx-2 my-1"
          style={{
            backgroundColor: props.mode === "light" ? "#7CC1D7" : "black",
            color: props.mode === "light" ? "black" : "white",
          }}
          onClick={copyBtn}
        >
          Copy
        </button>
        <button
          className="btn btn-dark mx-2 my-1"
          style={{
            backgroundColor: props.mode === "light" ? "#7CC1D7" : "black",
            color: props.mode === "light" ? "black" : "white",
          }}
          onClick={trimBtn}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className={`container my-3 text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <p>
          {
            words.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {words.length} characters
        </p>
        <p>{0.008 * words.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{words}</p>
      </div>
    </>
  );
};

export default TextForm;

TextForm.propTypes = {
  heading: PropTypes.string,
  mode: PropTypes.string,
  showAlert: PropTypes.bool,
};
