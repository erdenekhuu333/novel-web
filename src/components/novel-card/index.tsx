/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'

export default function NovelCard({data}:{data:any}) {
    const router = useRouter()
    const cardRef = useRef<HTMLDivElement|null>(null)

    async function routeTo(url:string) {
        // router.push(`/novel/${url.split('.')[0]}`)
        
    }
    return <figure className='group relative rounded cursor-pointer' onClick={() => {routeTo(data.url)}}>
        <div style={{ zIndex: -1, backgroundImage: `url(/nvl${data.img_url})` }} className='absolute w-full h-full left-0 top-0 group-hover:blur-[7.5px] group-hover:saturate-[2] transition-all rounded'/>
        <img src={`/nvl${data.img_url}`} alt={`${data.title}`} className='object-cover w-full h-auto rounded'/>
        <figcaption className="w-full absolute h-full flex items-end justify-center text-[0.8rem] p-1 group-hover:bg-opacity-40 transition-all top-0 left-0" style={{zIndex: 10}}>
             <div className='bg-[#414749] p-1 rounded h-[45px] min-h-[45px] w-full bg-opacity-60 backdrop-blur transition-all flex items-center justify-center'>
                 <span className="line-clamp-2 overflow-hidden group-hover:underline">
                     {data.title}
                 </span>
             </div>
         </figcaption>
    </figure>
}
