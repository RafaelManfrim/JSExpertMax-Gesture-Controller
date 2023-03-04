import { prepareRunChecker } from "../../../../lib/shared/util.js"

const { shouldRun: scrollShouldRun } = prepareRunChecker({ timerDelay: 300 })

export default class HandGestureController {
  #view
  #service
  #camera
  #lastDirection = {
    direction: "",
    y: 0,
  }

  constructor({ view, service, camera }) {
    this.#view = view
    this.#service = service
    this.#camera = camera
  }

  async init() {
    return this.#loop()
  }

  static async initialize(deps) {
    const controller = new HandGestureController(deps)
    return controller.init()
  }

  async #loop() {
    await this.#service.initializeDetector()
    await this.#estimateHands()
    this.#view.loop(this.#loop.bind(this))
  }

  async #estimateHands() {
    try {
      const hands = await this.#service.estimateHands(this.#camera.video)
      for await (const { event, score, x, y } of this.#service.detectGestures(hands)) {
        if (event.includes("scroll") && score >= 0.9) {
          if (!scrollShouldRun()) {
            continue
          }

          this.#scrollPage(event)
        }
      }
    } catch (error) {
      console.error(error)
    }
  }

  #scrollPage(direction) {
    const pixelsPerScroll = 100

    if (this.#lastDirection.direction === direction) {
      this.#lastDirection.y = (
        direction === "scroll-down" ? this.#lastDirection.y + pixelsPerScroll : this.#lastDirection.y - pixelsPerScroll
      )
    } else {
      this.#lastDirection.direction = direction
    }

    this.#view.scrollPage(this.#lastDirection.y)
  }
}