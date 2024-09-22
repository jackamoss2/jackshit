// provides three.js surface from XML data

import * as THREE from 'three';

import xmlExtractSurface from './xmlExtractSurface.mjs';
import xmlExtractSurfacePoints from './xmlExtractSurfacePoints.mjs';
import xmlExtractSurfaceFaces from './xmlExtractSurfaceFaces.mjs';



function generateSurface(xmlDataString) {
    const xmlSurface = xmlExtractSurface(xmlDataString);

    // https://threejs.org/docs/#api/en/core/BufferGeometry
    const geometry = new THREE.BufferGeometry();

    const vertices = new Float32Array(xmlExtractSurfacePoints(xmlSurface));

    const indices = xmlExtractSurfaceFaces(xmlSurface);

    geometry.setIndex(indices);
    geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));

    const material = new THREE.MeshBasicMaterial( {
    color: 0xff0000,
    wireframe: true
    } );

    const mesh = new THREE.Mesh( geometry, material );
    return mesh;
} 

export default generateSurface;