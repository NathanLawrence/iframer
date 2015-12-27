window.onload = function() { init() };

var public_spreadsheet_url = sheetURL;

//URL Parameter Parsing
//Modified from Stack Overflow, among other things. I use this code all the time.
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

var row = getUrlParameter('row');

//This is the actual function that performs the core functionality of the app.
//Short, huh? It turns out we're not asking it to do anything too difficult!
function init() {
  Tabletop.init( { key : public_spreadsheet_url,
                   callback : function (data,tabletop){ //You initialize Tabletop.js by calling this method.
                    //Anything  you do after initialization is a callback that has a data and tabletop object parameter.
                    $(".content").append(data[row - 2].Code); // Subtract 2 from the row because arrays are zero-indexed, and Tabletop will include the header.
                   },
                   simpleSheet: true } )
}