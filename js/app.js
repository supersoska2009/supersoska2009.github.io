// 3D Scroll

alert("хуй?")

let zSpasing = -1000,
lastPos = zSpasing / 5,
$frames = document.getElementsByClassName('frame'),
frames = Array.from($frames),
zVals = []

window.onscroll = function() {
    let top = document.documentElement.scrollTop,
    delta = lastPos - top

    lastPos = top

    frames.forEach(function(n, i) {
zVals.push((i * zSpasing) + zSpasing)
zVals[i] += delta * -5
let frame = frames[i],
transform = `translateZ(${zVals[i]}px)`
opacity = zVals[i] < Math.abs(zSpasing) / 2 ? 1 : 0
frame.setAttribute('style', `transform:${transform}; opacity: ${opacity}` )
    })
}
window.scrollTo(0, 1)