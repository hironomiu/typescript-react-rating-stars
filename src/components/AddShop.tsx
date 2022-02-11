import { useState } from 'react'

const AddShop = ({ addShop }: { addShop: (name: string) => void }) => {
  const [name, setName] = useState<string>('')
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => addShop(name)}>追加</button>
    </div>
  )
}

export default AddShop
