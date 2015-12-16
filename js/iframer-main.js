window.onload = function() { init() };

var public_spreadsheet_url = sheetURL;

function init() {
  Tabletop.init( { key : public_spreadsheet_url,
                   callback : function (data,tabletop){
                    $(".content").append(data[0].Code);
                   },
                   simpleSheet: true } )
}





tabletopObj = Tabletop(
  { key : public_spreadsheet_url,
    callback : showInfo,
    simpleSheet : true
  } )

function showInfo(data, tabletop) {
  console.log(data);
}

