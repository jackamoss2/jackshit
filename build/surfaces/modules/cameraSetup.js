import * as THREE from 'three';


function cameraSetup(xmlDataString) {
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);

    camera.position.x = 0;
    camera.position.y = 150;
    camera.position.z = 150;

    return camera;
}

export default cameraSetup;