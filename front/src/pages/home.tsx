import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:5000/api/meme/read");

      setData(result.data);
      console.log(typeof(result.data));
      console.log(data)
    };

    fetchData();
  }, []);

  let itemsToRender;
  if (data) {
    itemsToRender = data.map((item) => {
      return <div className="memes">
        <h3>{item.name}</h3>
        <img src={item.url} alt="meme" />
        </div>;
    });
  } else {
    itemsToRender = "Loading...";
  }

  return (
    <div className="meme-page">
      <ul className="ul-nav">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/profil">Profil</a>
        </li>
        <li>
          <a href="/upload">Upload</a>
        </li>
        <li>
          <a href="about.asp">About</a>
        </li>
      </ul>
      <div className="meme-lib">{itemsToRender}</div>
    </div>
  );
}

export default App;