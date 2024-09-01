// uses wave simulation equations derived in this article:
// https://medium.com/@matiasortizdiez/beginners-introduction-to-natural-simulation-in-python-ii-simulating-a-water-ripple-809356ffcb43

import * as THREE from 'three';
import { OrbitControls } from 'OrbitControls';



// todo:
// reevaluate shadow effects

// scene setup ----------------
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);


// camera setup ----------------
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.setZ(0);
camera.position.setX(-70);
camera.position.setY(50);


// renderer setup ----------------
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});
// renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);
renderer.shadowMap.enabled = true;


// controls setup - remove when implementing? ----------------
const controls = new OrbitControls(camera, renderer.domElement);
controls.target = new THREE.Vector3(0, 0, 0);
controls.update();

// light setup - rearrange before implimenting ----------------
// ambient light
scene.add(new THREE.AmbientLight(0xffffff, 0.5));
// directional light
const dirLight = new THREE.DirectionalLight(0xbfb58f, 1.0)

//temp
const geometry2 = new THREE.SphereGeometry(5,5)
const material2 = new THREE.MeshBasicMaterial({
    color:0xffffff,
})
const sphere = new THREE.Mesh(geometry2, material2);

sphere.position.setZ(0);
sphere.position.setX(0);
sphere.position.setY(0);

scene.add(sphere);
console.log('loaded sphere')    



dirLight.position.x += 50
dirLight.position.y += 20
dirLight.position.z += 20
dirLight.castShadow = true
dirLight.shadow.mapSize.width = 4096;
dirLight.shadow.mapSize.height = 4096;
const d = 25;
dirLight.shadow.camera.left = - d;
dirLight.shadow.camera.right = d;
dirLight.shadow.camera.top = d;
dirLight.shadow.camera.bottom = - d;
dirLight.position.z = -30;

let target = new THREE.Object3D();
target.position.z = -30;
dirLight.target = target;
dirLight.target.updateMatrixWorld();

dirLight.shadow.camera.lookAt(0, 0, -30);
scene.add(dirLight);
// scene.add( new THREE.CameraHelper( dirLight.shadow.camera ) );


function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
};
window.addEventListener('resize', onWindowResize);