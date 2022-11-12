import React from 'react'

const Second = () => {
  return (
    <div>
        <div style={{display:"flex"}}>
        <h1 style={{marginLeft:"50px",display:"flex"}}>
            Search properties to rent
        </h1>
        <input style={{marginLeft:"600px",position:"relative", height:"25px",marginTop:"30px", borderRadius:"7px"}} placeholder="Search"></input>
        </div>
      <div style={{display:"flex" ,marginLeft:"50px", gap:"50px"}}>
        <select style={{width:"180px" ,padding:"5px"}}>
            <option>Choose Location</option>
            <option>Delhi</option>
            <option>Banglore</option>
            <option>Mumbai</option>
        </select>
        <input style={{width:"180px" ,padding:"5px"}} type="date" id="birthday" name="birthday"/>
        <select style={{width:"180px" ,padding:"5px"}}>
            <option>Price</option>
            <option>10k-20k</option>
            <option>5k-10k</option>
            <option>20k-50k</option>
        </select>

        <select style={{width:"180px" ,padding:"5px"}}>
            <option>Property Type</option>
            <option>Home</option>
            <option>Commercial</option>
            <option>Leading</option>
            <option>Recidantial</option>
        </select>
        <button style={{width:"100px",cursor:"pointer" ,padding:"10px", color:"white", backgroundColor:"blue" ,borderRadius:"8px",border:"none"}}>Search</button>

      </div>
    </div>
  )
}

export default Second
