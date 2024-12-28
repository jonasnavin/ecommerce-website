import React, { useContext, useEffect } from 'react'
import Input from '../components/Input'
import DataContext from '../context/DataContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddMobile = () => {

  const { formData, setFormData } = useContext(DataContext)

  const navigate = useNavigate()

  const addData = async (updatedFormData) => {
    await axios.post('http://localhost:5000/electronics/mobiles', updatedFormData)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = `${formData.brand}/${formData.model}`.trim().replaceAll(' ', '-').toLowerCase()
    console.log(data)
    const updatedFormData = {...formData, images: data}
    setFormData(updatedFormData)
    await addData(updatedFormData)
    navigate('/')
  }


  useEffect(() => {
    setFormData({
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
  }, [setFormData])

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
      onSubmit={e => handleSubmit(e)}
    >
      <input type="file" />
      <Input
        id={"brand"}
        name={"Brand"}
        formData={formData} setFormData={setFormData} />
      <Input
        id={"model"}
        name={"Model"}
        formData={formData}
        setFormData={setFormData}
      />
      <Input
        id={"price"}
        name={"Price"}
        formData={formData}
        setFormData={setFormData}
      />
      <Input
        id={"ram"}
        name={"Ram"}
        formData={formData}
        setFormData={setFormData}
      />
      <Input
        id={"rom"}
        name={"Storage"}
        formData={formData}
        setFormData={setFormData}
      />
      <Input
        id={"processor"}
        name={"Processor"}
        formData={formData}
        setFormData={setFormData}
      />
      <Input
        id={"batteryCapacity"}
        name={"Battery Capacity"}
        formData={formData}
        setFormData={setFormData}
      />
      <Input
        id={"weight"}
        name={"Weight"}
        formData={formData}
        setFormData={setFormData}
      />
      <Input
        id={"dimensions"}
        name={"Dimensions"}
        formData={formData}
        setFormData={setFormData}
      />
      <button
        type='submit'
      >
        Submit
      </button>
    </form>
  )
}

export default AddMobile