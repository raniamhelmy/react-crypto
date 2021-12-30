import React, {createContext, useContext ,useState } from 'react';

export const DataContext = createContext();

export default function DataContextProvider({children}) {
  const [isLoading, setIsLoading] = useState(true);
  const [coinList, setCoinList]=useState([]);
  const [searchTerm, setSearchTerm] = useState('a');
  const [query,setQuery]=useState('');
  
    
    return (
        <DataContext.Provider value={{ isLoading, setIsLoading, coinList, setCoinList, searchTerm, setSearchTerm,query,setQuery }}>
            {children}
        </DataContext.Provider>
    )
}
export const useGlobalContext = () => {
  return useContext(DataContext);
}
