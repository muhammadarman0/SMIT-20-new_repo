import React, { useState } from 'react'
import Form from './component/Form'
import ShowCard from './component/ShowCard'
import './App.css'

const App = () => {

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [rollNum, setRollNum] = useState("")
  const [img, setImg] = useState("")
  const [card, setShowCard] = useState(false)

  return (
    <div className="cont">

      <div className="formBox">
        <Form
          firstName={firstName}
          setFirstName={setFirstName}
          lastName={lastName}
          setLastName={setLastName}
          img={img}
          setImg={setImg}
          rollNum={rollNum}
          setRollNum={setRollNum}
          setShowCard={setShowCard}
          card={card}
        />
      </div>

      <div className="showBox">
        {card ? (
          <ShowCard
            firstName={firstName}
            lastName={lastName}
            img={img}
            rollNum={rollNum}
          />
        ) : (
          <div className="emptyCard">
            <div className="emptyIcon">🪪</div>
            <h2>Student ID Card</h2>
            <p>
              Fill the form and click <b>Generate Card</b>
              to preview your ID card.
            </p>
          </div>
        )}
      </div>

    </div>
  )
}

export default App