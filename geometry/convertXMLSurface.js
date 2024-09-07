var surface = {};

const domain = 'jackamoss2.github.io'

fetch('http://' + domain + '/geometry/2_Faces.xml')
  .then(response => response.text())
  .then((data) => {
    surface = data;
  })

export { surface };

