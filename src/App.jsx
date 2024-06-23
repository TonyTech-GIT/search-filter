import { useState } from "react";
import "./App.css";

import { Users } from "./users";
import Table from "./Table";

const App = () => {
  const [query, setQuery] = useState("");

  // console.log(
  //   Users.filter((user) => user.first_name.toLowerCase().includes("fe"))
  // );
  return (
    <div className="app">
      <input
        type="text"
        placeholder="search..."
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      {/* <ul className="list">
        {Users.filter((user) =>
          user.first_name.toLowerCase().includes(query)
        ).map((user) => (
          <li key={user.id} className="listitem">
            {user.first_name}
          </li>
        ))}
      </ul> */}

      <Table />
    </div>
  );
};

export default App;
