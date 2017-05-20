/**
* A scene of the SceneManager.
*/
export class Scene {
  /*
  */
  constructor () {
    this.SceneManager = null
  }

  /**
  * This method is called when the scene is created by the SceneManager in order to
  * create the scene (objets, camera, etc…).
  *
  * @param {DOMElement} canvas Scene's canvas
  */
  onStart (canvas) {

  }

  /**
  * Use this method to update data
  *
  * @param {number} delta Period between two call of update
  */
  onUpdate (delta) {

  }

  /**
  * Use this method to displayed elements
  *
  */
  onRender () {

  }

  /**
  * This method is called when the scene is destroy by the SceneManager
  *
  */
  onDestroy () {

  }

  /**
  * Get the SceneManager parent of the scene.
  *
  * @return {SceneManager} scene's SceneManager parent
  */
  getSceneManager () {
    return this.SceneManager
  }

  /**
  * Set the scene's SceneManager parent. Shut down the ancient scene's SceneManager parent if
  * the scene have already a SceneManager parent.
  *
  * @param {object} newSceneManager The scene's SceneManager
  */
  setSceneManager (newSceneManager) {
    if (newSceneManager !== this.SceneManager) {
      if (this.SceneManager != null) {
        let oldSceneManager = this.SceneManager
        this.SceneManager = null
        oldSceneManager.setScene(null)
      }
      this.SceneManager = newSceneManager
      if (newSceneManager != null) {
        newSceneManager.setScene(this)
      }
    }
  }

}
