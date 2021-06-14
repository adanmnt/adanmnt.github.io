/*function setup() {
	mappa = new Mappa('Leaflet');
	canvas = createCanvas(729,500).parent('canvasContainerMap');
	myMap = mappa.tileMap(options); 
  	myMap.overlay(canvas);
  	myMap.onChange(draw);
  	importantData();
	//noLoop();
	//canvas2 = createCanvas(729,500).parent('canvasGraficBar');
  	//myMap.overlay(canvas2);

}*/

//function draw(){
//	drawLoacations();
//}

var sketch1 = function(p) {
	let myMap;
	let canvas;
	let mappa;
	let distance;
	let data;

	let options = {
		lat: 23.634501,
		lng: -102.552784,
		zoom: 4.5,
		style: "https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_nolabels/{z}/{x}/{y}.png"
		//style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
	}

	p.preload = function(){
		let url = "https://api.apify.com/v2/key-value-stores/vpfkeiYLXPIDIea2T/records/LATEST";
		data = p.loadJSON(url);
	};

    p.setup = function() {
        mappa = new Mappa('Leaflet');
		canvas = p.createCanvas(729,500).parent('canvasContainerMap');
		myMap = mappa.tileMap(options); 
	  	myMap.overlay(canvas);
	  	myMap.onChange(p.draw);
	  	p.importantData();
    };

    p.draw = function() {
        p.drawLoacations();
    };

    p.importantData = function(){
		//positivos estimados
		let inf2 = 0;
		Object.entries(data.State).map(($) =>{
			let [estado, datos] = $;
			inf2 += data.infected;
		});
		let inf1 = p.createElement('p',p.nfc(inf2));
		inf1.parent('pe');
		//defunciones estimadas
		let dec2 = 0;
		Object.entries(data.State).map(($) =>{
			let [estado, datos] = $;
			dec2 += data.deceased;
		});
		let dec1 = p.createElement('p',p.nfc(dec2));
		dec1.parent('de');
		//activos estimados
		let act2 = inf2 - dec2;
		let act1 = p.createElement('p',p.nfc(act2));
		act1.parent('ae');

		//confirmados
		let dato01 = p.createElement('p',p.nfc([data.infected]));
		dato01.parent('confirmados');
		//negativos
		let dato02 = p.createElement('p',p.nfc([data.negative]));
		dato02.parent('negativos');
		//sospechosos
		let dato03 = p.createElement('p',p.nfc([data.suspected]));
		dato03.parent('sospechosos');
		//defunciones
		let dato04 = p.createElement('p',p.nfc([data.deceased]));
		dato04.parent('defunciones');
		//recueperados
		/*let dato05 = createElement('p');
		dato05.parent('recueperados');
		//activos
		let dato06 = createElement('p');
		dato06.parent('activos');*/
	};

	p.drawLoacations = function() {
		p.clear();
		p.cursor(p.ARROW);
		let x2 = p.mouseX;
		let y2 = p.mouseY;

		let pointrect = myMap.latLngToPixel(22, -114);
		let pointrect2 = myMap.latLngToPixel(27, -95);

		//Baja California Sur
		p.noStroke();
		p.fill(255,0,0);
		let bcs = myMap.latLngToPixel(25.5818014, -111.5706164);
		//console.log(bcs);
		p.star(bcs.x, bcs.y, 6, 11, 5);
		p.ellipse(bcs.x, bcs.y, 10, 10);

		let bcsin = data.State["Baja California Sur"].infected;

		distance = p.dist(bcs.x, bcs.y, x2, y2);
		if(distance < 15){
			p.fill(227, 238, 230);
			p.stroke(51);
			p.strokeWeight(5);
			p.rect(pointrect.x, pointrect.y, 170, 100, 10);
			/*strokeWeight(2);
			line(bcs.x, bcs.y, pointrect.x, pointrect.y);
			p.ellipse(bcs.x, bcs.y, 5,5);
	  		p.ellipse(pointrect.x, pointrect.y, 5,5);		*/
			p.fill( 27, 28, 27);
			p.textAlign(p.CENTER);
			p.textSize(16);
			p.strokeWeight(1);
			p.text('Baja California Sur',pointrect.x+85, pointrect.y+35);
			p.text('Casos: '+ bcsin ,pointrect.x+85, pointrect.y+80);
		}
		//Baja California
		p.noStroke();
		p.fill(255,0,0);
		let bc = myMap.latLngToPixel(30.0338923, -115.1425107);
		//console.log(bc);
		p.star(bc.x, bc.y, 6, 11, 5);
		p.ellipse(bc.x, bc.y, 10, 10);

		let bcin = data.State["Baja California"].infected;

		distance = p.dist(bc.x, bc.y, x2, y2);
		if(distance < 15){
			p.fill(227, 238, 230);
			p.stroke(51);
			p.strokeWeight(5);
			p.rect(pointrect.x, pointrect.y, 170, 100, 10);
			/*strokeWeight(2);
			line(bc.x, bc.y, pointrect.x, pointrect.y);
			p.ellipse(bc.x, bc.y, 5,5);
	  		p.ellipse(pointrect.x, pointrect.y, 5,5);*/
			p.fill( 27, 28, 27);
			p.textAlign(p.CENTER);
			p.textSize(16);
			p.strokeWeight(1);
			p.text('Baja California',pointrect.x+85, pointrect.y+35);
			p.text('Casos: '+ bcin,pointrect.x+85, pointrect.y+80);
		}
		//Sonora
		p.noStroke();
		p.fill(255,0,0);
		let son = myMap.latLngToPixel(29.3333331, -110.6666671);
		//console.log(son);
		p.star(son.x, son.y, 6, 11, 5);
		p.ellipse(son.x, son.y, 10, 10);

		let sonin = data.State["Sonora"].infected;

		distance = p.dist(son.x, son.y, x2, y2);
		if(distance < 15){
			p.fill(227, 238, 230);
			p.stroke(51);
			p.strokeWeight(5);
			p.rect(pointrect.x, pointrect.y, 170, 100, 10);
			/*strokeWeight(2);
			line(son.x, son.y, pointrect.x, pointrect.y);
			p.ellipse(son.x, son.y, 5,5);
	  		p.ellipse(pointrect.x, pointrect.y, 5,5);*/
			p.fill( 27, 28, 27);
			p.textAlign(p.CENTER);
			p.textSize(16);
			p.strokeWeight(1);
			p.text('Sonora',pointrect.x+85, pointrect.y+35);
			p.text('Casos: '+ sonin,pointrect.x+85, pointrect.y+80);
		}
		//Chihuahua
		p.noStroke();
		p.fill(255,0,0);
		let chihu = myMap.latLngToPixel(28.5000001, -106.0000001);
		//console.log(chihu);
		p.star(chihu.x, chihu.y, 6, 11, 5);
		p.ellipse(chihu.x, chihu.y, 10, 10);

		let chihuin = data.State["Chihuahua"].infected;

		distance = p.dist(chihu.x, chihu.y, x2, y2);
		if(distance < 15){
			p.fill(227, 238, 230);
			p.stroke(51);
			p.strokeWeight(5);
			p.rect(pointrect.x, pointrect.y, 170, 100, 10);
			/*strokeWeight(2);
			line(chihu.x, chihu.y, pointrect.x, pointrect.y);
			p.ellipse(chihu.x, chihu.y, 5,5);
	  		p.ellipse(pointrect.x, pointrect.y, 5,5);*/
			p.fill( 27, 28, 27);
			p.textAlign(p.CENTER);
			p.textSize(16);
			p.strokeWeight(1);
			p.text('Chihuahua',pointrect.x+85, pointrect.y+35);
			p.text('Casos: '+ chihuin,pointrect.x+85, pointrect.y+80);
		}
		//Sinaloa
		p.noStroke();
		p.fill(255,0,0);
		let sin = myMap.latLngToPixel(25.0000001, -107.5000001);
		//console.log(sin);
		p.star(sin.x, sin.y, 6, 11, 5);
		p.ellipse(sin.x, sin.y, 10, 10);

		let sinin = data.State["Sinaloa"].infected;

		distance = p.dist(sin.x, sin.y, x2, y2);
		if(distance < 15){
			p.fill(227, 238, 230);
			p.stroke(51);
			p.strokeWeight(5);
			p.rect(pointrect.x, pointrect.y, 170, 100, 10);
			/*strokeWeight(2);
			line(sin.x, sin.y, pointrect.x, pointrect.y);
			p.ellipse(sin.x, sin.y, 5,5);
	  		p.ellipse(pointrect.x, pointrect.y, 5,5);*/
			p.fill( 27, 28, 27);
			p.textAlign(p.CENTER);
			p.textSize(16);
			p.strokeWeight(1);
			p.text('Sinaloa',pointrect.x+85, pointrect.y+35);
			p.text('Casos: '+ sinin,pointrect.x+85, pointrect.y+80);
		}
		//Durango
		p.noStroke();
		p.fill(255,0,0);
		let du = myMap.latLngToPixel(24.833333, -104.833333);
		//console.log(du);
		p.star(du.x, du.y, 6, 11, 5);
		p.ellipse(du.x, du.y, 10, 10);

		let duin = data.State["Durango"].infected;

		distance = p.dist(du.x, du.y, x2, y2);
		if(distance < 15){
			p.fill(227, 238, 230);
			p.stroke(51);
			p.strokeWeight(5);
			p.rect(pointrect.x, pointrect.y, 170, 100, 10);
			/*strokeWeight(2);
			line(du.x, du.y, pointrect.x, pointrect.y);
			p.ellipse(du.x, du.y, 5,5);
	  		p.ellipse(pointrect.x, pointrect.y, 5,5);*/
			p.fill( 27, 28, 27);
			p.textAlign(p.CENTER);
			p.textSize(16);
			p.strokeWeight(1);
			p.text('Durango',pointrect.x+85, pointrect.y+35);
			p.text('Casos: '+ duin,pointrect.x+85, pointrect.y+80);
		}
		//Coahuila
		p.noStroke();
		p.fill(255,0,0);
		let coah = myMap.latLngToPixel(27.3333331, -102.0000001);
		//console.log(coah);
		p.star(coah.x, coah.y, 6, 11, 5);
		p.ellipse(coah.x, coah.y, 10, 10);

		let coahin = data.State["Coahuila"].infected;

		distance = p.dist(coah.x, coah.y, x2, y2);
		if(distance < 15){
			p.fill(227, 238, 230);
			p.stroke(51);
			p.strokeWeight(5);
			p.rect(pointrect.x, pointrect.y, 170, 100, 10);
			/*strokeWeight(2);
			line(coah.x, coah.y, pointrect.x, pointrect.y);
			p.ellipse(coah.x, coah.y, 5,5);
	  		p.ellipse(pointrect.x, pointrect.y, 5,5);*/
			p.fill( 27, 28, 27);
			p.textAlign(p.CENTER);
			p.textSize(16);
			p.strokeWeight(1);
			p.text('Coahuila',pointrect.x+85, pointrect.y+35);
			p.text('Casos: '+ coahin,pointrect.x+85, pointrect.y+80);
		}
		//Nuevo León
		p.noStroke();
		p.fill(255,0,0);
		let nl = myMap.latLngToPixel(26.2384363, -99.8873);
		//console.log(nl);
		p.star(nl.x, nl.y, 6, 11, 5);
		p.ellipse(nl.x, nl.y, 10, 10);

		let nlin = data.State["Nuevo Leon"].infected;

		distance = p.dist(nl.x, nl.y, x2, y2);
		if(distance < 15){
			p.fill(227, 238, 230);
			p.stroke(51);
			p.strokeWeight(5);
			p.rect(pointrect.x, pointrect.y, 170, 100, 10);
			/*strokeWeight(2);
			line(nl.x, nl.y, pointrect.x, pointrect.y);
			p.ellipse(nl.x, nl.y, 5,5);
	  		p.ellipse(pointrect.x, pointrect.y, 5,5);*/
			p.fill( 27, 28, 27);
			p.textAlign(p.CENTER);
			p.textSize(16);
			p.strokeWeight(1);
			p.text('Nuevo León',pointrect.x+85, pointrect.y+35);
			p.text('Casos: '+ nlin,pointrect.x+85, pointrect.y+80);
		}
		//Nayarit
		p.noStroke();
		p.fill(255,0,0);
		let na = myMap.latLngToPixel(21.8438765, -104.8714854);
		//console.log(na);
		p.star(na.x, na.y, 6, 11, 5);
		p.ellipse(na.x, na.y, 10, 10);

		let nain = data.State["Nayarit"].infected;

		distance = p.dist(na.x, na.y, x2, y2);
		if(distance < 15){
			p.fill(227, 238, 230);
			p.stroke(51);
			p.strokeWeight(5);
			p.rect(pointrect.x, pointrect.y, 170, 100, 10);
			/*strokeWeight(2);
			line(na.x, na.y, pointrect.x, pointrect.y);
			p.ellipse(na.x, na.y, 5,5);
	  		p.ellipse(pointrect.x, pointrect.y, 5,5);*/
			p.fill( 27, 28, 27);
			p.textAlign(p.CENTER);
			p.textSize(16);
			p.strokeWeight(1);
			p.text('Nayarit',pointrect.x+85, pointrect.y+35);
			p.text('Casos: '+ nain,pointrect.x+85, pointrect.y+80);
		}
		//Zacatecas
		p.noStroke();
		p.fill(255,0,0);
		let zac = myMap.latLngToPixel(23.0823582, -103.2085698);
		//console.log(zac);
		p.star(zac.x, zac.y, 6, 11, 5);
		p.ellipse(zac.x, zac.y, 10, 10);

		let zacin = data.State["Zacatecas"].infected;

		distance = p.dist(zac.x, zac.y, x2, y2);
		if(distance < 15){
			p.fill(227, 238, 230);
			p.stroke(51);
			p.strokeWeight(5);
			p.rect(pointrect.x, pointrect.y, 170, 100, 10);
			/*strokeWeight(2);
			line(zac.x, zac.y, pointrect.x, pointrect.y);
			p.ellipse(zac.x, zac.y, 5,5);
	  		p.ellipse(pointrect.x, pointrect.y, 5,5);*/
			p.fill( 27, 28, 27);
			p.textAlign(p.CENTER);
			p.textSize(16);
			p.strokeWeight(1);
			p.text('Zacatecas',pointrect.x+85, pointrect.y+35);
			p.text('Casos: '+ zacin,pointrect.x+85, pointrect.y+80);
		}
		//Colima
		p.noStroke();
		p.fill(255,0,0);
		let col = myMap.latLngToPixel(19.166667, -104);
		//console.log(col);
		p.star(col.x, col.y, 6, 11, 5);
		p.ellipse(col.x, col.y, 10, 10);

		let colin = data.State["Colima"].infected;

		distance = p.dist(col.x, col.y, x2, y2);
		if(distance < 15){
			p.fill(227, 238, 230);
			p.stroke(51);
			p.strokeWeight(5);
			p.rect(pointrect.x, pointrect.y, 170, 100, 10);
			/*strokeWeight(2);
			line(col.x, col.y, pointrect.x, pointrect.y);
			p.ellipse(col.x, col.y, 5,5);
	  		p.ellipse(pointrect.x, pointrect.y, 5,5);*/
			p.fill( 27, 28, 27);
			p.textAlign(p.CENTER);
			p.textSize(16);
			p.strokeWeight(1);
			p.text('Colima',pointrect.x+85, pointrect.y+35);
			p.text('Casos: '+ colin,pointrect.x+85, pointrect.y+80);
		}
		//Jalisco
		p.noStroke();
		p.fill(255,0,0);
		let ja = myMap.latLngToPixel(20.3333331, -103.6666671);
		//console.log(ja);
		p.star(ja.x, ja.y, 6, 11, 5);
		p.ellipse(ja.x, ja.y, 10, 10);

		let jain = data.State["Jalisco"].infected;

		distance = p.dist(ja.x, ja.y, x2, y2);
		if(distance < 15){
			p.fill(227, 238, 230);
			p.stroke(51);
			p.strokeWeight(5);
			p.rect(pointrect.x, pointrect.y, 170, 100, 10);
			/*strokeWeight(2);
			line(ja.x, ja.y, pointrect.x, pointrect.y);
			p.ellipse(ja.x, ja.y, 5,5);
	  		p.ellipse(pointrect.x, pointrect.y, 5,5);*/
			p.fill( 27, 28, 27);
			p.textAlign(p.CENTER);
			p.textSize(16);
			p.strokeWeight(1);
			p.text('Jalisco',pointrect.x+85, pointrect.y+35);
			p.text('Casos: '+ jain,pointrect.x+85, pointrect.y+80);
		}
		//Aguascalientes
		p.noStroke();
		p.fill(255,0,0);
		let ag = myMap.latLngToPixel(22.0000001, -102.5000001);
		//console.log(ag);
		p.star(ag.x, ag.y, 6, 11, 5);
		p.ellipse(ag.x, ag.y, 10, 10);

		let agin = data.State["Aguascalientes"].infected;

		distance = p.dist(ag.x, ag.y, x2, y2);
		if(distance < 15){
			p.fill(227, 238, 230);
			p.stroke(51);
			p.strokeWeight(5);
			p.rect(pointrect.x, pointrect.y, 170, 100, 10);
			/*strokeWeight(2);
			line(ag.x, ag.y, pointrect.x, pointrect.y);
			p.ellipse(ag.x, ag.y, 5,5);
	  		p.ellipse(pointrect.x, pointrect.y, 5,5);*/
			p.fill( 27, 28, 27);
			p.textAlign(p.CENTER);
			p.textSize(16);
			p.strokeWeight(1);
			p.text('Aguascalientes',pointrect.x+85, pointrect.y+35);
			p.text('Casos: '+ agin,pointrect.x+85, pointrect.y+80);
		}
		//San Luis Potosi
		p.noStroke();
		p.fill(255,0,0);
		let slp = myMap.latLngToPixel(22.5000001, -100.4949145);
		//console.log(slp);
		p.star(slp.x, slp.y, 6, 11, 5);
		p.ellipse(slp.x, slp.y, 10, 10);

		let slpin = data.State["San Luis Potosi"].infected;

		distance = p.dist(slp.x, slp.y, x2, y2);
		if(distance < 15){
			p.fill(227, 238, 230);
			p.stroke(51);
			p.strokeWeight(5);
			p.rect(pointrect.x, pointrect.y, 170, 100, 10);
			/*strokeWeight(2);
			line(slp.x, slp.y, pointrect.x, pointrect.y);
			p.ellipse(slp.x, slp.y, 5,5);
	  		p.ellipse(pointrect.x, pointrect.y, 5,5);*/
			p.fill( 27, 28, 27);
			p.textAlign(p.CENTER);
			p.textSize(16);
			p.strokeWeight(1);
			p.text('San Luis Potosí',pointrect.x+85, pointrect.y+35);
			p.text('Casos: '+ slpin,pointrect.x+85, pointrect.y+80);
		}
		//Tamaulipas
		p.noStroke();
		p.fill(255,0,0);
		let tam = myMap.latLngToPixel(23.9891553, -98.7026825);
		//console.log(tam);
		p.star(tam.x, tam.y, 6, 11, 5);
		p.ellipse(tam.x, tam.y, 10, 10);

		let tamin = data.State["Tamaulipas"].infected;

		distance = p.dist(tam.x, tam.y, x2, y2);
		if(distance < 15){
			p.fill(227, 238, 230);
			p.stroke(51);
			p.strokeWeight(5);
			p.rect(pointrect.x, pointrect.y, 170, 100, 10);
			/*strokeWeight(2);
			line(tam.x, tam.y, pointrect.x, pointrect.y);
			p.ellipse(tam.x, tam.y, 5,5);
	  		p.ellipse(pointrect.x, pointrect.y, 5,5);*/
			p.fill( 27, 28, 27);
			p.textAlign(p.CENTER);
			p.textSize(16);
			p.strokeWeight(1);
			p.text('Tamaulipas',pointrect.x+85, pointrect.y+35);
			p.text('Casos: '+ tamin,pointrect.x+85, pointrect.y+80);
		}
		//Michoacán
		p.noStroke();
		p.fill(255,0,0);
		let mic = myMap.latLngToPixel(19.207098, -101.878113);
		//console.log(mic);
		p.star(mic.x, mic.y, 6, 11, 5);
		p.ellipse(mic.x, mic.y, 10, 10);

		let micin = data.State["Michoacan"].infected;

		distance = p.dist(mic.x, mic.y, x2, y2);
		if(distance < 15){
			p.fill(227, 238, 230);
			p.stroke(51);
			p.strokeWeight(5);
			p.rect(pointrect.x, pointrect.y, 170, 100, 10);
			/*strokeWeight(2);
			line(mic.x, mic.y, pointrect.x, pointrect.y);
			p.ellipse(mic.x, mic.y, 5,5);
	  		p.ellipse(pointrect.x, pointrect.y, 5,5);*/
			p.fill( 27, 28, 27);
			p.textAlign(p.CENTER);
			p.textSize(16);
			p.strokeWeight(1);
			p.text('Michoacán',pointrect.x+85, pointrect.y+35);
			p.text('Casos: '+ micin,pointrect.x+85, pointrect.y+80);
		}
		//Guanajuato
		p.noStroke();
		p.fill(255,0,0);
		let gua = myMap.latLngToPixel(20.9876996, -101);
		//console.log(gua);
		p.star(gua.x, gua.y, 6, 11, 5);
		p.ellipse(gua.x, gua.y, 10, 10);

		let guain = data.State["Guanajuato"].infected;

		distance = p.dist(gua.x, gua.y, x2, y2);
		if(distance < 15){
			p.fill(227, 238, 230);
			p.stroke(51);
			p.strokeWeight(5);
			p.rect(pointrect.x, pointrect.y, 170, 100, 10);
			/*strokeWeight(2);
			line(gua.x, gua.y, pointrect.x, pointrect.y);
			p.ellipse(gua.x, gua.y, 5,5);
	  		p.ellipse(pointrect.x, pointrect.y, 5,5);*/
			p.fill( 27, 28, 27);
			p.textAlign(p.CENTER);
			p.textSize(16);
			p.strokeWeight(1);
			p.text('Guanajuato',pointrect.x+85, pointrect.y+35);
			p.text('Casos: '+ guain,pointrect.x+85, pointrect.y+80);
		}
		//Querétaro
		p.noStroke();
		p.fill(255,0,0);
		let que = myMap.latLngToPixel(20.8542575, -99.84756);
		//console.log(que);
		p.star(que.x, que.y, 6, 11, 5);
		p.ellipse(que.x, que.y, 10, 10);

		let quein = data.State["Queretaro"].infected;

		distance = p.dist(que.x, que.y, x2, y2);
		if(distance < 15){
			p.fill(227, 238, 230);
			p.stroke(51);
			p.strokeWeight(5);
			p.rect(pointrect2.x, pointrect2.y, 170, 100, 10);
			/*strokeWeight(2);
			line(que.x, que.y, pointrect2.x, pointrect2.y);
			p.ellipse(que.x, que.y, 5,5);
	  		p.ellipse(pointrect.x2, pointrect.y2, 5,5);*/
			p.fill( 27, 28, 27);
			p.textAlign(p.CENTER);
			p.textSize(16);
			p.strokeWeight(1);
			p.text('Querétaro',pointrect2.x+85, pointrect2.y+35);
			p.text('Casos: '+ quein,pointrect2.x+85, pointrect2.y+80);
		}
		//Hidalgo
		p.noStroke();
		p.fill(255,0,0);
		let hi = myMap.latLngToPixel(20.5, -99);
		//console.log(hi);
		p.star(hi.x, hi.y, 6, 11, 5);
		p.ellipse(hi.x, hi.y, 10, 10);

		let hiin = data.State["Hidalgo"].infected;

		distance = p.dist(hi.x, hi.y, x2, y2);
		if(distance < 15){
			p.fill(227, 238, 230);
			p.stroke(51);
			p.strokeWeight(5);
			p.rect(pointrect2.x, pointrect2.y, 170, 100, 10);
			/*strokeWeight(2);
			line(hi.x, hi.y, pointrect2.x, pointrect2.y);
			p.ellipse(hi.x, hi.y, 5,5);
	  		p.ellipse(pointrect2.x, pointrect2.y, 5,5);*/
			p.fill( 27, 28, 27);
			p.textAlign(p.CENTER);
			p.textSize(16);
			p.strokeWeight(1);
			p.text('Hidalgo',pointrect2.x+85, pointrect2.y+35);
			p.text('Casos: '+ hiin,pointrect2.x+85, pointrect2.y+80);
		}
		//Estado de Mexico
		p.noStroke();
		p.fill(255,0,0);
		let em = myMap.latLngToPixel(19.4839446, -99.6899716);
		//console.log(em);
		p.star(em.x, em.y, 6, 11, 5);
		p.ellipse(em.x, em.y, 10, 10);

		let emin = data.State["Estado de Mexico"].infected;

		distance = p.dist(em.x, em.y, x2, y2);
		if(distance < 15){
			p.fill(227, 238, 230);
			p.stroke(51);
			p.strokeWeight(5);
			p.rect(pointrect2.x, pointrect2.y, 170, 100, 10);
			/*strokeWeight(2);
			line(em.x, em.y, pointrect2.x, pointrect2.y);
			p.ellipse(em.x, em.y, 5,5);
	  		p.ellipse(pointrect2.x, pointrect2.y, 5,5);*/
			p.fill( 27, 28, 27);
			p.textAlign(p.CENTER);
			p.textSize(16);
			p.strokeWeight(1);
			p.text('Estado de Mexico',pointrect2.x+85, pointrect2.y+35);
			p.text('Casos: '+ emin,pointrect2.x+85, pointrect2.y+80);
		}
		//Ciudad de Mexico
		p.noStroke();
		p.fill(255,0,0);
		let df = myMap.latLngToPixel(19.4326296, -99.1331785);
		//console.log(df);
		p.star(df.x, df.y, 4, 9, 5);
		p.ellipse(df.x, df.y, 9, 9);

		let dfin = data.State["Ciudad de Mexico"].infected;

		distance = p.dist(df.x, df.y, x2, y2);
		if(distance < 10){
			p.fill(227, 238, 230);
			p.stroke(51);
			p.strokeWeight(5);
			p.rect(pointrect2.x, pointrect2.y, 170, 100, 10);
			/*strokeWeight(2);
			line(df.x, df.y, pointrect2.x, pointrect2.y);
			p.ellipse(df.x, df.y, 5,5);
	  		p.ellipse(pointrect2.x, pointrect2.y, 5,5);*/
			p.fill( 27, 28, 27);
			p.textAlign(p.CENTER);
			p.textSize(16);
			p.strokeWeight(1);
			p.text('Ciudad de Mexico',pointrect2.x+85, pointrect2.y+35);
			p.text('Casos: '+ dfin,pointrect2.x+85, pointrect2.y+80);
		}
		//Guerrero
		p.noStroke();
		p.fill(255,0,0);
		let gue = myMap.latLngToPixel(17.666667, -100);
		//console.log(gue);
		p.star(gue.x, gue.y, 6, 11, 5);
		p.ellipse(gue.x, gue.y, 10, 10);

		let guein = data.State["Guerrero"].infected;

		distance = p.dist(gue.x, gue.y, x2, y2);
		if(distance < 15){
			p.fill(227, 238, 230);
			p.stroke(51);
			p.strokeWeight(5);
			p.rect(pointrect2.x, pointrect2.y, 170, 100, 10);
			/*strokeWeight(2);
			line(gue.x, gue.y, pointrect2.x, pointrect2.y);
			p.ellipse(gue.x, gue.y, 5,5);
	  		p.ellipse(pointrect.x2, pointrect.y2, 5,5);*/
			p.fill( 27, 28, 27);
			p.textAlign(p.CENTER);
			p.textSize(16);
			p.strokeWeight(1);
			p.text('Guerrero',pointrect2.x+85, pointrect2.y+35);
			p.text('Casos: '+ guein,pointrect2.x+85, pointrect2.y+80);
		}
		//Morelos
		p.noStroke();
		p.fill(255,0,0);
		let mo = myMap.latLngToPixel(18.75, -99);
		//console.log(mo);
		p.star(mo.x, mo.y, 6, 11, 5);
		p.ellipse(mo.x, mo.y, 10, 10);

		let moin = data.State["Morelos"].infected;

		distance = p.dist(mo.x, mo.y, x2, y2);
		if(distance < 15){
			p.fill(227, 238, 230);
			p.stroke(51);
			p.strokeWeight(5);
			p.rect(pointrect2.x, pointrect2.y, 170, 100, 10);
			/*strokeWeight(2);
			line(mo.x, mo.y, pointrect2.x, pointrect2.y);
			p.ellipse(mo.x, mo.y, 5,5);
	  		p.ellipse(pointrect2.x, pointrect2.y, 5,5);*/
			p.fill( 27, 28, 27);
			p.textAlign(p.CENTER);
			p.textSize(16);
			p.strokeWeight(1);
			p.text('Morelos',pointrect2.x+85, pointrect2.y+35);
			p.text('Casos: '+ moin,pointrect2.x+85, pointrect2.y+80);
		}
		//Tlaxcala
		p.noStroke();
		p.fill(255,0,0);
		let tla = myMap.latLngToPixel(19.416667, -98.166667);
		//console.log(tla);
		p.star(tla.x, tla.y, 6, 11, 5);
		p.ellipse(tla.x, tla.y, 10, 10);

		let tlain = data.State["Tlaxcala"].infected;

		distance = p.dist(tla.x, tla.y, x2, y2);
		if(distance < 15){
			p.fill(227, 238, 230);
			p.stroke(51);
			p.strokeWeight(5);
			p.rect(pointrect2.x, pointrect2.y, 170, 100, 10);
			/*strokeWeight(2);
			line(tla.x, tla.y, pointrect2.x, pointrect2.y);
			p.ellipse(tla.x, tla.y, 5,5);
	  		p.ellipse(pointrect.x2, pointrect.y2, 5,5);*/
			p.fill( 27, 28, 27);
			p.textAlign(p.CENTER);
			p.textSize(16);
			p.strokeWeight(1);
			p.text('Tlaxcala',pointrect2.x+85, pointrect2.y+35);
			p.text('Casos: '+ tlain,pointrect2.x+85, pointrect2.y+80);
		}
		//Puebla
		p.noStroke();
		p.fill(255,0,0);
		let pue = myMap.latLngToPixel(18.833333, -98);
		//console.log(pue);
		p.star(pue.x, pue.y, 6, 11, 5);
		p.ellipse(pue.x, pue.y, 10, 10);

		let puein = data.State["Puebla"].infected;

		distance = p.dist(pue.x, pue.y, x2, y2);
		if(distance < 15){
			p.fill(227, 238, 230);
			p.stroke(51);
			p.strokeWeight(5);
			p.rect(pointrect2.x, pointrect2.y, 170, 100, 10);
			/*strokeWeight(2);
			line(pue.x, pue.y, pointrect2.x, pointrect2.y);
			p.ellipse(pue.x, pue.y, 5,5);
	  		p.ellipse(pointrect.x2, pointrect.y2, 5,5);*/
			p.fill( 27, 28, 27);
			p.textAlign(p.CENTER);
			p.textSize(16);
			p.strokeWeight(1);
			p.text('Puebla',pointrect2.x+85, pointrect2.y+35);
			p.text('Casos: '+ puein,pointrect2.x+85, pointrect2.y+80);
		}
		//Veracruz
		p.noStroke();
		p.fill(255,0,0);
		let ve = myMap.latLngToPixel(19.333333, -96.666667);
		//console.log(ve);
		p.star(ve.x, ve.y, 6, 11, 5);
		p.ellipse(ve.x, ve.y, 10, 10);

		let vein = data.State["Veracruz"].infected;

		distance = p.dist(ve.x, ve.y, x2, y2);
		if(distance < 15){
			p.fill(227, 238, 230);
			p.stroke(51);
			p.strokeWeight(5);
			p.rect(pointrect2.x, pointrect2.y, 170, 100, 10);
			/*strokeWeight(2);
			line(ve.x, ve.y, pointrect2.x, pointrect2.y);
			p.ellipse(ve.x, ve.y, 5,5);
	  		p.ellipse(pointrect2.x, pointrect2.y, 5,5);*/
			p.fill( 27, 28, 27);
			p.textAlign(p.CENTER);
			p.textSize(16);
			p.strokeWeight(1);
			p.text('Veracruz',pointrect2.x+85, pointrect2.y+35);
			p.text('Casos: '+ vein,pointrect2.x+85, pointrect2.y+80);
		}
		//Oaxaca
		p.noStroke();
		p.fill(255,0,0);
		let oax = myMap.latLngToPixel(17, -96.5);
		//console.log(oax);
		p.star(oax.x, oax.y, 6, 11, 5);
		p.ellipse(oax.x, oax.y, 10, 10);

		let oaxin = data.State["Oaxaca"].infected;

		distance = p.dist(oax.x, oax.y, x2, y2);
		if(distance < 15){
			p.fill(227, 238, 230);
			p.stroke(51);
			p.strokeWeight(5);
			p.rect(pointrect2.x, pointrect2.y, 170, 100, 10);
			/*strokeWeight(2);
			line(oax.x, oax.y, pointrect2.x, pointrect2.y);
			p.ellipse(oax.x, oax.y, 5,5);
	  		p.ellipse(pointrect.x2, pointrect.y2, 5,5);*/
			p.fill( 27, 28, 27);
			p.textAlign(p.CENTER);
			p.textSize(16);
			p.strokeWeight(1);
			p.text('Oaxaca',pointrect2.x+85, pointrect2.y+35);
			p.text('Casos: '+ oaxin,pointrect2.x+85, pointrect2.y+80);
		}
		//Chiapas
		p.noStroke();
		p.fill(255,0,0);
		let chi = myMap.latLngToPixel(16.5000001, -92.5000001);
		//console.log(chi);
		p.star(chi.x, chi.y, 6, 11, 5);
		p.ellipse(chi.x, chi.y, 10, 10);

		let chiin = data.State["Chiapas"].infected;

		distance = p.dist(chi.x, chi.y, x2, y2);
		if(distance < 15){
			p.fill(227, 238, 230);
			p.stroke(51);
			p.strokeWeight(5);
			p.rect(pointrect2.x, pointrect2.y, 170, 100, 10);
			/*strokeWeight(2);
			line(chi.x, chi.y, pointrect2.x, pointrect2.y);
			p.ellipse(chi.x, chi.y, 5,5);
	  		p.ellipse(pointrect.x2, pointrect.y2, 5,5);*/
			p.fill( 27, 28, 27);
			p.textAlign(p.CENTER);
			p.textSize(16);
			p.strokeWeight(1);
			p.text('Chiapas',pointrect2.x+85, pointrect2.y+35);
			p.text('Casos: '+ chiin,pointrect2.x+85, pointrect2.y+80);
		}
		//Tabasco
		p.noStroke();
		p.fill(255,0,0);
		let tab = myMap.latLngToPixel(17.9507864, -92.4831221);
		//console.log(tab);
		p.star(tab.x, tab.y, 6, 11, 5);
		p.ellipse(tab.x, tab.y, 10, 10);

		let tabin = data.State["Tabasco"].infected;

		distance = p.dist(tab.x, tab.y, x2, y2);
		if(distance < 15){
			p.fill(227, 238, 230);
			p.stroke(51);
			p.strokeWeight(5);
			p.rect(pointrect2.x, pointrect2.y, 170, 100, 10);
			/*strokeWeight(2);
			line(tab.x, tab.y, pointrect2.x, pointrect2.y);
			p.ellipse(tab.x, tab.y, 5,5);
	  		p.ellipse(pointrect.x2, pointrect.y2, 5,5);*/
			p.fill( 27, 28, 27);
			p.textAlign(p.CENTER);
			p.textSize(16);
			p.strokeWeight(1);
			p.text('Tabasco',pointrect2.x+85, pointrect2.y+35);
			p.text('Casos: '+ tabin,pointrect2.x+85, pointrect2.y+80);
		}
		//Campeche
		p.noStroke();
		p.fill(255,0,0);
		let camp = myMap.latLngToPixel(19.3292055, -89.9439148);
		//console.log(camp);
		p.star(camp.x, camp.y, 6, 11, 5);
		p.ellipse(camp.x, camp.y, 10, 10);

		let campin = data.State["Campeche"].infected;

		distance = p.dist(camp.x, camp.y, x2, y2);
		if(distance < 15){
			p.fill(227, 238, 230);
			p.stroke(51);
			p.strokeWeight(5);
			p.rect(pointrect2.x, pointrect2.y, 170, 100, 10);
			/*strokeWeight(2);
			line(camp.x, camp.y, pointrect2.x, pointrect2.y);
			p.ellipse(camp.x, camp.y, 5,5);
	  		p.ellipse(pointrect.x2, pointrect.y2, 5,5);*/
			p.fill( 27, 28, 27);
			p.textAlign(p.CENTER);
			p.textSize(16);
			p.strokeWeight(1);
			p.text('Campeche',pointrect2.x+85, pointrect2.y+35);
			p.text('Casos: '+ campin,pointrect2.x+85, pointrect2.y+80);
		}
		//Yucatán
		p.noStroke();
		p.fill(255,0,0);
		let yuc = myMap.latLngToPixel(20.6845957, -88.8755669);
		//console.log(yuc);
		p.star(yuc.x, yuc.y, 6, 11, 5);
		p.ellipse(yuc.x, yuc.y, 10, 10);

		let yucin = data.State["Yucatan"].infected;

		distance = p.dist(yuc.x, yuc.y, x2, y2);
		if(distance < 15){
			p.fill(227, 238, 230);
			p.stroke(51);
			p.strokeWeight(5);
			p.rect(pointrect2.x, pointrect2.y, 170, 100, 10);
			/*strokeWeight(2);
			line(yuc.x, yuc.y, pointrect2.x, pointrect2.y);
			p.ellipse(yuc.x, yuc.y, 5,5);
	  		p.ellipse(pointrect.x2, pointrect.y2, 5,5);*/
			p.fill( 27, 28, 27);
			p.textAlign(p.CENTER);
			p.textSize(16);
			p.strokeWeight(1);
			p.text('Yucatán',pointrect2.x+85, pointrect2.y+35);
			p.text('Casos: '+ yucin,pointrect2.x+85, pointrect2.y+80);
		}
		//Quintana Roo
		p.noStroke();
		p.fill(255,0,0);
		let qr = myMap.latLngToPixel(19.6666671, -88.5000001);
		//console.log(qr);
		p.star(qr.x, qr.y, 6, 11, 5);
		p.ellipse(qr.x, qr.y, 10, 10);

		let qrin = data.State["Quintana Roo"].infected;

		distance = p.dist(qr.x, qr.y, x2, y2);
		if(distance < 15){
			p.fill(227, 238, 230);
			p.stroke(51);
			p.strokeWeight(5);
			p.rect(pointrect2.x, pointrect2.y, 170, 100, 10);
			/*strokeWeight(2);
			line(qr.x, qr.y, pointrect2.x, pointrect2.y);
			p.ellipse(qr.x, qr.y, 5,5);
	  		p.ellipse(pointrect2.x, pointrect2.y, 5,5);*/
			p.fill( 27, 28, 27);
			p.textAlign(p.CENTER);
			p.textSize(16);
			p.strokeWeight(1);
			p.text('Quintana Roo',pointrect2.x+85, pointrect2.y+35);
			p.text('Casos: '+ qrin,pointrect2.x+85, pointrect2.y+80);
		}
	};

	p.star = function(x, y, radius1, radius2, npoints) {
		let angle = p.TWO_PI / npoints;
		let halfAngle = angle / 2.0;
		p.beginShape();
		for (let a = 0; a < p.TWO_PI; a += angle) {
			let sx = x + p.cos(a) * radius2;
			let sy = y + p.sin(a) * radius2;
			p.vertex(sx, sy);
			sx = x + p.cos(a + halfAngle) * radius1;
			sy = y + p.sin(a + halfAngle) * radius1;
			p.vertex(sx, sy);
		}
		p.endShape(p.CLOSE);
	};

	//p.windowResized = function() {	  
	//  resizeCanvas(windowWidth, windowHeight);
	//}
};

