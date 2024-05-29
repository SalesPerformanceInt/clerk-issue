import { useCallback, useEffect, useState } from "react"

export const useLocalStorage = <T extends string>(key: string) => {
  const [loaded, setLoaded] = useState(false)
  const [storage, setStorage] = useState<string | null>(null)

  useEffect(() => {
    setStorage(localStorage.getItem(key))
    setLoaded(true)
  }, [key])

  const setLocalStorage = useCallback(
    (value: T) => {
      localStorage.setItem(key, value)

      setStorage(value)
    },
    [key],
  )

  return {
    storage: storage as T | null,
    setLocalStorage,
    loaded,
  }
}
