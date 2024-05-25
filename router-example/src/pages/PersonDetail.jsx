import React from 'react'
import { useParams , useNavigate } from 'react-router-dom'
import { useState,useEffect} from 'react'

const PersonDetail = () => {

    const navigate= useNavigate()

    const {id} = useParams()// useParams hookuyla detail içeren "id" ye ulaşabiliryoruz bu şekil id yakalayabilriz

    const [person, setPerson] = useState([]); 
   const getPerson  = () => {
     fetch(`https://reqres.in/api/users/${id}`)
       .then((res) => res.json())
       .then((data) => setPerson(data.data))
       .catch((err) => console.log(err));
   };
   useEffect(() => {
      getPerson();
   }, []); 

console.log(person)
  return (
    <div className='"container text-center mt-4'>
    <img className="rounded" src={person.avatar} alt="img" />
    <h6>
      {person.first_name} {person.atlast_name}
    </h6>
    <p>{person.email}</p>
  
  <div>
    <button className="btn btn-warning"  onClick={()=>navigate(-1)} style={{backgroundColor:"yellow"}}> Back</button>
    <button className="btn btn " style={{backgroundColor:"red"}} onClick={()=>navigate("/")}> Home</button>
  </div>
  
  </div>
  )
}

export default PersonDetail