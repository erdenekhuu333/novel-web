/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"

export function isNullOrUndefined(data:any) {
    return data === undefined || data === null
}

export function useApi( url:string, options?:object|undefined ) {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState<any>(undefined)

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            const res = await fetch(url, options)
            const json = await res.json()
            setIsLoading(false)
            setData(json)
        }
        fetchData()
    }, [url])

    return [ data, isLoading ]

}