import React from "react";

function Play() {
  return (
    <div style={{ display: "block", marginLeft: "400px" }}>
      <iframe
        width="800"
        height="500"
        src="https://www.youtube.com/embed/l9EXQF2ZuWQ"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default Play;
