import React, {useState} from 'react';
import './cursor.css';



export const Cursor = () => {
        const cursorRef = React.useRef(null);



        React.useEffect(() => {
            document.addEventListener('mousemove', (event) => {
            const {clientX, clientY} = event;
            const mouseX = clientX - cursorRef.current.clientWidth /2;
            const mouseY = clientY - cursorRef.current.clientHeight /2;
            cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px,0)`;
   

            document.getElementById("nav").addEventListener('mouseover', () => {
                cursorRef.current.classList.add("expand");
            })

            document.getElementById("nav").addEventListener('mouseout', () => {
                cursorRef.current.classList.remove("expand");
            })

            var lis = document.getElementById("nav").getElementsByTagName("li");
            var btns = document.getElementsByTagName("button");


            for( var i = 0 ; i < lis.length ;i++){
                lis[i].addEventListener("click", () => {
                            cursorRef.current.classList.add("click");
                             setTimeout(() => {
                              cursorRef.current.classList.remove("click");
                            }, 1000);
                          });
            }

            for( var i = 0 ; i < btns.length ;i++){
                btns[i].addEventListener("click", () => {
                            cursorRef.current.classList.add("click");
                             setTimeout(() => {
                              cursorRef.current.classList.remove("click");
                            }, 1000);
                          });
                          btns[i].addEventListener("mouseover", () => {
                            cursorRef.current.classList.add("expand");
                             
                          });        
                          btns[i].addEventListener("mouseout", () => {
                            cursorRef.current.classList.remove("expand");
                             
                          });     
            }

            // document.body.addEventListener('click', (event) => {
                
            //     cursorRef.current.classList.add("click");
            //     setTimeout(() => {
            //      cursorRef.current.classList.remove("click");
            //    }, 1000);
            //    let mouseX = clientX - cursorRef.current.clientWidth /2;
            //    let mouseY = clientY - cursorRef.current.clientHeight /2;
            //    cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px,0)`;
    
            // },[]);




            document.querySelector(".hero-text").addEventListener('mouseover', () => {
                cursorRef.current.classList.add("expand");
            })

            document.querySelector(".hero-text").addEventListener('mouseout', () => {
                cursorRef.current.classList.remove("expand");
            })

            });
        
        },[]);


        return <div className = "app-cursor" ref = {cursorRef}></div>
}



