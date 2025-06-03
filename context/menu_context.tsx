import { useState } from "react";
import { createContext } from "vm";

export const MenuContext = createContext();

const MenuContextProvider = ({children}) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    console.log('toggle clicked');
    setOpen((prev) => !prev);
  }

  return 

};

export default MenuContextProvider;