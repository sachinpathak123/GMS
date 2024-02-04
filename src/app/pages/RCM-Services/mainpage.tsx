import React from "react";
import 'C:/ZIP/ZIP/ZIP/src/App.css';
function mainpage() {
    return (
        <div className="w-full">
            <div className="container">
                <div className="triangle top-left"></div>
                <div className="dark-triangle"></div>
                <div className="content">
                    <span className="g">Great </span>
                    <span className="pr"> Product </span>
                    <span className="g"> is </span>
                    <div className="built">built by great
                        <span className="teams"> teams</span>
                    </div>
                    <p>We help build and manage a team of world-class developers to bring your vision to life.</p>
                    <button className="b">Let's get started!</button>
                </div>
                <div className="image">
                    <img src="description.png" alt="Description" />
                </div>
                <div className="bottom-right-rectangle"></div>
                <div className="triangle bottom-right"></div>

            </div>
        </div>
    );
}

export default mainpage;