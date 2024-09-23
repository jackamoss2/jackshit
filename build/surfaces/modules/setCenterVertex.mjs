// takes data source and returns averaged center vertex


function setCenterVertex(points) {

    let centerPoint = [];

    for (let i=0; i<3; i++) {
        var selectedValues = 0;
        length = 0;
        for (let j=i; j<points.length; j=j+3) {
            if (points[j] == null) {} // != null doesn't seem to work
            else {
                selectedValues = selectedValues + points[j];
                length++;
            }             
        }
        const averageValue = selectedValues / length;
        centerPoint.push(averageValue);
    }

    return centerPoint;
}

export default setCenterVertex;