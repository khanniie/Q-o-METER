// $(document).ready(function () {
//     $("#btn").click(function (event) {
//         var searchTerm = $("#sbx").val();
//         var Flickurl = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=376b144109ffe90065a254606c9aae3d&";
//         var tags = "&tags=" + searchTerm;
//         var tagmode = "&tagmode=any";
//         var jsonFormat = "&format=json&nojsoncallback=1";
//         var FinalURL = Flickurl + tags + tagmode + jsonFormat;

//          $.getJSON(FinalURL, function(photos) {
//             console.log(photos.photos.total);
//               var randomNum = Math.round( Math.random() * 100);
//              var photo = photos.photos.photo[randomNum];
//              console.log(photo);

//              var photoUrl = "https://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + ".jpg";

//              //$('body').append('<img src="' + photoUrl + '"/>');
//           });
//     });
// });

var getTagNumber = function(searchTerm) {
    var temp = 0;
    var Flickurl = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=376b144109ffe90065a254606c9aae3d&";
    var tags = "&tags=" + searchTerm;
    var tagmode = "&tagmode=any";
    var jsonFormat = "&format=json&nojsoncallback=1";
    var FinalURL = Flickurl + tags + tagmode + jsonFormat;

    return $.getJSON(FinalURL).then(function(photoss) {
        return parseInt(photoss.photos.total, 10);
    })
}
