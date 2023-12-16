'use client'

import { FacebookRounded, Instagram, LinkedIn, GitHub, } from "@mui/icons-material";
import Link from "next/link";

const Foter = () => {

  const options = [
    { icon: <GitHub />, link: 'https://github.com/ALIasgharBalochi' },
    { icon: <FacebookRounded />, link: '/' },
    { icon: <Instagram />, link: '/' },
    { icon: <LinkedIn />, link: '/' },
  ]

  return (
    <div className="rounded-t-lg bg-slate-400 p-2 " >
      <div className="flex flex-row  justify-center items-center">
        {options.map((option) => (
          <div className="text-slate-300 bg-slate-600 rounded-full  m-3 p-2 hover:cursor-pointer">
            <Link href={option.link}>
              {option.icon}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Foter;