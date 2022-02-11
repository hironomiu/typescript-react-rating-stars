import { useState, memo } from 'react'

const AddShopForm = memo(({ addShop }: { addShop: (name: string) => void }) => {
  const [name, setName] = useState<string>('')
  const handleClick = (name: string) => {
    addShop(name)
    setName('')
  }
  return (
    <div>
      <input
        style={{ height: '21px', marginRight: '5px' }}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => handleClick(name)}>追加</button>
    </div>
  )
})

export default AddShopForm
