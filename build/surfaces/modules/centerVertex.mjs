// takes data source and returns averaged center vertex

import xmlExtractSurface from './xmlExtractSurface.mjs';
import xmlExtractSurfacePoints from './xmlExtractSurfacePoints.mjs';

function centerVertex(xmlDataString) {
    const xmlSurface = xmlExtractSurface(xmlDataString);
    const points = xmlExtractSurfacePoints(xmlSurface);

    let center = [];

    for (let i=0; i<3; i++) {
        var selectedValues = 0;
        length = 0;
        for (let j=i; j<points.length; j=j+3) {
            if (points[j] == null) {}
            else {
                selectedValues = selectedValues + points[j];
                length++;
            }             
        }
        const averageValue = selectedValues / length;
        center.push(averageValue);
    }

    return center;
}

export default centerVertex;