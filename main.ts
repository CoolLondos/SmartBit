input.onButtonPressed(Button.A, function () {
    if (App_Selected == "Menu") {
        Full_Clear()
        if (App_To_Be_Selected == "Steps") {
            App_To_Be_Selected = "Compass"
        } else if (App_To_Be_Selected == "Mag Detector") {
            App_To_Be_Selected = "Steps"
        } else if (App_To_Be_Selected == "Settings") {
            App_To_Be_Selected = "Mag Detector"
        }
    } else if (App_Selected == "Settings") {
        Full_Clear()
        if (true) {
        	
        }
    }
})
function Full_Clear () {
    led.stopAnimation()
    basic.clearScreen()
}
input.onButtonPressed(Button.B, function () {
    if (App_Selected == "Menu") {
        Full_Clear()
        if (App_To_Be_Selected == "Compass") {
            App_To_Be_Selected = "Steps"
        } else if (App_To_Be_Selected == "Steps") {
            App_To_Be_Selected = "Mag Detector"
        } else if (App_To_Be_Selected == "Mag Detector") {
            App_To_Be_Selected = "Settings"
        }
    }
})
input.onGesture(Gesture.Shake, function () {
    Steps += 1
    if (App_Selected == "Steps") {
        Full_Clear()
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (App_Selected == "Menu") {
        Full_Clear()
        App_Selected = App_To_Be_Selected
        App_To_Be_Selected = "Menu"
    } else {
        Full_Clear()
        App_Selected = "Menu"
    }
})
let Degrees = 0
let Settings_Item = ""
let Steps = 0
let App_Selected = ""
let App_To_Be_Selected = ""
App_To_Be_Selected = "Compass"
App_Selected = "Menu"
radio.setTransmitPower(1)
basic.showString("Select App")
basic.forever(function () {
    if (App_Selected == "Menu") {
        if (App_To_Be_Selected == "Compass") {
            Full_Clear()
            basic.showString("Compass")
        } else if (App_To_Be_Selected == "Steps") {
            Full_Clear()
            basic.showString("Steps")
        } else if (App_To_Be_Selected == "Menu") {
            App_To_Be_Selected = "Compass"
        } else if (App_To_Be_Selected == "Mag Detector") {
            Full_Clear()
            basic.showString("Magnet Detector")
        } else if (App_To_Be_Selected == "Settings") {
            Full_Clear()
            basic.showString("Settings")
        }
    }
})
basic.forever(function () {
    if (App_Selected == "Settings") {
        Full_Clear()
        Settings_Item = "Back"
    }
})
basic.forever(function () {
    if (App_Selected == "Mag Detector") {
        Full_Clear()
        basic.showString("" + (input.magneticForce(Dimension.Strength)))
    }
})
basic.forever(function () {
    if (App_Selected == "Steps") {
        Full_Clear()
        basic.showString("" + (Steps))
    }
})
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
