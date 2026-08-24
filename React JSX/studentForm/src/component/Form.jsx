import React from 'react'
// import App from '../App'
import Handler from './Handler'

const Form = ({ firstName, lastName, img, rollNum, setFirstName, setLastName, setImg, setRollNum, setShowCard, card }) => {
    const generatePassword = () => {
        const pass = Math.floor(Math.random() * 9000) + 1000
        if (firstName === "" || lastName === "" || !img) {
            alert("Fill yout fireld")
            return
        }
        setRollNum(pass)
        setShowCard(true)
    }

    return (
        <div className="student-container">

            <div className="student-form">

                <h1>Student ID Card</h1>

                <div className="input-group">
                    <label>First Name</label>
                    <input type="text" placeholder="Enter first name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>

                <div className="input-group">
                    <label>Last Name</label>
                    <input type="text" placeholder="Enter last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>

                <div className="input-group">
                    <label>Student Image</label>
                    <input type="file" accept="image/*" onChange={(e) => setImg(e.target.files[0])} />
                </div>

                <div className="input-group">
                    <label>Roll Number</label>
                    <input
                        type="text"
                        value="Random"
                        readOnly
                    />
                </div>

                <Handler title={generatePassword} />

            </div>

        </div>)
}

export default Form