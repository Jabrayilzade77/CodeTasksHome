import {useEffect, useState } from 'react'

function useLocalStorage(key,initial) {
    const [local, setLocal] = useState( localStorage.getItem(key) ? JSON.parse( localStorage.getItem(key)) : initial)

    useEffect(() => {
        localStorage.setItem(key,JSON.stringify(local))
    
    }, [key,local])
    
  return [local,setLocal]
}

export default useLocalStorage