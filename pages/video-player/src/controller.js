export default class Controller {
  #view
  #camera
  #worker

  constructor({ view, camera, worker }) {
    this.#view = view
    this.#camera = camera
    this.#worker = this.#configureWorker(worker)

    this.#view.configureOnBtnClick(this.onBtnStart.bind(this))
  }

  static async initialize(deps) {
    const controller = new Controller(deps)
    controller.log('Not yet detecting eye blink! Click in the button to start')
    return controller.init()
  }

  #configureWorker(worker) {
    let ready = false

    worker.onmessage = ({ data }) => {
      if (data === 'model loaded') {
        this.#view.enableButton()
        ready = true
        return
      }

      this.#view.togglePlayVideo()
    }

    return {
      send(msg) {
        if (!ready) {
          return
        }

        worker.postMessage(msg)
      }
    }
  }

  async init() {
    console.log('init')
  }

  loop() {
    const video = this.#camera.video
    const img = this.#view.getVideoFrame(video)
    this.#worker.send(img)

    setTimeout(() => this.loop(), 100)
  }

  log(message) {
    this.#view.log(message)
  }

  onBtnStart() {
    this.log("Initializing detection")
    this.loop()
  }
}