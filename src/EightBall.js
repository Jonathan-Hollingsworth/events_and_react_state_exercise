import React, {useState} from 'react';

function EightBall({answers}) {

    const [msg, setMsg] = useState("Think of a Question")
    const [color, setColor] = useState("black")

    function handleAnswer(){
        const idx = Math.floor(Math.random() * answers.length)
        const answer = answers[idx]
        setMsg(answer.msg)
        setColor(answer.color)
    }

    function resetBall(){
        setMsg("Think of a Question")
        setColor("black")
    }
    
    return (
        <div className='eightball'>
          <div className={`eightball-${color}`} onClick={handleAnswer}>
            {msg}
          </div>
          <br />
          <button className='eightball-reset' onClick={resetBall}>Reset</button>
        </div>
    )
}

export default EightBall;