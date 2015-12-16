window.onload = function() { init() };

var public_spreadsheet_url = sheetURL;

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


function init() {
  Tabletop.init( { key : public_spreadsheet_url,
                   callback : function (data,tabletop){
                    $(".content").append(data[row - 2].Code);
                   },
                   simpleSheet: true } )
}
