import React,{ useState ,useEffect} from 'react'

const clock = () => {
   
   const [date, setDate] = useState(new Date(1996,12,17,12,12,3,43) )
   useEffect(() => {
    var timerID = setInterval( () => tick(), 1000 );
 
 
    return function cleanup() {
       setDate(date)  
       clearInterval(timerID);
    }
     
    })
   function tick() {
    setDate(new Date());
   }
   

    return (
        <div><p>La hora actual: <label>       
       {date.toLocaleTimeString()} </label> </p>
        <h1>  {date.getHours()}</h1>       
       </div>
    

    )
}

export default clock;