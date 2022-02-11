import { memo } from 'react'
import { GoStar } from 'react-icons/go'

const Star = memo(
  ({ color, handleClick }: { color: string; handleClick: () => void }) => {
    return (
      <>
        <GoStar style={{ color: color }} onClick={() => handleClick()} />
      </>
    )
  }
)

export default Star
