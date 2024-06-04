import { Inter } from "next/font/google";
import { useEffect, useLayoutEffect } from "react";
import Image from "next/image";
import bg from '../../public/bg.png'
import bg2 from '../../public/bg2.png'
const inter = Inter({ subsets: ["latin"] });

let data = Array(20).fill(null).map((data, idx) => { return { title: `title ${idx+1}`, image: '', desc: `description plot ${idx+1}` } })
let for_swipe = Array(6).fill(null).map((data, idx) => { return { title: `title ${idx+1}`, image: '', desc: `description plot ${idx+1}` } })

export default function Home() {

    useLayoutEffect(() => {
        async function getData() {
            const res = await fetch('https://qs3ek1it0j.execute-api.ap-southeast-1.amazonaws.com/api/list')
            const data = await res.json()
            console.log("data ==>", data)
        }
        getData()
    }, [])

    useEffect(() => {
        
    }, [])

    return <main className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`} >
        <div className="w-full h-[750px] flex flex-col">
            <div className="w-full h-[500px] min-h-[500px] max-h-[500px] relative">
                <Image src={bg2.src} alt="" fill style={{ objectFit: 'cover' }}/>
                <div className="bg-gradient-to-t from-[#212729] to-transparent z-50 absolute w-full h-full top-0 left-0"/>
            </div>
            <div className="absolute">

            </div>
        </div>
    </main>
}
