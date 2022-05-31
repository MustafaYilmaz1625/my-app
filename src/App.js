import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("Mustafa");
  const [age, setAge] = useState(30);
  const [friends, setFriends] = useState(["Ahmet", "Murat"]);
  const [addres, setAddres] = useState({ title: "istanbul", zip: "3456" });

  return (
    <div className="App">
      <h1>Merhaba {name}!</h1>
      <h2>{age}</h2>

      <button onClick={() => setName("Ahmet")}>Change name</button>
      <button onClick={() => setAge(25)}>Change age</button>
      <hr />
      <br></br>

      <h2>Friends</h2>

      {friends.map((friend, index) => (
        <div key={index}>{friend}</div>
      ))}
      <br />
      <button onClick={() => setFriends([...friends, "Ayse"])}>
        add new friend
      </button>

      <hr />
      <br></br>
      <h2>Addres</h2>
      <div>
        {addres.title} {addres.zip}
      </div>
      <br />
      <button onClick={() => setAddres({ ...addres, title: "ankara" })}>
        change the addres
      </button>
    </div>
  );
}

export default App;
