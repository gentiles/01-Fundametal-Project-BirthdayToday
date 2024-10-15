import React, { useState } from 'react'
import data from './data'
import List from './List'

const App = () => {
  const [people, setPeople] = useState(data)

  function handleClick() {
    setPeople([])
  }
  return (
    <>
      <div className="main">
        <section className="container">
          <h1 className="title">{people.length} Birthday Today</h1>
          <List people={people} />
          {/* {people.map((item) => {
            const { id, name, age, image } = item
            return (
              <div key={id} className="person">
                <div>
                  <img src={image} alt="picture" />
                </div>
                <div className="person--text">
                  <h3>{name}</h3>
                  <p>{age} years old</p>
                </div>
              </div>
            )
          })} */}

          <button className="btn" onClick={handleClick}>
            Clear all
          </button>
        </section>
      </div>
    </>
  )
}
export default App
