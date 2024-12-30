import { createContext, useState } from "react";

const DataContext = createContext()

export const DataProvider = ({ children }) => {

    const [mobiles, setMobiles] = useState([])
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        brand: "",
        model: "",
        price: "",
        dimensions: "",
        ram: "",
        rom: "",
        weight: "",
        processor: "",
        batteryCapacity: "",
        image: ""
    })

    const [file, setFile] = useState(null)

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    }

    return (
        <DataContext.Provider value={{
            mobiles,
            loading,
            setLoading,
            setMobiles,
            formData,
            setFormData,
            handleFileChange,
            file
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext