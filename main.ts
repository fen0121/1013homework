let x4 = 0
let x0 = 0
basic.forever(function () {
    x4 = 4
    for (let index = 0; index < 5; index++) {
        led.plot(x4, 4)
        basic.pause(500)
        x4 = x4 - 1
    }
    basic.clearScreen()
    x0 = 0
    for (let x0 = 0; x0 <= 4; x0++) {
        led.plot(x0, 3)
        basic.pause(500)
    }
    basic.clearScreen()
    x4 = 4
    for (let index = 0; index < 5; index++) {
        led.plot(x4, 2)
        basic.pause(500)
        x4 = x4 - 1
    }
    basic.clearScreen()
    x0 = 0
    for (let x0 = 0; x0 <= 4; x0++) {
        led.plot(x0, 1)
        basic.pause(500)
    }
    basic.clearScreen()
    x4 = 4
    for (let index = 0; index < 5; index++) {
        led.plot(x4, 0)
        basic.pause(500)
        x4 = x4 - 1
    }
    basic.clearScreen()
})
