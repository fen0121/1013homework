let x = 0
basic.forever(function () {
    x = 4
    for (let index = 0; index < 5; index++) {
        led.plot(x, 4)
        basic.pause(500)
        x = x - 1
    }
    basic.clearScreen()
    x = 0
    for (let index = 0; index < 5; index++) {
        led.plot(x, 3)
        basic.pause(500)
        x = x + 1
    }
    basic.clearScreen()
    x = 4
    for (let index = 0; index < 5; index++) {
        led.plot(x, 2)
        basic.pause(500)
        x = x - 1
    }
    basic.clearScreen()
    x = 0
    for (let index = 0; index < 5; index++) {
        led.plot(x, 1)
        basic.pause(500)
        x = x + 1
    }
    basic.clearScreen()
    x = 4
    for (let index = 0; index < 5; index++) {
        led.plot(x, 0)
        basic.pause(500)
        x = x - 1
    }
    basic.clearScreen()
})
