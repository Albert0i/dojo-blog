/*
    A custom hook for fetching data
*/
import { useEffect, useState } from 'react';
import { FETCH_DELAY } from './conn'

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const abortCont = new AbortController()

        setTimeout(()=>{
          fetch(url, { signal: abortCont.signal })
            .then (res => { 
              if (!res.ok) 
                throw Error('Could not fetch data for that resource')
              return res.json() 
            })
            .then (data => { 
                setData(data) 
                setIsPending(false)
                setError(null)
              })
            .catch(err => {
              if (err.name === "AbortError") {
                //console.log(err.message)
                console.log('fetch aborted')
              }
              else {
                setError(err.message)
                setIsPending(false)  
              }
            })
        }, FETCH_DELAY)

        return () => abortCont.abort()
      }, [url])

      return {data, isPending, error}
}

export default useFetch