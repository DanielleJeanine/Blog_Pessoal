"use client";

import { useState } from "react";


interface LikeButtonProps {
  initialLikes?: number;
}


export default function LikeButton({ initialLikes = 0 }: LikeButtonProps) {
  
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);


  const handleLike = () => {
    setIsAnimating(true);
    setIsLiked(!isLiked);
    setLikes(prevLikes => isLiked ? prevLikes - 1 : prevLikes + 1);
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={handleLike}
        className={`
          flex items-center space-x-1 px-4 py-2 rounded-full border-2 transition-all duration-300
          ${isLiked 
            ? 'bg-red-500 border-red-500 text-white hover:bg-red-600' 
            : 'bg-white border-gray-300 text-gray-700 hover:border-red-500 hover:text-red-500'
          }
          ${isAnimating ? 'scale-110' : 'scale-100'}
          focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50
        `}
        aria-label={isLiked ? "Descurtir post" : "Curtir post"}
      >
        
        <span className={`text-lg transition-transform duration-300 ${isAnimating ? 'scale-125' : 'scale-100'}`}>
          {isLiked ? '❤️' : '🤍'}
        </span>
        
        <span className="font-medium">
          {isLiked ? 'Curtido' : 'Curtir'}
        </span>
      </button>
      
      <span className="text-gray-600 font-medium">
        {likes} {likes === 1 ? 'curtida' : 'curtidas'}
      </span>
    </div>
  );
}


export function CompactLikeButton({ initialLikes = 0 }: LikeButtonProps) {
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(prevLikes => isLiked ? prevLikes - 1 : prevLikes + 1);
  };

  return (
    <button
      onClick={handleLike}
      className={`
        flex items-center space-x-1 px-3 py-1 rounded-full text-sm transition-colors duration-200
        ${isLiked 
          ? 'text-red-500 hover:text-red-600' 
          : 'text-gray-500 hover:text-red-500'
        }
      `}
      aria-label={isLiked ? "Descurtir post" : "Curtir post"}
    >
      <span>{isLiked ? '❤️' : '🤍'}</span>
      <span>{likes}</span>
    </button>
  );
}

