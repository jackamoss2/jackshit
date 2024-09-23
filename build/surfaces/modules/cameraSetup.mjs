import * as THREE from 'three';


function cameraSetup(xmlDataString) {
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    camera.position.x = 15;
    camera.position.y = 15;
    camera.position.z = 15;

    return camera;
}

export default cameraSetup;