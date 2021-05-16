import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios({
        method : `GET`,
        url : "http://localhost:5000/api/meme/category",
        data : {
          category : category
        }
      });

      setData(result.data);
      console.log(typeof result.data);
      console.log(data);
    };

    fetchData();
  }, []);

  let itemsToRender;
  if (data) {
    itemsToRender = data.map((item) => {
      return (
        <div className="memes">
          <h3>{item.name}</h3>
          <img src={item.url} alt="meme" />
        </div>
      );
    });
  } else {
    itemsToRender = "Loading...";
  }

  return (
    <div>
      <ul className="ul-nav">
        <li>
          <a href="default.html">Home</a>
        </li>
        <li>
          <a href="news.asp">News</a>
        </li>
        <li>
          <a href="contact.asp">Contact</a>
        </li>
        <li>
          <a href="about.asp">About</a>
        </li>
      </ul>
      {itemsToRender}
    </div>
  );
}

export default App;
