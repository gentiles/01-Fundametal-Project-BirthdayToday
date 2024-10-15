import React from 'react'

const Person = (props) => {
  const { age, name, image } = props
  return (
    <>
      <div className="person">
        <div>
          <img src={image} alt="picture" />
        </div>
        <div className="person--text">
          <h3>{name}</h3>
          <p>{age} years old</p>
        </div>
      </div>
    </>
  )
}
export default Person
