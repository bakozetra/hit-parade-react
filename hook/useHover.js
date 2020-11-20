import React, { useEffect, useRef, useState } from 'react'

function useHover() {
  const [hover , setHover] = useState(false);
  const ref = useRef(null);

  function enter () {
    setHover(true);
  }

  function leave () {
    setHover(false);
  }

  useEffect(() => {
    const instance = ref.current ;
    instance.addEventListener('mouseenter' , enter);
    instance.addEventListener('mouseleave' , leave);
    return () => {
      instance.removeEventListener("mouseenter", enter)
      instance.removeEventListener("mouseleave", leave)
    }

  } , [])
     
  return [hover, ref]

 
}

export default useHover
