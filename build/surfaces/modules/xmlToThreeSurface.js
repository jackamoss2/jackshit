// provides three.js surface from XML data

import * as THREE from 'three';

import xmlExtractSurface from './modules/xmlExtractSurface.js';
import xmlExtractSurfacePoints from './modules/xmlExtractSurfacePoints.js';

function generateSurface(xmlDataString) {
    const xmlSurface = xmlExtractSurface(xmlDataString);

    const geometry = new THREE.BufferGeometry();

    const vertices = new Float32Array(xmlExtractSurfacePoints(xmlSurface));

    const indices = [
        0, 1, 2,
        2, 3, 0,
    ];

    indices.push(1, 2, 4);

    geometry.setIndex( indices );
    geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );

    const material = new THREE.MeshBasicMaterial( {
    color: 0xff0000,
    wireframe: true
    } );

    const mesh = new THREE.Mesh( geometry, material );
    return mesh;
} 

export default generateSurface;