import {Scene} from './Scene'
import * as THREE from 'three'

export class BaseScene extends Scene {
  /**
  * @override
  */
  onStart (canvas) {
    this.scene = new THREE.Scene()
    this.renderer = new THREE.WebGLRenderer({canvas, antialias: true, alpha: false})
    this.camera = new THREE.PerspectiveCamera(75, this.renderer.getSize().width / this.renderer.getSize().height, 0.1, 1000)
  }

  onUpdate (delta) {

  }

  onRender () {
    this.renderer.render(this.scene, this.camera)
  }

  onDestroy () {
    for (let child of this.scene.children) {
      this.scene.remove(child)
    }
    this.scene = null
    this.camera = null
    this.renderer.dispose()
  }
}
