import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import "./App.css";

function App() {
  const [markdown, setMarkdown] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  let userInput = () => {
    if (isTyping === true) {
      setMarkdown();
    } else {
      setMarkdown(markdown);
    }
  };

  return (
    <div className="App">
      <div className="navbar">
        <header>Markdown</header>
        <button>save</button>
      </div>
      <div className="body">
        <div className="sidebar">Files</div>
        <textarea
          onChange={(e) => setMarkdown(e.target.value)}
          value={markdown}
          className="textInput"
          placeholder="#type here.."
        ></textarea>
        <ReactMarkdown className="textPreview" source={markdown} />
      </div>
    </div>
  );
}

export default App;
