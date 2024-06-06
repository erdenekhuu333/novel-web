'use client'
import { Inter } from "next/font/google";
import Image from "next/image";
import bg2 from '../../public/bg2.png'
import { NovelCard } from "@/components";
import { useEffect, useRef } from "react";

const inter = Inter({ subsets: ["latin"] });

let data = {
    "complete_list": [
        {
            "img_url": "/uploads/thumbs/reincarnation-of-the-strongest-s-ac477525ec-34dd563fae23900c7ba16dc073f7a2db.jpg",
            "title": "Reincarnation Of The Strongest Sword God",
            "url": "/reincarnation-of-the-strongest-sword-god-novel"
        },
        {
            "img_url": "/uploads/thumbs/the-world-of-otome-games-is-toug-08255c3e52-48469722e846ab1755fb07946575388a.jpg",
            "title": "The World of Otome Games is Tough For Mobs",
            "url": "/the-world-of-otome-games-is-tough-for-mobs"
        },
        {
            "img_url": "/uploads/thumbs/little-miss-devil-the-president--9a7a032670-25806adda6a0602bf90921eb3b731178.jpg",
            "title": "Little Miss Devil: The President's Mischievous Wife",
            "url": "/little-miss-devil-the-presidents-mischievous-wife"
        },
        {
            "img_url": "/uploads/thumbs/my-youth-began-with-him-1419a2616d-95b0d895802d6bf275654366a00ab724.jpg",
            "title": "My Youth Began With Him",
            "url": "/my-youth-began-with-him"
        },
        {
            "img_url": "/uploads/thumbs/super-gene-c33ca6fce8-95b0d895802d6bf275654366a00ab724.jpg",
            "title": "Super Gene",
            "url": "/super-gene"
        },
        {
            "img_url": "/uploads/thumbs/rise-of-the-undead-legion-50c3bea6d1-2d98734547c7d17947a20ba3e4cf6e88.jpg",
            "title": "Rise of the Undead Legion",
            "url": "/rise-of-the-undead-legion"
        },
        {
            "img_url": "/uploads/thumbs/the-99th-divorce-1bef55ac95-95b0d895802d6bf275654366a00ab724.jpg",
            "title": "The 99th Divorce",
            "url": "/the-99th-divorce"
        },
        {
            "img_url": "/uploads/thumbs/scholars-advanced-technological--9d29e42087-95b0d895802d6bf275654366a00ab724.jpg",
            "title": "Scholar’s Advanced Technological System",
            "url": "/scholars-advanced-technological-system"
        },
        {
            "img_url": "/uploads/thumbs/a-returners-magic-should-be-spec-803d1ecb6a-45b5bb42e53a24e4f11a0b39d3e97bf4.jpg",
            "title": "A Returner’s Magic Should Be Special",
            "url": "/a-returners-magic-should-be-special"
        },
        {
            "img_url": "/uploads/thumbs/the-legendary-mechanic-2ff101db4e-95b0d895802d6bf275654366a00ab724.jpg",
            "title": "The Legendary Mechanic",
            "url": "/the-legendary-mechanic"
        },
        {
            "img_url": "/uploads/thumbs/tensei-shitara-slime-datta-ken-f4c4bf0404-95b0d895802d6bf275654366a00ab724.jpg",
            "title": "Tensei Shitara Slime Datta Ken (WN)",
            "url": "/tensei-shitara-slime-datta-ken-wn"
        },
        {
            "img_url": "/uploads/thumbs/genius-doctor-black-belly-miss-8ff93fee61-95b0d895802d6bf275654366a00ab724.jpg",
            "title": "Genius Doctor: Black Belly Miss",
            "url": "/genius-doctor-black-belly-miss"
        }
    ],
    "popular_list": [
        {
            "img_url": "/uploads/thumbs/cultivation-online-a2232683a3-794058261ee389d7dc956aa42cda3ea7.jpg",
            "title": "Cultivation Online",
            "url": "/cultivation-online-novel"
        },
        {
            "img_url": "/uploads/thumbs/martial-peak-685987ce01-bbb7454e754097f2a4e636b484f68e23.jpg",
            "title": "Martial Peak",
            "url": "/martial-peak"
        },
        {
            "img_url": "/uploads/thumbs/cultivation-chat-group-1289ca14fe-bbb7454e754097f2a4e636b484f68e23.jpg",
            "title": "Cultivation Chat Group",
            "url": "/cultivation-chat-group"
        },
        {
            "img_url": "/uploads/thumbs/madams-identities-shocks-the-ent-b09ea45ab1-94f00c71f692e6c588c383da4544e4dc.jpg",
            "title": "Madam’s Identities Shocks the Entire City Again",
            "url": "/madams-identities-shocks-the-entire-city-again"
        },
        {
            "img_url": "/uploads/thumbs/overgeared-a19afd4f2f-9ebd9a03d0ca6f8c738a5a4e33263f51.jpg",
            "title": "Overgeared",
            "url": "/overgeared"
        },
        {
            "img_url": "/uploads/thumbs/my-three-wives-are-beautiful-vam-8a47a79974-da6c36a48051419c8d00b759a2657a5d.jpg",
            "title": "My Three Wives Are Beautiful Vampires.",
            "url": "/my-three-wives-are-beautiful-vampires"
        },
        {
            "img_url": "/uploads/thumbs/re-evolution-online-a764cb1450-deeb63adb14d19081c8d02122250ed18.jpg",
            "title": "Re: Evolution Online",
            "url": "/re-evolution-online"
        },
        {
            "img_url": "/uploads/thumbs/dual-cultivation-129ea5740d-0cd6d4feb835435d441006a2858bd2db.jpg",
            "title": "Dual Cultivation",
            "url": "/dual-cultivation-novel"
        },
        {
            "img_url": "/uploads/thumbs/under-the-oak-tree-4b97d94c3c-1926279c8ec5bf424d2b64d552e70c05.jpg",
            "title": "Under the Oak Tree",
            "url": "/under-the-oak-tree"
        },
        {
            "img_url": "/uploads/thumbs/my-vampire-system-024a26d908-f38cad309c401d59c167bd3c3d06d92e.jpg",
            "title": "My Vampire System",
            "url": "/my-vampire-system-v122"
        },
        {
            "img_url": "/uploads/thumbs/one-birth-two-treasures-the-bill-b116ae86b1-bbb7454e754097f2a4e636b484f68e23.jpg",
            "title": "One Birth Two Treasures: The Billionaire’s Sweet Love",
            "url": "/one-birth-two-treasures-the-billionaires-sweet-love"
        },
        {
            "img_url": "/uploads/thumbs/i-become-a-burdensome-child-afte-cda8790cd3-ea97137b7077875bcd3f4c9dc6ac7c0f.jpg",
            "title": "I Become A Burdensome Child After Transmigrating",
            "url": "/i-become-a-burdensome-child-after-transmigrating"
        },
        {
            "img_url": "/uploads/thumbs/nanomancer-reborn-ive-become-a-s-c59767a95e-10977da37ac839a903e1441a8875ed98.jpg",
            "title": "Nanomancer Reborn - I've Become A Snow Girl?",
            "url": "/nanomancer-reborn-ive-become-a-snow-girl"
        }
    ]
}

