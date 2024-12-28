import React, { useContext, useEffect } from 'react'
import DataContext from '../context/DataContext'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Home = () => {

    const { mobiles, loading, setLoading, setMobiles, setFormData } = useContext(DataContext)

    useEffect(() => {
        const fetchMobiles = async () => {
            setLoading(true)
            try {
                const response = await axios.get('http://localhost:5000/electronics/mobiles')
                setLoading(false)
                setMobiles(response.data)
            }
            catch (err) {
                setLoading(false)
                console.error(err)
            }
        }
        fetchMobiles()
    }, [setMobiles, setLoading, setFormData])

    const homeStyle = {
        display: "flex",
        // justifyContent: "center",
        columnGap: "2rem",
        flexWrap: "wrap"
    }

    return (
        <div style={homeStyle}>
            {!loading ? (
                mobiles.map(mobile => (
                    <React.Fragment key={mobile._id}>
                        <div style={{width: "300px"}}>
                            <p>Brand: {mobile.brand}</p>
                            <p>Model: {mobile.model}</p>
                            {/* <img src={mobile.image} alt={mobile.model} width={"200px"} height={"220px"}/> */}
                            <p>Price: {mobile.price}</p>
                        </div>
                        <div>
                            <p><Link to={`/view-mobile/${mobile._id}`}>View</Link></p>
                            <p><Link to={`/edit-mobile/${mobile._id}`}>Edit</Link></p>
                            <p><Link to={`/delete-mobile/${mobile._id}`}>Delete</Link></p>
                        </div>
                    </React.Fragment>
                ))) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default Home