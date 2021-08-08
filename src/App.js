import React, { useState } from "react";
import "./App.css";
import Form from "./Components/form";
import Modal from "./Components/Modal";

function App() {
  const [modal, setModal] = useState(false);

  const modalOpenHandler = () => {
    setModal(true);
  };

  const modalCloseHandler = () => {
    setModal(false);
  };

  async function AddMovieHandler(info) {
    const res = await fetch(
      "https://funny-bd2b9-default-rtdb.firebaseio.com/funny.json",
      {
        method: "POST",
        body: JSON.stringify(info),

        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const data = await res.json();
    console.log(data);
  }

  return (
    <div className="App">
      <div className="head">Lovely calculator</div>

      <Form onAddData={AddMovieHandler} modal={modalOpenHandler} />

      {modal && <Modal onClose={modalCloseHandler} />}
    </div>
  );
}

export default App;
