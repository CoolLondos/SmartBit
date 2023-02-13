function Full_Clear () {
    led.stopAnimation()
    basic.clearScreen()
}
let Degrees = 0
let App_To_Be_Selected = "None"
let App_Selected = "Menu"
basic.showString("Select App")
basic.forever(function () {
    Degrees = input.compassHeading()
    if (App_Selected == "Compass") {
        Full_Clear()
        if (Degrees < 45) {
            basic.showString("N")
        } else if (Degrees < 135) {
            basic.showString("E")
        } else if (Degrees < 255) {
            basic.showString("S")
        } else if (Degrees < 315) {
            basic.showString("W")
        } else {
            basic.showString("N")
        }
    }
})
