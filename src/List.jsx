import React from 'react'
import Person from './Person'
const List = ({ people }) => {
  return (
    <>
      {people.map((item) => (
        <Person key={item.id} {...item} />
      ))}
    </>
  )
}

export default List
