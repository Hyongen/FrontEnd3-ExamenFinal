import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ContextGlobal } from '../Components/utils/global.context';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  const {id} = useParams();
  const {newData} = useContext(ContextGlobal)
  const dentist = newData.data[id]


  return (
    <>
      <h1>Detail Dentist id </h1>
      <p>{dentist.name}</p>
      <p>{dentist.username}</p>
      <p>{dentist.email}</p>
      <p>{dentist.phone}</p>
      <p>{dentist.website}</p>
    </>
  )
}

export default Detail

