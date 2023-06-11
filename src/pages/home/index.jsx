import React, { useState } from 'react'

export default function Home() {
    const [user, setUser] = useState(null)

    const handleClick = () => {
        console.log(user)
    }
    
  return (
    <main>
        <div className="container">
          <h1>Home page</h1>
        </div>
    </main>
  )
}