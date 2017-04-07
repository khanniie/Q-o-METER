$(document).ready(function () {

  var dogTherm, catTherm, qTherm;	
  getTagNumber("dog").then(function(data) {
  	$("#loading").remove();
        dogTherm = new Therm(data/1750);
        dogTherm.drawTherm("canvas-one", 20, 130);
        setBackground("dog", "bkg1");
        setBackground("dog", "bkg1");
    });
  getTagNumber("cat").then(function(data) {
        catTherm = new Therm(data/1750);
        catTherm.drawTherm("canvas-two", 20, 130);
        setBackground("cat", "bkg2");
        setBackground("cat", "bkg2");
    });
  getTagNumber("doggo").then(function(data) {
        qTherm = new Therm(data/1750);
        qTherm.drawTherm("canvas-three", 20, 130);
        setBackground("random", "bkg3");
        setBackground("random", "bkg3");
    });

$("#btn1").click(function(){
	var canvas = document.getElementById("canvas-one");
	var context = canvas.getContext("2d");
	context.clearRect(0, 0, canvas.width, canvas.height);
	var searchTerm = $("#sbx1").val();
	getTagNumber(searchTerm).then(function(data){
		qTherm = new Therm(data/1750);
        qTherm.drawTherm("canvas-one", 20, 130);
	})
	setBackground(searchTerm, "bkg1");
	setBackground(searchTerm, "bkg1");
})
$("#btn2").click(function(){
	var canvas = document.getElementById("canvas-two");
	var context = canvas.getContext("2d");
	context.clearRect(0, 0, canvas.width, canvas.height);
	var searchTerm = $("#sbx2").val();
	getTagNumber(searchTerm).then(function(data){
		qTherm = new Therm(data/1750);
        qTherm.drawTherm("canvas-two", 20, 130);
	})
	setBackground(searchTerm, "bkg2");
	setBackground(searchTerm, "bkg2");
})
$("#btn3").click(function(){
	var canvas = document.getElementById("canvas-three");
	var context = canvas.getContext("2d");
	context.clearRect(0, 0, canvas.width, canvas.height);
	var searchTerm = $("#sbx3").val();
	getTagNumber(searchTerm).then(function(data){
		qTherm = new Therm(data/1750);
        qTherm.drawTherm("canvas-three", 20, 130);
	})
	setBackground(searchTerm, "bkg3");
	setBackground(searchTerm, "bkg3");
})
});
var setBackground = function(searchTerm, boxid){
		$("#" +boxid).children("img").remove();
        var Flickurl = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=376b144109ffe90065a254606c9aae3d&";
        var tags = "&tags=" + searchTerm;
        var tagmode = "&tagmode=any";
        var jsonFormat = "&format=json&nojsoncallback=1";
        var FinalURL = Flickurl + tags + tagmode + jsonFormat;

         $.getJSON(FinalURL, function(photos) {
         	console.log(photos);
              var randomNum = Math.round( Math.random() * 100);
             var photo = photos.photos.photo[randomNum];

             var photoUrl = "https://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + ".jpg";

             $("#" + boxid).append('<img class=' +  boxid + 'image" src="' + photoUrl + '"/>');
          });
}

