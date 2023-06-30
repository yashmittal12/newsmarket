import { useState, useEffect } from "react";

const useData = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch(url);
    const json = await data.json();
    setData(json.articles);
    console.log(json);
  };
  if (data.length === 0) return;
  return { data, setData };
};

export default useData;
