import * as THREE from 'three';

function cameraSetup(dataSource) {
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    camera.position.x = -3;
    camera.position.y = 5;
    camera.position.z = 5;

    return camera;
}

export default cameraSetup;