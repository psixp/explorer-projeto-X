import Controls from "./controls.js"

import Timer from "./timer.js"

const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundOn = document.querySelector('.soundOn')
const buttonSoundOff = document.querySelector('.soundOff')
const displayMinutes = document.querySelector('.minutes')
const displaySeconds = document.querySelector('.seconds')

let minutes = Number(displayMinutes.textContent)

const controls = Controls({
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonStop
})

const timer = Timer({
    displayMinutes,
    displaySeconds,
    resetControls: controls.reset,
    minutes
})


// Event-Driven

buttonPlay.addEventListener('click', () => {
    controls.play()
    timer.countdown()
})

buttonPause.addEventListener('click', () => {
    controls.pause()
    timer.hold()

})

buttonStop.addEventListener('click', () => {
    controls.reset()
    timer.reset()
})

buttonSoundOff.addEventListener('click', () => {
    buttonSoundOn.classList.remove('hide')
    buttonSoundOff.classList.add('hide')
})

buttonSoundOn.addEventListener('click', () => {
    buttonSoundOff.classList.remove('hide')
    buttonSoundOn.classList.add('hide')
})

buttonSet.addEventListener('click', () => {
    let newMinutes = controls.getMinutes()

    if (!newMinutes) {
        timer.reset()
        return
    }

    minutes = newMinutes
    timer.updateDisplay(minutes, 0)
    timer.updateMinutes(minutes)
})