var sketch2 = function(p) {
    let canvas2;
    let data;
    let xcanvas = 729;
    let ycanvas = 500;       

    p.preload = function(){
		let url = "https://api.apify.com/v2/key-value-stores/vpfkeiYLXPIDIea2T/records/LATEST";
		data = p.loadJSON(url);
	};

    p.setup = function() {
        canvas = p.createCanvas(xcanvas,ycanvas).parent('canvasGraficBar');
        //p.windowResized();
    };

    p.draw = function() {
        //p.background(55);
        p.barGrafic(); 
        p.infoGrafic(); 
        //p.noLoop();      
    };

    p.barGrafic = function(){
    	let x = 729;
    	let y = 500;
	    let cont = 500;
    	let bar = 22;
    	p.clear();
		p.cursor(p.ARROW);
    	p.fill( 27, 28, 27);
    	p.rect(10, 20, x-20, y-30, 10);

		//p.textAlign(p.CENTER);
		p.textSize(16);
		p.strokeWeight(1);
		p.fill( 27, 28, 27);
    	p.text('Tabla de Defunciones', 10, 15);
    	//.text('0', 5, y-10);
    	for (let i = 0; i <= 15; i++) {
    		y = y - 28;
    		p.fill(255, 255, 255);
    		p.line(10, y, 719, y);
    		p.fill( 27, 28, 27);
    		//p.text(cont, 5, y);
    		cont = cont + 1150;
    	}

    	let x1 = 10;
	    let y1 = 490;

    	p.fill(255,0,0);
    	let bcsin = data.State["Baja California Sur"].deceased;
    	p.rect(x1, y1, bar, -(bcsin/28), 10);

		let bcin = data.State["Baja California"].deceased;
		x1 = x1 + bar;
		p.rect(x1, y1, bar, -(bcin/28), 10);
		
		let sonin = data.State["Sonora"].deceased;
		x1 = x1 + bar;
		p.rect(x1, y1, bar, -(sonin/28), 10);
		
		let chihuin = data.State["Chihuahua"].deceased;
		x1 = x1 + bar;
		p.rect(x1, y1, bar, -(chihuin/28), 10);
		
		let sinin = data.State["Sinaloa"].deceased;
		x1 = x1 + bar;
		p.rect(x1, y1, bar, -(sinin/28), 10);
		
		let duin = data.State["Durango"].deceased;
		x1 = x1 + bar;
		p.rect(x1, y1, bar, -(duin/28), 10);
		
		let coahin = data.State["Coahuila"].deceased;
		x1 = x1 + bar;
		p.rect(x1, y1, bar, -(coahin/28), 10);
		
		let nlin = data.State["Nuevo Leon"].deceased;
		x1 = x1 + bar;
		p.rect(x1, y1, bar, -(nlin/28), 10);
		
		let nain = data.State["Nayarit"].deceased;
		x1 = x1 + bar;
		p.rect(x1, y1, bar, -(nain/28), 10);
		
		let zacin = data.State["Zacatecas"].deceased;
		x1 = x1 + bar;
		p.rect(x1, y1, bar, -(zacin/28), 10);
		
		let colin = data.State["Colima"].deceased;
		x1 = x1 + bar;
		p.rect(x1, y1, bar, -(colin/28), 10);
		
		let jain = data.State["Jalisco"].deceased;
		x1 = x1 + bar;
		p.rect(x1, y1, bar, -(jain/28), 10);
		
		let agin = data.State["Aguascalientes"].deceased;
		x1 = x1 + bar;
		p.rect(x1, y1, bar, -(agin/28), 10);
		
		let slpin = data.State["San Luis Potosi"].deceased;
		x1 = x1 + bar;
		p.rect(x1, y1, bar, -(slpin/28), 10);
		
		let tamin = data.State["Tamaulipas"].deceased;
		x1 = x1 + bar;
		p.rect(x1, y1, bar, -(tamin/28), 10);
		
		let micin = data.State["Michoacan"].deceased;
		x1 = x1 + bar;
		p.rect(x1, y1, bar, -(micin/28), 10);
		
		let guain = data.State["Guanajuato"].deceased;
		x1 = x1 + bar;
		p.rect(x1, y1, bar, -(guain/28), 10);
		
		let quein = data.State["Queretaro"].deceased;
		x1 = x1 + bar;
		p.rect(x1, y1, bar, -(quein/28), 10);
		
		let hiin = data.State["Hidalgo"].deceased;
		x1 = x1 + bar;
		p.rect(x1, y1, bar, -(hiin/28), 10);
		
		let emin = data.State["Estado de Mexico"].deceased;
		x1 = x1 + bar;
		p.rect(x1, y1, bar, -(emin/28), 10);
		
		let dfin = data.State["Ciudad de Mexico"].deceased;
		x1 = x1 + bar;
		p.rect(x1, y1, bar, -(dfin/28), 10);
		
		let guein = data.State["Guerrero"].deceased;
		x1 = x1 + bar;
		p.rect(x1, y1, bar, -(guein/28), 10);
		
		let moin = data.State["Morelos"].deceased;
		x1 = x1 + bar;
		p.rect(x1, y1, bar, -(moin/28), 10);
		
		let tlain = data.State["Tlaxcala"].deceased;
		x1 = x1 + bar;
		p.rect(x1, y1, bar, -(tlain/28), 10);
		
		let puein = data.State["Puebla"].deceased;
		x1 = x1 + bar;
		p.rect(x1, y1, bar, -(puein/28), 10);
		
		let vein = data.State["Veracruz"].deceased;
		x1 = x1 + bar;
		p.rect(x1, y1, bar, -(vein/28), 10);
		
		let oaxin = data.State["Oaxaca"].deceased;
		x1 = x1 + bar;
		p.rect(x1, y1, bar, -(oaxin/28), 10);
		
		let chiin = data.State["Chiapas"].deceased;
		x1 = x1 + bar;
		p.rect(x1, y1, bar, -(chiin/28), 10);
		
		let tabin = data.State["Tabasco"].deceased;
		x1 = x1 + bar;
		p.rect(x1, y1, bar, -(tabin/28), 10);
		
		let campin = data.State["Campeche"].deceased;
		x1 = x1 + bar;
		p.rect(x1, y1, bar, -(campin/28), 10);
		
		let yucin = data.State["Yucatan"].deceased;
		x1 = x1 + bar;
		p.rect(x1, y1, bar, -(yucin/28), 10);
		
		let qrin = data.State["Quintana Roo"].deceased;
		x1 = x1 + bar;
		p.rect(x1, y1, bar, -(qrin/28), 10);
    }

    p.infoGrafic = function(){
    	let xban = 40;
    	let y = 20;

    	let xban2 = 200;
    	let y2 = 20;

    	let cx = 22;
	    let cy = 485;

    	p.fill(227, 238, 230);
		p.stroke(51);
		p.strokeWeight(2);

    	p.rect(15, 25, 325, 325, 10);

    	p.fill( 27, 28, 27);
		p.textSize(10);
		p.strokeWeight(1);

		for (var i = 1; i <= 32; i++) {
			//p.ellipse(cx, cy, 8,8);
			p.text(i, cx, cy);
			cx = cx + 21.8;
		}
		cx = 22;
		for (var i = 1; i <= 16; i++) {
			y = y + 20;
			//p.ellipse(xban-10, y-3, 8,8);
			p.text(i, xban-20, y);
		}
		y = 20;
		for (var i = 17; i <= 32; i++) {
			y2 = y2 + 20;
			//p.ellipse(xban2-10, y2-3, 8,8);
			p.text(i, xban2-20, y2);
		}
		y2 = 20;

    	let bcsin = data.State["Baja California Sur"].deceased;
    	y = y + 20;
    	p.text('Baja California Sur: '+ bcsin, xban, y );
		let bcin = data.State["Baja California"].deceased;
		y = y + 20;
		p.text('Baja California: '+ bcin, xban, y );
		let sonin = data.State["Sonora"].deceased;
		y = y + 20;
		p.text('Sonora: '+ sonin, xban, y );
		let chihuin = data.State["Chihuahua"].deceased;
		y = y + 20;
		p.text('Chihuahua: '+ chihuin, xban, y );
		let sinin = data.State["Sinaloa"].deceased;
		y = y + 20;
		p.text('Sinaloa: '+ sinin, xban, y );
		let duin = data.State["Durango"].deceased;
		y = y + 20;
		p.text('Durango: '+ duin, xban, y );
		let coahin = data.State["Coahuila"].deceased;
		y = y + 20;
		p.text('Coahuila: '+ coahin, xban, y );
		let nlin = data.State["Nuevo Leon"].deceased;
		y = y + 20;
		p.text('Nuevo Leon: '+ nlin, xban, y );
		let nain = data.State["Nayarit"].deceased;
		y = y + 20;
		p.text('Nayarit: '+ nain, xban, y );
		let zacin = data.State["Zacatecas"].deceased;
		y = y + 20;
		p.text('Zacatecas: '+ zacin, xban, y );
		let colin = data.State["Colima"].deceased;
		y = y + 20;
		p.text('Colima: '+ colin, xban, y );
		let jain = data.State["Jalisco"].deceased;
		y = y + 20;
		p.text('Jalisco: '+ jain, xban, y );
		let agin = data.State["Aguascalientes"].deceased;
		y = y + 20;
		p.text('Aguascalientes: '+ agin, xban, y );
		let slpin = data.State["San Luis Potosi"].deceased;
		y = y + 20;
		p.text('San Luis Potosi: '+ slpin, xban, y );
		let tamin = data.State["Tamaulipas"].deceased;
		y = y + 20;
		p.text('Tamaulipas: '+ tamin, xban, y );
		let micin = data.State["Michoacan"].deceased;
		y = y + 20;
		p.text('Michoacan: '+ micin, xban, y );

		//mitad tabla
		let guain = data.State["Guanajuato"].deceased;
		y2 = y2 + 20;
		p.text('Guanajuato: '+ guain, xban2, y2 );
		let quein = data.State["Queretaro"].deceased;
		y2 = y2 + 20;
		p.text('Queretaro: '+ quein, xban2, y2 );
		let hiin = data.State["Hidalgo"].deceased;
		y2 = y2 + 20;
		p.text('Hidalgo: '+ hiin, xban2, y2 );
		let emin = data.State["Estado de Mexico"].deceased;
		y2 = y2 + 20;
		p.text('Estado de Mexico: '+ emin, xban2, y2 );
		let dfin = data.State["Ciudad de Mexico"].deceased;
		y2 = y2 + 20;
		p.text('Ciudad de Mexico: '+ dfin, xban2, y2 );
		let guein = data.State["Guerrero"].deceased;
		y2 = y2 + 20;
		p.text('Guerrero: '+ guein, xban2, y2 );
		let moin = data.State["Morelos"].deceased;
		y2 = y2 + 20;
		p.text('Morelos: '+ moin, xban2, y2 );
		let tlain = data.State["Tlaxcala"].deceased;
		y2 = y2 + 20;
		p.text('Tlaxcala: '+ tlain, xban2, y2 );
		let puein = data.State["Puebla"].deceased;
		y2 = y2 + 20;
		p.text('Puebla: '+ puein, xban2, y2 );
		let vein = data.State["Veracruz"].deceased;
		y2 = y2 + 20;
		p.text('Veracruz: '+ vein, xban2, y2 );
		let oaxin = data.State["Oaxaca"].deceased;
		y2 = y2 + 20;
		p.text('Oaxaca: '+ oaxin, xban2, y2 );
		let chiin = data.State["Chiapas"].deceased;
		y2 = y2 + 20;
		p.text('Chiapas: '+ chiin, xban2, y2 );
		let tabin = data.State["Tabasco"].deceased;
		y2 = y2 + 20;
		p.text('Tabasco: '+ tabin, xban2, y2 );
		let campin = data.State["Campeche"].deceased;
		y2 = y2 + 20;
		p.text('Campeche: '+ campin, xban2, y2 );
		let yucin = data.State["Yucatan"].deceased;
		y2 = y2 + 20;
		p.text('Yucatan: '+ yucin, xban2, y2 );
		let qrin = data.State["Quintana Roo"].deceased;
		y2 = y2 + 20;
		p.text('Quintana Roo: '+ qrin, xban2, y2 );
    }

    p.windowResized = function() {	  
		p.resizeCanvas(p.width,p.height);
	}
};

new p5(sketch1);

new p5(sketch2);