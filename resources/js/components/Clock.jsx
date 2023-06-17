import React, { useCallback, useEffect, useRef, useState } from "react";
import Button from "./Button";
import Content from "./Content";

function Clock(){

    //Thời gian điếm
    const[timer, setTimer] = useState(0);
    const[arrclock, setArrClock] = useState([{}])


    //Xác nhận sự kiện onclick thời gian từ phía components con
    const[isTimer,setIsTimer] = useState(false)

    //Xác nhận sự kiện onclick từ btn-Scop components con
    const[isDown, setIsDown] = useState(false);
    // console.log(isDown)
    //Lưu giá trị thời gian hiện tại
    const timeId = useRef()
    //lấy thời gian hiện tại
    let arr = useRef([]);
    useEffect(()=>{
        if(isDown){
           arr.current.push([{
            "h":hours2,
            "m":minutes2,
            "s":sconds2,
            "ms":milliseconds
        }])
            setIsDown(false);
        }
        // console.log(arr);
    },[isDown]);

    //Cập nhật thời gian
    useEffect(()=>{
        // console.log(timer);
        if(isTimer){
            timeId.current = setInterval(() => {
                setTimer(prevTime => prevTime + 10)
            }, 10);
        }else{
            clearInterval(timeId.current);
        }
    },[isTimer]);

    const minutes = Math.floor(timer / 60000);
    const seconds = Math.floor((timer % 60000) / 1000);
    const milliseconds = Math.floor((timer % 1000) / 10)
    const hours = Math.floor(minutes / 60)


    let sconds2 = useRef('');
    let minutes2 = useRef('');
    let hours2 = useRef('');

    if(seconds <= 9){
        sconds2 = '0'+ seconds;
    }else{
        sconds2 = seconds;
    }

    if(minutes <= 9){
        minutes2 = '0'+ minutes;
    }else{
        minutes2 = seconds;
    }

    if(hours <= 9){
        hours2 = '0'+ hours;
    }else{
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
                    <div style={{
                        fontSize: "3rem",
                        marginTop: "4.5rem",
                    }}>{milliseconds}</div>
                </div>

                <div className="R">
                    <div>00</div>
                    <div>:</div>
                    <div>00</div>
                    <div>:</div>
                    <div>00</div>
                </div>
            </div>
            <Button isTime={isTimer} setIsTime={setIsTimer} isDown={isDown} setIsDown={setIsDown}/>

           <div className="kh">
                {
                    arr.current.map(item =>
                        <li>{item[0].h}:{item[0].m}:{item[0].s}:{item[0].ms}</li>
                    )
                }
           </div>

            <Content/>
        </div>
    )
}
export default Clock
