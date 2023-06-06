import React from "react";
export default function HomeScreen() {

    return (
        <div id="main-div">
            <div id="div1">
                <h1>LODGN</h1>
                <div id="nav-div">
                    <a href="/#">Current requests</a>
                    <a href="/#">Ongoing stays</a>
                    <a href="/#">Previous stays</a>
                    <a href="/#">Reports</a>
                </div>
                <div id="bottom-div">
                    <button className="button">Log-Out</button>
                    <p>Help-Desk:</p>
                    <p>768-986 539</p>
                </div>
            </div>

            <div id="div2">
                <h2>You currently have 3 requests</h2>
                <div id="div-21">

                    <div id="det">
                        <div>
                            <h2>St Judes Hospital</h2>
                            <p>Sarasota,FL. 33178</p>
                        </div>
                        <div>
                            <h2>St Judes Hospital</h2>
                            <p>Sarasota,FL. 33178</p></div>
                        <div>
                            <h2>St Judes Hospital</h2>
                            <p>Sarasota,FL. 33178</p></div>
                    </div>
                </div>

                <div id="div22">

                </div>
            </div>
        </div>
    )
}