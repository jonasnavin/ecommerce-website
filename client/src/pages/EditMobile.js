import React, { useContext, useEffect } from 'react'
import Input from '../components/Input'
import DataContext from '../context/DataContext'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const EditMobile = () => {

  const { formData, setFormData } = useContext(DataContext)

  const navigate = useNavigate()
  const { id } = useParams()

  const editData = async () => {
    await axios.put(`http://localhost:5000/electronics/mobiles/${id}`, formData)
  }

  useEffect(() => {
    const fetchMobiles = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/electronics/mobiles/${id}`)
        setFormData(response.data)
      }
      catch (err) {
        console.error(err)
      }
    }
    fetchMobiles()
  }, [id, setFormData])

  const handleSubmit = async (e) => {
    e.preventDefault()
    editData()
    navigate('/')
  }

  return (
    <form
      onSubmit={ handleSubmit }
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
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

export default EditMobile