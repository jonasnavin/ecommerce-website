import React, { useContext, useEffect } from 'react'
import Input from '../components/Input'
import DataContext from '../context/DataContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import UploadFile from '../components/UploadFile'

const AddMobile = () => {

  const { formData, setFormData, file } = useContext(DataContext)

  const navigate = useNavigate()

  const addData = async (updatedFormData) => {
    await axios.post('http://localhost:5000/electronics/mobiles', updatedFormData)
  }

  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file first!');
      return;
    }

    const form = new FormData()
    form.append('file', file)

    try {
      await axios.post('http://localhost:5000/upload', form, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
    } catch (error) {
      console.error('Error uploading file:', error)
      alert('Error uploading file');
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = file.name.trim().replaceAll(' ', '-').toLowerCase()
    const updatedFormData = { ...formData, image: data }
    setFormData(updatedFormData)
    await handleUpload()
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
      image: "",
      rearCamera: "",
      selfieCamera: ""
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
      <UploadFile />
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
      <Input
        id={"rearCamera"}
        name={"Rear Camera"}
        formData={formData}
        setFormData={setFormData}
      />
      <Input
        id={"selfieCamera"}
        name={"Selfie Camera"}
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