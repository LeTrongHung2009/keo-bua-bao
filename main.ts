let RPS = 0
input.onGesture(Gesture.Shake, function () {
    RPS = randint(0, 2)
    if (RPS == 0) {
        basic.showLeds(`
            # # # . .
            # . . # .
            # # # . .
            # # . . .
            # . # . .
            `)
    }
    if (RPS == 1) {
        basic.showLeds(`
            # # # # .
            # . . # .
            # # # # .
            # . . . .
            # . . . .
            `)
    }
    if (RPS == 2) {
        basic.showLeds(`
            . . # # .
            . # . . .
            . # # # .
            . . . # .
            . # # . .
            `)
    }
})
basic.forever(function () {
	
})
