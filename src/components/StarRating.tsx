import Star from './Star'

const StarRating = ({
  size = 5,
  rating,
  handleClick,
}: {
  size: number
  rating: number
  handleClick: (index: number) => void
}) => {
  return (
    <>
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
    </>
  )
}

export default StarRating