export default function Home() {

    const mount = useRef(false)

    useEffect(() => {
        mount.current = true
    }, [])

    return <main className={`flex min-h-screen flex-col items-center gap-4 justify-between pb-5 ${inter.className}`} >
        {
            mount.current && <>
                <div className="w-full h-[600px] flex flex-col">
                    <div className="w-full h-[500px] min-h-[500px] max-h-[500px] relative">
                        <Image src={bg2.src} alt="" fill style={{ objectFit: 'cover' }}/>
                        <div className="bg-gradient-to-t from-[#efefef] dark:from-[#212729] to-transparent dark:to-transparent z-30 absolute w-full h-full top-0 left-0"/>
                    </div>
                    <div className="absolute bottom-20 w-full flex-col justify-center items-center gap-4 z-40">
                        <div className="container mx-auto flex flex-col gap-4">
                            <h2 className="px-16 font-semibold text-xl">Popular novels</h2>
                            <div className="grid grid-cols-7 grid-flow-col z-40 gap-2 items-center justify-center px-10">
                                {
                                    data.complete_list.splice(0, 7).map((data, idx) => {
                                        return <NovelCard key={idx} data={data}/>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto flex flex-col gap-5">
                    <h2 className="px-16 font-semibold text-xl">Latest updated</h2>
                    <div className="grid grid-cols-7 grid-flow-row z-40 gap-2 items-center justify-center px-10">
                        {
                            data.popular_list.map((data, idx) => {
                                return <NovelCard key={idx} data={data}/>
                            })
                        }
                    </div>
                </div>
            </>
        }
    </main>
}
