import HARDDISK from './images/RAM.jpeg.jpg'
import RAM from './images/pendrive.jpg'
import PENDRIVE from './images/HDD.jpg'
import './Style.css'
import React from 'react'
function Scroll(){
    return(
            <div className="scroll-container">
                <img src= {HARDDISK} alt="Image 1" />
                <img src={RAM} alt="Image 2" />
                <img src= {PENDRIVE} alt="Image 3" />
            </div>

    )
}
export default Scroll