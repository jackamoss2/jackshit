var surface = {};

fetch('http://localhost/geometry/2_Faces.xml')
  .then(response => response.text())
  .then((data) => {
    surface = data;
  })

export { surface };

