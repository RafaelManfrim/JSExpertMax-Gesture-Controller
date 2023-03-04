import { suportsWorkerType } from "../../../lib/shared/util.js"
import Camera from "../../../lib/shared/camera.js"
import Controller from "./controller.js"
import Service from "./service.js"
import View from "./view.js"

const [rootPath] = window.location.href.split('/pages/');

const view = new View()

view.setVideoSrc(`${rootPath}/assets/video.mp4`)

async function getWorker() {
  if (suportsWorkerType()) {
    const worker = new Worker('./src/worker.js', { type: "module" })
    return worker
  }

  console.warn("Web Workers are not supported in this browser.")
  console.log("Importing libraries")

  await import("https://unpkg.com/@tensorflow/tfjs-core@2.4.0/dist/tf-core.js")
  await import("https://unpkg.com/@tensorflow/tfjs-converter@2.4.0/dist/tf-converter.js")
  await import("https://unpkg.com/@tensorflow/tfjs-backend-webgl@2.4.0/dist/tf-backend-webgl.js")
  await import("https://unpkg.com/@tensorflow-models/face-landmarks-detection@0.0.1/dist/face-landmarks-detection.js")

  console.warn("Using worker mock instead")

  const service = new Service({
    faceLandmarksDetection: window.faceLandmarksDetection
  })

  const workerMock = {
    async postMessage(video) {
      const blinked = await service.handBlinked(video)

      if (!blinked) {
        return
      }

      workerMock.onmessage({ data: blinked })
    },
    onmessage(msg) { }
  }

  await service.loadModel()

  setTimeout(() => workerMock.onmessage({ data: "model loaded" }), 300)

  return workerMock
}

const worker = await getWorker()

worker.postMessage("hey")

const camera = await Camera.init()

const factory = {
  async initialize() {
    return Controller.initialize({
      view,
      camera,
      worker,
      videoUrl: `${rootPath}/assets/video.mp4`
    })
  }
}

export default factory
