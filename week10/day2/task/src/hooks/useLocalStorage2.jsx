import {useEffect, useState } from "react"
function useLocalStorage2(key,initialvalue) {

    const [value, setValue] = useState(localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : initialvalue)

useEffect(() => {
  localStorage.setItem(key,JSON.stringify(value))
}, [key,value])

  return [value,setValue]
}

export default useLocalStorage2