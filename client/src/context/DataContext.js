import { createContext, useState } from "react";

const DataContext = createContext()

export const DataProvider = ({ children }) => {

    const [mobiles, setMobiles] = useState([])
    const [loading, setLoading] = useState(false)

    return (
        <DataContext.Provider value={{
            mobiles, loading, setLoading, setMobiles
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext