import React, { useState } from "react";
import logo from "./logo.gif";
import contact from "./contact.png";

function CardComponent(props) {
    return (
        <div className="card">
            {props.isRare ? <span>Rare Find</span> : null}
            <div className="logo-div">
                <img src={logo} alt="logo" className="logo-img" />
                <div className="c1">
                    <p>1.5 miles away from job location</p>
                    <div className="c2">
                        <div className="c3">
                            <p>Singles: $120</p>
                            <p>Doubles: $145</p>
                        </div>

                        <button className="button">Book Now</button>
                    </div>
                </div>
            </div>
        </div>

    )
}



export default function HomeScreen() {

    const [el] = useState([true, false, false])

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
                <h2 id="req">You currently have 3 requests</h2>

                <div id="div21">

                    <div className="det">
                        <div>
                            <h2>St Judes Hospital</h2>
                            <p>Sarasota,FL. 33178</p>
                        </div>
                        <div>
                            <h2>10&nbsp;&nbsp;&nbsp;&nbsp;   -   &nbsp;&nbsp;&nbsp;17</h2>
                            <p>October &nbsp;&nbsp; December</p></div>
                        <div>
                            <h2>20 Rooms</h2>
                            <p>10 Singles, 10 Doubles</p></div>
                    </div>
                    <div className="type">
                        <span>Received</span>
                        <span>Negotiating</span>
                        <span>Completed</span>
                    </div>
                </div>

                <div id="div22">
                    <div className="det">
                        <div>
                            <h2>St Judes Hospital</h2>
                            <p>Sarasota,FL. 33178</p>
                        </div>
                        <div>
                            <h2>10&nbsp;&nbsp;&nbsp;&nbsp;   -   &nbsp;&nbsp;&nbsp;17</h2>
                            <p>October &nbsp;&nbsp; December</p></div>
                        <div>
                            <h2>20 Rooms</h2>
                            <p>10 Singles, 10 Doubles</p></div>
                    </div>
                    <div className="type">
                        <span>Completed</span>
                    </div>


                    <div id="card-div">
                        {
                            el.map((e, i) => {
                                return (
                                    <CardComponent isRare={e} />
                                )
                            })
                        }

                    </div>


                </div>
            </div>
            <img src={contact} alt="contact" id="msg" />
        </div>
    )
}