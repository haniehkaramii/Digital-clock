import React , {useState, useEffect} from "react";
function DigitalClock(){
    const [time, setTime] = useState(new Date());

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setTime(new Date())
        },1000);

        return ()=>{
            clearInterval(intervalId);
        }
    }, [])

    function clockTime(){
        let hours= time.getHours();
        let minutes= time.getMinutes();
        let seconds= time.getSeconds();

        return `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`
    }
    function addZero(x){
        if(x<10){
            return "0"+x;
        }
        return x;
    }
    return(
        <div className="clock-container">
            <div className="clock">
                <h1>{clockTime()}</h1>
            </div>
        </div>
    )
}
export default DigitalClock;