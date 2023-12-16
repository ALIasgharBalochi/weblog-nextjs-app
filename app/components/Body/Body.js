'use client'

import { useEffect,useState } from "react";

import BackTotop from "./BackTotp";
import BodyContent from "./BodyContent";

const Body = ({blogs,loading}) => {

    const [showFab,setShowFab] = useState(false);

    const hendleBackToTop = () => {
        document.documentElement.scrollTop = 0;
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 100){
                setShowFab(true);
            } else {
                setShowFab(false);
            }
        });

        return () => {
            window.removeEventListener('scroll',null)
        }
    },[])
    useEffect(() => {
        const res = async () => {
            const r = await fetch('http://localhost:9000/users')
            const data = await r.json()
            const maping = data.filter((item) => {
                return item.name == 'ali'
            })
            return console.log(maping);
        }
        res()
    },[])


    return(
        <div className="mt-3 min-h-screen">
           <BodyContent blogs={blogs} loading={loading} />
           <BackTotop hendleBackToTop={hendleBackToTop} showFab={showFab} />
        </div>
    )
}
export default Body;