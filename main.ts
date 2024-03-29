input.onButtonPressed(Button.A, function () {
    serial.writeLine("Button A")
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
        if (Settings_Item == "Back") {
            Settings_Item = "Back"
        } else if (Settings_Item == "Reboot") {
            Settings_Item = "Back"
        } else if (Settings_Item == "Cal compass") {
            Settings_Item = "Reboot"
        }
    }
})
function Full_Clear () {
    led.stopAnimation()
    basic.clearScreen()
}
input.onButtonPressed(Button.B, function () {
    serial.writeLine("Button B")
    if (App_Selected == "Menu") {
        Full_Clear()
        if (App_To_Be_Selected == "Compass") {
            App_To_Be_Selected = "Steps"
        } else if (App_To_Be_Selected == "Steps") {
            App_To_Be_Selected = "Mag Detector"
        } else if (App_To_Be_Selected == "Mag Detector") {
            App_To_Be_Selected = "Settings"
        }
    } else if (App_Selected == "Settings") {
        Full_Clear()
        if (Settings_Item == "Back") {
            Settings_Item = "Reboot"
        } else if (Settings_Item == "Reboot") {
            Settings_Item = "Cal compass"
        } else if (Settings_Item == "Cal compass") {
            Settings_Item = "Cal compass"
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
    serial.writeLine("Logo Pressed")
    if (App_Selected == "Menu") {
        Full_Clear()
        Settings_Item = "Back"
        App_Selected = App_To_Be_Selected
        App_To_Be_Selected = "Menu"
    } else if (App_Selected == "Settings") {
        if (Settings_Item == "Back") {
            Full_Clear()
            App_Selected = "Menu"
        } else if (Settings_Item == "Reboot") {
            Full_Clear()
            control.reset()
        } else if (Settings_Item == "Cal compass") {
            Full_Clear()
            input.calibrateCompass()
        }
    } else {
        Full_Clear()
        App_Selected = "Menu"
    }
})
let Degrees = 0
let Steps = 0
let Settings_Item = ""
let App_Selected = ""
let App_To_Be_Selected = ""
App_To_Be_Selected = "Compass"
App_Selected = "Menu"
Settings_Item = "Back"
radio.setTransmitPower(1)
basic.showString("Select App")
serial.writeString("Serial: " + control.deviceSerialNumber())
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
        if (Settings_Item == "Back") {
            basic.showString("Back")
        } else if (Settings_Item == "Reboot") {
            basic.showString("Reboot")
        } else if (Settings_Item == "Cal compass") {
            basic.showString("Calibrate compass")
        }
    }
})
