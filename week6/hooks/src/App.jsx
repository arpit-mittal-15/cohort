import { useMemo, useState } from "react";
import Header from "./Header";
import Wrapper from "./Wrapper";

function App() {
  const [title, setTitle] = useState("my name is arpit");

  const updateTitle = () => {
    setTitle(`My name is ${Math.random()}`);
  };

  return (
    <div>
      <Wrapper>
        This is wrapper child
      </Wrapper>
      <button onClick={updateTitle}>Update Title</button>
      <Header title={title} />
      <Header title="My name is constant" />
      <Header title="My name is constant" />
      <Header title="My name is constant" />
      <Header title="My name is constant" />
    </div>
  );
}

export default App;
