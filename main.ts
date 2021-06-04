input.onGesture(Gesture.Shake, function () {
    Peso = 74
})
let Peso = 0
Peso = 74
let Estatura = 180
let IMC = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) && !(input.buttonIsPressed(Button.B))) {
        Peso += 1
        basic.showNumber(Peso)
    }
    if (input.buttonIsPressed(Button.B) && !(input.buttonIsPressed(Button.A))) {
        if (Peso > 0) {
            Peso += -1
            basic.showNumber(Peso)
        } else {
            basic.showIcon(IconNames.Confused)
        }
    }
    if (input.buttonIsPressed(Button.AB)) {
        IMC = 10000 * (Peso / (Estatura * Estatura))
        basic.showNumber(IMC)
        if (IMC < 18.5) {
            basic.showString("DELGADO")
        }
        if (18.5 <= IMC && IMC <= 25) {
            basic.showString("SALUDABLE")
        }
        if (25 < IMC && IMC <= 30) {
            basic.showString("SOBREPESO")
        }
        if (IMC > 30) {
            basic.showString("OBESIDAD")
        }
    }
})
