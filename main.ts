input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.acceleration(Dimension.Strength))
})
radio.setGroup(17)
input.setAccelerometerRange(AcceleratorRange.FourG)
basic.forever(function () {
    if (input.acceleration(Dimension.Strength) < 100) {
        basic.showIcon(IconNames.Yes)
        radio.sendString("DoorOpen")
        music.startMelody(music.builtInMelody(Melodies.Blues), MelodyOptions.Forever)
    } else {
        basic.clearScreen()
        radio.sendString("DoorClosed")
    }
    basic.pause(2000)
})
