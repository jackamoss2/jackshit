// takes xml data in string format and returns first Surface object

function xmlExtractSurface (xmlDataString) {
    var parser, xmlData, xmlSurface;

    parser = new DOMParser();

    xmlData = parser.parseFromString(xmlDataString, "text/xml");
    xmlSurface = xmlData.getElementsByTagName("Surface")[0];
    
    return xmlSurface;
}

export default xmlExtractSurface;