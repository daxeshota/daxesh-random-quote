import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState({
    text: "You have to fight to reach your dream you have to sacrifice and work hard for it",
    author: "Lionel Messsi",
  });

  const fetchURL = async () => {
    const url = "https://type.fit/api/quotes";
    const res = await fetch(url);
    const response = await res.json();
    console.log(response);
    const no = Math.floor(Math.random() * response.length);
    const main = response[no];

    const data1 = {
      text: main.text,
      author: main.author,
    };
    setData(data1);
  };
  return (
    <>
      <h1 className="my-5 text-center text-secondary">Random Quote Generator</h1>
      <div className="container rounded-4 text-center border border-3 border-secondary p-5">
        <p className="display-6">"{data.text}"</p>
        <p className="h5 m-5">--{data.author}</p>
        <button className=" btn btn-dark rounded p-3" onClick={fetchURL}>
          NEXT
        </button>
      </div>
    </>
  );
}

export default App;
