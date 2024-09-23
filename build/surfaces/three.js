// uses wave simulation equations derived in this article:
// https://medium.com/@matiasortizdiez/beginners-introduction-to-natural-simulation-in-python-ii-simulating-a-water-ripple-809356ffcb43

import * as THREE from 'three';
import { OrbitControls } from 'OrbitControls';


import readLocalFile from "./modules/readLocalFile.mjs";
import xmlToThreeSurface from './modules/xmlToThreeSurface.mjs';
import cameraSetup from './modules/cameraSetup.mjs';




const dataSource = "Wilsonville_Ramp.xml";
const xmlDataString = readLocalFile("./geometry/" + dataSource);




const scene = new THREE.Scene();
scene.background = new THREE.Color( 0x202020 );
const renderer = new THREE.WebGLRenderer();

const camera = cameraSetup(xmlDataString);
// controls setup
const controls = new OrbitControls(camera, renderer.domElement);
// controls.target = new THREE.Vector3(centerVertex(xmlDataString));


controls.target = new THREE.Vector3(0, 0, 0);
controls.update();

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

window.addEventListener("resize", onWindowResize, false);

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}

// lighting
scene.add(new THREE.AmbientLight(0xffffff, 0.5));
const dirLight = new THREE.DirectionalLight(0xbfb58f, 1.0);
dirLight.position.x += 50
dirLight.position.y += 80
dirLight.position.z += 40
dirLight.castShadow = true
dirLight.shadow.mapSize.width = 4096;
dirLight.shadow.mapSize.height = 4096;
const d = 25;
dirLight.shadow.camera.left = - d;
dirLight.shadow.camera.right = d;
dirLight.shadow.camera.top = d; 
dirLight.shadow.camera.bottom = - d;

let target = new THREE.Object3D();
dirLight.target = target;
dirLight.target.updateMatrixWorld();

dirLight.shadow.camera.lookAt(0, 0, -30);
scene.add(dirLight);


function animate() {
	renderer.render( scene, camera );
};


const mesh = xmlToThreeSurface(xmlDataString);

scene.add( mesh );
