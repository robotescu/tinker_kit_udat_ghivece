basic.showIcon(IconNames.Yes)
basic.pause(2000)
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P1) < 500) {
        basic.showLeds(`
            . # # # #
            . . . # #
            . # . # #
            . . . # #
            . # . # #
            `)
        music.playTone(262, music.beat(BeatFraction.Whole))
        pins.digitalWritePin(DigitalPin.P2, 1)
    } else {
        basic.showLeds(`
            . # # # #
            . . . # #
            . . . # #
            . . . # #
            . . . # #
            `)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
    basic.pause(1000)
})
