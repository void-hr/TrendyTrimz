import { useContext, createContext } from "react";
import Sidebar from "../components/Sidebar";
//create context
export const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
  return <SidebarContext.Provider>SidebarProvider</SidebarContext.Provider>;
};

export default SidebarProvider;
