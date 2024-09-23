// takes XML format Surface object and returns array of point numbers
import setCenterVertex from './setCenterVertex.js';
import moveSurfacePoints from './moveSurfacePoints.js';

function xmlExtractSurfacePoints (xmlSurface) {

    let points = [];

    const pointCollection = xmlSurface.getElementsByTagName("P"); // type htmlCollection
    const pointNodes = Array.from(pointCollection);

    // if first point ID is not 0, fill point list with null points
    if (pointNodes[0].getAttribute("id") != 0)
        for (let i = 0; i < pointNodes[0].getAttribute("id"); i++) { 
            points.push(null, null, null);
        }

    for (let i = 0; i < pointNodes.length; i++) {
        const vertexString = pointNodes[i].firstChild.data;
        const vertexStringArray = vertexString.split(' ');
        for (let j = 0; j < 3; j++) {
            points.push(parseFloat(vertexStringArray[j]));
        }
    }

    const centerPoint = setCenterVertex(points);

    // shift all points to origin
    points = moveSurfacePoints(points, centerPoint);

    console.log(points);
    return points;
}

export default xmlExtractSurfacePoints;