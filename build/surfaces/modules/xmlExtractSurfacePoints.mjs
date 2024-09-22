// takes XML format Surface object and returns array of point numbers
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
        for (let i = 0; i < 3; i++) {
            points.push(parseFloat(vertexStringArray[i]));
        }
    }

    return points;
}

export default xmlExtractSurfacePoints;