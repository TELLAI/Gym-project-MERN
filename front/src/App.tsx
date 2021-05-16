import axios from "axios";
import React, { useEffect, useState } from "react";
import Routes from "./components/Routes";
import { UidContext } from "./components/AppContext";

const App = () => {
  const [uid, setUid] = useState(null);

  useEffect(() => {
    const fetchToken = async () => {
      const result = await axios
        .get(`http://localhost:5000/jwtid`, {
          withCredentials: true,
        })
          setUid(result.data);
    };
    fetchToken();
  }, [uid]);
  return (
    <UidContext.Provider value={uid}>
      <Routes />
    </UidContext.Provider>
  );
};

export default App;
