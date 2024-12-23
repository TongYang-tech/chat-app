import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [data, setData] = useState([{}])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch('http://localhost:5000/api')
        const res = await resp.json()
        setData(res)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>
  if (!data) return null

  return (
    <div>
      <h1>Data from API:</h1>
      <pre>{data.users.map((user, i) => (
        <p key={i}>{user}</p>
      ))}</pre>
    </div>
  )
}

export default App
