import React, { useContext, useEffect } from 'react'
import DataContext from '../context/DataContext'
import axios from 'axios'

const Home = () => {

    const { mobiles, loading, setLoading, setMobiles } = useContext(DataContext)

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
    }, [setMobiles, setLoading])

    return (
        <div style={{display: "flex", justifyContent: "center", columnGap: "2rem"}}>
            {!loading ? (
                mobiles.map(mobile => (
                    <React.Fragment key={mobile._id}>
                        <div>
                            <p>Brand: {mobile.brand}</p>
                            <p>Model: {mobile.model}</p>
                            <img src={mobile.image} alt={mobile.model} width={"200px"} height={"220px"}/>
                            <p>Price: {mobile.price}</p>
                        </div>
                        <div>
                            <h3>Specifications:</h3>
                            <p>Dimensions: {mobile.specifications.dimensions}</p>
                            <p>Ram: {mobile.specifications.ram}</p>
                            <p>Storage: {mobile.specifications.rom}</p>
                            <p>Processor: {mobile.specifications.processor}</p>
                            <p>Weight: {mobile.specifications.weight}</p>
                            <p>Battery Capacity: {mobile.specifications.batteryCapacity}</p>
                            <p>Camera: {mobile.specifications.camera.rear} MP | {mobile.specifications.camera.selfie} MP</p>
                        </div>
                    </React.Fragment>
                ))) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default Home