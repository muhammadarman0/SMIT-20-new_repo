import React from 'react'
import Handler from './Handler'

const ShowCard = ({ firstName, lastName, img, rollNum }) => {
    return (
        <>
            {/* <h1>Student ID Card</h1> */}

            {/* <Form /> */}

            <div className="card">
                <div className="card-header">
                    <h2>STUDENT ID CARD</h2>
                </div>

                <div className="card-body">

                    <div className="student-image">
                        {img ? <img
                            src={img}
                            alt="Student"
                        />: null}
                    </div>

                    <div className="student-info">
                        {/* <h3>{firstName}</h3> */}

                        <p>
                            <strong>First Name:</strong> {firstName}
                        </p>

                        <p>
                            <strong>Last Name:</strong> {lastName}
                        </p>

                        <p>
                            <strong>Roll Number:</strong> {rollNum}
                        </p>
                    </div>
                </div>

                <div className="card-footer">
                    <p>Student • 2026</p>
                </div>
            </div>
        </>
    )
}

export default ShowCard