import { SceneManager } from './class/SceneManager'
import { CubeScene } from './class/CubeScene'

let canvas = document.getElementById('scene')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

let sceneManager = new SceneManager({canvas})
let cube = new CubeScene()

sceneManager.setScene(cube)
sceneManager.start()
