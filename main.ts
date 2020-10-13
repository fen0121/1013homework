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
    for (let index = 0; index < 5; index++) {
        led.plot(x0, 3)
        basic.pause(500)
        x0 = x0 + 1
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
    for (let index = 0; index < 5; index++) {
        led.plot(x0, 1)
        basic.pause(500)
        x0 = x0 + 1
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
