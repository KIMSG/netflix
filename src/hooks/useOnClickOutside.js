import React, { useEffect } from 'react'

const useOnClickOutside = (ref, handler) => {
  useEffect(()=> {
    const listener = (event) => {
        console.log('ref', ref.current);
        if(!ref.current || ref.current.contains(event.target)){
            return;
        }
        handler();
        
    };

    document.addEventListener("mousedown", listener)
    document.addEventListener("touchStart", listener)

    return () => {
        document.addEventListener("mousedown", listener)
        document.addEventListener("touchStart", listener)
    };
  }, []);
}

export default useOnClickOutside;
