// provides three.js surface from XML data

import * as THREE from 'three';

function generateSurface(xmlDataString) {
    const xmlSurface = xmlExtractSurface(xmlDataString)
    console.log(xmlSurface)
}

function xmlExtractSurface (xmlDataString) {
    var parser, xmlData, xmlSurface;

    parser = new DOMParser();

    xmlData = parser.parseFromString(xmlDataString, "text/xml");
    xmlSurface = xmlData.getElementsByTagName("Surface")[0];
    
    return xmlSurface;
}

export default generateSurface