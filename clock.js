document.addEventListener('DOMContentLoaded', function() {
  var secondHand = document.querySelector('#second')
  var minuteHand = document.querySelector('#minute')
  var hourHand = document.querySelector('#hour')

  var secondDegree = 6
  var minuteDegree = 6
  var hourDegree = 30

  var secondInterval = 500

  // var second = 0
  // var minute = 0
  // var hour = 0

  function getRealTime() {
    var now = new Date()
    var second = now.getSeconds()
    var minute = now.getMinutes()
    var hour = now.getHours()
    // secondRotation(second)
    // minuteRotation(minute)
    // hourRotation(hour)
    updateTime('second', second, secondDegree)
    updateTime('minute', minute, minuteDegree)
    updateTime('hour', hour, hourDegree)
    console.log(now, now.getHours() % 12, now.getMinutes(), now.getSeconds())
  }

  function updateTime(element, timeUnit, degree) {
    var clockElement = document.querySelector('#' + element)
    clockElement.style.transform = 'rotate(' + timeUnit * degree + 'deg)'
  }

  // function secondRotation(second) {
  //   secondHand.style.transform = 'rotate(' + second * secondDegree + 'deg)'
  //   // second++
  //   // minuteRotation()
  //   // hourRotation()
  // }
  //
  // function minuteRotation(minute) {
  //   // minute = Math.floor(second / 60)
  //   // minute = second / 60
  //   minuteHand.style.transform = 'rotate(' + minute * minuteDegree + 'deg)'
  // }
  //
  // function hourRotation(hour) {
  //   // hour = Math.floor(minute / 60)
  //   // hour = minute / 60
  //   hourHand.style.transform = 'rotate(' + hour * hourDegree + 'deg)'
  // }

  // setInterval(secondRotation, secondInterval)
  setInterval(getRealTime, secondInterval)
})
