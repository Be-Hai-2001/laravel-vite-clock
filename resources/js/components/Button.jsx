import React, { memo, useRef, useState } from "react";

function Button( props ){
    const[status,setStatus] = useState('Bắt đầu');
    let handleBtn = useRef(1);
    // console.log(timer);

    const btnClick = () => {


        props.setIsTime(!props.isTime)
        if(handleBtn.current % 2 == 0){
            setStatus("Bắt đầu");
            handleBtn.current++;
        }else{
            setStatus("Tạm dừng");
            handleBtn.current++;
        }
    }

    return(
        <div className="btn">
            <button id="btn-clock" onClick={btnClick}>{status}</button>
            <button id="btn-Scop">Vòng</button>
        </div>
    )
}
export default memo(Button)
