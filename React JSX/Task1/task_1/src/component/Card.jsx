import React from 'react'
// var _jsxFileName = "C:/SMIT BATCH(20)/React JSX/Task1/task_1/src/component/Card.jsx";
// import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
const Card = () => {

    let arrObj = [{
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHydtu55XyB5tZUoGl6cgUKh5l5TNIuIIcfu241iLaHA&s=10",
        name: "Web Developmet",
    }, {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4xkwPmD4C2htuwHtNTsOiJpvI0Sovnnu76t1ggzq8kQ&s=10",
        name: "MS office"
    }, {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROCPLCkq-wPuG5OgCoadu4EUIEFzB9cLsg6huw5ROogg&s=10",
        name: "Crypto"
    }]
    return (
        <section>
            <div className="card">
                {
                    arrObj.map((data) => (
                        <>
                            <div className="course" data-aos="flip-up">

                                <img src={data.img} alt="" srcset="" width={200} height={200} />
                                <div className="inf_course">
                                    <h3>{data.name}</h3>
                                </div>
                            </div >
                        </>
                    ))
                }
            </div>
        </section >
    )
}

export default Card