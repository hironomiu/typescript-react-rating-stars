import { GoStar } from 'react-icons/go'

const Star = ({
  color,
  handleClick,
}: {
  color: string
  handleClick: () => void
}) => {
  return (
    <>
      <GoStar style={{ color: color }} onClick={() => handleClick()} />
    </>
  )
}

export default Star
