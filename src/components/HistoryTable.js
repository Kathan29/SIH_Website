import React,{useState,useEffect} from 'react'

// Example of a data array that
// you might receive from an API
// const data = [
//     { name: "Anom", age: 19, gender: "Male" },
//     { name: "Megha", age: 19, gender: "Female" },
//     { name: "Subham", age: 25, gender: "Male"},
//   ]



export default function HistoryTable() {
  const[data,setData] = useState([]);

  const fetchData = () =>{
  fetch("https://technoithub.in/api/flame.php")
  .then((response)=>response.json())
  .then((json)=>{
    setData(json.Flame)
  })
  };

 useEffect(()=>{
  const interval = setInterval(() => {
    fetchData();
  }, 3000);
  return () => clearInterval(interval);
 },[])
  return (
    <div className='tab'>
       <table>
         
        <tr className='row2'>
          <th id="tcol">FLAME_ID</th>
          <th id="tcol">DEVICE_ID</th>
          <th id="tcol">FLAME_VALUE</th>
          <th id="tcol">READING_TIME</th>
        </tr>
        
        <tbody>
        {data.map((val) => {
          return (
            <tr>
              <td id="tcol">{val.FLAME_ID}</td>
              <td id="tcol">{val.DEVICE_ID}</td>
              <td id="tcol">{val.FLAME_VALUE}</td>
              <td id="tcol">{val.READING_TIME}</td>
            </tr>
          )
        })}
        </tbody>
      </table>
    </div>
  )
}
