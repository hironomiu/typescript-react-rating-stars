import { useState } from 'react'
import shopRating from './rating.json'
import StarRating from './components/StarRating'

const App = () => {
  const [rating, setRating] = useState(shopRating)

  const handleClick = (dataIndex: number, position: number, index: number) => {
    const tmp = [...rating]
    switch (position) {
      case 0:
        tmp[dataIndex] = { ...tmp[dataIndex], totalRating: index + 1 }
        break
      case 1:
        tmp[dataIndex] = { ...tmp[dataIndex], soupRating: index + 1 }
        break
      case 2:
        tmp[dataIndex] = { ...tmp[dataIndex], noodleRating: index + 1 }
        break
      default:
        break
    }
    setRating(() => [...tmp])
  }
  return (
    <>
      {rating.map((data, dataIndex) => (
        <div key={data.id}>
          <h1>{data.shopName}</h1>
          <div>
            {[...Array(5)].map((_, index) => (
              <StarRating
                key={index}
                index={index}
                rating={data.totalRating}
                handleClick={() => handleClick(dataIndex, 0, index)}
              />
            ))}
          </div>
          <div>
            {[...Array(5)].map((_, index) => (
              <StarRating
                key={index}
                index={index}
                rating={data.soupRating}
                handleClick={() => handleClick(dataIndex, 1, index)}
              />
            ))}
          </div>
          <div>
            {[...Array(5)].map((_, index) => (
              <StarRating
                key={index}
                index={index}
                rating={data.noodleRating}
                handleClick={() => handleClick(dataIndex, 2, index)}
              />
            ))}
          </div>
        </div>
      ))}
    </>
  )
}

export default App
