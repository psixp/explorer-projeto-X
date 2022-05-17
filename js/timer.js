import Controls from "./controls.js"


export default function Timer({
    displayMinutes,
    displaySeconds,
    resetControls,
    minutes
}) {

    let timerTimeOut

    function updateDisplay (minutes, seconds) {
        displayMinutes.textContent = String(minutes).padStart(2, '0')
        displaySeconds.textContent = String(seconds).padStart(2, '0')
    }

    function reset(){
        updateDisplay(minutes, 0)
        clearTimeout(timerTimeOut)
    }

    function countdown ()  {
        timerTimeOut = setTimeout(() => {
            let seconds = Number(displaySeconds.textContent)
            let minutes = Number(displayMinutes.textContent)

            updateDisplay(minutes, 0)

            if (minutes <= 0) {
                resetControls()
                return
            }

            if (seconds <= 0) {
                seconds = 60
                --minutes
            }

            updateDisplay(minutes, String(seconds - 1))

            countdown()
        }, 1000)
    }

    function updateMinutes (newMinutes) {
        minutes = newMinutes
    }

    function hold () {
        clearTimeout(timerTimeOut)
    }

    return {
        countdown,
        reset,
        updateDisplay,
        updateMinutes,
        hold
    }

}