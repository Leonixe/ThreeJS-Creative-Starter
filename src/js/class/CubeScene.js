import {BaseScene} from './BaseScene'
import * as THREE from 'three'

export class CubeScene extends BaseScene {
  /**
  * @override
  */
  onStart (canvas) {
    console.log('HERE');
    super.onStart(canvas)
    this.cube = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
    )
    this.scene.add(this.cube)
    this.camera.position.z = 5
  }

  onUpdate (delta) {
    this.cube.rotation.x += 1 * delta
    this.cube.rotation.y += 1 * delta
  }

  onDestroy () {
    super.onDestroy()
    this.cube = null
  }
}
