App.onLaunch = function(options) {

    const baseURL = options.baseURL;


    var template = '<document><loadingTemplate><activityIndicator><text>Hello World!</text></activityIndicator></loadingTemplate></document>';






    var templateParser = new DOMParser();
    var parsedTemplate = templateParser.parseFromString(template, "application/xml");
    navigationDocument.pushDocument(parsedTemplate);





    // Show a loading spinner while additional JavaScript files are being evaluated
    const loadingDocument = createLoadingDocument();
    navigationDocument.pushDocument(loadingDocument);


}
