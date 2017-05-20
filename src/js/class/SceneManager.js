import { assign } from 'lodash'
/**
* The SceneManager
*/
export class SceneManager {
  /**
  *
  */
  constructor (options) {
    options = assign({
      'scene': null,
      'canvas': null
    }, options)

    this.running = false
    this.scene = options.scene
    this.handleAnimationFrame = this.handleAnimationFrame.bind(this)

    if (options.canvas) {
      this.canvas = options.canvas
    } else {
      this.canvas = document.createElement('canvas')
    }

    if (options.background) {
      this.background = options.background
    } else {
      this.background = document.createElement('div')
    }
  }

  /**
  * This method is called when the SceneManager is launched : start a requestAnimationFrame
  */
  start () {
    if (this.isRunning()) {
      throw new Error('Unable to start this experiement : the experiement is already running !')
    } else {
      this.running = true
      if (this.scene != null) {
        this.scene.onStart(this.canvas)
      }
      this.lastDelta = 0
      this.animationFrameId = window.requestAnimationFrame(this.handleAnimationFrame)
    }
  }

  /**
  * This methos is called when the SceneManager is quit : cancel the previous requestAnimationFrame
  */
  quit () {
    if (this.isRunning()) {
      this.running = false
      if (this.scene != null) {
        this.scene.onDestroy()
      }
      window.cancelAnimationFrame(this.animationFrameId)
    } else {
      throw new Error('Unable to quit this SceneManager : the SceneManager is not running !')
    }
  }

  /**
  * Return the state running of the scene (True or False)
  *
  * @return {boolean} The state running of the scene
  */
  isRunning () {
    return this.running
  }

  /**
  * Return actual scene
  */
  getScene () {
    return this.scene
  }

  /**
  * Set the new scene.
  * If there is already a scene running, the method shut it down and run the new one.
  *
  * @param {object} scene The scene
  */
  setScene (scene) {
    if (scene !== this.scene) {
      if (this.scene != null) {
        let oldScene = this.scene
        if (this.isRunning()) {
          oldScene.onDestroy()
        }
        this.scene = null
        oldScene.setSceneManager(null)
      }
      this.scene = scene
      if (scene != null) {
        scene.setSceneManager(this)
        if (this.isRunning()) {
          scene.onStart(this.canvas)
        }
      }
    }
  }

  /**
  * Return the SceneManager's canvas
  *
  * @return {DOMElement} the SceneManager's canvas
  */
  getCanvas () {
    return this.canvas
  }

  /**
  * Return the SceneManager's background
  *
  * @return {DOMElement} the SceneManager's dib background
  */
  getBackground () {
    return this.background
  }

  /**
  * Handle the requestAnimationFrame. Update the scene's data every seconds.
  *
  * @param {number} delta Delta time
  */
  handleAnimationFrame (delta) {
    // si scene update
    this.scene.onUpdate((delta - this.lastDelta) / 1000)
    // si scene rendu
    this.scene.onRender()
    this.animationFrameId = window.requestAnimationFrame(this.handleAnimationFrame)
    this.lastDelta = delta
  }
}
