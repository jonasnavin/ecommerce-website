import React from 'react'
import Input from '../components/Input'

const AddMobile = () => {
    const handleSubmit = () => {

    }
  return (
    <form onSubmit={e => e.preventDefault()}
    style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
        <Input id={"brand"} name={"Brand"} />
        <Input id={"realme"} name={"Realme"} />
        <Input id={"price"} name={"Price"} />
        <Input id={"dimensions"} name={"Dimensions"} />
        <Input id={"ram"} name={"Ram"} />
        <Input id={"rom"} name={"Storage"} />
        <Input id={"weight"} name={"Weight"} />
        <Input id={"processor"} name={"Processor"} />
        <Input id={"batteryCapacity"} name={"Battery Capacity"} />
        <button type='submit' onClick={handleSubmit}>Submit</button>
    </form>
  )
}

export default AddMobile