import React from 'react'
import Star from './Star'

const StarRating = ({
  index,
  rating,
  handleClick,
}: {
  index: number
  rating: number
  handleClick: () => void
}) => {
  const style = rating > index ? 'red' : 'grey'

  return (
    <>
      <Star style={style} handleClick={() => handleClick()} />
    </>
  )
}

export default StarRating
