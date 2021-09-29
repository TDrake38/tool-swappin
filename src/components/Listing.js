import React from "react";
import './Listing.css'
import drill from '../photos/drill.jpg'

function Listing () {
    return (
        <>
            <div class="box">
                <div class="photo">
                    <img src={drill} alt="A drill" class="pic"></img>
                </div>
                <div class="listing">
                    <div class="listing-title">Dewalt Impact</div>
                    <div class="listing-dis">This is a 1/2" Dewalt Battery Impact.</div>
                </div>
            </div>
        </>
    )
}

export default Listing;