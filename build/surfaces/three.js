// uses wave simulation equations derived in this article:
// https://medium.com/@matiasortizdiez/beginners-introduction-to-natural-simulation-in-python-ii-simulating-a-water-ripple-809356ffcb43

import * as THREE from 'three';
import { OrbitControls } from 'OrbitControls';

// geometry imports
import readLocalFile from "./modules/readLocalFile.js";
import xmlToThreeSurface from './modules/xmlToThreeSurface.js';


const scene = new THREE.Scene();
scene.background = new THREE.Color( 0x202020 );

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();

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

// controls/camera setup
camera.position.x = -3;
camera.position.y = 5;
camera.position.z = 5;
const controls = new OrbitControls(camera, renderer.domElement);
controls.target = new THREE.Vector3(0, 0, 0);
controls.update();


// insert geometry
// const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// const material = new THREE.MeshStandardMaterial( {
//     color: 0xffaa55,
//     // wireframe: true
// } );
// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

const geometry = new THREE.BufferGeometry();

const vertices = new Float32Array( [
	-1.0, -1.0,  1.0, // v0
	 1.0, -1.0,  1.0, // v1
	 1.0,  1.0,  1.0, // v2
	-1.0,  1.0,  1.0, // v3
] );

const indices = [
	0, 1, 2,
	2, 3, 0,
];

geometry.setIndex( indices );
geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );

const material = new THREE.MeshBasicMaterial( {
  color: 0xff0000,
  wireframe: true
} );
const mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );

let dataSource = "2_Faces.xml";
let xmlDataString = readLocalFile("./geometry/" + dataSource);
let threeSurface = xmlToThreeSurface(xmlDataString);


// console.log(threeSurface);