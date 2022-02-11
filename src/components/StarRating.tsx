import { memo } from 'react'
import Star from './Star'

const StarRating = memo(
  ({
    size = 5,
    rating,
    handleClick,
  }: {
    size: number
    rating: number
    handleClick: (index: number) => void
  }) => {
    return (
      <div>
        {[...Array(size)].map((_, index) =>
          rating > index ? (
            <Star
              key={index}
              color={'red'}
              handleClick={() => handleClick(index)}
            />
          ) : (
            <Star
              key={index}
              color={'grey'}
              handleClick={() => handleClick(index)}
            />
          )
        )}
      </div>
    )
  }
)

export default StarRating
