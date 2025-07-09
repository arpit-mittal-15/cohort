import { createContext } from "react";

const newContext = createContext(0);

export default newContext;

// the problem is it still re renders all the components.
// so we use state management libs.