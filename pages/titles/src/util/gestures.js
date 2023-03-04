const { GestureDescription, Finger, FingerCurl } = window.fp

const ScrollDownGesture = new GestureDescription('scroll-down'); // ✊️
const ScroolUpGesture = new GestureDescription('scroll-up'); // 🖐
const ClickGesture = new GestureDescription('click'); // 👌

// ScrollDownGesture

// thumb: half curled
// accept no curl with a bit lower confidence
ScrollDownGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
ScrollDownGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);

// all other fingers: curled
for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
    ScrollDownGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
    ScrollDownGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9);
}

// ScroolUpGesture - No finger should be curled

for (let finger of Finger.all) {
    ScroolUpGesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
}

// ClickGesture - Thumb and index finger should be curled
ClickGesture.addCurl(Finger.Index, FingerCurl.HalfCurl, 0.8)
ClickGesture.addCurl(Finger.Index, FingerCurl.FullCurl, 0.5)

ClickGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0)
ClickGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.4)

for (let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
    ClickGesture.addCurl(finger, FingerCurl.HalfCurl, 1.0);
    ClickGesture.addCurl(finger, FingerCurl.FullCurl, 0.9);
}

const knowGestures = [
    ScrollDownGesture,
    ScroolUpGesture,
    ClickGesture
]

const gestureStrings = {
    'scroll-down': '✊️',
    'scroll-up': '🖐',
    'click': '👌'
}

export { knowGestures, gestureStrings }
