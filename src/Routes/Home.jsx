import React, { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

const Home = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <main className={state.theme === "dark" ? "dark-theme" : "light-theme"}>
      <h1>Home</h1>
      <div className="card-grid">
        {state.data.map((dentist) => (
          <Card
            key={dentist.id}
            id={dentist.id}
            name={dentist.name}
            username={dentist.username}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;

