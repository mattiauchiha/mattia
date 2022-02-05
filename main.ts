input.onButtonPressed(Button.A, function () {
    strip.clear()
    strip.show()
    basic.showString("Hello! eboic mibo!!!")
    basic.showIcon(IconNames.Heart)
    basic.pause(100)
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Diamond)
    if (Math.randomBoolean()) {
        basic.showIcon(IconNames.Skull)
    } else {
        basic.showIcon(IconNames.Square)
    }
})
input.onSound(DetectedSound.Loud, function () {
    basic.showIcon(IconNames.Surprised)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    strip.clear()
    strip.show()
    red = 255
    green = 0
    blue = 0
    for (let index = 0; index < 25; index++) {
        strip.showColor(neopixel.rgb(red, green, 255))
        strip.show()
        green += 10
        red += -10
        basic.pause(100)
    }
    for (let index = 0; index < 25; index++) {
        strip.showColor(neopixel.rgb(red, green, 255))
        strip.show()
        green += 10
        red += -10
        basic.pause(200)
    }
})
let blue = 0
let green = 0
let red = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
basic.clearScreen()
strip.show()
strip.clear()
basic.forever(function () {
	
})
