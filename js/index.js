import Controls from "./controls.js"

import Timer from "./timer.js"

import {elements} from "./elements.js"

import Sound from "./sound.js"

import Events from "./events.js"

const {
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,
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

Events({controls, sound, timer})



