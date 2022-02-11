import { memo } from 'react'

const DeleteShop = memo(
  ({ id, deleteShop }: { id: number; deleteShop: (id: number) => void }) => {
    return (
      <div style={{ marginBottom: '5px' }}>
        <button onClick={() => deleteShop(id)}>削除</button>
      </div>
    )
  }
)

export default DeleteShop
