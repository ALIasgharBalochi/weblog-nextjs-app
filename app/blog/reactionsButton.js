
import {ThumbUpRounded,ThumbDownRounded} from '@mui/icons-material';

import { useState } from 'react';

const ReactionButtons = () => {

    const [like,setLike] = useState(0)
    const [dislike,setDislike] = useState(0)
    const [chekingReactions,setChekingReactions] = useState(false);

    
    const handleClick = (event) => {
       if (event.target.id === 'liked') {
        setLike(like + 1);
        setChekingReactions(true);
       }else if(event.target.id === 'disliked') {
        setDislike(dislike + 1);
        setChekingReactions(true);
       }
    }
    
    return(
        <div>
         <button
         id="liked"
         type='button'
         onClick={
            handleClick
         }
         disabled={chekingReactions? true: false}
         className='mx-2 text-slate-300 bg-gray-500 px-4 py-1 rounded-md items-center hover:shadow-xl'
        >
          <ThumbUpRounded/> {like}
        </button>
        <button 
         id="disliked"
         type='button'
         onClick={
          handleClick
         }
         disabled={chekingReactions? true: false}
         className='mx-2 text-slate-300 bg-gray-500 px-4 py-1 rounded-md items-center hover:shadow-xl'
        >
          <ThumbDownRounded/> {dislike}
        </button>
        </div>
    )
}

export default ReactionButtons;

