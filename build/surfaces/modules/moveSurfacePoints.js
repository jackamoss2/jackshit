

function moveSurfacePoints (points, centerPoint) {
    console.log(centerPoint)
    for (let i=0; i<3; i++) {
        for (let j=i; j<points.length; j=j+3) {
            if (points[j] == null) {} // != null doesn't seem to work
            else {
                points[j] = points[j] - centerPoint[i];
            }             
        }
    }

    return points;
}

export default moveSurfacePoints