radio.onReceivedNumber(function (receivedNumber) {
    明るさ = receivedNumber
})
let 明るさ = 0
radio.setGroup(237)
basic.forever(function () {
    led.plotBarGraph(
    明るさ,
    255
    )
})
