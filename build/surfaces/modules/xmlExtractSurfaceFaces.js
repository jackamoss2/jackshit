// takes XML format Surface object and returns array of point numbers
function xmlExtractSurfaceFaces (xmlSurface) {
    let faces = [];

    const faceCollection = xmlSurface.getElementsByTagName("F"); // type htmlCollection
    const faceNodes = Array.from(faceCollection);
    console.log(faceNodes);

    for (let i = 0; i < faceNodes.length; i++) {
        const faceString = faceNodes[i].firstChild.data;
        const faceStringArray = faceString.split(' ');
        for (let i = 0; i < 3; i++) {
            // if (faceNodes[i].getAttribute("i") != 1) // "i" attribute specifies that the face is part of the surface, but is not visible
            //     faces.push(parseFloat(faceStringArray[i]));
            faces.push(parseFloat(faceStringArray[i]));
            // console.log(faceStringArray[i]);
        }
    }
    
    return faces;
}

export default xmlExtractSurfaceFaces;