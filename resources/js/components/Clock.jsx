import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import Content from "./Content";

function Clock(){

    const[timer, setTimer] = useState(0);
    const[isTimer,setIsTimer] = useState(false)

    const countRef = useRef(null);
    let s = useRef();

    useEffect(()=>{
        if(isTimer){
            s.current = setInterval(() => {
                setTimer(prevTime => prevTime + 10)
            }, 10);
        }else{
            clearInterval(s.current);
        }
    },[isTimer]);

    // useEffect(()=>{
    //     return (()=>{
    //         clearInterval(s.current)
    //     })
    // },[])

    const minutes = Math.floor(timer / 60000);
    const seconds = Math.floor((timer % 60000) / 1000);
    const milliseconds = Math.floor((timer % 1000) / 10)
    const hours = Math.floor(minutes / 60)
        .toString()
        .padStart(2, '0');


    let sconds2 = useRef('');
    let minutes2 = useRef('');
    let hours2 = useRef('');

    if(seconds < 9){
        sconds2 = '0'+ seconds;
    }

    if(minutes < 9){
        minutes2 = '0'+ minutes;
    }

    if(hours < 9){
        hours2 = hours;
    }

    return (
        <div className="clock">
            <div className="title">
                Đồng Hồ Bấm Giờ
            </div>
            <hr />
            <div className="time">
                <div className="L">
                    <div>{hours2}</div>
                    <div>:</div>
                    <div>{minutes2}</div>
                    <div>:</div>
                    <div>{sconds2}</div>
                </div>
                <div className="R">
                    <div>00</div>
                    <div>:</div>
                    <div>00</div>
                    <div>:</div>
                    <div>00</div>
                </div>
            </div>
            <Button isTime={isTimer} setIsTime={setIsTimer} setTime={setTimer}/>
            <Content/>
        </div>
    )
}
export default Clock
