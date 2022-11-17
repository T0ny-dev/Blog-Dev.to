import { createContext} from "react";
import { useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({children}) => {

  let [articlesFromDevTo, setArticlesFromDevTo] = useState([]);

  useEffect(() => {
    async function fetchDevTo() {
      const response = await fetch("https://dev.to/api/articles?username=tonydev");
      const articles = await response.json();
      setArticlesFromDevTo(articles);
      console.log(response);
      
    }

    fetchDevTo()

  }, []);

  return (
    <UserContext.Provider value={articlesFromDevTo}>
      {children}
    </UserContext.Provider>
  )
}

