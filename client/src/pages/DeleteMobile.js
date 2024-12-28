import React, { useContext, useEffect, useState } from 'react'
import DataContext from '../context/DataContext'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const DeleteMobile = () => {

  const { loading, setLoading } = useContext(DataContext)
  const [mobile, setMobile] = useState({})
  const navigate = useNavigate()

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

  const handleDelete = async (value) => {
    if (value === "Yes" ? true : false) {
      await axios.delete(`http://localhost:5000/electronics/mobiles/${id}`)
      navigate('/')
    }
    else {
      navigate('/')
    }
  }

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
            <p>Dimensions: {mobile.dimensions}</p>
            <p>Ram: {mobile.ram}</p>
            <p>Storage: {mobile.rom}</p>
            <p>Processor: {mobile.processor}</p>
            <p>Weight: {mobile.weight}</p>
            <p>Battery Capacity: {mobile.batteryCapacity}</p>
            {/* <p>Camera: {mobile.camera.rear} MP | {mobile.camera.selfie} MP</p> */}
          </div>
          <div>
            <p>Are you sure to delete?</p>
            <button onClick={e => handleDelete(e.target.innerText)}>Yes</button>
            <button onClick={e => handleDelete(e.target.innerText)}>No</button>
          </div>
        </React.Fragment>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default DeleteMobile