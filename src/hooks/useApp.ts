import { useState } from 'react'
import shopRating from '../rating.json'

export const useApp = () => {
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

  const addShop = (shop: string) => {
    const maxId = Math.max(...rating.map((rate) => rate.id))
    setRating((prev) => [
      ...prev,
      {
        id: maxId + 1,
        shopName: shop,
        totalRating: 0,
        soupRating: 0,
        noodleRating: 0,
      },
    ])
  }

  return { rating, setRating, handleClick, addShop }
}
