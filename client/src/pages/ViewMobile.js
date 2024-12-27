import React, { useContext, useEffect, useState } from 'react'
import DataContext from '../context/DataContext'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const ViewMobile = () => {

    const { loading, setLoading } = useContext(DataContext)
    const [mobile, setMobile] = useState({})

    const { id } = useParams()
    useEffect(() => {
        const fetchMobiles = async () => {
            setLoading(true)
            try {
                const response = await axios.get(`http://localhost:5000/electronics/mobiles/${id}`)
                setLoading(false)
                setMobile(response.data)
            }
            catch (err) {
                setLoading(false)
                console.error(err)
            }
        }
        fetchMobiles()
    }, [setMobile, setLoading, id])

    return (
        <div style={{ display: "flex", justifyContent: "center", columnGap: "2rem" }}>
            {!loading ? (
                <React.Fragment>
                    <div>
                        <p>Brand: {mobile.brand}</p>
                        <p>Model: {mobile.model}</p>
                        <img src={mobile.image} alt={mobile.model} width={"200px"} />
                        <p>Price: {mobile.price}</p>
                    </div>
                    <div>
                        <h3>Specifications:</h3>
                        <p>Dimensions: {mobile.specifications?.dimensions}</p>
                        <p>Ram: {mobile.specifications?.ram}</p>
                        <p>Storage: {mobile.specifications?.rom}</p>
                        <p>Processor: {mobile.specifications?.processor}</p>
                        <p>Weight: {mobile.specifications?.weight}</p>
                        <p>Battery Capacity: {mobile.specifications?.batteryCapacity}</p>
                        <p>Camera: {mobile.specifications?.camera.rear} MP | {mobile.specifications?.camera.selfie} MP</p>
                    </div>
                </React.Fragment>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default ViewMobile