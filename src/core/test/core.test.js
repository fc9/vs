/** test native propeties * /
_('#hb1').innerHTML
_('#hb1').innerHTML = '<code>Ayu</code>'
_('#hb1').style.border = '1px solid yellow'
_('#hb1').classList.add('newclass')
_('#hb1').classList.remove('newclass')
_('#hb1').appendChild(document.createElement('div'))
_('#hb1').utc
_('#hb1').utc = 'Rafinha'
_('#hb1').node
_('#hb1').width(`200px`,'2s')
console.log(_('#hb1').width())
/** end : test native propeties */


/** test _recurringTimer * /
var count1 = count2 = 0
console.log('time', count1, count2)
var interval = _recurringTimer(function () {
        count2++
    }, 1000, 1000 * 10, function () { console.log('end') } )
var counter = setInterval(function () {
    console.log('time', ++count1, count2)
}, 1000)
window.setTimeout(function () {
    interval.pause()
    window.setTimeout(function () {
        interval.resume()
    }, 3000)
}, 4000)
window.setTimeout(function () {
    window.clearTimeout(counter);
}, 20000)
/** end : test _recurringTimer */


/** test _timer * /
var count = 0,
    timer = _timer(function () {
        console.log("Done!")
    }, 2000)
timer.pause()
window.setTimeout(function () { timer.resume() }, 3000)
setInterval(function () {
    console.log(count++)
}, 1000)
/** end : test _timer */