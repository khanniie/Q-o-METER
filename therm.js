var Therm = function(length){
	this.length = length;
	this.colarray = [];
	var red = new PrimaryColor("red", 255);
	var blue = new PrimaryColor("blue", 0);
	var green = new PrimaryColor("green", 0);
	var colordown = red;
	var colorup = green;
	var i = 0;

	while (i < this.length) {
    while (colorup.val < 255 && i < this.length) {
        colorup.val += 5;
        this.colarray.push(new Color(red.val + 100, green.val + 100, blue.val + 100));
        i++;
    }
    while (colordown.val > 0 && i < this.length) {
        colordown.val -= 5;
        this.colarray.push(new Color(red.val + 100, green.val + 100, blue.val + 100));
        i++;
    }
    colordown = colorup;
    if (colordown === red) {
        colorup = green;
    }
    if (colordown === green) {
        colorup = blue;
    }
    if (colordown === blue) {
        colorup = red;
    }
}
}

Therm.prototype.drawTherm = function(canvasid, x, y){

	var canvas = document.getElementById(canvasid);
	//console.log(canvas);
	var ctx = canvas.getContext('2d');
	ctx.fillStyle = 'black';
    var ycount = 0;
	for (var i = 0; i < this.colarray.length; i++)
    {this.colarray[i].draw(x, y-(ycount)/2 , 60, 1, ctx);
        ycount++;}
}


var Color = function(red, green, blue) {
    this.red = red;
    this.blue = blue;
    this.green = green;
}
Color.prototype.draw = function(x, y, width, length, ctx) {
    ctx.fillStyle = 'rgb(' + this.red + ',' +
        this.green + ',' + this.blue + ')';
    ctx.fillRect(x, y, width, length);
}

var PrimaryColor = function(type, val) {
    this.type = type;
    this.val = val;
    this.colorup = false;
    this.colordown = false;
}








