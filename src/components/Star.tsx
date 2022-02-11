import { GoStar } from 'react-icons/go'

const Star = ({
  style,
  handleClick,
}: {
  style: string
  handleClick: () => void
}) => {
  return (
    <>
      <GoStar style={{ color: style }} onClick={() => handleClick()} />
    </>
  )
}

export default Star
