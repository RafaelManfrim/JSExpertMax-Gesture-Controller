export default class HandGestureView {
  loop(fn) {
    requestAnimationFrame(fn)
  }

  scrollPage() {
    scroll({
      top,
      behavior: "smooth"
    })
  }
}