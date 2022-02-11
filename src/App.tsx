import StarRating from './components/StarRating'
import { useApp } from './hooks/useApp'
import AddShop from './components/AddShop'
const App = () => {
  const { rating, handleClick, addShop } = useApp()

  return (
    <>
      <AddShop addShop={addShop} />
      {rating.map((data, dataIndex) => (
        <div key={data.id}>
          <h1>{data.shopName}</h1>
          <div>
            <StarRating
              size={5}
              rating={data.totalRating}
              handleClick={(index) => handleClick(dataIndex, 0, index)}
            />
          </div>
          <div>
            <StarRating
              size={5}
              rating={data.soupRating}
              handleClick={(index) => handleClick(dataIndex, 1, index)}
            />
          </div>
          <div>
            <StarRating
              size={5}
              rating={data.noodleRating}
              handleClick={(index) => handleClick(dataIndex, 2, index)}
            />
          </div>
        </div>
      ))}
    </>
  )
}

export default App
