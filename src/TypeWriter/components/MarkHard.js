import React, { useEffect, useState } from 'react'


const MarkHard = () => {
    const mySkills = ["Web Developer", "Web Designer", "UI/UX Designer"]

    const [loopNum, setLoopNum] = useState(0)

    const [isDeleting, setIsDeleting] = useState(false)
    // isDeleting is false because we start by typing first then deleting each word by word.

    const [text, setText] = useState("")

    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000
    // Denotes time period between each letters being deleted

    const [index, setIndex] = useState(1);

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta);

        return () => { clearInterval(ticker) }
    }, [text])

    const tick = () => {
        let i = loopNum % mySkills.length
        let fullText = mySkills[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        }

        else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        }

        else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <div className='mark'>
            {text}
        </div>
    )
}

export default MarkHard