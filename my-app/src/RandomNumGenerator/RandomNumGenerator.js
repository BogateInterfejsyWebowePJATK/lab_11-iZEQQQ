import React from "react"

export function random() {
   const num = [];
   for(let i =0;i<10;i++){
       num[i] = Math.floor(Math.random()*21);
   }

 return num.map((number) =>
        <li>{number}</li>
    )
}


