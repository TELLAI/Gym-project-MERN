import React, { useContext, useState, useEffect } from "react";
import Log from "../components/Log";
import { UidContext } from "../components/AppContext";
import imgMario from "../mario2.png";
import axios from "axios"

const Profil = () => {
  const uid = useContext(UidContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:5000/api/meme/profil", {
        withCredentials: true
      });

      setData(result.data);
      console.log(result.data);
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
      {uid == null ? (
        <div className="log-container">
          <Log signin={false} signup={true} />
        </div>
      ) : (
        <div className="meme-lib">{itemsToRender}</div>
      )}
    </div>
  );
};

export default Profil;
