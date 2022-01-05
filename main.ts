radio.onReceivedString(function (receivedString) {
    明るさ = receivedString
})
let 明るさ = 0
radio.setGroup(237)
basic.forever(function () {
    led.plotBarGraph(
    明るさ,
    255
    )
})
