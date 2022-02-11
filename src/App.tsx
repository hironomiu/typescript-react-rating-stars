import { useApp } from './hooks/useApp'
import StarRating from './components/StarRating'
import AddShopForm from './components/AddShopForm'
import DeleteShop from './components/DeleteShop'

const App = () => {
  const { rating, handleClick, addShop, deleteShop } = useApp()

  return (
    <div style={{ padding: '10px' }}>
      <AddShopForm addShop={addShop} />
      {rating.map((data, dataIndex) => (
        <div key={data.id}>
          <h1>{data.shopName}</h1>
          <DeleteShop id={data.id} deleteShop={deleteShop} />
          <StarRating
            size={5}
            rating={data.totalRating}
            handleClick={(index) => handleClick(dataIndex, 0, index)}
          />
          <StarRating
            size={5}
            rating={data.soupRating}
            handleClick={(index) => handleClick(dataIndex, 1, index)}
          />
          <StarRating
            size={5}
            rating={data.noodleRating}
            handleClick={(index) => handleClick(dataIndex, 2, index)}
          />
        </div>
      ))}
    </div>
  )
}

export default App
