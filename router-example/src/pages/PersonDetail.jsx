import React from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import NotFound from "./NotFound"
import spinner from "../img/Spinner-2.gif"
const PersonDetail = () => {
  const { idx } = useParams()
  const navigate = useNavigate()
  const [person, setPerson] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const getPerson = () => {
    setLoading(true)
    fetch(`https://reqres.in/api/users/${idx}`)
      .then((res) => {
        //?error handling
        if (!res.ok) {
          setLoading(false)
          setError(true)
          throw new Error("Somehing went wrong")
        }
        return res.json()
      })
      .then((data) => {
        setLoading(false)
        setPerson(data.data)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getPerson()
  }, [])

  console.log(loading)

  if (loading) {
    return (
      <div className="text-center mt-4">
        <img src={spinner} alt="spinner" />
      </div>
    )
  } else if (error) {
    return <NotFound />
  } else {
    return (
      <div className="container text-center mt-4">
        <img className="rounded" src={person.avatar} alt="img" />
        <h6>
          {person.first_name} {person.last_name}
        </h6>
        <p>{person.email}</p>

        <div>
          <button className="btn btn-warning" onClick={() => navigate(-2)}>
            Back
          </button>
          <button className="btn btn-danger" onClick={() => navigate("/")}>
            Home
          </button>
        </div>
      </div>
    )
  }
}

export default PersonDetail
