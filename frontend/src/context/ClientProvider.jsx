import { createContext, useRef, useState } from "react";

export const ClientContext = createContext();

const ClientProvider = ({ children }) => {
  const [allClientDetails, setAllClientDetails] = useState([]);
  const [clientDetails, setClientDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    project: "",
  });
  const [formButtonText, setFormButtonText] = useState(true);

  return (
    <ClientContext.Provider
      value={{
        allClientDetails,
        setAllClientDetails,
        clientDetails,
        setClientDetails,
        formButtonText,
        setFormButtonText,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};

export default ClientProvider;
