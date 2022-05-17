import Controls from "./controls.js"

import Timer from "./timer.js"

import {elements} from "./elements.js"

import Sound from "./sound.js"

const {
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,
    buttonSoundOff,
    buttonSoundOn,
    displayMinutes,
    displaySeconds} = elements

const controls = Controls({
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonStop
})

const timer = Timer({
    displayMinutes,
    displaySeconds,
    resetControls: controls.reset
})

const sound = Sound()


// Event-Driven

buttonPlay.addEventListener('click', () => {
    controls.play()
    timer.countdown()
    sound.pressButton()
})

buttonPause.addEventListener('click', () => {
    controls.pause()
    timer.hold()
    sound.pressButton()

})

buttonStop.addEventListener('click', () => {
    controls.reset()
    timer.reset()
    sound.pressButton()
})

buttonSoundOff.addEventListener('click', () => {
    buttonSoundOn.classList.remove('hide')
    buttonSoundOff.classList.add('hide')
    sound.bgAudio.pause()
})

buttonSoundOn.addEventListener('click', () => {
    buttonSoundOff.classList.remove('hide')
    buttonSoundOn.classList.add('hide')
    sound.bgAudio.play()
})

buttonSet.addEventListener('click', () => {
    let newMinutes = controls.getMinutes()

    if (!newMinutes) {
        timer.reset()
        return
    }
    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
})
