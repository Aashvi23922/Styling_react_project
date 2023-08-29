import React, { useState } from 'react'
import './Page.css';
import beauty_data from "../Utilities/beauty_data.json"
import Card_rotate from '../Card/Card_rotate';
import Navigation from '../Header/Navigation';

function Page() {
  let [data, setData] = useState(beauty_data)
  return (
    <div class="main_img" style={{ position: "relative" }}>

      <div style={{ position: "absolute", top: "0px", width: "100%" }}>
        <Navigation />

      </div>
      <div class="img">
      </div>
      <div class="img_text">
        <h2>Luxury Beauty Services</h2>
        <p style={{ fontSize: "16px", color: "rgb(202, 252, 254)", letterSpacing: "2px" }}>Welcome TO The Beauty</p>
        <button className='bttn_'>Go Now</button>
      </div>
      <div className="bttn">
          <button>all</button>
          <button>Mens Items</button>
          <button>Womens Items</button>
          <button>Kids Items</button>
        </div>
      <div className='last_div' style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
        {
          data?.map?.((e) => {
            return <Card_rotate data={
              e} />
          })
        }
      </div>
    </div>
  )
}

export default Page;