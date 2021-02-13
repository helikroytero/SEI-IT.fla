(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"SET IT_atlas_1", frames: [[1000,0,967,1002],[0,1089,823,781],[1000,1004,967,1002],[0,0,998,1087]]},
		{name:"SET IT_atlas_2", frames: [[481,972,186,216],[1803,1074,185,214],[1426,1146,185,214],[707,698,188,213],[1430,501,186,213],[0,1580,207,213],[1613,1289,185,214],[1800,1290,185,214],[780,1616,187,213],[1618,644,186,213],[575,1834,187,214],[1806,644,186,213],[1239,713,186,213],[1158,1559,186,214],[1534,1505,185,214],[1239,928,186,213],[764,1831,187,213],[859,1343,187,214],[1346,1559,186,214],[1536,1721,185,214],[195,1833,187,215],[969,1774,186,214],[1427,716,186,213],[1723,1506,185,214],[1048,1343,187,214],[1723,1722,185,214],[669,972,188,213],[1427,931,186,213],[290,971,189,214],[518,755,187,215],[969,1559,187,213],[1615,859,186,213],[669,1187,188,213],[0,1795,193,215],[897,698,188,213],[1803,859,186,213],[271,1403,189,213],[1713,0,191,213],[1840,427,189,211],[400,1618,188,214],[1157,1775,186,214],[209,1618,189,213],[1239,288,189,211],[326,755,190,214],[1615,1074,186,213],[1345,1775,189,210],[1430,288,189,211],[384,1834,189,212],[1840,215,190,210],[859,913,188,213],[859,1128,188,213],[1049,913,188,213],[1237,1343,187,214],[290,1187,189,214],[669,1402,188,212],[1621,431,189,211],[1239,501,189,210],[590,1616,188,212],[481,1190,186,216],[1049,1128,188,213],[1651,215,187,214],[326,500,626,69],[424,384,629,114],[424,0,786,200],[0,1297,269,281],[0,0,422,455],[1212,0,499,175],[1212,177,437,109],[424,202,501,180],[0,861,288,434],[0,457,324,402],[326,571,235,182],[563,571,334,125]]},
		{name:"SET IT_atlas_3", frames: [[560,0,184,214],[746,0,184,214],[186,217,181,213],[373,0,185,213],[559,216,185,212],[373,215,184,214],[0,0,185,214],[187,0,184,215],[746,216,183,212],[748,430,174,212],[0,216,184,214],[559,430,187,199],[0,432,478,69],[613,631,108,113],[364,503,121,125],[924,430,98,104],[723,644,107,113],[0,619,121,125],[359,630,125,98],[123,619,113,115],[486,631,125,98],[832,644,113,95],[0,503,362,56],[0,561,362,56],[932,192,80,66],[238,619,119,107],[932,0,89,106],[238,728,108,84],[348,730,108,84],[458,731,108,84],[123,736,108,84],[832,741,108,84],[0,746,108,84],[568,746,108,84],[678,759,108,84],[233,814,108,84],[343,816,108,84],[453,817,108,84],[110,822,108,84],[932,108,81,82]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_363 = function() {
	this.initialize(img.CachedBmp_363);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2178,1230);


(lib.CachedBmp_362 = function() {
	this.initialize(img.CachedBmp_362);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2576,1470);


(lib.CachedBmp_361 = function() {
	this.initialize(ss["SET IT_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_360 = function() {
	this.initialize(ss["SET IT_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_359 = function() {
	this.initialize(ss["SET IT_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_358 = function() {
	this.initialize(ss["SET IT_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_357 = function() {
	this.initialize(ss["SET IT_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_356 = function() {
	this.initialize(ss["SET IT_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_355 = function() {
	this.initialize(ss["SET IT_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_354 = function() {
	this.initialize(ss["SET IT_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_353 = function() {
	this.initialize(ss["SET IT_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_352 = function() {
	this.initialize(ss["SET IT_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_351 = function() {
	this.initialize(ss["SET IT_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_350 = function() {
	this.initialize(ss["SET IT_atlas_2"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_349 = function() {
	this.initialize(ss["SET IT_atlas_2"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_348 = function() {
	this.initialize(ss["SET IT_atlas_2"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_347 = function() {
	this.initialize(ss["SET IT_atlas_2"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_346 = function() {
	this.initialize(ss["SET IT_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_345 = function() {
	this.initialize(ss["SET IT_atlas_2"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_344 = function() {
	this.initialize(ss["SET IT_atlas_2"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_343 = function() {
	this.initialize(ss["SET IT_atlas_2"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_342 = function() {
	this.initialize(ss["SET IT_atlas_2"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_341 = function() {
	this.initialize(ss["SET IT_atlas_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_340 = function() {
	this.initialize(ss["SET IT_atlas_2"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_339 = function() {
	this.initialize(ss["SET IT_atlas_2"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_338 = function() {
	this.initialize(ss["SET IT_atlas_2"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_337 = function() {
	this.initialize(ss["SET IT_atlas_2"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_336 = function() {
	this.initialize(ss["SET IT_atlas_2"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_335 = function() {
	this.initialize(ss["SET IT_atlas_2"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_334 = function() {
	this.initialize(ss["SET IT_atlas_2"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_333 = function() {
	this.initialize(ss["SET IT_atlas_2"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_332 = function() {
	this.initialize(ss["SET IT_atlas_2"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_331 = function() {
	this.initialize(ss["SET IT_atlas_3"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_330 = function() {
	this.initialize(ss["SET IT_atlas_2"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_329 = function() {
	this.initialize(ss["SET IT_atlas_2"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_328 = function() {
	this.initialize(ss["SET IT_atlas_2"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_327 = function() {
	this.initialize(ss["SET IT_atlas_2"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_326 = function() {
	this.initialize(ss["SET IT_atlas_3"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_325 = function() {
	this.initialize(ss["SET IT_atlas_2"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_324 = function() {
	this.initialize(ss["SET IT_atlas_2"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_323 = function() {
	this.initialize(ss["SET IT_atlas_3"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_322 = function() {
	this.initialize(ss["SET IT_atlas_2"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_321 = function() {
	this.initialize(ss["SET IT_atlas_2"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_320 = function() {
	this.initialize(ss["SET IT_atlas_2"]);
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_319 = function() {
	this.initialize(ss["SET IT_atlas_3"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_318 = function() {
	this.initialize(ss["SET IT_atlas_2"]);
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_317 = function() {
	this.initialize(ss["SET IT_atlas_3"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_316 = function() {
	this.initialize(ss["SET IT_atlas_2"]);
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_315 = function() {
	this.initialize(ss["SET IT_atlas_3"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_314 = function() {
	this.initialize(ss["SET IT_atlas_2"]);
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_313 = function() {
	this.initialize(ss["SET IT_atlas_2"]);
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_312 = function() {
	this.initialize(ss["SET IT_atlas_2"]);
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_311 = function() {
	this.initialize(ss["SET IT_atlas_2"]);
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_310 = function() {
	this.initialize(ss["SET IT_atlas_2"]);
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_309 = function() {
	this.initialize(ss["SET IT_atlas_2"]);
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_308 = function() {
	this.initialize(ss["SET IT_atlas_2"]);
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_307 = function() {
	this.initialize(ss["SET IT_atlas_2"]);
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_306 = function() {
	this.initialize(ss["SET IT_atlas_2"]);
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_305 = function() {
	this.initialize(ss["SET IT_atlas_2"]);
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_304 = function() {
	this.initialize(ss["SET IT_atlas_2"]);
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_303 = function() {
	this.initialize(ss["SET IT_atlas_3"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_302 = function() {
	this.initialize(ss["SET IT_atlas_2"]);
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_301 = function() {
	this.initialize(ss["SET IT_atlas_2"]);
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_300 = function() {
	this.initialize(ss["SET IT_atlas_2"]);
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_299 = function() {
	this.initialize(ss["SET IT_atlas_2"]);
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_298 = function() {
	this.initialize(ss["SET IT_atlas_3"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_297 = function() {
	this.initialize(ss["SET IT_atlas_2"]);
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_296 = function() {
	this.initialize(ss["SET IT_atlas_2"]);
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_295 = function() {
	this.initialize(ss["SET IT_atlas_2"]);
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_294 = function() {
	this.initialize(ss["SET IT_atlas_2"]);
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_293 = function() {
	this.initialize(ss["SET IT_atlas_2"]);
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_292 = function() {
	this.initialize(ss["SET IT_atlas_2"]);
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_291 = function() {
	this.initialize(ss["SET IT_atlas_2"]);
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_290 = function() {
	this.initialize(ss["SET IT_atlas_2"]);
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_289 = function() {
	this.initialize(ss["SET IT_atlas_2"]);
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_368 = function() {
	this.initialize(ss["SET IT_atlas_3"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_287 = function() {
	this.initialize(ss["SET IT_atlas_3"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_286 = function() {
	this.initialize(ss["SET IT_atlas_3"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_285 = function() {
	this.initialize(ss["SET IT_atlas_3"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_284 = function() {
	this.initialize(ss["SET IT_atlas_3"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_283 = function() {
	this.initialize(ss["SET IT_atlas_3"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_282 = function() {
	this.initialize(ss["SET IT_atlas_2"]);
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_281 = function() {
	this.initialize(ss["SET IT_atlas_3"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_280 = function() {
	this.initialize(ss["SET IT_atlas_3"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_279 = function() {
	this.initialize(ss["SET IT_atlas_3"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_278 = function() {
	this.initialize(ss["SET IT_atlas_3"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_277 = function() {
	this.initialize(ss["SET IT_atlas_3"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_276 = function() {
	this.initialize(ss["SET IT_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_275 = function() {
	this.initialize(ss["SET IT_atlas_2"]);
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_274 = function() {
	this.initialize(ss["SET IT_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_273 = function() {
	this.initialize(ss["SET IT_atlas_3"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_272 = function() {
	this.initialize(ss["SET IT_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_271 = function() {
	this.initialize(ss["SET IT_atlas_2"]);
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_270 = function() {
	this.initialize(ss["SET IT_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_269 = function() {
	this.initialize(img.CachedBmp_269);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2082,1106);


(lib.CachedBmp_268 = function() {
	this.initialize(ss["SET IT_atlas_3"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_267 = function() {
	this.initialize(ss["SET IT_atlas_3"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_266 = function() {
	this.initialize(ss["SET IT_atlas_3"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_265 = function() {
	this.initialize(ss["SET IT_atlas_2"]);
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_264 = function() {
	this.initialize(ss["SET IT_atlas_3"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_263 = function() {
	this.initialize(ss["SET IT_atlas_3"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_262 = function() {
	this.initialize(ss["SET IT_atlas_3"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_261 = function() {
	this.initialize(ss["SET IT_atlas_3"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_260 = function() {
	this.initialize(ss["SET IT_atlas_3"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_259 = function() {
	this.initialize(ss["SET IT_atlas_3"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_258 = function() {
	this.initialize(ss["SET IT_atlas_3"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_257 = function() {
	this.initialize(ss["SET IT_atlas_3"]);
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_256 = function() {
	this.initialize(ss["SET IT_atlas_3"]);
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_255 = function() {
	this.initialize(ss["SET IT_atlas_3"]);
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_254 = function() {
	this.initialize(ss["SET IT_atlas_3"]);
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_253 = function() {
	this.initialize(ss["SET IT_atlas_3"]);
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_252 = function() {
	this.initialize(ss["SET IT_atlas_2"]);
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_251 = function() {
	this.initialize(ss["SET IT_atlas_2"]);
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_250 = function() {
	this.initialize(ss["SET IT_atlas_2"]);
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_249 = function() {
	this.initialize(ss["SET IT_atlas_2"]);
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_248 = function() {
	this.initialize(ss["SET IT_atlas_2"]);
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_247 = function() {
	this.initialize(ss["SET IT_atlas_2"]);
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_246 = function() {
	this.initialize(ss["SET IT_atlas_2"]);
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_245 = function() {
	this.initialize(ss["SET IT_atlas_3"]);
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_244 = function() {
	this.initialize(ss["SET IT_atlas_2"]);
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.yellowS = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FED57B").ss(1,1,1).p("EAthgAaQDtgsDVgeQBUgMBRgJQKOhQKPBzAxLjEQGChwNLE0QNMEyNTiPQNSiPADgBA3OhUQ/yKh0LsNQgGgDgTgE");
	this.shape.setTransform(480.4298,102.8926,0.9872,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FED57B").ss(13,1,1).p("EBVHgF6IAAMKEBTAAFWIyLAAEhVGAEZIAAqTEggdAFWMgs3AAAEApZAFWMgxrAAAEhVGgGLMCqNgAEIAAAE");
	this.shape_1.setTransform(545.8831,40.025,0.9872,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FED57B").s().p("EhVhADGQgGgDgTgFQgTgFAHh0QAGhzAUAjQATAiAUAUIAAqTMCqNAAAIAAMKQAZhIARASQARARAFAbQAEAagTA7QgTA7jKAhQkvAwkxgMQi+gIi2geQg9gLg8gNQqPhzqOBQQhRAKhUAMQjVAejtArQh9AbgoAIIhGAMItVCQQtTCPtLk0QtMkzmCBwImDBwQutE3sPAAQuLAAq2mjgEBTBABoIyLAAgEApaABoMgxrAAAgEggcABoMgs3AAAgEAqNAEiIAAAAgEAsyAEMIgrAHQguAHhMAIQBUgMBRgKgEAsyAEMIAAAAg");
	this.shape_2.setTransform(545.7698,63.8377,0.9872,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.yellowS, new cjs.Rectangle(1.6,-6.5,1088.6000000000001,133.1), null);


(lib.whiteB = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_363();
	this.instance.setTransform(-550.3,-302.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.whiteB, new cjs.Rectangle(-550.3,-302.2,1089,615), null);


(lib.treeBK = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_362();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.treeBK, new cjs.Rectangle(0,0,1288,735), null);


(lib.Symbol14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("AISDfQBQhBApifQAOg5AfgFQAQgqgQgwQhHAEh3hCQh3hCh+AzQh+A0gpgVIgDAlIgCAlIingMIADgnQBSgrBUA5ACJg1QAhgRApAxQByCHB0BxAn+C9QA7AeBNgIQDlgXA/kOIABgRICnAMIgBAPQAcEZDaA2QBGASA8gUQAkgNAhgZQA0A2gdAWQghAdg7hDAJihcQi7AZi9gLQCJCUCECAAIoiRQisAhjKgZAhJjUQBOgpBZA2AhJjUIgCAkAo6CQQhJhLgUioQgHg3gfgKQgJgrAXgtQBHAOCDgxQCCgxB5BEQB4BGApgOAiUhgQgUACguAjQiOBph7BxAo6CQQhDAvAjAhQAnAhA1hEQghgRgbgcgAoVB1IEpjjQjBgMiwg2AojjfQCkA1DTAM");
	this.shape.setTransform(70.4612,30.8097);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AAA4A0").s().p("AhUATIACgiQBPgqBYA3IgDAkQhSg5hUAqg");
	this.shape_1.setTransform(71.35,11.153);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhUAXIADgnQBSgrBUA6IgCAkg");
	this.shape_2.setTransform(71.075,14.7551);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#736157").s().p("AHNEFQAkgNAhgZQghAZgkANQg8AUhGgSQjag2gckZIABgPIingMIgBARQg/EOjlAXQhNAIg7geQghgRgbgcQAbAcAhARQg1BEgnghQgjghBDgvQhJhLgUioQgHg3gfgKQgJgrAXgtQBHAOCDgxQCCgxB5BEQB4BGApgOIgCAkIgDAnICnAMIACglIADglQApAVB+g0QB+gzB3BCQB3BCBHgEQAQAwgQAqQgfAFgOA5QgpCfhQBBQA0A2gdAWQgKAJgMAAQgdAAgpgvgACJg1QgDBGA4BsQB5CPCCgpQh0hxhyiHQgegkgaAAQgJAAgJAEgAH3DGQAXgPAXgVQBniWgqhoQi7AZi9gLQCJCUCECAgAjWg7QiOBph7BxQB0A/CLhsQBWh4gKhaQgUACguAjgAo0BUQAPASAQAPIEpjjQjBgMiwg2QgwBbBZCpgACyiJQDKAZCsghQhIgghQgJIgZgBQh7AAhKAygAojjfQCkA1DTAMQhIhEh9gRIggAAQhNAAhFAUg");
	this.shape_3.setTransform(70.4612,30.8097);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(-1,-1,142.9,63.6), null);


(lib.Symbol13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("AIlCmQDQkyllgqQl9gOCrFFQCtDLC6imgAjgB2QDakzlrgyQl6gUC2FbQCVCzDAiVg");
	this.shape.setTransform(62.4962,24.0646);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(217,204,193,0.647)").s().p("AC+CBQirlFF9AOQFlAqjQEyQhUBLhRAAQhjAAhfhwgAo1BYQi2lbF6AUQFrAyjaEzQhYBEhOAAQheAAhRhig");
	this.shape_1.setTransform(62.4962,24.0646);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(-1,-1,127,50.2), null);


(lib.Symbol8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_266();
	this.instance.setTransform(14.8,45.2,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_265();
	this.instance_1.setTransform(-1.5,-1.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(-1.5,-1.5,134.5,140.5), null);


(lib.Symbol7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AgSAGQADgCADgBQALgDAJgCQADAAAEgCIAEgB");
	this.shape.setTransform(40.875,197.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AiWoWIBtGXIApCZQAYBXAHBWQA2DVAuBaQADAEACADABkIXQAJgOAOgEQAPgEANAH");
	this.shape_1.setTransform(29.025,145);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(4,1,1).p("ADFqzQAAADgBADQAAAEAAAEIhABHIhKBVQADABACACQAKAJgQAWQgOAXgYAZQgXAYgWAHQgVAGgBAGQgBAFg0AvQAIgSAHgQQgzgKgnAnADFqzQAIgHgJANQgNATgzA8AEsssIhoCHAhWl6QAJgSAOgSQAOgSAwgwQAwgxBGhOQBHhNAJgHAjFleQALgDAKAEQAGACAFADQAUAMAGAWQABADABACQAEAVgKASQgLATgUAHQgDABgCAAQgBABgBAAQgWAFgTgMQgHgEgGgFQgFgEgEgFQgCgDgBgEQAAAAgWAbQABgCABgBQASgoAJgXQAEgKAGgIAkXihQgGABgDgCQgIgEgDgIQgCgJAFgIQAEgHAXgtQARgSAIgCAjrj+QAHAnAXgMQAZgLgbAaQgbAagYAPQgNAHgIADQgEDMDVCEQEBCghPHVAhllYIgkAnABmMlQACgBADAAQAAAAABAAQgBAFgBAE");
	this.shape_2.setTransform(31.9714,114.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(6,1,1).p("AgYAyQgUgKgEgbQgGgbALgRQAKgRATgFQASgGAVAMQAVALAEATQADASgFAWQgEAWgYAIQgTAHgZgKg");
	this.shape_3.setTransform(64.4764,28.3706);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(3,1,1).p("ADjoPQAEgOAJgPQAMgTAOgSQAigsAygvQAzguAtghQATgNATgLQA+glAUAYQAUAWgUA5QgUA6hBA+QhCA+hOA1QhNA1gdggQgUgXAQgnQhAgMgrg2Qgsg2gghtQgehsA9hNQArg4A+gIQAZgDAcAEQBgANAuAdQAvAeARAOQATAQAkApQAkAqgHAFAg+xLQABgBAAAAQAKgHARAAQAVAIAEAUAB6wbQgSg0gvgLQgoANgaAWQgUAPgOATQgXgGgFgVQAAgSAJgJQh/hbgjCwQgEARgCAVQgIBNBPCGQAPAhgDA4AB6wbQhpApgaBqQgkgSgcg5QAJglAVgdAo8k6QAVgPAEgBQAAgBABgDAoxlEQAAAAAAABQgEADgHAGAo6k9QADgDACgCQABgBABAAAo/k4IABAAQAAgBABAAQAAgBABAAQAAAAABgBAjVNFQAwgJAwAOQAxAQAJAjQAKAjgqAjQgrAjg8AQQg7APgtgGQgtgHgKgkQgKglAdglQAcgnAmgQAjsMzQBZgHBVAeQBUAgAjAsQAmArhPA2QhOA1hsAmQhsAlhYgRQhYgRgPg+QgPg+BEhCQBEhBBqgiAC0vtQgggzgaAF");
	this.shape_4.setTransform(66.4813,113.1414);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ACfMoQgRgPgHgaQgHgaAHgVQABgFADgEIASgGIAGgCIAEgBIgEABIgGACIgVAGIgGADQAJgPAOgEQAPgDANAHIADgBIAAAAIAJAGQAQAQAHAaQAHAagGAVQgIAVgQAEIgIABQgNAAgNgLgAjlkeQgIgEgCgJQgCgJAFgHIAbg1QAQgRAJgCQAHgBACAJIAAABQgGgEgDgFQADAFAGAEQAGAmAYgLQAYgMgaAaQgcAagXAPQgNAIgIACIgFABIgFgBgAi7mKIADAHQgJACgQARIAWgagAi4mDIAAAAgAjBn+Qg7hOgFgUQgGgUAMgTQAMgRAVgGQAWgGAUAJQATALAFAUQAFAUAAAsQAAAsADAcQACAVgCAGIgCADIgJAGIgBAAIgBABIgKAIIgGAEIAIgGIAHgGIACgCQgKAEgHAKIgBAAQAJgTgcgogAgan2QAIgTAPgSQANgSAwgwQAwgwBHhOQBGhOAKgHIgCAHQgNATgzA8IhKBVQADAAACADQAKAIgPAXQgPAXgYAYQgXAZgWAGQgVAGgBAGQgCAFgyAwIAPgigAEBswQAIgGgKANIACgHg");
	this.shape_5.setTransform(26.0439,127.145);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FED279").s().p("AgcBzQgogoARglQBFgDCWBgQAqBEhOARQh4g9gogogAAbhFQgigyBFgKIDpA6QAzA8hJAdQjUgmgigxgAkZAFQgdgPgEghIAAgOQACgrAugpQAugqAkgVQAagPAYAGQgtAhgzAvQgyAvgiArQAigrAygvQAzgvAtghQAJADAIAGQAgAVAHAkQAGAjgdAgQgdAeg5AmQgmAXgcAAQgPAAgNgGgAiGjVIAAAAg");
	this.shape_6.setTransform(124.5863,58.0767);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,-1.5,156.2,229.3), null);


(lib.Symbol6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AgSAGQADgCADgBQALgDAJgCQADAAAEgCIAEgB");
	this.shape.setTransform(40.875,197.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AiWoWIBtGXIApCZQAYBXAHBWQA2DVAuBaQADAEACADABkIXQAJgOAOgEQAPgEANAH");
	this.shape_1.setTransform(29.025,145);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(4,1,1).p("ADFqzQAIgHgJANQAAAEAAAEIhABHIhKBVQADABACACQAKAJgQAWQgOAXgYAZQgXAYgWAHQgVAGgBAGQgBAFg0AvQAIgSAHgQQgzgKgnAnADFqzQAAADgBADQgNATgzA8AEsssIhoCHAhWl6QAJgSAOgSQAOgSAwgwQAwgxBGhOQBHhNAJgHAjFleQALgDAKAEQAGACAFADQAUAMAGAWQABADABACQAEAVgKASQgLATgUAHQgDABgCAAQgBABgBAAQgWAFgTgMQgHgEgGgFQgFgEgEgFQgCgDgBgEQAAAAgWAbQABgCABgBQASgoAJgXQAEgKAGgIAkXihQgGABgDgCQgIgEgDgIQgCgJAFgIQAEgHAXgtQARgSAIgCAjrj+QAHAnAXgMQAZgLgbAaQgbAagYAPQgNAHgIADQgEDMDVCEQEBCghPHVAhllYIgkAnABmMlQACgBADAAQAAAAABAAQgBAFgBAE");
	this.shape_2.setTransform(31.9714,114.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(6,1,1).p("AgYAyQgUgKgEgbQgGgbALgRQAKgRATgFQASgGAVAMQAVALAEATQADASgFAWQgEAWgYAIQgTAHgZgKg");
	this.shape_3.setTransform(64.4764,28.3706);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(3,1,1).p("ADjoPQAEgOAJgPQAMgTAOgSQAigsAygvQAzguAtghQATgNATgLQA+glAUAYQAUAWgUA5QgUA6hBA+QhCA+hOA1QhNA1gdggQgUgXAQgnQhAgMgrg2Qgsg2gghtQgehsA9hNQArg4A+gIQAZgDAcAEQBgANAuAdQAvAeARAOQATAQAkApQAkAqgHAFAg+xLQABgBAAAAQAKgHARAAQAVAIAEAUAB6wbQgSg0gvgLQgoANgaAWQgUAPgOATQgXgGgFgVQAAgSAJgJQh/hbgjCwQgEARgCAVQgIBNBPCGQAPAhgDA4AB6wbQhpApgaBqQgkgSgcg5QAJglAVgdAo8k6QAVgPAEgBQAAgBABgDAoxlEQAAAAAAABQgEADgHAGAo6k9QADgDACgCQABgBABAAAo/k4IABAAQAAgBABAAQAAgBABAAQAAAAABgBAjVNFQAwgJAwAOQAxAQAJAjQAKAjgqAjQgrAjg8AQQg7APgtgGQgtgHgKgkQgKglAdglQAcgnAmgQAjsMzQBZgHBVAeQBUAgAjAsQAmArhPA2QhOA1hsAmQhsAlhYgRQhYgRgPg+QgPg+BEhCQBEhBBqgiAC0vtQgggzgaAF");
	this.shape_4.setTransform(66.4813,113.1414);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ACfMoQgRgPgHgaQgHgaAHgVQABgFADgEIASgGIAGgCIAEgBIgEABIgGACIgVAGIgGADQAJgPAOgEQAPgDANAHIADgBIAAAAIAJAGQAQAQAHAaQAHAagGAVQgIAVgQAEIgIABQgNAAgNgLgAjlkeQgIgEgCgJQgCgJAFgHIAbg1QAQgRAJgCQAHgBACAJIAAABQgGgEgDgFQADAFAGAEQAGAmAYgLQAYgMgaAaQgcAagXAPQgNAIgIACIgFABIgFgBgAi7mKIADAHQgJACgQARIAWgagAi4mDIAAAAgAjBn+Qg7hOgFgUQgGgUAMgTQAMgRAVgGQAWgGAUAJQATALAFAUQAFAUAAAsQAAAsADAcQACAVgCAGIgCADIgJAGIgBAAIgBABIgKAIIgGAEIAIgGIAHgGIACgCQgKAEgHAKIgBAAQAJgTgcgogAgan2QAIgTAPgSQANgSAwgwQAwgwBHhOQBGhOAKgHIgCAHQgNATgzA8IhKBVQADAAACADQAKAIgPAXQgPAXgYAYQgXAZgWAGQgVAGgBAGQgCAFgyAwIAPgigAEBswQAIgGgKANIACgHg");
	this.shape_5.setTransform(26.0439,127.145);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FED279").s().p("AAbAdQgigxBFgKIDpA5QAzA8hJAeQjUgngigxgAkZBoQgdgQgEghIAAgOQACgqAugpQAugqAkgVQAagPAYAGQgtAhgzAvQgyAugiArQAigrAyguQAzgvAtghQAJADAIAGQAgAVAHAkQAGAjgdAfQgdAeg5AmQgmAYgcAAQgPAAgNgGgAiGhyIAAAAg");
	this.shape_6.setTransform(124.5863,48.1767);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,-1.5,156.2,229.3), null);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AgSAGQADgCADgBQALgDAJgCQADAAAEgCIAEgB");
	this.shape.setTransform(40.875,197.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AiWoWIBtGXIApCZQAYBXAHBWQA2DVAuBaQADAEACADABkIXQAJgOAOgEQAPgEANAH");
	this.shape_1.setTransform(29.025,145);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(4,1,1).p("ADEqtQAAAEAAAEIhABHIhKBVQADABACACQAKAJgQAWQgOAXgYAZQgXAYgWAHQgVAGgBAGQgBAFg0AvQAIgSAHgQQgzgKgnAnADFqzQAAADgBADQgNATgzA8ADFqzQAIgHgJANAEsssIhoCHAhWl6QAJgSAOgSQAOgSAwgwQAwgxBGhOQBHhNAJgHAjFleQALgDAKAEQAGACAFADQAUAMAGAWQABADABACQAEAVgKASQgLATgUAHQgDABgCAAQgBABgBAAQgWAFgTgMQgHgEgGgFQgFgEgEgFQgCgDgBgEQAAAAgWAbQABgCABgBQASgoAJgXQAEgKAGgIAkXihQgGABgDgCQgIgEgDgIQgCgJAFgIQAEgHAXgtQARgSAIgCAjrj+QAHAnAXgMQAZgLgbAaQgbAagYAPQgNAHgIADQgEDMDVCEQEBCghPHVAhllYIgkAnABmMlQACgBADAAQAAAAABAAQgBAFgBAE");
	this.shape_2.setTransform(31.9714,114.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(6,1,1).p("AgYAyQgUgKgEgbQgGgbALgRQAKgRATgFQASgGAVAMQAVALAEATQADASgFAWQgEAWgYAIQgTAHgZgKg");
	this.shape_3.setTransform(64.4764,28.3706);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(3,1,1).p("ADjoPQAEgOAJgPQAMgTAOgSQAigsAygvQAzguAtghQATgNATgLQA+glAUAYQAUAWgUA5QgUA6hBA+QhCA+hOA1QhNA1gdggQgUgXAQgnQhAgMgrg2Qgsg2gghtQgehsA9hNQArg4A+gIQAZgDAcAEQBgANAuAdQAvAeARAOQATAQAkApQAkAqgHAFAg+xLQABgBAAAAQAKgHARAAQAVAIAEAUAB6wbQgSg0gvgLQgoANgaAWQgUAPgOATQgXgGgFgVQAAgSAJgJQh/hbgjCwQgEARgCAVQgIBNBPCGQAPAhgDA4AB6wbQhpApgaBqQgkgSgcg5QAJglAVgdAo8k6QAVgPAEgBQAAgBABgDAoxlEQAAAAAAABQgEADgHAGAo6k9QADgDACgCQABgBABAAAo/k4IABAAQAAgBABAAQAAgBABAAQAAAAABgBAjVNFQAwgJAwAOQAxAQAJAjQAKAjgqAjQgrAjg8AQQg7APgtgGQgtgHgKgkQgKglAdglQAcgnAmgQAjsMzQBZgHBVAeQBUAgAjAsQAmArhPA2QhOA1hsAmQhsAlhYgRQhYgRgPg+QgPg+BEhCQBEhBBqgiAC0vtQgggzgaAF");
	this.shape_4.setTransform(66.4813,113.1414);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ACfMoQgRgPgHgaQgHgaAHgVQABgFADgEIASgGIAGgCIAEgBIgEABIgGACIgVAGIgGADQAJgPAOgEQAPgDANAHIADgBIAAAAIAJAGQAQAQAHAaQAHAagGAVQgIAVgQAEIgIABQgNAAgNgLgAjlkeQgIgEgCgJQgCgJAFgHIAbg1QAQgRAJgCQAHgBACAJIAAABQgGgEgDgFQADAFAGAEQAGAmAYgLQAYgMgaAaQgcAagXAPQgNAIgIACIgFABIgFgBgAi7mKIADAHQgJACgQARIAWgagAi4mDIAAAAgAjBn+Qg7hOgFgUQgGgUAMgTQAMgRAVgGQAWgGAUAJQATALAFAUQAFAUAAAsQAAAsADAcQACAVgCAGIgCADIgJAGIgBAAIgBABIgKAIIgGAEIAIgGIAHgGIACgCQgKAEgHAKIgBAAQAJgTgcgogAgan2QAIgTAPgSQANgSAwgwQAwgwBHhOQBGhOAKgHIgCAHQgNATgzA8IhKBVQADAAACADQAKAIgPAXQgPAXgYAYQgXAZgWAGQgVAGgBAGQgCAFgyAwIAPgigAEBswQAIgGgKANIACgHg");
	this.shape_5.setTransform(26.0439,127.145);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FED279").s().p("AhUBrQgdgQgEghIAAgOQACgrAugoQAugqAjgVQAagPAYAGQgtAhgyAvQgyAugiArQAigrAyguQAygvAtghQAJADAIAGQAgAVAHAkQAGAjgdAfQgdAeg5AmQglAZgcAAQgPAAgNgHgAA+hvIAAAAg");
	this.shape_6.setTransform(104.8897,47.8632);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,-1.5,125.6,229.3), null);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_264();
	this.instance.setTransform(90.05,81.25,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_263();
	this.instance_1.setTransform(101.9,102.65,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_262();
	this.instance_2.setTransform(101.65,127.95,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_261();
	this.instance_3.setTransform(88.4,147.5,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_260();
	this.instance_4.setTransform(68.95,156.45,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_259();
	this.instance_5.setTransform(42.95,154.75,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_258();
	this.instance_6.setTransform(18.15,142.75,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_257();
	this.instance_7.setTransform(4.85,123.55,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_256();
	this.instance_8.setTransform(4.85,99.55,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_255();
	this.instance_9.setTransform(17.95,80,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_254();
	this.instance_10.setTransform(37.85,65.6,0.5,0.5);

	this.instance_11 = new lib.CachedBmp_253();
	this.instance_11.setTransform(66.75,67.05,0.5,0.5);

	this.instance_12 = new lib.CachedBmp_252();
	this.instance_12.setTransform(-1.5,-2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-1.5,-2,211,227.5), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAFCgIg6jXIALhoIA2BaIAqDYIAAANg");
	this.shape.setTransform(5.35,17.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,1.3,10.7,31.999999999999996), null);


(lib.fume2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0.157)").s().p("AgDAUIADgMIABgFIAAgBIgBgKQgBgIACgGQADgGgBAHQgBAIACAFQACAFAAAGIAAAAQAAAIgDAHQgDAHgDABIgBAAQgDAAAEgGg");
	this.shape.setTransform(0.625,2.46);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fume2, new cjs.Rectangle(0,-0.1,1.3,5.199999999999999), null);


(lib.fume1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0.157)").s().p("AgDATIADgLIABgGIAAgBIgBgKQgBgMABgDQAAAAAAAAQAAAAABAAQAAABAAABQABABAAABQAAAHACAEQACAFAAAGIAAABQAAAHgDAHQgDAHgDABIgBAAQgDAAAEgGg");
	this.shape.setTransform(0.625,2.5215);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fume1, new cjs.Rectangle(0,0,1.3,5.1), null);


(lib.yuvalD = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_361();
	this.instance.setTransform(-46.95,-54,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.yuvalD, new cjs.Rectangle(-46.9,-54,93,108), null);


(lib.yuvalB = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_360();
	this.instance.setTransform(-47,-54,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.yuvalB, new cjs.Rectangle(-47,-54,92,107), null);


(lib.yirmiK = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_359();
	this.instance.setTransform(-46,-54,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.yirmiK, new cjs.Rectangle(-46,-54,92.5,107), null);


(lib.yehudaP = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_358();
	this.instance.setTransform(-47,-54,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.yehudaP, new cjs.Rectangle(-47,-54,92,107), null);


(lib.yehoramG = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_357();
	this.instance.setTransform(-46,-54,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.yehoramG, new cjs.Rectangle(-46,-54,92.5,107), null);


(lib.tuna = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_356();
	this.instance.setTransform(-48,-54,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tuna, new cjs.Rectangle(-48,-54,94,106.5), null);


(lib.staticon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_355();
	this.instance.setTransform(-47,-54,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.staticon, new cjs.Rectangle(-47,-54,93,106.5), null);


(lib.saritH = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_354();
	this.instance.setTransform(-52.55,-52,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.saritH, new cjs.Rectangle(-52.5,-52,103.5,106.5), null);


(lib.sabliminal = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_353();
	this.instance.setTransform(-46,-54,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sabliminal, new cjs.Rectangle(-46,-54,92.5,107), null);


(lib.ramiF = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_352();
	this.instance.setTransform(-46,-54,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ramiF, new cjs.Rectangle(-46,-54,92.5,107), null);


(lib.oritS = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_351();
	this.instance.setTransform(-47,-54,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.oritS, new cjs.Rectangle(-47,-54,93.5,106.5), null);


(lib.omerA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_350();
	this.instance.setTransform(-46.95,-53,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.omerA, new cjs.Rectangle(-46.9,-53,93,106.5), null);


(lib.noaK = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_349();
	this.instance.setTransform(-47,-54,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.noaK, new cjs.Rectangle(-47,-54,93.5,107), null);


(lib.ninetT = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_348();
	this.instance.setTransform(-46.95,-54,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ninetT, new cjs.Rectangle(-46.9,-54,93,106.5), null);


(lib.natanG = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_347();
	this.instance.setTransform(-47.95,-54,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.natanG, new cjs.Rectangle(-47.9,-54,93,106.5), null);


(lib.mosheP = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_346();
	this.instance.setTransform(-45,-54,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mosheP, new cjs.Rectangle(-45,-54,90.5,106.5), null);


(lib.miriM = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_345();
	this.instance.setTransform(-46,-54,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.miriM, new cjs.Rectangle(-46,-54,93,107), null);


(lib.mayaB = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_344();
	this.instance.setTransform(-46,-56,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mayaB, new cjs.Rectangle(-46,-56,92.5,107), null);


(lib.liranD = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_343();
	this.instance.setTransform(-47,-54,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.liranD, new cjs.Rectangle(-47,-54,93,106.5), null);


(lib.leaS = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_342();
	this.instance.setTransform(-47,-56,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.leaS, new cjs.Rectangle(-47,-56,93.5,106.5), null);


(lib.kobiA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_341();
	this.instance.setTransform(-47,-54,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.kobiA, new cjs.Rectangle(-47,-54,92.5,106.5), null);


(lib.kerenP = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_340();
	this.instance.setTransform(-47,-54,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.kerenP, new cjs.Rectangle(-47,-54,93.5,107), null);


(lib.ivriL = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_339();
	this.instance.setTransform(-47,-54,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ivriL, new cjs.Rectangle(-47,-54,93,107), null);


(lib.itayL = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_338();
	this.instance.setTransform(-46,-54,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.itayL, new cjs.Rectangle(-46,-54,92.5,107), null);


(lib.ilayB = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_337();
	this.instance.setTransform(-47,-53.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ilayB, new cjs.Rectangle(-47,-53.9,93.5,107.5), null);


(lib.idanR = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_336();
	this.instance.setTransform(-47,-54,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.idanR, new cjs.Rectangle(-47,-54,93,107), null);


(lib.idanA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_335();
	this.instance.setTransform(-47,-54,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.idanA, new cjs.Rectangle(-47,-54,93,106.5), null);


(lib.harelS = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_334();
	this.instance.setTransform(-46,-54,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.harelS, new cjs.Rectangle(-46,-54,92.5,107), null);


(lib.harelM = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_333();
	this.instance.setTransform(-48,-54,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.harelM, new cjs.Rectangle(-48,-54,93.5,107), null);


(lib.hananBA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_332();
	this.instance.setTransform(-47,-54,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hananBA, new cjs.Rectangle(-47,-54,92.5,107), null);


(lib.guyM = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_331();
	this.instance.setTransform(-46,-54,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.guyM, new cjs.Rectangle(-46,-54,92.5,106), null);


(lib.eyalG = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_330();
	this.instance.setTransform(-47,-54,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eyalG, new cjs.Rectangle(-47,-54,94,106.5), null);


(lib.eviatarB = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_329();
	this.instance.setTransform(-47,-54,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eviatarB, new cjs.Rectangle(-47,-54,93,106.5), null);


(lib.ehudB = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_328();
	this.instance.setTransform(-47,-54,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ehudB, new cjs.Rectangle(-47,-54,94.5,107), null);


(lib.edenBZ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_327();
	this.instance.setTransform(-46.95,-54,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.edenBZ, new cjs.Rectangle(-46.9,-54,93.5,107.5), null);


(lib.duduT = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_326();
	this.instance.setTransform(-46,-54,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.duduT, new cjs.Rectangle(-46,-54,92,107), null);


(lib.avrahamT = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_325();
	this.instance.setTransform(-47,-54,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.avrahamT, new cjs.Rectangle(-47,-54,93.5,106.5), null);


(lib.avivG = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_324();
	this.instance.setTransform(-46.9,-54.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.avivG, new cjs.Rectangle(-46.9,-54.4,93,106.5), null);


(lib.assafA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_323();
	this.instance.setTransform(-46,-54,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.assafA, new cjs.Rectangle(-46,-54,92.5,107), null);


(lib.arikI = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_322();
	this.instance.setTransform(-47.95,-53,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.arikI, new cjs.Rectangle(-47.9,-53,94,106.5), null);


(lib.yakinton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_321();
	this.instance.setTransform(-48,-54,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.yakinton, new cjs.Rectangle(-48,-54,96.5,107.5), null);


(lib.timin = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_320();
	this.instance.setTransform(-47,-53,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.timin, new cjs.Rectangle(-47,-53,94,106.5), null);


(lib.talilit = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_319();
	this.instance.setTransform(-46,-54,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.talilit, new cjs.Rectangle(-46,-54,92,107.5), null);


(lib.socolant = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_318();
	this.instance.setTransform(-47,-53,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.socolant, new cjs.Rectangle(-47,-53,93,106.5), null);


(lib.sigalit = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_317();
	this.instance.setTransform(-46,-53,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sigalit, new cjs.Rectangle(-46,-53,91.5,106), null);


(lib.shzeif = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_316();
	this.instance.setTransform(-47.8,-54.15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shzeif, new cjs.Rectangle(-47.8,-54.1,94.5,106.5), null);


(lib.shoshana = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_315();
	this.instance.setTransform(-43.5,-53.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shoshana, new cjs.Rectangle(-43.5,-53.5,87,106), null);


(lib.sensiviriya = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_314();
	this.instance.setTransform(-48,-54,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sensiviriya, new cjs.Rectangle(-48,-54,95.5,106.5), null);


(lib.regila = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_313();
	this.instance.setTransform(-47,-53,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.regila, new cjs.Rectangle(-47,-53,94.5,105.5), null);


(lib.pisteya = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_312();
	this.instance.setTransform(-47,-53,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pisteya, new cjs.Rectangle(-47,-53,94,107), null);


(lib.petel = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_311();
	this.instance.setTransform(-47,-54,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.petel, new cjs.Rectangle(-47,-54,93,107), null);


(lib.oranit = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_310();
	this.instance.setTransform(-47,-54,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.oranit, new cjs.Rectangle(-47,-54,94.5,106.5), null);


(lib.oponetzia = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_309();
	this.instance.setTransform(-48,-54,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.oponetzia, new cjs.Rectangle(-48,-54,94.5,105.5), null);


(lib.nimpia = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_308();
	this.instance.setTransform(-48,-54,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.nimpia, new cjs.Rectangle(-48,-54,95,107), null);


(lib.narkis = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_307();
	this.instance.setTransform(-47,-53,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.narkis, new cjs.Rectangle(-47,-53,93,106.5), null);


(lib.nana = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_306();
	this.instance.setTransform(-47,-53,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.nana, new cjs.Rectangle(-47,-53,94.5,105), null);


(lib.monestra = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_305();
	this.instance.setTransform(-47.7,-52.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.monestra, new cjs.Rectangle(-47.7,-52.7,94.5,105.5), null);


(lib.marva = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_304();
	this.instance.setTransform(-47,-53,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.marva, new cjs.Rectangle(-47,-53,94.5,106), null);


(lib.lotus = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_303();
	this.instance.setTransform(-46,-54,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.lotus, new cjs.Rectangle(-46,-54,92,107), null);


(lib.kisosHahoresh = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_302();
	this.instance.setTransform(-48.1,-52.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.kisosHahoresh, new cjs.Rectangle(-48.1,-52.5,95,105), null);


(lib.kaktus = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_301();
	this.instance.setTransform(-47,-53,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.kaktus, new cjs.Rectangle(-47,-53,94,106.5), null);


(lib.hodaya = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_300();
	this.instance.setTransform(-47,-53,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hodaya, new cjs.Rectangle(-47,-53,94,106.5), null);


(lib.hamziz = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_299();
	this.instance.setTransform(-47,-54,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hamziz, new cjs.Rectangle(-47,-54,94,106.5), null);


(lib.gefen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_298();
	this.instance.setTransform(-47.05,-50,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.gefen, new cjs.Rectangle(-47,-50,93.5,99.5), null);


(lib.diyonea = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_297();
	this.instance.setTransform(-47,-54,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.diyonea, new cjs.Rectangle(-47,-54,93.5,107), null);


(lib.darlingtonia = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_296();
	this.instance.setTransform(-47,-54,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.darlingtonia, new cjs.Rectangle(-47,-54,94.5,107), null);


(lib.dardar = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_295();
	this.instance.setTransform(-46.4,-52.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dardar, new cjs.Rectangle(-46.4,-52.9,94,106), null);


(lib.damHamacabim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_294();
	this.instance.setTransform(-47,-53,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.damHamacabim, new cjs.Rectangle(-47,-53,94.5,105.5), null);


(lib.calanit = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_293();
	this.instance.setTransform(-47,-53,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.calanit, new cjs.Rectangle(-47,-53,94.5,105), null);


(lib.cafanitAfarfara = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_292();
	this.instance.setTransform(-47,-53,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cafanitAfarfara, new cjs.Rectangle(-47,-53,94,106), null);


(lib.cactus = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_291();
	this.instance.setTransform(-46.95,-55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cactus, new cjs.Rectangle(-46.9,-55,93,108), null);


(lib.bazil = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_290();
	this.instance.setTransform(-47.6,-53,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bazil, new cjs.Rectangle(-47.6,-53,94,106.5), null);


(lib.aloiArisyeya = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_289();
	this.instance.setTransform(-47,-53,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.aloiArisyeya, new cjs.Rectangle(-47,-53,93.5,107), null);


(lib.soundI = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_279();
	this.instance.setTransform(-26.5,-29.4,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_278();
	this.instance_1.setTransform(-23.3,-28.95,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_281();
	this.instance_2.setTransform(-26.5,-29.4,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_280();
	this.instance_3.setTransform(-23.3,-33.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.5,-33.2,62.5,57.5);


(lib.Play_Icon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(9,1,1).p("AfCDtMgyKgzxIr5GbMAAABZuICjiDIN3mUMAtpgkBIrlD3MgyegxNATdHkMgv7Ame");
	this.shape.setTransform(80.625,-8.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFA072").s().p("EgfBgppIL5mbMAyKAzxMgtpAkBIt3GUIijCDg");
	this.shape_1.setTransform(96.625,-8.325);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Play_Icon, new cjs.Rectangle(-122.5,-320.5,417.8,624.4), null);


(lib.pauseI = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAWjxIBggmICFAAIhFAmgAD7kXIAAIAIhFAqIieAAIgCoEAgUkSIAAIAIhGAqIidAAIgDoEIBggmICGAAIhGAmIigAAAC2jxIAAIEAhaEYIAAoE");
	this.shape.setTransform(5.05,-1.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFA072").s().p("Aj3EXIgDoDIBggnICFAAIAAIAIhFAqgAAYEUIgCoEIBggmICEAAIAAIAIhEAqg");
	this.shape_1.setTransform(6.55,-1.125);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pauseI, new cjs.Rectangle(-21,-30.3,52.6,58), null);


(lib.topicF = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AhOA+QgBgNAIghQABgJADgIQADgWAJgVQAKgcASgYQAPgYgdgRQgYgNAEgYQADgJALgGQAZgPAXABQAVgBAVAMQALAHAGAKQADAIABAHQgBAOgPAJQgeAQAKAaQALAZAHAXIAAABQAAABABABQAGAWADAWQABAGAAAGQAHAlgBANQgQAqgUgqQgigFgkAFQgPArgUgrIgoAAQgPADABAUIAABWQgDAgAYABIDYAAQAcgDAAgkIAAhLQgBgfgaADIgrAA");
	this.shape.setTransform(-0.2964,-59.879);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFDD7A").s().p("AgMAMQgDgGAAgEQAAgDAFgEIAMgLQAIgFADAJIADAOQAAAEgHAGQgFAHgGAAQgHAAgDgHg");
	this.shape_1.setTransform(10.275,-43.4758);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCD6D").s().p("AhvBIQgYAAADggIAAhWQgBgTAPgEIAoABQAUArAPgrQAkgFAiAEQAUArAQgrIArAAQAagDABAfIAABKQAAAkgcADgABsAQIgNAKQgGAFAAADQAAAEADAHQAEAGAHAAQAGAAAGgGQAHgHAAgEIgDgOQgCgGgEAAQgCAAgDACg");
	this.shape_2.setTransform(-0.2964,-46.7066);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(2,1,1).p("AnxkvQAQABARACQBCAHBBAFQBCAFBBADQDJAHDEgHQBMgDBMgFQAygFAxgFQAagDAagCIAAIZQiuCCs1htg");
	this.shape_3.setTransform(-1.225,-18.952);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AnxD/IAAouIAhADICDAMICDAIQDJAHDEgHQBMgDBMgFIBjgKIA0gFIAAIZQhfBGkeAAQjvAAl3gxg");
	this.shape_4.setTransform(-1.225,-18.952);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.topicF, new cjs.Rectangle(-52,-81.2,101.6,93.7), null);


(lib.timeOF = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_277();
	this.instance.setTransform(-109.9,-228.75,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_276();
	this.instance_1.setTransform(-250.2,-245,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.timeOF, new cjs.Rectangle(-250.2,-245,483.5,501), null);


(lib.startPF = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_275();
	this.instance.setTransform(-134.65,-164.5,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_274();
	this.instance_1.setTransform(-202,-205,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.startPF, new cjs.Rectangle(-202,-205,411.5,390.5), null);


(lib.pausePF = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_273();
	this.instance.setTransform(-109.9,-228.75,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_272();
	this.instance_1.setTransform(-250.2,-245,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pausePF, new cjs.Rectangle(-250.2,-245,483.5,501), null);


(lib.endPF = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.CachedBmp_271();
	this.instance.setTransform(-205.05,-265.2,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_270();
	this.instance_1.setTransform(-249.6,-282.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.endPF, new cjs.Rectangle(-249.6,-282.4,499,543.5), null);


(lib.XbigImageQ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhQBlIgIgHQgHgKAHgJIAxgxQAMgLgJgJIgwguQgJgIgDgKQgBgJACgFQAKgRATAOQAbAVATAVQATAUALgQIA3hIQAGgLALAHQALAHADAGQAEAFgMATQgLATgqAwQgKAKAHAIIAtAlQAIAIgIAMIgIAJQgIAIgJgIIgrglQgJgIgHAIIg0A5QgEAFgFAAQgFAAgHgHg");
	this.shape.setTransform(17.5515,-16.8451);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.498)").s().p("AjpCSIAAkjIHTAAIAAEjg");
	this.shape_1.setTransform(17.4145,-17.4585,0.8801,0.8801);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.XbigImageQ, new cjs.Rectangle(-3.2,-30.3,41.2,25.700000000000003), null);


(lib.XbigC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhQBlIgIgHQgHgKAHgJIAxgxQAMgLgJgJIgwguQgJgIgDgKQgBgJACgFQAKgRATAOQAbAVATAVQATAUALgQIA3hIQAGgLALAHQALAHADAGQAEAFgMATQgLATgqAwQgKAKAHAIIAtAlQAIAIgIAMIgIAJQgIAIgJgIIgrglQgJgIgHAIIg0A5QgEAFgFAAQgFAAgHgHg");
	this.shape.setTransform(17.5515,-16.8451);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.XbigC, new cjs.Rectangle(7.8,-27.7,19.5,21.7), null);


(lib.victoryCD = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AjFDQQingHhuhmQhyhqhBjAQh6mGCmh+QCChFAgCPIAwAFQAAgBAAAAQACgTADgTQGoAUGOBCQAAATAAATIAwAFQA9iFByBfQCHCdjIFkQhnCuiGBQQiNBVi5gpAGqnhIBlAKQAwhPAsA5QAuCAikEWQhiCmiABAQhEAhhsAEAGsonQAAAjgCAjQAAADAAAEQgcG9krDRQgCABgCABQgiAYgmAVQgFACgFADQgWAMgYALQgCABgBABQgBABAAAAQgCACgCACQgLASAMAVQADABAEACQAMAGAKAJQAHAGAFAIQANASgDAUQgDAdgdAQQgIADgHACQgPAFgSABQgBAAgBAAQgBAAgBAAQgHAiAKAaQA+APAvAXQBsA2AjBmQAJAbAEAfIqFhEQAJggAOgZQA3hcB2geQAzgNBAgBIAGg7QgGgCgGgCQgIgDgFgEQgIgEgGgFQgagWACgcQACgXAOgMQAEgEAEgDQAVgNATgDQAAgBABgCQAHgMgCgMQgBgDAAgDQgPgIgGgEQgQgKgOgMAmXo3IgEgBIhlgKQgehYg4AvQhHB0BnEyQA9C4BwBXQAwAnBPAYIBFBHIAAAAQAFAEAFAFQABABACABAmQp1QgEAfgDAeQAAAAAAABQgsHWC5DqAi7DZQAAAAABABQAAAAACABIAAABQAAAAABABQAAAAABAAIgEgDAi2DdQAAAAABABIAAAAIAAAAQABABAAAAIgBgBIgBgBIAAAAAi0DfIABABIABAAAi0DfQABABABAAAjFDQQAFAFAFAEAmXo3INBBW");
	this.shape.setTransform(9.1066,32.1385);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("ABJDSIgjARABsDrIgrAWAB0D5Ig6AeAB6EPIgsAXACpIvIA4gyAEOJuIAigcAD8JmIArgkACyJaIBXhQADLJbIBEg9ACmJOIBOhIADlJdIA0gsAjfpPIAdgZAjToYIAqgkAjeotIBGhAAkiIOIAlAEAkvIeIA9AHAj9HTIAlAEAkZH6IAVACAkMHkIAlAEABeDbIhLAl");
	this.shape_1.setTransform(-3.15,42.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FED57B").s().p("AnCKfQAJggAOgZQA3hcB2geQAzgNBAgBIAGg7IgMgEQgIgDgFgEQgIgEgGgFQgagWACgcQACgXAOgMIAIgHQAVgNATgDIABgDQAHgMgCgMIgBgGIgVgMIgegWIgCgBIgBgBIABABIgBgBIAAAAIAAAAIgBgBIAAAAIgEgDIgBgBIgKgJIAAAAIhFhHQi5jqAsnWIAAgBIAHg9IgLA9IhlgKQgehYg4AvQhHB0BnEyQA9C4BwBXQAwAnBPAYIBFBHQingHhuhmQhyhqhBjAQh6mGCmh+QCChFAgCPIAwAFIAAgBIAFgmQGoAUGOBCIAAAmIAwAFQA9iFByBfQCHCdjIFkQhnCuiGBQQiNBVi5gpQAmgVAigYIAEgCQBsgEBEghQCAhABiimQCkkWguiAQgsg5gwBPIhlgKQACgjAAgjQAAAjgCAjItBhWINBBWIAAAHQgcG9krDRIgEACQgiAYgmAVIgKAFIguAXIgDACIgBABIgEAEQgLASAMAVIAHADQAMAGAKAJQAHAGAFAIQANASgDAUQgDAdgdAQIgPAFQgPAFgSABIgCAAIgCAAQgHAiAKAaQA+APAvAXQBsA2AjBmQAJAbAEAfgACTLXIAigcgACBLPIArgkgABqLGIA0gsgABQLEIBEg9gAA3LDIBXhQgAArK3IBOhIgAAuKYIA4gygAltKOIg8gHgAl4J7IgkgEgAl+JlIgWgCgAliJRIglgEgAlSJAIglgEgAgsGPIAsgXgAhAGAIA6gegAg5FqIArgWgAhnFpIBLglgAhUFMIAjgRgAlOmvIArgkgAlZnEIBGhAgAlZnmIAcgZgAGqnhg");
	this.shape_2.setTransform(9.1066,32.1385);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.victoryCD, new cjs.Rectangle(-62.4,-42.7,143.1,149.7), null);


(lib.Scissors = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D44A40").s().p("AjyEqQhUgXgKhwQgKhyALg+QAah8BVgeIABgBIABgBQACgaAIgOQALgQAEgWQAtAAAfAbQAEAegKAfIgBACIABABQAuBDABBOQABBMgTBNIAAAAQgTBagkAnQgcAdgmAAQgLAAgMgCgAj4hhIAAAAQhKBuApDIIAAABQAZArAYAEQAZAFAZgjQAwhEAMhdIAAAAQAMhdghg4QgYgmgbgFIgHAAQgXAAgYAZgAB3BtIAAAAQg3gegbhDQgbhCgGhgIAAgBQgKgjgXgGIAAABQgdgMgVgmQASgrAkgPQBLArAjBDIABABIABABQBBgBA+AUIAAAAQBmAuATBRQAUBOgpA/Qg1Akg0AAQgtAAgtgbgACFiPQgsAIgPAeQgQAdAOAyIABAAQBFCEBagQIAAAAQBYgZgVhNIAAAAQguh1h3gOIAAAAIgBAAg");
	this.shape.setTransform(43.3063,98.9695);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AjHKHIgBAAQhYgYgKh0QgJhzAKhAQAah+BXggQADgZAJgPQAKgQAEgXIABgBIACgBQAxgBAiAeIABACQAFAfgLAhQAvBEAABPQABBOgTBNQgTBcglAoQgeAggoAAQgMAAgNgDgAiZBfQgEAWgKAQQgJAOgCAaIAAABIgCABQhVAegaB8QgKA/AJByQAKBwBUAXQA1ALAkgmQAlgnAShaIAAAAQAThNgBhNQAAhOgvhDIAAgBIAAgCQAKgfgEgeQgfgbgsAAIgBAAgAi8JcQgYgEgYgrIgBgBQgpjIBKhvIAAAAQAcgeAbAFQAaAFAYAmQAhA4gLBeIAAAAQgNBdgvBEQgWAegXAAIgGAAgAjHD5QhIBtAoDFQAWAnAWAEQAWAEAXggQAuhCANhbIAAgBQALhbggg3QgWgjgYgFIgGAAQgVAAgWAXgAChHJIAAAAQg6gfgchFIAAAAQgahDgGhiQgKgegVgGIAAAAQgegMgXgqIAAgBIAAgBQAUgvAmgQIABgBIACABQBOAsAjBEQBCgBA9AUIAAAAQBqAwAUBUQATBSgqBBIgBAAQg3Amg2AAQguAAgugcgAAwC/IABABQAGBgAaBDQAbBDA4AeIAAAAQBfA7BjhEQApg/gThPQgUhRhmguIAAAAQg9gUhBABIgCgBIgBgBQgihDhNgrQgiAPgTArQAWAmAbAMIAAgBQAXAHALAigAB1E8IAAAAQgOgyAPgdQAPgeAtgIIAAAAQB3AOAuB1IAAAAQAVBOhYAZIAAAAQgKACgJAAQhOAAg+h3gAB7DwQgOAbANAuQBECABVgOQBRgXgThIIAAAAQgshxhzgOQgpAIgOAbgAhGBvIgBgBQgegdg0ABIgCgBIgBgBIAAgCIAbhEQjhmdgliIIAAgCIABgBQAGgGAXAYQAVAWAkAuQBIBcCGC8QAEjlAdjmIAAgBQAGgQAIAEQAFADAGATQAKAiAKBdQAUC4AIFCIAAACIgCABIgFABIgBABIgGAJIAAABIgBABIgCADIgBABIgBABIgEAEIgDAEIgBABIgBACIgCABIgBABIAAABIgBABIgBABIgCABIgBACIgDACIgBABIgBABIAAABIgDACIgDACIgFAEQgMAUgLAdIgBABIgBABIgBAAgAheieIgBAEIAAAFIgBAIIAAADIgDAVIAAACIAAACIgIAuIAAACIgBAIIgEAPIAAACIAAACIgDALIAAADIgDAJIAAADIgCAGIgDAJIgBAEIABABIAAACIAAABIgZBBQAxABAcAaQAJgVAIgRIgBABIAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAgBIAAgBIAAgOIAAgBIABgEIACgHIAGgMIAEgGIAGgGIABAAIABgCIAEgDIACgBIACgBIADgCIAKgDIAEAAIAEAAIAIABIABABIAAAAQgIk/gUi4QgKhcgKgiQgEgPgEgCQgCgBgDAIQgeDrgDDpIAAACIgCABIAAAAgAiFgJIgBgDIgCgNIAAgEIgBgHIAAgZIAEgeIAHgZIANgbIAMgSIABgBIABgCIABgBQiJjChJhdQglgugUgWQgOgPgFgCQAmCGDVGKgAg8gLQgEgEgDgLQgFgYAOAIQAHAIAAAMQgBAMgFAAIgDgBg");
	this.shape_1.setTransform(38.8859,64.6642);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D6D6D9").s().p("AAqFaIAZhBIAAgBIAAgBIgBgCIABgDIADgLIACgFIABgDIACgJIAAgEIADgLIABgBIAAgCIADgQIABgIIAAgCIAIgtIAAgCIAAgCIADgVIAAgDIACgJIAAgFIAAgEIAAgFIABAAIABgBIABgCQADjpAdjqQADgJACABQAEACAEAQQAKAhAKBdQAUC3AJFAIAAgBIgBAAIgJgCIgDAAIgFABIgKADIgCABIgCACIgCABIgFADIgBABIgBABIgGAGIgEAFIgGAMIgCAIIAAADIgBACIAAANIABACQAAAAAAAAQAAAAAAABQAAAAAAAAQABAAAAAAIAAgBIABAAQgIAQgIAVQgdgagxgBgAB8DzQACAMAEADQAIAFABgPQAAgMgGgIQgEgCgDAAQgGAAAEARgAjBkLQAFADAOAPQAVAVAkAvQBJBdCJDAIgCACIgBABIgBABIgMASIgNAcIgHAYIgEAfIAAAYIABAIIAAAEIACANIABACQjUmIgmiHg");
	this.shape_2.setTransform(19.75,37.6233);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Scissors, new cjs.Rectangle(-0.3,-0.3,78.39999999999999,129.9), null);


(lib.Pencils_s_cup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(0.1,1,1).p("ABWA8IAbBUAhwiJIBeE9AAIiyIBODs");
	this.shape.setTransform(55.875,72.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#333333").ss(2,1,1).p("AAyB4IArgSIgxhEIAGBWIAMCcAivi7QARgEARgRIgqhDIAIBYIANCdAgyg5IhbiXAC4DqIhbiE");
	this.shape_1.setTransform(38.35,31.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.1,1,1).p("AG+lhIAWADAHNBjQgBgBAAgBAD2hAQgCgPgCgQQgWibgsinQAAgDgCgBQhghQhMBjQgCACAEADIBQFRIBZFzIADARIABABAFsieQgpgmgrAbQgOAEgUBlIBDElAmcA3QgFgHgNgKQgBgBgDAPQgHAaAPAUQAPAUgagBQgkgVAHgoQAIgoATgLQAIiBBpAdQAKAEABADQAJAKAFAGQAtAyBdCCQAhAvAmA6IAZAlQBYBqAyBdAi9FeIBJBsAAmByQABAAACABAj3itIBUEZAiGjIQBGCkAqCo");
	this.shape_2.setTransform(46.8353,45.8123);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AEQmDQABgDAAgDQAEgUADgUQAThrADhzQAAgLABgKQgEg6gThmQAFgPgCgJQgJgNgOAKQgEAOABAKQgtA9gaBSQgEALgDARQgBAMgCAMQgRBhgMBhQgHA3gGA3QgBADAAACQgBAIgBAIQgDAggEAfQgGBEgFBEQAAABgBAAAEQmEQAAAAAAABAD8jlQAGggAFgkQAAgFACgGQAAgFABgFQAEghACgjIAAgBQAwBqAmBlQB/FQB0GBQAKB8iBBMQiIBZjbAgQiEAag/hQIkDqYIhNjjQgKgfAkgVIgXgeIjIkJ");
	this.shape_3.setTransform(65.6611,94.4377);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DECA4F").s().p("AhwiJQAeAVAfgnIBWExQALAEADgIQhPkcgSgQQAoAGAQgfIBODtIAAACIAbBUQggAMgiAKQgfAIgiAFg");
	this.shape_4.setTransform(55.875,72.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#426B54").s().p("AAUB+IgYglQgmg6ghguIhUkaQAwAqAPg7QAkAWAOggQBFCkAqCoIBeE9QgyhdhZhqg");
	this.shape_5.setTransform(38,58.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DB8884").s().p("ABDEWIhIhsQBNgCAthiQBYBqAzBdQg6ALg+ABIgaABQgYAAgTgEgAjkh8QgFgHgMgKQBZgUAnhbQAtAyBcCDQAhAvAnA5QggBghYALgAj/iuQAIiCBqAdQAKAEAAADQgfBfhLAAIgSgBg");
	this.shape_6.setTransform(28.375,63.843);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4A5316").s().p("Ag6hYQAUhlAOgEQAqgbApAmQgQBhgMBgIgOBuIAAAFIgCAQIgHA/g");
	this.shape_7.setTransform(77.325,48.2099);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#9CA648").s().p("AgWDHIgPgGIhQlQQAHAKAuALIBQFGIgmgFgAgzh5QATAFAXgFIBUE1QgaAMgVACgAABh+QA0gZABgMQAsCmAWCbQgQAPgRALgAh3iUQBNhjBfBQQguAgg1AAQgjAAgmgNg");
	this.shape_8.setTransform(59,20.4373);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3C8C95").s().p("AilI3IkDqXIhNjkQgKgeAkgVQgMBcBVAPQAcAGApgDQA+gBA6gKQAjgGAfgIQAigKAggMQAzgUAtgbIABgCQA6ghAzgtQARgOANgQQA2hEgihZIAAgBQAwBqAmBlQB/FRB0GAQAKB8iBBLQiIBZjbAhQggAGgcAAQhYAAgvg9gAg3H1QAVAuARgxQAYhGAqA/QAVAcAGgYQAfhSAzA9QASATAGgaQAcg7AxAlQAYATAGgrQALhEA0AYQAmAPgIgoQgdhUBUAlQAWAAgPgNQgagXAng+IgghmQhigTBIhDQg1hygtiJQhrAKBMhmQgXgZgFgjQgcAkg0gWQgdCnhjhxQgECPhWhTQgRCMhthrQgvCchIiHQgcCPhDh1QAGAigVAdIAcBEQB5gJhaBVQBgDhABAiQACApAtACQAtAEgeAbQgdAbAQAVQAQASAHATIAVAzQANAgARgcQAUghAUAAQATAAASAegAAAFlQgLgCgHgQQgHgRACgVQADgVALgOQAJgOANABQANACAIAQQAGAQgDAVQgCAWgLAOQgKANgLAAIgDAAgAEkEdQgPgCgIgPQgIgPACgVQADgUALgOQAMgNAOACQAPACAJAPQAHAQgCAUQgCAVgMANQgKALgMAAIgEAAgAiZCvQgOgDgKgNQgKgNAAgOQAAgOAKgIQAKgJAPAEQANADALANQAKANgBAOQAAAOgKAIQgIAGgKAAIgGgBgABACMQgMgBgHgKQgIgJACgMQABgMAKgHQAJgHAMABQAMACAIAJQAHAJgBAMQgCAMgJAIQgIAFgJAAIgFAAgADdAEQgQgBgKgNQgKgNACgRQACgRANgKQANgKAQACQARACAKANQAKANgCARQgCARgNAKQgLAIgNAAIgGgBgAhYghQgLgOgEgVQgCgVAGgRQAIgRAMgCQANgBALAOQALAOADAWQADAVgHARQgGAQgNABIgDABQgLAAgKgNg");
	this.shape_9.setTransform(75.3786,118.4674);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgLMLQglg/gnBCQgRAbgOgfIgUgzQgIgTgQgTQgPgUAdgcQAdgbgsgDQgtgDgCgoQgBgihgjhQBahXh5AJIgchDQAVgdgHgiQBDB0AdiOQBICGAvicQBtBsARiMQBVBSAFiNQBjBwAcinQA1AWAcgjQAFAiAWAaQhLBlBrgKQAtCJA1ByQhIBEBiASIAfBmQgmA/AaAWQAPAOgWgBQhUglAdBVQAIAngmgPQg0gYgLBEQgGArgZgTQgwglgcA7QgGAbgSgUQgzg9gfBSQgHAZgUgcQgqhAgZBHQgJAZgKAAQgIAAgLgWgAAiIfQgLAOgCAVQgDAWAHAQQAIARAMABQANACALgPQALgOACgVQADgVgHgRQgHgQgNgBIgCAAQgMAAgKAMgAFCHbQgMAOgCAUQgCAVAIAPQAIAQAPABQAOACAMgNQAMgNABgVQADgTgHgRQgJgPgPgCIgEAAQgMAAgKALgAiEGDQgKAIAAAPQAAAOAJAMQAKANAOAEQAPACAKgHQAKgIAAgPQAAgOgJgMQgLgNgOgEIgIgBQgJAAgHAGgABfFvQgKAHgBALQgCAMAIAKQAHAJAMABQAMACAKgHQAJgIABgMQACgLgHgJQgIgJgMgCIgDAAQgKAAgIAGgAD3DRQgOALgCARQgBAQAKAOQAKANAQACQARACANgKQANgLACgQQACgRgKgOQgKgMgRgDIgGAAQgNAAgKAIgAgjCYQgMACgHARQgGAQACAVQADAWAMAOQAMAOALgCQANgCAHgQQAGgRgDgUQgDgXgLgOQgJgMgMAAIgDAAgAmuhiIBJBrQhVgPAMhcgAg/h3IgBgBIgDgRQATARhdl/IAnAFQACgBAKgBQAVgCAagMIAMgEQARgLAPgPIAEAfIBDEmIgLCIIgBABQgvAcgxAUgADTkEIACgLIAAgKQAEghADgjQAiBZg3BEQAHggAFgkgAkHk8IgLicIAqgRIBbCDQgRAfgpgGQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAAAAAAAQgUAZgUAAQgLAAgLgHgAB/p3QADgRAEgLQAzBJBBg1IAAAVQgaAbgcAAQgiAAgjgogAnopuIgMidQARgEARgRIBbCXQgOAggkgWQgJAjgUAAQgOAAgUgSg");
	this.shape_10.setTransform(70.9,90.7012);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EEC465").s().p("AhTDfIAHg+QA5BWBKhAQgFAjgGAhQgNAQgRAOQgyAtg6AhIALiIgAhJCLIANhtQAMhgARhiIADgYQBABJA6g8QgDBzgTBqIgHApIgBAGIAAgCIAAADQgCAigEAhQgfAbgbAAQgnAAgigxgAgVjYQAZhSAtg8IAXACQATBnAEA6QgcAWgZAAQgiAAgdgrg");
	this.shape_11.setTransform(86.475,46.375);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AB8GkIhYkxQABAAAAAAQAAAAABAAQAAAAAAAAQABABAAAAQATAQBQEdQgDAEgFAAIgGgBgAjWFBQBZgLAfhgIAZAlQgsBihOACgACrE4IhZlzIAPAGQBZFtgOAAIgBAAgAE+CnIACgQIAAgFQA8BUBIg+IgBAKIgCALQggAcgcAAQgnAAgggygAm3B2QgkgVAHgoQAIgoATgLQBZAMAjhpIAOAQQgnBahaAUQgBgBgDAPQgHAaAPAUQAPATgYAAIgCAAgAgqhrIAwBEIgpARgAA3l3QgugLgHgKQgDgDABgCQBhAiBLg1QABAAAAAAQABABAAAAQAAABAAAAQAAABAAABQgCAMgzAZIBVE3IgLAEIhVk2QgXAFgTgFIBQFEQgKABgDABgAkNmhIAqBDQgSARgRAEgAG8lgQgBgKADgOQAOgKAJANQADAJgGAPg");
	this.shape_12.setTransform(47.0244,45.7446);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Pencils_s_cup, new cjs.Rectangle(-1,-1,127.8,183.3), null);


(lib.Pencil = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("AC7qcIAACoQhQHIhfHPQgfCagiCbIgDASQhhABghg+IAEgQQAbh/AZh7QBsoABMmyIBaiUIArhGIAABNIAAAA");
	this.shape.setTransform(18.7,74.6008);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E8D05E").s().p("Ah3JdID0zGQAWAcAZgGIANgGQhQHIhfHQQgfCagiCbIgJAAQgaAAgdgXgAi4I5IA1j6QBroBBMmxIAJAIQAXANAfgOIj2TGIgCAAQgdAAgWghg");
	this.shape_1.setTransform(18.875,84.6821);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AACBDIgEgGIgFADQgfAOgXgNQBUiTgEgIQAUAXAXgQQgKAIgDCkIgJACQgUAAgSgYg");
	this.shape_2.setTransform(31.175,16.1104);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DEC75A").s().p("AgUAcIAqhFIAABMIgBAAQgJAHgJAAQgMAAgLgOg");
	this.shape_3.setTransform(35.25,4.2032);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("Ai6KKIAEgQQAWAiAfgBID2zGIAFgDIAEAGIj0THQAjAbAegFIgDASIgDAAQheAAghg9gAC6q/IABAAIAACoIgNAFQADilAJgIgAA1oyIBbiUQAEAIhVCUIgKgIg");
	this.shape_4.setTransform(18.7,78.1258);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Pencil, new cjs.Rectangle(-1,-1,39.4,151.2), null);


(lib.mGlassQ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_7
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AhMhDQAEAEAAAIQgCAFAHAJICGCSQAKALAJgIIAQgOQAGgKgIgKIiIiVQgHgHgGADQgGADgDgHAhMhDQAIgGAJgJQAAgBABAAQAGgNgRgPAhnhRQADAHAEADQAIAKAIgFQACgBACAA");
	this.shape.setTransform(22.298,14.5338,1.2246,1.2246);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.5,1,1).p("AhahKQgXAhgBAiQgBApAfAsQAnAtAtAAQAXgBAZgMQABgBABAAQABgBABgBQABgBACgBQAFgFAHgFIAAgBQABAAABgBQAAAAABgCQAPgOALgOQAVghgCgjQgDgcgRgfQgNgXgWgOQgggVgdAAQguACgrAug");
	this.shape_1.setTransform(3.6935,-8.9304,1.2246,1.2246);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3F3F40").s().p("AgPARQgEgEgDgGIAAgBIACgBIACgBIADgCIAMgJIABgBIACgBIALgNQARAOgGAMIgBABQgJAJgIAGIgEACIgEABQgGAAgFgGgAAGgIIAGAIIAHgGIgGgIg");
	this.shape_2.setTransform(12.3551,3.7106,1.2246,1.2246);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A17F4C").s().p("AA1BcIiFiSQgIgJACgGQABgHgFgFQAJgGAIgJIABgBQAEAIAGgDQAFgDAIAHICHCUQAJALgGAJIgRAOQgEAEgEAAQgFAAgGgGg");
	this.shape_3.setTransform(23.9513,16.2176,1.2246,1.2246);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFCFD").s().p("AAnBeIAGgGIAHAHIgHAHgAgUhIIAIgYQAbAHAOAUIgRAQQgMgSgUgBgAgwhMIgDgXQARgEAPAGIgFAVQgMgEgMAEg");
	this.shape_4.setTransform(8.3383,-8.8256,1.2246,1.2246);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.02)").s().p("AlRjzIKbgMIAIH0IqbALgABrAjQgDAFAIAJICGCTQALALAJgIIAQgOQAGgKgJgKIiIiWQgIgHgFADQgGADgEgHQAHgMgRgPIgMANIAAgBQAPgPALgOQAVgggCgkQgCgcgSgfQgMgYgWgOQghgUgeAAQgsABgsAuQgXAigBAiQgBApAfAsQAnAsAtAAQAXgBAZgMIgBAAQAEAHADADQAJAKAIgFIADgBQAFAEAAAIg");
	this.shape_5.setTransform(0.2558,3.4077,1.2246,1.2246);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C7E4F5").s().p("AhUBOQgfgsABgpQABghAXgiQArguAugBQAdAAAgAUQAWAOANAXQARAfADAdQACAigVAhQgLAOgPAOIgBACIgCABIAAABIgMALIgDABIgCABIgCABQgZANgXABQgtAAgngtgAARhIQAUACAMARIARgQQgOgTgcgIgAANhLIAFgVQgPgGgQADIADAYQAGgCAEAAQAHAAAGACg");
	this.shape_6.setTransform(3.6935,-8.9304,1.2246,1.2246);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mGlassQ, new cjs.Rectangle(-41.1,-27.9,82.80000000000001,62.699999999999996), null);


(lib.mGlass = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_7
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AhMhDQAEAEAAAIQgCAFAHAJICGCSQAKALAJgIIAQgOQAGgKgIgKIiIiVQgHgHgGADQgGADgDgHAhMhDQAIgGAJgJQAAgBABAAQAGgNgRgPAhnhRQADAHAEADQAIAKAIgFQACgBACAA");
	this.shape.setTransform(15.7991,13.4603);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.5,1,1).p("AhahKQgXAhgBAiQgBApAfAsQAnAtAtAAQAXgBAZgMQABgBABAAQABgBABgBQABgBACgBQAFgFAHgFIAAgBQABAAABgBQAAAAABgCQAPgOALgOQAVghgCgjQgDgcgRgfQgNgXgWgOQgggVgdAAQguACgrAug");
	this.shape_1.setTransform(0.6071,-5.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3F3F40").s().p("AgPARQgEgEgDgGIAAgBIACgBIACgBIADgCIAMgJIABgBIACgBIALgNQARAOgGAMIgBABQgJAJgIAGIgEACIgEABQgGAAgFgGgAAGgIIAGAIIAHgGIgGgIg");
	this.shape_2.setTransform(7.68,4.6223);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A17F4C").s().p("AA1BcIiFiSQgIgJACgGQABgHgFgFQAJgGAIgJIABgBQAEAIAGgDQAFgDAIAHICHCUQAJALgGAJIgRAOQgEAEgEAAQgFAAgGgGg");
	this.shape_3.setTransform(17.1491,14.8353);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFCFD").s().p("AAnBeIAGgGIAHAHIgHAHgAgUhIIAIgYQAbAHAOAUIgRAQQgMgSgUgBgAgwhMIgDgXQARgEAPAGIgFAVQgMgEgMAEg");
	this.shape_4.setTransform(4.4,-5.6145);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.02)").s().p("AlRjzIKbgMIAIH0IqbALgABrAjQgDAFAIAJICGCTQALALAJgIIAQgOQAGgKgJgKIiIiWQgIgHgFADQgGADgEgHQAHgMgRgPIgMANIAAgBQAPgPALgOQAVgggCgkQgCgcgSgfQgMgYgWgOQghgUgeAAQgsABgsAuQgXAigBAiQgBApAfAsQAnAsAtAAQAXgBAZgMIgBAAQAEAHADADQAJAKAIgFIADgBQAFAEAAAIg");
	this.shape_5.setTransform(-2.2,4.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C7E4F5").s().p("AhUBOQgfgsABgpQABghAXgiQArguAugBQAdAAAgAUQAWAOANAXQARAfADAdQACAigVAhQgLAOgPAOIgBACIgCABIAAABIgMALIgDABIgCABIgCABQgZANgXABQgtAAgngtgAARhIQAUACAMARIARgQQgOgTgcgIgAANhLIAFgVQgPgGgQADIADAYQAGgCAEAAQAHAAAGACg");
	this.shape_6.setTransform(0.6071,-5.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mGlass, new cjs.Rectangle(-36,-21.2,67.6,51.2), null);


(lib.medalD = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AD6A6Ig7AUAD/hNIg7AUACOAIIg7AUAjZA4Iglgy");
	this.shape.setTransform(-2.8,117.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(3,1,1).p("ABftfIAAgtACZtYIAOhIABftfQAaAEAZAGQADABAEABQAgAJAgANQACABACABQAQAHAQAIQADABADABQAYANAYARQARALARANIA/g3AGLrEQAWAWASAWQAWAbATAdIA2guAGLrEIAogoAFVr0QAcAWAaAaAEzsMIApgpADZs9IAKgvAEDsqIAwhFAGzqYIBDg/AIjmuQAGAeACAfIBYgYAIVnjIA7gxAIVnjQAIAaAGAbIBCgrAICoYQALAZAIAcAIrlxQABADAAACQAAAGABAHQABARAAASQAAADAAAEQAAAFgBAFQAAACAAACQAAADAAAEQgBATgCASIBNAAAG/jpIAAgxAIjjKIBJAdAIqj7QgCAVgEAUQAAAEgBAEQgGAdgJAcIBRAxAIuk1IBhgOAGhA0QgKAMgMALQgNANgOANQgbAXgcAUQgTANgTALQgHAEgHAEQgWALgXAKQgDABgDABQgbALgbAIQgGABgGACQgZAGgbAEQgBAAgCAAIAHBhADSDLIAMA6ACQDdIAXBcAEFC3IAfBOAHCDiQgIAIgJAHQgnAfgpAZQgmAVgxAWQh0AwiGADQgrAAgqgFQgdgCgbgFQhhgRhSgnQgagNgYgOQgMgIgHgFQgQgLgQgMQgygkglglQjMjMAAkgQAAkhDMjMQDMjMEgAAQEhAADMDMQDMDMAAEhQAAEgjMDMQgVAVgWASgAFwBlIA2BUAE5CQIAqBFAH4hLQgRAkgXAhIBTBFAH4hLIA1AmAHzGBQgMgigKghQgMglgKgkQgCgJgDgKAHQgGQgVAegaAcIAuAxAEKA5QBnhJA5h5AIUiRQgLAkgRAiAJHJPQgRgkgPgkQgOghgNghIjEBiAhaGGIAmBYIDbIGIDDjYIE6AAQgcg1gZgzQgFgJgEgJQgRgigOghIizBkAInIHIiFBKAHzGBIieBMAIMHFQgNgigMgiAHcpgQAWAiAQAmIBOhCAG+l8QgjkRi1hSAnXpaIhBg7AmPq3QAFgHAHgGQAVgWAXgSQAXgTAXgPIgsguAm5qGQATgZAXgYIgrguAm5qGIgkgkAnXpaQANgXARgVAhateIAAhKAiMtUQAZgHAZgDQAfgFAggCIAAguAkpsOQAVgOAVgLQAJgFAJgFQASgIASgHQAEgCAEgBQAXgJAYgHQADAAADgBIgNgtAgbtlQAQgBAOAAQARAAAPABIAAhKAjBtKIgRgsAj+s4Igmg6AlXrsIg8g7AoNnjQAJgeANgdIg6gnAoklpQACgXADgXQABgFABgFIhegjAolkqQgBgJAAgJQAAgTACgUQAAgDAAgDIhSAAAoamgIgDgBQAGgiAKggIg8gjAogjmQgFghAAgjIhqAAAnSgVQgMgSgKgSQgJgRgHgSQgDgHgDgHQgJgWgHgXQgMgmgGgpIhFAAAmvk/QgYBGAYA3AoOiXIhCAAAmEBLQgYgZgVgZQgSgXgPgXIhGA8Anyg5IgtApAlcBvQgUgRgTgTIgBAAIg9A6AmxAZIgvAtAmVEEQgGAhgGAdQgWB3gOAxQgwC0hNCYIEQhbIDKEQIBNiIIAlhEIiVjHAkrCUQgCgBgBgBQgXgQgXgTIgtA4AisDSQgDgBgCgBQgggKgdgPQgFgCgEgCQgbgOgZgRIgtBIAjuC+IgRBVAisDSIgLBdAASDtQgHAAgIAAQgdAAgdgDQghgDgggHIAAA3AASDtIAAA4Ag3DqIAABeAh4DgQgagFgagJAn+hfIhTAcAmahpQBYC/ByARAgbNjIiLiwAn3oeQANgfATgdAjjrJQizBYgKDGAAjtlQAfACAdAEABZDnQgjAFgkABAiCrvQBchgCvBDAAKMfIAnhE");
	this.shape_1.setTransform(-3.875,58.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(4,1,1).p("AGcIfIhJAmAi0sgIjfBtIAAB2ICFhCIgBADIAAIgIDYAAIAArAgAkPMhIiMixAg3sgIh9AA");
	this.shape_2.setTransform(14.95,70.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAAAMIgBAAIgGgCIgBgBIgCgCQgDgHABgDQABgDAEgDQADgDAEABQADAAAEACIAEAFQACADAAADQgBADgCADIgHAEIgCAAIgBAAg");
	this.shape_3.setTransform(-30.4325,126.8583);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DB653F").s().p("AljI5IkPBbQBNiYAwi0QANgxAXh4IALg9IAhAXIATANQAYAOAZANICzA4QhggRhTgnQBTAnBgARIAjALIAVgEQAqAFAsAAQCGgDBzgwQAygWAlgVQAygdAegbQANgBAKAFQAZAPgEA6QAKAhAMAiIAZBEIAbBCIAgBIQAPAhAQAiIAJASQAZAzAcA1Ik6AAIjCDYIjcoGIgmhYIAmBYIgGAGIBrD3IgmBEIiVjHICVDHIgmBEIiLiwICLCwIhMCIgAiDL4IiMixgAHfIdIBIgmgAlBH/QgFADAAAEQgBAEADAGIACACIABABIAFACIADAAIACAAIAIgEQACgCAAgEQABgDgCgEIgEgFQgEgCgDAAIgCAAQgEAAgCACgAFjIRICzhkgACZH3IA7gVgAj/HhIglgygAAtHFIA7gVgAFyGvICEhKgAEXGFIDEhigACeFuIA7gUgAEkErICehMgAGsCcQgMglgJgkQAJAkAMAlgAggDlIAAAAgAgwDgQAGgDAIAFIACADQgTgEADgBgAiDiEIAAogIAAgEIiFBDIAAh3IDfhsIgHAOIAAAAIAHgOIB9ADIAALBgAiDqkIAIAAIAAgBIABgDIgFAAIADgBIgDgEg");
	this.shape_4.setTransform(1,74.725);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FED57B").s().p("AAQK5IgDgCQgHgGgGADQgCABASAEQgrAAgqgFQgdgCgbgFIizg4QgagNgYgOIAAgCIgBgCQgBgFgDgEQgEgEgFgBIgGACIgCABIADACIgggXQgygkglglQjMjNAAkgQAAkgDMjMQDMjMEgAAQEhAADMDMQDMDMAAEgQAAEgjMDNQgVAVgWATIgRAOQgnAfgpAZQApgZAngfQgeAcgyAcQgmAWgxAVQh0AwiGADIAAAAgABgJ6IgHhhIADAAQAbgEAZgGIAMgDQAbgIAbgKIAGgDQAXgKAWgLIAOgIQATgLATgNQAcgTAbgYIAbgaIAWgXIAuAyIgugyQAagcAVgeIBTBFIhThFQAXgiARgkQgRAkgXAiQgVAegaAcIgWAXIgbAaQgbAYgcATQgTANgTALIgOAIQgWALgXAKIgGADQgbAKgbAIIgMADQgZAGgbAEIgDAAgAg3J6IAAhdQghgEgggHQAgAHAhAEgACnJrIgXhcgAj3HlIAJAFQAdAOAgALIAFACIgLBcIALhcQAaAIAaAFIAAA4IAAg4QgagFgagIIgFgCQgggLgdgOIgJgFQgbgNgZgSQAZASAbANgAASJXIAAg3QAkgBAjgGQgjAGgkABIgPAAQgdAAgdgDQAdADAdAAIAPAAgAj/JFIARhUgAEkI4IgfhPgADeI4IgMg7gAlYIOIAthIgAFjIHIgqhFgAGmHrIg2hUgAmJHZIAtg3QAXASAXARIADABIgDgBQgXgRgXgSQgUgRgTgUIgBAAIg9A6IA9g6IABAAQATAUAUARgAjQGZQhygRhYjAQBYDAByARgAmxFLQAVAaAYAYQgYgYgVgaQgSgXgPgYQgMgRgKgTQgJgRgHgSIgGgNQgJgXgHgWIhCAAIBCAAQAHAWAJAXIAGANQAHASAJARQAKATAMARIhGA9IBGg9QAPAYASAXgAngF4IAvgtgAEKFrQBnhKA5h5Qg5B5hnBKgAhSjQIAAIfIDXAAIAArAIh+gDIB+AAIh+AAIjeBsIAAB3ICFhCgAofEhIAtgpgAH4DmIA1AmIg1gmQARgiALgkQgLAkgRAiIAAAAgApRDvIBTgdgAIUCgIBRAxIhRgxQAJgbAGgdIBJAcIhJgcIABgJIAGgoIgGAoIgBAJQgGAdgJAbIAAAAgAogBLQAGApAMAnQgMgngGgpQgFghAAgjIhqAAIBqAAQAAAjAFAhIhFAAgAmvBvQgMgbAAggQAAgfAMgiQgMAiAAAfQAAAgAMAbgAG/BIIAAgxgAIqA3IBNAAIhNAAIADgmIAAgHIAAgEIABgJIAAgHIgBgjIgBgNIgBgFIABAFIABANIABAjIAAAHIgBAJIAAAEIAAAHIgDAmIAAAAgAomgKIABARIgBgRQAAgTACgUIAAgGQACgXADgXIACgKIhegjIBeAjIgCAKQgDAXgCAXIhSAAIBSAAIAAAGQgCAUAAATIAAAAgAIugDIBhgNgAIrg/IBYgYIhYAYQgCgfgGgeIBCgqIhCAqQgGgbgIgaIA7gxIg7AxQgIgcgLgZIBOhBIhOBBQgQglgWgjQAWAjAQAlQALAZAIAcQAIAaAGAbQAGAeACAfIAAAAgAG+hKQgjkRi1hSQC1BSAjERgAodhvIADABIgDgBQAGghAKggQAJgeANgeIg6gmIA6AmQgNAegJAeIg8gjIA8AjQgKAggGAhIAAAAgAmgh5QAKjGCzhYQizBYgKDGgAn3jsQANgeATgdQANgXARgWQATgZAXgYIgrguIArAuQgXAYgTAZIgkgjIAkAjQgRAWgNAXIhBg8IBBA8QgTAdgNAegAHckuIA2gtIg2AtQgTgcgWgbIBDhAIhDBAQgSgXgWgVIAogpIgoApQgagbgcgWIA/g3Ig/A3QgRgNgRgLIApgpIgpApQgYgRgYgNIAwhEIgwBEIgGgCIgggPIgEgCIAKgvIgKAvQgggNgggIIgHgCQgZgHgagDIAAguIAAAuQgdgFgfgCIAAhKIAABKIggAAIgeAAIAAguIAAAuQggACgfAFIAAhKIAABKQgZADgZAHQAZgHAZgDQAfgFAggCIAeAAIAgAAQAfACAdAFQAaADAZAHIAHACQAgAIAgANIAEACIAgAPIAGACQAYANAYARQARALARANQAcAWAaAbQAWAVASAXQAWAbATAcgAmDmRIgMAMIAMgMQAVgXAXgSQAXgTAXgPIgsguIAsAuQgXAPgXATIg8g7IA8A7QgXASgVAXgAiCm9QA2g4BSAAIAAAAIABAAQA4AABHAaIADACIgDgCQhHgag4AAIgBAAIAAAAQhSAAg2A4gAiSogQgYAGgXAJIgIADQgSAHgSAJIgSAJQgVALgVAOQAVgOAVgLIASgJQASgJASgHIAIgDQAXgJAYgGIAGgCIgNgsIANAsIgGACgAj+oFIgmg7gAjBoYIgRgsgACZomIAOhIgAIjh8IAAAAgAhSjQIAEgJIACAEIgCACIAEAAIAAACIAAABgAICjmIAAAAgAAAlmIAHgOIgHAOgAAHl0gAlXm6gADZoLIAAAAgAAjozIAAAAg");
	this.shape_5.setTransform(-3.875,27.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.medalD, new cjs.Rectangle(-75.1,-43.3,142.5,203.7), null);


(lib.Hidodim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AF8851").s().p("AAoIAQgygJAJgsQg+gEABhKQg3gIALg/QgwgRATg6Qg2gmApg3QCRAVCTgVQgUAVAoAFQgSAcAcAJQgUAeAeAEQgHAlAYgCQgrCGhNCLIgLACQgYAAgGglgAoLDHQgkgTAUgwQgeguAogTQgXgTAUgTQCFAuCKAAQgbAeAuADQh9BViKA2IgBAAQgrAAAagwgAA3gVQgsgVAsgdQgsgjA9gPQgjhCA/gNQgUg3AzgGQgLg1AugGQgHggAngCQgBgyAzAYQAEglAYAbQBACNBHCSQgcgSgEAfQgfgHAEAYQgcgDALAdQghAFAUAdQiGAZh7ANQg0gTAqgbgAixhtQgxAEAAgxQhAAIAKhBQg0gNAUgyQgxgVAegzQgyglAlg1QgjgPAcgwQgZgcAegVIAYAHIDrAZQgRATAdAOQgRAbAigCQgNAdAfgCQgHAoAegRQgGAhAagFQg0CfheCJQgKAFgIAAQgRAAABgegAGbhnQggjPggiVQABg6AfArQAigcAUAtQAyghAYAtQAigfAMAwQguCXhPCZQgMgZgFAuIAAAAg");
	this.shape.setTransform(57.9902,54.9014);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#86E2D6").s().p("AAjIPQg6AKAMhOQhKAOAUhTQg/ACAMhRQhHgEAnhRQgtgkAVgnQAMgTAUgBIAEAAQgpA2A2AmQgTA6AwASQgLA+A3AIQgBBLA9ADQgJAtAzAIQAHAsAigJQgNAagOAAQgPAAgQgigAohDzQgUgQAggcQgwgmAdgjQghgzAqgYQgYgqAmAHIAJACQgUASAXATQgoAUAeAuQgUAvAkAUQgaAwAsgBIgLAGQgMAHgLAAQgJAAgJgFgAAZgcQgngZApgaQgeg2A1gPQgZhCA7gJQgYhAA4gIQgXgyA0gHQgHguAzAJQgBg4A5APQAMgoAfBEQgYgbgEAmQgzgYABAxQgnACAHAhQguAFALA2QgzAGAUA3Qg/ANAjBCQg9APAsAjQgsAcAsAWQgqAbA0ASIgZACIgJABQgjAAARgsgAi0hZQg/AGAKg8Qg8ALAHhHQhRgHAshAQg+gdArg0QhFgZA6g4Qg9gdAugsQgYg4A6AGQgeAUAZAdQgcAvAjAPQglA2AyAkQgeA0AxAVQgUAyA0AMQgKBCBAgJQAAAyAxgEQgBAqAjgSQgPAdgNAAQgLAAgKgWgAIHnIQgYgugyAiQgUgtgiAcQgfgsgBA7IgFgaQgFgcAQgBQAPgCAOATQApggANA0QAtglAdAqQAcgTAPAVQAFAJgFAhQgMgwgiAfg");
	this.shape_1.setTransform(56.768,56.0517);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Hidodim, new cjs.Rectangle(0,0,113.6,112.1), null);


(lib.cookieD = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_267();
	this.instance.setTransform(-28.1,-27.4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cookieD, new cjs.Rectangle(-28.1,-27.4,59.5,53.5), null);


(lib.Color_tube2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjcIdQgYgFgWgLIAAAAIAAAAQgogUgmgiIgBAAQgXgUgWgcIAAAAIAAgBQAhhHAngCIgKgJIAAAAQgSgUAGgXIAAAAQB5lBDZjzIB2j/IAEgJIACgJIAAAAIABgBIAAAAIABABIAAABIgBAJIAAAAIgFAJIh2D/IAAAAQjZDzh4FBQgGAVARATIAAAAIAMAMIAAAAQBABDBRAoIABAAIAAAAIALAFIAAABQAeARAVgYQDgj1CElPIAAgBICGjnIAFgJIABAAIABAAIAAAAIABABIgBABIgFAIIiGDoIABAAQiFFPjgD1QgWAagggSIAAAAIgKgFQgMA8gnAVIgBABIAAgBgAjcIbQAmgVAMg7QhRgohBhDQgmAAgiBHQAWAbAXATQAmAiAoAUIAAgBQAWALAXAGgAjfILQhLglhFhAIAAAAIAAgBQABgOAQgFIABAAIAAAAQBKArBDA5IABABIAAAAQgCARgNADIAAAAIgBAAgAltGlQBEA/BLAkQALgCABgOQhCg5hJgrQgOAFgCAMgAC8jUQhHgggiglQgRgTACgHQABgEAIAAQAGAAALAEIAAAAQBHAYAvA0IABAAIABABIAAABIAAAAQALAMAEAHIADAGQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAIgEABQgKAAgcgNgABHkyQgCAFAQASQAiAlBGAgQAhAPAGgDIABgCIgCgFQgEgHgKgLIgBgBIgBgBIgBAAQgvg0hGgYIAAAAQgLgDgFAAIgBAAQgEAAgBACgAD4kcIgBAAQhQgfgugnQgMgKgFgHQgFgHAEgDQAFgGAiAJQBCASAoAsQAUAVAAAIQAAAFgGABIgBAAQgFAAgIgDgAEGkcQABAAABAAQAAAAABAAQAAgBAAAAQABgBAAgBQgBgHgTgVQgngrhBgSQghgIgFAFQgBACADAFQAFAGALAKQAuAnBQAfIAAAAQAJADAFgBg");
	this.shape.setTransform(126.7732,59.5752);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("ABKBDIAAgCQAAgFACgCIACgFIABgDIACgBIAAgCIABgCQAAAAAAAAQABgBAAAAQAAAAAAAAQABAAAAAAIABADQAAADgDAGIgBACIgBABIAAACIgBABIAAACIgCABIgBABIgBABIgBAAgAhUgtQAAAAAAgBQAAAAABgBQAAAAAAgBQABgBAAAAQAEgGAJgEIADgBIACgDIACgBIADAAIACgCQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAIADABIABAAIACAAIAAADIgCADIgKAHIgIADIgFABIgDABIgDACIgDADQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBg");
	this.shape_1.setTransform(100.35,102.4667);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AklIsIAAAAQgngTgngjQgWgTgWgbQAhhHAnAAQBBBDBQAoQgLA7gmAVQgYgGgWgKgAl6GzQgPAGgCANIAAABIABABQBFA/BLAlIABAAQANgDABgQIAAgBIAAAAQhDg6hLgqIAAgBIAAAAIgBAAgAjRH8IgBABIAAACIgBACIgCACIgCAFQgBACgBAFIAAACIAAABIABgBIABgBIACAAIABgCIABgBIABgBIAAgCIAAgCIABgCQADgFAAgEIgBgCIAAAAIgCABgAlkGPIgCACIgDACQgJADgEAGQAAABAAAAQgBABAAABQAAAAAAABQgBAAAAABQAAAAABABQAAAAAAABQAAAAABAAQAAAAABAAIACgCIAEgCIADgBIAEgCIAIgDIAKgHIACgDIAAgCIgCgBIgBABIgDgCQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBABIgCACIgDAAIgCABgAjfFuQABgfAMgHQALgIASASQAMAKgcAYQgMALgHAAQgIAAABgRgAh4FwQgLgWAGgLQAFgKAVAGQANABgMAeQgGAQgGAAQgFAAgFgKgAkWE0QAIgaAKgFQAIgFAHATQAFALgYARQgIAGgFAAQgHAAAGgRgAkrDYQALgQAJgBQAGAAAEAIQACADABAGIABADQgBAGgUADIgHABQgQAAAKgNgAh+DOQgVgDgIgRQgHgOAFgbIAAABQAEgeAVguIAAAAQBCiVBGgVIAAAAQARgGANADIgBAAQAwACgBBeQgBB7iGBFQgqAVgXAAIgGAAgAhyBOIAAAAQgTArgEAbIAAABQgEATAFAKQADAHAJABQAUABAogUQB7g/ABhvQABhIgegEIAAgBQgJgBgLAEIgBAAQg/AVg9CKgAChi1QhFgfgiglQgQgSABgGQABgCAFAAQAGAAALADIgBAAQBHAZAvAzIAAABIABAAIABABQALAMAEAGIACAFIgBACIgDABQgJAAgcgNgADdj9IAAAAQhQgegugoQgMgKgEgGQgEgFACgCQAFgFAgAJQBCARAnArQATAVAAAIQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAIgBAAQgFAAgIgDgAFnlBIAFgJIAAgBIAAAAIAAAAIgBgBIgBABIgFAJIkKilIAEgJIAAgBIACgJIgBgBIAAAAIgBAAIAAAAIgBABIgBAJIgFAJQgDgCgBgEQgBgEACgEIABgBIgBgDIACgGIAGgzQABgDACgDQADgCADAAQAEgBADACIAuAdIACABIABABIAEACIAKAHIgBAAIAeATIAAAAIBxBKIABABIADACIABAAIAmAaIgBAAIA3AjQADACABADQABADAAADQgBADgDACIgrAiQgCACgEABIAAAAIgEgBgAFqlXIAbgVIgmgYIAAABIAAABIgBADIAAABIgCADIgGALIgDADIgBABIAAAAIgCACIgBABIgBABIAAAAgAE5mdIgBACIAAADIAAAAIgBABIgBADIAAABIgBABIgDAFIgDAEIAAABIgFAEIgCACIgBABIgBAAIAcARIAAAAIAAgBIAAgBIABgCIAAgBIACgFIAGgJIADgEIABgBIAAAAIACgCIABAAIABgBIgagSgAD3nDIAAADIAAADIgDAKIgCAFIgBABIAAABIgBABIgBACIgBABIAAABIgCACIAAAAIAvAdIAAgBIABgCIAAgCIAAgBIABAAIABgEIAAgBIABgBIADgEIADgEIAAgBIAFgFIACgBIABgCIABAAIg3gkgADHnnIgCAFIgBAEIgBADIgEAHIAAAAIgBABIAAACIgBABIgBABIAAABIgDADIgBABIgDADIAAAAIArAbIAAgGIABgDIAAgDIAFgPIABgBIAAgBIAAgBIABgCIABgBIABgBIABgCIABAAIglgZgACUngIgBABIgCACIAaAQIAAAAIAAgCIAAgCIABgEIAAgBIAAgBIABgDIAAgBIABgBIABgDIAGgOIACgDIACgBIgUgNIAAABIAAABIgBAEIgBABIAAAAIgCAFIAAABIgGAKIgBABIgDADIAAABIgBAAIAAAAgABqn8IgBAEIAAACIAdASIAAgCIAAgBIABgDIABgBIAAgBIACgFIAAgBIAGgJIABgBIADgDIAAgBIABgBIAAAAIACgCIABAAIADgDIgFgDIgDgBIgCgCIgBgBIghgUg");
	this.shape_2.setTransform(129.5019,56.2347);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AmGHCQACgLANgFQBJAqBDA5QgBAOgLADQhLglhEg/gAi1BsQA1jAB6g1QB4g2AJCoQAICni3BOQg1AWghAAQhSAAAniIgAiYC2QAHARAWADQAYACAugXQCHhFAAh7QABhegvgCIAAAAQgNgDgRAGIABAAQhHAVhCCVIAAAAQgVAugEAeIAAgBQgEAbAHAOgAh5C2QgKgBgDgHQgEgKADgTIAAgBQAEgbATgrIAAAAQA9iKBAgVIAAAAQALgEAJABIABABQAdAEgBBIQgBBvh7A/QglATgUAAIgCAAgAFQlsIAAAAIABgBIABgBIACgCIABAAIAAgBIAEgDIAGgLIABgDIAAgBIABgDIAAgBIABgBIAlAYIgbAVgAEpmFIAAAAIACgBIACgCIAEgEIABgBIADgEIACgFIABgBIAAgBIACgDIAAgBIAAAAIABgDIABgCIAAAAIAaASIgBABIgBAAIgCACIgBAAIAAABIgEAEIgFAJIgCAFIAAABIgBACIAAABIgBABIAAAAgADumpIABAAIABgCIABgBIABgBIABgCIAAgBIAAgBIABgBIACgFIADgKIAAgDIABgDIAAgGIA2AkIAAAAIgCACIgCABIgEAFIgBABIgDAEIgCAEIgBABIAAABIgCAEIAAAAIAAABIgBACIgBACIAAABgAC4nLIAAAAIADgDIABgBIACgDIABgBIAAgBIABgBIABgCIAAgBIABAAIADgHIABgDIACgEIABgFIAAgCIAlAZIAAAAIgCACIAAABIgBABIgBACIgBABIAAABIgBABIgFAPIAAADIAAADIAAAGgACTnhIACgCIABgBIACgCIABAAIAAAAIABgBIADgDIAAgBIAGgKIABgBIACgFIAAAAIAAgBIABgEIAAgBIAAgBIAUANIgBABIgCADIgHAOIgBADIAAABIAAABIgBADIAAABIgBABIAAAEIAAACIgBACIAAAAgABrn6IAAgCIACgEIAFglIAgAUIABABIADACIADABIAEADIgCADIgBAAIgCACIgBAAIAAABIgBABIgDADIAAABIgGAJIgBABIgCAFIAAABIAAABIgBADIAAABIgBACg");
	this.shape_3.setTransform(129.2875,56.6375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F3D06A").s().p("ApLKMQgEgCAAgBQgBgBAFgDQAAgBABAAQAAAAAAAAQAAAAABgBQABAAAAAAIAOgBIANAAQAAgCAGAAIAJAAIAEACIAGACQABAAAAAAQABAAAAABQABAAAAABQAAAAAAABQAAADgFAAIgPACIgcAAIgKAAgAhwHnQgGgBAAgDIgQgBQgKAAgFgDQgBgBgBAAQAAAAgBgBQAAAAAAgBQgBAAAAgBQgGgGACgEQAAgEAEgCQAEgCAHAAQAZAAAHACIASACQAGACAAAIQAAAFgDACIgHAEIgFAEIgHABIgEAAgArWFgQgFgBAAgBQgBgCAGgDQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIANgBIAOgBQAAAAABgBQAAAAAAAAQABAAABAAQABAAABAAIAJAAIAFACIAGABQABAAAAABQABAAAAAAQABABAAAAQAAABAAAAQAAADgGABIgPABIgcABIgJgBgAqGFUQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAAAIgLgBQgHAAgDgCQgBgBAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQgDgGAAgEQAAgEADgBQADgCAFAAQAQAAAFABIAMACQAEACAAAHQAAAFgCACIgFAEIgEADIgEABIgDAAgAlCDTQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAIgLAAIgJgBIgCgDQgEgDABgCQAAgBAAgBQAAAAABgBQAAAAABAAQAAgBABAAIAHAAIAUAAIALABQADABAAAFIgBADIgFADIgDACIgEAAIgDAAgAFaAeQgBgCABgFQAEgMAJgLIADgEIABgEQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAAAIADgDIADgEQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAIAEABIACgBIACABIAAAEIgCAFQgFALgEAGIgIAJQgCABgDAEIgEACIgDAFIgCAGIgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAgBgACDinQAAgDAFgIQAIgUAQgXQAGgHAAgCIAEgIIAEgFIAEgFIAFgIIAFgFIAEABIADgDQABAAAAAAQABgBAAAAQAAABAAAAQAAAAAAABIgBAGIgEAKIgUAgIgOARIgHAKIgGAFIgGAKQgDAIgDABIgBACQgBAAAAgGgAFAniIABgGQADgKAKgKIAEgEIABgEIACgDIAEgCIACgDQAAgBABAAQAAAAAAAAQABAAAAAAQABAAABAAIAEAAIACgBQAAAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAIAAADIgBAFQgGAKgFAFIgIAIIgGADIgDADIgEAEIgDAFIgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQgBgBAAAAgAK1o4QgCgCABgHQgBgSALgTIADgIIgBgGQABgDACgDIAEgDIACgHQABgDAEgBIAGAAIACgDIADABIADAGIAAAHQgFASgEAKIgJAPIgGAJIgEAEIgDAJIgCAIIgCABQgCAAgCgFg");
	this.shape_4.setTransform(89.8173,89.0417);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E8C765").s().p("AsgKmQhpg3FRAAQCKAJi7hgQg6gdgzg5QgfgjAVgVQA+g+FeBBQBIAQgjg5IgqhBQgegoBVgCQBtgEA7AOQA8APA/ASQA/ARAQhAQAmAiAoATQg3BMhPAGQheAHAnAlQAlAkAaBIQAaBHmChPQhFgTA2BQQBXB8hrAWQhTARhOAAQifAAiFhGgAnfLEQgGAAAAACIgNAAIgOABQAAAAgBABQAAAAgBAAQAAAAAAAAQgBABAAAAQgFADABABQAAABAEACIAKAAIAcAAIAPgCQAFAAAAgDQAAgBAAAAQAAgBgBAAQAAAAAAgBQgBAAgBAAIgGgCIgEgCIgEAAIgFAAgAhRIPQgEACAAAEQgCAEAGAGQAAABABABQAAAAAAAAQABABAAAAQABABABAAQAFADAKAAIAQABQAAADAGABQAGABAFgCIAFgEIAHgEQADgCAAgFQAAgIgGgCIgSgCQgHgCgZAAQgHAAgEACgAprGZQgBAAgBAAQgBAAAAAAQgBAAAAABQgBAAAAAAIgOABIgNABQAAAAgBAAQgBAAAAAAQgBABAAAAQAAAAAAAAQgGADABACQAAABAFABIAJABIAcgBIAPgBQAGgBAAgDQAAAAAAgBQAAAAgBAAQAAgBAAAAQgBAAgBgBIgGgBIgFgCIgEAAIgFAAgApZF/QgDABAAAEQAAAEADAGQAAAAABABQAAAAAAABQAAAAABABQAAAAABABQADACAHAAIALABQAAAAAAABQAAABABAAQAAAAABABQABAAAAAAQAEABADgCIAEgDIAFgEQACgCAAgFQAAgHgEgCIgMgCQgFgBgQAAQgFAAgDACgAkTEIQgBABAAAAQgBAAAAABQgBAAAAABQAAAAAAABQgBACAEADIACADIAJABIALAAQAAABAAAAQAAAAABABQAAAAABAAQABAAAAAAQAEABADgBIADgCIAFgDIABgDQAAgFgDgBIgLgBIgUAAIgHAAgAEbDsIAAAAIgKgFIgBAAIAAAAQhRgohAhDIgBgBIgMgMIAAABQgQgTAFgVQB5lBDZjzIAAAAIB3j/IEKClIiGDnIAAAAQiFFRjgDzQgMAPgQAAQgLAAgNgIgAECBEQgMAHgBAfQgDAeAdgYQAcgYgMgKQgMgNgJAAQgFAAgDADgAFXBLQgGALALAWQALAXALgdQAMgegNgBQgHgCgFAAQgKAAgEAGgAG7AxIgDAEIgDADQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAAAABIgBAEIgDAFQgJALgEAMQgBAFABACQAAAFADgBIACgGIADgFIAEgCQADgEACgBIAIgJQAEgGAFgMIACgFIAAgEIgCgBIgCABIgEgBQAAAAgBAAQAAABgBAAQAAAAAAAAQgBABAAAAgADQARQgKAFgIAaQgJAcAXgRQAYgRgFgLQgFgPgHAAIgDABgAHLmJQh5A1g2DBQg2C/C4hNQC4hOgIioQgHh/hHAAQgXAAgeANgACpgrQgMAPAZgDQAUgDABgGIgBgDQgBgGgCgDQgEgIgGAAQgJABgLAQgAD/i8IgFAIIgEAFIgEAFIgEAIQAAACgGAHQgQAXgIAUQgFAIAAADQgBAJADgFQADgBADgIIAGgKIAGgFIAHgKIAOgRIAUggIAEgKIABgGQAAgBAAAAQAAAAAAAAQAAAAgBAAQAAAAgBAAIgDADIgEgBIgFAFgAGjnIIgCADIgEACIgCADIgBAEIgEAEQgKAKgDAKIgBAGQABABAAABQAAAAAAABQABAAAAAAQABAAAAAAIADgFIAEgEIADgDIAGgDIAIgIQAFgFAGgKIABgFIAAgDQAAAAAAAAQgBgBAAAAQAAAAAAAAQgBAAAAAAIgCABIgEAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAABgBAAgAH+oVQgDAGASAUQAiAlBGAgQAkAQAGgEQABAAAAgBQABAAAAgBQAAgBAAAAQAAgBAAgBIgCgGQgEgHgLgLIAAgBIgBgBIgBAAIAAAAQgvg0hIgZIAAAAQgLgDgGAAIAAAAQgHAAgBAEgAMWpEQgEABgBADIgCAHIgEADQgCADgBADIABAGIgDAIQgLATABASQgBAHACACQADAHADgDIACgIIADgJIAEgEIAGgJIAJgPQAEgKAFgSIAAgHIgDgGIgDgBIgCADIgDAAIgDAAgAIgpgQgDAEAFAHQAFAGALAKQAuAoBRAfIAAAAQAKADAFAAQAGgBAAgFQAAgIgUgWQgogshCgRQgVgGgKAAQgHAAgCACg");
	this.shape_5.setTransform(82.6028,82.2128);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Color_tube2, new cjs.Rectangle(0,-1,171.1,158), null);


(lib.Color_tube = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("ABXB5IgCgBIgBAAIgBgBIAAAAIgBgBIgBAAIAAAAIAAAAIgDgCIgCgBIAAgDIAAgFIAAgBIAAgCIABAAIAAgBIACgCIADAAIACABIADABIACABIABAAIAAgBIAAgGIABgBIAAAAIAAAAIABgBIACAAIABABIABAAIABAAIABABIACACIACABIAAAEIAAAEIAAABIgBABIAAAAIgCAAIgCgBIgDgBIgBAAIgBABIAAABIAAACIAAAEIgBAAIAAABIAAAAIgBACIAAAAIAAAAIgBACgAhThQIgCgBIgEAAIgDgBIgBAAIgBgBIgEgCIgBgDIgCgEIAAgBIAAgBIAAgHIAAgCIAAAAIAAAAIABgBIAAgBIAAgBIABAAIABgBIABAAIACgBIABAAIAAAAIACAAIAJACIABAAIABAAIAAAAIABgBIAAgBIAAAAIAAgDIAAgHIABgBIACAAIADAAIABAAIACABIABAAIAAAAIABAAIAFADIABADIABAEIABABIAAAHIgBABIAAABIAAAAIgBAAIAAABIgCAAIAAgBIgCAAIgGgBIgCAAIAAAAIgBABIAAAIIgBADIAAABIgBAEIgCABIgBAAIgBABg");
	this.shape.setTransform(78.25,12.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Aj8IHIgZgPIgigXIgqgfIAAAAQgZgUgUgSIAAAAIgVgUIAAAAIgPgQIAAAAIgdgfQgCgCAAgDQAAgDABgDQAOgbAigSIAAgBIAKgEQADgBADAAQDelsEtkXIABAAQAYgQAeAPIAAABIAQALQACgUAMgHQgMgkAQgSQgPgMADgKQALgvApgUIAAAAQASgFA7AnQA5AmBQByIAAABQACAug8AZQgKAFgIgHQgZAagbgPQgJANgRADIAHAMIAAAAQAIASgIAYIgBABQjOFDk7E0QACADgCAEQgTAygTAMQgCACgDAAIgBAAQgCAAgDgCgAjmHBIABADIgBANIgBAFIgEAIIgEAHIgDADIgCABIgCACIgDACIgCABIgCABIAFADQAMgMANggIgHgFgAkBGlIAAAEIAAAEIAAABIAAABIAAAFIgBACIAAABIAAABIgBADIgEAJIgGAIIgBABIgCACIgCABIgCACIgHAEIgCABIgCABIgCAAIAWAPIABABIAAgBIABgBIAEgEIABgBIABgCIAAAAIABgBIABgCIAAAAIABgBIAAgBIABgBIAGgLIABgBIABgBIABgDIAAgBIAAAAIAEgIIAAgBIADgFIABgCIAAAAIAAAAIgUgXgAkvF2IABAEIAAADIAAAEIAAAEIAAADIgBACIAAACIgBAFIgBACIgBAEIAAABIgBACIgEAIIgCACIgBACIgBACIgIAIIgKAHIgBAAIAiAZIAAAAIABABIADgEIABgBIAEgEIABgBIAEgEIAAgBIABgBIABgCIAHgLIAAgCIABAAIAAgBIACgGIACgDIABgGIAEgKIAAAAIgBgBQgNgOgXgVgACBliQktEWjdFrIAAACQACADgBACIAYAQIAiAZQARANANAMQAbAZAPARIAeAhQAHAIAFAEIAEgDQAEgBAEABQE5kzDOlBIAAgBQAHgUgHgQIAAAAQgDgHgEgHIgBgBIAAAAIAAgBIgBgBQgcgqhOg5IgBgBIgVgQQgNgGgLAAQgLAAgKAGgAlTFWIgDADIgCADIgDADIgBABIgJAKIgBACIgEAEIgGAJIgFAFIgBACIgBABIAAAAIgGAIIgBABIgCADIAAAAQATASAXASIABgCIAAgBIABgBIACgDIADgFIAAgBIABgBIAAgBIADgEIABgCIACgDIAAgCIABgCIABgCIABgBIAEgJIAAgCIABgCIABgBIAAgBIAAgBIACgEIABgBIACgGIABgCIADgHIAAAAQgMgMgQgMgAmJGFIAAAAIABgEIACgHIABgCIAAgCIAEgIIAJgLIADgDIACgCIABgBIAEgDIABgBIAGgDIACgBIACgBIAGgCIAFAAIgdgWIgBAAIgBABIgBABIgBABIgDADIgBAAIgJAJIgBABIgBABIgBABIgCABIgBABIgBACIgBABIgBABIgBABIgCABIgCADIgBABIgBACIgBABIgCABIgCACIgCADIgBABIgBABIgFAFIAPAQIAAAAIAMALgAm7FSIAPAQIADgKIABgCIABgCIACgEIABgBIABgCIADgEIABgBIADgDIACgCIADgDIACgBIADgCIACgBIACgBIABAAIAEgCIAEgBIADgBIACAAIADAAIgPgKIgBABIgLAFIABgBQgYANgMATgADJlXQBOA5AcAqQAQgBAIgLIgBgEIAAgEQg/grgug6QgDABgDgCIgDgCQgKAHgBASgAGHkXQADADAAAEQAAAEgCADQAHAFAIgDQA6gZgBgsQhQhxg5gmQg5gmgRAEIAAAAQgPAHgKALIgBAAIgBABIgBAAIAAABIAAABIgBAAIAAABQgPARgGAaQgDAJAOALQADgDAEAAQAEAAADACQADADAAAEQABAFgDADIgBAAQBABTBUA5IAAAAQADgDAEAAIABAAQAEAAADACgAFYkPQAQAJAOgOQhTg5hAhTQgHANAIAZQACADgCAEIAAABQAtA5A9AqIADgBIACAAQADAAACABgAhLCKQgUgCgHgYQgGgSAEgiIABgCQA1ilBvgKIACAAQAZADAJAVQAIASgGAgIAAABIgGARIAAAAQg/CRheASIgCAAIgIAAIAAAAIgBAAgAhUA+QgEAdAFAQQADAKAHABIAHAAQBTgSA6iFIAAAAIAEgOIAAAAQAFgZgFgNQgFgKgMgCQhiAMgwCTg");
	this.shape_1.setTransform(45.6105,51.9619);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#59A895").s().p("AANFKIAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAIACgDIACgDIAEgEIABgDIACgEIAGgGIAFgGIADgDIAEgFIAEgDIACgDIACgCIADgBQABAAAAAAQAAAAAAAAQABABAAAAQAAAAAAABIAAAAIAAACIgCACIgBAEIgBACIgBADIgBABQgDAFgHAFIgFAGIgGAGIgBAAIgCADIgBAAIgDAGIgCACIgBABIgBAAQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAAAAAgBQAAAAAAAAQABgBAAAAIgBABIgBABIgBABIgBgBgAkhE/IAAgBIABgDIACgCIAAgCIACgDIABgCIACgDIACgFIAEgDIACgEIACgDIABgCIACgCIACgCIABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAIAAACIAAABIgBADIgBACIAAACIgCABIgEAIIgDADIgEAFIgBACIgBAAIgCAFIgBACIAAAAIgBAAIgBABIgBgCIAAAAIAAABIgBABIgBgBgAESAZIAAgBIgBAAIAAABIAAAAIgBgBIABAAIAAgCIABgBIABgCIACgCIAAgCIABgBIACgCIADgDIABgCIABgBIACgBIAAgCIABgBIABAAIABABIAAAAIgBABIAAABIgBACIAAABIgBABIAAABIgEAFIgCACIgDACIAAAAIgBACIAAAAIgBADIgBABIAAAAIgBAAgABaiqIgBAAIgBAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQABAAAAAAIgBAAIAAAAIgCACIgCgBIABgBIAAgBQAAgBAAAAQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAIACgDQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABgBIACgBIABgDIAGgEIADgBIADgCIADgCIACAAIABgCIACAAIAAAAIABAAIAAABIAAABIAAABIgBACIgBABIgBACIAAABIgBACIgBAAIgHAEIgCACIgFADIgBAAIgBACIgBAAIgDADIgCABIgBABgADVkwQAAAAAAAAQgBAAAAAAQAAAAABgBQAAAAAAAAIAAAAIgBABIgBAAIAAAAIAAgBIABgCIACgBIABgCIADgCIABgCIADgDIADgCIAFgDIACgCIACgCIADgBIACgCIABgCIACAAQAAABAAAAQABAAAAAAQAAAAAAABQAAAAgBAAIAAACIgBABIgBACIgBABIgBACIgBABIgHAFIgEACIgEADIAAABIgCABIgBAAIgDADIgBABIgBAAIAAAAIgBABIAAgBg");
	this.shape_2.setTransform(35.8,49.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjbHGIADgBIACgBIADgCIACgCIACgBIADgCIAEgHIAEgIIABgGIABgNIgBgCIAAgBIAHAFQgNAggMAMIgGgDgAjoG+IgWgPIACAAIACgBIACAAIAHgFIACgCIACgBIACgCIABgBIAGgIIAEgJIABgCIAAgBIAAgCIABgCIAAgEIAAgBIAAgCIAAgDIAAgEIgCgFIAVAXIAAAAIAAABIgBABIgDAFIAAACIgEAHIAAAAIAAABIgBADIgBABIgBABIgGALIgBABIAAACIgBAAIAAABIgBABIgBABIAAABIgBABIgBABIgEAFIgBABIAAAAIgBgBgAkJGnIAAAAIgigYIABgBIAKgGIAIgIIABgCIABgDIACgCIAEgIIABgCIAAgBIABgEIABgCIABgFIAAgCIABgCIAAgCIAAgEIAAgFIAAgDIgBgEIgBgCQAXAVANAOIABABIAAAAIgEAKIgBAGIgCADIgCAGIAAABIgBABIAAABIgHALIgBACIgBABIAAACIgEADIgBABIgEAFIgBAAIgEAEIAAgBgAldFlIAAgBIACgCIABgCIAGgHIAAgBIABgBIABgCIAFgFIAGgJIAEgEIABgCIAJgJIABgCIADgDIACgDIADgCIAAgBQAQAMANAMIAAAAIgDAHIgBACIgCAGIgBABIgCAEIAAABIAAABIgBACIgBABIAAACIgEAJIgBACIgBACIgBABIAAACIgCADIgBACIgDAEIAAABIgBABIAAACIgDAEIgCADIgBABIAAACIgBABQgYgSgSgRgAlyFRIAAAAIgPgQIAFgFIABgBIABgBIACgCIACgDIACgBIABgBIABgCIABgBIACgCIACgBIABgBIABgCIABgBIABgCIABAAIACgBIABgCIABgBIABgBIAJgIIABgBIADgDIABgBIABgBIABAAIABgBIAdAWIgFAAIgGADIgCABIgCAAIgGADIgBABIgEADIgBACIgCABIgDADIgJALIgEAIIAAACIgBACIgCAIIgBADIAAAAIgMgLgAmYEpQAMgSAYgOIgBABIAKgFIACgBIAPAKIgDAAIgCAAIgDABIgEABIgEACIgBAAIgCABIgCABIgDACIgCABIgDAEIgCABIgDADIgBABIgDAEIgBACIgBABIgCAFIgBABIgBACIgDAKIgPgQgAh8AmQBPjzC3gJQBOAHgMBXQhEDBi7BEIgRABQg9AAAFhogABgieQhvALg1CkIgBACQgEAiAFASQAHAYAVACIABAAIAIAAIACAAQBdgSBAiRIAAAAIAFgRIAAAAQAHghgIgSQgJgVgZgDIgBAAIgBAAgAgmBNQgIgBgDgKQgEgPAEgeQAwiTBhgMQANACAEAKQAGANgFAZIAAAAIgFAOIAAAAQg6CFhTASIgGAAgAF7k3QgDgDgEABIgDACQg9grgug5IABgBQABgDgBgEQgIgZAHgNQA/BTBUA5QgJAJgJAAQgGAAgGgDg");
	this.shape_3.setTransform(42.1375,56.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#539C8A").s().p("AjAGIIgeghQgPgRgcgZQgMgMgRgNIgjgZIgXgPQAAgDgBgDIgBgBQDelsEskWQAVgMAYAMIAWAQIABABQBNA5AcAqIABACIABAAIAAAAIAAABQAFAHADAHIAAAAQAHAQgHAUIAAABQjOFBk6EzQgDgBgEABIgEADQgGgDgGgJgAj3DZQAcAlA9AZQA9AaglgnQglgog0gXQgUgIgJAAQgNAAASAWgAgFDUIgCACIgCADIgEADIgEAEIgDAEIgGAFIgFAGIgDAFIgBADIgDAEIgCADIgDADQAAAAAAABQgBAAAAAAQAAABAAAAQAAABAAAAIAAABIABABIABgBIABgCIABAAQgBAAAAAAQAAABAAAAQAAAAAAABQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAIABgBIABAAIABgCIAEgGIABgBIACgCIAAgBIAHgGIAFgFQAGgFADgFIACgBIABgDIABgCIABgEIABgDIAAgBIAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQgBAAAAAAIgBAAIgCABgAlFDVIgBABIgCADIgCACIgCADIgCADIgDAEIgDAEIgBAEIgBACIgCADIAAACIgCACIgBADIAAABIABABIABgBIAAgCIAAAAIABACIABAAIAAgBIABAAIABgBIACgFIAAAAIACgCIAEgFIACgEIAFgHIACgBIAAgCIABgCIAAgDIAAgCIAAgBQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIgCABgAjNCYQAsAzBFAgQAcANgQgdQgpg1hIgdQgIgDgFAAQgKAAALASgAh3AkQgGB1BPgOQC7hEBEjBQAMhXhOgHQi3AJhPDzgADXgtIAAACIABAAIABgBIAAAAIACgEIAAAAIABgBIAAAAIADgCIACgCIAEgFIAAgBIABgBIAAgBIABgCIAAgBIABgBIAAgBIgBAAIgBAAIgBAAIAAACIgCABIgBACIgCACIgCACIgCACIgBACIgBACIgBACIgBABIgBABIgBACIAAABIAAABIAAgBIABgBgAD6iOQgKALAPAHQAdgJgGgEQgJgGgKAAIgJABgADpjHQgDARAUgCQAagZgJgBIgGAAQgQAAgMALgAAgjvIAAAAIABgBIABgBIADgEIABAAIACgBIABAAIAFgDIACgCIAGgEIABAAIABgCIABgBIABgCIABgCIABgBIAAgBIAAgBIAAgBIgBAAIAAAAIgCAAIgBACIgDAAIgCACIgDACIgEABIgFAEIgCACIgBACQgBAAgBABQAAAAgBAAQAAABAAAAQgBAAAAABIgCACQAAAAgBABQAAAAgBAAQAAAAAAAAQAAAAAAABQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBABAAAAIAAABIAAACIACABIABgCIAAAAIACgBQgBAAAAABQAAAAAAAAQAAABAAAAQAAAAABABIABAAIAAgBIABABgADfkUQgTADgKAQQABASAUgHQARgegIAAIgBAAgACHkvQgPANgBASQAJAPAPgPQgBgggFAAIgCABgACbl2QgBAAAAAAQAAAAAAABQAAAAAAAAQAAAAABAAIABAAIAAAAIABAAIABgBIADgDIABgBIABgBIABAAIAEgDIAEgCIAGgFIACgBIABgCIABgBIABgDIABgBIAAgBQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIgCAAIgCACIgBABIgDACIgDACIgCACIgEACIgEADIgCADIgBACIgDACIgBACIgCABIgCACIAAABIABAAIABAAIAAgBg");
	this.shape_4.setTransform(41.634,56.2258);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AkZGfQg8gZgdglQgcgkA0AWQA1AXAkAoQAWAXgNAAQgJAAgYgKgAjXFzQhEgggsgzQgQgaAbALQBIAdAqA1QALAUgKAAQgFAAgJgEgACAgGQAPgDANAIQAGADgdAJQgPgHAKgKgABvg/QAOgNATACQAKABgbAZIgEAAQgQAAAEgPgABIh5QAKgQATgDQAJgCgSAgQgFACgFAAQgKAAAAgNgAgDiIQABgSAOgNQAIgGAAAlQgHAHgGAAQgGAAgEgHgAB3j6QAAgSAKgHIADACQADACADgBQAuA6A/ArIAAAFIABADQgIALgPABQgdgqhNg5gAE1irQACgDAAgEQAAgFgDgCQgDgDgEAAQgFAAgCADIgBABQhUg6g/hTIAAAAQADgDAAgEQgBgFgDgCQgDgDgEAAQgEAAgDADQgNgKACgKQAGgaAQgRIAAAAIgBACIAAAHIABABIAAABIABAFIACACIAEACIABABIAAAAIAEACIAEAAIACAAIABAAIABAAIABAAIACgCIABgEIAAgBIABgDIAAgIIABgBIAAAAIACAAIAGACIABAAIAAAAIACAAIABAAIAAAAIABgBIAAgBIABgBIAAgHIgBAAIgBgFIgCgDIgEgCIgBgBIAAAAIgBAAIgCgBIgBAAIgDAAIgCAAIgBABIAAAHIAAADIAAABIAAAAIgBABIgBAAIAAABIgBAAIgKgDIgBAAIAAABIgBAAIgDAAQALgLAOgHIAAAAQARgEA5AmQA6AmBPByQABArg6AZIgHABQgEAAgEgCgAFAjAIAAABIAAAFIAAADIACABIACACIABAAIAAABIAAAAIACABIAAAAIABAAIABAAIACABIACAAIABgBIAAAAIAAgBIABgBIAAgBIAAAAIABAAIAAgFIAAgCIAAgBIABAAIABAAIACAAIADACIACAAIAAgBIABAAIAAgCIAAgEIAAgDIgCgCIgCgCIgBgBIgCAAIAAAAIgBgBIgCAAIgBABIAAAAIAAAAIgBABIAAAGIAAABIgCAAIgCgBIgCgBIgCAAIgEAAIgBABIAAABIgBAAg");
	this.shape_5.setTransform(53.8871,42.6452);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Color_tube, new cjs.Rectangle(-1,-0.1,93.3,104.19999999999999), null);


(lib.clip = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.8,1,1).p("Ah/A7QAAgBAAgCQgCh+gjiCQgnAUgagkQgbgiAkgxQAkgwBBAKQAwAIACAuQADAugtAJQA5CEBcBJAh/A7QgDAjhwAcQAeB/A6BbQCVgaD4ivQgXhghChoQhbA6gZgUAh/A7QBMgMBZhG");
	this.shape.setTransform(24.275,33.9388);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#090200").s().p("AjygQQBwgcADgjQBMgMBZhHQAZAUBbg6QBCBpAXBfQj4CviVAaQg6hbgeh+g");
	this.shape_1.setTransform(24.275,47.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.clip, new cjs.Rectangle(-1,-1,50.6,69.9), null);


(lib.Cell_tape = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.6,1,1).p("ACGiOIEBlKQgjAFgjAWQAUgnABgnQgoANgiAcQAQgsgGgmQgmARgfAdQAHgkgHgkIjTDhIjKkGQAAABAAABQgIAYAMAYIg6gSQACAfANAmQgcgMgVgHQgRgFgMgBIAKBEQgngLgogCQB7CUBoCmQAFAJAGAJAgCltQhTBjhDBmQh4CyhGC6QAdgCAogrQgNAeACA1QAKgFAJgGIAsgsQgGAuACAlQAMgGAMgIQAVgQAVgaQgKAbgBAWQAAACAAACQAAACAAADQAAATAIARICQjlQBIhtBQhsAgSBLICBE7QAnB3AYB3QALgOAIgPQAPgigEgnQAPAtAqAQQALgigGgvQANAVATAPQALAJAOAIQAJgigEgsQATAgAeANQhDlaiwlC");
	this.shape.setTransform(39.1,62.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#264D41").s().p("AB3GGIiBk7QBIhuBPhsQCwFDBDFaQgdgNgUggQAFArgKAiQgNgHgMgJQgTgPgNgVQAHAvgMAhQgpgPgQgtQAEAmgPAjQgHAOgLAPQgYh4gnh2gADTIOQAQAtApAPQgugPgLgtgAFPHhQAUAgAdANQgjgOgOgfgAFPHhIAAAAgAici2Qhoimh7iUQAoACAoALIgLhDQAMAAARAGQAVAGAcANQgMgngCgfIA6ASQgMgYAHgYIABgCQBuCBBaCGIjIkHIDIEHQhSBihDBmIgLgSgAkvnjIAAAAgAkvnjIAAAAgAl/nwQAngCApAPQgogLgogCgAk6omIALBDQgMglABgeg");
	this.shape_1.setTransform(38.375,62.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#77AF92").s().p("AjCGbIAAgFIAAgEQABgWAKgaQgVAagVAPQgMAJgMAFQgCgkAGguIgsArIgTAMQgCg1ANgeQgoAqgdADQBGi6B4izQBDhlBThjQBfhyB0hvIjTDhIDTjhQAHAkgHAkQAfgdAmgRQAGAmgQArQAigbAogNQgCAngTAnQAigXAkgEQiICih6CmQhPBshIBuQg6BYg2BYIggA1QgIgQAAgUg");
	this.shape_2.setTransform(41.525,48.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Cell_tape, new cjs.Rectangle(-1,-1,80.2,127.6), null);


(lib.bigMG = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AhohRQAEAHAEAEQAIAJAIgFQABgBADAAQAEAEAAAIQgCAGAHAIICGCTQAKAKAJgIIARgOQAFgKgIgKIiIiUQgHgHgGADQgFADgFgIAhMhDQAJgGAHgJQAAgBABAAQAHgNgRgP");
	this.shape.setTransform(14.333,19.3651);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.5,1,1).p("AhZhKQgXAhgCAjQgBAoAfAsQAnAtAtgBQAXAAAYgMQABAAAAgBQABAAABgBQACAAAAgBQABgBACgBQAGgFAGgFIABgBQAAgBACAAQAAgBAAAAQAPgPALgOQAVghgCgiQgCgdgSgfQgMgXgWgOQghgVgdABQgtABgrAug");
	this.shape_1.setTransform(-0.8633,0.2247);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A17F4C").s().p("AA1BcIiGiSQgHgJACgGQAAgHgEgFQAJgFAHgKIABgBQAFAIAFgDQAGgDAHAHICICVQAIAKgFAJIgRAOQgEAEgEAAQgGAAgFgGg");
	this.shape_2.setTransform(15.708,20.7401);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3F3F40").s().p("AgPARIgHgKIABgBIACgBIACgBIADgCIALgJIABgBIACgBIAMgNQAQAOgGAMIgBABQgIAKgJAFIgEACIgEABQgGAAgFgGgAAGgHIAHAHIAGgGIgFgIg");
	this.shape_3.setTransform(6.1918,10.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFCFD").s().p("AAnBeIAHgGIAGAHIgHAHgAgThIIAGgYQAcAIAOATIgRAQQgMgSgTgBgAgvhMIgEgXQASgEAPAGIgGAVQgMgEgLAEg");
	this.shape_4.setTransform(2.925,0.295);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C7E4F5").s().p("AhUBOQgfgsABgoQACgjAXghQArguAtgBQAdgBAhAVQAWAOAMAXQASAfACAdQACAigVAhQgLAOgPAPIAAABIgCABIgBABIgMAKIgDACIgCABIgCABIgBABQgYAMgXAAIAAAAQguAAgmgsgAAShIQATABANASIARgPQgOgUgdgIgAANhLIAGgVQgPgGgRAEIAEAWQAFgCAFAAQAGAAAGADg");
	this.shape_5.setTransform(-0.8633,0.2247);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bigMG, new cjs.Rectangle(-13.3,-13,39.1,44.6), null);


(lib.conffettiL = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// confeti17
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33CC33").s().p("AgVAfQAPgjgOgeIApABQgPAiAPAfQgKADgKAAQgKAAgMgEg");
	this.shape.setTransform(35.2,6.5135);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#33CC33").s().p("AgcAXQASghgGgdQASALAbAHQgSAhAGAdQgTgHgagLg");
	this.shape_1.setTransform(35.675,17.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#33CC33").s().p("AgjAMQAWgeABgcQARAXAeAMQgTAhgCAZQgSgTgfgQg");
	this.shape_2.setTransform(36.15,27.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#33CC33").s().p("AgqACQAZgcAIgbQAPAiAlASQgWAhgLAWQgQgfgkgVg");
	this.shape_3.setTransform(36.625,38.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#33CC33").s().p("AgxgHQAcgbAQgZQANAsAqAXQgYAigUASQgOgqgpgZg");
	this.shape_4.setTransform(37.125,49.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#33CC33").s().p("Ag4gRQAggZAWgYQAMA4AvAcQgaAigcAPQgNg2gugeg");
	this.shape_5.setTransform(37.6,60.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#33CC33").s().p("Ag/gcQAjgXAdgWQALBDA0AiQgdAigjAMQgNhDgygjg");
	this.shape_6.setTransform(38.075,71.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#33CC33").s().p("AhGgmIBKgqQAKBPA5AnQgfAigsAJQgLhQg3gng");
	this.shape_7.setTransform(38.55,81.85);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#33CC33").s().p("AhCgcQAngWAgghQAMBHAyAoQggAhgoAXQgNhGgwgqg");
	this.shape_8.setTransform(36.1,92.825);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#33CC33").s().p("Ag+gRQAmgYAfguQAMBBAsAnQghAhgkAmQgPg9gpgsg");
	this.shape_9.setTransform(33.7,103.75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#33CC33").s().p("Ag6gGQAngaAag7QAOA7AmAnQgiAgggA1QgRg1gigtg");
	this.shape_10.setTransform(31.3,114.725);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#33CC33").s().p("Ag2ADQAngbAXhHQAQA0AfAoQgjAggbBDQgUgsgbgxg");
	this.shape_11.setTransform(28.85,125.675);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#33CC33").s().p("AgyAPQAngeAUhUQARAvAZAnQglAfgWBRQgWgigUgyg");
	this.shape_12.setTransform(26.45,136.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#33CC33").s().p("AguAZQAngfARhgIAlBOQgmAfgSBgQgYgagNg0g");
	this.shape_13.setTransform(24,147.575);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#33CC33").s().p("AgzASQAmgdAVhWQATApAaAnQgnAcgUBXQgYgcgVg0g");
	this.shape_14.setTransform(25.4,158.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#33CC33").s().p("Ag5ALQAlgbAZhLQAUApAhAnQgnAbgWBMQgYgegegzg");
	this.shape_15.setTransform(26.8,169.85);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#33CC33").s().p("Ag/AFQAlgaAdhAQATApAqAoQgoAYgZBCQgYgggmgxg");
	this.shape_16.setTransform(28.225,180.975);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#33CC33").s().p("AhEgBQAjgaAhg0QAUAqAxAnQgoAWgdA5QgWgjgugvg");
	this.shape_17.setTransform(29.625,192.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#33CC33").s().p("AhKgIQAjgYAmgqQATArA5AoQgoATghAvQgVglg3gug");
	this.shape_18.setTransform(31,203.275);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#33CC33").s().p("AhPgPQAigWAqgfQATAsBAAoQgpAQgiAlQgWgng+gtg");
	this.shape_19.setTransform(32.4,214.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#33CC33").s().p("AhVgVQAhgVAugUQATAsBJApQgpANgmAbQgVgphHgrg");
	this.shape_20.setTransform(33.825,225.525);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#33CC33").s().p("AhbgcQAhgTAygKQATAuBRApQgqAKgoASQgVgshQgqg");
	this.shape_21.setTransform(35.225,236.675);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#33CC33").s().p("AhggiQAfgSA2ABQAUAvBYApIhVAPQgUgthYgpg");
	this.shape_22.setTransform(36.625,247.7973);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#33CC33").s().p("AhbgeQAhgaA1ABQATAqBOAqQgrAIgrATQgWgthLgpg");
	this.shape_23.setTransform(36.1,260.2482);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#33CC33").s().p("AhVgaQAhgiA1ABQATAkBCAsQgsAIgqAfQgYgtg9gpg");
	this.shape_24.setTransform(35.575,272.6986);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#33CC33").s().p("AhPgVQAigrA1ABQASAfA2AuQgsAGgpAsQgagsgwgpg");
	this.shape_25.setTransform(35.025,285.1489);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#33CC33").s().p("AhKgSQAkgyA0ABQARAZAsAvQgtAHgpA4Qgcgsgjgqg");
	this.shape_26.setTransform(34.525,297.624);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#33CC33").s().p("AhEgNQAkg6A0ABQAQAUAhAxQgtAFgqBEQgdgsgVgpg");
	this.shape_27.setTransform(34,310.0492);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#33CC33").s().p("Ag+gJQAlhCA0ABQAPAOAVAzQgtAGgpBPQgggrgHgqg");
	this.shape_28.setTransform(33.475,322.4993);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#33CC33").s().p("Ag4gEQAmhLA0ABQAOAJAKA1QguAFgpBbQghgrAGgpg");
	this.shape_29.setTransform(32.8857,334.9493);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#33CC33").s().p("AgwAAQAnhTA0ABQANAEgBA2QguAFgpBnQgjgrATgpg");
	this.shape_30.setTransform(32.0661,347.3994);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#33CC33").s().p("Ag0gLQArhMAxAGQATAOgFA2QgrAGgrBZQgcgsAIgxg");
	this.shape_31.setTransform(33.0964,372.3281);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#33CC33").s().p("Ag3gUQAthFAwAKQAYAXgIA4QgoAFgtBMQgWgtgCg4g");
	this.shape_32.setTransform(34.0016,397.2307);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#33CC33").s().p("Ag5geQAxg+AtAQQAeAggMA3QglAIguA+QgQgvgNhAg");
	this.shape_33.setTransform(34.8485,422.095);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#33CC33").s().p("Ag7gnQAzg3AsAUQAjAqgQA4QghAIgwAwQgKgwgXhHg");
	this.shape_34.setTransform(35.6653,446.9333);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#33CC33").s().p("Ag9gwQA3gwAqAaQAnAzgTA4QgeAJgxAiQgEgygihOg");
	this.shape_35.setTransform(36.4835,471.7327);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#33CC33").s().p("AhAg4QA7gpAoAeQAsA9gWA5IhOAeQACg0gthVg");
	this.shape_36.setTransform(37.3028,496.4745);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#33CC33").s().p("AhChAQA+giAmAjQAyBFgaA7QgYALg1AGQAJg1g4hdg");
	this.shape_37.setTransform(38.1227,521.1873);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#33CC33").s().p("AgQBSQAOg3hChkQBBgbAkAoQA3BPgeA7QgMAHgZAAQgQAAgVgDg");
	this.shape_38.setTransform(38.9763,545.991);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#33CC33").s().p("AgOBOQAUg4hMhrQBEgUAiAtQA9BYgiA8QgGAEgMAAQgUAAgjgOg");
	this.shape_39.setTransform(39.7969,571.1414);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#33CC33").s().p("AgMBLQAag6hWhyQBHgNAgAxQBCBiglA8QgEAEgHAAQgTAAgqgag");
	this.shape_40.setTransform(40.6178,596.2739);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#33CC33").s().p("AgEBJQAIg1hNhtQA+gOAlAqQA8BcgPA4QgGAHgMAAQgUAAglgVg");
	this.shape_41.setTransform(40.2161,613.3989);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#33CC33").s().p("AAABGQgJgxhFhmQA1gPApAhQA3BYAIAyQgJAMgRAAQgVAAgggRg");
	this.shape_42.setTransform(40.225,630.5612);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#33CC33").s().p("AACBEIhWiOQAsgPAtAZQAyBTAeAtQgNARgWAAQgUAAgcgNg");
	this.shape_43.setTransform(40.35,647.7194);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#33CC33").s().p("AAFBBQgsgogzhbQAjgQAyAQQArBOA1ApQgQAWgcAAQgTAAgXgKg");
	this.shape_44.setTransform(40.525,664.9072);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#33CC33").s().p("AAIBAQg+gkgrhWQAbgRA2AJQAmBJBLAjQgUAcgiAAQgQAAgTgGg");
	this.shape_45.setTransform(40.65,682.0419);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#33CC33").s().p("AALA+QhQgfgihQQASgSA7ABQAgBEBiAeQgZAjgnAAQgNAAgQgFg");
	this.shape_46.setTransform(40.775,699.0581);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#33CC33").s().p("AAOA/QhigcgZhKQAJgSA/gIQAbBAB4AYQgeArgqAAQgMAAgMgDg");
	this.shape_47.setTransform(40.925,715.9535);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#33CC33").s().p("AAQA/QhzgXgQhEQAAgUBDgQQAWA8COATQgiAygvAAQgJAAgKgCg");
	this.shape_48.setTransform(41.05,732.8681);
	this.shape_48._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_48).wait(48).to({_off:false},0).wait(6));

	// confeti16
	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FF6699").s().p("AgKAVQgIgSAIgTQANgQAMAQQgMARAMAUQgHAEgGAAQgGAAgGgEg");
	this.shape_49.setTransform(44.9875,5.075);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FF6699").s().p("AgMAXQgIgTAIgWQAPgSAOASQgNATANAWQgIAFgHAAQgGAAgIgFg");
	this.shape_50.setTransform(44.975,12.475);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FF6699").s().p("AgNAaQgJgWAJgXQAQgVAQAVQgPAUAPAZQgJAFgIAAQgHAAgIgFg");
	this.shape_51.setTransform(44.9875,19.85);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FF6699").s().p("AgOAcQgKgYAKgaQASgVAQAVQgQAXAQAbQgJAFgJAAQgHAAgJgFg");
	this.shape_52.setTransform(44.975,27.2625);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FF6699").s().p("AgQAeQgLgZALgcQAUgYASAYQgSAYASAdQgKAGgJAAQgJAAgKgGg");
	this.shape_53.setTransform(44.975,34.6375);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FF6699").s().p("AgRAhQgMgcAMgfQAVgZAUAZQgTAcATAfQgLAGgKAAQgJAAgLgGg");
	this.shape_54.setTransform(44.975,42.025);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FF6699").s().p("AgSAjQgNgdANgiQAWgbAWAbQgVAeAVAhQgMAHgLAAQgKAAgLgHg");
	this.shape_55.setTransform(44.975,49.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FF6699").s().p("AgUAlQgNgfANgkQAZgcAWAcQgWAgAWAjQgMAIgMAAQgLAAgMgIg");
	this.shape_56.setTransform(44.9625,56.8125);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FF6699").s().p("AgVAoQgPghAPgmQAagfAYAfQgYAhAYAmQgNAIgNAAQgLAAgNgIg");
	this.shape_57.setTransform(44.975,64.1875);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FF6699").s().p("AgWAqQgQgjAQgoQAbghAaAhQgZAjAZAoQgOAJgNAAQgNAAgNgJg");
	this.shape_58.setTransform(44.9625,71.5875);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FF6699").s().p("AgXAnQgRgiARgnQAcgaAcAaQgVAjAVAmQgPAJgOAAQgNAAgOgJg");
	this.shape_59.setTransform(46.1875,83.325);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FF6699").s().p("AgYAlQgTgiATglQAegUAcAUQgPAiAPAlQgOAIgPAAQgOAAgPgIg");
	this.shape_60.setTransform(47.375,95.0875);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FF6699").s().p("AgYAiQgWghAWgjQAegNAeANQgLAhALAjQgPAIgPAAQgPAAgPgIg");
	this.shape_61.setTransform(48.5875,106.8375);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FF6699").s().p("AgZAfQgXgfAXgjQAfgGAgAGQgGAhAGAhQgPAIgRAAQgPAAgQgIg");
	this.shape_62.setTransform(49.775,118.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FF6699").s().p("AgaAcQgZgeAZghIBCAAQgDAgADAfQgRAIgQAAQgQAAgRgIg");
	this.shape_63.setTransform(51,130.35);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FF6699").s().p("AgcAbQgageAagfQAhAGAjgGQADAfgDAeQgQAIgRAAQgQAAgTgIg");
	this.shape_64.setTransform(52.2625,141.975);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FF6699").s().p("AgdAZQgdgdAdgcQAhAMAlgMQAIAdgIAcQgRAJgSAAQgQAAgTgJg");
	this.shape_65.setTransform(53.5875,153.55);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FF6699").s().p("AgfAYQgfgcAfgbQAjASAlgSQANAcgNAbQgQAIgTAAQgRAAgUgIg");
	this.shape_66.setTransform(54.9,165.1625);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FF6699").s().p("AghAXQghgbAhgaQAjAZAogZQARAcgRAZQgRAIgUAAQgSAAgUgIg");
	this.shape_67.setTransform(56.2375,176.7375);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FF6699").s().p("AggAbQgggbAdgaQAjATAngXQAUAagRAaQgVAJgWAAQgPAAgQgEg");
	this.shape_68.setTransform(58.1262,191.805);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FF6699").s().p("AgfAeQgggZAagaQAhAMAogVQAXAXgRAdQgeAJgdAAIgOgBg");
	this.shape_69.setTransform(60.0036,206.9232);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FF6699").s().p("AgngSQAgAGAogTQAaAVgRAdQgmAKgiADQgfgYAWgag");
	this.shape_70.setTransform(61.9054,222.15);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FF6699").s().p("AgogQQAeAAApgRQAcATgQAfQgnAHggAKQgfgXATgbg");
	this.shape_71.setTransform(63.7799,237.425);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FF6699").s().p("AgqgNQAdgHAogPQAgARgRAhQgoAEgdAQQgegUAPgcg");
	this.shape_72.setTransform(65.6586,252.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FF6699").s().p("AgsgLQAcgMApgNQAiAOgQAiQgpADgcAWQgdgTALgdg");
	this.shape_73.setTransform(67.5197,267.975);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FF6699").s().p("AgtgIQAagTApgLQAlANgQAiQgqABgZAdQgdgSAIgdg");
	this.shape_74.setTransform(69.3964,283.225);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FF6699").s().p("AgugGQAYgYAqgJQAnAJgPAlQgrgCgXAkQgdgRAFgeg");
	this.shape_75.setTransform(71.2316,298.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FF6699").s().p("AgwgDQAXgfAqgHQArAIgQAlQgsgDgVApQgcgPABgeg");
	this.shape_76.setTransform(73.0534,313.775);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FF6699").s().p("AgtgGQAWgeApgFQAkAMgKAkQgpABgWAiQgcgRACgfg");
	this.shape_77.setTransform(71.227,337.425);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FF6699").s().p("AgrgJQAWgeAogCQAdAQgEAjQgmAGgYAaQgcgTADggg");
	this.shape_78.setTransform(69.4194,361.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FF6699").s().p("AgqgMQAWgcAmgCQAYAVABAiQgjAKgZAUQgcgWADghg");
	this.shape_79.setTransform(67.6602,384.725);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FF6699").s().p("AgogOQAWgcAkAAQASAZAGAhIg7AbQgbgYAEghg");
	this.shape_80.setTransform(65.9299,408.3996);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FF6699").s().p("AgngRQAWgbAjACIAXA9QgcATgdAFQgbgaAEgig");
	this.shape_81.setTransform(64.1992,432.043);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FF6699").s().p("AgQArQgbgdAFgiQAWgaAiAEQAEAgASAfQgYAXgbAAIgFgBg");
	this.shape_82.setTransform(62.4673,455.706);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FF6699").s().p("AgPArQgbgfAFgkQAWgZAgAGQgBAlAXAdQgRAWgWAAQgHAAgIgCg");
	this.shape_83.setTransform(60.7353,479.4176);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FF6699").s().p("AgPAqQgagiAFgkQAWgYAfAHQgIApAcAdQgMAWgUAAQgJAAgLgFg");
	this.shape_84.setTransform(59.002,503.2094);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FF6699").s().p("AgPAoQgZgjAGglQAVgYAeAKQgOAtAhAbQgJAYgSAAQgKAAgOgKg");
	this.shape_85.setTransform(57.2679,527.0028);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FF6699").s().p("AgOApQgWgkAFgkQATgZAbALQgLAsAdAcQgJAWgQAAQgJAAgNgIg");
	this.shape_86.setTransform(57.2868,550.2242);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FF6699").s().p("AgNApQgTglADgiQASgaAYANQgJAqAaAcQgJAVgPAAQgIAAgLgHg");
	this.shape_87.setTransform(57.3045,573.4425);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FF6699").s().p("AgLApQgQglABghQAQgbAWAOQgHAoAWAdQgIAVgNAAQgHAAgKgHg");
	this.shape_88.setTransform(57.272,596.6755);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FF6699").s().p("AgKApQgMglgBggQAOgcAUAPQgFAnASAeQgHATgNAAQgFAAgJgGg");
	this.shape_89.setTransform(57.275,619.8926);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FF6699").s().p("AgJApQgJgmgCgeQAMgdASAQQgDAlAOAfQgHATgLAAQgFAAgHgGg");
	this.shape_90.setTransform(57.275,643.1053);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FF6699").s().p("AgHAqQgHgngDgdQAKgeAPARQgBAkALAgQgGARgKAAQgEAAgFgEg");
	this.shape_91.setTransform(57.275,666.3227);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FF6699").s().p("AgGApQgDgngFgbQAIgfANASQACAjAGAgQgFAQgIAAQgDAAgFgEg");
	this.shape_92.setTransform(57.225,689.555);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FF6699").s().p("AgEAqQAAgogHgaQAGggALAUIAGBBQgEAQgHAAQgCAAgDgDg");
	this.shape_93.setTransform(57.225,712.7729);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FF6699").s().p("AgDAqQADgogIgYQAEgiAIAVQAGAggBAhQgEAOgFAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_94.setTransform(57.24,735.9958);
	this.shape_94._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49}]}).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_94}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_94).wait(45).to({_off:false},0).wait(9));

	// confeti15
	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFF00").s().p("AgVAmQASgqgVghQARgMAQAHQAXAfgLAjQgGAUgIAAIgLABIgBAAQgFAAgLgHg");
	this.shape_95.setTransform(55.5029,7.0623);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFF00").s().p("AgRAhQANgngSgeQAPgLAPAFQAUAagHAeQAAAYABAAQgGAEgIACIgCABQgKAAgNgMg");
	this.shape_96.setTransform(56.2754,16.3073);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFF00").s().p("AgWAeQAKglgPgbQANgLAOADQARAWgEAYQAHAcAIgBQgFAIgJAFIgEAAQgPAAgRgOg");
	this.shape_97.setTransform(57.8,25.5301);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFF00").s().p("AgaAZQAEgigLgYQAMgLAMACQAOAQAAAUQAMAgARgBQgEALgLAHIgGAAQgUAAgTgSg");
	this.shape_98.setTransform(59.375,34.7601);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFF00").s().p("AgfAWQAAgggIgVQAKgLAKAAQANAMAEAOQARAkAZgBQgDAPgNAJIgHAAQgaAAgWgVg");
	this.shape_99.setTransform(60.975,43.9917);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFF00").s().p("AgjASQgFgdgFgTQAJgKAIgCQALAHAHAJQAXAoAhgCQgBATgQALIgJABQgfAAgYgZg");
	this.shape_100.setTransform(62.525,53.1746);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFF00").s().p("AgoAOQgKgagBgQQAHgKAGgDIAUAFQAdAsAqgCQgBAWgRAOIgLAAQgkAAgcgcg");
	this.shape_101.setTransform(64.1,62.3774);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFF00").s().p("AgsANQgPgYACgMIAKgPQAGgDAPgDQAjAyAxgDQABAagTAPIgNABQgpAAgeggg");
	this.shape_102.setTransform(65.6688,71.286);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFF00").s().p("AgwAOQgUgVAFgKIAHgQQAEgIASgIQApA2A6gDQABAdgVASIgOABQguAAghgkg");
	this.shape_103.setTransform(67.2128,79.9637);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFF00").s().p("AglASIgfggQAEgLAHgJQAOgJAXgDQAnAyAygCQABAcgUAQIgQABQgoAAgfgdg");
	this.shape_104.setTransform(65.7256,96.2765);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFF00").s().p("AgaAWQgdgcgSgFQAEgOALgKQAZgKAbACQAmAuAqAAQAAAZgSAQIgRABQgkAAgdgXg");
	this.shape_105.setTransform(64.175,112.5937);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFF00").s().p("AgPAbQghgggegCQAEgQAPgNQAjgLAeAHQAmAqAjADQgCAXgQAOQgKACgJAAQgeAAgbgRg");
	this.shape_106.setTransform(62.675,128.7969);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFF00").s().p("AgEAfQgmgigpAAQADgTATgOQAvgMAiAMQAkAmAcAEQgDAVgPAOQgLACgKAAQgZAAgYgMg");
	this.shape_107.setTransform(61.15,144.9898);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFF00").s().p("AAGAlQgpgng1ADQAEgVAXgQQA5gNAlARQAkAjAUAGQgEASgNAMQgNAEgOAAQgSAAgVgGg");
	this.shape_108.setTransform(59.6,161.1413);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFF00").s().p("AASApQgvgqhAAFQADgXAbgRQBDgOArAWQAiAeANAIQgGAQgLALQgPAGgUAAQgLAAgNgCg");
	this.shape_109.setTransform(58.075,177.3704);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFF00").s().p("AhiAHQADgaAfgTQBNgPAwAbQAgAaAGAKQgIAOgJAKQgSAJgjABQgzgthMAIg");
	this.shape_110.setTransform(56.575,193.7071);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFF00").s().p("AhnAJQADgdAjgUQBYgQA0AgQAeAXgBALIgQAVQgNAJgjAHQg4gxhXALg");
	this.shape_111.setTransform(55.0285,210.1333);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFF00").s().p("AhtAKQADgfAngWQBigRA4AlQAdAUgJAMQgJAJgGAJQgIAJgiANQg8g0hjANg");
	this.shape_112.setTransform(53.6066,226.5574);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFF00").s().p("AhnAOQAHghAigeQBdgPA1AlQAcAbgMAQIgRATQgIAHgfAMQg4gxhbAJg");
	this.shape_113.setTransform(53.5674,238.2087);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFF00").s().p("AhhATQAMgkAdglQBWgNAyAlQAbAigOAVQgLANgIAFQgHAGgeAKQgzgthTAFg");
	this.shape_114.setTransform(53.539,249.8463);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFF00").s().p("AhbAXQAQgnAYgrQBRgMAuAmQAaApgRAYQgMAPgIAEQgIAEgbAIQgugphLABg");
	this.shape_115.setTransform(53.511,261.4796);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFF00").s().p("AhWAbQAVgpAUgyQBKgKArAlQAZAwgTAdQgNARgJACIghAIQgqgkhDgEg");
	this.shape_116.setTransform(53.5022,273.1197);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFF00").s().p("AhQAgQAZgtAPg5QBEgIAoAmQAYA3gWAhQgOASgJABQgJAAgWAFQglghg7gHg");
	this.shape_117.setTransform(53.5011,284.7547);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFF00").s().p("AhLAkQAfgvAKhAQA9gGAmAmQAWA+gYAlQgPAUgKgBQgIgBgVADQgggcg0gNg");
	this.shape_118.setTransform(53.4761,296.3781);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFF00").s().p("AAdBSQgJgCgSABQgbgYgsgRQAjgyAFhHQA3gEAjAmQAVBGgaAoQgPATgKAAIgCAAg");
	this.shape_119.setTransform(53.4892,308.0895);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFF00").s().p("AATBZQgJgFgOAAQgYgUgkgVQAng1ABhOQAxgCAgAmQAUBNgdAsQgPAUgKAAIgEAAg");
	this.shape_120.setTransform(53.5082,319.8965);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFF00").s().p("AAKBfQgJgHgMgCIgwgpQAsg3gEhVQArgBAdAnQATBUggAwQgPAVgLAAIgEgBg");
	this.shape_121.setTransform(53.5289,331.7225);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFF00").s().p("AAABlQgIgIgLgEQgOgMgVgdQAxg6gJhcQAlABAZAnQASBbgiA0QgPAWgLAAQgDAAgDgCg");
	this.shape_122.setTransform(53.5586,343.5065);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFF00").s().p("AgIBrQgJgJgJgGQgJgIgNgiQA0g8gNhjQAfADAWAnQARBiglA4QgPAXgKAAQgEAAgDgDg");
	this.shape_123.setTransform(53.5926,355.3066);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFF00").s().p("AABBkQgIgHgLgEQgPgMgVgeQAwg5gJhbQAmABAaAmQASBbgiA0QgPAVgLAAQgDAAgDgCg");
	this.shape_124.setTransform(55.9115,372.7815);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFF00").s().p("AAMBeQgJgGgNgCIgygpQArg3gDhTQAsgCAeAnQATBTgfAvQgPAVgLAAIgEgBg");
	this.shape_125.setTransform(58.236,390.246);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFF00").s().p("AAWBWQgJgEgPAAQgZgVgngUQAmgzAChMQAzgDAhAmQAVBLgdArQgOAUgLAAIgDgBg");
	this.shape_126.setTransform(60.566,407.7085);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFF00").s().p("AAgBQQgIgCgTACQgdgagwgPQAhgxAHhEQA6gFAkAmQAWBDgaAnQgOATgKAAIgCAAg");
	this.shape_127.setTransform(62.9042,425.1493);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFF00").s().p("AhNAiQAbguANg8QBBgIAnAmQAXA7gXAjQgPATgJAAQgJAAgVADQgjgeg3gKg");
	this.shape_128.setTransform(65.275,442.8132);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFF00").s().p("AhTAdQAWgqASg1QBIgJAqAlQAYAzgUAeQgOASgIABIggAHQgogihAgGg");
	this.shape_129.setTransform(67.6295,460.4379);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFF00").s().p("AhZAZQARgoAXguQBPgLAuAmQAZArgRAaQgNAPgIADQgIAEgbAHQgtgnhIAAg");
	this.shape_130.setTransform(69.994,478.0753);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFF00").s().p("AhgAUQANglAcgmQBVgNAxAmQAbAigPAWQgLANgIAFQgHAGgdAJQgygshSAFg");
	this.shape_131.setTransform(72.3679,495.7327);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFF00").s().p("AhmAPQAHgiAigeQBcgPA0AlQAcAbgMARIgRATQgIAHgfALQg3gwhaAJg");
	this.shape_132.setTransform(74.755,513.3607);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFF00").s().p("AhpAMQAFgkApgXQBdgRA0AjQAbAUgIALQgJAKgGALQgNALgiATQg6gyhaAJg");
	this.shape_133.setTransform(77.1414,548.9107);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFF00").s().p("AhmAOQAIgpArgYQBXgRAvAiQAZASgHANQgHAJgGANQgTAMgiAaQg3gvhSAEg");
	this.shape_134.setTransform(77.1266,566.85);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFF00").s().p("AhjAQQALgvAsgYQBSgQArAfQAXASgGAMQgGAKgGAPQgYANgjAhQg0gshKgBg");
	this.shape_135.setTransform(77.1121,584.7634);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFF00").s().p("AhfASQANg0AugZQBMgQAoAdQAUASgEAMQgFAKgGARQgfAPgjAnQgwgphCgGg");
	this.shape_136.setTransform(77.0905,602.6541);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFF00").s().p("AhcAUQAQg5AwgZQBGgRAkAcQASARgDALIgKAeQgkAQgkAuQgtgmg6gLg");
	this.shape_137.setTransform(77.0964,620.5656);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFF00").s().p("AhZAXQATg/AygaQBAgQAgAaQAQAQgCALIgJAgQgqASgkA1QgqgkgygPg");
	this.shape_138.setTransform(77.0861,638.4952);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFF00").s().p("AhWAZQAWhEAzgbQA7gQAbAYQAPAQgCALIgHAjQgwATgjA7QgpghgpgUg");
	this.shape_139.setTransform(77.057,656.3959);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFF00").s().p("AhSAaQAXhJA2gbQA1gQAXAWQAMAPAAALQAAALgGAaQg1AVgkBBIhGg3g");
	this.shape_140.setTransform(77.075,674.3047);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFF00").s().p("AhPAcQAahOA2gcQAxgPATAUQAKAOABAKQABALgGAeQg7AVgkBIQgjgagYgfg");
	this.shape_141.setTransform(77.0771,692.2116);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFF00").s().p("AhMAfQAdhUA4gcQArgQAPATQAIAOACAJQACAMgGAfQhBAXgkBPQgggYgQgjg");
	this.shape_142.setTransform(77.0911,710.0967);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFF00").s().p("AhJAhQAfhZA6gdQAlgQALARIAJAXQADALgFAiQhHAYgkBWQgdgVgIgog");
	this.shape_143.setTransform(77.1279,728.0246);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFF00").s().p("AhHAjQAjheA7geQAggPAHAOQADANAFAJQAEAMgGAkQhLAagmBcQgagSAAgtg");
	this.shape_144.setTransform(77.1592,745.9186);
	this.shape_144._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_95}]}).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112,p:{x:53.6066,y:226.5574}}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_112,p:{x:77.1566,y:531.0074}}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_144).wait(50).to({_off:false},0).wait(4));

	// confet14
	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FF6600").s().p("AgIAQQAKgQgKgNQAHgJAHAJQAFAPgFAOQgEACgDAAQgDAAgEgCg");
	this.shape_145.setTransform(70.1,3.9561);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FF6600").s().p("AgLgHQAFgOALACQAJAMgDAQQgMAIgEAEQAFgOgLgOg");
	this.shape_146.setTransform(71.2125,12.7879);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FF6600").s().p("AgPAAQAFgTAOgFQAMAIAAATQgQALgCALQABgKgOgPg");
	this.shape_147.setTransform(72.351,21.4375);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FF6600").s().p("AgTAGQAEgYARgMQARADABAYQgWAQACASQgDgIgQgRg");
	this.shape_148.setTransform(73.525,30.2);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FF6600").s().p("AgXANQADgdAUgTQAVgBADAbQgbATADAaIgXgXg");
	this.shape_149.setTransform(74.725,38.8982);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FF6600").s().p("AgbAUQABgiAZgaQAYgFAFAdQggAYAGAiQgJgDgUgTg");
	this.shape_150.setTransform(75.925,47.5818);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FF6600").s().p("AgfAbQAAgnAcggQAcgLAHAhQglAcAJAqQgNAAgWgVg");
	this.shape_151.setTransform(77.1,56.2233);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FF6600").s().p("AgjAjQgBgsAfgnQAggPAJAkQgpAgALAxIgFAAQgPAAgVgTg");
	this.shape_152.setTransform(78.2984,64.8478);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FF6600").s().p("AgnArQgCgxAigvQAkgTALAnQguAkAOA5IgIABQgTAAgUgSg");
	this.shape_153.setTransform(79.4666,73.4955);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FF6600").s().p("AgrAyQgDg2Amg2QAngXANAqQgzAoARBAQgHACgGAAQgUAAgUgRg");
	this.shape_154.setTransform(80.6389,82.1445);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FF6600").s().p("AgvA5QgEg7Apg9QArgcAPAuQg4AtAUBHQgKADgIAAQgVAAgUgRg");
	this.shape_155.setTransform(81.8277,90.8121);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FF6600").s().p("AgsAuQgCg3Ang1QAkgUARAuQg0AsAOA9IgHAAQgYAAgVgXg");
	this.shape_156.setTransform(81.3972,105.1855);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FF6600").s().p("AgqAhQACgyAkgtQAdgMASAuQgxArAKAyQgagCgUgeg");
	this.shape_157.setTransform(81,119.61);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FF6600").s().p("AgnAWQAEguAigmQAWgDATAvQgsApAFAoQgZgKgPgfg");
	this.shape_158.setTransform(80.55,133.9909);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FF6600").s().p("AglALQAIgqAfgeQAPAGAVAuQgpApACAeQgZgRgLgig");
	this.shape_159.setTransform(80.125,148.275);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FF6600").s().p("AgjAAQALglAdgWIAfA7QgmApgDATQgYgYgGgkg");
	this.shape_160.setTransform(79.725,162.575);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FF6600").s().p("AgggKQANghAcgPQgBAWAZAvIgqAwQgWgfgBgmg");
	this.shape_161.setTransform(79.275,176.825);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FF6600").s().p("AgMA5QgVglADgpQARgcAZgIQgHAfAaAuQgfAmgLAAIgBgBg");
	this.shape_162.setTransform(78.8313,191.1013);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FF6600").s().p("AgPA3QgTgtAHgrQAUgYAXAAQgPAnAcAvQgVAdgOAAQgFAAgEgDg");
	this.shape_163.setTransform(78.3058,205.5113);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FF6600").s().p("AgRA0QgSg0AMgtQAXgTAVAIQgVAvAcAvQgPAWgNAAQgJAAgIgIg");
	this.shape_164.setTransform(77.76,219.9487);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FF6600").s().p("AgSAxQgRg5ARgxQAZgPATAQQgcA3AeAwQgLASgMAAQgLAAgMgQg");
	this.shape_165.setTransform(77.1375,234.307);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FF6600").s().p("AgUA0QgTg2APgwQAdgRAVAIQgWAyAcAxQgPAWgQAAQgKAAgLgKg");
	this.shape_166.setTransform(79.2314,252.8035);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FF6600").s().p("AgWA4QgVgzANgvQAhgUAXACQgPAtAZAyQgTAagUAAQgJAAgKgFg");
	this.shape_167.setTransform(81.3133,271.2289);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FF6600").s().p("AgYA8QgWgvAKguQAlgXAZgFQgHAoAVAzQgYAggZAAQgHAAgIgCg");
	this.shape_168.setTransform(83.358,289.5498);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FF6600").s().p("AgZBAQgZgsAJguQApgYAagNQAAAiASA1QgfAoggAAIgGAAg");
	this.shape_169.setTransform(85.4309,307.9668);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FF6600").s().p("AgugTQAtgaAcgVIAWBUQgmAuglACQgbgoAHgtg");
	this.shape_170.setTransform(87.4779,326.45);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FF6600").s().p("Ag0gMQAygdAdgbQAOAYAMA4QgpAvgoAKQgdgkAFgtg");
	this.shape_171.setTransform(89.5132,344.95);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FF6600").s().p("Ag5gFQA1ggAggiQAWATAIA5QgsAygrARQgfggADgtg");
	this.shape_172.setTransform(91.5075,363.45);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FF6600").s().p("Ag+ABQA5ghAigqQAdAOAFA7QgvAzguAZQghgdABgtg");
	this.shape_173.setTransform(93.5218,381.95);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FF6600").s().p("AhDAIQA9gkAkgwQAkAJACA8QgzA1gwAfQgjgYgBgtg");
	this.shape_174.setTransform(95.525,400.45);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FF6600").s().p("AhIAOQBBglAlg4QArADgBA+Qg2A3gyAnQgmgWgCgsg");
	this.shape_175.setTransform(97.5511,418.975);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FF6600").s().p("AhMAWQBEgoAng/QAzgCgFA/Qg4A6g1AtQgogSgEgrg");
	this.shape_176.setTransform(99.5473,437.447);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FF6600").s().p("AhSAdQBJgrAohGQA7gHgIBBQg8A7g4A1QgqgOgGgrg");
	this.shape_177.setTransform(101.5731,455.9407);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FF6600").s().p("AhXAkQBMgtArhNQBBgMgLBCIh5B5QgsgKgIgrg");
	this.shape_178.setTransform(103.6041,474.3755);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FF6600").s().p("AhXAeQBEgvAuhGQBDgHgHBDQg8A8g4A3QgpgTgRgng");
	this.shape_179.setTransform(101.3579,500.7623);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FF6600").s().p("AhXAZQA8gxAxg/QBGgDgEBEQg4A8g3AzQgmgdgagjg");
	this.shape_180.setTransform(99.1108,527.0956);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FF6600").s().p("AhXAUQA0g0Azg4QBIADAABFQg0A7g2AuQgigmgjgfg");
	this.shape_181.setTransform(96.925,553.425);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FF6600").s().p("AhYAPQAsg3A3gwQBKAHAEBGQgwA6g1AqQgfgwgtgag");
	this.shape_182.setTransform(94.725,579.75);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FF6600").s().p("AhYAKQAkg5A6gpQBMAMAHBHQgsA6gzAkQgcg5g2gWg");
	this.shape_183.setTransform(92.525,606.075);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FF6600").s().p("AhYAFQAbg7A+gjQBOARALBIQgpA6gxAgQgZhDg/gSg");
	this.shape_184.setTransform(90.3,632.375);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FF6600").s().p("AhZAAQAUg+BBgbQBPAVAPBJQgkA6gyAbQgUhMhJgOg");
	this.shape_185.setTransform(88.1,658.7);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FF6600").s().p("AhZgFQALhABEgUQBRAaATBKQggA4gxAXQgRhVhRgKg");
	this.shape_186.setTransform(85.925,685.025);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FF6600").s().p("AhagKQAEhDBHgNQBTAgAXBKQgdA4gvATQgPhehagHg");
	this.shape_187.setTransform(83.7,711.325);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FF6600").s().p("AhagPQgEhFBKgGQBVAlAaBLQgYA3guAOQgMhnhjgDg");
	this.shape_188.setTransform(81.4871,737.65);
	this.shape_188._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_145}]}).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_188}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_188).wait(43).to({_off:false},0).wait(11));

	// confeti13
	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#00FFCC").s().p("AgXAqQAWgjgTgrQAcgcAIAYQATA2gYAiQgHAEgGAAQgLAAgKgKg");
	this.shape_189.setTransform(79.7871,7.3127);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#00FFCC").s().p("AgRA0QgGgDgEgGQAbgjgQgxIABgBQAggaAGAaIAAAAQAPA8gbAhIgCACIgBABQgGACgEAAQgIAAgHgEg");
	this.shape_190.setTransform(80.3897,19.2045);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#00FFCC").s().p("AgWA3QgFgEgFgGQAggkgNg2IABgCQAmgZAEAdQALBCghAiIgCACIgBAAIgGABQgLAAgKgFg");
	this.shape_191.setTransform(81.0125,31.0988);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#00FFCC").s().p("AgbA5QgGgFgEgHQAlgkgKg8IABgBQArgZADAfIAAABQAHBJgnAiIgCABIgBABIgDAAQgNAAgNgHg");
	this.shape_192.setTransform(81.7038,43.0151);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#00FFCC").s().p("AggA8QgGgGgFgHIAAgBQArgkgHhBIABgCQAwgYABAhIAAABQADBQgsAiIgCABIAAABQgRgBgPgIg");
	this.shape_193.setTransform(82.4096,54.9491);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#00FFCC").s().p("AgmA+QgGgGgEgJIAAAAQAvglgEhHIABgCQA1gXAAAkIAAABQgBBWgwAjIgDABIgBAAQgRgCgRgJg");
	this.shape_194.setTransform(83.175,66.8898);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#00FFCC").s().p("AgsBAQgGgHgEgJIAAAAQA1gmgChMIABgDQA7gWgCAnIAAAAQgFBdg2AjIgCACIgCAAQgSgEgSgKg");
	this.shape_195.setTransform(83.905,78.8384);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#00FFCC").s().p("AgyBCQgFgHgFgKIAAgBQA6gmAChRIAAgDQBBgWgEAqIAAAAQgJBkg7AjIgDABIgCABQgTgHgTgKg");
	this.shape_196.setTransform(84.6866,90.7719);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#00FFCC").s().p("Ag3BEQgGgIgFgKIAAgBQBAgnADhWIABgDQBGgWgFAsIAAABQgNBrhBAjIgDABIgBAAQgVgHgTgMg");
	this.shape_197.setTransform(85.445,102.6998);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#00FFCC").s().p("Ag+BHQgGgJgEgLIAAgBQBEgnAHhcIABgEQBLgVgHAvIAAABQgQBxhHAkIgDABIgCAAQgVgJgVgMg");
	this.shape_198.setTransform(86.2299,114.6257);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#00FFCC").s().p("AgXBhIgsgYQgGgKgFgLIAAgBQBKgoAJhhIABgEQBRgVgJAyIAAABQgUB4hMAkIgEABIgBAAg");
	this.shape_199.setTransform(86.9906,126.552);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#00FFCC").s().p("AhKBLQgGgKgEgNQBQgqAMhpQBXgUgLA1QgZB/hRAkIgGABg");
	this.shape_200.setTransform(87.7871,138.4779);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#00FFCC").s().p("AhBBVQgOgIgBgUQBKguAShjQBOgSgKAwQgUBzhGAiIgEADQgdgIgWgBg");
	this.shape_201.setTransform(87.7766,153.4046);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#00FFCC").s().p("AhNA6QBFgyAYhdQBFgQgIAqQgPBog9AgIgCAFQgigCgVAKQgWgEABgcg");
	this.shape_202.setTransform(87.7365,168.7562);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#00FFCC").s().p("AhJA3QBAg3AchXQA+gOgHAmQgKBcgzAdIgBAIQgnADgUAXQgegCAEgjg");
	this.shape_203.setTransform(87.6869,184.5847);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#00FFCC").s().p("AhFA0QA6g6AihSQA1gMgFAgQgFBQgpAbIABAKQgtAJgTAjIgEAAQgiAAAHgpg");
	this.shape_204.setTransform(87.6458,200.3909);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#00FFCC").s().p("AhBAxQA0g/AohMQAtgKgFAaQAABHgeAXIACAMQgyAPgSAuIgIABQglAAAJgtg");
	this.shape_205.setTransform(87.6062,216.211);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#00FFCC").s().p("Ag+AtIBdiJQAkgIgDAVQAEA7gTAWIAEAOQg4AUgRA6IgMABQgpAAALgyg");
	this.shape_206.setTransform(87.5673,232.0158);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#00FFCC").s().p("Ag8AqQAphIA0hAQAcgGgCAQQAJAvgJAUIAFARQg+AYgPBHQgKACgHAAQgrAAANg3g");
	this.shape_207.setTransform(87.745,247.8552);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#00FFCC").s().p("AhBAmQAkhMA4g6QAUgEAAALQAOAjACASIAGATQhEAegOBTQgMACgJAAQguAAAPg8g");
	this.shape_208.setTransform(88.5649,263.7113);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#00FFCC").s().p("AhFAiQAehRA+gzQAMgCABAFIAfAoQAEAJAEAMQhKAkgNBeQgOAEgLAAQgxAAARhCg");
	this.shape_209.setTransform(89.3356,279.5562);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#00FFCC").s().p("AhKAfQAZhVBEguIAFAAIAvAaIAJAYQhPAqgNBpQgQAEgNAAQg0AAAThGg");
	this.shape_210.setTransform(90.1467,295.3964);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#00FFCC").s().p("AhKAWQAXhNA9gqIAKgBIAqAXQALAQAEAWQhHAugTBaIgLAAQg/AAANhNg");
	this.shape_211.setTransform(90.1893,318.0983);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#00FFCC").s().p("AhJALQAVhFA2gmIAQgCIAlAUQAQAWAEAeQg+A0gbBKQg/gJAEhQg");
	this.shape_212.setTransform(90.1408,340.95);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#00FFCC").s().p("AhIAAQATg8AwgiIAUgEIAhASQAVAbAEAmQg1A6giA5Qg0gWgGhOg");
	this.shape_213.setTransform(90.05,363.8);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#00FFCC").s().p("AhHgKQARg1AqgeIAZgGIAcAPQAcAiADAvQgtA+goApQgpgkgRhKg");
	this.shape_214.setTransform(89.925,386.675);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#00FFCC").s().p("AhFgWQAPgtAjgZIAegHIAXAMQAhAnADA3QgjBFgwAYQgegygahIg");
	this.shape_215.setTransform(89.8,409.575);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#00FFCC").s().p("AhEghQAOgkAcgWIAjgIIATAJQAnAtACBAQgbBKg3AHQgShBglhEg");
	this.shape_216.setTransform(89.675,432.45);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#00FFCC").s().p("AgMBkQgIhOguhCQALgcAWgRIAogKIAOAGQAsAzACBIQgQBGgzAAIgMAAg");
	this.shape_217.setTransform(89.575,455.346);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#00FFCC").s().p("AgMBhQAEhcg5g/QAKgUAPgNIAtgLIAKADQAyA5ABBQQgHBBgrAAQgNAAgPgGg");
	this.shape_218.setTransform(89.425,478.4706);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#00FFCC").s().p("AgMBeQAOhqhBg9QAHgLAIgJIAzgNIAFABQA3A+ABBZQAAA9gkAAQgQAAgYgNg");
	this.shape_219.setTransform(89.325,501.7182);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#00FFCC").s().p("AgMBXQAMhhg7g4QAKgQAPgKQAfgIAVABQgHABgBAHQAyA5AABRQgBA2ggAAQgQAAgXgOg");
	this.shape_220.setTransform(88.95,522.7444);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#00FFCC").s().p("AgMBSQAMhYg3gzQAOgWAVgLQAjgJASAIQgQADgFAOQAsAzAABJQgCAugcAAQgQAAgWgOg");
	this.shape_221.setTransform(88.5753,543.5704);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#00FFCC").s().p("AgMBOQALhPgygvQARgaAcgNQAogLAOARQgZAEgIAUQAmAtgCBCQgCAmgYAAQgPAAgWgOg");
	this.shape_222.setTransform(88.2028,564.3152);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#00FFCC").s().p("AgUBKQAKhIgsgpQAUgfAigOQAugMAJAYQgiAFgMAbQAhAogDA5QgCAggVAAQgOAAgWgPg");
	this.shape_223.setTransform(88.6,585.0572);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#00FFCC").s().p("AgeBGQAJg/gngkQAXgkAogPQAzgOAHAgQgsAGgPAiQAbAhgEAyQgDAYgRAAQgMAAgXgPg");
	this.shape_224.setTransform(89.2,605.8031);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#00FFCC").s().p("AgnBCQAHg3ghgfQAagoAugRQA5gPADAoQg1AHgSAoQAUAcgFAqQgDARgNAAQgMAAgWgQg");
	this.shape_225.setTransform(89.8,626.5688);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#00FFCC").s().p("AgxA9QAGgtgcgaQAeguA1gSQA9gQgBAvQg+AIgWAuQAPAXgFAiQgDALgKAAQgMAAgWgSg");
	this.shape_226.setTransform(90.3768,647.3232);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#00FFCC").s().p("Ag7A5QAFglgWgVQAggzA8gTQBCgSgFA3QhGAJgaA1QAKARgHAbQgDAEgGAAQgLAAgXgTg");
	this.shape_227.setTransform(90.9925,668.142);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#00FFCC").s().p("AhFAzQADgcgQgRQAkg3BBgUQBIgTgJA+QhQAKgdA8QAEAMgHASIgEABQgLAAgYgYg");
	this.shape_228.setTransform(91.625,689.0414);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#00FFCC").s().p("AhPAsQACgTgLgNQAng7BIgWQBNgVgNBHQhXALgiBCQgCAGgJALQgKgEgYgbg");
	this.shape_229.setTransform(92.2189,710.084);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#00FFCC").s().p("AhZAkQABgKgGgIQAqhABPgXQBSgWgRBOQhhAMglBJIgRADQgMgOgSgZg");
	this.shape_230.setTransform(92.871,731.183);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#00FFCC").s().p("AhKBGIgaguIAAgFQAthFBWgYQBXgYgVBWQhqAMgpBQQgNgEgLgGg");
	this.shape_231.setTransform(93.5205,752.7717);
	this.shape_231._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_189}]}).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_210}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape_215}]},1).to({state:[{t:this.shape_216}]},1).to({state:[{t:this.shape_217}]},1).to({state:[{t:this.shape_218}]},1).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_221}]},1).to({state:[{t:this.shape_222}]},1).to({state:[{t:this.shape_223}]},1).to({state:[{t:this.shape_224}]},1).to({state:[{t:this.shape_225}]},1).to({state:[{t:this.shape_226}]},1).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_230}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_231}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_231).wait(42).to({_off:false},0).wait(12));

	// confeti12
	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#0099FF").s().p("AgPAeQARgdgSgZQANgTAPARQAKAegKAbQgIAEgGAAQgHAAgGgFg");
	this.shape_232.setTransform(103.275,5.9619);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#0099FF").s().p("AgNAeQAOgagRgYQAMgTAPANQALAagJAaQgLAGgHAAQgFAAgDgCg");
	this.shape_233.setTransform(105.9275,14.0517);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#0099FF").s().p("AgRgQQALgUARAJQAMAXgIAZQgRAJgKAAQAMgXgRgXg");
	this.shape_234.setTransform(108.585,22.2103);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#0099FF").s().p("AgRgLQAKgWARAGQANATgHAYIgbAOQAJgUgPgVg");
	this.shape_235.setTransform(111.2475,30.394);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#0099FF").s().p("AgSgHQAJgWASABQAOAPgGAYQgTAKgIAIQAGgQgOgUg");
	this.shape_236.setTransform(113.915,38.5228);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#0099FF").s().p("AgTgDQAJgXATgCQAPALgFAXQgVALgGAMQACgNgNgTg");
	this.shape_237.setTransform(116.5875,46.65);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#0099FF").s().p("AgUABQAJgXATgHQAQAIgEAWQgVAMgGARQAAgLgNgSg");
	this.shape_238.setTransform(119.24,54.725);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#0099FF").s().p("AgVAGQAIgYAUgLQARAEgDAXQgWAMgFAUIgPgYg");
	this.shape_239.setTransform(121.9225,62.8);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#0099FF").s().p("AgWAKQAIgYAUgPQASAAgCAWQgYAMgDAZQgHgDgKgRg");
	this.shape_240.setTransform(124.61,70.9);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#0099FF").s().p("AgXAPQAHgZAVgTQATgEgBAWQgZANgCAdQgKgBgJgPg");
	this.shape_241.setTransform(127.3025,78.9692);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#0099FF").s().p("AgYAUQAHgaAVgXQAVgIAAAWQgaAOgCAgIgEABQgKAAgHgMg");
	this.shape_242.setTransform(130,87.0111);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#0099FF").s().p("AgYAUQAJgZATgXQAUgJABAWQgZAQgDAfIgDAAQgLAAgHgMg");
	this.shape_243.setTransform(130,105.7925);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#0099FF").s().p("AgYAUQAMgYAQgZQAUgIABAWQgWASgGAdIgDAAQgLAAgHgMg");
	this.shape_244.setTransform(129.975,124.5643);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#0099FF").s().p("AgYAUQAPgWAMgaQAUgJACAWQgUAUgIAbIgCAAQgNAAgGgMg");
	this.shape_245.setTransform(129.975,143.3479);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#0099FF").s().p("AgYAUQASgVAJgbQATgJADAWQgRAWgLAZIgCAAQgNAAgGgMg");
	this.shape_246.setTransform(129.95,162.1479);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#0099FF").s().p("AgYAUQAVgUAFgdQAUgJADAWIgcAwIgBAAQgPAAgFgMg");
	this.shape_247.setTransform(129.95,180.9203);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#0099FF").s().p("AgYATQAXgTADgdQAUgJADAWQgMAbgPAVQgRAAgFgNg");
	this.shape_248.setTransform(129.925,199.7068);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#0099FF").s().p("AgYAUQAZgTAAgeQAUgJAEAWQgJAdgSAUQgRgBgFgMg");
	this.shape_249.setTransform(129.925,218.484);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#0099FF").s().p("AgZATQAdgRgDgfQATgKAGAXQgHAfgVASQgSgBgFgNg");
	this.shape_250.setTransform(129.9,237.2712);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#0099FF").s().p("AgUAbQgDgEgCgFQAbgSAAgdIADgBQAFgCAEABQAIACADAMIABACQgKAagRAUIgCABQgKAAgHgFg");
	this.shape_251.setTransform(128.35,256.33);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#0099FF").s().p("AgUAaQgEgEgBgFQAZgTADgbIADgBQAFgBAEABQAIACADALIAAACQgNAYgPAVIgCABIgCABQgJAAgFgGg");
	this.shape_252.setTransform(126.825,275.4021);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#0099FF").s().p("AgVAaQgEgFgBgGQAYgUAGgYIADgBQAFgBAEACQAIACADALIgBACIgdAsIgCABIgDAAQgJAAgEgFg");
	this.shape_253.setTransform(125.275,294.4509);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#0099FF").s().p("AgXAZQgDgEAAgHQAVgVAKgWIADgBQAFAAAEACQAIADACAKIgBACQgSATgMAXIgCACIgDAAQgJAAgFgGg");
	this.shape_254.setTransform(123.775,313.5067);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#0099FF").s().p("AgYAZQgCgFgBgGQAUgXANgTIADgCQAFABAEACQAIADACAKIgCACQgVAQgKAaIgCABIgDAAQgJAAgFgGg");
	this.shape_255.setTransform(122.225,332.5313);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#0099FF").s().p("AgYAYQgDgFAAgGQASgYAQgRIADgBIAJADQAIAEABAJIgCACQgYANgIAbIgCABIgEAAQgJAAgDgGg");
	this.shape_256.setTransform(120.675,351.5875);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#0099FF").s().p("AgaAYQgCgFAAgIQAQgZATgOIADgBQAGABAEADQAHAEACAJIgDABQgaAMgHAcIgCABIgFAAQgJAAgDgGg");
	this.shape_257.setTransform(119.1708,370.62);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#0099FF").s().p("AgbAYQgCgGABgHQAPgcAYgMQAGACAEADQAHAFABAJQgfAJgGAeIgHABQgIAAgEgGg");
	this.shape_258.setTransform(117.62,389.649);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#0099FF").s().p("AgYAVQgCgEAAgHIAAgBQANgYAVgLIAEgCQAFACAEADIABACQAGAEAAAHQgcAJgHAcIAAABIgEABQgKAAgDgIg");
	this.shape_259.setTransform(118.55,407.0612);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#0099FF").s().p("AgWATQgCgEgBgGIAAAAQANgZAUgKIAEgBQAFACADADIACABQAEAEAAAHQgYAJgJAcIAAAAIgBABQgKAAgEgJg");
	this.shape_260.setTransform(119.5278,424.4514);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#0099FF").s().p("AgHAaQgJgBgEgIQgCgDgBgGIAAgBQAMgXAUgJIADAAQAFABADACIACACQADADgBAHQgVAKgKAag");
	this.shape_261.setTransform(120.4725,441.9);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#0099FF").s().p("AgTAPIgDgIIAAAAQAMgXASgIIAEgBIAIAFIABAAQADADgCAIQgRAJgMAaQgHgDgFgIg");
	this.shape_262.setTransform(121.4818,459.325);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#0099FF").s().p("AgIAYQgFgEgEgHIgEgHIAAgBQALgWASgHIAEAAIAHAEIABAAQADADgEAHQgNAKgOAZg");
	this.shape_263.setTransform(122.4521,476.8);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#0099FF").s().p("AgIAXIgHgNIgEgGQAKgWARgGIAEABIAGAEIACAAQABACgEAIQgKAJgPAZIAAgCg");
	this.shape_264.setTransform(123.4705,494.225);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#0099FF").s().p("AgSADQAJgVARgFQAGABAFADQACADgdAoQgBgMgJgJg");
	this.shape_265.setTransform(124.4588,511.675);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#0099FF").s().p("AgSAAQADgIAGgFIAFgEQAGgDAHgBQAFADAFADQABADgHAMIgEAEIgIAIIgIAKQgCgMgJgKg");
	this.shape_266.setTransform(124.3625,525.35);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#0099FF").s().p("AgTgCQAEgKAHgEIAGgCQAGgCAGACQAFADAEAEQACAEgHALIgFAFQgEAEgFADIgGAEQgCgNgLgJg");
	this.shape_267.setTransform(124.2641,539.0375);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#0099FF").s().p("AgFATQgDgOgLgJQAEgLAHgDIAIgBQAFABAGADQAFAEADAFQACAFgGALIgFAFQgFAEgFABQgBgBgEAAg");
	this.shape_268.setTransform(124.1661,552.625);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#0099FF").s().p("AgFAPQgCgOgMgKQAEgMAIgBIAIAAQAGADAGAFIAHALQABAFgEAMIgHAFQgFAEgFAAQAAgFgFgDg");
	this.shape_269.setTransform(124.0938,566.4167);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#0099FF").s().p("AgBAaQABgIgEgGQgCgNgNgLQAEgNAIgBIAJACQAHAFAFAGIAGANQABAHgDALQgEADgEACQgFAEgFAAIgBgBg");
	this.shape_270.setTransform(123.9975,580.16);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#0099FF").s().p("AgDAeQADgLgDgJQgDgOgOgMQAEgOAKABQAFAAAFADQAGAHAEAJIAGANQABAJgCALIgJAFQgEACgGAAIgDAAg");
	this.shape_271.setTransform(123.9031,593.8946);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#0099FF").s().p("AgEAhQAIghgYgUQAEgPAKACQAGABAFADQASAcgDAbQgFAEgEACQgEACgFAAIgGgBg");
	this.shape_272.setTransform(123.8035,607.6575);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#0099FF").s().p("AgEAhQAGgegVgRQADgRALgCQAFABAGADQAQAXgCAZQgHAHgCAFQgFADgFAAIgFgBg");
	this.shape_273.setTransform(120.2358,626.9721);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#0099FF").s().p("AgGAgQAFgZgSgPQACgUAMgFQAFAAAFADQAQAUgBAVQgKAKAAAJQgFAEgFAAQgCAAgEgCg");
	this.shape_274.setTransform(116.653,646.305);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#0099FF").s().p("AgHAgQAEgVgQgNQABgWAOgJQAEAAAGACQAOAQAAASQgNANACAOQgFAEgEAAQgDAAgEgCg");
	this.shape_275.setTransform(113.1,665.613);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#0099FF").s().p("AgIAgQACgQgNgMQABgZAOgMQAFAAAFACQANAMABAQQgQAOAFASQgGAFgFAAQgDAAgDgCg");
	this.shape_276.setTransform(109.5,684.906);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#0099FF").s().p("AgIAgQgBgMgKgKQAAgbAPgQQAFAAAFABQALAIADANQgTASAIAVQgHAGgFAAQgDAAgCgCg");
	this.shape_277.setTransform(105.95,704.2143);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#0099FF").s().p("AgKAgQgCgIgHgIQgBgdARgUQAFgBAEACQAKAEAEAKQgUAUAIAaQgHAGgFAAQgDAAgDgCg");
	this.shape_278.setTransform(102.3721,723.5276);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#0099FF").s().p("AgLAgQgEgEgEgGQgCggASgXQAFgBAEABQAIABAGAGQgXAZAKAcQgHAHgFAAQgDAAgDgCg");
	this.shape_279.setTransform(98.8147,742.8309);
	this.shape_279._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_232}]}).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_239}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_241}]},1).to({state:[{t:this.shape_242}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_244}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_246}]},1).to({state:[{t:this.shape_247}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_249}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_251}]},1).to({state:[{t:this.shape_252}]},1).to({state:[{t:this.shape_253}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_255}]},1).to({state:[{t:this.shape_256}]},1).to({state:[{t:this.shape_257}]},1).to({state:[{t:this.shape_258}]},1).to({state:[{t:this.shape_259}]},1).to({state:[{t:this.shape_260}]},1).to({state:[{t:this.shape_261}]},1).to({state:[{t:this.shape_262}]},1).to({state:[{t:this.shape_263}]},1).to({state:[{t:this.shape_264}]},1).to({state:[{t:this.shape_265}]},1).to({state:[{t:this.shape_266}]},1).to({state:[{t:this.shape_267}]},1).to({state:[{t:this.shape_268}]},1).to({state:[{t:this.shape_269}]},1).to({state:[{t:this.shape_270}]},1).to({state:[{t:this.shape_271}]},1).to({state:[{t:this.shape_272}]},1).to({state:[{t:this.shape_273}]},1).to({state:[{t:this.shape_274}]},1).to({state:[{t:this.shape_275}]},1).to({state:[{t:this.shape_276}]},1).to({state:[{t:this.shape_277}]},1).to({state:[{t:this.shape_278}]},1).to({state:[{t:this.shape_279}]},1).to({state:[{t:this.shape_279}]},1).to({state:[{t:this.shape_279}]},1).to({state:[{t:this.shape_279}]},1).to({state:[{t:this.shape_279}]},1).to({state:[{t:this.shape_279}]},1).to({state:[{t:this.shape_279}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_279).wait(47).to({_off:false},0).wait(7));

	// confeti11
	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#FF6699").s().p("AgVAeQASgcgSgZQASgYAUAYQALAcgLAZQgKAGgJAAQgJAAgKgGg");
	this.shape_280.setTransform(120.275,5.4375);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#FF6699").s().p("AgPAjQAJgggSgfQAPgYAZAVQAJAjAAAbQgKALgMAAQgIAAgKgHg");
	this.shape_281.setTransform(120.275,18.178);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#FF6699").s().p("AgKAnQgCgjgRgmQALgXAdARQAIAsALAbQgJARgNAAQgIAAgKgJg");
	this.shape_282.setTransform(120.55,30.9132);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#FF6699").s().p("AgHAsQgLgmgRgsQAIgXAjAOQAFAyAXAdQgJAWgOAAQgJAAgLgKg");
	this.shape_283.setTransform(120.825,43.6481);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#FF6699").s().p("AgDAxQgVgpgRgzQAGgYAnALQADA7AjAdQgJAcgPAAQgKAAgLgLg");
	this.shape_284.setTransform(121.1,56.3735);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#FF6699").s().p("AAAA2QgegsgQg6QACgXAsAIQABBBAuAfQgIAhgQAAQgKAAgNgMg");
	this.shape_285.setTransform(121.375,69.0875);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#FF6699").s().p("AAEA7QgogwgPhAQgCgXAyAFQAABJA4AgQgHAngSAAQgKAAgOgOg");
	this.shape_286.setTransform(121.6478,81.7761);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#FF6699").s().p("AAIBBQgygzgPhHQgFgXA3ACQgCBQBDAhQgGAtgSAAQgLAAgPgPg");
	this.shape_287.setTransform(121.908,94.4492);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#FF6699").s().p("AAKBEQgsg4gZg/QgFgfA5AGQAFBMA+AiQgDAsgWAAQgKAAgPgKg");
	this.shape_288.setTransform(120.3797,106.3459);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#FF6699").s().p("AAMBGQgmg8gjg4QgFgnA6ALQANBHA5AiQgBAugZAAQgKAAgOgHg");
	this.shape_289.setTransform(118.83,118.2563);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#FF6699").s().p("AAOBJQghhBgsgwQgFgwA7AQQAVBBA0AlQACAvggAAQgJAAgLgEg");
	this.shape_290.setTransform(117.3072,130.1708);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#FF6699").s().p("AAPBMQgahHg2gpQgFg3A8AUQAeA8AtAmQAGAygqAAIgOgBg");
	this.shape_291.setTransform(115.8152,142.1537);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#FF6699").s().p("AARBOQgVhMg/ghQgGhAA9AZQAnA3AoAnQALA2g8AAIgBAAg");
	this.shape_292.setTransform(114.3113,154.1721);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#FF6699").s().p("AhFgbQgGhIA+AeQAvAyAiAoQAPAzhAAHQgRhPhHgbg");
	this.shape_293.setTransform(112.8402,166.2463);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#FF6699").s().p("AhIgXQgGhQA/AiQA4AsAcAqQATAwhEAPQgLhUhRgTg");
	this.shape_294.setTransform(111.3554,178.3302);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#FF6699").s().p("AhKgUQgHhXBBAmQA/AnAYAsQAXAshJAXQgFhZhagMg");
	this.shape_295.setTransform(109.8993,190.4023);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#FF6699").s().p("AhKgdQADhCBDAgQBBAwAMAkQAMAmhHAPQgKhWhOgRg");
	this.shape_296.setTransform(109.6802,205.4138);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#FF6699").s().p("AhKgmQALgsBFAZQBEA5AAAdQABAehGAIQgOhShBgXg");
	this.shape_297.setTransform(109.5502,220.4221);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#FF6699").s().p("AhLgwQAUgWBHATQBFBAgKAYQgLAXhDAAQgVhOgzgeg");
	this.shape_298.setTransform(109.5689,235.4025);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#FF6699").s().p("AgOA2QgZhLgngjQAdAABKAMQBHBJgWARQgPALgkAAQgRAAgUgDg");
	this.shape_299.setTransform(109.6852,250.3187);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#FF6699").s().p("AgaA0QgfhIgYgpQAlAWBMAFQBJBSghAKQgNAEgRAAQgcAAgogKg");
	this.shape_300.setTransform(109.9161,264.8555);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#FF6699").s().p("AgmAvQgkhDgLgvQAuAsBOgCQBLBbgtACIgIAAQgqAAg5gVg");
	this.shape_301.setTransform(110.157,279.587);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#FF6699").s().p("ABDBNQg4gFg9gfQgphAACg1QA3BCBRgJQBIBggwAAIgEAAg");
	this.shape_302.setTransform(110.4332,294.5346);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#FF6699").s().p("ABCBVQhCgMg9gnQgvg8AQg7QBABXBTgOQBHBigxAAIgLgBg");
	this.shape_303.setTransform(110.5595,309.4797);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#FF6699").s().p("ABCBdQhNgTg8gvQgzg4AdhBQBIBtBWgWQBFBmgyAAQgIAAgKgCg");
	this.shape_304.setTransform(110.5777,324.4995);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#FF6699").s().p("ABDBkQhZgZg6g3Qg5g1ArhGQBRCCBYgcQBEBpgzAAQgKAAgPgEg");
	this.shape_305.setTransform(110.5414,339.4875);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#FF6699").s().p("ABABOQhNgOg2gpQg1goAdg+QBRBmBHgeQBHBXgzAAQgHAAgKgCg");
	this.shape_306.setTransform(108.9629,366.5668);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#FF6699").s().p("AA+A3QhBgDgzgbQgxgaAQg2QBRBKA2ggQBNBFg6AAIgFgBg");
	this.shape_307.setTransform(107.3338,393.706);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#FF6699").s().p("AgnAZQgugNACgtQBSAuAmgiQBPAsg2AIQgVADgTAAQggAAgdgJg");
	this.shape_308.setTransform(105.5791,421.0238);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#FF6699").s().p("AhMgIQBQASAWglQBQASgsARQgrAUgqAAQgqAAgLgkg");
	this.shape_309.setTransform(103.6942,448.1);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#FF6699").s().p("AhGAQQBQgJAFgnQBPgLgfAfQggAegmANQgNAFgLAAQgXAAgQgUg");
	this.shape_310.setTransform(101.849,475.1091);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#FF6699").s().p("AhBAtQBPgmgLgpQBPgmgUAqQgVApgjAbQgSAPgVAAQgQAAgQgIg");
	this.shape_311.setTransform(100.0612,501.823);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#FF6699").s().p("Ag9BIQBQhCgagrQBNhCgJA1QgJA0gfApQgXAfgkAAQgLAAgMgCg");
	this.shape_312.setTransform(98.3418,528.6269);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#FF6699").s().p("Ag6BiQBQhegrguQBNhdACBBQADBAgcA1QgZAzg6AAIgIAAg");
	this.shape_313.setTransform(96.7604,555.5899);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#FF6699").s().p("AgmgvQBNh5AOBMQAOBLgYBDQgXBEhNAFQBPh7g8gvg");
	this.shape_314.setTransform(95.4829,582.6459);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#FF6699").s().p("Ag6BsQBRhpg1gxQBPhnAIBHQAIBGgbA7QgZA5hAAAIgHAAg");
	this.shape_315.setTransform(93.8151,601.4111);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#FF6699").s().p("Ag7BcQBShWgtgzQBQhWACBCQACBBgeA1QgZAqgsAAQgLAAgLgDg");
	this.shape_316.setTransform(92.2312,620.2499);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#FF6699").s().p("Ag+BMQBUhFglg1QBRhDgDA9QgEA7giAtQgXAegfAAQgPAAgSgGg");
	this.shape_317.setTransform(90.7321,639.1888);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#FF6699").s().p("AhBA6QBWgygeg3QBTgygJA4QgKA3gmAlQgTAVgXAAQgTAAgVgOg");
	this.shape_318.setTransform(89.2733,658.205);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#FF6699").s().p("AhEApQBYghgXg5QBVgggQAzQgQAygpAeQgQAMgRAAQgWAAgWgVg");
	this.shape_319.setTransform(87.8689,677.2862);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#FF6699").s().p("AhHAXQBZgPgQg6QBXgPgVAuQgWAugsAVQgNAHgNAAQgaAAgVggg");
	this.shape_320.setTransform(86.438,696.3428);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#FF6699").s().p("AhLAHQBbADgIg8QBYACgbAqQgcApgvAOQgJACgIAAQgiAAgSgsg");
	this.shape_321.setTransform(85.051,715.241);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#FF6699").s().p("AhOgHQBcAUgBg+QBbAUgiAkQgiAkgyAHIgJAAQgqAAgNg5g");
	this.shape_322.setTransform(83.6775,734.0298);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#FF6699").s().p("AgWAyQg2gBgGhIQBeAmAHhAQBbAmgnAeQgnAfgzAAIgDAAg");
	this.shape_323.setTransform(82.3205,752.9265);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#FF6699").s().p("AgfAxQg5gJAChQQBgA4AOhCQBdA2gtAbQgjAUgoAAQgNAAgPgCg");
	this.shape_324.setTransform(80.9663,771.9375);
	this.shape_324._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_280}]}).to({state:[{t:this.shape_281}]},1).to({state:[{t:this.shape_282}]},1).to({state:[{t:this.shape_283}]},1).to({state:[{t:this.shape_284}]},1).to({state:[{t:this.shape_285}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_287}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_289}]},1).to({state:[{t:this.shape_290}]},1).to({state:[{t:this.shape_291}]},1).to({state:[{t:this.shape_292}]},1).to({state:[{t:this.shape_293}]},1).to({state:[{t:this.shape_294}]},1).to({state:[{t:this.shape_295}]},1).to({state:[{t:this.shape_296}]},1).to({state:[{t:this.shape_297}]},1).to({state:[{t:this.shape_298}]},1).to({state:[{t:this.shape_299}]},1).to({state:[{t:this.shape_300}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_302}]},1).to({state:[{t:this.shape_303}]},1).to({state:[{t:this.shape_304}]},1).to({state:[{t:this.shape_305}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_308}]},1).to({state:[{t:this.shape_309}]},1).to({state:[{t:this.shape_310}]},1).to({state:[{t:this.shape_311}]},1).to({state:[{t:this.shape_312}]},1).to({state:[{t:this.shape_313}]},1).to({state:[{t:this.shape_314}]},1).to({state:[{t:this.shape_315}]},1).to({state:[{t:this.shape_316}]},1).to({state:[{t:this.shape_317}]},1).to({state:[{t:this.shape_318}]},1).to({state:[{t:this.shape_319}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_321}]},1).to({state:[{t:this.shape_322}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_324}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_324).wait(44).to({_off:false},0).wait(10));

	// confeti10
	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#FFFF00").s().p("AgGAOQAHgNgIgLQAGgJAGAIQAFANgFAMQgDACgCAAQgDAAgDgCg");
	this.shape_325.setTransform(137.6625,4.6936);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#FFFF00").s().p("AgHAQIAAAAIACgDQAFgNgIgMQAHgKAHAJIAAABQAFAOgEAMIgBACIgBAAQgEACgCAAQgDAAgDgCg");
	this.shape_326.setTransform(137.8266,14.3061);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#FFFF00").s().p("AgIASIABgEQAHgOgJgOQAHgKAIAJIABABQAFAPgEAOIgBACIgBABQgEACgDAAQgEAAgDgCg");
	this.shape_327.setTransform(138.0139,23.9619);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#FFFF00").s().p("AgJAUIAAAAIACgEQAHgQgKgPQAIgMAJAKIAAACQAGARgEAPIgBACIgBABQgFACgDAAQgEAAgEgCg");
	this.shape_328.setTransform(138.1714,33.5674);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#FFFF00").s().p("AgJAWIgBAAIACgEQAJgSgMgRQAJgMAKALIAAABQAHATgFAQIgBADIgBABQgGADgEAAQgEAAgDgDg");
	this.shape_329.setTransform(138.3337,43.1866);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#FFFF00").s().p("AgLAYIAAgBIACgEQAJgTgMgSQAKgOAKAMIABABQAHAVgGASIgBADIgBABQgFADgEAAQgFAAgFgDg");
	this.shape_330.setTransform(138.521,52.8106);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#FFFF00").s().p("AgLAaIgBgBIACgEQALgVgOgUQAKgPAMANIABABQAHAWgFAUIgCAEIgBAAQgGAEgFAAQgFAAgEgDg");
	this.shape_331.setTransform(138.6792,62.4546);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#FFFF00").s().p("AgNAcIAAgBIACgFQALgWgOgVQALgQAMANIABACQAIAYgGAVIgBAEIgBABQgHADgFAAQgFAAgGgDg");
	this.shape_332.setTransform(138.8664,72.0786);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#FFFF00").s().p("AgNAeIgBgBIADgFQAMgYgQgXQAMgRANAPIABABQAIAagGAWIgBAFIgBABQgIADgFAAQgGAAgFgDg");
	this.shape_333.setTransform(139.0286,81.6978);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#FFFF00").s().p("AgOAgIgBgBIADgFQANgbgRgYQANgSANAPIACACQAJAcgHAYIgBAEIgBABQgIAEgGAAQgGAAgGgDg");
	this.shape_334.setTransform(139.1863,91.3031);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#FFFF00").s().p("AgPAiIgBgBIADgGQAOgcgSgZQANgTAPAPIABACQAKAdgHAaIgCAFIgBABQgIAFgGAAQgHAAgGgEg");
	this.shape_335.setTransform(139.3735,100.9583);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#FFFF00").s().p("AgRAjIADgGQAPgegTgbQAOgVARAUQAKAfgHAbIgDAGQgJAFgGAAQgIAAgHgFg");
	this.shape_336.setTransform(139.5357,110.5745);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#FFFF00").s().p("AgOAjIACgGQANgegUgaQANgWASATQAMAegGAcIgCAGQgKAGgHAAQgHAAgGgFg");
	this.shape_337.setTransform(140.8779,126.9604);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#FFFF00").s().p("AgNAkIADgGQALgfgVgZQAMgWATASQANAegFAbIgCAHQgJAFgIAAQgHAAgGgDg");
	this.shape_338.setTransform(142.2579,143.348);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#FFFF00").s().p("AgKAlIACgGQAKgggXgYQALgXAUARQAOAegDAbIgBAHQgKAHgKAAQgFAAgFgDg");
	this.shape_339.setTransform(143.609,159.7368);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#FFFF00").s().p("AgIAlIACgGQAIgggYgXQAKgYAVAQQAQAdgCAcIgBAHQgLAIgJAAQgFAAgFgDg");
	this.shape_340.setTransform(144.9861,176.1306);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#FFFF00").s().p("AgGAmIABgGQAHgigZgWQAJgYAVAPQASAdgBAcIAAAHQgLAJgKAAQgEAAgFgCg");
	this.shape_341.setTransform(146.3757,192.5208);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#FFFF00").s().p("AgFAnIABgHQAGgigagVQAHgZAXAOQATAcABAcIgBAIQgLAKgMAAIgHgBg");
	this.shape_342.setTransform(147.8,208.9395);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#FFFF00").s().p("AgDAnIABgHQAEgigcgUQAHgaAYANQAUAcACAcIAAAIQgMALgMAAIgGgBg");
	this.shape_343.setTransform(149.2,225.3324);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#FFFF00").s().p("AgBAoIABgHQACgjgdgTQAFgbAZAMQAWAbADAdIAAAIQgLANgNAAIgFgBg");
	this.shape_344.setTransform(150.6,241.728);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#FFFF00").s().p("AAAAoIAAgHQACgkgfgSQAFgbAZALQAYAbAEAdIABAIQgLAOgOAAIgFgBg");
	this.shape_345.setTransform(152.025,258.1207);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#FFFF00").s().p("AABApIAAgHQAAglgfgRQADgcAbALQAYAZAHAeIAAAIQgLAPgPAAIgEAAg");
	this.shape_346.setTransform(153.45,274.5224);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#FFFF00").s().p("AACApQACgrgkgRQADgdAcAKQAdAcAFAjQgLARgQAAIgEgBg");
	this.shape_347.setTransform(154.875,290.916);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#FFFF00").s().p("AghgQQADgeAdAGQAeAaAFAiQgQATgQADQAAgpgjgRg");
	this.shape_348.setTransform(153.6,316.875);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#FFFF00").s().p("AgigMQAEgfAdACQAfAWAFAjQgTATgPAHQgBgkgigSg");
	this.shape_349.setTransform(152.375,342.8189);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#FFFF00").s().p("AgjgIQAFghAegBQAeATAFAjIgiAfQgCghgigSg");
	this.shape_350.setTransform(151.1,368.725);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#FFFF00").s().p("AgkgEQAFgiAfgFQAfAPAGAkQgZATgLARQgFgdgggTg");
	this.shape_351.setTransform(149.85,394.65);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#FFFF00").s().p("AgkAAQAEgjAggKQAhAOAEAjQgbAUgKAVQgGgagegTg");
	this.shape_352.setTransform(148.6,420.55);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#FFFF00").s().p("AglADQAFgkAggMQAiAKAEAjQgeAUgIAaQgJgWgcgVg");
	this.shape_353.setTransform(147.35,446.45);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#FFFF00").s().p("AgmAHQAGglAhgQQAhAGAFAlQghAUgGAeQgLgSgbgWg");
	this.shape_354.setTransform(146.075,472.375);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#FFFF00").s().p("AgnALQAGgnAigTQAiADAFAlQgkAUgEAjQgNgPgagWg");
	this.shape_355.setTransform(144.825,498.275);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#FFFF00").s().p("AgnAPQAGgoAigXQAjAAAEAlQgmAVgCAnQgQgLgXgXg");
	this.shape_356.setTransform(143.575,524.175);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#FFFF00").s().p("AgoATQAGgpAkgbQAjgDAEAlQgpAVgBAtQgRgIgWgYg");
	this.shape_357.setTransform(142.325,550.0889);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#FFFF00").s().p("AgpAYQAHgsAlgeQAjgGAEAlQgqAVgBAyQgTgFgVgXg");
	this.shape_358.setTransform(141.05,575.9586);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#FFFF00").s().p("AgqAcQAHgsAlgjQAlgJAEAmQguAWABA1QgVAAgTgZg");
	this.shape_359.setTransform(139.825,601.805);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#FFFF00").s().p("AgrAhQAIguAmgmQAlgNAEAmQgxAXADA6IgFAAQgUAAgQgWg");
	this.shape_360.setTransform(138.55,627.6614);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#FFFF00").s().p("AgqAhQAIguAlgnQAkgMAEAmQgwAXADA6IgFABQgTAAgQgXg");
	this.shape_361.setTransform(136.7,636.9626);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#FFFF00").s().p("AgqAhQAIguAlgnQAkgNAEAnQgvAXACA6IgFABQgTAAgQgXg");
	this.shape_362.setTransform(134.875,646.252);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#FFFF00").s().p("AgpAhQAHgvAlgmQAjgNAEAnQgvAXADA7IgFAAQgTAAgPgXg");
	this.shape_363.setTransform(133.05,655.5626);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#FFFF00").s().p("AgoAiQAGgwAlgnQAkgMADAnQguAXACA7IgFABQgTAAgOgXg");
	this.shape_364.setTransform(131.2,664.8641);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#FFFF00").s().p("AgoAiQAHgwAkgnQAjgNADAnQgtAYACA7IgEABQgTAAgPgXg");
	this.shape_365.setTransform(129.375,674.1533);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#FFFF00").s().p("AgoAiQAHgwAkgnQAigNAEAnQgtAYACA8IgEAAQgTAAgPgXg");
	this.shape_366.setTransform(127.525,683.4546);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#FFFF00").s().p("AgnAiQAHgwAjgoQAigNADAoQgsAYACA8IgEABQgSAAgPgYg");
	this.shape_367.setTransform(125.675,692.7561);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#FFFF00").s().p("AgnAjQAHgxAjgnQAhgOAEAoQgsAZACA8IgEAAQgSAAgPgXg");
	this.shape_368.setTransform(123.85,702.0452);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#FFFF00").s().p("AgmAjQAHgxAigoQAhgNADAoQgrAYACA9IgEAAQgSAAgOgXg");
	this.shape_369.setTransform(122.025,711.3561);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#FFFF00").s().p("AgmAjQAHgxAhgoQAigNADAoQgrAYADA9IgFAAQgSAAgOgXg");
	this.shape_370.setTransform(120.2,720.6452);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#FFFF00").s().p("AgmAkQAHgyAigoQAhgOADApQgqAYABA+IgEAAQgSAAgOgXg");
	this.shape_371.setTransform(118.35,729.9468);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#FFFF00").s().p("AglAkQAHgyAggpQAhgNADApQgpAYACA+IgFAAQgRAAgOgXg");
	this.shape_372.setTransform(116.5,739.2481);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#FFFF00").s().p("AglAkQAHgyAggpQAggOAEApQgqAZADA+IgEAAQgSAAgOgXg");
	this.shape_373.setTransform(114.675,748.5371);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#FFFF00").s().p("AgkAkQAHgyAfgpQAggOADApQgoAZACA/IgEAAQgRAAgOgYg");
	this.shape_374.setTransform(112.825,757.8387);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#FFFF00").s().p("AgjAkQAGgzAfgpQAfgNAEApQgpAZADA/IgEAAQgRAAgNgYg");
	this.shape_375.setTransform(111,767.1493);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#FFFF00").s().p("AgjAlQAGg0AfgpQAfgOADAqQgnAZACA/IgEAAQgRAAgNgXg");
	this.shape_376.setTransform(109.175,776.4387);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#FFFF00").s().p("AgjAlQAHg0AegpQAfgOADAqQgnAZACBAIgEAAQgRAAgNgYg");
	this.shape_377.setTransform(107.325,785.74);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_325}]}).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_328}]},1).to({state:[{t:this.shape_329}]},1).to({state:[{t:this.shape_330}]},1).to({state:[{t:this.shape_331}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_333}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_335}]},1).to({state:[{t:this.shape_336}]},1).to({state:[{t:this.shape_337}]},1).to({state:[{t:this.shape_338}]},1).to({state:[{t:this.shape_339}]},1).to({state:[{t:this.shape_340}]},1).to({state:[{t:this.shape_341}]},1).to({state:[{t:this.shape_342}]},1).to({state:[{t:this.shape_343}]},1).to({state:[{t:this.shape_344}]},1).to({state:[{t:this.shape_345}]},1).to({state:[{t:this.shape_346}]},1).to({state:[{t:this.shape_347}]},1).to({state:[{t:this.shape_348}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_350}]},1).to({state:[{t:this.shape_351}]},1).to({state:[{t:this.shape_352}]},1).to({state:[{t:this.shape_353}]},1).to({state:[{t:this.shape_354}]},1).to({state:[{t:this.shape_355}]},1).to({state:[{t:this.shape_356}]},1).to({state:[{t:this.shape_357}]},1).to({state:[{t:this.shape_358}]},1).to({state:[{t:this.shape_359}]},1).to({state:[{t:this.shape_360}]},1).to({state:[{t:this.shape_361}]},1).to({state:[{t:this.shape_362}]},1).to({state:[{t:this.shape_363}]},1).to({state:[{t:this.shape_364}]},1).to({state:[{t:this.shape_365}]},1).to({state:[{t:this.shape_366}]},1).to({state:[{t:this.shape_367}]},1).to({state:[{t:this.shape_368}]},1).to({state:[{t:this.shape_369}]},1).to({state:[{t:this.shape_370}]},1).to({state:[{t:this.shape_371}]},1).to({state:[{t:this.shape_372}]},1).to({state:[{t:this.shape_373}]},1).to({state:[{t:this.shape_374}]},1).to({state:[{t:this.shape_375}]},1).to({state:[{t:this.shape_376}]},1).to({state:[{t:this.shape_377}]},1).to({state:[{t:this.shape_377}]},1).wait(1));

	// confeti9
	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#33CC33").s().p("AgNAnQgUgcARguQARgTAYAbQgUAkAUAaQgOAJgLAAg");
	this.shape_378.setTransform(153.2595,6.2739);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#33CC33").s().p("AgYghQAZgRAZAQQgOAiATAZQgMAJgKACQgJAHgSAAQgUgbAOgxg");
	this.shape_379.setTransform(152.5739,16.5371);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#33CC33").s().p("AggggQAigPAZAFQgHAfARAYQgKAKgHAEQgNAPgeADQgUgZALg0g");
	this.shape_380.setTransform(151.8943,26.9467);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#33CC33").s().p("AgpgdIBFgTQgBAdAQAXQgHALgGAFQgQAYgqAFQgTgXAGg3g");
	this.shape_381.setTransform(151.1688,37.075);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#33CC33").s().p("AgxgZQA0gKAagTQAFAbAQAYIgKARQgTAgg2AIQgTgVADg6g");
	this.shape_382.setTransform(150.4546,47.15);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#33CC33").s().p("Ag4gUQA8gKAagdQAMAYAPAXIgGAUQgWAphCALQgTgUAAg8g");
	this.shape_383.setTransform(149.675,57.2);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#33CC33").s().p("Ag/gRQBEgHAbgoQASAVAOAWIgCAYQgZAxhNANQgTgSgEhAg");
	this.shape_384.setTransform(148.875,67.275);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#33CC33").s().p("AhHgNQBNgEAbg1QAZAUAMAVIACAbQgcA4hZARQgTgRgHhDg");
	this.shape_385.setTransform(148.175,77.35);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#33CC33").s().p("AhQgJQBVgDAcg/QAfARALAUIAGAeQgfBBhlATQgTgPgKhGg");
	this.shape_386.setTransform(147.575,87.425);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#33CC33").s().p("AhKgTQBNgEAgg2QAYAbAQAZIAAAdQgdA6haAQQgWgTgIhOg");
	this.shape_387.setTransform(147.525,106.3);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#33CC33").s().p("AhHgdQBFgGAkgtQASAmAUAdIgGAfQgaAxhPAOQgbgZgFhVg");
	this.shape_388.setTransform(147.75,125.2);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#33CC33").s().p("AhEgmQA8gJApgkQALAyAZAgQgGAVgGALQgYAphEAMQgegegDhcg");
	this.shape_389.setTransform(148,144.075);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#33CC33").s().p("AhBgvQA0gLAsgcQAGA9AdAjQgJAYgJAKQgWAhg5AKQghgkgBhig");
	this.shape_390.setTransform(148.225,162.95);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#33CC33").s().p("Ag+g5QAsgNAwgSQAABHAhAoQgMAagMAJQgTAYguAHQglgoABhqg");
	this.shape_391.setTransform(148.4487,181.825);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#33CC33").s().p("Ag7hDQAjgPA1gJQgHBTAmArQgQAcgOAIQgRAQgjAFQgoguADhxg");
	this.shape_392.setTransform(148.6611,200.725);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#33CC33").s().p("Ag3hNQAagQA5gBQgNBeAqAwQgSAegSAHQgPAIgXACQgsg0AGh4g");
	this.shape_393.setTransform(148.8894,219.6);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#33CC33").s().p("AgMBiQgwg4AIiAQARgSA+AJQgTBnAuA1QgVAggUAGg");
	this.shape_394.setTransform(149.0861,238.3887);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#33CC33").s().p("AgMBiQgmg/AAh1QASgUA4AGQgPBaAqAsQgMAjgSAYQgIABgJAAIgQAAg");
	this.shape_395.setTransform(148.8247,256.8897);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#33CC33").s().p("AgLBhQgdhGgHhqQASgWAyAEQgKBLAlAlQgCAngQApQgKADgOAAIgRgBg");
	this.shape_396.setTransform(148.525,275.4139);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#33CC33").s().p("AgLBhQgUhNgPhfQATgYAsACQgGA8AgAeQAJApgPA7QgKAFgSAAIgUgBg");
	this.shape_397.setTransform(148.3537,293.9119);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#33CC33").s().p("AgOBhQgJhUgXhUQATgaAmAAQgBAtAbAXQASAtgNBMQgKAGgWAAIgYgBg");
	this.shape_398.setTransform(148.4393,312.3833);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#33CC33").s().p("AgSBgQABhagfhKQAUgcAfgCQAEAeAXAQQAcAxgMBdQgLAJgZAAQgLAAgRgDg");
	this.shape_399.setTransform(148.58,330.8583);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#33CC33").s().p("AgWBhQAKhhgng/QAVgeAagFQAHAQASAIQAmA1gKBuQgLAKgdAAQgNAAgSgCg");
	this.shape_400.setTransform(148.8042,349.3364);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#33CC33").s().p("AgaBgQAThngug1QAVggAUgGIAZABQAwA4gICAQgMAMggAAQgPAAgUgDg");
	this.shape_401.setTransform(149.0139,367.8113);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#33CC33").s().p("AgNBdQAIhag2g2QASgfAWgMQAVAJAUgBQAsA2gIByQgLANgiAAIgagCg");
	this.shape_402.setTransform(146.311,383.0033);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#33CC33").s().p("AAABZQgChLg+g4QAPgeAYgRQAdARAbgDQAoAzgHBlQgMANgjAAIgRgBg");
	this.shape_403.setTransform(143.5842,398.2064);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#33CC33").s().p("AAOBWQgOg8hFg7QAKgdAbgXQAmAaAigFQAkAxgHBXQgMAOgmAAIgFAAg");
	this.shape_404.setTransform(140.8813,413.4281);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#33CC33").s().p("AhLgZQAHgcAegcQAtAjApgHQAhAugHBJQgMAPgjABQgaguhMg9g");
	this.shape_405.setTransform(138.1542,428.675);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#33CC33").s().p("AhQgQQAEgbAfgiQA2AsAwgJQAdAqgGA8QgLAPgcADIh5heg");
	this.shape_406.setTransform(135.4264,443.9);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#33CC33").s().p("AhWgIQABgaAhgnQA/A0A3gKQAZAmgGAwQgJANgVAGQgygQhbhCg");
	this.shape_407.setTransform(132.7004,459.15);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#33CC33").s().p("AhbAAQgDgYAkgtQBHA9A+gNQAVAlgFAhQgIAMgOAJQg+gBhihFg");
	this.shape_408.setTransform(129.9828,474.4);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#33CC33").s().p("AhgAGQgHgWAngyQBPBEBFgNQARAhgEAVIgOAWQgMACgMAAQhBAAhag9g");
	this.shape_409.setTransform(127.2183,489.7566);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#33CC33").s().p("AhgAHQACgXAlgzQBMA/BBgMQAQAggEAUQgIAQgQAOQgKACgLAAQg+AAhVg9g");
	this.shape_410.setTransform(126.1814,511.0118);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#33CC33").s().p("AhgAJQALgYAkg1QBJA6A8gKQAPAegDATQgKAVgZASIgRABQg7AAhRg8g");
	this.shape_411.setTransform(125.0679,532.2439);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#33CC33").s().p("AhfAKQAUgaAig2QBFA0A4gGQAOAbgCATQgLAZgiAXIgOABQg4AAhMg9g");
	this.shape_412.setTransform(123.9823,553.5219);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#33CC33").s().p("AhfALQAdgbAhg3QBCAvAzgFQANAbgBAQQgNAfgrAaIgLABQg0AAhIg9g");
	this.shape_413.setTransform(122.8786,574.7579);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#33CC33").s().p("AhfAMQAmgbAgg5QA+ApAugCQAMAZAAAPQgOAkg0AeIgIAAQgxAAhDg9g");
	this.shape_414.setTransform(121.8,596.021);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#33CC33").s().p("AheANQAugcAfg6QA6AjAqAAQAMAXAAAPQgPApg+AhIgFAAQguAAg9g9g");
	this.shape_415.setTransform(120.725,617.2866);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#33CC33").s().p("AheAOQA3gdAdg8QA3AeAmADQALAVABAPQgRAthGAlIgEAAQgqAAg4g+g");
	this.shape_416.setTransform(119.625,638.5297);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#33CC33").s().p("AheAPQBAgeAcg9QAzAYAiAFQAKATACAPQgTAxhOApIgBAAQgoAAgzg+g");
	this.shape_417.setTransform(118.55,659.8008);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#33CC33").s().p("AheAQQBJgfAag/QAxATAcAIQAJARAEAOQgVA2hXAtQgkgBgtg+g");
	this.shape_418.setTransform(117.475,681.075);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#33CC33").s().p("AhdAQQBSgfAYhAQAtANAYAKQAIAPAEANQgVA7hhAxQgggCglg+g");
	this.shape_419.setTransform(116.375,702.35);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#33CC33").s().p("AhdASQBbghAXhCQAqAJATAMIAMAZQgXBAhpA1QgcgFgfg7g");
	this.shape_420.setTransform(115.275,723.6);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#33CC33").s().p("AhdATQBjgiAXhDQAmACAPAPIAMAXQgYBFhzA4QgYgGgYg6g");
	this.shape_421.setTransform(114.2,744.875);
	this.shape_421._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_378}]}).to({state:[{t:this.shape_379}]},1).to({state:[{t:this.shape_380}]},1).to({state:[{t:this.shape_381}]},1).to({state:[{t:this.shape_382}]},1).to({state:[{t:this.shape_383}]},1).to({state:[{t:this.shape_384}]},1).to({state:[{t:this.shape_385}]},1).to({state:[{t:this.shape_386}]},1).to({state:[{t:this.shape_387}]},1).to({state:[{t:this.shape_388}]},1).to({state:[{t:this.shape_389}]},1).to({state:[{t:this.shape_390}]},1).to({state:[{t:this.shape_391}]},1).to({state:[{t:this.shape_392}]},1).to({state:[{t:this.shape_393}]},1).to({state:[{t:this.shape_394}]},1).to({state:[{t:this.shape_395}]},1).to({state:[{t:this.shape_396}]},1).to({state:[{t:this.shape_397}]},1).to({state:[{t:this.shape_398}]},1).to({state:[{t:this.shape_399}]},1).to({state:[{t:this.shape_400}]},1).to({state:[{t:this.shape_401}]},1).to({state:[{t:this.shape_402}]},1).to({state:[{t:this.shape_403}]},1).to({state:[{t:this.shape_404}]},1).to({state:[{t:this.shape_405}]},1).to({state:[{t:this.shape_406}]},1).to({state:[{t:this.shape_407}]},1).to({state:[{t:this.shape_408}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_410}]},1).to({state:[{t:this.shape_411}]},1).to({state:[{t:this.shape_412}]},1).to({state:[{t:this.shape_413}]},1).to({state:[{t:this.shape_414}]},1).to({state:[{t:this.shape_415}]},1).to({state:[{t:this.shape_416}]},1).to({state:[{t:this.shape_417}]},1).to({state:[{t:this.shape_418}]},1).to({state:[{t:this.shape_419}]},1).to({state:[{t:this.shape_420}]},1).to({state:[{t:this.shape_421}]},1).to({state:[{t:this.shape_421}]},1).to({state:[{t:this.shape_421}]},1).to({state:[{t:this.shape_421}]},1).to({state:[{t:this.shape_421}]},1).to({state:[{t:this.shape_421}]},1).to({state:[{t:this.shape_421}]},1).to({state:[{t:this.shape_421}]},1).to({state:[{t:this.shape_421}]},1).to({state:[{t:this.shape_421}]},1).to({state:[{t:this.shape_421}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_421).wait(43).to({_off:false},0).wait(11));

	// confeti8
	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#FF6699").s().p("AgIAQQAKgQgKgNQAHgJAIAJQAEAPgEAOQgFACgDAAQgDAAgEgCg");
	this.shape_422.setTransform(167.65,3.9561);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#FF6699").s().p("AgLgHQAGgOAKACQAJANgDAQIgQAKQAFgNgLgOg");
	this.shape_423.setTransform(167.774,12.5811);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#FF6699").s().p("AgOgBQAFgSANgEQAMAIgBATQgQALgCAJQACgKgNgPg");
	this.shape_424.setTransform(167.9289,21.0875);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#FF6699").s().p("AgSAEQAEgXAQgJQAQAEABAWQgVAPABAQQgBgIgQgRg");
	this.shape_425.setTransform(168.125,29.675);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#FF6699").s().p("AgVAKQACgbAUgQQATAAACAZQgZASADAYIgVgYg");
	this.shape_426.setTransform(168.325,38.2);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#FF6699").s().p("AgZAQQACgfAXgXQAWgEAEAdQgeAWAGAeQgIgEgTgTg");
	this.shape_427.setTransform(168.5,46.7004);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#FF6699").s().p("AgdAXQABgkAagdQAZgIAHAfQgiAaAHAlQgLgBgVgUg");
	this.shape_428.setTransform(168.725,55.2019);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#FF6699").s().p("AghAeQABgpAdgjQAcgMAJAiQgnAeAKAsIgCAAQgOAAgWgUg");
	this.shape_429.setTransform(168.9,63.657);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#FF6699").s().p("AgkAlQgBgtAggqQAggQAKAlQgqAhAMAzIgGABQgQAAgVgTg");
	this.shape_430.setTransform(169.0967,72.1207);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#FF6699").s().p("AgnAsQgDgzAjgvQAkgUAMAnQgvAlAOA6IgJACQgSAAgUgSg");
	this.shape_431.setTransform(169.2917,80.602);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#FF6699").s().p("AgrAzQgEg3Ang2QAngYAOAqQg0ApARBBQgHACgGAAQgUAAgUgRg");
	this.shape_432.setTransform(169.4854,89.0798);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#FF6699").s().p("AgvA5QgEg7Apg9QArgcAPAuQg4AtAUBHQgKADgIAAQgVAAgUgRg");
	this.shape_433.setTransform(169.6778,97.5621);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#FF6699").s().p("AgtAwQgCg4Aog2QAkgVARAtQg1AsAQA/IgJABQgYAAgVgWg");
	this.shape_434.setTransform(170.2452,111.8157);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#FF6699").s().p("AgrAlQAAgzAmgwQAfgOASAuQgyAqAMA3QgcgBgVgdg");
	this.shape_435.setTransform(170.8,126.1367);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#FF6699").s().p("AgpAbQADgwAkgpQAYgHAUAuQgvAqAIAtQgagGgSgfg");
	this.shape_436.setTransform(171.35,140.4288);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#FF6699").s().p("AgnASQAGgtAhgiQATgBAVAvQgsApAEAlQgZgMgOghg");
	this.shape_437.setTransform(171.9,154.65);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#FF6699").s().p("AglAJQAJgoAfgdQANAGAWAvQgpAoABAcQgYgSgLgig");
	this.shape_438.setTransform(172.45,168.85);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#FF6699").s().p("AgjAAQALglAdgWIAfA8QgmAogDATQgYgXgGglg");
	this.shape_439.setTransform(173.025,183.025);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#FF6699").s().p("AghgIQANgiAcgQQABAVAZAuQgjAngHALQgWgegDglg");
	this.shape_440.setTransform(173.55,197.2);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#FF6699").s().p("AgegSQAPgdAagKQgFAbAaAvQggAngLACQgVgjACgpg");
	this.shape_441.setTransform(174.095,211.4);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#FF6699").s().p("AgNA4QgUgpAFgqQASgaAYgDQgLAiAbAvQgaAggNAAIgEgBg");
	this.shape_442.setTransform(174.6,225.623);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#FF6699").s().p("AgPA1QgTgvAJgrQAVgXAWADQgSAqAdAvQgTAagOAAQgGAAgFgFg");
	this.shape_443.setTransform(175.0554,239.9612);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#FF6699").s().p("AgRAzQgRg0AMgvQAXgSAVAJQgWAxAcAvQgOAWgOAAQgIAAgJgKg");
	this.shape_444.setTransform(175.4896,254.268);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#FF6699").s().p("AgSAxQgRg5ARgxQAZgPATAQQgcA3AeAwQgLASgMAAQgLAAgMgQg");
	this.shape_445.setTransform(175.8875,268.507);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#FF6699").s().p("AgUA0QgSg3APgwQAcgRAVAJQgXAzAcAxQgOAWgPAAQgKAAgMgLg");
	this.shape_446.setTransform(175.1892,285.507);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#FF6699").s().p("AgVA2QgVg0AOgvQAfgTAXAEQgRAuAaAyQgSAagSAAQgKAAgKgIg");
	this.shape_447.setTransform(174.482,302.4509);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#FF6699").s().p("AgXA6QgWgxAMguQAjgVAYgDQgLAqAXAzQgWAegWAAQgJAAgIgEg");
	this.shape_448.setTransform(173.7632,319.3048);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#FF6699").s().p("AgYA+QgYguAKguQAmgXAagJQgEAlAUA0QgbAkgcAAIgLgBg");
	this.shape_449.setTransform(173.0133,336.1634);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#FF6699").s().p("AgZBBQgagrAIguIBGgoQACAhARA1QgiArgjAAIgCAAg");
	this.shape_450.setTransform(172.2795,353.1275);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#FF6699").s().p("AgvgRQAugcAcgVQAJAdAOA2QgmAugmAEQgcgnAHgtg");
	this.shape_451.setTransform(171.5379,370.1);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#FF6699").s().p("Ag0gMQAygdAegbQAOAYAMA3QgpAwgoAKQgegjAFgug");
	this.shape_452.setTransform(170.7888,387.1);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#FF6699").s().p("Ag4gFQA1ggAfghQAVATAJA4QgsAygrAQQgfggAEgsg");
	this.shape_453.setTransform(170.0323,404.1);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#FF6699").s().p("Ag9AAQA4ghAhgoQAcAPAGA6QgvAzgtAXQghgdACgtg");
	this.shape_454.setTransform(169.2693,421.1);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#FF6699").s().p("AhBAGQA8gjAiguQAiAKADA8QgxA1gvAcQgjgaAAgsg");
	this.shape_455.setTransform(168.4997,438.075);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#FF6699").s().p("AhFALQA/gkAkg1QAoAGAAA+Qg0A1gxAkQglgXgBgtg");
	this.shape_456.setTransform(167.725,455.1);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#FF6699").s().p("AhKARQBDgmAmg7QAuABgDA/Qg3A4gzApQgmgUgEgsg");
	this.shape_457.setTransform(166.9091,472.075);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#FF6699").s().p("AhOAXQBGgoAnhBQA1gEgGBAQg5A6g2AvQgogQgFgsg");
	this.shape_458.setTransform(166.1509,489.0659);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#FF6699").s().p("AhTAeQBJgrAphHQA8gIgJBBQg8A8g4A1QgqgNgHgrg");
	this.shape_459.setTransform(165.4031,506.0309);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#FF6699").s().p("AhXAkQBMgtArhNQBBgMgLBCIh5B5QgsgKgIgrg");
	this.shape_460.setTransform(164.6541,522.9755);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#FF6699").s().p("AhXAgQBGgvAthIQBDgIgIBCQg8A9g5A4QgqgRgPgng");
	this.shape_461.setTransform(165.5927,539.2018);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#FF6699").s().p("AhXAbQBAgwAvhCQBFgFgFBDQg6A9g4A0QgngYgWglg");
	this.shape_462.setTransform(166.517,555.4578);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#FF6699").s().p("AhXAYQA5gzAyg8QBGgBgCBEQg3A8g3AxQgkgggdghg");
	this.shape_463.setTransform(167.4543,571.6493);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#FF6699").s().p("AhXAUIBnhsQBIADAABFQgzA7g2AuQgigngkgeg");
	this.shape_464.setTransform(168.4,587.825);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#FF6699").s().p("AhYAQQAug3A2gxQBJAGAEBGQgxA7g1AqQgggvgrgag");
	this.shape_465.setTransform(169.375,604.05);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#FF6699").s().p("AhYAMQAng4A4gsQBMAKAGBHQguA6g0AmQgdg1gygYg");
	this.shape_466.setTransform(170.35,620.225);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#FF6699").s().p("AhYAHQAhg4A7gnQBNANAIBIQgqA5gzAkQgbg9g5gWg");
	this.shape_467.setTransform(171.275,636.4);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#FF6699").s().p("AhZAEQAbg7A+giQBOASALBIQgnA5gyAgQgYhEhBgSg");
	this.shape_468.setTransform(172.25,652.575);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#FF6699").s().p("AhZAAQAUg+BBgbQBPAWAPBHQglA6gyAcQgVhLhHgPg");
	this.shape_469.setTransform(173.225,668.8);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#FF6699").s().p("AhZgDQAOhABDgWQBRAZARBJQghA5gxAYQgThShOgLg");
	this.shape_470.setTransform(174.175,684.975);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#FF6699").s().p("AhZgHQAIhCBFgRQBSAdAUBLQgeA4gwAUQgQhZhVgIg");
	this.shape_471.setTransform(175.125,701.15);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#FF6699").s().p("AhagLQAChDBIgMQBUAhAXBLQgcA3gvASQgOhghcgGg");
	this.shape_472.setTransform(176.075,717.375);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#FF6699").s().p("AhagPQgEhFBKgGQBVAkAaBMQgYA3guAOQgMhnhjgDg");
	this.shape_473.setTransform(177.0371,733.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_422}]}).to({state:[{t:this.shape_423}]},1).to({state:[{t:this.shape_424}]},1).to({state:[{t:this.shape_425}]},1).to({state:[{t:this.shape_426}]},1).to({state:[{t:this.shape_427}]},1).to({state:[{t:this.shape_428}]},1).to({state:[{t:this.shape_429}]},1).to({state:[{t:this.shape_430}]},1).to({state:[{t:this.shape_431}]},1).to({state:[{t:this.shape_432}]},1).to({state:[{t:this.shape_433}]},1).to({state:[{t:this.shape_434}]},1).to({state:[{t:this.shape_435}]},1).to({state:[{t:this.shape_436}]},1).to({state:[{t:this.shape_437}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_439}]},1).to({state:[{t:this.shape_440}]},1).to({state:[{t:this.shape_441}]},1).to({state:[{t:this.shape_442}]},1).to({state:[{t:this.shape_443}]},1).to({state:[{t:this.shape_444}]},1).to({state:[{t:this.shape_445}]},1).to({state:[{t:this.shape_446}]},1).to({state:[{t:this.shape_447}]},1).to({state:[{t:this.shape_448}]},1).to({state:[{t:this.shape_449}]},1).to({state:[{t:this.shape_450}]},1).to({state:[{t:this.shape_451}]},1).to({state:[{t:this.shape_452}]},1).to({state:[{t:this.shape_453}]},1).to({state:[{t:this.shape_454}]},1).to({state:[{t:this.shape_455}]},1).to({state:[{t:this.shape_456}]},1).to({state:[{t:this.shape_457}]},1).to({state:[{t:this.shape_458}]},1).to({state:[{t:this.shape_459}]},1).to({state:[{t:this.shape_460}]},1).to({state:[{t:this.shape_461}]},1).to({state:[{t:this.shape_462}]},1).to({state:[{t:this.shape_463}]},1).to({state:[{t:this.shape_464}]},1).to({state:[{t:this.shape_465}]},1).to({state:[{t:this.shape_466}]},1).to({state:[{t:this.shape_467}]},1).to({state:[{t:this.shape_468}]},1).to({state:[{t:this.shape_469}]},1).to({state:[{t:this.shape_470}]},1).to({state:[{t:this.shape_471}]},1).to({state:[{t:this.shape_472}]},1).to({state:[{t:this.shape_473}]},1).to({state:[{t:this.shape_473}]},1).to({state:[{t:this.shape_473}]},1).wait(1));

	// confeti7
	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#FF6600").s().p("AgZAmQARgrgQglIAzAAQgTArARAmQgMAEgMAAQgNAAgNgFg");
	this.shape_474.setTransform(181.1,7.3008);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#FF6600").s().p("AgjAeQASgrgIgjQAcAOAgAFQgUAoAKAlQgagFgigNg");
	this.shape_475.setTransform(180.8,20.55);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#FF6600").s().p("AgsATQASgqAAggQAfAaAoAKQgWAnADAjQgdgTgpgRg");
	this.shape_476.setTransform(180.5,34);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#FF6600").s().p("Ag1AJQASgqAJgdQAhAmAvAQQgYAkgDAjQggghgwgVg");
	this.shape_477.setTransform(180.2,47.425);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#FF6600").s().p("Ag/gBQASgqASgaQAlAyA1AUQgZAkgKAhQgjgvg4gYg");
	this.shape_478.setTransform(179.9,60.875);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#FF6600").s().p("AhIgLQASgqAbgXQAnA+A8AZQgbAigRAgQglg8g/gcg");
	this.shape_479.setTransform(179.6,74.3);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#FF6600").s().p("AhRgWQASgqAjgTQAqBKBEAfQgdAfgYAfQgohKhGggg");
	this.shape_480.setTransform(179.3,87.75);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#FF6600").s().p("AhaggQASgpArgRQAtBWBLAkIg9A7QgrhXhNgkg");
	this.shape_481.setTransform(179,101.175);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#FF6600").s().p("AhWgSQAVguAlgaQAtBKBGAjQggAigaAmQgrhNhIggg");
	this.shape_482.setTransform(179,116.95);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#FF6600").s().p("AhTgFQAZgxAgglQAsBABCAhQgjAngWAvQgphDhFgeg");
	this.shape_483.setTransform(179,132.7);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#FF6600").s().p("AhQAHIA3hiQAsAzA9AiQgkArgSA3Qgqg6hAgbg");
	this.shape_484.setTransform(179,148.475);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#FF6600").s().p("AhMAVQAhg3ATg6QAtApA4AfQgoAxgMBAQgqgxg7gXg");
	this.shape_485.setTransform(179.025,164.25);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#FF6600").s().p("AhIAhQAkg5AOhEIBfA7QgpA2gIBIQgqgng2gVg");
	this.shape_486.setTransform(179,180);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#FF6600").s().p("AhEAvQAng+AIhNQAsAQAuAeQgrA7gDBQQgpgdgygRg");
	this.shape_487.setTransform(179,195.775);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#FF6600").s().p("AhBA8QArhBAChYQAsAGAqAcQgtBAABBZQgpgUgugOg");
	this.shape_488.setTransform(179,211.525);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#FF6600").s().p("Ag+BKQAvhFgEhhQAtgHAkAbQgvBHAFBgg");
	this.shape_489.setTransform(179,227.2369);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#FF6600").s().p("Ag/A4QAvg+AChaQAmAGAoAkQgvBBgBBWQgjgVgsgUg");
	this.shape_490.setTransform(178.825,248.25);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#FF6600").s().p("AhBAmQAvg4AIhQQAhASArArQgvA+gIBKQgdgfgvgeg");
	this.shape_491.setTransform(178.675,269.225);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#FF6600").s().p("AhDAUQAwgyAOhGQAbAdAuA0QgvA6gPA+QgXgpgygog");
	this.shape_492.setTransform(178.525,290.175);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#FF6600").s().p("AhFACQAxgrATg+QAWAqAxA8QgvA1gVAzQgTgzg0gyg");
	this.shape_493.setTransform(178.35,311.15);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#FF6600").s().p("AhGgOQAwgnAZg0QARA2AzBDQgtAygcAoQgNg+g3g6g");
	this.shape_494.setTransform(178.2,332.1);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#FF6600").s().p("AhIghQAxggAfgqQAKBBA3BMQgtAugiAcQgJhIg5hFg");
	this.shape_495.setTransform(178.025,353.075);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#FF6600").s().p("AhKgyQAygbAkghQAFBOA6BUQgtAqgpARQgDhTg8hOg");
	this.shape_496.setTransform(177.875,374.025);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#FF6600").s().p("AhLhEQAxgVArgXQgBBZA8BcQgsAngwAFQADhdg+hYg");
	this.shape_497.setTransform(177.725,395);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#FF6600").s().p("AgUBzQAIhnhBhiIBjgdQgHBmA/BkQglAdgtAAIgQgBg");
	this.shape_498.setTransform(177.55,415.995);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#FF6600").s().p("AhPhFQA1gUAugaQAABbA8BeQgvAmgzAIQAChfg/hag");
	this.shape_499.setTransform(174.475,432.225);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#FF6600").s().p("AhRg0QA4gaArglQAHBRA5BXQgzAqgwAVQgDhWg9hSg");
	this.shape_500.setTransform(171.4,448.475);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#FF6600").s().p("AhTgjQA7gfApgxQANBGA2BRIhjBQQgKhOg6hJg");
	this.shape_501.setTransform(168.325,464.75);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#FF6600").s().p("AhWgRQA/gmAmg8QAUA7AzBLQg7AxgoAwQgQhEg5hBg");
	this.shape_502.setTransform(165.25,481);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#FF6600").s().p("AhXgBQBBgrAjhHQAbAwAwBFQg/A0glA+QgWg8g1g5g");
	this.shape_503.setTransform(162.175,497.275);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#FF6600").s().p("AhaAQQBEgxAihSQAhAmAtA/QhDA3giBLQgbgzg0gxg");
	this.shape_504.setTransform(159.1,513.525);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#FF6600").s().p("AhcAhQBHg2AfhfQApAcAqA5QhIA6geBZQghgqgygpg");
	this.shape_505.setTransform(156.025,529.8);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#FF6600").s().p("AheAyQBLg8AchpQAvAQAmAyQhLA/gbBnQgmgigwghg");
	this.shape_506.setTransform(152.95,546.05);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#FF6600").s().p("AhgBDQBNhDAah0QA2AHAkArQhQBDgXB0g");
	this.shape_507.setTransform(149.875,562.325);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#FF6600").s().p("AhgA4QBKhBAchrQA0AQAnAtQhNA/gZBtQgrghgwgcg");
	this.shape_508.setTransform(149.875,580.275);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#FF6600").s().p("AhgAsQBGg+AehiQAyAZArAvQhKA8gbBlQgpgpgzggg");
	this.shape_509.setTransform(149.875,598.225);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#FF6600").s().p("AhgAhQBDg8AghZQAwAiAuAxQhHA4gcBeQgogwg2gkg");
	this.shape_510.setTransform(149.875,616.175);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#FF6600").s().p("AhgAWQA/g6AjhQQAtAsAyAzQhEA0geBWQgmg3g5gog");
	this.shape_511.setTransform(149.875,634.075);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#FF6600").s().p("AhgALQA8g4AlhHQArA1A1A1QhCAxgfBOQglg/g7grg");
	this.shape_512.setTransform(149.875,652.025);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#FF6600").s().p("AhgAAQA4g2Aog+QAoA+A5A2Qg/AugiBHQgihHg+gug");
	this.shape_513.setTransform(149.875,669.975);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#FF6600").s().p("AhggKQA1g2Arg0QAlBHA8A4Qg7ArglA/QgfhOhCgxg");
	this.shape_514.setTransform(149.825,687.925);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#FF6600").s().p("AhggVQAyg0AtgrQAjBQA/A6Qg5AngmA4QgehWhEg0g");
	this.shape_515.setTransform(149.825,705.875);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#FF6600").s().p("AhgghQAugxAwgiQAgBZBDA8Qg2AkgnAwQgdhehHg4g");
	this.shape_516.setTransform(149.825,723.825);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#FF6600").s().p("AhggrQArgwAygZQAeBjBGA+QgzAggpAoQgbhlhKg7g");
	this.shape_517.setTransform(149.825,741.725);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#FF6600").s().p("Ahgg3QAngtA0gQQAcBsBKBAQgwAcgrAhQgZhthNg/g");
	this.shape_518.setTransform(149.825,759.675);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#FF6600").s().p("AhghCQAkgrA2gHQAaB0BNBDIhaAyQgXh0hQhDg");
	this.shape_519.setTransform(149.825,777.625);
	this.shape_519._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_474}]}).to({state:[{t:this.shape_475}]},1).to({state:[{t:this.shape_476}]},1).to({state:[{t:this.shape_477}]},1).to({state:[{t:this.shape_478}]},1).to({state:[{t:this.shape_479}]},1).to({state:[{t:this.shape_480}]},1).to({state:[{t:this.shape_481}]},1).to({state:[{t:this.shape_482}]},1).to({state:[{t:this.shape_483}]},1).to({state:[{t:this.shape_484}]},1).to({state:[{t:this.shape_485}]},1).to({state:[{t:this.shape_486}]},1).to({state:[{t:this.shape_487}]},1).to({state:[{t:this.shape_488}]},1).to({state:[{t:this.shape_489}]},1).to({state:[{t:this.shape_490}]},1).to({state:[{t:this.shape_491}]},1).to({state:[{t:this.shape_492}]},1).to({state:[{t:this.shape_493}]},1).to({state:[{t:this.shape_494}]},1).to({state:[{t:this.shape_495}]},1).to({state:[{t:this.shape_496}]},1).to({state:[{t:this.shape_497}]},1).to({state:[{t:this.shape_498}]},1).to({state:[{t:this.shape_499}]},1).to({state:[{t:this.shape_500}]},1).to({state:[{t:this.shape_501}]},1).to({state:[{t:this.shape_502}]},1).to({state:[{t:this.shape_503}]},1).to({state:[{t:this.shape_504}]},1).to({state:[{t:this.shape_505}]},1).to({state:[{t:this.shape_506}]},1).to({state:[{t:this.shape_507}]},1).to({state:[{t:this.shape_508}]},1).to({state:[{t:this.shape_509}]},1).to({state:[{t:this.shape_510}]},1).to({state:[{t:this.shape_511}]},1).to({state:[{t:this.shape_512}]},1).to({state:[{t:this.shape_513}]},1).to({state:[{t:this.shape_514}]},1).to({state:[{t:this.shape_515}]},1).to({state:[{t:this.shape_516}]},1).to({state:[{t:this.shape_517}]},1).to({state:[{t:this.shape_518}]},1).to({state:[{t:this.shape_519}]},1).to({state:[{t:this.shape_519}]},1).to({state:[{t:this.shape_519}]},1).to({state:[{t:this.shape_519}]},1).to({state:[{t:this.shape_519}]},1).to({state:[{t:this.shape_519}]},1).to({state:[{t:this.shape_519}]},1).to({state:[{t:this.shape_519}]},1).to({state:[{t:this.shape_519}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_519).wait(45).to({_off:false},0).wait(9));

	// confeti6
	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#00FFCC").s().p("AgOAbQgKgXAKgZQASgWAQAWQgQAWAQAaQgJAGgJAAQgIAAgIgGg");
	this.shape_520.setTransform(201.65,6.4625);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#00FFCC").s().p("AgOAfQgJgbADgaQASgXASAUQgKAYAPAdQgIAIgKAAQgHAAgKgFg");
	this.shape_521.setTransform(201.1029,16.6769);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#00FFCC").s().p("AgMAiQgJgegCgcQAQgYAUASQgFAaAQAgQgGALgNAAQgHAAgKgFg");
	this.shape_522.setTransform(200.45,26.867);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#00FFCC").s().p("AgKAlQgIgigJgcQAQgaAWARQABAbAQAjQgFAOgOAAQgIAAgLgFg");
	this.shape_523.setTransform(199.7,37.0821);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#00FFCC").s().p("AgHAoQgIglgQgdQAQgbAYAPQAHAcAQAnQgEAQgQAAQgIAAgLgFg");
	this.shape_524.setTransform(198.975,47.2927);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#00FFCC").s().p("AgFAsQgGgpgXgeQAOgdAaAOQAOAcAPArQgBATgTAAQgJAAgLgEg");
	this.shape_525.setTransform(198.25,57.4782);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#00FFCC").s().p("AgDAvQgGgsgdggQAOgeAcANQATAdAQAuQABAWgVAAQgKAAgMgEg");
	this.shape_526.setTransform(197.5274,67.6816);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#00FFCC").s().p("AgBAyQgFgwgjggQANgfAeALQAZAeAPAyQAEAYgYAAQgKAAgNgEg");
	this.shape_527.setTransform(196.7982,77.8847);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#00FFCC").s().p("AAAA1QgDgzgqghQAMghAhAJQAdAgAQA1QAGAcgaAAQgKAAgPgFg");
	this.shape_528.setTransform(196.127,88.0541);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#00FFCC").s().p("AACA5QgDg3gwgiQAMgiAiAIQAkAgAPA5QAJAegdAAQgLAAgPgEg");
	this.shape_529.setTransform(195.4187,98.2481);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#00FFCC").s().p("AACA/QgJgwgtgkQAMgoAngBQAlAYARA8QABApguAAIgGAAg");
	this.shape_530.setTransform(195.9521,107.6819);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#00FFCC").s().p("Ag4gMQANgsArgKQAnANASBCQgJArgvALQgPgogqgng");
	this.shape_531.setTransform(196.575,117.25);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#00FFCC").s().p("Ag7gDQANgxAugTQApAFATBFQgSAtgqAYQgVghgmgqg");
	this.shape_532.setTransform(197.225,126.825);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#00FFCC").s().p("Ag/AGQAOg2AygbQArgFAUBLQgcAtgkAkQgcgZgjgtg");
	this.shape_533.setTransform(197.85,136.3623);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#00FFCC").s().p("AhDAQQAPg7A2gjQAsgPAVBQQglAugfAxQgigSgggwg");
	this.shape_534.setTransform(198.45,145.8382);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#00FFCC").s().p("AhGAbQAPhAA5gsQAvgYAWBUQgvAvgZA+QgpgLgcgyg");
	this.shape_535.setTransform(199.075,155.2431);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#00FFCC").s().p("AhKAmQAQhFA9g1QAwghAYBYQg5AxgUBKQgwgDgYg1g");
	this.shape_536.setTransform(199.725,164.6367);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#00FFCC").s().p("AhNAyQAQhKBBg+QAxgrAZBdQhDAxgOBYIgHAAQgwAAgTgzg");
	this.shape_537.setTransform(200.35,173.9971);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#00FFCC").s().p("AhRA8QAQhPBGhHQAzgzAaBhQhNAygJBkQgKACgJAAQgsAAgOgwg");
	this.shape_538.setTransform(200.975,183.4028);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#00FFCC").s().p("AhRAsQARhRBEg3QA1glAZBfQhFAzgQBXQg1gDgZg5g");
	this.shape_539.setTransform(200.975,204.2434);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#00FFCC").s().p("AhRAcQAThTBAgpQA4gVAYBdQg+A0gVBIQgwgQggg4g");
	this.shape_540.setTransform(200.975,225.0566);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#00FFCC").s().p("AhRANQAUhVA+gZQA6gGAXBbQg3A0gbA7Qgqgfgng3g");
	this.shape_541.setTransform(200.975,245.7814);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#00FFCC").s().p("AhRAAQAVhYA8gKQA9AKAVBYQgvA3gjArQgigrgvg3g");
	this.shape_542.setTransform(200.975,266.3);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#00FFCC").s().p("AhRgMQAXhbA6AGQA+AZAUBVQgnA3gqAfQgbg7g3g0g");
	this.shape_543.setTransform(200.925,286.8314);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#00FFCC").s().p("AhRgYQAYhdA4AVQBAApATBTQggA4gvAQQgWhIg+g0g");
	this.shape_544.setTransform(200.925,307.1566);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#00FFCC").s().p("AhRgiQAZhfA2AlQBDA3ARBRQgZA5g1ADQgQhXhFgzg");
	this.shape_545.setTransform(200.925,327.3934);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#00FFCC").s().p("AAFBqQgJhkhNgyQAahhAzAzQBGBHAQBPQgOAwgsAAQgJAAgKgCg");
	this.shape_546.setTransform(200.925,347.6028);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#00FFCC").s().p("AhRgiQAbhhAzAnQBEA+ARBNQgYA5g2AAQgShWhDg0g");
	this.shape_547.setTransform(199.225,367.7785);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#00FFCC").s().p("AhQgZQAahhA0AcQBCA0ARBKQgeA6gwAMQgbhJg4g2g");
	this.shape_548.setTransform(197.525,387.9951);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#00FFCC").s().p("AhPgPQAZhhA1AQQBAArARBIQgkA5gqAXQgkg6gtg4g");
	this.shape_549.setTransform(195.825,408.1301);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#00FFCC").s().p("AhOgEQAZhhA1AEQA+AiARBFQgqA6gkAiQgsgsgjg6g");
	this.shape_550.setTransform(194.125,428.19);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#00FFCC").s().p("AhOAGQAZhgA1gHQA9AYASBEQgyA5gdAuQg1gegZg+g");
	this.shape_551.setTransform(192.425,448.15);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#00FFCC").s().p("AhNASQAZhfA1gUQA7APASBBQg4A5gWA6Qg/gQgOhAg");
	this.shape_552.setTransform(190.725,468.1);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#00FFCC").s().p("AhMAeQAYhgA2gfQA6AFARBAQg+A4gQBFQhIgBgDhCg");
	this.shape_553.setTransform(189.025,488.05);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#00FFCC").s().p("AhLApQAYhgA2gqQA4gEASA8QhEA5gLBRQgMABgJAAQg6AAAGg5g");
	this.shape_554.setTransform(187.2968,508.0712);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#00FFCC").s().p("AhJAzQAXhfA3g3QA2gNASA6QhKA5gFBcQgYAHgQAAQgsAAANgzg");
	this.shape_555.setTransform(185.4812,528.1648);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#00FFCC").s().p("AhMAvQALhAAhgmQARgVAUgQQA1gKAUA3IgOAOIgRAWQgSAZgPAbQgLAXgDAaIgBAAQgUAFgOAAQgwAAAHgwg");
	this.shape_556.setTransform(187.2812,552.7607);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#00FFCC").s().p("AhNArIgBAAQAGhDAmgfQASgSAUgNQA1gGAWAzIgKAPIgOAXIgjAzQgMAQgHAVIgBAAQgNACgMAAQg1AAABgsg");
	this.shape_557.setTransform(189,577.3719);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#00FFCC").s().p("AADBQQhJAFgJgvIgBAAQAChGAqgYQAUgOAVgKQA0gCAXAwIgGAPIgNAXQgOAagWAYQgNALgIAQIgBgBg");
	this.shape_558.setTransform(190.7,601.9689);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#00FFCC").s().p("AAFBLQhEgCgRgoIgBAAQgDhJAvgRQAVgLAWgGQAzABAZAtIgDAPQgEANgGAKQgNAbgYAXQgPAEgLALIgBAAg");
	this.shape_559.setTransform(192.3909,626.65);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#00FFCC").s().p("AAHBFQg/gIgaghIgBAAQgHhMAzgKQAXgHAWgDQAyAEAbAqIACAPQgDAMgFANQgNAbgbAUQgPgBgOAFIgBAAg");
	this.shape_560.setTransform(194.0773,651.325);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#00FFCC").s().p("AAKA8IgBgBQg7gOgjgaIAAAAQgMhPA4gDQAYgEAWABQAyAHAdAnIAFAPQgBANgFANQgLAcgeASQgQgHgQAAg");
	this.shape_561.setTransform(195.8941,676.3722);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#00FFCC").s().p("AALAzIgBgBIhigoIAAAAQgQhSA8AEQAaAAAXADQAxAMAeAkIAIAOQABAOgEANQgJAdgiAQQgRgNgSgFg");
	this.shape_562.setTransform(197.6998,701.4158);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#00FFCC").s().p("AAMArIgBgBQgxgcg0gKIgBAAQgVhVBBAKQAbAEAXAGQAxAPAgAhIAMANQADAQgEANQgHAdglAPQgSgTgVgLg");
	this.shape_563.setTransform(199.5207,726.2679);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#00FFCC").s().p("AAMAjQgtgig9gDQgahZBGASQBfAXA3A3QAEARgDANQgGAegoAMQgTgZgYgRg");
	this.shape_564.setTransform(201.3808,751.0812);
	this.shape_564._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_520}]}).to({state:[{t:this.shape_521}]},1).to({state:[{t:this.shape_522}]},1).to({state:[{t:this.shape_523}]},1).to({state:[{t:this.shape_524}]},1).to({state:[{t:this.shape_525}]},1).to({state:[{t:this.shape_526}]},1).to({state:[{t:this.shape_527}]},1).to({state:[{t:this.shape_528}]},1).to({state:[{t:this.shape_529}]},1).to({state:[{t:this.shape_530}]},1).to({state:[{t:this.shape_531}]},1).to({state:[{t:this.shape_532}]},1).to({state:[{t:this.shape_533}]},1).to({state:[{t:this.shape_534}]},1).to({state:[{t:this.shape_535}]},1).to({state:[{t:this.shape_536}]},1).to({state:[{t:this.shape_537}]},1).to({state:[{t:this.shape_538}]},1).to({state:[{t:this.shape_539}]},1).to({state:[{t:this.shape_540}]},1).to({state:[{t:this.shape_541}]},1).to({state:[{t:this.shape_542}]},1).to({state:[{t:this.shape_543}]},1).to({state:[{t:this.shape_544}]},1).to({state:[{t:this.shape_545}]},1).to({state:[{t:this.shape_546}]},1).to({state:[{t:this.shape_547}]},1).to({state:[{t:this.shape_548}]},1).to({state:[{t:this.shape_549}]},1).to({state:[{t:this.shape_550}]},1).to({state:[{t:this.shape_551}]},1).to({state:[{t:this.shape_552}]},1).to({state:[{t:this.shape_553}]},1).to({state:[{t:this.shape_554}]},1).to({state:[{t:this.shape_555}]},1).to({state:[{t:this.shape_556}]},1).to({state:[{t:this.shape_557}]},1).to({state:[{t:this.shape_558}]},1).to({state:[{t:this.shape_559}]},1).to({state:[{t:this.shape_560}]},1).to({state:[{t:this.shape_561}]},1).to({state:[{t:this.shape_562}]},1).to({state:[{t:this.shape_563}]},1).to({state:[{t:this.shape_564}]},1).to({state:[{t:this.shape_564}]},1).to({state:[{t:this.shape_564}]},1).to({state:[{t:this.shape_564}]},1).to({state:[{t:this.shape_564}]},1).to({state:[{t:this.shape_564}]},1).to({state:[{t:this.shape_564}]},1).to({state:[{t:this.shape_564}]},1).to({state:[{t:this.shape_564}]},1).to({state:[{t:this.shape_564}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_564).wait(44).to({_off:false},0).wait(10));

	// confeti5
	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#0099FF").s().p("AgPAeQARgdgSgZQANgTAPARQAKAegKAbQgIAEgGAAQgHAAgGgFg");
	this.shape_565.setTransform(221.075,5.9619);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#0099FF").s().p("AgNAeQAOgagRgYQAMgTAPANQALAagJAaQgLAGgHAAQgFAAgDgCg");
	this.shape_566.setTransform(220.4275,14.4502);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#0099FF").s().p("AgMAeQAMgXgRgXQAMgUAQAKQAMAYgJAYQgPAIgJAAIgCAAg");
	this.shape_567.setTransform(219.7762,22.9633);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#0099FF").s().p("AgRgMQAKgVARAGQANAUgHAYQgSAKgJADQAKgVgQgVg");
	this.shape_568.setTransform(219.1372,31.5333);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#0099FF").s().p("AgSgJQAKgWARADQAOARgGAXQgTALgIAGQAHgRgPgVg");
	this.shape_569.setTransform(218.5031,40.0622);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#0099FF").s().p("AgTgFQAKgWASgBQAPANgGAXQgUALgHAKQAEgOgOgUg");
	this.shape_570.setTransform(217.8738,48.575);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#0099FF").s().p("AgTgBQAJgXATgFQAPAKgFAXQgVALgGAPQABgNgMgSg");
	this.shape_571.setTransform(217.2269,57.075);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#0099FF").s().p("AgUACQAIgXAUgIQAQAGgEAXQgWAMgFASQgCgKgLgSg");
	this.shape_572.setTransform(216.6064,65.575);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#0099FF").s().p("AgVAGQAIgYAUgLQARADgCAXQgXALgFAWIgPgYg");
	this.shape_573.setTransform(215.991,74.05);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#0099FF").s().p("AgWALQAHgZAVgPQASgBgBAWQgYANgEAZQgHgDgKgQg");
	this.shape_574.setTransform(215.3808,82.5229);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#0099FF").s().p("AgXAQQAHgaAVgTQATgEgBAWQgZAMgCAeQgKgBgJgOg");
	this.shape_575.setTransform(214.7525,90.9868);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#0099FF").s().p("AgYAUQAHgaAVgXQAVgIAAAWQgaAOgCAgIgEABQgKAAgHgMg");
	this.shape_576.setTransform(214.15,99.4111);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#0099FF").s().p("AgXAUQAIgZATgYQAUgIAAAWQgYAPgDAfIgEABQgLAAgFgMg");
	this.shape_577.setTransform(214.1,112.0611);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#0099FF").s().p("AgYAUQALgYARgZQAUgIABAWQgXARgFAeIgDAAQgLAAgHgMg");
	this.shape_578.setTransform(214.075,124.7143);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#0099FF").s().p("AgYAUIAbgxQAUgIACAVQgVATgHAdIgDAAQgMAAgGgMg");
	this.shape_579.setTransform(214.025,137.3621);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#0099FF").s().p("AgYAUQAPgWAMgaQAUgJACAWQgTAUgIAbIgDAAQgNAAgGgMg");
	this.shape_580.setTransform(214,149.9979);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#0099FF").s().p("AgYAUQASgVAJgcQAUgJACAWQgRAXgLAZIgBAAQgOAAgGgMg");
	this.shape_581.setTransform(213.95,162.6703);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#0099FF").s().p("AgYAUQAUgVAGgcQAUgJADAWIgbAwIgCAAQgOAAgGgMg");
	this.shape_582.setTransform(213.9,175.3203);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#0099FF").s().p("AgYAUQAWgUAEgdQAUgJADAWQgNAagOAWQgQAAgGgMg");
	this.shape_583.setTransform(213.875,187.959);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#0099FF").s().p("AgYATQAYgTACgdQATgJAEAWQgLAbgQAVQgRAAgFgNg");
	this.shape_584.setTransform(213.825,200.6068);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#0099FF").s().p("AgZATQAagSAAgeQAUgKAFAXQgJAdgTAUQgRgBgGgNg");
	this.shape_585.setTransform(213.8,213.2712);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#0099FF").s().p("AgYATQAcgRgDgfQAUgKAEAXQgHAfgUASQgSgBgEgNg");
	this.shape_586.setTransform(213.75,225.9212);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#0099FF").s().p("AgTAbQgEgEgCgFQAbgSAAgdIADgBQAFgCAEABQAJABADAMIAAACQgJAbgRATIgCACQgLAAgGgFg");
	this.shape_587.setTransform(214.7875,244.6688);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#0099FF").s().p("AgUAbQgEgEgBgGQAZgSADgcIADgBQAFgBAEABQAIACADALIAAACQgMAZgQAUIgCACIgBAAQgKAAgFgFg");
	this.shape_588.setTransform(215.8625,263.3771);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#0099FF").s().p("AgVAaQgDgEgCgGQAZgUAFgZIADgBQAFgBAEABQAIADADALIgBACQgOAWgOAWIgCABIgCAAQgKAAgFgFg");
	this.shape_589.setTransform(216.925,282.1186);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#0099FF").s().p("AgWAaQgDgFgBgGQAXgVAHgXIAEgBQAEAAAFABQAHADADALIgBACQgRAUgNAXIgCABIgBAAQgKAAgFgFg");
	this.shape_590.setTransform(218,300.8457);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#0099FF").s().p("AgXAZQgDgEgBgHQAWgVAKgVIADgCQAGABADACQAJADABAKIgBABQgUASgKAZIgCABIgEAAQgJAAgEgGg");
	this.shape_591.setTransform(219.05,319.5382);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#0099FF").s().p("AgYAZQgDgFAAgHIAhgqIADgBQAGABADACQAIAEACAKIgCABQgWAPgJAaIgCABIgEABQgJAAgEgGg");
	this.shape_592.setTransform(220.125,338.2632);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#0099FF").s().p("AgZAYQgCgFgBgHQASgYAQgQIADgBQAHABADACQAHAEACAKIgCABQgYANgIAbIgCABIgEAAQgJAAgEgGg");
	this.shape_593.setTransform(221.2,356.9875);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#0099FF").s().p("AgaAYQgCgFAAgHQAQgaATgOIADgBQAGABAEADQAHAFACAJIgDABQgaALgHAcIgCABIgGAAQgIAAgDgGg");
	this.shape_594.setTransform(222.2708,375.6798);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#0099FF").s().p("AgbAYQgCgGABgHQAPgcAYgMQAGACAEADQAHAFABAJQgfAJgGAeIgHABQgIAAgEgGg");
	this.shape_595.setTransform(223.32,394.399);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#0099FF").s().p("AgYAYIgDgRQANgaAXgLQAGACAEADQAJAIAAALQgcAHgGAcIgHACQgIAAgDgHg");
	this.shape_596.setTransform(223.325,410.101);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#0099FF").s().p("AgVAaQAAgMgFgKQAMgZAVgJQAGACAEADQAKAKAAANQgaAHgEAZIgIABQgHAAgDgFg");
	this.shape_597.setTransform(223.275,425.8307);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#0099FF").s().p("AgTAbQACgPgIgMQALgXATgHQAGACAFADQALAMgBAOQgXAIgEAVIgIABQgGAAgEgEg");
	this.shape_598.setTransform(223.2761,441.5333);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#0099FF").s().p("AgQAcQADgSgLgMQAKgXASgGQAFACAFADQAMAPgBAQQgUAHgFASIgHACQgFAAgEgEg");
	this.shape_599.setTransform(223.2289,457.2645);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#0099FF").s().p("AgOAdQAEgVgNgOQAJgVAPgEQAGABAFAEQAOARgCATQgRAGgFAPIgHABQgFAAgEgDg");
	this.shape_600.setTransform(223.2325,472.98);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#0099FF").s().p("AgLAeQAFgZgQgOQAIgUAOgDQAFABAGAEQAOAUgCAVQgNAFgFAMQgFACgDAAQgEAAgEgDg");
	this.shape_601.setTransform(223.1871,488.7139);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#0099FF").s().p("AgJAfQAHgbgTgRQAGgSAOgBIAKAEQAQAXgDAXQgLAFgEAIQgFACgDAAQgEAAgEgCg");
	this.shape_602.setTransform(223.1924,504.4191);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#0099FF").s().p("AgGAgQAHgfgVgRQAFgRAMAAQAEABAHAEQAQAZgDAZQgHAEgFAFQgFADgEAAQgCAAgEgCg");
	this.shape_603.setTransform(223.1481,520.156);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#0099FF").s().p("AgEAhQAIghgYgUQAEgPAKACQAGABAFADQASAcgDAbQgFAEgEACQgEACgFAAIgGgBg");
	this.shape_604.setTransform(223.1535,535.8575);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#0099FF").s().p("AgEAhQAGgegVgRQADgRALgCQAFABAGADQAQAXgCAZQgHAHgCAFQgFADgFAAIgFgBg");
	this.shape_605.setTransform(221.4858,565.4721);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#0099FF").s().p("AgGAhQAFgZgSgPQACgVAMgFQAFAAAFADQAQAUgBAVQgKAKAAAJQgFAEgFAAIgGgBg");
	this.shape_606.setTransform(219.803,595.0645);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#0099FF").s().p("AgGAhQADgVgQgNQABgXAOgJQAEAAAFADQAOAPABATQgNAMACAOQgFAEgFAAIgFgBg");
	this.shape_607.setTransform(218.15,624.6727);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#0099FF").s().p("AgHAgQABgQgNgMQABgYAOgNQAFAAAFACQANAMABAQQgPAPAEARQgGAFgEAAQgDAAgDgCg");
	this.shape_608.setTransform(216.45,654.2912);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#0099FF").s().p("AgJAgQAAgMgKgKQAAgbAPgQQAFAAAFABQALAJADAMQgSASAGAWQgGAFgEAAQgDAAgEgCg");
	this.shape_609.setTransform(214.8,683.8981);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#0099FF").s().p("AgKAgQgCgIgHgIQgBgdARgUQAFgBAEACQAKAEAEAKQgUAUAIAaQgHAGgFAAQgDAAgDgCg");
	this.shape_610.setTransform(213.1221,713.4776);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#0099FF").s().p("AgLAgQgEgEgEgGQgCggASgXQAFgBAEABQAIABAGAGQgXAZAKAcQgHAHgFAAQgDAAgDgCg");
	this.shape_611.setTransform(211.4647,743.0809);
	this.shape_611._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_565}]}).to({state:[{t:this.shape_566}]},1).to({state:[{t:this.shape_567}]},1).to({state:[{t:this.shape_568}]},1).to({state:[{t:this.shape_569}]},1).to({state:[{t:this.shape_570}]},1).to({state:[{t:this.shape_571}]},1).to({state:[{t:this.shape_572}]},1).to({state:[{t:this.shape_573}]},1).to({state:[{t:this.shape_574}]},1).to({state:[{t:this.shape_575}]},1).to({state:[{t:this.shape_576}]},1).to({state:[{t:this.shape_577}]},1).to({state:[{t:this.shape_578}]},1).to({state:[{t:this.shape_579}]},1).to({state:[{t:this.shape_580}]},1).to({state:[{t:this.shape_581}]},1).to({state:[{t:this.shape_582}]},1).to({state:[{t:this.shape_583}]},1).to({state:[{t:this.shape_584}]},1).to({state:[{t:this.shape_585}]},1).to({state:[{t:this.shape_586}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_588}]},1).to({state:[{t:this.shape_589}]},1).to({state:[{t:this.shape_590}]},1).to({state:[{t:this.shape_591}]},1).to({state:[{t:this.shape_592}]},1).to({state:[{t:this.shape_593}]},1).to({state:[{t:this.shape_594}]},1).to({state:[{t:this.shape_595}]},1).to({state:[{t:this.shape_596}]},1).to({state:[{t:this.shape_597}]},1).to({state:[{t:this.shape_598}]},1).to({state:[{t:this.shape_599}]},1).to({state:[{t:this.shape_600}]},1).to({state:[{t:this.shape_601}]},1).to({state:[{t:this.shape_602}]},1).to({state:[{t:this.shape_603}]},1).to({state:[{t:this.shape_604}]},1).to({state:[{t:this.shape_605}]},1).to({state:[{t:this.shape_606}]},1).to({state:[{t:this.shape_607}]},1).to({state:[{t:this.shape_608}]},1).to({state:[{t:this.shape_609}]},1).to({state:[{t:this.shape_610}]},1).to({state:[{t:this.shape_611}]},1).to({state:[{t:this.shape_611}]},1).to({state:[{t:this.shape_611}]},1).to({state:[{t:this.shape_611}]},1).to({state:[{t:this.shape_611}]},1).to({state:[{t:this.shape_611}]},1).to({state:[{t:this.shape_611}]},1).to({state:[{t:this.shape_611}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_611).wait(46).to({_off:false},0).wait(8));

	// confeti4
	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#FFFF00").s().p("AgKAwIgCgEQgVggASg0IADgFQAJgPAZAYQgTAsAWAiQgKAKgLAAQgGAAgIgEg");
	this.shape_612.setTransform(240.0429,7.523);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#FFFF00").s().p("AgHAuIgDgDQgMgNgEgTQgFgPAIgfIAEgFQAMgQAZAUQgFAOAAAMQADASAKAUIADAHQgMANgOAAQgEAAgGgCg");
	this.shape_613.setTransform(240.169,19.7548);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#FFFF00").s().p("AgCAsIgEgCQgOgJgIgPQgIgNAHgjIAEgFQAPgQAZAOQgCALABAHIARAnIACAHQgNARgRAAIgFAAg");
	this.shape_614.setTransform(240.2117,32.0058);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#FFFF00").s().p("AgBApQgQgFgMgMQgNgJAGgoIAGgGQASgQAZAKQAAAHACACQALAQALAYIACAHQgPAWgXABIgCgBg");
	this.shape_615.setTransform(240.2277,44.2708);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#FFFF00").s().p("AgfAeQgQgFAFgtIAHgGQAVgRAYAFQAEADACgCQAQAOALAaIABAIQgOAYgYAEIgEABQgRgCgQgIg");
	this.shape_616.setTransform(240.2169,56.5578);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#FFFF00").s().p("AggApQgUgCAEgyIAIgGQAYgSAYABQAGgBAEgHQAUAMALAeIABAHQgOAbgZAHIgEACIgMAAQgOAAgNgCg");
	this.shape_617.setTransform(240.1917,68.4333);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#FFFF00").s().p("Ag2gEIAJgGQAbgSAYgEQAJgGAEgLQAYALAMAfIAAAJQgNAcgaAMIgFACQgUAFgYABIgBAAQgXAAADg2g");
	this.shape_618.setTransform(240.1586,80.4784);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#FFFF00").s().p("Ag8ABIALgGQAdgSAYgIQAMgKAEgQQAdAJAMAiIAAAKQgNAdgbAQIgGADQgVAJgbAEIgFABQgYAAACg5g");
	this.shape_619.setTransform(240.1186,92.6263);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#FFFF00").s().p("AhCAHIAMgHQAggSAYgMQAOgOAGgVQAhAHAMAlIAAAKQgNAggcATIgGAEQgXANgfAIIgIABQgZAAABg7g");
	this.shape_620.setTransform(240.0985,104.7836);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#FFFF00").s().p("AhIAMIANgGQAigTAZgRQARgSAGgZQAmAFAMAnIgBALQgMAigdAWIgGAFQgZARgjAMQgGACgFAAQgaAAAAg+g");
	this.shape_621.setTransform(240.075,116.9554);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#FFFF00").s().p("AhOASIAOgHQAmgTAZgVQASgWAHgeQArAEANApIgCAMQgMAjgeAaIgHAGQgcAVglAPQgIADgGAAQgcAAAAhAg");
	this.shape_622.setTransform(240.05,129.1345);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#FFFF00").s().p("AhUAYIAPgHQAogUAagaQAVgaAIgiQAuACANArIgCAMQgLAmgfAeIgHAHQgdAYgrATQgJAEgHAAQgdAAgBhCg");
	this.shape_623.setTransform(240.025,141.336);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#FFFF00").s().p("AhbAdQBjgnAThYQAzABANAtQgOBZhzA4QgLAGgJAAQgeAAgDhGg");
	this.shape_624.setTransform(240,153.5241);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#FFFF00").s().p("AheAWQBXgpAchQQAzAMAXAsQgOBXhuA1QgKADgJAAQgmAAgIhOg");
	this.shape_625.setTransform(240.05,168.5893);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#FFFF00").s().p("AhhAQQBLgsAlhJQAzAZAgAqQgMBVhpAxQgJACgIAAQgwAAgNhWg");
	this.shape_626.setTransform(240.075,183.6475);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#FFFF00").s().p("AhlAIQBAguAthBQA0AlAqAoQgLBThlAuIgOABQg4AAgVhgg");
	this.shape_627.setTransform(240.125,198.7451);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#FFFF00").s().p("AhoABQAzgxA3g5QA0AxAzAmQgKBRhfAqIgKABQhDAAgbhpg");
	this.shape_628.setTransform(240.15,213.8547);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#FFFF00").s().p("AhsgGQAogzBBgyQAzA9A8AkQgIBPhcAnIgGAAQhLAAgjhyg");
	this.shape_629.setTransform(240.2,228.96);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#FFFF00").s().p("AhugNQAag3BKgpQAzBIBGAjQgHBNhWAjIAAAAQhXAAgph7g");
	this.shape_630.setTransform(240.25,244.1251);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#FFFF00").s().p("AhygVQAOg5BUghQAzBUBQAgQgGBMhRAgQhdgEgxiCg");
	this.shape_631.setTransform(240.3,259.25);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#FFFF00").s().p("Ah1gdQACg6BcgbQA1BgBYAfQgEBKhMAcQhkgIg3iIg");
	this.shape_632.setTransform(240.325,274.4);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#FFFF00").s().p("Ah4gkQgKg+BlgSQA1BsBiAdQgDBHhHAaQhqgMg+iOg");
	this.shape_633.setTransform(240.3342,289.55);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#FFFF00").s().p("Ah6gsQgWg/BugMQA1B4BsAcQgCBFhCAWQhxgQhEiUg");
	this.shape_634.setTransform(240.2242,304.675);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#FFFF00").s().p("Ah8g0QghhBB3gEQA1CEB1AaQgBBDg9ASQh3gThLibg");
	this.shape_635.setTransform(240.0821,319.825);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("#FFFF00").s().p("AiEgpQgLhCBvgUQA6B3BsAgQgEBNhNAbQh0gNhFicg");
	this.shape_636.setTransform(238.3754,349.25);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#FFFF00").s().p("AiJgdQAMhEBmglQA+BrBjAlQgHBZhdAkQhygGg9ieg");
	this.shape_637.setTransform(236.45,378.675);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#FFFF00").s().p("AiOgRQAihGBfg1QBCBeBaAsQgJBihuAtIgCAAQhuAAg2ieg");
	this.shape_638.setTransform(234.425,408.0753);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#FFFF00").s().p("AiSgGQA4hHBXhFQBGBQBRAyQgMBth/A2IgJAAQhmAAgsiZg");
	this.shape_639.setTransform(232.45,437.5166);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#FFFF00").s().p("AiXAEQBOhHBOhWQBMBDBHA5QgOB3iNA/IgSABQhdAAgliWg");
	this.shape_640.setTransform(230.45,466.9841);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#FFFF00").s().p("AicAPQBlhIBGhnQBQA2A+A/QgRCCieBIQgMACgKAAQhWAAgeiSg");
	this.shape_641.setTransform(228.425,496.4436);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("#FFFF00").s().p("AigAZQB7hJA9h3QBUApA2BFQgUCMiuBRQgPAEgNAAQhOAAgWiPg");
	this.shape_642.setTransform(226.45,525.9449);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#FFFF00").s().p("AilAkQCShKA1iIQBYAcAsBLQgWCXi+BZQgRAGgPAAQhHAAgQiLg");
	this.shape_643.setTransform(224.425,555.4446);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("#FFFF00").s().p("AiqAuQCphMAtiXQBcAOAjBRQgZCijPBiQgTAIgQAAQhAAAgKiIg");
	this.shape_644.setTransform(222.45,584.9831);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#FFFF00").s().p("AivA4QC+hNAmioQBhABAaBYQgcCsjfBrQgUALgRAAQg6AAgFiGg");
	this.shape_645.setTransform(220.425,614.526);
	this.shape_645._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_612}]}).to({state:[{t:this.shape_613}]},1).to({state:[{t:this.shape_614}]},1).to({state:[{t:this.shape_615}]},1).to({state:[{t:this.shape_616}]},1).to({state:[{t:this.shape_617}]},1).to({state:[{t:this.shape_618}]},1).to({state:[{t:this.shape_619}]},1).to({state:[{t:this.shape_620}]},1).to({state:[{t:this.shape_621}]},1).to({state:[{t:this.shape_622}]},1).to({state:[{t:this.shape_623}]},1).to({state:[{t:this.shape_624}]},1).to({state:[{t:this.shape_625}]},1).to({state:[{t:this.shape_626}]},1).to({state:[{t:this.shape_627}]},1).to({state:[{t:this.shape_628}]},1).to({state:[{t:this.shape_629}]},1).to({state:[{t:this.shape_630}]},1).to({state:[{t:this.shape_631}]},1).to({state:[{t:this.shape_632}]},1).to({state:[{t:this.shape_633}]},1).to({state:[{t:this.shape_634}]},1).to({state:[{t:this.shape_635}]},1).to({state:[{t:this.shape_636}]},1).to({state:[{t:this.shape_637}]},1).to({state:[{t:this.shape_638}]},1).to({state:[{t:this.shape_639}]},1).to({state:[{t:this.shape_640}]},1).to({state:[{t:this.shape_641}]},1).to({state:[{t:this.shape_642}]},1).to({state:[{t:this.shape_643}]},1).to({state:[{t:this.shape_644}]},1).to({state:[{t:this.shape_645}]},1).to({state:[{t:this.shape_645}]},1).to({state:[{t:this.shape_645}]},1).to({state:[{t:this.shape_645}]},1).to({state:[{t:this.shape_645}]},1).to({state:[{t:this.shape_645}]},1).to({state:[{t:this.shape_645}]},1).to({state:[{t:this.shape_645}]},1).to({state:[{t:this.shape_645}]},1).to({state:[{t:this.shape_645}]},1).to({state:[{t:this.shape_645}]},1).to({state:[{t:this.shape_645}]},1).to({state:[{t:this.shape_645}]},1).to({state:[{t:this.shape_645}]},1).to({state:[{t:this.shape_645}]},1).to({state:[{t:this.shape_645}]},1).to({state:[{t:this.shape_645}]},1).to({state:[{t:this.shape_645}]},1).to({state:[{t:this.shape_645}]},1).to({state:[{t:this.shape_645}]},1).to({state:[{t:this.shape_645}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_645).wait(33).to({_off:false},0).wait(1).to({y:627.576},0).wait(1).to({y:640.576},0).wait(1).to({y:653.626},0).wait(1).to({y:666.626},0).wait(1).to({y:679.676},0).wait(1).to({y:692.726},0).wait(1).to({y:705.726},0).wait(1).to({y:718.776},0).wait(1).to({y:731.826},0).wait(1).to({y:744.826},0).wait(1).to({y:757.876},0).wait(1).to({y:770.876},0).wait(1).to({y:783.926},0).wait(8));

	// confeti3
	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("#FF6600").s().p("AgPAeQARgdgSgZQAGgJAHAAQAEgBAFAEIAGAFQAJAegJAaQgIADgGAAQgHAAgGgEg");
	this.shape_646.setTransform(258.0125,5.7787);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#FF6600").s().p("AgMAfQAMgZgRgXQAKgKAFgEQAEgBAGADIAGAFQAIAagIAYQgKAHgIAAIgIgCg");
	this.shape_647.setTransform(259.0439,22.6337);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("#FF6600").s().p("AgLAgQAJgWgQgVQAMgMAEgHQAFgCAGAEIAGAEQAIAYgHAUQgNAMgMAAIgCAAg");
	this.shape_648.setTransform(260.119,39.5922);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#FF6600").s().p("AgUgFQAQgOACgKQAGgDAGADQADABAEAEQAGAUgFARQgMAQgPACQAEgSgPgSg");
	this.shape_649.setTransform(261.151,56.5682);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("#FF6600").s().p("AgVAAQATgPABgOQAGgDAHADQADACADADQAGARgEANQgLATgQAGQgBgOgNgRg");
	this.shape_650.setTransform(262.23,73.55);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#FF6600").s().p("AgWAFQAWgPgBgSQAHgEAHADQAEABADAEQAFANgDALQgKAVgRAKQgFgKgMgQg");
	this.shape_651.setTransform(263.2667,90.5107);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("#FF6600").s().p("AgYAKQAZgQgBgVQAIgFAHADQADABAEAEQADAJgBAKQgIAXgTANQgKgHgLgOg");
	this.shape_652.setTransform(264.3111,107.5083);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#FF6600").s().p("AgZAQQAcgSgEgYQAKgFAGACQAEABAEAEQADAGAAAGQgHAagVARQgOgDgJgMg");
	this.shape_653.setTransform(265.4,124.4859);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("#FF6600").s().p("AgbAWQAggVgFgaQAJgGAIACQAEAAADAFIAEAGQgGAcgWAUIgFABQgPAAgHgJg");
	this.shape_654.setTransform(266.475,141.4598);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#FF6600").s().p("AgZAQQAcgTgDgZQAJgBAKADQADACACAFIACAFQgFAZgUASQgUgBgGgMg");
	this.shape_655.setTransform(264.6,153.9875);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("#FF6600").s().p("AgZAMQAbgTgCgWQAIAEAMAEQADADACAFQABACgBADQgFAWgSAQQgTgEgIgOg");
	this.shape_656.setTransform(262.7083,166.325);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#FF6600").s().p("AgYAIQAYgTAAgSQAHAIAOAFQADAEAAAFIAAAFQgFATgQANQgUgGgHgQg");
	this.shape_657.setTransform(260.8583,178.675);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("#FF6600").s().p("AgXAEQAWgSABgQQAGAOARAEQACAGgBAGQAAAAAAAAQAAAAAAABQgBAAAAABQAAABgBAAQgEARgOALQgUgJgHgSg");
	this.shape_658.setTransform(259.03,191);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("#FF6600").s().p("AgXAAQAUgRADgNQAFASASAGQACAGgBAFQgBADgDABQgEAOgMAJQgUgLgHgVg");
	this.shape_659.setTransform(257.245,203.3);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("#FF6600").s().p("AgXgCQARgTAGgKQADAXAVAHQABAHgCAFQgBADgEACQgEAKgKAGQgUgMgHgWg");
	this.shape_660.setTransform(255.4667,215.625);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("#FF6600").s().p("AgXgHQAOgSAIgHQACAcAXAHQABAJgEAGQgBACgFABQgDAHgIAFQgVgPgGgZg");
	this.shape_661.setTransform(253.7281,227.975);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("#FF6600").s().p("AgYgLQAMgRALgEQABAgAZAHQAAALgFAGQgCADgFABQgDAEgGABQgUgRgIgbg");
	this.shape_662.setTransform(251.95,240.3);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#FF6600").s().p("AgYgOQAJgSAMgBQACAlAaAJQgBAMgFAFQgCADgHABIgGAAQgVgUgHgcg");
	this.shape_663.setTransform(250.225,252.625);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("#FF6600").s().p("AgbgQQAKgUANgCQADAqAdALQAAANgGAGQgNAFgEAAQgZgXgHggg");
	this.shape_664.setTransform(248.85,272.025);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#FF6600").s().p("AAFArQgbgagIgjQALgXAPgBIAAABQADAuAgALIAAABQAAAOgGAHIgDABIgLAEIgFABIgBgBg");
	this.shape_665.setTransform(247.475,291.45);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("#FF6600").s().p("AAGAvQgegcgKgoQANgYAQgCIABABQACAzAlANIAAABQgBAPgGAHIgDACQgGAEgGABIgGAAIgBgBg");
	this.shape_666.setTransform(246.075,310.85);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#FF6600").s().p("AAGA0QghgegKgtQANgaASgDIABACQADA3AnAOIABABQgBARgGAIIgDACQgHAEgHABIgGABIgCgBg");
	this.shape_667.setTransform(244.725,330.275);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("#FF6600").s().p("AAGA5QgjghgLgxQAOgcAUgDIABABQADA9ArAPIABABQgCASgGAJIgDACQgHAEgJACIgHAAIgCAAg");
	this.shape_668.setTransform(243.35,349.675);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("#FF6600").s().p("AAHA9QgngkgMgzQAQgfAVgEIABABQADBCAvAQIABABQgBAUgHAJIgDADQgHAFgKABIgIABIgCgBg");
	this.shape_669.setTransform(241.975,369.1);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("#FF6600").s().p("AAIBCQgqgngNg3QARgiAWgDIACAAQADBHAyASIABABQgBAVgHAKIgDADQgHAGgLAAIgJACIgCgBg");
	this.shape_670.setTransform(240.575,388.5);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("#FF6600").s().p("AAJBHQgugpgNg9QARgiAYgFIACAAQAEBNA2ATIAAABQgBAWgHAKIgDAEQgHAGgMACIgKAAIgCAAg");
	this.shape_671.setTransform(239.2,407.9);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("#FF6600").s().p("AAJBMQgxgsgOhBQATglAZgFIACAAQAEBSA5AUIACABQgBAXgJAMIgDAEQgGAGgOACIgKABIgDAAg");
	this.shape_672.setTransform(237.85,427.325);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("#FF6600").s().p("AAKBRQg0gvgQhEQAVgnAagGIAEAAQACBWA9AWIACABQgBAYgIANIgDAFQgHAGgPACIgLABIgDAAg");
	this.shape_673.setTransform(236.45,446.7);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f("#FF6600").s().p("Ag9glQAXgrAegEQADBdBDAXQgCAegMANQgGAIgQABIgPABQg3gxgRhJg");
	this.shape_674.setTransform(235.075,466.125);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("#FF6600").s().p("Ag+gcQAeguAagLQAGBVA/AUQgBAcgJANQgFAIgPACQgHAJgPAGQg3gtgShFg");
	this.shape_675.setTransform(234.85,489.325);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("#FF6600").s().p("Ag/gTQAlgwAVgTQAJBMA8ASQABAagIAOQgFAHgMADQgJASgUALQg4gogShCg");
	this.shape_676.setTransform(234.6556,512.525);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#FF6600").s().p("AhBgKQAtgyARgbQALBCA5ASQACAWgGAPQgDAHgLAEQgKAagZARQg6gkgTg+g");
	this.shape_677.setTransform(234.4618,535.725);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("#FF6600").s().p("AhCgCQAzgzAOgjQANA5A1AQQAEAUgEAPQgCAIgJAEQgLAigfAXQg7gggTg7g");
	this.shape_678.setTransform(234.3067,558.925);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#FF6600").s().p("AhEAGQA7g1AJgqQAQAvAyAPQAFATgCAPQgCAHgHAFQgMAqgkAdQg8gbgUg5g");
	this.shape_679.setTransform(234.1786,582.125);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("#FF6600").s().p("AhHAPQBCg3AFgyQAUAmAtANQAGARABAQQgBAGgFAFQgNAzgqAjQg9gXgVg1g");
	this.shape_680.setTransform(234.125,605.35);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#FF6600").s().p("AhKAXQBJg4ABg6QAXAdAqAMQAHAOACAPQABAIgDAHQgPA5gwApQg9gSgWgzg");
	this.shape_681.setTransform(234.0611,628.55);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("#FF6600").s().p("AhNAhQBQg8gDhBQAaATAmAKQAJANAEAQQACAHgCAIQgQBCg1AuQg+gOgXgug");
	this.shape_682.setTransform(234.0375,651.75);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("#FF6600").s().p("AhQApQBWg9gGhJQAbAKAkAJQAJAJAGASQAEAHAAAHQgSBLg6A0QhAgKgWgrg");
	this.shape_683.setTransform(234.1,674.95);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f("#FF6600").s().p("AhVAyQBeg/gKhRQAeAAAgAHQALAIAIASQAEAGACAJQgSBShAA7QhBgGgYgng");
	this.shape_684.setTransform(234.175,698.15);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("#FF6600").s().p("AhZA9QBlhBgPhYQAigJAbAGQANAFAKASQAFAHAEAJQgTBbhGBAQhCgBgYglg");
	this.shape_685.setTransform(234.3,721.08);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("#FF6600").s().p("AhdBLQBshFgShfQAkgSAYAEQANADANASQAGAHAFAKQgUBjhLBGIgMABQg6AAgWgeg");
	this.shape_686.setTransform(234.375,743.8228);
	this.shape_686._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_646}]}).to({state:[{t:this.shape_647}]},1).to({state:[{t:this.shape_648}]},1).to({state:[{t:this.shape_649}]},1).to({state:[{t:this.shape_650}]},1).to({state:[{t:this.shape_651}]},1).to({state:[{t:this.shape_652}]},1).to({state:[{t:this.shape_653}]},1).to({state:[{t:this.shape_654}]},1).to({state:[{t:this.shape_655}]},1).to({state:[{t:this.shape_656}]},1).to({state:[{t:this.shape_657}]},1).to({state:[{t:this.shape_658}]},1).to({state:[{t:this.shape_659}]},1).to({state:[{t:this.shape_660}]},1).to({state:[{t:this.shape_661}]},1).to({state:[{t:this.shape_662}]},1).to({state:[{t:this.shape_663}]},1).to({state:[{t:this.shape_664}]},1).to({state:[{t:this.shape_665}]},1).to({state:[{t:this.shape_666}]},1).to({state:[{t:this.shape_667}]},1).to({state:[{t:this.shape_668}]},1).to({state:[{t:this.shape_669}]},1).to({state:[{t:this.shape_670}]},1).to({state:[{t:this.shape_671}]},1).to({state:[{t:this.shape_672}]},1).to({state:[{t:this.shape_673}]},1).to({state:[{t:this.shape_674}]},1).to({state:[{t:this.shape_675}]},1).to({state:[{t:this.shape_676}]},1).to({state:[{t:this.shape_677}]},1).to({state:[{t:this.shape_678}]},1).to({state:[{t:this.shape_679}]},1).to({state:[{t:this.shape_680}]},1).to({state:[{t:this.shape_681}]},1).to({state:[{t:this.shape_682}]},1).to({state:[{t:this.shape_683}]},1).to({state:[{t:this.shape_684}]},1).to({state:[{t:this.shape_685}]},1).to({state:[{t:this.shape_686}]},1).to({state:[{t:this.shape_686}]},1).to({state:[{t:this.shape_686}]},1).to({state:[{t:this.shape_686}]},1).to({state:[{t:this.shape_686}]},1).to({state:[{t:this.shape_686}]},1).to({state:[{t:this.shape_686}]},1).to({state:[{t:this.shape_686}]},1).to({state:[{t:this.shape_686}]},1).to({state:[{t:this.shape_686}]},1).to({state:[{t:this.shape_686}]},1).to({state:[{t:this.shape_686}]},1).to({state:[{t:this.shape_686}]},1).to({state:[{t:this.shape_686}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_686).wait(40).to({_off:false},0).wait(14));

	// confeti2
	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("#0099FF").s().p("AgGAOQAHgNgIgLQAGgJAGAIQAFANgFAMQgDACgCAAQgDAAgDgCg");
	this.shape_687.setTransform(276.0125,3.6936);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f("#0099FF").s().p("AgJATQALgSgLgQQAIgLAIALQAHASgHAQQgFADgDAAQgEAAgEgDg");
	this.shape_688.setTransform(276.6375,14.3811);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("#0099FF").s().p("AgLAZQANgYgOgUQAKgOAMANQAHAYgHAVQgHADgEAAQgGAAgEgDg");
	this.shape_689.setTransform(277.2375,25.0496);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("#0099FF").s().p("AgOAdQAQgcgRgYQAMgSAOARQAKAdgKAZQgHADgFAAQgHAAgGgEg");
	this.shape_690.setTransform(277.8625,35.7369);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("#0099FF").s().p("AgRAiQAUghgVgcQAPgVAQATQALAigLAeQgIAEgHAAQgIAAgHgFg");
	this.shape_691.setTransform(278.475,46.4245);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f("#0099FF").s().p("AgUAoQAXgmgYghQARgYATAWQANAngNAiQgKAFgHAAQgKAAgIgFg");
	this.shape_692.setTransform(279.1,57.0995);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f("#0099FF").s().p("AgWAtQAagsgbglQASgbAWAZQAOAtgOAmQgLAGgJAAQgKAAgJgGg");
	this.shape_693.setTransform(279.7,67.7804);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f("#0099FF").s().p("AgZAyQAdgxgegpQAUgeAZAcQAQAxgQArQgMAHgLAAQgLAAgKgHg");
	this.shape_694.setTransform(280.325,78.4555);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f("#0099FF").s().p("AgbA3QAfg1ghguQAXghAbAfQASA2gSAwQgOAGgLAAQgNAAgKgHg");
	this.shape_695.setTransform(280.9375,89.1431);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f("#0099FF").s().p("AgeA8QAig6gkgyQAZglAeAiQATA8gTA0QgPAHgMAAQgOAAgMgIg");
	this.shape_696.setTransform(281.5625,99.8305);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f("#0099FF").s().p("AghBBQAmg/gog2QAbgoAhAlQAVBBgVA4QgQAIgOAAQgPAAgNgJg");
	this.shape_697.setTransform(282.1625,110.4989);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f("#0099FF").s().p("AgjBGQAohEgqg7QAdgqAjAnQAXBHgXA8QgSAJgOAAQgRAAgNgKg");
	this.shape_698.setTransform(282.7875,121.1865);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f("#0099FF").s().p("AgeBHQAkhFgtg4QAbgsAlAlQAaBFgTA9QgTAKgPAAQgPAAgNgIg");
	this.shape_699.setTransform(280.8761,132.1885);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f("#0099FF").s().p("AgYBIQAghHgwg1QAXgsAnAiQAeBDgQA9QgTAMgRAAQgNAAgLgGg");
	this.shape_700.setTransform(278.9919,143.1963);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f("#0099FF").s().p("AgUBIQAchIgygxQAVguAoAgQAhBAgMA+QgUAOgSAAQgLAAgLgFg");
	this.shape_701.setTransform(277.135,154.2292);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f("#0099FF").s().p("AgPBJQAXhJg1gvQATguAqAdQAkA/gIA9QgVAQgUAAQgIAAgKgDg");
	this.shape_702.setTransform(275.3053,165.2471);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f("#0099FF").s().p("AgLBJQAUhKg4gsQAPgvAsAbQAoA8gEA+QgVATgWAAQgHAAgJgDg");
	this.shape_703.setTransform(273.5182,176.2597);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f("#0099FF").s().p("AgHBKQAPhLg6gpQANgxAtAZQArA6AAA+QgWAWgXAAQgGAAgHgCg");
	this.shape_704.setTransform(271.7503,187.2865);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f("#0099FF").s().p("AgDBKQALhMg9gmQALgxAuAWQAvA3ADA/QgVAYgZAAIgLgBg");
	this.shape_705.setTransform(270,198.3278);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f("#0099FF").s().p("AAABKQAIhNhAgjQAIgyAwATQAyA2AHA+QgWAcgaAAIgJgBg");
	this.shape_706.setTransform(268.25,209.3622);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f("#0099FF").s().p("AAEBLQADhPhCgfQAFg0AzARQA1A0AKA/QgVAegdAAIgGAAg");
	this.shape_707.setTransform(266.5,220.3806);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f("#0099FF").s().p("Ag9gbQAGg6A1AIQA3AsAJBCQgdAkgeAKQAAhIhAgig");
	this.shape_708.setTransform(266.375,234.9571);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f("#0099FF").s().p("AhAgRQAHhAA3gCQA5AlAKBFQglAmgaAYQgDhCg/gkg");
	this.shape_709.setTransform(266.3,249.45);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f("#0099FF").s().p("AhCgHQAIhGA5gNQA6AfAKBJQgqAogXAkQgIg6g8gng");
	this.shape_710.setTransform(266.175,263.85);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f("#0099FF").s().p("AhEADQAIhMA8gWQA8AXAJBLQgwArgUAyQgMgyg5grg");
	this.shape_711.setTransform(266.05,278.275);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f("#0099FF").s().p("AhGANQAJhSA9ggQA/AQAIBPQg2AtgRA/QgQgrg2gug");
	this.shape_712.setTransform(265.95,292.725);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f("#0099FF").s().p("AhJAXQAKhYBAgqQBAAJAJBSQg9AvgNBNQgWgkgzgxg");
	this.shape_713.setTransform(265.85,307.15);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f("#0099FF").s().p("AhLAhQALheBCg0QBBACAJBWQhDAxgKBaQgZgdgxg0g");
	this.shape_714.setTransform(265.725,321.55);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f("#0099FF").s().p("AhNAsQAMhlBDg+QBEgFAIBZQhJA0gHBnQgdgWgug2g");
	this.shape_715.setTransform(265.625,335.9867);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f("#0099FF").s().p("AhPA2QANhqBGhIQBEgNAIBdQhPA1gDB1QgigOgrg6g");
	this.shape_716.setTransform(265.5,350.3506);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f("#0099FF").s().p("AhRBCQANhxBIhSQBHgTAHBfQhUA4gBCCQgmgHgog8g");
	this.shape_717.setTransform(265.375,364.6667);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f("#0099FF").s().p("AhTBNQAOh3BKhcQBIgaAIBiQhbA8ACCPQgqgBglg/g");
	this.shape_718.setTransform(265.3,378.9941);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f("#0099FF").s().p("AhWBYQAPh9BNhmQBKghAHBlQhhA+AFCcIgJABQgpAAgfg8g");
	this.shape_719.setTransform(265.175,393.3179);
	this.shape_719._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_687}]}).to({state:[{t:this.shape_688}]},1).to({state:[{t:this.shape_689}]},1).to({state:[{t:this.shape_690}]},1).to({state:[{t:this.shape_691}]},1).to({state:[{t:this.shape_692}]},1).to({state:[{t:this.shape_693}]},1).to({state:[{t:this.shape_694}]},1).to({state:[{t:this.shape_695}]},1).to({state:[{t:this.shape_696}]},1).to({state:[{t:this.shape_697}]},1).to({state:[{t:this.shape_698}]},1).to({state:[{t:this.shape_699}]},1).to({state:[{t:this.shape_700}]},1).to({state:[{t:this.shape_701}]},1).to({state:[{t:this.shape_702}]},1).to({state:[{t:this.shape_703}]},1).to({state:[{t:this.shape_704}]},1).to({state:[{t:this.shape_705}]},1).to({state:[{t:this.shape_706}]},1).to({state:[{t:this.shape_707}]},1).to({state:[{t:this.shape_708}]},1).to({state:[{t:this.shape_709}]},1).to({state:[{t:this.shape_710}]},1).to({state:[{t:this.shape_711}]},1).to({state:[{t:this.shape_712}]},1).to({state:[{t:this.shape_713}]},1).to({state:[{t:this.shape_714}]},1).to({state:[{t:this.shape_715}]},1).to({state:[{t:this.shape_716}]},1).to({state:[{t:this.shape_717}]},1).to({state:[{t:this.shape_718}]},1).to({state:[{t:this.shape_719}]},1).to({state:[{t:this.shape_719}]},1).to({state:[{t:this.shape_719}]},1).to({state:[{t:this.shape_719}]},1).to({state:[{t:this.shape_719}]},1).to({state:[{t:this.shape_719}]},1).to({state:[{t:this.shape_719}]},1).to({state:[{t:this.shape_719}]},1).to({state:[{t:this.shape_719}]},1).to({state:[{t:this.shape_719}]},1).to({state:[{t:this.shape_719}]},1).to({state:[{t:this.shape_719}]},1).to({state:[{t:this.shape_719}]},1).to({state:[{t:this.shape_719}]},1).to({state:[{t:this.shape_719}]},1).to({state:[{t:this.shape_719}]},1).to({state:[{t:this.shape_719}]},1).to({state:[{t:this.shape_719}]},1).to({state:[{t:this.shape_719}]},1).to({state:[{t:this.shape_719}]},1).to({state:[{t:this.shape_719}]},1).to({state:[{t:this.shape_719}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_719).wait(32).to({_off:false},0).wait(1).to({y:413.9179},0).wait(1).to({y:434.5179},0).wait(1).to({x:265.125,y:455.1179},0).wait(1).to({y:475.7179},0).wait(1).to({y:496.3179},0).wait(1).to({y:516.9179},0).wait(1).to({y:537.5179},0).wait(1).to({y:558.1179},0).wait(1).to({x:265.075,y:578.7679},0).wait(1).to({y:599.3679},0).wait(1).to({y:619.9679},0).wait(1).to({y:640.5679},0).wait(1).to({y:661.1679},0).wait(1).to({y:681.7679},0).wait(1).to({x:265.025,y:702.3679},0).wait(1).to({y:722.9679},0).wait(1).to({y:743.5679},0).wait(5));

	// confet1
	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f("#FF6600").s().p("AgHAQQAIgQgJgNQAHgJAHAJQAGAPgGAOQgEACgCAAQgEAAgDgCg");
	this.shape_720.setTransform(297,3.7061);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f("#FF6600").s().p("AgLgHQAGgPALACQAJAMgEARQgMAIgEAEQAFgNgLgPg");
	this.shape_721.setTransform(297.499,12.4882);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f("#FF6600").s().p("AgPAAQAFgUAOgFQANAIgCAUQgPAMgDALQACgLgOgPg");
	this.shape_722.setTransform(298.008,21.0875);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f("#FF6600").s().p("AgSAFQAEgZARgMQAQAEAAAZQgVAQABAUQgBgJgQgTg");
	this.shape_723.setTransform(298.575,29.825);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f("#FF6600").s().p("AgWAMQADgeAUgUQAUAAADAdQgbAVADAaQgEgGgSgUg");
	this.shape_724.setTransform(299.15,38.45);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f("#FF6600").s().p("AgaATQACgkAYgaQAXgEAEAgQgfAZAFAiQgHgEgUgVg");
	this.shape_725.setTransform(299.725,47.1028);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f("#FF6600").s().p("AgeAaQABgpAcghQAagJAGAkQgkAdAHArQgKgCgWgXg");
	this.shape_726.setTransform(300.3,55.7188);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f("#FF6600").s().p("AgiAiQABgvAegpQAfgMAHAnQgoAiAJAyIgBABQgNAAgYgYg");
	this.shape_727.setTransform(300.85,64.3003);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f("#FF6600").s().p("AgmAqQAAg1AhgvQAigRAKArQgtAmAMA6IgEAAQgRAAgXgWg");
	this.shape_728.setTransform(301.4246,72.8975);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f("#FF6600").s().p("AgpAwQgCg6Alg2QAmgVALAvQgxAqAOBCIgIABQgTAAgWgXg");
	this.shape_729.setTransform(301.9949,81.5148);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f("#FF6600").s().p("AguA4QgChAAog9QApgZAOAzQg3AvARBJQgGABgEAAQgVAAgYgWg");
	this.shape_730.setTransform(302.5677,90.0903);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f("#FF6600").s().p("AgxA/QgEhFArhEQAugeAPA3Qg7AzATBRQgIACgHAAQgWAAgXgWg");
	this.shape_731.setTransform(303.1368,98.7086);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f("#FF6600").s().p("Ag1BGQgFhLAvhLQAxghARA6QhAA4AVBYQgJAEgIAAQgYAAgYgXg");
	this.shape_732.setTransform(303.6802,107.3158);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f("#FF6600").s().p("Ag5BOQgFhRAxhSQA1glATA9QhEA9AXBgQgLAEgLAAQgZAAgYgWg");
	this.shape_733.setTransform(304.2475,115.9384);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f("#FF6600").s().p("Ag6A8QgBhSA0hFQA0gXAOBDQhFA7ASBWIgCAAQgbAAglgmg");
	this.shape_734.setTransform(304.8741,126.2375);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f("#FF6600").s().p("Ag7AqQAEhUA1g4QA0gJAKBJQhFA5AMBNQgTgLgrgvg");
	this.shape_735.setTransform(305.475,136.6057);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f("#FF6600").s().p("Ag7AaQAIhVA2gsQA1AGAEBPQhFA4AHBCQgLgWgug4g");
	this.shape_736.setTransform(306.075,146.75);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f("#FF6600").s().p("Ag8AKQANhWA4ggQA0AWAABUQhGA2ACA4QgCgigzhAg");
	this.shape_737.setTransform(306.6752,156.85);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f("#FF6600").s().p("Ag9gDQAShYA6gTQAzAkgFBYQhDA1gHAsQAFgug1hEg");
	this.shape_738.setTransform(307.3221,166.7875);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f("#FF6600").s().p("Ag+gUQAWhaA8gGQAzAygJBeQhHA1gKAkQAQg8g7hNg");
	this.shape_739.setTransform(307.9496,177.075);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f("#FF6600").s().p("AhAgkQAchaA9AFQAyBBgOBkQhHA0gPAaQAYhIg/hWg");
	this.shape_740.setTransform(308.6519,187.1592);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f("#FF6600").s().p("AhBgyQAghcA/ASQAyBQgTBqQhIAygVAQQAghVhBhdg");
	this.shape_741.setTransform(309.3616,197.1277);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f("#FF6600").s().p("AhDg/QAlheBAAfQAyBegYBwQhIAwgaAGQAohhhFhkg");
	this.shape_742.setTransform(310.0533,207.0141);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f("#FF6600").s().p("AgtCOQAxhuhJhsQAphfBDAsQAxBsgcB2QhDArghAAIgFAAg");
	this.shape_743.setTransform(310.8091,216.8326);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f("#FF6600").s().p("Ag0CUQA6h6hNh0QAuhgBEA4QAxB8ghB6Qg4AkgjAAQgLAAgJgEg");
	this.shape_744.setTransform(311.5681,226.7408);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f("#FF6600").s().p("Ag7CaQBCiGhQh8QAyhhBHBEQAwCJgmCBQgwAdgjAAQgTAAgPgIg");
	this.shape_745.setTransform(312.3395,236.7306);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f("#FF6600").s().p("AhCCfQBLiThViDQA4hjBIBRQAvCYgqCHQgpAYghAAQgbAAgWgPg");
	this.shape_746.setTransform(313.0855,246.7604);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f("#FF6600").s().p("AhKCkQBUifhYiLQA8hkBKBdQAvCmgvCNQglAVgeAAQgiAAgdgXg");
	this.shape_747.setTransform(313.875,256.8107);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f("#FF6600").s().p("Ag6ChQBEiahZiHQA4hhBJBUQAxCigfCGQgjAaghAAQgeAAgcgUg");
	this.shape_748.setTransform(312.6663,274.5113);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f("#FF6600").s().p("AgqCeQAyiUhZiDQA0heBIBKQA0CegQB/QgiAfgjAAQgZAAgbgRg");
	this.shape_749.setTransform(311.5987,292.2389);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.f("#FF6600").s().p("AgeCbQAiiPhah/QAwhbBIBAQA2CagBB5QgeAkgmAAQgWAAgbgOg");
	this.shape_750.setTransform(310.7509,309.9583);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f("#FF6600").s().p("AgTCYQASiKhbh6QAshZBHA3QA4CVAOBzQgaAqgoAAQgWAAgYgMg");
	this.shape_751.setTransform(310.1,327.6788);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.f("#FF6600").s().p("AgICVQABiFhch2QAohWBHAtQA6CRAeBtQgWAwgrAAQgUAAgXgKg");
	this.shape_752.setTransform(309.45,345.4041);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.f("#FF6600").s().p("AABCSQgPh/hbhxQAkhUBFAkQA9COAtBkQgQA2gwAAQgSAAgXgIg");
	this.shape_753.setTransform(308.825,363.0994);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f("#FF6600").s().p("AAMCQQggh7hchtQAghRBGAaQA/CKA8BeQgLA9g0AAQgRAAgVgGg");
	this.shape_754.setTransform(308.175,380.7951);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f("#FF6600").s().p("AAWCNQgwh1hchpQAchOBFAQQBBCGBLBXQgEBEg5AAQgQAAgUgFg");
	this.shape_755.setTransform(307.525,398.4509);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.f("#FF6600").s().p("AAhCLQhBhwhdhkQAYhMBFAHQBDCBBbBSQACBKg+AAQgPAAgSgEg");
	this.shape_756.setTransform(306.8782,416.0576);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f("#FF6600").s().p("AArCKQhRhqhehgQAUhJBEgDQBGB9BqBLQAJBRhEAAQgNAAgRgDg");
	this.shape_757.setTransform(306.2843,433.5868);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f("#FF6600").s().p("AA1CJQhihlhehcQAQhGBDgMQBIB5B5BEQARBYhKAAQgNAAgOgCg");
	this.shape_758.setTransform(305.7356,451.0949);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.f("#FF6600").s().p("AAvCHQhXhmhdhdQAShGBDgHQBFB5BvBHQAMBThFAAQgNAAgPgDg");
	this.shape_759.setTransform(305.0418,468.9206);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.f("#FF6600").s().p("AAoCGQhMhohaheQAUhGBCgCQBCB6BlBJQAIBOhCAAQgNAAgQgDg");
	this.shape_760.setTransform(304.347,486.7847);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.f("#FF6600").s().p("AAiCEQhBhphZhfQAWhHBBAEQBAB7BaBLQAEBJg8AAQgOAAgRgEg");
	this.shape_761.setTransform(303.6855,504.6062);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.f("#FF6600").s().p("AAbCDQg3hrhWhfQAXhIBBAKQA9B7BQBOQAABDg5AAQgOAAgRgEg");
	this.shape_762.setTransform(303.075,522.424);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.f("#FF6600").s().p("AAUCCQgshshUhgQAZhIBAAPQA7B7BFBRQgEA+g0AAQgPAAgSgFg");
	this.shape_763.setTransform(302.45,540.1939);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.f("#FF6600").s().p("AANCBQgghthUhhQAchIA/AUQA5B8A6BTQgHA4gwAAQgQAAgTgFg");
	this.shape_764.setTransform(301.8,557.94);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.f("#FF6600").s().p("AAGCAQgVhuhShiQAehJA+AbQA2B7AxBWQgMAzgtAAQgPAAgUgGg");
	this.shape_765.setTransform(301.175,575.6897);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.f("#FF6600").s().p("AAAB/QgLhvhQhjQAghJA8AgIBbDUQgPAvgpAAQgQAAgUgIg");
	this.shape_766.setTransform(300.55,593.4217);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.f("#FF6600").s().p("AgGB/QgBhwhOhkQAhhKA8AmQAyB7AcBcQgSApgmAAQgRAAgTgIg");
	this.shape_767.setTransform(299.925,611.1475);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.f("#FF6600").s().p("AgNB+QAKhxhMhlQAjhKA8ArQAvB8ARBeQgUAlgjAAQgSAAgUgKg");
	this.shape_768.setTransform(299.275,628.8543);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.f("#FF6600").s().p("AgUB+QAVhzhKhmQAlhKA7AwQAtB9AGBgQgXAhggAAQgSAAgVgLg");
	this.shape_769.setTransform(298.65,646.5713);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.f("#FF6600").s().p("AgbB+QAfh1hIhmQAnhLA6A2QArB9gEBjQgZAbgeAAQgSAAgWgLg");
	this.shape_770.setTransform(298.0633,664.2869);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.f("#FF6600").s().p("AgkB9QAqh1hGhnQAphMA6A8QAoB9gOBmQgbAXgbAAQgVAAgWgOg");
	this.shape_771.setTransform(297.6065,681.9981);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.f("#FF6600").s().p("AguB9QA1h3hEhoQArhMA5BBQAlB+gYBoQgbATgZAAQgXAAgXgPg");
	this.shape_772.setTransform(297.2591,699.7244);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.f("#FF6600").s().p("Ag4B8QBAh4hDhpQAthMA4BHQAjB+gjBqQgbAPgYAAQgZAAgWgRg");
	this.shape_773.setTransform(297.025,717.4419);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_720}]}).to({state:[{t:this.shape_721}]},1).to({state:[{t:this.shape_722}]},1).to({state:[{t:this.shape_723}]},1).to({state:[{t:this.shape_724}]},1).to({state:[{t:this.shape_725}]},1).to({state:[{t:this.shape_726}]},1).to({state:[{t:this.shape_727}]},1).to({state:[{t:this.shape_728}]},1).to({state:[{t:this.shape_729}]},1).to({state:[{t:this.shape_730}]},1).to({state:[{t:this.shape_731}]},1).to({state:[{t:this.shape_732}]},1).to({state:[{t:this.shape_733}]},1).to({state:[{t:this.shape_734}]},1).to({state:[{t:this.shape_735}]},1).to({state:[{t:this.shape_736}]},1).to({state:[{t:this.shape_737}]},1).to({state:[{t:this.shape_738}]},1).to({state:[{t:this.shape_739}]},1).to({state:[{t:this.shape_740}]},1).to({state:[{t:this.shape_741}]},1).to({state:[{t:this.shape_742}]},1).to({state:[{t:this.shape_743}]},1).to({state:[{t:this.shape_744}]},1).to({state:[{t:this.shape_745}]},1).to({state:[{t:this.shape_746}]},1).to({state:[{t:this.shape_747}]},1).to({state:[{t:this.shape_748}]},1).to({state:[{t:this.shape_749}]},1).to({state:[{t:this.shape_750}]},1).to({state:[{t:this.shape_751}]},1).to({state:[{t:this.shape_752}]},1).to({state:[{t:this.shape_753}]},1).to({state:[{t:this.shape_754}]},1).to({state:[{t:this.shape_755}]},1).to({state:[{t:this.shape_756}]},1).to({state:[{t:this.shape_757}]},1).to({state:[{t:this.shape_758}]},1).to({state:[{t:this.shape_759}]},1).to({state:[{t:this.shape_760}]},1).to({state:[{t:this.shape_761}]},1).to({state:[{t:this.shape_762}]},1).to({state:[{t:this.shape_763}]},1).to({state:[{t:this.shape_764}]},1).to({state:[{t:this.shape_765}]},1).to({state:[{t:this.shape_766}]},1).to({state:[{t:this.shape_767}]},1).to({state:[{t:this.shape_768}]},1).to({state:[{t:this.shape_769}]},1).to({state:[{t:this.shape_770}]},1).to({state:[{t:this.shape_771}]},1).to({state:[{t:this.shape_772}]},1).to({state:[{t:this.shape_773}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(19.3,1.8,302.5,801.1);


(lib.conffettiCL = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// confeti17
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33CC33").s().p("AgVAfQAPgjgOgeIAqABQgPAiAOAfQgKADgKAAQgKAAgMgEg");
	this.shape.setTransform(-8.1,1.1635);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#33CC33").s().p("AgcAWQATgggHgdQASALAbAGQgSAjAGAbQgSgGgbgMg");
	this.shape_1.setTransform(-1.45,12.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#33CC33").s().p("AgjAMQAWgeABgcQAQAXAgAMQgUAhgCAZQgSgSgfgRg");
	this.shape_2.setTransform(5.225,24.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#33CC33").s().p("AgqACQAZgcAIgbQAPAiAlASQgWAhgLAWQgQgfgkgVg");
	this.shape_3.setTransform(11.875,35.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#33CC33").s().p("AgxgHQAcgbAQgaQANAuAqAWQgZAigTATQgPgrgogZg");
	this.shape_4.setTransform(18.575,47.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#33CC33").s().p("Ag4gSQAfgZAXgXQAMA4AvAcQgbAigcAPQgNg2gtgfg");
	this.shape_5.setTransform(25.225,58.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#33CC33").s().p("Ag/gcQAigWAegXQALBDA0AjQgdAggjANQgNhDgygjg");
	this.shape_6.setTransform(31.9,70.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#33CC33").s().p("AhGgmIBKgqQAKBPA5AnQgfAigsAJQgLhQg3gng");
	this.shape_7.setTransform(38.55,81.85);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#33CC33").s().p("AhCgcQAngWAgghQAMBHAyAoQggAhgoAXQgNhGgwgqg");
	this.shape_8.setTransform(36.1,92.825);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#33CC33").s().p("Ag+gRQAmgYAfguQAMBBAsAnQghAhgkAmQgPg9gpgsg");
	this.shape_9.setTransform(33.7,103.75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#33CC33").s().p("Ag6gGQAngaAag7QAOA7AmAnQgiAgggA1QgRg1gigtg");
	this.shape_10.setTransform(31.3,114.725);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#33CC33").s().p("Ag2ADQAngbAXhHQAQA0AfAoQgjAggbBDQgUgsgbgxg");
	this.shape_11.setTransform(28.85,125.675);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#33CC33").s().p("AgyAPQAngeAUhUQARAvAZAnQglAfgWBRQgWgigUgyg");
	this.shape_12.setTransform(26.45,136.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#33CC33").s().p("AguAZQAngfARhgIAlBOQgmAfgSBgQgYgagNg0g");
	this.shape_13.setTransform(24,147.575);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#33CC33").s().p("AgzASQAmgdAVhWQATApAaAnQgnAcgUBXQgYgcgVg0g");
	this.shape_14.setTransform(25.4,158.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#33CC33").s().p("Ag5ALQAlgbAZhLQAUApAhAnQgnAbgWBMQgYgegegzg");
	this.shape_15.setTransform(26.8,169.85);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#33CC33").s().p("Ag/AFQAlgaAdhAQATApAqAoQgoAYgZBCQgYgggmgxg");
	this.shape_16.setTransform(28.225,180.975);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#33CC33").s().p("AhEgBQAjgaAhg0QAUAqAxAnQgoAWgdA5QgWgjgugvg");
	this.shape_17.setTransform(29.625,192.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#33CC33").s().p("AhKgIQAjgYAmgqQATArA5AoQgoATghAvQgVglg3gug");
	this.shape_18.setTransform(31,203.275);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#33CC33").s().p("AhPgPQAigWAqgfQATAsBAAoQgpAQgiAlQgWgng+gtg");
	this.shape_19.setTransform(32.4,214.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#33CC33").s().p("AhVgVQAhgVAugUQATAsBJApQgpANgmAbQgVgphHgrg");
	this.shape_20.setTransform(33.825,225.525);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#33CC33").s().p("AhbgcQAhgTAygKQATAuBRApQgqAKgoASQgVgshQgqg");
	this.shape_21.setTransform(35.225,236.675);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#33CC33").s().p("AhggiQAfgSA2ABQAUAvBYApIhVAPQgUgthYgpg");
	this.shape_22.setTransform(36.625,247.7973);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#33CC33").s().p("AhbgeQAhgaA1ABQATAqBOAqQgrAIgrATQgWgthLgpg");
	this.shape_23.setTransform(36.1,260.2482);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#33CC33").s().p("AhVgaQAhgiA1ABQATAkBCAsQgsAIgqAfQgYgtg9gpg");
	this.shape_24.setTransform(35.575,272.6986);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#33CC33").s().p("AhPgVQAigrA1ABQASAfA2AuQgsAGgpAsQgagsgwgpg");
	this.shape_25.setTransform(35.025,285.1489);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#33CC33").s().p("AhKgSQAkgyA0ABQARAZAsAvQgtAHgpA4Qgcgsgjgqg");
	this.shape_26.setTransform(34.525,297.624);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#33CC33").s().p("AhEgNQAkg6A0ABQAQAUAhAxQgtAFgqBEQgdgsgVgpg");
	this.shape_27.setTransform(34,310.0492);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#33CC33").s().p("Ag+gJQAlhCA0ABQAPAOAVAzQgtAGgpBPQgggrgHgqg");
	this.shape_28.setTransform(33.475,322.4993);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#33CC33").s().p("Ag4gEQAmhLA0ABQAOAJAKA1QguAFgpBbQghgrAGgpg");
	this.shape_29.setTransform(32.8857,334.9493);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#33CC33").s().p("AgwAAQAnhTA0ABQANAEgBA2QguAFgpBnQgjgrATgpg");
	this.shape_30.setTransform(32.0661,347.3994);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#33CC33").s().p("Ag0gLQArhMAxAGQATAOgFA2QgrAGgrBZQgcgsAIgxg");
	this.shape_31.setTransform(33.0964,372.3281);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#33CC33").s().p("Ag3gUQAthFAwAKQAYAXgIA4QgoAFgtBMQgWgtgCg4g");
	this.shape_32.setTransform(34.0016,397.2307);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#33CC33").s().p("Ag5geQAxg+AtAQQAeAggMA3QglAIguA+QgQgvgNhAg");
	this.shape_33.setTransform(34.8485,422.095);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#33CC33").s().p("Ag7gnQAzg3AsAUQAjAqgQA4QghAIgwAwQgKgwgXhHg");
	this.shape_34.setTransform(35.6653,446.9333);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#33CC33").s().p("Ag9gwQA3gwAqAaQAnAzgTA4QgeAJgxAiQgEgygihOg");
	this.shape_35.setTransform(36.4835,471.7327);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#33CC33").s().p("AhAg4QA7gpAoAeQAsA9gWA5IhOAeQACg0gthVg");
	this.shape_36.setTransform(37.3028,496.4745);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#33CC33").s().p("AhChAQA+giAmAjQAyBFgaA7QgYALg1AGQAJg1g4hdg");
	this.shape_37.setTransform(38.1227,521.1873);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#33CC33").s().p("AgQBSQAOg3hChkQBBgbAkAoQA3BPgeA7QgMAHgZAAQgQAAgVgDg");
	this.shape_38.setTransform(38.9763,545.991);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#33CC33").s().p("AgOBOQAUg4hMhrQBEgUAiAtQA9BYgiA8QgGAEgMAAQgUAAgjgOg");
	this.shape_39.setTransform(39.7969,571.1414);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#33CC33").s().p("AgMBLQAag6hWhyQBHgNAgAxQBCBiglA8QgEAEgHAAQgTAAgqgag");
	this.shape_40.setTransform(40.6178,596.2739);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#33CC33").s().p("AgEBJQAIg1hNhtQA+gOAlAqQA8BcgPA4QgGAHgMAAQgUAAglgVg");
	this.shape_41.setTransform(40.2161,613.3989);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#33CC33").s().p("AAABGQgJgxhFhmQA1gPApAhQA3BYAIAyQgJAMgRAAQgVAAgggRg");
	this.shape_42.setTransform(40.225,630.5612);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#33CC33").s().p("AACBEIhWiOQAsgPAtAZQAyBTAeAtQgNARgWAAQgUAAgcgNg");
	this.shape_43.setTransform(40.35,647.7194);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#33CC33").s().p("AAFBBQgsgogzhbQAjgQAyAQQArBOA1ApQgQAWgcAAQgTAAgXgKg");
	this.shape_44.setTransform(40.525,664.9072);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#33CC33").s().p("AAIBAQg+gkgrhWQAbgRA2AJQAmBJBLAjQgUAcgiAAQgQAAgTgGg");
	this.shape_45.setTransform(40.65,682.0419);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#33CC33").s().p("AALA+QhQgfgihQQASgSA7ABQAgBEBiAeQgZAjgnAAQgNAAgQgFg");
	this.shape_46.setTransform(40.775,699.0581);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#33CC33").s().p("AAOA/QhigcgZhKQAJgSA/gIQAbBAB4AYQgeArgqAAQgMAAgMgDg");
	this.shape_47.setTransform(40.925,715.9535);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#33CC33").s().p("AAQA/QhzgXgQhEQAAgUBDgQQAWA8COATQgiAygvAAQgJAAgKgCg");
	this.shape_48.setTransform(41.05,732.8681);
	this.shape_48._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_48).wait(48).to({_off:false},0).wait(6));

	// confeti16
	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FF6699").s().p("AgFAYIgFgDQgIgSAIgTIAFgFQAKgIAKANQgMARAMAUQgHAEgHAAIgGgBg");
	this.shape_49.setTransform(-25.1625,-0.4161);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FF6699").s().p("AgGAaIgGgDQgIgTAIgWIAGgFQALgJALANIABACQgNASANAVIAAABQgHAFgIAAIgIgCg");
	this.shape_50.setTransform(-17.3875,7.5797);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FF6699").s().p("AgGAdIgHgDQgJgWAJgYIAHgGQAMgJAMAPIAAABQgOAUAPAYIgBABQgIAFgJAAIgHgCg");
	this.shape_51.setTransform(-9.575,15.5854);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FF6699").s().p("AgHAgIgHgEQgLgXALgbIAHgGQANgLAOARIAAABQgQAWAQAaIAAABQgJAFgJAAQgEAAgFgBg");
	this.shape_52.setTransform(-1.7875,23.5884);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FF6699").s().p("AgIAiIgIgEQgKgZAKgdIAIgHQAPgLAPASIAAACQgRAYARAcIAAABQgKAFgJAAQgFAAgGgCg");
	this.shape_53.setTransform(6,31.5802);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FF6699").s().p("AgIAlIgJgEQgMgcAMgeIAJgJQAQgLAPATIgBACQgRAaATAeIgCABQgKAGgKAAQgFAAgFgCg");
	this.shape_54.setTransform(13.8,39.5875);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FF6699").s().p("AgJAoIgJgFQgNgdANghIAJgJQASgNAQAVIgBACQgSAdAUAgIgCABQgLAGgKAAQgGAAgGgCg");
	this.shape_55.setTransform(21.5875,47.5793);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FF6699").s().p("AgKAqQgFgBgEgEQgOgfAOgjQAEgGAFgEQATgNASAWIgBADQgUAeAVAiIgBABQgMAHgLAAQgGAAgHgDg");
	this.shape_56.setTransform(29.375,55.583);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FF6699").s().p("AgKAtQgGgCgFgDQgOghAOgmQAFgGAGgEQAUgPATAZIgCACQgVAgAXAlIgCABQgMAHgMAAQgGAAgHgDg");
	this.shape_57.setTransform(37.1875,63.5879);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FF6699").s().p("AgWAqQgQgjAQgoQAbghAaAhQgZAjAZAoQgOAJgNAAQgNAAgNgJg");
	this.shape_58.setTransform(44.9625,71.5875);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FF6699").s().p("AgXAnQgRgiARgnQAcgaAcAaQgVAjAVAmQgPAJgOAAQgNAAgOgJg");
	this.shape_59.setTransform(46.1875,83.325);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FF6699").s().p("AgYAlQgTgiATglQAegUAcAUQgPAiAPAlQgOAIgPAAQgOAAgPgIg");
	this.shape_60.setTransform(47.375,95.0875);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FF6699").s().p("AgYAiQgWghAWgjQAegNAeANQgLAhALAjQgPAIgPAAQgPAAgPgIg");
	this.shape_61.setTransform(48.5875,106.8375);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FF6699").s().p("AgZAfQgXgfAXgjQAfgGAgAGQgGAhAGAhQgPAIgRAAQgPAAgQgIg");
	this.shape_62.setTransform(49.775,118.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FF6699").s().p("AgaAcQgZgeAZghIBCAAQgDAgADAfQgRAIgQAAQgQAAgRgIg");
	this.shape_63.setTransform(51,130.35);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FF6699").s().p("AgcAbQgageAagfQAhAGAjgGQADAfgDAeQgQAIgRAAQgQAAgTgIg");
	this.shape_64.setTransform(52.2625,141.975);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FF6699").s().p("AgdAZQgdgdAdgcQAhAMAlgMQAIAdgIAcQgRAJgSAAQgQAAgTgJg");
	this.shape_65.setTransform(53.5875,153.55);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FF6699").s().p("AgfAYQgfgcAfgbQAjASAlgSQANAcgNAbQgQAIgTAAQgRAAgUgIg");
	this.shape_66.setTransform(54.9,165.1625);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FF6699").s().p("AghAXQghgbAhgaQAjAZAogZQARAcgRAZQgRAIgTAAQgTAAgUgIg");
	this.shape_67.setTransform(56.2375,176.7375);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FF6699").s().p("AggAbQgggbAdgaQAjATAngXQAUAagRAaQgVAJgWAAQgPAAgQgEg");
	this.shape_68.setTransform(58.1262,191.805);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FF6699").s().p("AgfAeQgggZAagaQAhAMAogVQAXAXgRAdQgeAJgdAAIgOgBg");
	this.shape_69.setTransform(60.0036,206.9232);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FF6699").s().p("AgngSQAgAGAogTQAaAVgRAdQgmAKgiADQgfgYAWgag");
	this.shape_70.setTransform(61.9054,222.15);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FF6699").s().p("AgogQQAeAAApgRQAcATgQAfQgnAHggAKQgfgXATgbg");
	this.shape_71.setTransform(63.7799,237.425);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FF6699").s().p("AgqgNQAdgHAogPQAgARgRAhQgoAEgdAQQgegUAPgcg");
	this.shape_72.setTransform(65.6586,252.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FF6699").s().p("AgsgLQAcgMApgNQAiAOgQAiQgpADgcAWQgdgTALgdg");
	this.shape_73.setTransform(67.5197,267.975);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FF6699").s().p("AgtgIQAagTApgLQAlANgQAiQgqABgZAdQgdgSAIgdg");
	this.shape_74.setTransform(69.3964,283.225);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FF6699").s().p("AgugGQAYgYAqgJQAnAJgPAlQgrgCgXAkQgdgRAFgeg");
	this.shape_75.setTransform(71.2316,298.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FF6699").s().p("AgwgDQAXgfAqgHQArAIgQAlQgsgDgVApQgcgPABgeg");
	this.shape_76.setTransform(73.0534,313.775);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FF6699").s().p("AgtgGQAWgeApgFQAkAMgKAkQgpABgWAiQgcgRACgfg");
	this.shape_77.setTransform(71.227,337.425);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FF6699").s().p("AgrgJQAWgeAogCQAdAQgEAjQgmAGgYAaQgcgTADggg");
	this.shape_78.setTransform(69.4194,361.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FF6699").s().p("AgqgMQAWgcAmgCQAYAVABAiQgjAKgZAUQgcgWADghg");
	this.shape_79.setTransform(67.6602,384.725);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FF6699").s().p("AgogOQAWgcAkAAQASAZAGAhIg7AbQgbgYAEghg");
	this.shape_80.setTransform(65.9299,408.3996);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FF6699").s().p("AgngRQAWgbAjACIAXA9QgcATgdAFQgbgaAEgig");
	this.shape_81.setTransform(64.1992,432.043);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FF6699").s().p("AgQArQgbgdAFgiQAWgaAiAEQAEAgASAfQgYAXgbAAIgFgBg");
	this.shape_82.setTransform(62.4673,455.706);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FF6699").s().p("AgPArQgbgfAFgkQAWgZAgAGQgBAlAXAdQgRAWgWAAQgHAAgIgCg");
	this.shape_83.setTransform(60.7353,479.4176);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FF6699").s().p("AgPAqQgagiAFgkQAWgYAfAHQgIApAcAdQgMAWgUAAQgJAAgLgFg");
	this.shape_84.setTransform(59.002,503.2094);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FF6699").s().p("AgPAoQgZgjAGglQAVgYAeAKQgOAtAhAbQgJAYgSAAQgKAAgOgKg");
	this.shape_85.setTransform(57.2679,527.0028);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FF6699").s().p("AgOApQgWgkAFgkQATgZAbALQgLAsAdAcQgJAWgQAAQgJAAgNgIg");
	this.shape_86.setTransform(57.2868,550.2242);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FF6699").s().p("AgNApQgTglADgiQASgaAYANQgJAqAaAcQgJAVgPAAQgIAAgLgHg");
	this.shape_87.setTransform(57.3045,573.4425);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FF6699").s().p("AgLApQgQglABghQAQgbAWAOQgHAoAWAdQgIAVgNAAQgHAAgKgHg");
	this.shape_88.setTransform(57.272,596.6755);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FF6699").s().p("AgKApQgMglgBggQAOgcAUAPQgFAnASAeQgHATgNAAQgFAAgJgGg");
	this.shape_89.setTransform(57.275,619.8926);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FF6699").s().p("AgJApQgJgmgCgeQAMgdASAQQgDAlAOAfQgHATgLAAQgFAAgHgGg");
	this.shape_90.setTransform(57.275,643.1053);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FF6699").s().p("AgHAqQgHgngDgdQAKgeAPARQgBAkALAgQgGARgKAAQgEAAgFgEg");
	this.shape_91.setTransform(57.275,666.3227);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FF6699").s().p("AgGApQgDgngFgbQAIgfANASQACAjAGAgQgFAQgIAAQgDAAgFgEg");
	this.shape_92.setTransform(57.225,689.555);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FF6699").s().p("AgEAqQAAgogHgaQAGggALAUIAGBBQgEAQgHAAQgCAAgDgDg");
	this.shape_93.setTransform(57.225,712.7729);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FF6699").s().p("AgDAqQADgogIgYQAEgiAIAVQAGAggBAhQgEAOgFAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_94.setTransform(57.24,735.9958);
	this.shape_94._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49}]}).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_94}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_94).wait(45).to({_off:false},0).wait(9));

	// confeti15
	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFF00").s().p("AgwAOQgUgVAFgKIAHgQQAEgIASgIQApA2A6gDQABAdgVASIgOABQguAAghgkg");
	this.shape_95.setTransform(67.2128,79.9637);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFF00").s().p("AglASIgfggQAEgLAHgJQAOgJAXgDQAnAyAygCQABAcgUAQIgQABQgoAAgfgdg");
	this.shape_96.setTransform(65.7256,96.2765);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFF00").s().p("AgaAWQgdgcgSgFQAEgOALgKQAZgKAbACQAmAuAqAAQAAAZgSAQIgRABQgkAAgdgXg");
	this.shape_97.setTransform(64.175,112.5937);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFF00").s().p("AgPAbQghgggegCQAEgQAPgNQAjgLAeAHQAmAqAjADQgCAXgQAOQgKACgJAAQgeAAgbgRg");
	this.shape_98.setTransform(62.675,128.7969);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFF00").s().p("AgEAfQgmgigpAAQADgTATgOQAvgMAiAMQAkAmAcAEQgDAVgPAOQgLACgKAAQgZAAgYgMg");
	this.shape_99.setTransform(61.15,144.9898);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFF00").s().p("AAGAlQgpgng1ADQAEgVAXgQQA5gNAlARQAkAjAUAGQgEASgNAMQgNAEgOAAQgSAAgVgGg");
	this.shape_100.setTransform(59.6,161.1413);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFF00").s().p("AASApQgvgqhAAFQADgXAbgRQBDgOArAWQAiAeANAIQgGAQgLALQgPAGgUAAQgLAAgNgCg");
	this.shape_101.setTransform(58.075,177.3704);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFF00").s().p("AhiAHQADgaAfgTQBNgPAwAbQAgAaAGAKQgIAOgJAKQgSAJgjABQgzgthMAIg");
	this.shape_102.setTransform(56.575,193.7071);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFF00").s().p("AhnAJQADgdAjgUQBYgQA0AgQAeAXgBALIgQAVQgNAJgjAHQg4gxhXALg");
	this.shape_103.setTransform(55.0285,210.1333);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFF00").s().p("AhtAKQADgfAngWQBigRA4AlQAdAUgJAMQgJAJgGAJQgIAJgiANQg8g0hjANg");
	this.shape_104.setTransform(53.6066,226.5574);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFF00").s().p("AhnAOQAHghAigeQBdgPA1AlQAcAbgMAQIgRATQgIAHgfAMQg4gxhbAJg");
	this.shape_105.setTransform(53.5674,238.2087);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFF00").s().p("AhhATQAMgkAdglQBWgNAyAlQAbAigOAVQgLANgIAFQgHAGgeAKQgzgthTAFg");
	this.shape_106.setTransform(53.539,249.8463);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFF00").s().p("AhbAXQAQgnAYgrQBRgMAuAmQAaApgRAYQgMAPgIAEQgIAEgbAIQgugphLABg");
	this.shape_107.setTransform(53.511,261.4796);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFF00").s().p("AhWAbQAVgpAUgyQBKgKArAlQAZAwgTAdQgNARgJACIghAIQgqgkhDgEg");
	this.shape_108.setTransform(53.5022,273.1197);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFF00").s().p("AhQAgQAZgtAPg5QBEgIAoAmQAYA3gWAhQgOASgJABQgJAAgWAFQglghg7gHg");
	this.shape_109.setTransform(53.5011,284.7547);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFF00").s().p("AhLAkQAfgvAKhAQA9gGAmAmQAWA+gYAlQgPAUgKgBQgIgBgVADQgggcg0gNg");
	this.shape_110.setTransform(53.4761,296.3781);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFF00").s().p("AAdBSQgJgCgSABQgbgYgsgRQAjgyAFhHQA3gEAjAmQAVBGgaAoQgPATgKAAIgCAAg");
	this.shape_111.setTransform(53.4892,308.0895);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFF00").s().p("AATBZQgJgFgOAAQgYgUgkgVQAng1ABhOQAxgCAgAmQAUBNgdAsQgPAUgKAAIgEAAg");
	this.shape_112.setTransform(53.5082,319.8965);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFF00").s().p("AAKBfQgJgHgMgCIgwgpQAsg3gEhVQArgBAdAnQATBUggAwQgPAVgLAAIgEgBg");
	this.shape_113.setTransform(53.5289,331.7225);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFF00").s().p("AAABlQgIgIgLgEQgOgMgVgdQAxg6gJhcQAlABAZAnQASBbgiA0QgPAWgLAAQgDAAgDgCg");
	this.shape_114.setTransform(53.5586,343.5065);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFF00").s().p("AgIBrQgJgJgJgGQgJgIgNgiQA0g8gNhjQAfADAWAnQARBiglA4QgPAXgKAAQgEAAgDgDg");
	this.shape_115.setTransform(53.5926,355.3066);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFF00").s().p("AABBkQgIgHgLgEQgPgMgVgeQAwg5gJhbQAmABAaAmQASBbgiA0QgPAVgLAAQgDAAgDgCg");
	this.shape_116.setTransform(55.9115,372.7815);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFF00").s().p("AAMBeQgJgGgNgCIgygpQArg3gDhTQAsgCAeAnQATBTgfAvQgPAVgLAAIgEgBg");
	this.shape_117.setTransform(58.236,390.246);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFF00").s().p("AAWBWQgJgEgPAAQgZgVgngUQAmgzAChMQAzgDAhAmQAVBLgdArQgOAUgLAAIgDgBg");
	this.shape_118.setTransform(60.566,407.7085);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFF00").s().p("AAgBQQgIgCgTACQgdgagwgPQAhgxAHhEQA6gFAkAmQAWBDgaAnQgOATgKAAIgCAAg");
	this.shape_119.setTransform(62.9042,425.1493);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFF00").s().p("AhNAiQAbguANg8QBBgIAnAmQAXA7gXAjQgPATgJAAQgJAAgVADQgjgeg3gKg");
	this.shape_120.setTransform(65.275,442.8132);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFF00").s().p("AhTAdQAWgqASg1QBIgJAqAlQAYAzgUAeQgOASgIABIggAHQgogihAgGg");
	this.shape_121.setTransform(67.6295,460.4379);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFF00").s().p("AhZAZQARgoAXguQBPgLAuAmQAZArgRAaQgNAPgIADQgIAEgbAHQgtgnhIAAg");
	this.shape_122.setTransform(69.994,478.0753);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFF00").s().p("AhgAUQANglAcgmQBVgNAxAmQAbAigPAWQgLANgIAFQgHAGgdAJQgygshSAFg");
	this.shape_123.setTransform(72.3679,495.7327);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFF00").s().p("AhmAPQAHgiAigeQBcgPA0AlQAcAbgMARIgRATQgIAHgfALQg3gwhaAJg");
	this.shape_124.setTransform(74.755,513.3607);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFF00").s().p("AhpAMQAFgkApgXQBdgRA0AjQAbAUgIALQgJAKgGALQgNALgiATQg6gyhaAJg");
	this.shape_125.setTransform(77.1414,548.9107);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFF00").s().p("AhmAOQAIgpArgYQBXgRAvAiQAZASgHANQgHAJgGANQgTAMgiAaQg3gvhSAEg");
	this.shape_126.setTransform(77.1266,566.85);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFF00").s().p("AhjAQQALgvAsgYQBSgQArAfQAXASgGAMQgGAKgGAPQgYANgjAhQg0gshKgBg");
	this.shape_127.setTransform(77.1121,584.7634);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFF00").s().p("AhfASQANg0AugZQBMgQAoAdQAUASgEAMQgFAKgGARQgfAPgjAnQgwgphCgGg");
	this.shape_128.setTransform(77.0905,602.6541);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFF00").s().p("AhcAUQAQg5AwgZQBGgRAkAcQASARgDALIgKAeQgkAQgkAuQgtgmg6gLg");
	this.shape_129.setTransform(77.0964,620.5656);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFF00").s().p("AhZAXQATg/AygaQBAgQAgAaQAQAQgCALIgJAgQgqASgkA1QgqgkgygPg");
	this.shape_130.setTransform(77.0861,638.4952);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFF00").s().p("AhWAZQAWhEAzgbQA7gQAbAYQAPAQgCALIgHAjQgwATgjA7QgpghgpgUg");
	this.shape_131.setTransform(77.057,656.3959);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFF00").s().p("AhSAaQAXhJA2gbQA1gQAXAWQAMAPAAALQAAALgGAaQg1AVgkBBIhGg3g");
	this.shape_132.setTransform(77.075,674.3047);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFF00").s().p("AhPAcQAahOA2gcQAxgPATAUQAKAOABAKQABALgGAeQg7AVgkBIQgjgagYgfg");
	this.shape_133.setTransform(77.0771,692.2116);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFF00").s().p("AhMAfQAdhUA4gcQArgQAPATQAIAOACAJQACAMgGAfQhBAXgkBPQgggYgQgjg");
	this.shape_134.setTransform(77.0911,710.0967);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFF00").s().p("AhJAhQAfhZA6gdQAlgQALARIAJAXQADALgFAiQhHAYgkBWQgdgVgIgog");
	this.shape_135.setTransform(77.1279,728.0246);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFF00").s().p("AhHAjQAjheA7geQAggPAHAOQADANAFAJQAEAMgGAkQhLAagmBcQgagSAAgtg");
	this.shape_136.setTransform(77.1592,745.9186);
	this.shape_136._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_95}]},8).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104,p:{x:53.6066,y:226.5574}}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_104,p:{x:77.1566,y:531.0074}}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_136}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_136).wait(50).to({_off:false},0).wait(4));

	// confet14
	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FF6600").s().p("AgIAQQAKgQgKgNQAHgJAHAJQAFAPgFAOQgEACgDAAQgDAAgEgCg");
	this.shape_137.setTransform(-38.8,-1.4939);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FF6600").s().p("AgLgHQAFgOALACQAJAMgDAQQgMAIgEAEQAFgOgLgOg");
	this.shape_138.setTransform(-26.7875,7.8879);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FF6600").s().p("AgPAAQAFgTAOgFQANAIgBATQgRAMgBAKQABgKgOgPg");
	this.shape_139.setTransform(-14.7714,17.0875);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FF6600").s().p("AgTAFQAEgXARgMQARADABAXQgWAQABATQgCgIgQgSg");
	this.shape_140.setTransform(-2.675,26.4);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FF6600").s().p("AgXANQADgdAUgTQAVgBADAaQgbAUADAaIgXgXg");
	this.shape_141.setTransform(9.375,35.646);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FF6600").s().p("AgbAUQABgiAZgaQAYgGAFAeQggAYAGAiQgJgDgUgTg");
	this.shape_142.setTransform(21.475,44.875);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FF6600").s().p("AgfAcQAAgnAcghQAbgKAIAhQglAbAJAqQgNAAgWgUg");
	this.shape_143.setTransform(33.55,54.0337);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FF6600").s().p("AgjAjQgBgsAggoQAfgOAJAkQgpAgALAwIgFABQgPAAgVgTg");
	this.shape_144.setTransform(45.5985,63.2106);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FF6600").s().p("AgnAqQgCgxAjguQAjgUALAoQguAkAOA4IgIACQgSAAgVgTg");
	this.shape_145.setTransform(57.6945,72.4068);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FF6600").s().p("AgrAyQgDg2Amg2QAngXANAqQgzApARA/QgHACgGAAQgUAAgUgRg");
	this.shape_146.setTransform(69.7389,81.5945);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FF6600").s().p("AgvA5QgEg7Apg9QArgcAPAuQg4AtAUBHQgKADgIAAQgVAAgUgRg");
	this.shape_147.setTransform(81.8277,90.8121);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FF6600").s().p("AgsAuQgCg3Ang1QAkgUARAuQg0AsAOA9IgHAAQgYAAgVgXg");
	this.shape_148.setTransform(81.3972,105.1855);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FF6600").s().p("AgqAhQACgyAkgtQAdgMASAuQgxArAKAyQgagCgUgeg");
	this.shape_149.setTransform(81,119.61);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FF6600").s().p("AgnAWQAEguAigmQAWgDATAvQgsApAFAoQgZgKgPgfg");
	this.shape_150.setTransform(80.55,133.9909);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FF6600").s().p("AglALQAIgqAfgeQAPAGAVAuQgpApACAeQgZgRgLgig");
	this.shape_151.setTransform(80.125,148.275);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FF6600").s().p("AgjAAQALglAdgWIAfA7QgmApgDATQgYgYgGgkg");
	this.shape_152.setTransform(79.725,162.575);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FF6600").s().p("AgggKQANghAcgPQgBAWAZAvIgqAwQgWgfgBgmg");
	this.shape_153.setTransform(79.275,176.825);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FF6600").s().p("AgMA5QgVglADgpQARgcAZgIQgHAfAaAuQgfAmgLAAIgBgBg");
	this.shape_154.setTransform(78.8313,191.1013);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FF6600").s().p("AgPA3QgTgtAHgrQAUgYAXAAQgPAnAcAvQgVAdgOAAQgFAAgEgDg");
	this.shape_155.setTransform(78.3058,205.5113);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FF6600").s().p("AgRA0QgSg0AMgtQAXgTAVAIQgVAvAcAvQgPAWgNAAQgJAAgIgIg");
	this.shape_156.setTransform(77.76,219.9487);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FF6600").s().p("AgSAxQgRg5ARgxQAZgPATAQQgcA3AeAwQgLASgMAAQgLAAgMgQg");
	this.shape_157.setTransform(77.1375,234.307);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FF6600").s().p("AgUA0QgTg2APgwQAdgRAVAIQgWAyAcAxQgPAWgQAAQgKAAgLgKg");
	this.shape_158.setTransform(79.2314,252.8035);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FF6600").s().p("AgWA4QgVgzANgvQAhgUAXACQgPAtAZAyQgTAagUAAQgJAAgKgFg");
	this.shape_159.setTransform(81.3133,271.2289);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FF6600").s().p("AgYA8QgWgvAKguQAlgXAZgFQgHAoAVAzQgYAggZAAQgHAAgIgCg");
	this.shape_160.setTransform(83.358,289.5498);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FF6600").s().p("AgZBAQgZgsAJguQApgYAagNQAAAiASA1QgfAoggAAIgGAAg");
	this.shape_161.setTransform(85.4309,307.9668);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FF6600").s().p("AgugTQAtgaAcgVIAWBUQgmAuglACQgbgoAHgtg");
	this.shape_162.setTransform(87.4779,326.45);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FF6600").s().p("Ag0gMQAygdAdgbQAOAYAMA4QgpAvgoAKQgdgkAFgtg");
	this.shape_163.setTransform(89.5132,344.95);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FF6600").s().p("Ag5gFQA1ggAggiQAWATAIA5QgsAygrARQgfggADgtg");
	this.shape_164.setTransform(91.5075,363.45);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FF6600").s().p("Ag+ABQA5ghAigqQAdAOAFA7QgvAzguAZQghgdABgtg");
	this.shape_165.setTransform(93.5218,381.95);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FF6600").s().p("AhDAIQA9gkAkgwQAkAJACA8QgzA1gwAfQgjgYgBgtg");
	this.shape_166.setTransform(95.525,400.45);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FF6600").s().p("AhIAOQBBglAlg4QArADgBA+Qg2A3gyAnQgmgWgCgsg");
	this.shape_167.setTransform(97.5511,418.975);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FF6600").s().p("AhMAWQBEgoAng/QAzgCgFA/Qg4A6g1AtQgogSgEgrg");
	this.shape_168.setTransform(99.5473,437.447);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FF6600").s().p("AhSAdQBJgrAohGQA7gHgIBBQg8A7g4A1QgqgOgGgrg");
	this.shape_169.setTransform(101.5731,455.9407);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FF6600").s().p("AhXAkQBMgtArhNQBBgMgLBCIh5B5QgsgKgIgrg");
	this.shape_170.setTransform(103.6041,474.3755);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FF6600").s().p("AhXAeQBEgvAuhGQBDgHgHBDQg8A8g4A3QgpgTgRgng");
	this.shape_171.setTransform(101.3579,500.7623);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FF6600").s().p("AhXAZQA8gxAxg/QBGgDgEBEQg4A8g3AzQgmgdgagjg");
	this.shape_172.setTransform(99.1108,527.0956);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FF6600").s().p("AhXAUQA0g0Azg4QBIADAABFQg0A7g2AuQgigmgjgfg");
	this.shape_173.setTransform(96.925,553.425);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FF6600").s().p("AhYAPQAsg3A3gwQBKAHAEBGQgwA6g1AqQgfgwgtgag");
	this.shape_174.setTransform(94.725,579.75);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FF6600").s().p("AhYAKQAkg5A6gpQBMAMAHBHQgsA6gzAkQgcg5g2gWg");
	this.shape_175.setTransform(92.525,606.075);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FF6600").s().p("AhYAFQAbg7A+gjQBOARALBIQgpA6gxAgQgZhDg/gSg");
	this.shape_176.setTransform(90.3,632.375);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FF6600").s().p("AhZAAQAUg+BBgbQBPAVAPBJQgkA6gyAbQgUhMhJgOg");
	this.shape_177.setTransform(88.1,658.7);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FF6600").s().p("AhZgFQALhABEgUQBRAaATBKQggA4gxAXQgRhVhRgKg");
	this.shape_178.setTransform(85.925,685.025);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FF6600").s().p("AhagKQAEhDBHgNQBTAgAXBKQgdA4gvATQgPhehagHg");
	this.shape_179.setTransform(83.7,711.325);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FF6600").s().p("AhagPQgEhFBKgGQBVAlAaBLQgYA3guAOQgMhnhjgDg");
	this.shape_180.setTransform(81.4871,737.65);
	this.shape_180._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_137}]}).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_180}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_180).wait(43).to({_off:false},0).wait(11));

	// confeti13
	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#00FFCC").s().p("AhKBLQgGgKgEgNQBQgqAMhpQBXgUgLA1QgZB/hRAkIgGABg");
	this.shape_181.setTransform(87.7871,138.4779);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#00FFCC").s().p("AhBBVQgOgIgBgUQBKguAShjQBOgSgKAwQgUBzhGAiIgEADQgdgIgWgBg");
	this.shape_182.setTransform(87.7766,153.4046);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#00FFCC").s().p("AhNA6QBFgyAYhdQBFgQgIAqQgPBog9AgIgCAFQgigCgVAKQgWgEABgcg");
	this.shape_183.setTransform(87.7365,168.7562);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#00FFCC").s().p("AhJA3QBAg3AchXQA+gOgHAmQgKBcgzAdIgBAIQgnADgUAXQgegCAEgjg");
	this.shape_184.setTransform(87.6869,184.5847);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#00FFCC").s().p("AhFA0QA6g6AihSQA1gMgFAgQgFBQgpAbIABAKQgtAJgTAjIgEAAQgiAAAHgpg");
	this.shape_185.setTransform(87.6458,200.3909);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#00FFCC").s().p("AhBAxQA0g/AohMQAtgKgFAaQAABHgeAXIACAMQgyAPgSAuIgIABQglAAAJgtg");
	this.shape_186.setTransform(87.6062,216.211);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#00FFCC").s().p("Ag+AtIBdiJQAkgIgDAVQAEA7gTAWIAEAOQg4AUgRA6IgMABQgpAAALgyg");
	this.shape_187.setTransform(87.5673,232.0158);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#00FFCC").s().p("Ag8AqQAphIA0hAQAcgGgCAQQAJAvgJAUIAFARQg+AYgPBHQgKACgHAAQgrAAANg3g");
	this.shape_188.setTransform(87.745,247.8552);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#00FFCC").s().p("AhBAmQAkhMA4g6QAUgEAAALQAOAjACASIAGATQhEAegOBTQgMACgJAAQguAAAPg8g");
	this.shape_189.setTransform(88.5649,263.7113);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#00FFCC").s().p("AhFAiQAehRA+gzQAMgCABAFIAfAoQAEAJAEAMQhKAkgNBeQgOAEgLAAQgxAAARhCg");
	this.shape_190.setTransform(89.3356,279.5562);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#00FFCC").s().p("AhKAfQAZhVBEguIAFAAIAvAaIAJAYQhPAqgNBpQgQAEgNAAQg0AAAThGg");
	this.shape_191.setTransform(90.1467,295.3964);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#00FFCC").s().p("AhKAWQAXhNA9gqIAKgBIAqAXQALAQAEAWQhHAugTBaIgLAAQg/AAANhNg");
	this.shape_192.setTransform(90.1893,318.0983);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#00FFCC").s().p("AhJALQAVhFA2gmIAQgCIAlAUQAQAWAEAeQg+A0gbBKQg/gJAEhQg");
	this.shape_193.setTransform(90.1408,340.95);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#00FFCC").s().p("AhIAAQATg8AwgiIAUgEIAhASQAVAbAEAmQg1A6giA5Qg0gWgGhOg");
	this.shape_194.setTransform(90.05,363.8);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#00FFCC").s().p("AhHgKQARg1AqgeIAZgGIAcAPQAcAiADAvQgtA+goApQgpgkgRhKg");
	this.shape_195.setTransform(89.925,386.675);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#00FFCC").s().p("AhFgWQAPgtAjgZIAegHIAXAMQAhAnADA3QgjBFgwAYQgegygahIg");
	this.shape_196.setTransform(89.8,409.575);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#00FFCC").s().p("AhEghQAOgkAcgWIAjgIIATAJQAnAtACBAQgbBKg3AHQgShBglhEg");
	this.shape_197.setTransform(89.675,432.45);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#00FFCC").s().p("AgMBkQgIhOguhCQALgcAWgRIAogKIAOAGQAsAzACBIQgQBGgzAAIgMAAg");
	this.shape_198.setTransform(89.575,455.346);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#00FFCC").s().p("AgMBhQAEhcg5g/QAKgUAPgNIAtgLIAKADQAyA5ABBQQgHBBgrAAQgNAAgPgGg");
	this.shape_199.setTransform(89.425,478.4706);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#00FFCC").s().p("AgMBeQAOhqhBg9QAHgLAIgJIAzgNIAFABQA3A+ABBZQAAA9gkAAQgQAAgYgNg");
	this.shape_200.setTransform(89.325,501.7182);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#00FFCC").s().p("AgMBXQAMhhg7g4QAKgQAPgKQAfgIAVABQgHABgBAHQAyA5AABRQgBA2ggAAQgQAAgXgOg");
	this.shape_201.setTransform(88.95,522.7444);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#00FFCC").s().p("AgMBSQAMhYg3gzQAOgWAVgLQAjgJASAIQgQADgFAOQAsAzAABJQgCAugcAAQgQAAgWgOg");
	this.shape_202.setTransform(88.5753,543.5704);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#00FFCC").s().p("AgMBOQALhPgygvQARgaAcgNQAogLAOARQgZAEgIAUQAmAtgCBCQgCAmgYAAQgPAAgWgOg");
	this.shape_203.setTransform(88.2028,564.3152);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#00FFCC").s().p("AgUBKQAKhIgsgpQAUgfAigOQAugMAJAYQgiAFgMAbQAhAogDA5QgCAggVAAQgOAAgWgPg");
	this.shape_204.setTransform(88.6,585.0572);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#00FFCC").s().p("AgeBGQAJg/gngkQAXgkAogPQAzgOAHAgQgsAGgPAiQAbAhgEAyQgDAYgRAAQgMAAgXgPg");
	this.shape_205.setTransform(89.2,605.8031);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#00FFCC").s().p("AgnBCQAHg3ghgfQAagoAugRQA5gPADAoQg1AHgSAoQAUAcgFAqQgDARgNAAQgMAAgWgQg");
	this.shape_206.setTransform(89.8,626.5688);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#00FFCC").s().p("AgxA9QAGgtgcgaQAeguA1gSQA9gQgBAvQg+AIgWAuQAPAXgFAiQgDALgKAAQgMAAgWgSg");
	this.shape_207.setTransform(90.3768,647.3232);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#00FFCC").s().p("Ag7A5QAFglgWgVQAggzA8gTQBCgSgFA3QhGAJgaA1QAKARgHAbQgDAEgGAAQgLAAgXgTg");
	this.shape_208.setTransform(90.9925,668.142);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#00FFCC").s().p("AhFAzQADgcgQgRQAkg3BBgUQBIgTgJA+QhQAKgdA8QAEAMgHASIgEABQgLAAgYgYg");
	this.shape_209.setTransform(91.625,689.0414);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#00FFCC").s().p("AhPAsQACgTgLgNQAng7BIgWQBNgVgNBHQhXALgiBCQgCAGgJALQgKgEgYgbg");
	this.shape_210.setTransform(92.2189,710.084);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#00FFCC").s().p("AhZAkQABgKgGgIQAqhABPgXQBSgWgRBOQhhAMglBJIgRADQgMgOgSgZg");
	this.shape_211.setTransform(92.871,731.183);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#00FFCC").s().p("AhKBGIgaguIAAgFQAthFBWgYQBXgYgVBWQhqAMgpBQQgNgEgLgGg");
	this.shape_212.setTransform(93.5205,752.7717);
	this.shape_212._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_181}]},11).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_210}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_212}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_212).wait(42).to({_off:false},0).wait(12));

	// confeti12
	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#0099FF").s().p("AgYAUQAHgaAVgXQAVgIAAAWQgaAOgCAgIgEABQgKAAgHgMg");
	this.shape_213.setTransform(130,87.0111);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#0099FF").s().p("AgYAUQAJgZATgXQAUgJABAWQgZAQgDAfIgDAAQgLAAgHgMg");
	this.shape_214.setTransform(130,105.7925);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#0099FF").s().p("AgYAUQAMgYAQgZQAUgIABAWQgWASgGAdIgDAAQgLAAgHgMg");
	this.shape_215.setTransform(129.975,124.5643);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#0099FF").s().p("AgYAUQAPgWAMgaQAUgJACAWQgUAUgIAbIgCAAQgNAAgGgMg");
	this.shape_216.setTransform(129.975,143.3479);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#0099FF").s().p("AgYAUQASgVAJgbQATgJADAWQgRAWgLAZIgCAAQgNAAgGgMg");
	this.shape_217.setTransform(129.95,162.1479);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#0099FF").s().p("AgYAUQAVgUAFgdQAUgJADAWIgcAwIgBAAQgPAAgFgMg");
	this.shape_218.setTransform(129.95,180.9203);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#0099FF").s().p("AgYATQAXgTADgdQAUgJADAWQgMAbgPAVQgRAAgFgNg");
	this.shape_219.setTransform(129.925,199.7068);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#0099FF").s().p("AgYAUQAZgTAAgeQAUgJAEAWQgJAdgSAUQgRgBgFgMg");
	this.shape_220.setTransform(129.925,218.484);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#0099FF").s().p("AgZATQAdgRgDgfQATgKAGAXQgHAfgVASQgSgBgFgNg");
	this.shape_221.setTransform(129.9,237.2712);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#0099FF").s().p("AgUAbQgDgEgCgFQAbgSAAgdIADgBQAFgCAEABQAIACADAMIABACQgKAagRAUIgCABQgKAAgHgFg");
	this.shape_222.setTransform(128.35,256.33);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#0099FF").s().p("AgUAaQgEgEgBgFQAZgTADgbIADgBQAFgBAEABQAIACADALIAAACQgNAYgPAVIgCABIgCABQgJAAgFgGg");
	this.shape_223.setTransform(126.825,275.4021);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#0099FF").s().p("AgVAaQgEgFgBgGQAYgUAGgYIADgBQAFgBAEACQAIACADALIgBACIgdAsIgCABIgDAAQgJAAgEgFg");
	this.shape_224.setTransform(125.275,294.4509);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#0099FF").s().p("AgXAZQgDgEAAgHQAVgVAKgWIADgBQAFAAAEACQAIADACAKIgBACQgSATgMAXIgCACIgDAAQgJAAgFgGg");
	this.shape_225.setTransform(123.775,313.5067);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#0099FF").s().p("AgYAZQgCgFgBgGQAUgXANgTIADgCQAFABAEACQAIADACAKIgCACQgVAQgKAaIgCABIgDAAQgJAAgFgGg");
	this.shape_226.setTransform(122.225,332.5313);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#0099FF").s().p("AgYAYQgDgFAAgGQASgYAQgRIADgBIAJADQAIAEABAJIgCACQgYANgIAbIgCABIgEAAQgJAAgDgGg");
	this.shape_227.setTransform(120.675,351.5875);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#0099FF").s().p("AgaAYQgCgFAAgIQAQgZATgOIADgBQAGABAEADQAHAEACAJIgDABQgaAMgHAcIgCABIgFAAQgJAAgDgGg");
	this.shape_228.setTransform(119.1708,370.62);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#0099FF").s().p("AgbAYQgCgGABgHQAPgcAYgMQAGACAEADQAHAFABAJQgfAJgGAeIgHABQgIAAgEgGg");
	this.shape_229.setTransform(117.62,389.649);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#0099FF").s().p("AgYAVQgCgEAAgHIAAgBQANgYAVgLIAEgCQAFACAEADIABACQAGAEAAAHQgcAJgHAcIAAABIgEABQgKAAgDgIg");
	this.shape_230.setTransform(118.55,407.0612);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#0099FF").s().p("AgWATQgCgEgBgGIAAAAQANgZAUgKIAEgBQAFACADADIACABQAEAEAAAHQgYAJgJAcIAAAAIgBABQgKAAgEgJg");
	this.shape_231.setTransform(119.5278,424.4514);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#0099FF").s().p("AgHAaQgJgBgEgIQgCgDgBgGIAAgBQAMgXAUgJIADAAQAFABADACIACACQADADgBAHQgVAKgKAag");
	this.shape_232.setTransform(120.4725,441.9);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#0099FF").s().p("AgTAPIgDgIIAAAAQAMgXASgIIAEgBIAIAFIABAAQADADgCAIQgRAJgMAaQgHgDgFgIg");
	this.shape_233.setTransform(121.4818,459.325);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#0099FF").s().p("AgIAYQgFgEgEgHIgEgHIAAgBQALgWASgHIAEAAIAHAEIABAAQADADgEAHQgNAKgOAZg");
	this.shape_234.setTransform(122.4521,476.8);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#0099FF").s().p("AgIAXIgHgNIgEgGQAKgWARgGIAEABIAGAEIACAAQABACgEAIQgKAJgPAZIAAgCg");
	this.shape_235.setTransform(123.4705,494.225);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#0099FF").s().p("AgSADQAJgVARgFQAGABAFADQACADgdAoQgBgMgJgJg");
	this.shape_236.setTransform(124.4588,511.675);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#0099FF").s().p("AgSAAQADgIAGgFIAFgEQAGgDAHgBQAFADAFADQABADgHAMIgEAEIgIAIIgIAKQgCgMgJgKg");
	this.shape_237.setTransform(124.3625,525.35);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#0099FF").s().p("AgTgCQAEgKAHgEIAGgCQAGgCAGACQAFADAEAEQACAEgHALIgFAFQgEAEgFADIgGAEQgCgNgLgJg");
	this.shape_238.setTransform(124.2641,539.0375);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#0099FF").s().p("AgFATQgDgOgLgJQAEgLAHgDIAIgBQAFABAGADQAFAEADAFQACAFgGALIgFAFQgFAEgFABQgBgBgEAAg");
	this.shape_239.setTransform(124.1661,552.625);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#0099FF").s().p("AgFAPQgCgOgMgKQAEgMAIgBIAIAAQAGADAGAFIAHALQABAFgEAMIgHAFQgFAEgFAAQAAgFgFgDg");
	this.shape_240.setTransform(124.0938,566.4167);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#0099FF").s().p("AgBAaQABgIgEgGQgCgNgNgLQAEgNAIgBIAJACQAHAFAFAGIAGANQABAHgDALQgEADgEACQgFAEgFAAIgBgBg");
	this.shape_241.setTransform(123.9975,580.16);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#0099FF").s().p("AgDAeQADgLgDgJQgDgOgOgMQAEgOAKABQAFAAAFADQAGAHAEAJIAGANQABAJgCALIgJAFQgEACgGAAIgDAAg");
	this.shape_242.setTransform(123.9031,593.8946);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#0099FF").s().p("AgEAhQAIghgYgUQAEgPAKACQAGABAFADQASAcgDAbQgFAEgEACQgEACgFAAIgGgBg");
	this.shape_243.setTransform(123.8035,607.6575);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#0099FF").s().p("AgEAhQAGgegVgRQADgRALgCQAFABAGADQAQAXgCAZQgHAHgCAFQgFADgFAAIgFgBg");
	this.shape_244.setTransform(120.2358,626.9721);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#0099FF").s().p("AgGAgQAFgZgSgPQACgUAMgFQAFAAAFADQAQAUgBAVQgKAKAAAJQgFAEgFAAQgCAAgEgCg");
	this.shape_245.setTransform(116.653,646.305);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#0099FF").s().p("AgHAgQAEgVgQgNQABgWAOgJQAEAAAGACQAOAQAAASQgNANACAOQgFAEgEAAQgDAAgEgCg");
	this.shape_246.setTransform(113.1,665.613);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#0099FF").s().p("AgIAgQACgQgNgMQABgZAOgMQAFAAAFACQANAMABAQQgQAOAFASQgGAFgFAAQgDAAgDgCg");
	this.shape_247.setTransform(109.5,684.906);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#0099FF").s().p("AgIAgQgBgMgKgKQAAgbAPgQQAFAAAFABQALAIADANQgTASAIAVQgHAGgFAAQgDAAgCgCg");
	this.shape_248.setTransform(105.95,704.2143);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#0099FF").s().p("AgKAgQgCgIgHgIQgBgdARgUQAFgBAEACQAKAEAEAKQgUAUAIAaQgHAGgFAAQgDAAgDgCg");
	this.shape_249.setTransform(102.3721,723.5276);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#0099FF").s().p("AgLAgQgEgEgEgGQgCggASgXQAFgBAEABQAIABAGAGQgXAZAKAcQgHAHgFAAQgDAAgDgCg");
	this.shape_250.setTransform(98.8147,742.8309);
	this.shape_250._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_213}]},10).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape_215}]},1).to({state:[{t:this.shape_216}]},1).to({state:[{t:this.shape_217}]},1).to({state:[{t:this.shape_218}]},1).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_221}]},1).to({state:[{t:this.shape_222}]},1).to({state:[{t:this.shape_223}]},1).to({state:[{t:this.shape_224}]},1).to({state:[{t:this.shape_225}]},1).to({state:[{t:this.shape_226}]},1).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_230}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_232}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_239}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_241}]},1).to({state:[{t:this.shape_242}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_244}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_246}]},1).to({state:[{t:this.shape_247}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_249}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_250}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_250).wait(47).to({_off:false},0).wait(7));

	// confeti11
	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#FF6699").s().p("AAIBBQgygzgPhHQgFgXA3ACQgCBQBDAhQgGAtgSAAQgLAAgPgPg");
	this.shape_251.setTransform(121.908,94.4492);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#FF6699").s().p("AAKBEQgsg4gZg/QgFgfA5AGQAFBMA+AiQgDAsgWAAQgKAAgPgKg");
	this.shape_252.setTransform(120.3797,106.3459);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#FF6699").s().p("AAMBGQgmg8gjg4QgFgnA6ALQANBHA5AiQgBAugZAAQgKAAgOgHg");
	this.shape_253.setTransform(118.83,118.2563);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#FF6699").s().p("AAOBJQghhBgsgwQgFgwA7AQQAVBBA0AlQACAvggAAQgJAAgLgEg");
	this.shape_254.setTransform(117.3072,130.1708);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#FF6699").s().p("AAPBMQgahHg2gpQgFg3A8AUQAeA8AtAmQAGAygqAAIgOgBg");
	this.shape_255.setTransform(115.8152,142.1537);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#FF6699").s().p("AARBOQgVhMg/ghQgGhAA9AZQAnA3AoAnQALA2g8AAIgBAAg");
	this.shape_256.setTransform(114.3113,154.1721);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#FF6699").s().p("AhFgbQgGhIA+AeQAvAyAiAoQAPAzhAAHQgRhPhHgbg");
	this.shape_257.setTransform(112.8402,166.2463);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#FF6699").s().p("AhIgXQgGhQA/AiQA4AsAcAqQATAwhEAPQgLhUhRgTg");
	this.shape_258.setTransform(111.3554,178.3302);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#FF6699").s().p("AhKgUQgHhXBBAmQA/AnAYAsQAXAshJAXQgFhZhagMg");
	this.shape_259.setTransform(109.8993,190.4023);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#FF6699").s().p("AhKgdQADhCBDAgQBBAwAMAkQAMAmhHAPQgKhWhOgRg");
	this.shape_260.setTransform(109.6802,205.4138);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#FF6699").s().p("AhKgmQALgsBFAZQBEA5AAAdQABAehGAIQgOhShBgXg");
	this.shape_261.setTransform(109.5502,220.4221);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#FF6699").s().p("AhLgwQAUgWBHATQBFBAgKAYQgLAXhDAAQgVhOgzgeg");
	this.shape_262.setTransform(109.5689,235.4025);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#FF6699").s().p("AgOA2QgZhLgngjQAdAABKAMQBHBJgWARQgPALgkAAQgRAAgUgDg");
	this.shape_263.setTransform(109.6852,250.3187);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#FF6699").s().p("AgaA0QgfhIgYgpQAlAWBMAFQBJBSghAKQgNAEgRAAQgcAAgogKg");
	this.shape_264.setTransform(109.9161,264.8555);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#FF6699").s().p("AgmAvQgkhDgLgvQAuAsBOgCQBLBbgtACIgIAAQgqAAg5gVg");
	this.shape_265.setTransform(110.157,279.587);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#FF6699").s().p("ABDBNQg4gFg9gfQgphAACg1QA3BCBRgJQBIBggwAAIgEAAg");
	this.shape_266.setTransform(110.4332,294.5346);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#FF6699").s().p("ABCBVQhCgMg9gnQgvg8AQg7QBABXBTgOQBHBigxAAIgLgBg");
	this.shape_267.setTransform(110.5595,309.4797);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#FF6699").s().p("ABCBdQhNgTg8gvQgzg4AdhBQBIBtBWgWQBFBmgyAAQgIAAgKgCg");
	this.shape_268.setTransform(110.5777,324.4995);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#FF6699").s().p("ABDBkQhZgZg6g3Qg5g1ArhGQBRCCBYgcQBEBpgzAAQgKAAgPgEg");
	this.shape_269.setTransform(110.5414,339.4875);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#FF6699").s().p("ABABOQhNgOg2gpQg1goAdg+QBRBmBHgeQBHBXgzAAQgHAAgKgCg");
	this.shape_270.setTransform(108.9629,366.5668);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#FF6699").s().p("AA+A3QhBgDgzgbQgxgaAQg2QBRBKA2ggQBNBFg6AAIgFgBg");
	this.shape_271.setTransform(107.3338,393.706);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#FF6699").s().p("AgnAZQgugNACgtQBSAuAmgiQBPAsg2AIQgVADgTAAQggAAgdgJg");
	this.shape_272.setTransform(105.5791,421.0238);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#FF6699").s().p("AhMgIQBQASAWglQBQASgsARQgrAUgqAAQgqAAgLgkg");
	this.shape_273.setTransform(103.6942,448.1);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#FF6699").s().p("AhGAQQBQgJAFgnQBPgLgfAfQggAegmANQgNAFgLAAQgXAAgQgUg");
	this.shape_274.setTransform(101.849,475.1091);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#FF6699").s().p("AhBAtQBPgmgLgpQBPgmgUAqQgVApgjAbQgSAPgVAAQgQAAgQgIg");
	this.shape_275.setTransform(100.0612,501.823);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#FF6699").s().p("Ag9BIQBQhCgagrQBNhCgJA1QgJA0gfApQgXAfgkAAQgLAAgMgCg");
	this.shape_276.setTransform(98.3418,528.6269);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#FF6699").s().p("Ag6BiQBQhegrguQBNhdACBBQADBAgcA1QgZAzg6AAIgIAAg");
	this.shape_277.setTransform(96.7604,555.5899);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#FF6699").s().p("AgmgvQBNh5AOBMQAOBLgYBDQgXBEhNAFQBPh7g8gvg");
	this.shape_278.setTransform(95.4829,582.6459);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#FF6699").s().p("Ag6BsQBRhpg1gxQBPhnAIBHQAIBGgbA7QgZA5hAAAIgHAAg");
	this.shape_279.setTransform(93.8151,601.4111);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#FF6699").s().p("Ag7BcQBShWgtgzQBQhWACBCQACBBgeA1QgZAqgsAAQgLAAgLgDg");
	this.shape_280.setTransform(92.2312,620.2499);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#FF6699").s().p("Ag+BMQBUhFglg1QBRhDgDA9QgEA7giAtQgXAegfAAQgPAAgSgGg");
	this.shape_281.setTransform(90.7321,639.1888);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#FF6699").s().p("AhBA6QBWgygeg3QBTgygJA4QgKA3gmAlQgTAVgXAAQgTAAgVgOg");
	this.shape_282.setTransform(89.2733,658.205);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#FF6699").s().p("AhEApQBYghgXg5QBVgggQAzQgQAygpAeQgQAMgRAAQgWAAgWgVg");
	this.shape_283.setTransform(87.8689,677.2862);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#FF6699").s().p("AhHAXQBZgPgQg6QBXgPgVAuQgWAugsAVQgNAHgNAAQgaAAgVggg");
	this.shape_284.setTransform(86.438,696.3428);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#FF6699").s().p("AhLAHQBbADgIg8QBYACgbAqQgcApgvAOQgJACgIAAQgiAAgSgsg");
	this.shape_285.setTransform(85.051,715.241);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#FF6699").s().p("AhOgHQBcAUgBg+QBbAUgiAkQgiAkgyAHIgJAAQgqAAgNg5g");
	this.shape_286.setTransform(83.6775,734.0298);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#FF6699").s().p("AgWAyQg2gBgGhIQBeAmAHhAQBbAmgnAeQgnAfgzAAIgDAAg");
	this.shape_287.setTransform(82.3205,752.9265);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#FF6699").s().p("AgfAxQg5gJAChQQBgA4AOhCQBdA2gtAbQgjAUgoAAQgNAAgPgCg");
	this.shape_288.setTransform(80.9663,771.9375);
	this.shape_288._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_251}]},7).to({state:[{t:this.shape_252}]},1).to({state:[{t:this.shape_253}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_255}]},1).to({state:[{t:this.shape_256}]},1).to({state:[{t:this.shape_257}]},1).to({state:[{t:this.shape_258}]},1).to({state:[{t:this.shape_259}]},1).to({state:[{t:this.shape_260}]},1).to({state:[{t:this.shape_261}]},1).to({state:[{t:this.shape_262}]},1).to({state:[{t:this.shape_263}]},1).to({state:[{t:this.shape_264}]},1).to({state:[{t:this.shape_265}]},1).to({state:[{t:this.shape_266}]},1).to({state:[{t:this.shape_267}]},1).to({state:[{t:this.shape_268}]},1).to({state:[{t:this.shape_269}]},1).to({state:[{t:this.shape_270}]},1).to({state:[{t:this.shape_271}]},1).to({state:[{t:this.shape_272}]},1).to({state:[{t:this.shape_273}]},1).to({state:[{t:this.shape_274}]},1).to({state:[{t:this.shape_275}]},1).to({state:[{t:this.shape_276}]},1).to({state:[{t:this.shape_277}]},1).to({state:[{t:this.shape_278}]},1).to({state:[{t:this.shape_279}]},1).to({state:[{t:this.shape_280}]},1).to({state:[{t:this.shape_281}]},1).to({state:[{t:this.shape_282}]},1).to({state:[{t:this.shape_283}]},1).to({state:[{t:this.shape_284}]},1).to({state:[{t:this.shape_285}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_287}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_288}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_288).wait(44).to({_off:false},0).wait(10));

	// confeti10
	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#FFFF00").s().p("AgGAOQAHgNgIgLQAGgJAGAIQAFANgFAMQgDACgCAAQgDAAgDgCg");
	this.shape_289.setTransform(-17.3875,-0.2064);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#FFFF00").s().p("AgHAQIAAAAIACgDQAFgNgIgMQAHgKAHAJIAAABQAFANgEAMIgBADIgBAAQgEACgCAAQgDAAgDgCg");
	this.shape_290.setTransform(-3.1234,9.8561);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#FFFF00").s().p("AgIASIAAAAIABgDQAHgPgJgNQAHgLAIAJIAAACQAGAPgEANIgBADIgBAAQgEACgDAAQgEAAgDgCg");
	this.shape_291.setTransform(11.1592,19.9299);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#FFFF00").s().p("AgJAUIAAAAIACgEQAHgQgKgPQAIgMAJAKIAAACQAGAQgEAPIgBADIgBABQgFACgDAAQgEAAgEgCg");
	this.shape_292.setTransform(25.4092,30.0174);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#FFFF00").s().p("AgKAWIAAAAIACgEQAIgSgLgRQAJgMAJALIABABQAGATgEAQIgBADIgBABQgFACgEAAQgFAAgEgCg");
	this.shape_293.setTransform(39.6714,40.0801);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#FFFF00").s().p("AgKAYIgBAAIACgEQAKgUgNgSQAKgOAKAMIABACQAHAUgFASIgBADIgBABQgGADgFAAQgEAAgEgDg");
	this.shape_294.setTransform(53.9337,50.1492);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#FFFF00").s().p("AgMAaIAAgBIACgEQAKgVgNgUQAKgPALANIABABQAIAXgGATIgBAEIgBABQgGADgFAAQgFAAgFgDg");
	this.shape_295.setTransform(68.2163,60.2159);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#FFFF00").s().p("AgMAcIgBgBIACgEQAMgXgPgVQALgQAMANIABACQAIAYgGAVIgBAEIgBABQgHADgFAAQgFAAgFgDg");
	this.shape_296.setTransform(82.4786,70.2851);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#FFFF00").s().p("AgNAeIgBgBIADgFQAMgYgQgXQAMgRANAPIABABQAJAagHAXIgBAEIgBABQgIADgFAAQgGAAgFgDg");
	this.shape_297.setTransform(96.7408,80.3478);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#FFFF00").s().p("AgOAgIgBgBIADgFQANgagRgZQANgRANAPIACABQAJAcgHAYIgBAEIgBABQgIAEgGAAQgGAAgGgDg");
	this.shape_298.setTransform(110.9908,90.4353);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#FFFF00").s().p("AgPAiIgBgBIADgGQAOgcgSgZQANgTAPAPIABACQAKAegHAZIgCAFIgBABQgIAFgGAAQgHAAgGgEg");
	this.shape_299.setTransform(125.2735,100.5083);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#FFFF00").s().p("AgRAjIADgGQAPgegTgbQAOgVARAUQAKAfgHAbIgDAGQgJAFgGAAQgIAAgHgFg");
	this.shape_300.setTransform(139.5357,110.5745);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#FFFF00").s().p("AgOAjIACgGQANgegUgaQANgWASATQAMAegGAcIgCAGQgKAGgHAAQgHAAgGgFg");
	this.shape_301.setTransform(140.8779,126.9604);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#FFFF00").s().p("AgNAkIADgGQALgfgVgZQAMgWATASQANAegFAbIgCAHQgJAFgIAAQgHAAgGgDg");
	this.shape_302.setTransform(142.2579,143.348);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#FFFF00").s().p("AgKAlIACgGQAKgggXgYQALgXAUARQAOAegDAbIgBAHQgKAHgKAAQgFAAgFgDg");
	this.shape_303.setTransform(143.609,159.7368);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#FFFF00").s().p("AgIAlIACgGQAIgggYgXQAKgYAVAQQAQAdgCAcIgBAHQgLAIgJAAQgFAAgFgDg");
	this.shape_304.setTransform(144.9861,176.1306);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#FFFF00").s().p("AgGAmIABgGQAHgigZgWQAJgYAVAPQASAdgBAcIAAAHQgLAJgKAAQgEAAgFgCg");
	this.shape_305.setTransform(146.3757,192.5208);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#FFFF00").s().p("AgFAnIABgHQAGgigagVQAHgZAXAOQATAcABAcIgBAIQgLAKgMAAIgHgBg");
	this.shape_306.setTransform(147.8,208.9395);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#FFFF00").s().p("AgDAnIABgHQAEgigcgUQAHgaAYANQAUAcACAcIAAAIQgMALgMAAIgGgBg");
	this.shape_307.setTransform(149.2,225.3324);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#FFFF00").s().p("AgBAoIABgHQACgjgdgTQAFgbAZAMQAWAbADAdIAAAIQgLANgNAAIgFgBg");
	this.shape_308.setTransform(150.6,241.728);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#FFFF00").s().p("AAAAoIAAgHQACgkgfgSQAFgbAZALQAYAbAEAdIABAIQgLAOgOAAIgFgBg");
	this.shape_309.setTransform(152.025,258.1207);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#FFFF00").s().p("AABApIAAgHQAAglgfgRQADgcAbALQAYAZAHAeIAAAIQgLAPgPAAIgEAAg");
	this.shape_310.setTransform(153.45,274.5224);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#FFFF00").s().p("AACApQACgrgkgRQADgdAcAKQAdAcAFAjQgLARgQAAIgEgBg");
	this.shape_311.setTransform(154.875,290.916);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#FFFF00").s().p("AghgQQADgeAdAGQAeAaAFAiQgQATgQADQAAgpgjgRg");
	this.shape_312.setTransform(153.6,316.875);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#FFFF00").s().p("AgigMQAEgfAdACQAfAWAFAjQgTATgPAHQgBgkgigSg");
	this.shape_313.setTransform(152.375,342.8189);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#FFFF00").s().p("AgjgIQAFghAegBQAeATAFAjIgiAfQgCghgigSg");
	this.shape_314.setTransform(151.1,368.725);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#FFFF00").s().p("AgkgEQAFgiAfgFQAfAPAGAkQgZATgLARQgFgdgggTg");
	this.shape_315.setTransform(149.85,394.65);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#FFFF00").s().p("AgkAAQAEgjAggKQAhAOAEAjQgbAUgKAVQgGgagegTg");
	this.shape_316.setTransform(148.6,420.55);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#FFFF00").s().p("AglADQAFgkAggMQAiAKAEAjQgeAUgIAaQgJgWgcgVg");
	this.shape_317.setTransform(147.35,446.45);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#FFFF00").s().p("AgmAHQAGglAhgQQAhAGAFAlQghAUgGAeQgLgSgbgWg");
	this.shape_318.setTransform(146.075,472.375);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#FFFF00").s().p("AgnALQAGgnAigTQAiADAFAlQgkAUgEAjQgNgPgagWg");
	this.shape_319.setTransform(144.825,498.275);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#FFFF00").s().p("AgnAPQAGgoAigXQAjAAAEAlQgmAVgCAnQgQgLgXgXg");
	this.shape_320.setTransform(143.575,524.175);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#FFFF00").s().p("AgoATQAGgpAkgbQAjgDAEAlQgpAVgBAtQgRgIgWgYg");
	this.shape_321.setTransform(142.325,550.0889);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#FFFF00").s().p("AgpAYQAHgsAlgeQAjgGAEAlQgqAVgBAyQgTgFgVgXg");
	this.shape_322.setTransform(141.05,575.9586);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#FFFF00").s().p("AgqAcQAHgsAlgjQAlgJAEAmQguAWABA1QgVAAgTgZg");
	this.shape_323.setTransform(139.825,601.805);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#FFFF00").s().p("AgrAhQAIguAmgmQAlgNAEAmQgxAXADA6IgFAAQgUAAgQgWg");
	this.shape_324.setTransform(138.55,627.6614);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#FFFF00").s().p("AgqAhQAIguAlgnQAkgMAEAmQgwAXADA6IgFABQgTAAgQgXg");
	this.shape_325.setTransform(136.7,636.9626);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#FFFF00").s().p("AgqAhQAIguAlgnQAkgNAEAnQgvAXACA6IgFABQgTAAgQgXg");
	this.shape_326.setTransform(134.875,646.252);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#FFFF00").s().p("AgpAhQAHgvAlgmQAjgNAEAnQgvAXADA7IgFAAQgTAAgPgXg");
	this.shape_327.setTransform(133.05,655.5626);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#FFFF00").s().p("AgoAiQAGgwAlgnQAkgMADAnQguAXACA7IgFABQgTAAgOgXg");
	this.shape_328.setTransform(131.2,664.8641);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#FFFF00").s().p("AgoAiQAHgwAkgnQAjgNADAnQgtAYACA7IgEABQgTAAgPgXg");
	this.shape_329.setTransform(129.375,674.1533);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#FFFF00").s().p("AgoAiQAHgwAkgnQAigNAEAnQgtAYACA8IgEAAQgTAAgPgXg");
	this.shape_330.setTransform(127.525,683.4546);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#FFFF00").s().p("AgnAiQAHgwAjgoQAigNADAoQgsAYACA8IgEABQgSAAgPgYg");
	this.shape_331.setTransform(125.675,692.7561);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#FFFF00").s().p("AgnAjQAHgxAjgnQAhgOAEAoQgsAZACA8IgEAAQgSAAgPgXg");
	this.shape_332.setTransform(123.85,702.0452);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#FFFF00").s().p("AgmAjQAHgxAigoQAhgNADAoQgrAYACA9IgEAAQgSAAgOgXg");
	this.shape_333.setTransform(122.025,711.3561);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#FFFF00").s().p("AgmAjQAHgxAhgoQAigNADAoQgrAYADA9IgFAAQgSAAgOgXg");
	this.shape_334.setTransform(120.2,720.6452);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#FFFF00").s().p("AgmAkQAHgyAigoQAhgOADApQgqAYABA+IgEAAQgSAAgOgXg");
	this.shape_335.setTransform(118.35,729.9468);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#FFFF00").s().p("AglAkQAHgyAggpQAhgNADApQgpAYACA+IgFAAQgRAAgOgXg");
	this.shape_336.setTransform(116.5,739.2481);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#FFFF00").s().p("AglAkQAHgyAggpQAggOAEApQgqAZADA+IgEAAQgSAAgOgXg");
	this.shape_337.setTransform(114.675,748.5371);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#FFFF00").s().p("AgkAkQAHgyAfgpQAggOADApQgoAZACA/IgEAAQgRAAgOgYg");
	this.shape_338.setTransform(112.825,757.8387);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#FFFF00").s().p("AgjAkQAGgzAfgpQAfgNAEApQgpAZADA/IgEAAQgRAAgNgYg");
	this.shape_339.setTransform(111,767.1493);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#FFFF00").s().p("AgjAlQAGg0AfgpQAfgOADAqQgnAZACA/IgEAAQgRAAgNgXg");
	this.shape_340.setTransform(109.175,776.4387);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#FFFF00").s().p("AgjAlQAHg0AegpQAfgOADAqQgnAZACBAIgEAAQgRAAgNgYg");
	this.shape_341.setTransform(107.325,785.74);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_289}]}).to({state:[{t:this.shape_290}]},1).to({state:[{t:this.shape_291}]},1).to({state:[{t:this.shape_292}]},1).to({state:[{t:this.shape_293}]},1).to({state:[{t:this.shape_294}]},1).to({state:[{t:this.shape_295}]},1).to({state:[{t:this.shape_296}]},1).to({state:[{t:this.shape_297}]},1).to({state:[{t:this.shape_298}]},1).to({state:[{t:this.shape_299}]},1).to({state:[{t:this.shape_300}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_302}]},1).to({state:[{t:this.shape_303}]},1).to({state:[{t:this.shape_304}]},1).to({state:[{t:this.shape_305}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_308}]},1).to({state:[{t:this.shape_309}]},1).to({state:[{t:this.shape_310}]},1).to({state:[{t:this.shape_311}]},1).to({state:[{t:this.shape_312}]},1).to({state:[{t:this.shape_313}]},1).to({state:[{t:this.shape_314}]},1).to({state:[{t:this.shape_315}]},1).to({state:[{t:this.shape_316}]},1).to({state:[{t:this.shape_317}]},1).to({state:[{t:this.shape_318}]},1).to({state:[{t:this.shape_319}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_321}]},1).to({state:[{t:this.shape_322}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_325}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_328}]},1).to({state:[{t:this.shape_329}]},1).to({state:[{t:this.shape_330}]},1).to({state:[{t:this.shape_331}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_333}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_335}]},1).to({state:[{t:this.shape_336}]},1).to({state:[{t:this.shape_337}]},1).to({state:[{t:this.shape_338}]},1).to({state:[{t:this.shape_339}]},1).to({state:[{t:this.shape_340}]},1).to({state:[{t:this.shape_341}]},1).to({state:[{t:this.shape_341}]},1).wait(1));

	// confeti9
	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#33CC33").s().p("AhQgJQBVgDAcg/QAfARALAUIAGAeQgRAjgmAWIgUAKQgZALggAGQgTgPgKhGg");
	this.shape_342.setTransform(147.575,87.425);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#33CC33").s().p("AhNgSQAogDAggNQAYgKANgYQAbATALAVIAIAcQgNAagWARQgJAGgKAFIgDABIgUAHQgXAGgdABQgRgSgJhFg");
	this.shape_343.setTransform(147.775,106.225);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#33CC33").s().p("AgzA8QgPgVgHhDIAAAAQAkgGAlgKQATgCALgQQAYAVALAVIAJAcQgOAbgWAPQgJAGgLAEIgCABIgSACIgMAAQgRAAgUgDg");
	this.shape_344.setTransform(147.975,125.1938);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#33CC33").s().p("AgHA9QgVgDgWgLQgPgZgFhAIAAgBQAhgHAogHQAQAEAKgIQATAXAMAXQAFAPAGAMQgQAcgVAOIgVAHIgDABIgRgBg");
	this.shape_345.setTransform(148.175,144.525);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#33CC33").s().p("AAFBDIgQgEQgUgIgTgQQgNgdgDg+IAAAAQAdgLAtgDQALAMAIgBQAQAZAMAYIAMAbQgQAcgVAMIgWAGIgDAAg");
	this.shape_346.setTransform(148.375,163.45);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#33CC33").s().p("AAABKQgIgEgHgFQgTgMgQgUQgLghgCg9IAAAAQAbgMAxAAQAGASAHAIIAZAxQAFAPAIANQgSAdgUAMIgYADIgCAAg");
	this.shape_347.setTransform(148.55,182.2);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#33CC33").s().p("AgEBRQgIgFgIgHQgRgRgMgaQgKgjAAg8IAAgBQAXgOA1ADQACAZAFAQQAJAdAMAYQAHAOAJANQgTAegVAKIgXACIgCgBg");
	this.shape_348.setTransform(148.75,200.9561);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#33CC33").s().p("AgJBZQgIgIgHgJQgQgVgJggQgJgmACg6IAAgBQAVgQA5AGQgDAgAEAYQAFAgANAXQAHAPAJAMQgUAfgUAIIgYABIgCgBg");
	this.shape_349.setTransform(148.9318,219.6547);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#33CC33").s().p("AgMBiQgwg4AIiAQARgSA+AJQgTBnAuA1QgVAggUAGg");
	this.shape_350.setTransform(149.0861,238.3887);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#33CC33").s().p("AgMBiQgmg/AAh1QASgUA4AGQgPBaAqAsQgMAjgSAYQgIABgJAAIgQAAg");
	this.shape_351.setTransform(148.8247,256.8897);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#33CC33").s().p("AgLBhQgdhGgHhqQASgWAyAEQgKBLAlAlQgCAngQApQgKADgOAAIgRgBg");
	this.shape_352.setTransform(148.525,275.4139);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#33CC33").s().p("AgLBhQgUhNgPhfQATgYAsACQgGA8AgAeQAJApgPA7QgKAFgSAAIgUgBg");
	this.shape_353.setTransform(148.3537,293.9119);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#33CC33").s().p("AgOBhQgJhUgXhUQATgaAmAAQgBAtAbAXQASAtgNBMQgKAGgWAAIgYgBg");
	this.shape_354.setTransform(148.4393,312.3833);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#33CC33").s().p("AgSBgQABhagfhKQAUgcAfgCQAEAeAXAQQAcAxgMBdQgLAJgZAAQgLAAgRgDg");
	this.shape_355.setTransform(148.58,330.8583);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#33CC33").s().p("AgWBhQAKhhgng/QAVgeAagFQAHAQASAIQAmA1gKBuQgLAKgdAAQgNAAgSgCg");
	this.shape_356.setTransform(148.8042,349.3364);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#33CC33").s().p("AgaBgQAThngug1QAVggAUgGIAZABQAwA4gICAQgMAMggAAQgPAAgUgDg");
	this.shape_357.setTransform(149.0139,367.8113);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#33CC33").s().p("AgNBdQAIhag2g2QASgfAWgMQAVAJAUgBQAsA2gIByQgLANgiAAIgagCg");
	this.shape_358.setTransform(146.311,383.0033);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#33CC33").s().p("AAABZQgChLg+g4QAPgeAYgRQAdARAbgDQAoAzgHBlQgMANgjAAIgRgBg");
	this.shape_359.setTransform(143.5842,398.2064);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#33CC33").s().p("AAOBWQgOg8hFg7QAKgdAbgXQAmAaAigFQAkAxgHBXQgMAOgmAAIgFAAg");
	this.shape_360.setTransform(140.8813,413.4281);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#33CC33").s().p("AhLgZQAHgcAegcQAtAjApgHQAhAugHBJQgMAPgjABQgaguhMg9g");
	this.shape_361.setTransform(138.1542,428.675);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#33CC33").s().p("AhQgQQAEgbAfgiQA2AsAwgJQAdAqgGA8QgLAPgcADIh5heg");
	this.shape_362.setTransform(135.4264,443.9);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#33CC33").s().p("AhWgIQABgaAhgnQA/A0A3gKQAZAmgGAwQgJANgVAGQgygQhbhCg");
	this.shape_363.setTransform(132.7004,459.15);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#33CC33").s().p("AhbAAQgDgYAkgtQBHA9A+gNQAVAlgFAhQgIAMgOAJQg+gBhihFg");
	this.shape_364.setTransform(129.9828,474.4);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#33CC33").s().p("AhgAGQgHgWAngyQBPBEBFgNQARAhgEAVIgOAWQgMACgMAAQhBAAhag9g");
	this.shape_365.setTransform(127.2183,489.7566);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#33CC33").s().p("AhgAHQACgXAlgzQBMA/BBgMQAQAggEAUQgIAQgQAOQgKACgLAAQg+AAhVg9g");
	this.shape_366.setTransform(126.1814,511.0118);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#33CC33").s().p("AhgAJQALgYAkg1QBJA6A8gKQAPAegDATQgKAVgZASIgRABQg7AAhRg8g");
	this.shape_367.setTransform(125.0679,532.2439);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#33CC33").s().p("AhfAKQAUgaAig2QBFA0A4gGQAOAbgCATQgLAZgiAXIgOABQg4AAhMg9g");
	this.shape_368.setTransform(123.9823,553.5219);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#33CC33").s().p("AhfALQAdgbAhg3QBCAvAzgFQANAbgBAQQgNAfgrAaIgLABQg0AAhIg9g");
	this.shape_369.setTransform(122.8786,574.7579);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#33CC33").s().p("AhfAMQAmgbAgg5QA+ApAugCQAMAZAAAPQgOAkg0AeIgIAAQgxAAhDg9g");
	this.shape_370.setTransform(121.8,596.021);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#33CC33").s().p("AheANQAugcAfg6QA6AjAqAAQAMAXAAAPQgPApg+AhIgFAAQguAAg9g9g");
	this.shape_371.setTransform(120.725,617.2866);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#33CC33").s().p("AheAOQA3gdAdg8QA3AeAmADQALAVABAPQgRAthGAlIgEAAQgqAAg4g+g");
	this.shape_372.setTransform(119.625,638.5297);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#33CC33").s().p("AheAPQBAgeAcg9QAzAYAiAFQAKATACAPQgTAxhOApIgBAAQgoAAgzg+g");
	this.shape_373.setTransform(118.55,659.8008);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#33CC33").s().p("AheAQQBJgfAag/QAxATAcAIQAJARAEAOQgVA2hXAtQgkgBgtg+g");
	this.shape_374.setTransform(117.475,681.075);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#33CC33").s().p("AhdAQQBSgfAYhAQAtANAYAKQAIAPAEANQgVA7hhAxQgggCglg+g");
	this.shape_375.setTransform(116.375,702.35);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#33CC33").s().p("AhdASQBbghAXhCQAqAJATAMIAMAZQgXBAhpA1QgcgFgfg7g");
	this.shape_376.setTransform(115.275,723.6);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#33CC33").s().p("AhdATQBjgiAXhDQAmACAPAPIAMAXQgYBFhzA4QgYgGgYg6g");
	this.shape_377.setTransform(114.2,744.875);
	this.shape_377._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_342}]},8).to({state:[{t:this.shape_343}]},1).to({state:[{t:this.shape_344}]},1).to({state:[{t:this.shape_345}]},1).to({state:[{t:this.shape_346}]},1).to({state:[{t:this.shape_347}]},1).to({state:[{t:this.shape_348}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_350}]},1).to({state:[{t:this.shape_351}]},1).to({state:[{t:this.shape_352}]},1).to({state:[{t:this.shape_353}]},1).to({state:[{t:this.shape_354}]},1).to({state:[{t:this.shape_355}]},1).to({state:[{t:this.shape_356}]},1).to({state:[{t:this.shape_357}]},1).to({state:[{t:this.shape_358}]},1).to({state:[{t:this.shape_359}]},1).to({state:[{t:this.shape_360}]},1).to({state:[{t:this.shape_361}]},1).to({state:[{t:this.shape_362}]},1).to({state:[{t:this.shape_363}]},1).to({state:[{t:this.shape_364}]},1).to({state:[{t:this.shape_365}]},1).to({state:[{t:this.shape_366}]},1).to({state:[{t:this.shape_367}]},1).to({state:[{t:this.shape_368}]},1).to({state:[{t:this.shape_369}]},1).to({state:[{t:this.shape_370}]},1).to({state:[{t:this.shape_371}]},1).to({state:[{t:this.shape_372}]},1).to({state:[{t:this.shape_373}]},1).to({state:[{t:this.shape_374}]},1).to({state:[{t:this.shape_375}]},1).to({state:[{t:this.shape_376}]},1).to({state:[{t:this.shape_377}]},1).to({state:[{t:this.shape_377}]},1).to({state:[{t:this.shape_377}]},1).to({state:[{t:this.shape_377}]},1).to({state:[{t:this.shape_377}]},1).to({state:[{t:this.shape_377}]},1).to({state:[{t:this.shape_377}]},1).to({state:[{t:this.shape_377}]},1).to({state:[{t:this.shape_377}]},1).to({state:[{t:this.shape_377}]},1).to({state:[{t:this.shape_377}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_377).wait(43).to({_off:false},0).wait(11));

	// confeti8
	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#FF6699").s().p("AgIAQQAKgQgKgNQAHgJAIAJQAEAPgEAOQgFACgDAAQgDAAgEgCg");
	this.shape_378.setTransform(-0.05,-0.6439);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#FF6699").s().p("AgLgHQAGgOAKADQAJAMgDAQIgQAKQAFgNgLgOg");
	this.shape_379.setTransform(15.3141,8.3985);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#FF6699").s().p("AgOgBQAFgTANgDQAMAIgBATQgPALgCAJQABgLgNgOg");
	this.shape_380.setTransform(30.7083,17.325);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#FF6699").s().p("AgSAEQAEgWAQgKQAQAEABAXQgVAOABAQQgBgIgQgRg");
	this.shape_381.setTransform(46.175,26.325);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#FF6699").s().p("AgWAKQAEgbASgQQAUAAACAaQgZASADAXQgEgGgSgSg");
	this.shape_382.setTransform(61.6,35.275);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#FF6699").s().p("AgZAQQABgfAYgXQAWgEAEAdQgdAWAEAeQgHgEgTgTg");
	this.shape_383.setTransform(77.05,44.2004);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#FF6699").s().p("AgdAXQABgkAagdQAagIAGAfQgiAaAHAlQgLgBgVgUg");
	this.shape_384.setTransform(92.475,53.1019);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#FF6699").s().p("AggAeQgBgpAegjQAcgMAIAiQgmAeAKAsIgCAAQgPAAgUgUg");
	this.shape_385.setTransform(107.9246,61.9735);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#FF6699").s().p("AgkAlQgBguAggpQAhgQAJAlQgqAhAMAzIgGABQgQAAgVgTg");
	this.shape_386.setTransform(123.3485,70.8685);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#FF6699").s().p("AgoAsQgCgyAjgwQAkgUAMAoQgwAlAPA5IgJACQgTAAgUgSg");
	this.shape_387.setTransform(138.8167,79.7548);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#FF6699").s().p("AgrAzQgDg3Amg3QAngXAOAqQg0ApARBBQgHACgGAAQgUAAgUgRg");
	this.shape_388.setTransform(154.239,88.6695);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#FF6699").s().p("AgvA5QgEg7Apg9QArgcAPAuQg4AtAUBHQgKADgIAAQgVAAgUgRg");
	this.shape_389.setTransform(169.6778,97.5621);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#FF6699").s().p("AgtAwQgCg4Aog2QAkgVARAtQg1AsAQA/IgJABQgYAAgVgWg");
	this.shape_390.setTransform(170.2452,111.8157);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#FF6699").s().p("AgrAlQAAgzAmgwQAfgOASAuQgyAqAMA3QgcgBgVgdg");
	this.shape_391.setTransform(170.8,126.1367);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#FF6699").s().p("AgpAbQADgwAkgpQAYgHAUAuQgvAqAIAtQgagGgSgfg");
	this.shape_392.setTransform(171.35,140.4288);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#FF6699").s().p("AgnASQAGgtAhgiQATgBAVAvQgsApAEAlQgZgMgOghg");
	this.shape_393.setTransform(171.9,154.65);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#FF6699").s().p("AglAJQAJgoAfgdQANAGAWAvQgpAoABAcQgYgSgLgig");
	this.shape_394.setTransform(172.45,168.85);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#FF6699").s().p("AgjAAQALglAdgWIAfA8QgmAogDATQgYgXgGglg");
	this.shape_395.setTransform(173.025,183.025);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#FF6699").s().p("AghgIQANgiAcgQQABAVAZAuQgjAngHALQgWgegDglg");
	this.shape_396.setTransform(173.55,197.2);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#FF6699").s().p("AgegSQAPgdAagKQgFAbAaAvQggAngLACQgVgjACgpg");
	this.shape_397.setTransform(174.095,211.4);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#FF6699").s().p("AgNA4QgUgpAFgqQASgaAYgDQgLAiAbAvQgaAggNAAIgEgBg");
	this.shape_398.setTransform(174.6,225.623);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#FF6699").s().p("AgPA1QgTgvAJgrQAVgXAWADQgSAqAdAvQgTAagOAAQgGAAgFgFg");
	this.shape_399.setTransform(175.0554,239.9612);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#FF6699").s().p("AgRAzQgRg0AMgvQAXgSAVAJQgWAxAcAvQgOAWgOAAQgIAAgJgKg");
	this.shape_400.setTransform(175.4896,254.268);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#FF6699").s().p("AgSAxQgRg5ARgxQAZgPATAQQgcA3AeAwQgLASgMAAQgLAAgMgQg");
	this.shape_401.setTransform(175.8875,268.507);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#FF6699").s().p("AgUA0QgSg3APgwQAcgRAVAJQgXAzAcAxQgOAWgPAAQgKAAgMgLg");
	this.shape_402.setTransform(175.1892,285.507);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#FF6699").s().p("AgVA2QgVg0AOgvQAfgTAXAEQgRAuAaAyQgSAagSAAQgKAAgKgIg");
	this.shape_403.setTransform(174.482,302.4509);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#FF6699").s().p("AgXA6QgWgxAMguQAjgVAYgDQgLAqAXAzQgWAegWAAQgJAAgIgEg");
	this.shape_404.setTransform(173.7632,319.3048);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#FF6699").s().p("AgYA+QgYguAKguQAmgXAagJQgEAlAUA0QgbAkgcAAIgLgBg");
	this.shape_405.setTransform(173.0133,336.1634);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#FF6699").s().p("AgZBBQgagrAIguIBGgoQACAhARA1QgiArgjAAIgCAAg");
	this.shape_406.setTransform(172.2795,353.1275);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#FF6699").s().p("AgvgRQAugcAcgVQAJAdAOA2QgmAugmAEQgcgnAHgtg");
	this.shape_407.setTransform(171.5379,370.1);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#FF6699").s().p("Ag0gMQAygdAegbQAOAYAMA3QgpAwgoAKQgegjAFgug");
	this.shape_408.setTransform(170.7888,387.1);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#FF6699").s().p("Ag4gFQA1ggAfghQAVATAJA4QgsAygrAQQgfggAEgsg");
	this.shape_409.setTransform(170.0323,404.1);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#FF6699").s().p("Ag9AAQA4ghAhgoQAcAPAGA6QgvAzgtAXQghgdACgtg");
	this.shape_410.setTransform(169.2693,421.1);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#FF6699").s().p("AhBAGQA8gjAiguQAiAKADA8QgxA1gvAcQgjgaAAgsg");
	this.shape_411.setTransform(168.4997,438.075);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#FF6699").s().p("AhFALQA/gkAkg1QAoAGAAA+Qg0A1gxAkQglgXgBgtg");
	this.shape_412.setTransform(167.725,455.1);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#FF6699").s().p("AhKARQBDgmAmg7QAuABgDA/Qg3A4gzApQgmgUgEgsg");
	this.shape_413.setTransform(166.9091,472.075);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#FF6699").s().p("AhOAXQBGgoAnhBQA1gEgGBAQg5A6g2AvQgogQgFgsg");
	this.shape_414.setTransform(166.1509,489.0659);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#FF6699").s().p("AhTAeQBJgrAphHQA8gIgJBBQg8A8g4A1QgqgNgHgrg");
	this.shape_415.setTransform(165.4031,506.0309);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#FF6699").s().p("AhXAkQBMgtArhNQBBgMgLBCIh5B5QgsgKgIgrg");
	this.shape_416.setTransform(164.6541,522.9755);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#FF6699").s().p("AhXAgQBGgvAthIQBDgIgIBCQg8A9g5A4QgqgRgPgng");
	this.shape_417.setTransform(165.5927,539.2018);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#FF6699").s().p("AhXAbQBAgwAvhCQBFgFgFBDQg6A9g4A0QgngYgWglg");
	this.shape_418.setTransform(166.517,555.4578);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#FF6699").s().p("AhXAYQA5gzAyg8QBGgBgCBEQg3A8g3AxQgkgggdghg");
	this.shape_419.setTransform(167.4543,571.6493);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#FF6699").s().p("AhXAUIBnhsQBIADAABFQgzA7g2AuQgigngkgeg");
	this.shape_420.setTransform(168.4,587.825);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#FF6699").s().p("AhYAQQAug3A2gxQBJAGAEBGQgxA7g1AqQgggvgrgag");
	this.shape_421.setTransform(169.375,604.05);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#FF6699").s().p("AhYAMQAng4A4gsQBMAKAGBHQguA6g0AmQgdg1gygYg");
	this.shape_422.setTransform(170.35,620.225);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#FF6699").s().p("AhYAHQAhg4A7gnQBNANAIBIQgqA5gzAkQgbg9g5gWg");
	this.shape_423.setTransform(171.275,636.4);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#FF6699").s().p("AhZAEQAbg7A+giQBOASALBIQgnA5gyAgQgYhEhBgSg");
	this.shape_424.setTransform(172.25,652.575);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#FF6699").s().p("AhZAAQAUg+BBgbQBPAWAPBHQglA6gyAcQgVhLhHgPg");
	this.shape_425.setTransform(173.225,668.8);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#FF6699").s().p("AhZgDQAOhABDgWQBRAZARBJQghA5gxAYQgThShOgLg");
	this.shape_426.setTransform(174.175,684.975);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#FF6699").s().p("AhZgHQAIhCBFgRQBSAdAUBLQgeA4gwAUQgQhZhVgIg");
	this.shape_427.setTransform(175.125,701.15);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#FF6699").s().p("AhagLQAChDBIgMQBUAhAXBLQgcA3gvASQgOhghcgGg");
	this.shape_428.setTransform(176.075,717.375);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#FF6699").s().p("AhagPQgEhFBKgGQBVAkAaBMQgYA3guAOQgMhnhjgDg");
	this.shape_429.setTransform(177.0371,733.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_378}]}).to({state:[{t:this.shape_379}]},1).to({state:[{t:this.shape_380}]},1).to({state:[{t:this.shape_381}]},1).to({state:[{t:this.shape_382}]},1).to({state:[{t:this.shape_383}]},1).to({state:[{t:this.shape_384}]},1).to({state:[{t:this.shape_385}]},1).to({state:[{t:this.shape_386}]},1).to({state:[{t:this.shape_387}]},1).to({state:[{t:this.shape_388}]},1).to({state:[{t:this.shape_389}]},1).to({state:[{t:this.shape_390}]},1).to({state:[{t:this.shape_391}]},1).to({state:[{t:this.shape_392}]},1).to({state:[{t:this.shape_393}]},1).to({state:[{t:this.shape_394}]},1).to({state:[{t:this.shape_395}]},1).to({state:[{t:this.shape_396}]},1).to({state:[{t:this.shape_397}]},1).to({state:[{t:this.shape_398}]},1).to({state:[{t:this.shape_399}]},1).to({state:[{t:this.shape_400}]},1).to({state:[{t:this.shape_401}]},1).to({state:[{t:this.shape_402}]},1).to({state:[{t:this.shape_403}]},1).to({state:[{t:this.shape_404}]},1).to({state:[{t:this.shape_405}]},1).to({state:[{t:this.shape_406}]},1).to({state:[{t:this.shape_407}]},1).to({state:[{t:this.shape_408}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_410}]},1).to({state:[{t:this.shape_411}]},1).to({state:[{t:this.shape_412}]},1).to({state:[{t:this.shape_413}]},1).to({state:[{t:this.shape_414}]},1).to({state:[{t:this.shape_415}]},1).to({state:[{t:this.shape_416}]},1).to({state:[{t:this.shape_417}]},1).to({state:[{t:this.shape_418}]},1).to({state:[{t:this.shape_419}]},1).to({state:[{t:this.shape_420}]},1).to({state:[{t:this.shape_421}]},1).to({state:[{t:this.shape_422}]},1).to({state:[{t:this.shape_423}]},1).to({state:[{t:this.shape_424}]},1).to({state:[{t:this.shape_425}]},1).to({state:[{t:this.shape_426}]},1).to({state:[{t:this.shape_427}]},1).to({state:[{t:this.shape_428}]},1).to({state:[{t:this.shape_429}]},1).to({state:[{t:this.shape_429}]},1).to({state:[{t:this.shape_429}]},1).wait(1));

	// confeti7
	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#FF6600").s().p("AgYAoIAAgHQANglgNgiIAAgDIAqABIgBgDIABAAIAAADIAHAAQgSAqARAmQgNAEgLAAQgMAAgMgEg");
	this.shape_430.setTransform(12.825,3.15);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#FF6600").s().p("AgQAvIgBgJQAFgpgUghIgBgDQAVgFAXgCIAAgDIABAAIABADIAHABQgJAuAWAkIABAEQgWAJgVAAIgHgDg");
	this.shape_431.setTransform(32.525,16.775);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#FF6600").s().p("AgKAzIgCgIQgCgtgaghIgCgDIAAAAQAUgKAZgGIABgCIABAAIABADIAHAEQAAAyAeAjIgBAEQgWAMgWAFIgIgGg");
	this.shape_432.setTransform(52.325,30.5);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#FF6600").s().p("AgDA5IgDgJQgJgxgiggIgDgEQAUgQAdgHIABgCIABgBIABAEIAHAEQAIA3AmAkIgCADQgXAQgYAJIgHgHg");
	this.shape_433.setTransform(72.125,44.2);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#FF6600").s().p("AADA/IgDgKQgRg1goggIgEgDIAAAAQASgWAggKIABgCIACgBIABAEIAHAHQARA7AtAjIgCAEQgZASgZAOIgHgIg");
	this.shape_434.setTransform(91.975,57.9);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#FF6600").s().p("AAKBEIgFgLQgYg5gvgfIgFgDQASgbAigMIACgCIACgCIACAFIAHAIQAZBAA1AiIgDAEQgaAVgaATIgHgKg");
	this.shape_435.setTransform(111.775,71.6);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#FF6600").s().p("AAQBJIgGgLQgfg9g2gfIgFgDIAAAAQARghAkgPIADgCIABAAIADAEIAHAKQAiBFA9AhIgFAFIg2AuIgHgLg");
	this.shape_436.setTransform(131.6,85.325);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#FF6600").s().p("AhaggQASgpArgRQAtBWBLAkIg9A7QgrhXhNgkg");
	this.shape_437.setTransform(151.4,99.025);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#FF6600").s().p("AhWgSQAWguAkgaQAtBKBGAjQggAjgaAlQgrhNhIggg");
	this.shape_438.setTransform(153.9,115.05);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#FF6600").s().p("AhTgFQAZgxAgglQAsBABCAhQgjAngWAvQgqhEhEgdg");
	this.shape_439.setTransform(156.4,131.1);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#FF6600").s().p("AhPAHIA2hiQAtAzA8AiQglAsgRA2Qgqg6g/gbg");
	this.shape_440.setTransform(158.875,147.125);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#FF6600").s().p("AhMAUQAhg2ATg6QAtAoA4AgQgnAxgNBAQgpgxg8gYg");
	this.shape_441.setTransform(161.375,163.175);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#FF6600").s().p("AhIAhQAkg5ANhEIBgA7QgpA2gIBIQgpgng3gVg");
	this.shape_442.setTransform(163.875,179.2);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#FF6600").s().p("AhFAvQAog9AIhOQAsARAvAdQgsA7gEBQQgogdgzgRg");
	this.shape_443.setTransform(166.375,195.225);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#FF6600").s().p("AhBA8QArhBAChYQAsAFAqAdQgtBAABBZQgpgUgugOg");
	this.shape_444.setTransform(168.85,211.275);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#FF6600").s().p("Ag+BKQAvhFgEhhQAtgHAkAbQgvBHAFBgg");
	this.shape_445.setTransform(171.35,227.2369);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#FF6600").s().p("Ag/A4QAvg+AChaQAmAGAoAkQgvBBgBBWQgjgVgsgUg");
	this.shape_446.setTransform(172.025,248.25);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#FF6600").s().p("AhBAmQAvg4AIhQQAhASArArQgvA+gIBKQgdgfgvgeg");
	this.shape_447.setTransform(172.725,269.225);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#FF6600").s().p("AhDAUQAwgyAOhGQAbAdAuA0QgvA6gPA+QgXgpgygog");
	this.shape_448.setTransform(173.425,290.175);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#FF6600").s().p("AhFACQAwgrAVg+QAUAqAyA8QgvA1gVAzQgTgzg0gyg");
	this.shape_449.setTransform(174.1,311.15);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#FF6600").s().p("AhGgOQAxgnAYg0QAQA2A0BDQgtAygcAoQgOg+g2g6g");
	this.shape_450.setTransform(174.8,332.1);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#FF6600").s().p("AhIghQAxggAfgqQAKBBA3BMQgtAugiAcQgJhIg5hFg");
	this.shape_451.setTransform(175.475,353.075);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#FF6600").s().p("AhKgyQAygbAkghQAFBOA6BUQgtAqgpARQgDhTg8hOg");
	this.shape_452.setTransform(176.175,374.025);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#FF6600").s().p("AhLhEQAxgVArgXQgBBZA8BcQgsAngwAFQADhdg+hYg");
	this.shape_453.setTransform(176.875,395);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#FF6600").s().p("AgUBzQAIhnhBhiIBjgdQgHBmA/BkQglAdgtAAIgQgBg");
	this.shape_454.setTransform(177.55,415.995);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#FF6600").s().p("AhPhFQA1gUAugaQAABbA8BeQgvAmgzAIQAChfg/hag");
	this.shape_455.setTransform(174.475,432.225);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#FF6600").s().p("AhRg0QA4gaArglQAHBRA5BXQgzAqgwAVQgDhWg9hSg");
	this.shape_456.setTransform(171.4,448.475);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#FF6600").s().p("AhTgjQA7gfApgxQANBGA2BRIhjBQQgKhOg6hJg");
	this.shape_457.setTransform(168.325,464.75);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#FF6600").s().p("AhWgRQA/gmAmg8QAUA7AzBLQg7AxgoAwQgQhEg5hBg");
	this.shape_458.setTransform(165.25,481);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#FF6600").s().p("AhXgBQBBgrAjhHQAbAwAwBFQg/A0glA+QgWg8g1g5g");
	this.shape_459.setTransform(162.175,497.275);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#FF6600").s().p("AhaAQQBEgxAihSQAhAmAtA/QhDA3giBLQgbgzg0gxg");
	this.shape_460.setTransform(159.1,513.525);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#FF6600").s().p("AhcAhQBHg2AfhfQApAcAqA5QhIA6geBZQghgqgygpg");
	this.shape_461.setTransform(156.025,529.8);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#FF6600").s().p("AheAyQBLg8AchpQAvAQAmAyQhLA/gbBnQgmgigwghg");
	this.shape_462.setTransform(152.95,546.05);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#FF6600").s().p("AhgBDQBNhDAah0QA2AHAkArQhQBDgXB0g");
	this.shape_463.setTransform(149.875,562.325);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#FF6600").s().p("AhgA4QBKhBAchrQA0AQAnAtQhNA/gZBtQgrghgwgcg");
	this.shape_464.setTransform(149.875,580.275);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#FF6600").s().p("AhgAsQBGg+AehiQAyAZArAvQhKA8gbBlQgpgpgzggg");
	this.shape_465.setTransform(149.875,598.225);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#FF6600").s().p("AhgAhQBDg8AghZQAwAiAuAxQhHA4gcBeQgogwg2gkg");
	this.shape_466.setTransform(149.875,616.175);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#FF6600").s().p("AhgAWQA/g6AjhQQAtAsAyAzQhEA0geBWQgmg3g5gog");
	this.shape_467.setTransform(149.875,634.075);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#FF6600").s().p("AhgALQA8g4AlhHQArA1A1A1QhCAxgfBOQglg/g7grg");
	this.shape_468.setTransform(149.875,652.025);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#FF6600").s().p("AhgAAQA4g2Aog+QAoA+A5A2Qg/AugiBHQgihHg+gug");
	this.shape_469.setTransform(149.875,669.975);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#FF6600").s().p("AhggKQA1g2Arg0QAlBHA8A4Qg7ArglA/QgfhOhCgxg");
	this.shape_470.setTransform(149.825,687.925);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#FF6600").s().p("AhggVQAyg0AtgrQAjBQA/A6Qg5AngmA4QgehWhEg0g");
	this.shape_471.setTransform(149.825,705.875);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#FF6600").s().p("AhgghQAugxAwgiQAgBZBDA8Qg2AkgnAwQgdhehHg4g");
	this.shape_472.setTransform(149.825,723.825);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#FF6600").s().p("AhggrQArgwAygZQAeBjBGA+QgzAggpAoQgbhlhKg7g");
	this.shape_473.setTransform(149.825,741.725);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#FF6600").s().p("Ahgg3QAngtA0gQQAcBsBKBAQgwAcgrAhQgZhthNg/g");
	this.shape_474.setTransform(149.825,759.675);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#FF6600").s().p("AhghCQAkgrA2gHQAaB0BNBDIhaAyQgXh0hQhDg");
	this.shape_475.setTransform(149.825,777.625);
	this.shape_475._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_430}]}).to({state:[{t:this.shape_431}]},1).to({state:[{t:this.shape_432}]},1).to({state:[{t:this.shape_433}]},1).to({state:[{t:this.shape_434}]},1).to({state:[{t:this.shape_435}]},1).to({state:[{t:this.shape_436}]},1).to({state:[{t:this.shape_437}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_439}]},1).to({state:[{t:this.shape_440}]},1).to({state:[{t:this.shape_441}]},1).to({state:[{t:this.shape_442}]},1).to({state:[{t:this.shape_443}]},1).to({state:[{t:this.shape_444}]},1).to({state:[{t:this.shape_445}]},1).to({state:[{t:this.shape_446}]},1).to({state:[{t:this.shape_447}]},1).to({state:[{t:this.shape_448}]},1).to({state:[{t:this.shape_449}]},1).to({state:[{t:this.shape_450}]},1).to({state:[{t:this.shape_451}]},1).to({state:[{t:this.shape_452}]},1).to({state:[{t:this.shape_453}]},1).to({state:[{t:this.shape_454}]},1).to({state:[{t:this.shape_455}]},1).to({state:[{t:this.shape_456}]},1).to({state:[{t:this.shape_457}]},1).to({state:[{t:this.shape_458}]},1).to({state:[{t:this.shape_459}]},1).to({state:[{t:this.shape_460}]},1).to({state:[{t:this.shape_461}]},1).to({state:[{t:this.shape_462}]},1).to({state:[{t:this.shape_463}]},1).to({state:[{t:this.shape_464}]},1).to({state:[{t:this.shape_465}]},1).to({state:[{t:this.shape_466}]},1).to({state:[{t:this.shape_467}]},1).to({state:[{t:this.shape_468}]},1).to({state:[{t:this.shape_469}]},1).to({state:[{t:this.shape_470}]},1).to({state:[{t:this.shape_471}]},1).to({state:[{t:this.shape_472}]},1).to({state:[{t:this.shape_473}]},1).to({state:[{t:this.shape_474}]},1).to({state:[{t:this.shape_475}]},1).to({state:[{t:this.shape_475}]},1).to({state:[{t:this.shape_475}]},1).to({state:[{t:this.shape_475}]},1).to({state:[{t:this.shape_475}]},1).to({state:[{t:this.shape_475}]},1).to({state:[{t:this.shape_475}]},1).to({state:[{t:this.shape_475}]},1).to({state:[{t:this.shape_475}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_475).wait(45).to({_off:false},0).wait(9));

	// confeti6
	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#00FFCC").s().p("AgOAbQgKgXAKgZQARgWARAWQgQAWAQAaQgJAGgJAAQgIAAgIgGg");
	this.shape_476.setTransform(23.55,2.0625);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#00FFCC").s().p("AgOAfQgJgbADgaQASgXASAUQgLAYAQAdQgIAIgKAAQgHAAgKgFg");
	this.shape_477.setTransform(42.8029,12.7392);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#00FFCC").s().p("AgMAiQgIgfgDgbQARgYATASQgEAaAPAgQgGALgMAAQgHAAgLgFg");
	this.shape_478.setTransform(61.9,23.4551);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#00FFCC").s().p("AgKAlQgIghgJgdQAQgaAWARQABAbAQAjQgFAOgOAAQgJAAgKgFg");
	this.shape_479.setTransform(80.975,34.1437);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#00FFCC").s().p("AgHAoQgIglgQgdQAQgbAYAPQAHAcAQAnQgEAQgQAAQgIAAgLgFg");
	this.shape_480.setTransform(100.025,44.8427);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#00FFCC").s().p("AgGAsQgFgpgXgeQAPgdAZAOQANAcAQArQgBATgTAAQgJAAgMgEg");
	this.shape_481.setTransform(119.1,55.5282);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#00FFCC").s().p("AgDAvQgGgtgdgfQAOgeAcANQATAdAPAuQACAWgVAAQgKAAgMgEg");
	this.shape_482.setTransform(138.1543,66.221);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#00FFCC").s().p("AgBAyQgFgvgjghQANgfAeALQAYAeAQAyQADAYgXAAQgKAAgNgEg");
	this.shape_483.setTransform(157.2441,76.895);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#00FFCC").s().p("AAAA2QgDg0gqghQAMghAhAKQAeAfAPA1QAGAcgaAAQgKAAgPgEg");
	this.shape_484.setTransform(176.327,87.5941);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#00FFCC").s().p("AACA5QgDg3gwgiQAMgiAiAIQAkAgAPA5QAJAegdAAQgLAAgPgEg");
	this.shape_485.setTransform(195.4187,98.2481);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#00FFCC").s().p("AACA/QgJgwgtgkQAMgoAngBQAlAYARA8QABApguAAIgGAAg");
	this.shape_486.setTransform(195.9521,107.6819);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#00FFCC").s().p("Ag4gMQANgsArgKQAnANASBCQgJArgvALQgPgogqgng");
	this.shape_487.setTransform(196.575,117.25);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#00FFCC").s().p("Ag7gDQANgxAugTQApAFATBFQgSAtgqAYQgVghgmgqg");
	this.shape_488.setTransform(197.225,126.825);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#00FFCC").s().p("Ag/AGQAOg2AygbQArgFAUBLQgcAtgkAkQgcgZgjgtg");
	this.shape_489.setTransform(197.85,136.3623);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#00FFCC").s().p("AhDAQQAPg7A2gjQAsgPAVBQQglAugfAxQgigSgggwg");
	this.shape_490.setTransform(198.45,145.8382);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#00FFCC").s().p("AhGAbQAPhAA5gsQAvgYAWBUQgvAvgZA+QgpgLgcgyg");
	this.shape_491.setTransform(199.075,155.2431);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#00FFCC").s().p("AhKAmQAQhFA9g1QAwghAYBYQg5AxgUBKQgwgDgYg1g");
	this.shape_492.setTransform(199.725,164.6367);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#00FFCC").s().p("AhNAyQAQhKBBg+QAxgrAZBdQhDAxgOBYIgHAAQgwAAgTgzg");
	this.shape_493.setTransform(200.35,173.9971);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#00FFCC").s().p("AhRA8QAQhPBGhHQAzgzAaBhQhNAygJBkQgKACgJAAQgsAAgOgwg");
	this.shape_494.setTransform(200.975,183.4028);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#00FFCC").s().p("AhRAsQARhRBEg3QA1glAZBfQhFAzgQBXQg1gDgZg5g");
	this.shape_495.setTransform(200.975,204.2434);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#00FFCC").s().p("AhRAcQAThTBAgpQA4gVAYBdQg+A0gVBIQgwgQggg4g");
	this.shape_496.setTransform(200.975,225.0566);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#00FFCC").s().p("AhRANQAUhVA+gZQA6gGAXBbQg3A0gbA7Qgqgfgng3g");
	this.shape_497.setTransform(200.975,245.7814);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#00FFCC").s().p("AhRAAQAVhYA8gKQA9AKAVBYQgvA3gjArQgigrgvg3g");
	this.shape_498.setTransform(200.975,266.3);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#00FFCC").s().p("AhRgMQAXhbA6AGQA+AZAUBVQgnA3gqAfQgbg7g3g0g");
	this.shape_499.setTransform(200.925,286.8314);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#00FFCC").s().p("AhRgYQAYhdA4AVQBAApATBTQggA4gvAQQgWhIg+g0g");
	this.shape_500.setTransform(200.925,307.1566);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#00FFCC").s().p("AhRgiQAZhfA2AlQBDA3ARBRQgZA5g1ADQgQhXhFgzg");
	this.shape_501.setTransform(200.925,327.3934);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#00FFCC").s().p("AAFBqQgJhkhNgyQAahhAzAzQBGBHAQBPQgOAwgsAAQgJAAgKgCg");
	this.shape_502.setTransform(200.925,347.6028);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#00FFCC").s().p("AhRgiQAbhhAzAnQBEA+ARBNQgYA5g2AAQgShWhDg0g");
	this.shape_503.setTransform(199.225,367.7785);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#00FFCC").s().p("AhQgZQAahhA0AcQBCA0ARBKQgeA6gwAMQgbhJg4g2g");
	this.shape_504.setTransform(197.525,387.9951);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#00FFCC").s().p("AhPgPQAZhhA1AQQBAArARBIQgkA5gqAXQgkg6gtg4g");
	this.shape_505.setTransform(195.825,408.1301);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#00FFCC").s().p("AhOgEQAZhhA1AEQA+AiARBFQgqA6gkAiQgsgsgjg6g");
	this.shape_506.setTransform(194.125,428.19);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#00FFCC").s().p("AhOAGQAZhgA1gHQA9AYASBEQgyA5gdAuQg1gegZg+g");
	this.shape_507.setTransform(192.425,448.15);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#00FFCC").s().p("AhNASQAZhfA1gUQA7APASBBQg4A5gWA6Qg/gQgOhAg");
	this.shape_508.setTransform(190.725,468.1);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#00FFCC").s().p("AhMAeQAYhgA2gfQA6AFARBAQg+A4gQBFQhIgBgDhCg");
	this.shape_509.setTransform(189.025,488.05);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#00FFCC").s().p("AhLApQAYhgA2gqQA4gEASA8QhEA5gLBRQgMABgJAAQg6AAAGg5g");
	this.shape_510.setTransform(187.2968,508.0712);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#00FFCC").s().p("AhJAzQAXhfA3g3QA2gNASA6QhKA5gFBcQgYAHgQAAQgsAAANgzg");
	this.shape_511.setTransform(185.4812,528.1648);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#00FFCC").s().p("AhMAvQALhAAhgmQARgVAUgQQA1gKAUA3IgOAOIgRAWQgSAZgPAbQgLAXgDAaIgBAAQgUAFgOAAQgwAAAHgwg");
	this.shape_512.setTransform(187.2812,552.7607);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#00FFCC").s().p("AhNArIgBAAQAGhDAmgfQASgSAUgNQA1gGAWAzIgKAPIgOAXIgjAzQgMAQgHAVIgBAAQgNACgMAAQg1AAABgsg");
	this.shape_513.setTransform(189,577.3719);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#00FFCC").s().p("AADBQQhJAFgJgvIgBAAQAChGAqgYQAUgOAVgKQA0gCAXAwIgGAPIgNAXQgOAagWAYQgNALgIAQIgBgBg");
	this.shape_514.setTransform(190.7,601.9689);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#00FFCC").s().p("AAFBLQhEgCgRgoIgBAAQgDhJAvgRQAVgLAWgGQAzABAZAtIgDAPQgEANgGAKQgNAbgYAXQgPAEgLALIgBAAg");
	this.shape_515.setTransform(192.3909,626.65);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#00FFCC").s().p("AAHBFQg/gIgaghIgBAAQgHhMAzgKQAXgHAWgDQAyAEAbAqIACAPQgDAMgFANQgNAbgbAUQgPgBgOAFIgBAAg");
	this.shape_516.setTransform(194.0773,651.325);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#00FFCC").s().p("AAKA8IgBgBQg7gOgjgaIAAAAQgMhPA4gDQAYgEAWABQAyAHAdAnIAFAPQgBANgFANQgLAcgeASQgQgHgQAAg");
	this.shape_517.setTransform(195.8941,676.3722);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#00FFCC").s().p("AALAzIgBgBIhigoIAAAAQgQhSA8AEQAaAAAXADQAxAMAeAkIAIAOQABAOgEANQgJAdgiAQQgRgNgSgFg");
	this.shape_518.setTransform(197.6998,701.4158);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#00FFCC").s().p("AAMArIgBgBQgxgcg0gKIgBAAQgVhVBBAKQAbAEAXAGQAxAPAgAhIAMANQADAQgEANQgHAdglAPQgSgTgVgLg");
	this.shape_519.setTransform(199.5207,726.2679);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#00FFCC").s().p("AAMAjQgtgig9gDQgahZBGASQBfAXA3A3QAEARgDANQgGAegoAMQgTgZgYgRg");
	this.shape_520.setTransform(201.3808,751.0812);
	this.shape_520._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_476}]}).to({state:[{t:this.shape_477}]},1).to({state:[{t:this.shape_478}]},1).to({state:[{t:this.shape_479}]},1).to({state:[{t:this.shape_480}]},1).to({state:[{t:this.shape_481}]},1).to({state:[{t:this.shape_482}]},1).to({state:[{t:this.shape_483}]},1).to({state:[{t:this.shape_484}]},1).to({state:[{t:this.shape_485}]},1).to({state:[{t:this.shape_486}]},1).to({state:[{t:this.shape_487}]},1).to({state:[{t:this.shape_488}]},1).to({state:[{t:this.shape_489}]},1).to({state:[{t:this.shape_490}]},1).to({state:[{t:this.shape_491}]},1).to({state:[{t:this.shape_492}]},1).to({state:[{t:this.shape_493}]},1).to({state:[{t:this.shape_494}]},1).to({state:[{t:this.shape_495}]},1).to({state:[{t:this.shape_496}]},1).to({state:[{t:this.shape_497}]},1).to({state:[{t:this.shape_498}]},1).to({state:[{t:this.shape_499}]},1).to({state:[{t:this.shape_500}]},1).to({state:[{t:this.shape_501}]},1).to({state:[{t:this.shape_502}]},1).to({state:[{t:this.shape_503}]},1).to({state:[{t:this.shape_504}]},1).to({state:[{t:this.shape_505}]},1).to({state:[{t:this.shape_506}]},1).to({state:[{t:this.shape_507}]},1).to({state:[{t:this.shape_508}]},1).to({state:[{t:this.shape_509}]},1).to({state:[{t:this.shape_510}]},1).to({state:[{t:this.shape_511}]},1).to({state:[{t:this.shape_512}]},1).to({state:[{t:this.shape_513}]},1).to({state:[{t:this.shape_514}]},1).to({state:[{t:this.shape_515}]},1).to({state:[{t:this.shape_516}]},1).to({state:[{t:this.shape_517}]},1).to({state:[{t:this.shape_518}]},1).to({state:[{t:this.shape_519}]},1).to({state:[{t:this.shape_520}]},1).to({state:[{t:this.shape_520}]},1).to({state:[{t:this.shape_520}]},1).to({state:[{t:this.shape_520}]},1).to({state:[{t:this.shape_520}]},1).to({state:[{t:this.shape_520}]},1).to({state:[{t:this.shape_520}]},1).to({state:[{t:this.shape_520}]},1).to({state:[{t:this.shape_520}]},1).to({state:[{t:this.shape_520}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_520).wait(44).to({_off:false},0).wait(10));

	// confeti5
	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#0099FF").s().p("AgPAeQARgdgSgZQALgQAMAKIAFAEQAKAegKAbIgFACIgIACQgIAAgGgFg");
	this.shape_521.setTransform(-31.425,1.3172);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#0099FF").s().p("AgMAcQAHgMAAgLQgBgMgKgNQAKgPAMAHIAEAEQAFALABALQADAMgEAPIgBACIgGACQgGACgEAAQgGAAgEgDg");
	this.shape_522.setTransform(-9.1519,10.229);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#0099FF").s().p("AgLAaQAHgKgBgJQgDgKgIgNQAIgPAMAGIAFADQAEAJACAIQAFALgFAPIgBACIgEACQgHADgFAAQgEAAgFgCg");
	this.shape_523.setTransform(13.15,19.1203);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#0099FF").s().p("AgJAYQAFgIAAgGQgEgJgJgMQAIgPALADIAEACIAIAOQAGAIgDAQIgBABIgGADQgIADgFAAIgGAAg");
	this.shape_524.setTransform(35.4529,28.0336);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#0099FF").s().p("AgHAVQAEgFgBgDIgOgUQAIgPAKABIAEACIAJAJQAIAHgDAQIgBABIgFADQgKAFgGAAIgDgBg");
	this.shape_525.setTransform(57.7813,36.9509);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#0099FF").s().p("AgEAQQgGgHgJgMQAIgPAKAAIADAAIAKAFQAJAFgCARIgBABIgGADQgLAFgGABIABgDg");
	this.shape_526.setTransform(80.101,45.875);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#0099FF").s().p("AgTAAQAGgOAKgDIADAAIALABQALADgCARIgBABIgGAEQgLAFgGACQAAAAAAAAQAAAAAAAAQABABgBAAQAAAAAAABQgHgFgIgNg");
	this.shape_527.setTransform(102.4654,54.85);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#0099FF").s().p("AgUADQAGgNAJgFIAEgBIALgDQANABgCASIgBAAIgGAEIgQAJIgBAHQgJgEgIgNg");
	this.shape_528.setTransform(124.7883,63.825);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#0099FF").s().p("AgVAHQAFgNAJgGIADgCIAMgHQAPgCgBATIgBABIgGADQgKAGgGAFQgCAFAAAHQgKgCgIgOg");
	this.shape_529.setTransform(147.1318,72.7445);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#0099FF").s().p("AgWAMQAFgNAIgJIADgCIANgMQAQgEAAAVIgBAAIgGAEQgKAFgGAHQgCAHgBAKQgLgBgIgNg");
	this.shape_530.setTransform(169.4757,81.6423);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#0099FF").s().p("AgXAQQAEgOAIgJIADgDQAGgJAIgHQASgGgBAVIgBAAIgFAEQgKAGgGAIQgDAJgBAMIgCAAQgLAAgHgMg");
	this.shape_531.setTransform(191.8007,90.5118);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#0099FF").s().p("AgYAUQAHgaAVgXQAVgIAAAWQgaAOgCAgIgEABQgKAAgHgMg");
	this.shape_532.setTransform(214.15,99.4111);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#0099FF").s().p("AgXAUQAIgZATgYQAUgIAAAWQgYAPgDAfIgEABQgLAAgFgMg");
	this.shape_533.setTransform(214.1,112.0611);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#0099FF").s().p("AgYAUQALgYARgZQAUgIABAWQgXARgFAeIgDAAQgLAAgHgMg");
	this.shape_534.setTransform(214.075,124.7143);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#0099FF").s().p("AgYAUIAbgxQAUgIACAVQgVATgHAdIgDAAQgMAAgGgMg");
	this.shape_535.setTransform(214.025,137.3621);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#0099FF").s().p("AgYAUQAPgWAMgaQAUgJACAWQgTAUgIAbIgDAAQgNAAgGgMg");
	this.shape_536.setTransform(214,149.9979);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#0099FF").s().p("AgYAUQASgVAJgcQAUgJACAWQgRAXgLAZIgBAAQgOAAgGgMg");
	this.shape_537.setTransform(213.95,162.6703);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#0099FF").s().p("AgYAUQAUgVAGgcQAUgJADAWIgbAwIgCAAQgOAAgGgMg");
	this.shape_538.setTransform(213.9,175.3203);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#0099FF").s().p("AgYAUQAWgUAEgdQAUgJADAWQgNAagOAWQgQAAgGgMg");
	this.shape_539.setTransform(213.875,187.959);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#0099FF").s().p("AgYATQAYgTACgdQATgJAEAWQgLAbgQAVQgRAAgFgNg");
	this.shape_540.setTransform(213.825,200.6068);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#0099FF").s().p("AgZATQAagSAAgeQAUgKAFAXQgJAdgTAUQgRgBgGgNg");
	this.shape_541.setTransform(213.8,213.2712);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#0099FF").s().p("AgYATQAcgRgDgfQAUgKAEAXQgHAfgUASQgSgBgEgNg");
	this.shape_542.setTransform(213.75,225.9212);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#0099FF").s().p("AgTAbQgEgEgCgFQAbgSAAgdIADgBQAFgCAEABQAJABADAMIAAACQgJAbgRATIgCACQgLAAgGgFg");
	this.shape_543.setTransform(214.7875,244.6688);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#0099FF").s().p("AgUAbQgEgEgBgGQAZgSADgcIADgBQAFgBAEABQAIACADALIAAACQgMAZgQAUIgCACIgBAAQgKAAgFgFg");
	this.shape_544.setTransform(215.8625,263.3771);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#0099FF").s().p("AgVAaQgDgEgCgGQAZgUAFgZIADgBQAFgBAEABQAIADADALIgBACQgOAWgOAWIgCABIgCAAQgKAAgFgFg");
	this.shape_545.setTransform(216.925,282.1186);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#0099FF").s().p("AgWAaQgDgFgBgGQAXgVAHgXIAEgBQAEAAAFABQAHADADALIgBACQgRAUgNAXIgCABIgBAAQgKAAgFgFg");
	this.shape_546.setTransform(218,300.8457);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#0099FF").s().p("AgXAZQgDgEgBgHQAWgVAKgVIADgCQAGABADACQAJADABAKIgBABQgUASgKAZIgCABIgEAAQgJAAgEgGg");
	this.shape_547.setTransform(219.05,319.5382);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#0099FF").s().p("AgYAZQgDgFAAgHIAhgqIADgBQAGABADACQAIAEACAKIgCABQgWAPgJAaIgCABIgEABQgJAAgEgGg");
	this.shape_548.setTransform(220.125,338.2632);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#0099FF").s().p("AgZAYQgCgFgBgHQASgYAQgQIADgBQAHABADACQAHAEACAKIgCABQgYANgIAbIgCABIgEAAQgJAAgEgGg");
	this.shape_549.setTransform(221.2,356.9875);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#0099FF").s().p("AgaAYQgCgFAAgHQAQgaATgOIADgBQAGABAEADQAHAFACAJIgDABQgaALgHAcIgCABIgGAAQgIAAgDgGg");
	this.shape_550.setTransform(222.2708,375.6798);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#0099FF").s().p("AgbAYQgCgGABgHQAPgcAYgMQAGACAEADQAHAFABAJQgfAJgGAeIgHABQgIAAgEgGg");
	this.shape_551.setTransform(223.32,394.399);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#0099FF").s().p("AgYAYIgDgRQANgaAXgLQAGACAEADQAJAIAAALQgcAHgGAcIgHACQgIAAgDgHg");
	this.shape_552.setTransform(223.325,410.101);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#0099FF").s().p("AgVAaQAAgMgFgKQAMgZAVgJQAGACAEADQAKAKAAANQgaAHgEAZIgIABQgHAAgDgFg");
	this.shape_553.setTransform(223.275,425.8307);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#0099FF").s().p("AgTAbQACgPgIgMQALgXATgHQAGACAFADQALAMgBAOQgXAIgEAVIgIABQgGAAgEgEg");
	this.shape_554.setTransform(223.2761,441.5333);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#0099FF").s().p("AgQAcQADgSgLgMQAKgXASgGQAFACAFADQAMAPgBAQQgUAHgFASIgHACQgFAAgEgEg");
	this.shape_555.setTransform(223.2289,457.2645);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#0099FF").s().p("AgOAdQAEgVgNgOQAJgVAPgEQAGABAFAEQAOARgCATQgRAGgFAPIgHABQgFAAgEgDg");
	this.shape_556.setTransform(223.2325,472.98);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#0099FF").s().p("AgLAeQAFgZgQgOQAIgUAOgDQAFABAGAEQAOAUgCAVQgNAFgFAMQgFACgDAAQgEAAgEgDg");
	this.shape_557.setTransform(223.1871,488.7139);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#0099FF").s().p("AgJAfQAHgbgTgRQAGgSAOgBIAKAEQAQAXgDAXQgLAFgEAIQgFACgDAAQgEAAgEgCg");
	this.shape_558.setTransform(223.1924,504.4191);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#0099FF").s().p("AgGAgQAHgfgVgRQAFgRAMAAQAEABAHAEQAQAZgDAZQgHAEgFAFQgFADgEAAQgCAAgEgCg");
	this.shape_559.setTransform(223.1481,520.156);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#0099FF").s().p("AgEAhQAIghgYgUQAEgPAKACQAGABAFADQASAcgDAbQgFAEgEACQgEACgFAAIgGgBg");
	this.shape_560.setTransform(223.1535,535.8575);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#0099FF").s().p("AgEAhQAGgegVgRQADgRALgCQAFABAGADQAQAXgCAZQgHAHgCAFQgFADgFAAIgFgBg");
	this.shape_561.setTransform(221.4858,565.4721);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#0099FF").s().p("AgGAhQAFgZgSgPQACgVAMgFQAFAAAFADQAQAUgBAVQgKAKAAAJQgFAEgFAAIgGgBg");
	this.shape_562.setTransform(219.803,595.0645);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#0099FF").s().p("AgGAhQADgVgQgNQABgXAOgJQAEAAAFADQAOAPABATQgNAMACAOQgFAEgFAAIgFgBg");
	this.shape_563.setTransform(218.15,624.6727);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#0099FF").s().p("AgHAgQABgQgNgMQABgYAOgNQAFAAAFACQANAMABAQQgPAPAEARQgGAFgEAAQgDAAgDgCg");
	this.shape_564.setTransform(216.45,654.2912);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#0099FF").s().p("AgJAgQAAgMgKgKQAAgbAPgQQAFAAAFABQALAJADAMQgSASAGAWQgGAFgEAAQgDAAgEgCg");
	this.shape_565.setTransform(214.8,683.8981);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#0099FF").s().p("AgKAgQgCgIgHgIQgBgdARgUQAFgBAEACQAKAEAEAKQgUAUAIAaQgHAGgFAAQgDAAgDgCg");
	this.shape_566.setTransform(213.1221,713.4776);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#0099FF").s().p("AgLAgQgEgEgEgGQgCggASgXQAFgBAEABQAIABAGAGQgXAZAKAcQgHAHgFAAQgDAAgDgCg");
	this.shape_567.setTransform(211.4647,743.0809);
	this.shape_567._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_521}]}).to({state:[{t:this.shape_522}]},1).to({state:[{t:this.shape_523}]},1).to({state:[{t:this.shape_524}]},1).to({state:[{t:this.shape_525}]},1).to({state:[{t:this.shape_526}]},1).to({state:[{t:this.shape_527}]},1).to({state:[{t:this.shape_528}]},1).to({state:[{t:this.shape_529}]},1).to({state:[{t:this.shape_530}]},1).to({state:[{t:this.shape_531}]},1).to({state:[{t:this.shape_532}]},1).to({state:[{t:this.shape_533}]},1).to({state:[{t:this.shape_534}]},1).to({state:[{t:this.shape_535}]},1).to({state:[{t:this.shape_536}]},1).to({state:[{t:this.shape_537}]},1).to({state:[{t:this.shape_538}]},1).to({state:[{t:this.shape_539}]},1).to({state:[{t:this.shape_540}]},1).to({state:[{t:this.shape_541}]},1).to({state:[{t:this.shape_542}]},1).to({state:[{t:this.shape_543}]},1).to({state:[{t:this.shape_544}]},1).to({state:[{t:this.shape_545}]},1).to({state:[{t:this.shape_546}]},1).to({state:[{t:this.shape_547}]},1).to({state:[{t:this.shape_548}]},1).to({state:[{t:this.shape_549}]},1).to({state:[{t:this.shape_550}]},1).to({state:[{t:this.shape_551}]},1).to({state:[{t:this.shape_552}]},1).to({state:[{t:this.shape_553}]},1).to({state:[{t:this.shape_554}]},1).to({state:[{t:this.shape_555}]},1).to({state:[{t:this.shape_556}]},1).to({state:[{t:this.shape_557}]},1).to({state:[{t:this.shape_558}]},1).to({state:[{t:this.shape_559}]},1).to({state:[{t:this.shape_560}]},1).to({state:[{t:this.shape_561}]},1).to({state:[{t:this.shape_562}]},1).to({state:[{t:this.shape_563}]},1).to({state:[{t:this.shape_564}]},1).to({state:[{t:this.shape_565}]},1).to({state:[{t:this.shape_566}]},1).to({state:[{t:this.shape_567}]},1).to({state:[{t:this.shape_567}]},1).to({state:[{t:this.shape_567}]},1).to({state:[{t:this.shape_567}]},1).to({state:[{t:this.shape_567}]},1).to({state:[{t:this.shape_567}]},1).to({state:[{t:this.shape_567}]},1).to({state:[{t:this.shape_567}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_567).wait(46).to({_off:false},0).wait(8));

	// confeti3
	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#FF6600").s().p("AgbAWQAggVgFgaQAJgGAIACQAEAAADAFIAEAGQgGAcgWAUIgFABQgPAAgHgJg");
	this.shape_568.setTransform(266.475,141.4598);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#FF6600").s().p("AgZAQQAcgTgDgZQAJgBAKADQADACACAFIACAFQgFAZgUASQgUgBgGgMg");
	this.shape_569.setTransform(264.6,153.9875);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#FF6600").s().p("AgZAMQAbgTgCgWQAIAEAMAEQADADACAFQABACgBADQgFAWgSAQQgTgEgIgOg");
	this.shape_570.setTransform(262.7083,166.325);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#FF6600").s().p("AgYAIQAYgTAAgSQAHAIAOAFQADAEAAAFIAAAFQgFATgQANQgUgGgHgQg");
	this.shape_571.setTransform(260.8583,178.675);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#FF6600").s().p("AgXAEQAWgSABgQQAGAOARAEQACAGgBAGQAAAAAAAAQAAAAAAABQgBAAAAABQAAABgBAAQgEARgOALQgUgJgHgSg");
	this.shape_572.setTransform(259.03,191);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#FF6600").s().p("AgXAAQAUgRADgNQAFASASAGQACAGgBAFQgBADgDABQgEAOgMAJQgUgLgHgVg");
	this.shape_573.setTransform(257.245,203.3);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#FF6600").s().p("AgXgCQARgTAGgKQADAXAVAHQABAHgCAFQgBADgEACQgEAKgKAGQgUgMgHgWg");
	this.shape_574.setTransform(255.4667,215.625);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#FF6600").s().p("AgXgHQAOgSAIgHQACAcAXAHQABAJgEAGQgBACgFABQgDAHgIAFQgVgPgGgZg");
	this.shape_575.setTransform(253.7281,227.975);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#FF6600").s().p("AgYgLQAMgRALgEQABAgAZAHQAAALgFAGQgCADgFABQgDAEgGABQgUgRgIgbg");
	this.shape_576.setTransform(251.95,240.3);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#FF6600").s().p("AgYgOQAJgSAMgBQACAlAaAJQgBAMgFAFQgCADgHABIgGAAQgVgUgHgcg");
	this.shape_577.setTransform(250.225,252.625);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#FF6600").s().p("AgbgQQAKgUANgCQADAqAdALQAAANgGAGQgNAFgEAAQgZgXgHggg");
	this.shape_578.setTransform(248.85,272.025);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#FF6600").s().p("AAFArQgbgagIgjQALgXAPgBIAAABQADAuAgALIAAABQAAAOgGAHIgDABIgLAEIgFABIgBgBg");
	this.shape_579.setTransform(247.475,291.45);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#FF6600").s().p("AAGAvQgegcgKgoQANgYAQgCIABABQACAzAlANIAAABQgBAPgGAHIgDACQgGAEgGABIgGAAIgBgBg");
	this.shape_580.setTransform(246.075,310.85);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#FF6600").s().p("AAGA0QghgegKgtQANgaASgDIABACQADA3AnAOIABABQgBARgGAIIgDACQgHAEgHABIgGABIgCgBg");
	this.shape_581.setTransform(244.725,330.275);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#FF6600").s().p("AAGA5QgjghgLgxQAOgcAUgDIABABQADA9ArAPIABABQgCASgGAJIgDACQgHAEgJACIgHAAIgCAAg");
	this.shape_582.setTransform(243.35,349.675);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#FF6600").s().p("AAHA9QgngkgMgzQAQgfAVgEIABABQADBCAvAQIABABQgBAUgHAJIgDADQgHAFgKABIgIABIgCgBg");
	this.shape_583.setTransform(241.975,369.1);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#FF6600").s().p("AAIBCQgqgngNg3QARgiAWgDIACAAQADBHAyASIABABQgBAVgHAKIgDADQgHAGgLAAIgJACIgCgBg");
	this.shape_584.setTransform(240.575,388.5);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#FF6600").s().p("AAJBHQgugpgNg9QARgiAYgFIACAAQAEBNA2ATIAAABQgBAWgHAKIgDAEQgHAGgMACIgKAAIgCAAg");
	this.shape_585.setTransform(239.2,407.9);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#FF6600").s().p("AAJBMQgxgsgOhBQATglAZgFIACAAQAEBSA5AUIACABQgBAXgJAMIgDAEQgGAGgOACIgKABIgDAAg");
	this.shape_586.setTransform(237.85,427.325);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#FF6600").s().p("AAKBRQg0gvgQhEQAVgnAagGIAEAAQACBWA9AWIACABQgBAYgIANIgDAFQgHAGgPACIgLABIgDAAg");
	this.shape_587.setTransform(236.45,446.7);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#FF6600").s().p("Ag9glQAXgrAegEQADBdBDAXQgCAegMANQgGAIgQABIgPABQg3gxgRhJg");
	this.shape_588.setTransform(235.075,466.125);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#FF6600").s().p("Ag+gcQAeguAagLQAGBVA/AUQgBAcgJANQgFAIgPACQgHAJgPAGQg3gtgShFg");
	this.shape_589.setTransform(234.85,489.325);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#FF6600").s().p("Ag/gTQAlgwAVgTQAJBMA8ASQABAagIAOQgFAHgMADQgJASgUALQg4gogShCg");
	this.shape_590.setTransform(234.6556,512.525);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#FF6600").s().p("AhBgKQAtgyARgbQALBCA5ASQACAWgGAPQgDAHgLAEQgKAagZARQg6gkgTg+g");
	this.shape_591.setTransform(234.4618,535.725);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#FF6600").s().p("AhCgCQAzgzAOgjQANA5A1AQQAEAUgEAPQgCAIgJAEQgLAigfAXQg7gggTg7g");
	this.shape_592.setTransform(234.3067,558.925);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#FF6600").s().p("AhEAGQA7g1AJgqQAQAvAyAPQAFATgCAPQgCAHgHAFQgMAqgkAdQg8gbgUg5g");
	this.shape_593.setTransform(234.1786,582.125);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#FF6600").s().p("AhHAPQBCg3AFgyQAUAmAtANQAGARABAQQgBAGgFAFQgNAzgqAjQg9gXgVg1g");
	this.shape_594.setTransform(234.125,605.35);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#FF6600").s().p("AhKAXQBJg4ABg6QAXAdAqAMQAHAOACAPQABAIgDAHQgPA5gwApQg9gSgWgzg");
	this.shape_595.setTransform(234.0611,628.55);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#FF6600").s().p("AhNAhQBQg8gDhBQAaATAmAKQAJANAEAQQACAHgCAIQgQBCg1AuQg+gOgXgug");
	this.shape_596.setTransform(234.0375,651.75);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#FF6600").s().p("AhQApQBWg9gGhJQAbAKAkAJQAJAJAGASQAEAHAAAHQgSBLg6A0QhAgKgWgrg");
	this.shape_597.setTransform(234.1,674.95);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#FF6600").s().p("AhVAyQBeg/gKhRQAeAAAgAHQALAIAIASQAEAGACAJQgSBShAA7QhBgGgYgng");
	this.shape_598.setTransform(234.175,698.15);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#FF6600").s().p("AhZA9QBlhBgPhYQAigJAbAGQANAFAKASQAFAHAEAJQgTBbhGBAQhCgBgYglg");
	this.shape_599.setTransform(234.3,721.08);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#FF6600").s().p("AhdBLQBshFgShfQAkgSAYAEQANADANASQAGAHAFAKQgUBjhLBGIgMABQg6AAgWgeg");
	this.shape_600.setTransform(234.375,743.8228);
	this.shape_600._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_568}]},8).to({state:[{t:this.shape_569}]},1).to({state:[{t:this.shape_570}]},1).to({state:[{t:this.shape_571}]},1).to({state:[{t:this.shape_572}]},1).to({state:[{t:this.shape_573}]},1).to({state:[{t:this.shape_574}]},1).to({state:[{t:this.shape_575}]},1).to({state:[{t:this.shape_576}]},1).to({state:[{t:this.shape_577}]},1).to({state:[{t:this.shape_578}]},1).to({state:[{t:this.shape_579}]},1).to({state:[{t:this.shape_580}]},1).to({state:[{t:this.shape_581}]},1).to({state:[{t:this.shape_582}]},1).to({state:[{t:this.shape_583}]},1).to({state:[{t:this.shape_584}]},1).to({state:[{t:this.shape_585}]},1).to({state:[{t:this.shape_586}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_588}]},1).to({state:[{t:this.shape_589}]},1).to({state:[{t:this.shape_590}]},1).to({state:[{t:this.shape_591}]},1).to({state:[{t:this.shape_592}]},1).to({state:[{t:this.shape_593}]},1).to({state:[{t:this.shape_594}]},1).to({state:[{t:this.shape_595}]},1).to({state:[{t:this.shape_596}]},1).to({state:[{t:this.shape_597}]},1).to({state:[{t:this.shape_598}]},1).to({state:[{t:this.shape_599}]},1).to({state:[{t:this.shape_600}]},1).to({state:[{t:this.shape_600}]},1).to({state:[{t:this.shape_600}]},1).to({state:[{t:this.shape_600}]},1).to({state:[{t:this.shape_600}]},1).to({state:[{t:this.shape_600}]},1).to({state:[{t:this.shape_600}]},1).to({state:[{t:this.shape_600}]},1).to({state:[{t:this.shape_600}]},1).to({state:[{t:this.shape_600}]},1).to({state:[{t:this.shape_600}]},1).to({state:[{t:this.shape_600}]},1).to({state:[{t:this.shape_600}]},1).to({state:[{t:this.shape_600}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_600).wait(40).to({_off:false},0).wait(14));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.7,-3.3,309,795.1999999999999);


(lib.ForComboTxt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AqUCAQgGgFgDgIQgDgJgBgJIgBgWQAAgeAEgYQABgLAFgIQAFgIAKAAQALAAAFAGQAGAFAAAMIgBAKIAAAKQAAAQAHAZQAEAPAAAMQAAAOgIAGQgIAHgMAAQgJAAgGgEgALBA5QgGgJAAgNIABgSIAAgSQAAghgeAAIgNAAIgOABQgQAAgKgGQgKgGAAgMQAAgKAHgHQAHgGAMAAIAUABQAMACAJAAIAVAAQALAAAIADQAIADAGAFQAFAEAEAIIAGAOQACAHABAKIACARIAAAQIgBASQAAAIgDAKQgCAJgFAFQgGAFgIAAQgMAAgGgIgAlOAdQgTgeAAgtQAAgSAGgJQAHgIAMAAQAJAAAHAHQAGAGAAAMIAAAKIAAAJQAAAOAJAAQAJAAAAgRIABgOIAEgNQACgHAFgEQAGgDAIAAQAMAAAHAHQAHAGAAAKQAAAOgEANQgEAMgHAHQgIAJgMAFQgIAEAAAHQAAAKALABQALABAJgGQAJgFAFgJQAFgIADgLQADgKAAgKQAAgTAIgOQAIgOAPAAQAMAAAGAJQAGAJAAAQQAAAVgGAVQgGATgNARQgPATgQAIQgRAHgVAAQgxAAgXgkgAFwA5QgFgIAAgTIABgMIABgRQgBgHgCgIQgGgSgRAAQgLAAgGAGQgHAHAAAMQAAAHAEAOQADANAAAHQAAANgGAJQgGAIgLAAQgOAAgHgIQgHgJAAgOIABgWIACgSQAAgJgEgLQgEgLAAgMQAAgOAJgIQAIgIAQAAIARACQAMABAPAAIAVABQAHAAAJACQAKACAGAFQAFADADAFQADAEACAGIADAKQABAFABAIIAAAMIAAAOQAABBgcAAQgNAAgFgIgAhTA7QgJgFAAgLQAAgLAGgFQAGgGAPgDQAJgDAFgGQAFgGAAgMQAAgKgHgIQgHgIgKAAQgWAAgIAoIgDAYQgDAOgFAHQgIAOgOAAQgKAAgGgIQgFgJAAgOQAAgMAHgQQAHgPgBgKQAAgHgGgLQgGgMAAgHQAAgKAGgHQAGgHAKAAQAIAAALAGQAKAGAGAAQAHAAAJgGQAJgGALAAQARAAANAKQAMALAGAPQAGAOAAARQAAAngOAUQgPAUgaAAQgOAAgIgGgAmeA5QgEgIAAgTIABgMIAAgRQAAgHgDgIQgGgSgRAAQgKAAgHAGQgGAHAAAMQAAAHADAOQAEANAAAHQAAANgGAJQgGAIgLAAQgOAAgHgIQgIgJAAgOIACgWIABgSQAAgJgDgLQgEgLAAgMQAAgOAIgIQAJgIAPAAIASACQALABAPAAIAVABQAHAAAKACQAJACAGAFQAFADADAFQADAEACAGIADAKQACAFAAAIIABAMIAAAOQAABBgdAAQgNAAgFgIgAJtA9QgFgDgCgFIgDgLIgBgNQAAgRAHgKQAIgKALAAQAXAAAAAhQAAAKgCAJQgCAIgGAGQgGAGgKAAQgIAAgEgDgAIjA4QgGgHAAgNQAAgKACgOQACgOAAgJQAAgLgEgJQgFgIgKAAQgNAAgFAJQgFAIAAANIAAAOIABAPQAAAQgMAOQgMANgTAAQgRAAgGgEQgKgGAAgMQAAgKAFgGQAGgFAHgCQALgCAFgGQAFgFAAgIQAAgOgLgOQgIgLAAgMQAAgMAJgIQAIgIASAAIAUADQAOACANAAIARABIAOACQAIADAFAEQAFAEAEAIQAEAJACALIABAOIABAOIAAANIABAJIABAKIAAAJQAAANgHAIQgHAJgNAAQgNAAgGgIgACrA6QgHgGAAgKQAAgSAYgSIALgHIAFgIQAEgFAAgGQAAgIgGgEQgFgEgKAAQgMAAgOADQgNADgJAAQgPAAgHgLQgHgMAAgTQAAgQAEgUQADgNAGgFQAGgFALAAQAIgBAHAGQAGAFAAAIIgCANQgCAHAAAGQAAAGAFAEQAEADAHAAQAGAAAOgDQAPgEAIAAQATAAAIANQAJAOAAAUQAAAggRAcQgWAmgYAAQgLAAgHgGgArjA5QgHgIAAgLQAAgJAHgGQAGgGAKAAQAKAAAHAGQAHAHAAAJQAAAMgGAGQgGAHgKAAQgLAAgHgHgApYA0QgGgGAAgKQAAgLALgIQAKgIAFgGQAFgGAAgKQAAgLgHgGQgIgGgNAAQgKAAgOAGQgOAHgJAAQgNAAgHgGQgIgGAAgLQAAgSAQgKQAPgJAhAAQATAAAOADQANADANAIQAaARAAAkQAAAJgCAKQgCAKgEAKQgEAJgGAIQgHAIgJAFQgJAFgLAAQgKAAgHgGgAreAAQgFgFgDgIQgCgJgBgJQgCgJAAgJQAAgKACgKQABgJADgJQADgJAFgFQAFgFAHAAQANAAAGAOQAGAPAAATIgBAWIgEAUQgDAKgGAGQgFAEgIAAQgGAAgFgEg");
	this.shape.setTransform(-117.8021,-136.9469,1.089,1.089);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ForComboTxt, new cjs.Rectangle(-199.2,-151.3,162.79999999999998,28.80000000000001), null);


(lib.an_ComboBox = function(options) {
	this.initialize();
	this._element = new $.an.ComboBox(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.greenCardRight = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_248();
	this.instance.setTransform(0,-1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.greenCardRight, new cjs.Rectangle(0,-1,144,217), null);


(lib.greenCardLeft = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_247();
	this.instance.setTransform(-0.95,-0.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.greenCardLeft, new cjs.Rectangle(-0.9,-0.9,162,201), null);


(lib.card = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AoFM1QhkAAAAhkIAA2hQAAhkBkAAIQKAAQBlAAAABkIAAWhQAABkhlAAg");
	this.shape.setTransform(89.663,125.5474,1.4522,1.5297);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B4B4B4").s().p("AoFM1QhkAAAAhkIAA2hQAAhkBkAAIQKAAQBlAAAABkIAAWhQAABkhlAAg");
	this.shape_1.setTransform(95.163,130.2974,1.4522,1.5297);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.card, new cjs.Rectangle(0,0,184.9,255.9), null);


(lib.blueC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_246();
	this.instance.setTransform(-55.1,-42.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.blueC, new cjs.Rectangle(-55.1,-42.9,117.5,91), null);


(lib.allCards = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ADnAAQAABhhEBCQhDBEhgAAQhfAAhEhEQhDhCAAhhQAAheBDhEQBEhEBfAAQBgAABDBEQBEBEAABeg");
	this.shape.setTransform(-58.6,-90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0E7D46").s().p("AhBCnQgwhNgLgYQgLgYAEgKQALgcAcASQAUAPARAiQAIAQAMgPQApg1BPjBQALgRAPACQAPACAFAMQAGAMgHANIiME6QgJATgKAEQgFADgFAAQgNAAgNgXg");
	this.shape_1.setTransform(-60.2056,-89.1426);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F2162E").s().p("Ah+CgIgMgMQgMgPAMgPIBMhNQATgRgPgOIhKhJQgOgNgGgQQgBgNAEgIQAPgcAdAXQArAiAeAgQAfAgARgaIBWhxQAKgRARALQARALAGAJQAFAJgSAdQgSAehBBMQgRAQAMAMIBGA6QAOAMgOATIgMAPQgMANgQgNIhDg6QgOgNgLANIhRBZQgHAIgIAAQgJAAgKgKg");
	this.shape_2.setTransform(-58.7294,-89.7617);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("An2N4QhhAAgBhsIAA4XQABhsBhAAIPtAAQBhAAABBsIAAYXQgBBshhAAg");
	this.shape_3.setTransform(0.6,-3.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B4B4B4").s().p("AoFM1QhkAAAAhkIAA2hQAAhkBkAAIQKAAQBlAAAABkIAAWhQAABkhlAAg");
	this.shape_4.setTransform(2.7077,-0.23,0.9724,1.0823);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#FFFFFF","#CFE5FA","#5AA5EC","#528ED7"],[0.69,0.78,0.886,1],0,0,0,0,0,104.1).s().p("An2N4QhhAAAAhsIAA4XQAAhsBhAAIPtAAQBiAAgBBsIAAYXQABBshiAAg");
	this.shape_5.setTransform(-0.9,-3.725);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#FFFFFF","#A3F47B","#A3F47B","#2DDD06"],[0.69,0.875,0.886,1],0,0,0,0,0,104.1).s().p("An2N4Qg8AAgXgoQgPgaABgqIAA4XQAAhsBhAAIPtAAQBiAAgBBsIAAYXQAAAqgOAaQgXAog8AAg");
	this.shape_6.setTransform(-0.9,-3.725);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#FFFFFF","#FB7272","#FB7272","#F20404"],[0.69,0.902,0.91,1],0,0,0,0,0,104.1).s().p("An2N4QhhAAAAhsIAA4XQAAhsBhAAIPtAAQBiAAgBBsIAAYXQABBshiAAg");
	this.shape_7.setTransform(-0.9,-3.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).to({state:[{t:this.shape_4},{t:this.shape_5}]},1).to({state:[{t:this.shape_4},{t:this.shape_6}]},1).to({state:[{t:this.shape_4},{t:this.shape_7}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.7,-114.1,145.5,202.7);


(lib.buttonRG = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("שחק שוב", "normal 400 26px 'Alef'");
	this.text.textAlign = "center";
	this.text.lineHeight = 37;
	this.text.lineWidth = 175;
	this.text.parent = this;
	this.text.setTransform(-12.6066,-8.2001,0.8055,0.8055);
	if(!lib.properties.webfonts['Alef']) {
		lib.webFontTxtInst['Alef'] = lib.webFontTxtInst['Alef'] || [];
		lib.webFontTxtInst['Alef'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AB8B5IAEAJIAlBEQg0Ajg3AEQgJABgIAAQhVAAg8hAQg8hAAAhZQAAhZA8hAQAhgjA9gPIgTg3IAUAHICsA3IhnCFIgMAQIgRgyIgCgFQghAIgSATQghAiAAAuQAAAxAhAiQAgAhAwAAQAGAAAFAAIABAAQAcgDAXgQ");
	this.shape.setTransform(68.3261,-0.2863,0.8059,0.8059);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9CC2E6").s().p("AAoDtQA3gEA0gjIglhFIAlBFQg0Ajg3AEQgOAAgOgCQg9gJgvgsIgIgJQgmgogOgzQgHglgBgfQgDhjBBgxQAKgKAMgIQAcgTApgKIABABIABAAIgSgyICsA3IhnCFIgNgnIgQAGIgCgGQghAJgSASQghAiAAAuQAAAxAhAhQAhAiAvAAIALAAIABAAIAGAAQAWAAATgHIALgGIALgGIAsBLQgXAPgYAJQgmAPgnAAIgBAAgAAoCOQgvAAghgiQghghAAgxQAAguAhgiQASgSAhgJIACAGQgVAHgOAOIgGAHQgFAFgEAHQgSAbAAAiQAAAYAHAUQAJAVARARQAHAHAHAFQAZAUAiACIgLAAgAAqgqIBniFIisg3IgCgGIDAA+IhzCUgAANhLgAgbjmg");
	this.shape_1.setTransform(69.7715,-0.2863,0.8059,0.8059);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ARRF4MgjEgACQgJAAgGgCIgDgBIAAgBQgJgEABgHIACgGQgCgGAAgIIAAhDIAAhSQAAguAFgkIAHg7QAEgoABgwIgChYIgBgeIACAAQABgegGgbIgDgNIABgHIgIguQgDgYABgRIgBgBIgBgCQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQgDgHAEgFIABgBIAEgDIAAgBQAEgJAIgBQAFgBAGAEIAEAEIG/gUQCEgGBGgBQBwgCBaAFIBoAHIBoAIQBHAEBYACQA1ABBqgBIEJgCIBVgBQAxgBAmgEIA4gIQAjgFAVgCQApgEBSABIDOABQAMAAAGAEQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAIABABQAIADAAARIAPDwQAGBwABBAQAAAvgEAeIgGAiIgFAgQgDAYABAmQABAugBARIgDAOQAAAGgDAFQgDAFgEADIgFADIgBAAQgGADgJABIgQAAgAoKlPIphAXQABAOADAaIAFAoIADAIQAEAQAAAWQACANgCAaIAAAOQADBjgJBhIgHBEQgEArAAA6IABBlQAAAIgBAFMAjEgASIAKAAQgDg3ACgZQABgSAIg5QANhtgHhrIgHhLIgGhKQgDgyAChhIgSAAQhagEh3AEIjQAMQjYAMiyACQjRACi4gNIhtgIQg+gFgugBIgkgBQhDAAhmAEg");
	this.shape_2.setTransform(0.9707,-0.8988,0.8059,0.8059);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FE8783").s().p("AyFFsIgCgBQgJgEABgJIACgEQgCgHAAgIIAAhCIAAhTQABguAEgkIAHg7QAFgoAAgwIgBhYQgChFgFgjIgHgwQgDgTAag3IAFAFIACgHIABACIABABQgBARADAYIAIAuIgBAIIADAMQAGAbgBAeIgCAAIABAeIACBZQgBAwgEAnIgHA7QgFAkAAAuIAABSIAABDQAAAIACAGIgCAGQgBAHAJAEIgBADIAEAAQAGACAJAAMAjEAABIAQAAQAJgBAGgCIAAACQgCAMgLAFIgCABIgDACIAFADIgLAAIgEABIAHAEgADelAIBqgBIgdABIgnAAIgmAAg");
	this.shape_3.setTransform(-1.6883,2.212,0.8059,0.8059);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AxtFLIgChlQAAg6AEgrIAHhEQAKhhgDhjIAAgOQABgagBgNQgBgWgEgQIgCgIIgFgoQgEgaAAgOIJhgXQCFgFBIACQAtABA/AFIBsAIQC5ANDQgCQCzgCDXgMIDRgMQB2gEBbAEIARAAQgCBhADAyIAGBKIAHBLQAIBrgOBtQgIA5gBASQgBAZACA3IgKAAMgjEAASQACgFAAgIgAKcAbQAABZA9BAQA8A/BVAAIARAAIgRAAQhVAAg8g/Qg9hAAAhZQAAhZA9hAQAhgjA9gPIgTg3IATAHIgTgHIATA3Qg9APghAjQg9BAAABZIAAAAgAMDiSQgMAIgKAKQhCAxADBiQABAgAHAlQAOAzAmAoIAJAJQAvAsA+AJQANACAOAAIABAAQAnAAAngPQAXgKAYgPIgshLIgLAHIgFgIIAFAIIgLAFQgTAIgXAAIgGAAQAcgDAYgQQgYAQgcADIAAAAQgigCgbgUQgHgFgGgHQgSgRgIgVQgIgUAAgYQAAgiASgbQAEgHAGgGIAGgGQANgOAWgIIAQgFIAOAnIAGAQIByiVIjBg9IACAGIATAyIgBAAIgBgCQgpALgcATgANygUIAMgQIgMAQIgSgygAC6kcQAmABAogBIAcAAgAPCCHg");
	this.shape_4.setTransform(1.1609,-0.7497,0.8059,0.8059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.buttonRG, new cjs.Rectangle(-95.8,-31.2,191.2,62.7), null);


(lib.buttonEG = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_245();
	this.instance.setTransform(32.35,-22.65,0.5,0.5);

	this.text = new cjs.Text("סיום", "normal 400 26px 'Alef'");
	this.text.textAlign = "center";
	this.text.lineHeight = 37;
	this.text.lineWidth = 175;
	this.text.parent = this;
	this.text.setTransform(-9.361,-12.2992,0.8057,0.8057);
	if(!lib.properties.webfonts['Alef']) {
		lib.webFontTxtInst['Alef'] = lib.webFontTxtInst['Alef'] || [];
		lib.webFontTxtInst['Alef'].push(this.text);
	}

	this.instance_1 = new lib.CachedBmp_244();
	this.instance_1.setTransform(-83.45,-31.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.text},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.buttonEG, new cjs.Rectangle(-83.4,-31.3,167,62.5), null);


(lib.buttonC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(2,1,1).p("AHZgLQAAAIAAAHQAAABAAABQAAAFgBAFQAAAEgBAEQgBADAAADQgJBAgrAgIgBAAQgMAJgRAHQgaAMgjAEQgRAAh2gCQh2gBgsABQgSgBgRAAQjHgBh+ACQgfgEgYgKQgBgBgBAAQhSghgDhmQAAgJAAgIQAAgGABgEQABgIABgHQABgGABgFQAAgCABgBIAAAAQAAgDABgDIAQgjQAUghApgQIA8gNQAGgBAGAAQADgBACAAQBmgEDqADQC1gCBlAEQACAAADAAQAFAAAFAAQAtAEAfAPQAkAQATAhQAJAPAFAUQAEATACAVg");
	this.shape.setTransform(40.475,15.1649);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(153,153,153,0.486)").s().p("AjyBqQgGgFgDgJQgDgIAAgKIgBgWQAAgfADgXIAAgCQABgJAEgGIABgDQAGgJAJAAIAFABQAIAAAEAFIADAGQACAFAAAIIAAACIgBAGIAAALQAAAQAHAaQAEAPAAAMQAAAOgHAHQgHAGgKABIgEAAQgJAAgGgEgAAsAiQgGgKAAgNIABgLIADgPIAAgBQAFgQAAgKQAAgHgFgFQgEgDgGgBIgEAAIgOACIgOABIgFAAQgKAAgHgHQgIgHABgJQAAgMAIgHQAIgIANAAIACAAIARADQANADAJAAIAEAAIATgDQAPgDAJAAIADAAQAJABAFAGQAHAGAAAJQAAAIgEAFQgEAFgIAGQgHAFgCAHQgCAHAAAMIAAANIABAHIABAIIAAANQAAAMgGAKQgGAHgIACIgEAAQgNAAgGgKgAhVAkQgFgHgBgMIAAgRIAAgDIAAgJIAAgDIAAgIQgBgOgEgOQgEgOAAgIQAAgLAHgJQAIgKANAAIADABQARABAHAUQAFAPAAAfIAAAUIAAADIgBAMIgEARQgFAYgPACIgDAAQgMAAgFgHgACRAoIgDAAIgEAAQgIgCgFgEQgHgHAAgMQAAgNALgGQAKgGAMAAIAEgBIAGAAIAKABIADAAIABAAIADAAIAEAAIAEAAIAAAAQAJAAAHgGQAGgHAAgKQAAgLgIgHQgGgHgKAAIgFgBIgFABIgJACQgHACgJAAIgCAAIgFAAQgHgBgFgEQgHgFAAgLQAAgPASgKQAPgIAWgBIAGAAIAFAAQAcABAQASQANAPgBAgQgBALACAIQABAIAGAHQAIAKAAAMQAAALgHAHQgGAGgMAAIgBAAIgHAAIgLgBIgOgCIgEAAIgGAAIgXADIgZADgAi1AcQgGgGAAgKQAAgKAIgGIADgDQAIgGAFgGIACgCQAFgHAAgKQAAgLgIgGQgGgGgKgBIgEAAQgKAAgPAHQgMAGgIABIgDAAQgMAAgIgHQgIgGAAgLQAAgSAQgKQAPgJAhAAIACAAIAEAAIABAAQAPAAALADQAOACAMAJQAbARAAAlIgCAUIAAACIgFAPIgBADQgFAJgGAIQgGAIgJAFQgIAEgIABIgEAAQgLAAgGgGg");
	this.shape_1.setTransform(41.325,17.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(204,204,204,0.329)").s().p("ADACcQh2gBgrAAIgjAAQjHgDh/ADQgegEgYgKIgLgEQgXgLgRgSQgigmgChBIAAgFIgBgJIABgKIACgPIACgLQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAAAIAAgBIABgFIAQgjQAUghApgQIA8gNIAMgBIAFgBQBmgEDqADQC1gCBlAEIAFAAIAKAAIBMATQAkAQATAhQAJAPAFAUIAAABQADARACARIABAFIAAAPIAAACIgBAKIgBAIIgBAGIgEARIAAABIgKAeQgIAOgJAMQgJALgMAIIAAADIgBAAIAAgBIAAgBQgMAJgRAGQgaALgiAEIgrAAIhdAAgAjegKQgKAAgFAIIgCACQgDAHgBAIIgBACQgDAZAAAeIABAXQABAJADAJQACAJAGAEQAGAFAJAAIAEgBQAKgBAHgFQAIgHAAgOQAAgMgEgQQgIgZAAgRIABgKIABgIIAAgCQAAgHgCgGIgEgEQgEgFgHgBIgEgBIgBABgAAogmQAGABAEAEQAFAEAAAIQAAAJgEAQIAAAAIgEAPIgBANQAAANAGAJQAHAKANAAIADAAQAJgBAFgIQAHgJAAgMIgBgPIgBgHIAAgIIgBgLQAAgMACgHQACgHAIgGQAIgGAEgEQADgGAAgHQAAgJgGgHQgGgFgJgBIgDAAQgJAAgOADIgUACIgDAAQgJAAgNgCIgRgDIgEAAQgLAAgIAHQgJAIAAALQAAAKAHAHQAIAHAIAAIAGAAIAPgCIAOgCIADAAgAhUhJQgHAJAAAMQAAAHAEAPQAEAOABANIAAAHIAAAEIAAAJIAAACIAAATQABALAFAIQAEAHAMAAIADgBQAQgCAFgXIADgTIABgLIAAgEIABgTQAAgfgFgOQgHgUgRgCIgEAAQgNAAgHAJgACgAJQgMABgKAGQgLAHAAANQAAAMAHAGQAFAFAHABIAFAAIACAAIABAAIAZgDIAWgCIAHgBIAEAAIAOACIALACIAHAAIABAAQALgBAHgGQAGgHAAgKQAAgNgIgKQgFgIgCgGQgCgIABgMQACgfgOgPQgQgTgcgBIgEAAIgHABQgVAAgQAJQgSAJAAAPQAAALAHAGQAFAEAHABIAFAAIADAAQAJgBAHgCIAIgCIAGAAIAEAAQAKABAHAGQAIAHAAAMQAAAKgHAFQgGAGgJAAIgBAAIgDAAIgEAAIgQAAIgCAAIgFAAIgEAAgAisgpQAKABAHAFQAHAGAAAMQAAAKgFAGIgBABQgFAGgJAHIgDACQgIAIAAAKQAAAKAGAGQAGAGALAAIAEgBQAJAAAHgEQAJgFAHgIQAGgIAEgKIACgEIAEgPIABgBIABgUQAAgkgagSQgNgIgNgDQgLgCgPgBIgCAAIgEAAIgCAAQggAAgPAJQgQAKAAATQAAALAHAGQAIAGAMAAIADAAQAJgBAMgGQAOgGAKAAIAEAAgAnXgXIACgLIgCAPIAAgEgAnVgiIAAAAg");
	this.shape_2.setTransform(40.4875,14.9982);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(74,74,74,0.047)").s().p("AGVCQIAAABIgBAFIABgGgAGVCNIAAgEIAAgDIAAgBIAAABIAAACIAAABIAAACIAAABIAAACgAGCiAQgfgQgtgDIgFgBIAIAAIABABQAtADAfAQgAE2iTQAtADAfAQgAlOiUIgGACIg8AMIgEABQAdgNApgCg");
	this.shape_3.setTransform(41.7,14.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(204,204,204,0.208)").s().p("AGhCUIAAgCIAAgCIAAACIAAADgAnSgsIABgBIAAAAIgBAFgAHFhMQgTghgkgPIAEAAIADABQAMAGAKAIQAPANAKARIACADIAAAAQAHANAFAQIABAGQgFgTgJgQgAnAhWQANgSATgNQAJgGAMgFIADgBIAEgBQgpAQgUAigAlCiQIAGgCIABAAIACAAIACAAQAWgBAdAAIAGAAIACAAQBmgCCvACIABAAQC0gCBlAEIAKABIAFABIgKgBIgFAAQhlgDi1ABQjqgDhmAFIgFAAIgMACg");
	this.shape_4.setTransform(40.475,14.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(51,51,51,0.149)").s().p("ACpCkIiigBIgjAAQjHgCh+ACQgggEgYgJQgQgJgOgKIACABQAYAJAeAEIATAAICVgBIABAAIAAAAIA8AAIAUAAIAOAAIA/ABIAkAAICgAAIAQABIAOAAIA8ABIALAAIAaAAIAAAAIAHAAIACAAQAigEAbgLQAQgHANgJIgBACIAAADIAAADIAAACIAAABIAAAGIAAgFIABgDIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgCQAMgJAKgLQAJgMAHgNIALgeIAAgBIAEgSQgJBAgsAgQAsggAJhAIAAgGIABgIIABgIIAAgCIAAgRQgCgVgEgSQAEASACAVIgBgEQgBgSgEgQIAAgBIgBgGQgEgRgIgMIAAgBIgBgDQgLgRgOgNQgKgIgMgGIgDgBQgggPgsgEIAKAAIADAAQBNADAoAkQANANAKAPQAXAogCA+IAAANIgBAIIgEAZIgBACIgKAfQgHAPgLAMQgJALgLAJIgBAAIAAABQgNAKgPAIQgaALgjADIgkABIhjgBgADwCTIgLAAIg8gBIgOAAIgQgBIigAAIgkAAIg/gBIgOAAIgUAAIg8AAIAAAAIgBAAIiVABIgTAAQgegEgYgJIgCgBIgIgHIAKAEQAYAKAfAFQB+gDDHADIAlAAQAqgBB2ACICHAAQAjgEAagMQAQgGANgJIAAACIAAABQgNAJgQAHQgbALgiAEIgCAAIgHAAIAAAAIgaAAgAm3CDIAAAAg");
	this.shape_5.setTransform(45.7328,16.2194);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#666666").ss(2,1,1).p("AHYAGQgEBnhQAiQgaALgiAEQgSAAh2gBQh2gBgrAAQgTAAgQAAQjHgCh+ACQgfgEgYgJQhTgigEhnQgFiYChgIQACgBACAAQBmgEDrADQC0gCBmAEQACAAACAAQClAGgFCag");
	this.shape_6.setTransform(40.3248,15.3103);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#48626D").s().p("AjyBqQgGgFgDgJQgDgIAAgKIgBgWQAAgfADgXIAAgCQABgJAEgGIABgDQAGgJAJAAIAFABQAIAAAEAFIADAGQACAFAAAIIAAACIgBAGIAAALQAAAQAHAaQAEAPAAAMQAAAOgHAHQgHAGgKABIgEAAQgJAAgGgEgAAsAiQgGgKAAgNIABgLIADgPIAAgBQAFgQAAgKQAAgHgFgFQgEgDgGgBIgEAAIgOACIgOABIgFAAQgKAAgHgHQgIgHABgJQAAgMAIgHQAIgIANAAIACAAIARADQANADAJAAIAEAAIATgDQAPgDAJAAIADAAQAJABAFAGQAHAGAAAJQAAAIgEAFQgEAFgIAGQgHAFgCAHQgCAHAAAMIAAANIABAHIABAIIAAANQAAAMgGAKQgGAHgIACIgEAAQgNAAgGgKgAhVAkQgFgHgBgMIAAgRIAAgDIAAgJIAAgDIAAgIQgBgOgEgOQgEgOAAgIQAAgLAHgJQAIgKANAAIADABQARABAHAUQAFAPAAAfIAAAUIAAADIgBAMIgEARQgFAYgPACIgDAAQgMAAgFgHgACRAoIgDAAIgEAAQgIgCgFgEQgHgHAAgMQAAgNALgGQAKgGAMAAIAEgBIAGAAIAKABIADAAIABAAIADAAIAEAAIAEAAIAAAAQAJAAAHgGQAGgHAAgKQAAgLgIgHQgGgHgKAAIgFgBIgFABIgJACQgHACgJAAIgCAAIgFAAQgHgBgFgEQgHgFAAgLQAAgPASgKQAPgIAWgBIAGAAIAFAAQAcABAQASQANAPgBAgQgBALACAIQABAIAGAHQAIAKAAAMQAAALgHAHQgGAGgMAAIgBAAIgHAAIgLgBIgOgCIgEAAIgGAAIgXADIgZADgAi1AcQgGgGAAgKQAAgKAIgGIADgDQAIgGAFgGIACgCQAFgHAAgKQAAgLgIgGQgGgGgKgBIgEAAQgKAAgPAHQgMAGgIABIgDAAQgMAAgIgHQgIgGAAgLQAAgSAQgKQAPgJAhAAIACAAIAEAAIABAAQAPAAALADQAOACAMAJQAbARAAAlIgCAUIAAACIgFAPIgBADQgFAJgGAIQgGAIgJAFQgIAEgIABIgEAAQgLAAgGgGg");
	this.shape_7.setTransform(41.325,17.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8CBFD4").s().p("AC7CcIidAAIgiAAQjCgCh7ACQgegEgXgJQgdgNgTgWQgiglgChCIAAgEIAAgKIAAgMIABgNIAEgSIAAgBIASgpQAMgSASgNIAUgMIAEgBQAcgLAngDIAHgCIACAAIACAAIAygBIAGAAIACAAQBjgCCqACIABAAQCvgCBiAEIAFAAIAFABQAxADAiARIADABQAMAGAKAJQAOAMAJAQIACAEQAGAOAFAQIACADIAAAFQADAPACASIAAAEIAAAQIAAAMIgBAIIgEAXIAAACIgLAdQgHAPgJALQgKALgLAJIAAADIAAgBIAAgCQgNAJgPAHQgZALgiADIghAAIhjgBgAjqgLQgJAAgGAIIgBADQgEAGgBAIIAAACQgDAZAAAeIABAXQAAAJADAJQADAJAGAEQAGAFAJAAIAEgBQAKAAAHgGQAHgHAAgOQAAgMgEgQQgHgZAAgRIAAgKIABgIIAAgCQAAgHgCgFIgDgFQgEgFgIgBIgDAAIgCAAgAAdgnQAGABAEAEQAFAEAAAIQAAAJgFAQIAAAAIgDAPIgBANQAAANAGAJQAGAKANAAIAEAAQAIgBAGgIQAGgJAAgMIAAgPIgBgHIgBgIIAAgLQAAgMACgHQACgHAHgGQAIgGAEgEQAEgGAAgHQAAgJgHgHQgFgFgJgBIgDAAQgJAAgPADIgTACIgEAAQgJAAgNgCIgQgDIgDAAQgNAAgIAHQgIAIAAALQgBAKAIAHQAHAHAKAAIAFAAIAOgCIAOgCIAEAAgAhghKQgHAJAAAMQAAAHAEAPQAEAOABANIAAAHIAAAEIAAAJIAAACIAAATQABALAFAIQAFAHAMAAIADgBQAPgCAFgXIAEgTIABgLIAAgEIAAgTQAAgfgFgOQgHgUgRgCIgDAAQgNAAgIAJgACUAIQgMABgKAGQgLAHAAANQAAAMAHAGQAFAFAIABIAEAAIADAAIAAAAIAZgDIAXgCIAGgBIAEAAIAOACIALACIAHAAIABAAQAMgBAGgGQAHgHAAgKQAAgNgIgKQgGgIgBgGQgCgIABgMQABgfgNgPQgQgSgcgCIgFAAIgGABQgWAAgPAJQgSAJAAAPQAAALAHAGQAFAEAHABIAFAAIACAAQAJgBAHgCIAJgCIAFAAIAFAAQAKABAGAGQAIAHAAAMQAAAKgGAFQgHAGgJAAIAAAAIgEAAIgEAAIgDAAIgBAAIgDAAIgKAAIgGAAIgEAAgAi3gqQAKABAGAFQAIAGAAAMQAAAKgFAGIgCACQgFAFgIAHIgDACQgIAIAAAKQAAAKAGAGQAGAGALAAIAEgBQAIAAAIgEQAJgFAGgIQAGgIAFgKIABgEIAFgOIAAgCIACgUQAAgkgbgSQgMgIgOgDQgLgCgPgBIgBAAIgEAAIgCAAQghAAgPAJQgQAKAAATQAAALAIAGQAIAGAMAAIADAAQAIgBAMgGQAPgGAKAAIAEAAgAGWCNIAAADIgBADIABgGg");
	this.shape_8.setTransform(41.625,15.0821);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(140,191,212,0.447)").s().p("ADGCnIhJgBIhdAAIgkAAQjNgDiDADQgfgFgggTQgfgUgXgiQgWgkgEgYIgCgWIgBgFIAAgLIABgNIABgNIAEgSIAAgBIATguQANgTATgMQAngbBBgEIAEAAQBpgFDzADIBiAAQB1gBBLADIAFAAQBNAEAqAjQAwArgCBYIgBANIAAAJIgFAXIAAACIgLAgQgIAOgKANQgKAMgMAKIAAACIAAgCQgNAJgRAHQgbAMgiAEIgZAAIh0AAgAC7CTQBzACASgBQAhgDAZgLQAPgHANgJIAAACIAAABIABgDQALgJAJgLQAJgLAIgPIAKgdIAAgCIAEgXIABgIIABgLIAAgRIgBgEQgBgSgDgPIgBgFIgCgDQgEgQgHgOIgBgEQgKgQgNgMQgLgJgMgGIgDgBQghgRgygDIgEgBIgFAAQhigEivACIgBAAQirgChjACIgBAAIgHAAIgyABIgBAAIgCAAIgHACQgnADgdALIgDABIgUAMQgSANgNASIgRApIAAABIgEASIgBANIgBAMIAAALIAAAEQACBBAiAlQATAWAeANQAXAJAeAEQB7gCDCACIAiAAIAkgBIB4ABgAGVCKIABgDIAAgDIgBAGg");
	this.shape_9.setTransform(41.5811,15.9983);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#48626D").s().p("AjtA8IADgVIAEgaQACgNAAgPQAAgqgdAAQgIAAgOAHQgOAGgKAAQgLAAgIgHQgHgHgBgLQAAgQAQgJQAVgMAeAAQAkAAAVAUQASAQAAAhIgBAZIgBAXQAAAPABAUIACAfQAAAQgHAIQgHAHgMAAQgfAAAHgwgAEfAhQgFgIgBgNIABgSIAAgTQAAgigeAAIgNABIgOAAQgQAAgKgGQgLgGABgNQgBgKAIgHQAHgGAMAAIAUACIAWABIAUAAQALAAAJADQAIADAFAFQAGAFAEAIQADAHACAHIAEARIABARIABASIgBASIgDARQgDAKgFAFQgFAFgJAAQgMAAgGgJgAiZAFQgUgfAAguQAAgSAHgIQAGgJAMAAQAKAAAGAHQAGAHAAALIAAAKIAAAKQABAPAJAAQAIAAAAgSIACgPIAEgNQACgHAFgDQAFgEAJAAQAMAAAHAHQAHAHABAKQgBAOgEANQgEANgHAHQgIAJgMAGQgIAEgBAHQAAAKALAAQALABAJgEQAJgGAGgJQAFgKADgKQADgLAAgKQAAgTAIgPQAHgOAQAAQALAAAHAJQAFAJAAAQQABAWgHAVQgGAVgMAQQgPATgRAIQgQAIgVAAQgxAAgXglgABhAkQgIgGAAgKQAAgLAGgGQAGgFAPgDQAJgCAFgHQAFgGAAgNQAAgLgHgIQgHgIgKAAQgXAAgHAqIgEAXQgDAOgEAIQgJAOgOAAQgKAAgFgJQgGgIAAgOQAAgMAIgQQAGgRAAgKQgBgHgFgLQgHgMAAgIQAAgKAHgHQAFgHAKAAQAJAAAKAGQAKAGAGAAQAIAAAIgGQAKgGAKAAQASAAANALQANAKAFAPQAGAQAAAQQAAAogOAVQgPAUgbAAQgOAAgIgGgADLAnQgGgEgBgFIgDgMIgBgMQAAgRAHgLQAHgKALAAQAYAAAAAiQAAAKgCAIQgDAJgFAGQgHAGgJAAQgHAAgFgCg");
	this.shape_10.setTransform(40.1,17.025);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#8CBFD4").s().p("AC7CcIidAAIgiAAQjCgCh7ACQgegEgXgJQgdgNgTgWQgiglgChCIAAgEIAAgKIAAgMIABgNIAEgSIAAgBIASgpQAMgSASgNIAUgMIAEgBQAcgLAngDIAHgCIACAAIACAAIAygBIAGAAIACAAQBjgCCqACIABAAQCvgCBiAEIAFAAIAFABQAxADAiARIADABQAMAGAKAJQAOAMAJAQIACAEQAGAOAFAQIACADIAAAFQADAPACASIAAAEIAAAQIAAAMIgBAIIgEAXIAAACIgLAdQgHAPgJALQgKALgLAJIAAADIAAgBIAAgCQgNAJgPAHQgZALgiADIghAAIhjgBgAjzADQAAAQgCANIgEAaIgEAWQgGAwAfAAQAMAAAHgIQAHgIAAgQIgCgfQgCgTAAgQIACgYIABgXQAAghgSgRQgWgUgjAAQgeAAgWANQgPAJAAAPQAAAMAIAHQAIAGALAAQAJAAAOgGQAPgGAIAAQAdAAAAAogAELgFIAAASIgBASQAAANAGAJQAGAJAMAAQAIAAAGgFQAFgFADgKIACgSIABgTIAAgQIgBgRIgEgRQgCgHgEgIQgDgIgGgEQgGgFgIgDQgIgDgLAAIgVAAIgVgCIgUgCQgNAAgHAHQgHAHAAAKQAAAMALAGQAKAHAQAAIAOgBIANgBQAeAAAAAjgAi1hPQgHAJAAASQAAAuATAfQAXAlAyAAQAUAAARgIQARgIAPgUQANgQAGgUQAGgWAAgVQAAgQgGgKQgGgJgMAAQgQAAgHAPQgIAOAAATQAAAKgDALQgDALgFAIQgGAKgJAFQgJAGgLgCQgLgBAAgJQAAgIAJgDQAMgGAIgJQAGgHAFgNQAEgNAAgOQAAgKgHgHQgIgHgMAAQgIAAgFAEQgFAEgDAHIgDANIgCAPQAAARgJAAQgIAAgBgOIAAgKIAAgKQAAgMgGgHQgGgGgKAAQgMAAgGAIgABxggQAHAIAAAKQAAAOgFAFQgFAGgKACQgOAEgGAFQgGAGAAALQAAALAIAGQAIAFAOAAQAbAAAOgUQAPgUAAgoQAAgRgGgPQgGgPgNgLQgMgLgSAAQgLAAgJAHQgJAGgHAAQgGAAgKgGQgKgGgJAAQgKAAgGAHQgGAHAAAKQAAAHAGAMQAGAMABAHQAAAKgHAPQgHARAAAMQAAAOAFAJQAGAJAKAAQAOAAAIgOQAFgIADgOIAEgZQAHgpAXAAQAKAAAHAJgAC4gCQgHAJAAASIABANIACALQACAGAFADQAFADAIAAQAJAAAGgGQAGgHADgIQACgJAAgKQAAgigYAAQgLAAgHALgAGWCNIAAADIgBADIABgGg");
	this.shape_11.setTransform(41.625,15.0821);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_11},{t:this.shape_10},{t:this.shape_6}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.9,-1.6,98.5,34.4);


(lib.logoSI = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_368();
	this.instance.setTransform(-133.25,-52.45,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_287();
	this.instance_1.setTransform(-165.9,-31.35,0.5,0.5);

	this.instance_2 = new lib.card();
	this.instance_2.setTransform(-139.2,-0.3,0.3197,0.3634,6.2706,0,0,92.3,127.5);

	this.instance_3 = new lib.CachedBmp_286();
	this.instance_3.setTransform(-114.1,-21.85,0.5,0.5);

	this.instance_4 = new lib.card();
	this.instance_4.setTransform(-83.8,12.4,0.3192,0.3628,14.9913,0,0,92.5,127.4);

	this.instance_5 = new lib.CachedBmp_285();
	this.instance_5.setTransform(-51.9,-8.9,0.5,0.5);

	this.instance_6 = new lib.card();
	this.instance_6.setTransform(-28.4,20.05,0.3192,0.3628,0.3615,0,0,92.5,127.5);

	this.instance_7 = new lib.CachedBmp_284();
	this.instance_7.setTransform(28.15,-10.9,0.5,0.5);

	this.instance_8 = new lib.card();
	this.instance_8.setTransform(57.05,20.4,0.3192,0.3628,5.7446,0,0,100.5,127.8);

	this.instance_9 = new lib.CachedBmp_283();
	this.instance_9.setTransform(76.55,-26.5,0.5,0.5);

	this.instance_10 = new lib.card();
	this.instance_10.setTransform(110.2,8.15,0.3192,0.3628,-14.9913,0,0,100,130.2);

	this.instance_11 = new lib.CachedBmp_282();
	this.instance_11.setTransform(-157.2,-61,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logoSI, new cjs.Rectangle(-173.4,-61,329.20000000000005,130.3), null);


(lib.newG = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_84 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(84).call(this.frame_84).wait(1));

	// Pencils_s_cup
	this.instance = new lib.Pencils_s_cup();
	this.instance.setTransform(179.25,568.45,1,1,0,0,0,63.1,90.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:62.9,regY:90.7,rotation:-0.9441,x:173.1,y:564.65},0).wait(1).to({rotation:-1.8881,x:167.15,y:561.1},0).wait(1).to({rotation:-2.8322,x:161.25,y:557.55},0).wait(1).to({rotation:-3.7763,x:155.3,y:553.95},0).wait(1).to({rotation:-4.7203,x:149.4,y:550.4},0).wait(1).to({rotation:-5.6644,x:143.5,y:546.85},0).wait(1).to({rotation:-6.6084,x:137.6,y:543.3},0).wait(1).to({rotation:-7.5525,x:131.6,y:539.75},0).wait(1).to({rotation:-8.4966,x:125.7,y:536.15},0).wait(1).to({rotation:-9.4406,x:119.8,y:532.6},0).wait(1).to({rotation:-10.3847,x:113.85,y:529},0).wait(1).to({rotation:-5.289,x:117.25,y:524.15},0).wait(1).to({rotation:-0.1932,x:120.6,y:519.35},0).wait(1).to({rotation:4.9025,x:123.95,y:514.45},0).wait(1).to({rotation:9.9982,x:127.35,y:509.6},0).wait(1).to({rotation:15.094,x:130.75,y:504.8},0).wait(1).to({rotation:20.1897,x:134.1,y:499.95},0).wait(1).to({rotation:25.2855,x:137.45,y:495.05},0).wait(1).to({rotation:30.3812,x:140.85,y:490.25},0).wait(1).to({rotation:35.4769,x:144.2,y:485.4},0).wait(1).to({rotation:40.5727,x:147.65,y:480.55},0).wait(1).to({rotation:45.6684,x:150.95,y:475.75},0).wait(1).to({rotation:42.0508,x:148.15,y:469.2},0).wait(1).to({rotation:38.4331,x:145.25,y:462.7},0).wait(1).to({rotation:34.8155,x:142.4,y:456.1},0).wait(1).to({rotation:31.1979,x:139.55,y:449.65},0).wait(1).to({rotation:27.5803,x:136.7,y:443.1},0).wait(1).to({rotation:23.9626,x:133.85,y:436.6},0).wait(1).to({rotation:20.345,x:131,y:430.05},0).wait(1).to({rotation:16.7274,x:128.15,y:423.5},0).wait(1).to({rotation:13.1098,x:125.3,y:417},0).wait(1).to({rotation:9.4921,x:122.45,y:410.45},0).wait(1).to({rotation:5.8745,x:119.55,y:403.95},0).wait(1).to({rotation:2.2871,x:114.35,y:409.4},0).wait(1).to({rotation:-1.3002,x:109.1,y:414.85},0).wait(1).to({rotation:-4.8876,x:103.85,y:420.25},0).wait(1).to({rotation:-8.475,x:98.6,y:425.7},0).wait(1).to({rotation:-12.0623,x:93.4,y:431.15},0).wait(1).to({rotation:-15.6497,x:88.15,y:436.6},0).wait(1).to({rotation:-19.2371,x:83,y:442.05},0).wait(1).to({rotation:-22.8245,x:77.75,y:447.45},0).wait(1).to({rotation:-26.4118,x:72.55,y:452.85},0).wait(1).to({rotation:-29.9992,x:67.25,y:458.3},0).wait(1).to({rotation:-24.4111,x:59.35,y:448.7},0).wait(1).to({rotation:-18.823,x:51.35,y:439.1},0).wait(1).to({rotation:-13.235,x:43.35,y:429.5},0).wait(1).to({rotation:-7.6469,x:35.4,y:419.9},0).wait(1).to({rotation:-2.0588,x:27.4,y:410.3},0).wait(1).to({rotation:3.5293,x:19.5,y:400.7},0).wait(1).to({rotation:9.1173,x:11.55,y:391.05},0).wait(1).to({rotation:14.7054,x:3.6,y:381.5},0).wait(1).to({rotation:20.2935,x:-4.4,y:371.85},0).wait(1).to({rotation:14.4993,x:-15.45,y:380.45},0).wait(1).to({rotation:8.7051,x:-26.5,y:389},0).wait(1).to({rotation:2.9109,x:-37.6,y:397.6},0).wait(1).to({rotation:-2.8833,x:-48.7,y:406.2},0).wait(1).to({rotation:-8.6775,x:-59.65,y:414.7},0).wait(1).to({rotation:-14.4717,x:-70.8,y:423.3},0).wait(1).to({rotation:-20.2659,x:-81.85,y:431.85},0).wait(1).to({rotation:-26.0601,x:-92.9,y:440.45},0).wait(1).to({rotation:-31.8543,x:-103.9,y:449},0).wait(1).to({rotation:-26.6482,x:-116,y:442.85},0).wait(1).to({rotation:-21.4421,x:-128.1,y:436.65},0).wait(1).to({rotation:-16.236,x:-140.15,y:430.55},0).wait(1).to({rotation:-11.0299,x:-152.25,y:424.3},0).wait(1).to({rotation:-5.8239,x:-164.35,y:418.2},0).wait(1).to({rotation:-0.6178,x:-176.35,y:412.05},0).wait(1).to({rotation:4.5883,x:-188.45,y:405.9},0).wait(1).to({rotation:9.7944,x:-200.5,y:399.75},0).wait(1).to({rotation:15.0005,x:-212.55,y:393.6},0).wait(1).to({rotation:11.1035,x:-236.1,y:400.7},0).wait(1).to({rotation:7.2064,x:-259.65,y:407.9},0).wait(1).to({rotation:3.3094,x:-283.2,y:415},0).wait(1).to({rotation:-0.5876,x:-306.7,y:422.15},0).wait(1).to({rotation:-4.4847,x:-330.25,y:429.25},0).wait(1).to({rotation:-8.3817,x:-353.75,y:436.45},0).wait(1).to({rotation:-12.2788,x:-377.3,y:443.5},0).wait(1).to({rotation:-16.1758,x:-400.85,y:450.7},0).wait(1).to({x:-429.8,y:434.55},0).wait(1).to({x:-458.7,y:418.4},0).wait(1).to({x:-487.65,y:402.25},0).wait(1).to({x:-516.6,y:386.1},0).wait(1).to({x:-545.55,y:369.95},0).wait(1).to({x:-574.5,y:353.8},0).wait(1));

	// Cell_tape
	this.instance_1 = new lib.Cell_tape();
	this.instance_1.setTransform(398.85,614.35,1,1,0,0,0,39.1,62.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({rotation:2.1694,x:394,y:613.5},0).wait(1).to({rotation:4.3389,x:389.3,y:612.65},0).wait(1).to({rotation:6.5083,x:384.55,y:611.85},0).wait(1).to({rotation:8.6778,x:379.8,y:611.05},0).wait(1).to({rotation:10.8472,x:375.05,y:610.2},0).wait(1).to({rotation:13.0167,x:370.25,y:609.35},0).wait(1).to({rotation:15.1861,x:365.55,y:608.55},0).wait(1).to({rotation:17.3555,x:360.7,y:607.7},0).wait(1).to({rotation:19.525,x:356,y:606.9},0).wait(1).to({rotation:21.6944,x:351.25,y:606.05},0).wait(1).to({rotation:23.8639,x:346.5,y:605.25},0).wait(1).to({rotation:26.0333,x:341.75,y:604.4},0).wait(1).to({rotation:28.2028,x:336.95,y:603.6},0).wait(1).to({rotation:30.3722,x:332.25,y:602.75},0).wait(1).to({rotation:27.5701,x:331.35,y:606.7},0).wait(1).to({rotation:24.7679,x:330.5,y:610.6},0).wait(1).to({rotation:21.9658,x:329.65,y:614.55},0).wait(1).to({rotation:19.1636,x:328.85,y:618.5},0).wait(1).to({rotation:16.3615,x:327.9,y:622.4},0).wait(1).to({rotation:13.5594,x:327.1,y:626.35},0).wait(1).to({rotation:10.7572,x:326.25,y:630.3},0).wait(1).to({rotation:7.9551,x:325.35,y:634.25},0).wait(1).to({rotation:5.1529,x:324.55,y:638.15},0).wait(1).to({rotation:2.3508,x:323.65,y:642.1},0).wait(1).to({rotation:-0.4513,x:322.85,y:646.05},0).wait(1).to({rotation:-3.2535,x:322,y:650},0).wait(1).to({rotation:-6.0556,x:321.1,y:653.95},0).wait(1).to({rotation:-8.8578,x:320.25,y:657.85},0).wait(1).to({rotation:-11.6599,x:319.45,y:661.75},0).wait(1).to({rotation:-9.6761,x:323.25,y:664.3},0).wait(1).to({rotation:-7.6924,x:327.05,y:666.8},0).wait(1).to({rotation:-5.7086,x:330.85,y:669.35},0).wait(1).to({rotation:-3.7248,x:334.65,y:671.8},0).wait(1).to({rotation:-1.7411,x:338.45,y:674.35},0).wait(1).to({rotation:0.2427,x:342.25,y:676.85},0).wait(1).to({rotation:2.2265,x:346.05,y:679.35},0).wait(1).to({rotation:4.2102,x:349.9,y:681.9},0).wait(1).to({rotation:6.194,x:353.65,y:684.45},0).wait(1).to({rotation:8.1778,x:357.45,y:686.9},0).wait(1).to({rotation:10.1615,x:358.9,y:690.4},0).wait(1).to({rotation:12.1453,x:360.3,y:693.95},0).wait(1).to({rotation:14.1291,x:361.7,y:697.4},0).wait(1).to({rotation:16.1128,x:363.15,y:700.9},0).wait(1).to({rotation:18.0966,x:364.6,y:704.4},0).wait(1).to({rotation:20.0804,x:366,y:707.85},0).wait(1).to({rotation:22.0641,x:367.45,y:711.35},0).wait(1).to({rotation:24.0479,x:368.85,y:714.85},0).wait(1).to({rotation:26.0317,x:370.3,y:718.3},0).wait(1).to({rotation:28.0154,x:371.7,y:721.8},0).wait(1).to({rotation:29.9992,x:373.1,y:725.3},0).wait(1).to({rotation:28.8289,x:366.95,y:730.55},0).wait(1).to({rotation:27.6585,x:360.85,y:735.85},0).wait(1).to({rotation:26.4882,x:354.65,y:741.2},0).wait(1).to({rotation:25.3179,x:348.5,y:746.45},0).wait(1).to({rotation:24.1475,x:342.35,y:751.8},0).wait(1).to({rotation:22.9772,x:336.2,y:757.05},0).wait(1).to({rotation:21.8069,x:330,y:762.35},0).wait(1).to({rotation:20.6365,x:323.85,y:767.7},0).wait(1).to({rotation:19.4662,x:317.7,y:773},0).wait(1).to({rotation:18.2958,x:312.3,y:775.3},0).wait(1).to({rotation:17.1255,x:306.9,y:777.55},0).wait(1).to({rotation:15.9552,x:301.55,y:779.9},0).wait(1).to({rotation:14.7848,x:296.15,y:782.2},0).wait(1).to({rotation:13.6145,x:290.75,y:784.5},0).wait(1).to({rotation:12.4442,x:285.4,y:786.8},0).wait(1).to({rotation:11.2738,x:279.95,y:789.1},0).wait(1).to({rotation:10.1035,x:274.65,y:791.4},0).wait(1).to({rotation:8.9332,x:269.25,y:793.65},0).wait(1).to({rotation:7.7628,x:263.8,y:795.95},0).wait(16));

	// Hidodim
	this.instance_2 = new lib.Hidodim();
	this.instance_2.setTransform(300.9,288.4,1,1,0,0,0,56.8,56.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({rotation:4.0909,x:305.75,y:281.65},0).wait(1).to({rotation:8.1819,x:310.6,y:275},0).wait(1).to({rotation:12.2728,x:315.55,y:268.25},0).wait(1).to({rotation:16.3638,x:320.45,y:261.6},0).wait(1).to({rotation:20.4547,x:325.3,y:254.85},0).wait(1).to({rotation:24.5457,x:330.2,y:248.2},0).wait(1).to({rotation:28.6366,x:335.1,y:241.45},0).wait(1).to({rotation:32.7276,x:340,y:234.75},0).wait(1).to({rotation:36.8185,x:344.9,y:228.05},0).wait(1).to({rotation:40.9095,x:349.8,y:221.35},0).wait(1).to({rotation:45.0004,x:354.7,y:214.6},0).wait(1).to({rotation:38.7488,x:351,y:211.8},0).wait(1).to({rotation:32.4972,x:347.3,y:208.95},0).wait(1).to({rotation:26.2456,x:343.7,y:206.1},0).wait(1).to({rotation:19.994,x:340,y:203.25},0).wait(1).to({rotation:13.7424,x:336.3,y:200.5},0).wait(1).to({rotation:7.4908,x:332.65,y:197.6},0).wait(1).to({rotation:1.2392,x:329,y:194.8},0).wait(1).to({rotation:-5.0124,x:325.35,y:192},0).wait(1).to({rotation:-11.264,x:321.65,y:189.1},0).wait(1).to({rotation:-17.5156,x:318,y:186.25},0).wait(1).to({rotation:-23.7672,x:314.3,y:183.45},0).wait(1).to({rotation:-23.5365,x:310.6,y:180.6},0).wait(1).to({rotation:-23.3057,x:306.95,y:177.75},0).wait(1).to({rotation:-23.075,x:303.3,y:174.95},0).wait(1).to({rotation:-22.8443,x:299.65,y:172.1},0).wait(1).to({rotation:-22.6136,x:295.95,y:169.25},0).wait(1).to({rotation:-22.3828,x:292.2,y:166.4},0).wait(1).to({rotation:-22.1521,x:288.55,y:163.6},0).wait(1).to({rotation:-21.9214,x:284.9,y:160.75},0).wait(1).to({rotation:-21.6907,x:281.25,y:157.95},0).wait(1).to({rotation:-21.4599,x:277.5,y:155.05},0).wait(1).to({rotation:-21.2292,x:273.85,y:152.3},0).wait(1).to({rotation:-20.9985,x:270.2,y:149.4},0).wait(1).to({rotation:-7.5365,x:272.5,y:143.9},0).wait(1).to({rotation:5.9254,x:274.8,y:138.4},0).wait(1).to({rotation:19.3874,x:277.1,y:132.85},0).wait(1).to({rotation:32.8493,x:279.3,y:127.4},0).wait(1).to({rotation:46.3113,x:281.65,y:121.8},0).wait(1).to({rotation:59.7733,x:283.95,y:116.35},0).wait(1).to({rotation:73.2352,x:286.25,y:110.8},0).wait(1).to({rotation:86.6972,x:288.5,y:105.25},0).wait(1).to({rotation:100.1591,x:290.85,y:99.7},0).wait(1).to({rotation:113.6211,x:293.1,y:94.15},0).wait(1).to({rotation:127.083,x:295.4,y:88.6},0).wait(1).to({rotation:140.545,x:297.7,y:83.1},0).wait(1).to({rotation:133.833,x:292.15,y:80.15},0).wait(1).to({rotation:127.1211,x:286.6,y:77.2},0).wait(1).to({rotation:120.4091,x:281.1,y:74.25},0).wait(1).to({rotation:113.6971,x:275.6,y:71.3},0).wait(1).to({rotation:106.9852,x:270.1,y:68.3},0).wait(1).to({rotation:100.2732,x:264.6,y:65.4},0).wait(1).to({rotation:93.5612,x:259.05,y:62.45},0).wait(1).to({rotation:86.8493,x:253.6,y:59.55},0).wait(1).to({rotation:80.1373,x:248.1,y:56.6},0).wait(1).to({rotation:73.4253,x:242.6,y:53.65},0).wait(1).to({rotation:66.7134,x:237.05,y:50.7},0).wait(1).to({rotation:60.0014,x:231.55,y:47.75},0).wait(1).to({rotation:56.5397,x:234.05,y:37.65},0).wait(1).to({rotation:53.0781,x:236.5,y:27.6},0).wait(1).to({rotation:49.6164,x:238.95,y:17.8},0).wait(1).to({rotation:46.1547,x:241.4,y:8.1},0).wait(1).to({rotation:42.6931,x:243.7,y:-1.35},0).wait(1).to({rotation:39.2314,x:246,y:-10.7},0).wait(1).to({rotation:35.7697,x:248.25,y:-19.75},0).wait(1).to({rotation:32.308,x:250.4,y:-28.55},0).wait(1).to({rotation:28.8464,x:252.55,y:-37},0).wait(1).to({rotation:25.3847,x:254.45,y:-44.95},0).wait(1).to({rotation:21.923,x:256.25,y:-52.15},0).wait(1).to({rotation:18.4614,x:257.7,y:-58},0).wait(1).to({rotation:14.9997,x:257.85,y:-59},0).wait(1).to({rotation:16.4997,x:269.8,y:-73.65},0).wait(1).to({rotation:17.9997,x:281.75,y:-88.35},0).wait(1).to({rotation:19.4998,x:293.7,y:-103},0).wait(1).to({rotation:20.9998,x:305.7,y:-117.7},0).wait(1).to({rotation:22.4998,x:317.65,y:-132.3},0).wait(1).to({rotation:23.9998,x:329.6,y:-146.95},0).wait(1).to({rotation:25.4998,x:341.5,y:-161.6},0).wait(1).to({rotation:26.9999,x:353.5,y:-176.25},0).wait(1).to({rotation:28.4999,x:365.45,y:-190.95},0).wait(1).to({rotation:29.9999,x:377.4,y:-205.6},0).wait(4));

	// Color_tube
	this.instance_3 = new lib.Color_tube();
	this.instance_3.setTransform(168.85,143.05,1,1,0,0,0,45.6,51.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regY:52,rotation:-1.4043,x:166.15,y:136.15},0).wait(1).to({rotation:-2.8085,x:163.5,y:129.15},0).wait(1).to({rotation:-4.2128,x:160.85,y:122.15},0).wait(1).to({rotation:-5.617,x:158.2,y:115.2},0).wait(1).to({rotation:-7.0213,x:155.5,y:108.2},0).wait(1).to({rotation:-8.4255,x:152.85,y:101.2},0).wait(1).to({rotation:-9.8298,x:150.25,y:94.2},0).wait(1).to({rotation:-11.234,x:147.6,y:87.2},0).wait(1).to({rotation:-12.6383,x:144.9,y:80.2},0).wait(1).to({rotation:-14.0425,x:149.1,y:76.05},0).wait(1).to({rotation:-15.4468,x:153.3,y:71.8},0).wait(1).to({rotation:-16.8511,x:157.5,y:67.65},0).wait(1).to({rotation:-18.2553,x:161.75,y:63.5},0).wait(1).to({rotation:-19.6596,x:165.95,y:59.25},0).wait(1).to({rotation:-21.0638,x:170.15,y:55.1},0).wait(1).to({rotation:-22.4681,x:174.35,y:50.9},0).wait(1).to({rotation:-23.8723,x:178.6,y:46.75},0).wait(1).to({rotation:-25.2766,x:182.8,y:42.55},0).wait(1).to({rotation:-26.6808,x:187,y:38.4},0).wait(1).to({rotation:-28.0851,x:191.25,y:34.25},0).wait(1).to({rotation:-25.3785,x:186.5,y:32.95},0).wait(1).to({rotation:-22.6719,x:181.85,y:31.7},0).wait(1).to({rotation:-19.9654,x:177.05,y:30.5},0).wait(1).to({rotation:-17.2588,x:172.4,y:29.25},0).wait(1).to({rotation:-14.5522,x:167.65,y:28.05},0).wait(1).to({rotation:-11.8456,x:162.95,y:26.8},0).wait(1).to({rotation:-9.1391,x:158.2,y:25.55},0).wait(1).to({rotation:-15.8722,x:158.65,y:19.9},0).wait(1).to({rotation:-22.6053,x:159.15,y:14.3},0).wait(1).to({rotation:-29.3384,x:159.6,y:8.7},0).wait(1).to({rotation:-36.0715,x:160,y:3.1},0).wait(1).to({rotation:-42.8046,x:160.5,y:-2.5},0).wait(1).to({rotation:-49.5377,x:160.9,y:-8.1},0).wait(1).to({rotation:-56.2708,x:161.35,y:-13.75},0).wait(1).to({rotation:-63.0039,x:161.8,y:-19.35},0).wait(1).to({rotation:-69.737,x:162.25,y:-25},0).wait(1).to({rotation:-76.4701,x:162.65,y:-30.65},0).wait(1).to({rotation:-64.8186,x:158.5,y:-24.35},0).wait(1).to({rotation:-53.1671,x:154.35,y:-18.15},0).wait(1).to({rotation:-41.5156,x:150.2,y:-11.9},0).wait(1).to({rotation:-29.8641,x:146.1,y:-5.7},0).wait(1).to({rotation:-18.2126,x:141.9,y:0.5},0).wait(1).to({rotation:-6.5611,x:137.75,y:6.65},0).wait(1).to({rotation:5.0905,x:133.6,y:12.9},0).wait(1).to({rotation:16.742,x:129.4,y:19.1},0).wait(1).to({rotation:28.3935,x:125.2,y:25.25},0).wait(1).to({rotation:40.045,x:121.1,y:31.45},0).wait(1).to({rotation:51.6965,x:116.9,y:37.65},0).wait(1).to({rotation:63.348,x:112.75,y:43.8},0).wait(1).to({rotation:74.9995,x:108.55,y:49.95},0).wait(1).to({rotation:69.9995,x:103.35,y:46.3},0).wait(1).to({rotation:64.9995,x:98.05,y:42.65},0).wait(1).to({rotation:59.9996,x:92.8,y:38.95},0).wait(1).to({rotation:54.9996,x:87.55,y:35.3},0).wait(1).to({rotation:49.9996,x:82.3,y:31.65},0).wait(1).to({rotation:44.9996,x:77.1,y:27.9},0).wait(1).to({rotation:39.9996,x:71.85,y:24.25},0).wait(1).to({rotation:34.9996,x:66.55,y:20.6},0).wait(1).to({rotation:29.9997,x:61.3,y:16.95},0).wait(1).to({rotation:24.9997,x:56.05,y:13.25},0).wait(1).to({rotation:19.9997,x:50.8,y:9.55},0).wait(1).to({rotation:14.9997,x:45.55,y:5.9},0).wait(1).to({rotation:16.3632,x:39.05,y:7.75},0).wait(1).to({rotation:17.7266,x:32.5,y:9.65},0).wait(1).to({rotation:19.0901,x:26.05,y:11.45},0).wait(1).to({rotation:20.4536,x:19.55,y:13.35},0).wait(1).to({rotation:21.8171,x:13,y:15.2},0).wait(1).to({rotation:23.1805,x:6.5,y:17.05},0).wait(1).to({rotation:24.544,x:0,y:18.95},0).wait(1).to({rotation:25.9075,x:-6.55,y:20.75},0).wait(1).to({rotation:27.271,x:-13.05,y:22.65},0).wait(1).to({rotation:28.6344,x:-19.55,y:24.55},0).wait(1).to({rotation:29.9979,x:-26.05,y:26.4},0).wait(1).to({rotation:20.4523,x:-31.6,y:20.05},0).wait(1).to({rotation:10.9067,x:-37.15,y:13.7},0).wait(1).to({rotation:1.3612,x:-42.7,y:7.4},0).wait(1).to({rotation:-8.1844,x:-48.2,y:1},0).wait(1).to({rotation:-17.73,x:-53.7,y:-5.3},0).wait(1).to({rotation:-27.2756,x:-59.25,y:-11.7},0).wait(1).to({rotation:-36.8212,x:-64.85,y:-18.05},0).wait(1).to({rotation:-46.3668,x:-70.35,y:-24.35},0).wait(1).to({rotation:-55.9123,x:-75.95,y:-30.7},0).wait(1).to({rotation:-65.4579,x:-81.45,y:-37.1},0).wait(1).to({rotation:-75.0035,x:-87,y:-43.45},0).wait(1));

	// clip
	this.instance_4 = new lib.clip();
	this.instance_4.setTransform(850.15,588.7,1,1,0,0,0,24.3,34);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regY:33.9,rotation:5.227,x:856.5,y:592},0).wait(1).to({rotation:10.4541,x:862.95,y:595.45},0).wait(1).to({rotation:15.6811,x:869.35,y:598.85},0).wait(1).to({rotation:20.9082,x:875.75,y:602.25},0).wait(1).to({rotation:26.1352,x:882.15,y:605.75},0).wait(1).to({rotation:31.3623,x:888.55,y:609.2},0).wait(1).to({rotation:36.5893,x:894.95,y:612.6},0).wait(1).to({rotation:41.8164,x:901.35,y:616},0).wait(1).to({rotation:47.0434,x:907.8,y:619.5},0).wait(1).to({rotation:52.2705,x:914.2,y:622.9},0).wait(1).to({rotation:57.4975,x:920.6,y:626.35},0).wait(1).to({rotation:52.9357,x:916,y:628.25},0).wait(1).to({rotation:48.3738,x:911.35,y:630.05},0).wait(1).to({rotation:43.812,x:906.75,y:631.9},0).wait(1).to({rotation:39.2501,x:902.1,y:633.75},0).wait(1).to({rotation:34.6883,x:897.5,y:635.65},0).wait(1).to({rotation:30.1264,x:892.85,y:637.5},0).wait(1).to({rotation:25.5646,x:888.2,y:639.4},0).wait(1).to({rotation:21.0027,x:883.65,y:641.2},0).wait(1).to({rotation:16.4409,x:879,y:643.1},0).wait(1).to({rotation:11.879,x:874.4,y:644.9},0).wait(1).to({rotation:7.3172,x:869.75,y:646.8},0).wait(1).to({rotation:2.7553,x:865.1,y:648.65},0).wait(1).to({rotation:-1.8065,x:860.5,y:650.55},0).wait(1).to({rotation:4.9224,x:861.6,y:654.45},0).wait(1).to({rotation:11.6513,x:862.7,y:658.4},0).wait(1).to({rotation:18.3801,x:863.75,y:662.3},0).wait(1).to({rotation:25.109,x:864.85,y:666.25},0).wait(1).to({rotation:31.8379,x:865.95,y:670.15},0).wait(1).to({rotation:38.5668,x:867,y:674.1},0).wait(1).to({rotation:45.2957,x:868.1,y:678.05},0).wait(1).to({rotation:52.0245,x:869.2,y:681.95},0).wait(1).to({rotation:58.7534,x:870.25,y:685.9},0).wait(1).to({rotation:65.4823,x:871.35,y:689.8},0).wait(1).to({rotation:60.893,x:868.5,y:693.8},0).wait(1).to({rotation:56.3036,x:865.7,y:697.65},0).wait(1).to({rotation:51.7143,x:862.85,y:701.55},0).wait(1).to({rotation:47.125,x:860,y:705.5},0).wait(1).to({rotation:42.5357,x:857.15,y:709.45},0).wait(1).to({rotation:37.9463,x:854.3,y:713.35},0).wait(1).to({rotation:33.357,x:851.45,y:717.25},0).wait(1).to({rotation:28.7677,x:848.65,y:721.15},0).wait(1).to({rotation:24.1784,x:845.75,y:725.1},0).wait(1).to({rotation:19.589,x:842.95,y:729.05},0).wait(1).to({rotation:14.9997,x:840.1,y:732.95},0).wait(1).to({rotation:16.6779,x:843.85,y:734.95},0).wait(1).to({rotation:18.3562,x:847.55,y:737},0).wait(1).to({rotation:20.0344,x:851.4,y:739.05},0).wait(1).to({rotation:21.7126,x:855.15,y:741.15},0).wait(1).to({rotation:23.3909,x:858.9,y:743.2},0).wait(1).to({rotation:25.0691,x:862.65,y:745.25},0).wait(1).to({rotation:26.7473,x:866.45,y:747.3},0).wait(1).to({rotation:28.4255,x:870.15,y:749.35},0).wait(1).to({rotation:30.1038,x:873.95,y:751.45},0).wait(1).to({rotation:31.782,x:877.7,y:753.45},0).wait(1).to({rotation:33.4602,x:881.45,y:755.55},0).wait(1).to({rotation:35.1385,x:885.25,y:757.55},0).wait(1).to({rotation:36.8167,x:889,y:759.65},0).wait(1).to({rotation:33.9846,x:890.65,y:763.35},0).wait(1).to({rotation:31.1526,x:892.35,y:767.05},0).wait(1).to({rotation:28.3205,x:894,y:770.85},0).wait(1).to({rotation:25.4885,x:895.65,y:774.55},0).wait(1).to({rotation:22.6564,x:897.3,y:778.25},0).wait(1).to({rotation:19.8244,x:899,y:782},0).wait(1).to({rotation:16.9923,x:900.7,y:785.7},0).wait(1).to({rotation:14.1603,x:902.3,y:789.45},0).wait(1).to({rotation:11.3282,x:904.05,y:793.15},0).wait(1).to({rotation:8.4962,x:905.7,y:796.95},0).wait(1).to({rotation:5.6641,x:907.35,y:800.65},0).wait(1).to({rotation:2.8321,x:909,y:804.35},0).wait(1).to({rotation:0,x:910.7,y:808.1},0).wait(14));

	// Color_tube2
	this.instance_5 = new lib.Color_tube2();
	this.instance_5.setTransform(1077.8,572.8,1,1,0,0,0,85.5,78);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:85.6,rotation:-3.3331,x:1075,y:562.9},0).wait(1).to({rotation:-6.6662,x:1072.1,y:553.05},0).wait(1).to({rotation:-9.9993,x:1069.25,y:543.2},0).wait(1).to({rotation:-13.3324,x:1066.4,y:533.35},0).wait(1).to({rotation:-16.6655,x:1063.45,y:523.5},0).wait(1).to({rotation:-19.9986,x:1060.65,y:513.7},0).wait(1).to({rotation:-23.3317,x:1057.75,y:503.8},0).wait(1).to({rotation:-26.6648,x:1054.85,y:493.95},0).wait(1).to({rotation:-29.9979,x:1052,y:484.1},0).wait(1).to({rotation:-26.9981,x:1058.55,y:483.75},0).wait(1).to({rotation:-23.9983,x:1065.2,y:483.4},0).wait(1).to({rotation:-20.9985,x:1071.85,y:483.05},0).wait(1).to({rotation:-17.9987,x:1078.45,y:482.7},0).wait(1).to({rotation:-14.9989,x:1085.15,y:482.3},0).wait(1).to({rotation:-11.9992,x:1091.75,y:481.95},0).wait(1).to({rotation:-8.9994,x:1098.35,y:481.6},0).wait(1).to({rotation:-5.9996,x:1105,y:481.2},0).wait(1).to({rotation:-2.9998,x:1111.65,y:480.85},0).wait(1).to({rotation:0,x:1118.25,y:480.55},0).wait(1).to({rotation:-2.1689,x:1119.6,y:477.45},0).wait(1).to({rotation:-4.3378,x:1121,y:474.45},0).wait(1).to({rotation:-6.5067,x:1122.4,y:471.3},0).wait(1).to({rotation:-8.6756,x:1123.7,y:468.25},0).wait(1).to({rotation:-10.8445,x:1125.1,y:465.15},0).wait(1).to({rotation:-13.0134,x:1126.5,y:462.15},0).wait(1).to({rotation:-15.1823,x:1127.9,y:459.05},0).wait(1).to({rotation:-8.7248,x:1129.3,y:455.95},0).wait(1).to({rotation:-2.2672,x:1130.7,y:452.9},0).wait(1).to({rotation:4.1903,x:1132.05,y:449.85},0).wait(1).to({rotation:10.6479,x:1133.5,y:446.75},0).wait(1).to({rotation:17.1054,x:1134.8,y:443.75},0).wait(1).to({rotation:23.5629,x:1136.2,y:440.65},0).wait(1).to({rotation:30.0205,x:1137.6,y:437.65},0).wait(1).to({rotation:36.478,x:1139,y:434.5},0).wait(1).to({rotation:42.9356,x:1140.3,y:431.45},0).wait(1).to({rotation:49.3931,x:1141.75,y:428.4},0).wait(1).to({rotation:43.6603,x:1151.35,y:430.9},0).wait(1).to({rotation:37.9275,x:1160.85,y:433.3},0).wait(1).to({rotation:32.1947,x:1170.5,y:435.75},0).wait(1).to({rotation:26.4619,x:1180.05,y:438.25},0).wait(1).to({rotation:20.7291,x:1189.6,y:440.65},0).wait(1).to({rotation:14.9963,x:1199.2,y:443.1},0).wait(1).to({rotation:9.2635,x:1208.8,y:445.6},0).wait(1).to({rotation:3.5307,x:1218.35,y:448},0).wait(1).to({rotation:-2.2021,x:1220.65,y:441.9},0).wait(1).to({rotation:-3.3517,x:1222.95,y:435.85},0).wait(1).to({rotation:-4.5014,x:1225.25,y:429.8},0).wait(1).to({rotation:-5.6511,x:1227.6,y:423.65},0).wait(1).to({rotation:-6.8008,x:1229.9,y:417.6},0).wait(1).to({rotation:-7.9505,x:1232.2,y:411.5},0).wait(1).to({rotation:-9.1002,x:1234.45,y:405.4},0).wait(1).to({rotation:-10.2499,x:1236.85,y:399.35},0).wait(1).to({rotation:-11.3996,x:1239.05,y:393.3},0).wait(1).to({rotation:-12.5492,x:1241.4,y:387.2},0).wait(1).to({rotation:-13.6989,x:1243.65,y:381.15},0).wait(1).to({rotation:-14.8486,x:1246.05,y:375.05},0).wait(1).to({rotation:-15.9983,x:1248.35,y:368.95},0).wait(1).to({rotation:-13.9195,x:1255.35,y:369.65},0).wait(1).to({rotation:-11.8407,x:1262.35,y:370.45},0).wait(1).to({rotation:-9.762,x:1269.3,y:371.1},0).wait(1).to({rotation:-7.6832,x:1276.4,y:371.85},0).wait(1).to({rotation:-5.6044,x:1283.35,y:372.6},0).wait(1).to({rotation:-3.5256,x:1290.35,y:373.3},0).wait(1).to({rotation:-1.4469,x:1297.3,y:374.05},0).wait(1).to({rotation:0.6319,x:1304.35,y:374.75},0).wait(1).to({rotation:2.7107,x:1311.35,y:375.45},0).wait(1).to({rotation:4.7895,x:1318.35,y:376.2},0).wait(1).to({rotation:5.3684,x:1325.35,y:370.65},0).wait(1).to({rotation:5.9474,x:1332.35,y:365.1},0).wait(1).to({rotation:6.5263,x:1339.4,y:359.6},0).wait(1).to({rotation:7.1053,x:1346.35,y:354.05},0).wait(1).to({rotation:7.6842,x:1353.35,y:348.5},0).wait(1).to({rotation:8.2632,x:1360.35,y:342.95},0).wait(1).to({rotation:8.8421,x:1367.4,y:337.4},0).wait(1).to({rotation:9.4211,x:1374.4,y:331.85},0).wait(1).to({rotation:10,x:1381.35,y:326.3},0).wait(9));

	// Scissors
	this.instance_6 = new lib.Scissors();
	this.instance_6.setTransform(957.55,350.5,1,1,0,0,0,38.9,64.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({rotation:-1.4999,x:954.8,y:342.8},0).wait(1).to({rotation:-2.9998,x:952.1,y:335},0).wait(1).to({rotation:-4.4997,x:949.4,y:327.3},0).wait(1).to({rotation:-5.9996,x:946.6,y:319.55},0).wait(1).to({rotation:-7.4994,x:943.85,y:311.8},0).wait(1).to({rotation:-8.9993,x:941.1,y:304.05},0).wait(1).to({rotation:-10.4992,x:938.45,y:296.35},0).wait(1).to({rotation:-11.9991,x:935.7,y:288.6},0).wait(1).to({rotation:-13.499,x:933,y:280.85},0).wait(1).to({rotation:-14.9989,x:930.2,y:273.2},0).wait(1).to({rotation:-11.5374,x:935.3,y:265.25},0).wait(1).to({rotation:-8.0759,x:940.35,y:257.35},0).wait(1).to({rotation:-4.6144,x:945.4,y:249.4},0).wait(1).to({rotation:-1.1529,x:950.5,y:241.5},0).wait(1).to({rotation:2.3086,x:955.55,y:233.55},0).wait(1).to({rotation:5.7701,x:960.6,y:225.6},0).wait(1).to({rotation:9.2315,x:965.65,y:217.7},0).wait(1).to({rotation:12.693,x:970.75,y:209.8},0).wait(1).to({rotation:16.1545,x:975.8,y:201.85},0).wait(1).to({rotation:19.616,x:980.9,y:193.95},0).wait(1).to({rotation:23.0775,x:985.95,y:186},0).wait(1).to({rotation:26.539,x:991,y:178.15},0).wait(1).to({rotation:30.0005,x:996.05,y:170.2},0).wait(1).to({rotation:27.9551,x:989.65,y:168.7},0).wait(1).to({rotation:25.9096,x:983.35,y:167.2},0).wait(1).to({rotation:23.8642,x:976.95,y:165.7},0).wait(1).to({rotation:21.8188,x:970.55,y:164.15},0).wait(1).to({rotation:19.7734,x:964.2,y:162.7},0).wait(1).to({rotation:17.7279,x:957.8,y:161.2},0).wait(1).to({rotation:15.6825,x:951.45,y:159.7},0).wait(1).to({rotation:13.6371,x:945.1,y:158.2},0).wait(1).to({rotation:11.5917,x:938.7,y:156.7},0).wait(1).to({rotation:9.5462,x:932.3,y:155.2},0).wait(1).to({rotation:7.5008,x:925.95,y:153.7},0).wait(1).to({rotation:5.4554,x:919.6,y:152.2},0).wait(1).to({rotation:3.4099,x:919.25,y:144.2},0).wait(1).to({rotation:1.3645,x:918.85,y:136.2},0).wait(1).to({rotation:-0.6809,x:918.5,y:128.2},0).wait(1).to({rotation:-2.7263,x:918.15,y:120.2},0).wait(1).to({rotation:-4.7718,x:917.75,y:112.1},0).wait(1).to({rotation:-6.8172,x:917.4,y:104.15},0).wait(1).to({rotation:-8.8626,x:917.05,y:96.15},0).wait(1).to({rotation:-10.908,x:916.7,y:88.15},0).wait(1).to({rotation:-12.9535,x:916.3,y:80.15},0).wait(1).to({rotation:-14.9989,x:915.9,y:72.15},0).wait(1).to({rotation:-12.4989,x:920.65,y:67},0).wait(1).to({rotation:-9.999,x:925.4,y:61.85},0).wait(1).to({rotation:-7.499,x:930.1,y:56.8},0).wait(1).to({rotation:-4.9991,x:934.8,y:51.65},0).wait(1).to({rotation:-2.4992,x:939.5,y:46.55},0).wait(1).to({rotation:0.0008,x:944.25,y:41.45},0).wait(1).to({rotation:2.5008,x:948.95,y:36.35},0).wait(1).to({rotation:5.0007,x:953.65,y:31.2},0).wait(1).to({rotation:7.5007,x:958.35,y:26.1},0).wait(1).to({rotation:10.0006,x:963.1,y:20.95},0).wait(1).to({rotation:12.5006,x:967.85,y:15.8},0).wait(1).to({rotation:15.0005,x:972.5,y:10.7},0).wait(1).to({rotation:15.9379,x:974.3,y:5.9},0).wait(1).to({rotation:16.8753,x:976.05,y:1.1},0).wait(1).to({rotation:17.8126,x:977.85,y:-3.65},0).wait(1).to({rotation:18.75,x:979.65,y:-8.5},0).wait(1).to({rotation:19.6874,x:981.45,y:-13.3},0).wait(1).to({rotation:20.6248,x:983.2,y:-18.05},0).wait(1).to({rotation:21.5622,x:985,y:-22.85},0).wait(1).to({rotation:22.4996,x:986.75,y:-27.65},0).wait(1).to({rotation:23.4369,x:988.5,y:-32.45},0).wait(1).to({rotation:24.3743,x:990.3,y:-37.2},0).wait(1).to({rotation:25.3117,x:992.1,y:-42},0).wait(1).to({rotation:26.2491,x:993.9,y:-46.8},0).wait(1).to({rotation:27.1865,x:995.65,y:-51.65},0).wait(1).to({rotation:28.1238,x:997.4,y:-56.4},0).wait(1).to({rotation:29.0612,x:999.15,y:-61.2},0).wait(1).to({rotation:29.9986,x:1001,y:-65.95},0).wait(12));

	// Pencil
	this.instance_7 = new lib.Pencil();
	this.instance_7.setTransform(1111.7,195.3,1,1,0,0,0,18.7,74.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({rotation:-2.5896,x:1110.15,y:189.15},0).wait(1).to({rotation:-5.1791,x:1108.6,y:183.05},0).wait(1).to({rotation:-7.7687,x:1107.15,y:176.9},0).wait(1).to({rotation:-10.3582,x:1105.55,y:170.9},0).wait(1).to({rotation:-12.9478,x:1104,y:164.75},0).wait(1).to({rotation:-15.5373,x:1102.55,y:158.65},0).wait(1).to({rotation:-18.1269,x:1100.95,y:152.55},0).wait(1).to({rotation:-20.7164,x:1099.5,y:146.5},0).wait(1).to({rotation:-23.306,x:1097.9,y:140.3},0).wait(1).to({rotation:-25.8955,x:1096.4,y:134.25},0).wait(1).to({rotation:-28.4851,x:1094.95,y:128.1},0).wait(1).to({rotation:-24.532,x:1100.5,y:126.1},0).wait(1).to({rotation:-20.5789,x:1106.1,y:124.1},0).wait(1).to({rotation:-16.6258,x:1111.7,y:122.05},0).wait(1).to({rotation:-12.6727,x:1117.35,y:120},0).wait(1).to({rotation:-8.7196,x:1122.95,y:117.95},0).wait(1).to({rotation:-4.7666,x:1128.6,y:115.95},0).wait(1).to({rotation:-0.8135,x:1134.15,y:113.95},0).wait(1).to({rotation:3.1396,x:1139.75,y:111.85},0).wait(1).to({rotation:7.0927,x:1145.4,y:109.85},0).wait(1).to({rotation:11.0458,x:1151,y:107.8},0).wait(1).to({rotation:14.9989,x:1156.6,y:105.8},0).wait(1).to({rotation:11.4432,x:1153.8,y:101.9},0).wait(1).to({rotation:7.8875,x:1150.9,y:98.1},0).wait(1).to({rotation:4.3318,x:1148.05,y:94.25},0).wait(1).to({rotation:0.7762,x:1145.25,y:90.45},0).wait(1).to({rotation:-2.7795,x:1142.4,y:86.6},0).wait(1).to({rotation:-6.3352,x:1139.55,y:82.75},0).wait(1).to({rotation:-9.8909,x:1136.65,y:78.95},0).wait(1).to({rotation:-13.4466,x:1133.85,y:75.1},0).wait(1).to({rotation:-17.0023,x:1131,y:71.25},0).wait(1).to({rotation:-20.5579,x:1128.1,y:67.45},0).wait(1).to({rotation:-24.1136,x:1125.3,y:63.55},0).wait(1).to({rotation:-27.6693,x:1122.4,y:59.7},0).wait(1).to({rotation:-31.225,x:1119.55,y:55.9},0).wait(1).to({rotation:-28.5638,x:1123.15,y:52.35},0).wait(1).to({rotation:-25.9027,x:1126.8,y:48.85},0).wait(1).to({rotation:-23.2415,x:1130.45,y:45.25},0).wait(1).to({rotation:-20.5803,x:1134,y:41.75},0).wait(1).to({rotation:-17.9192,x:1137.6,y:38.15},0).wait(1).to({rotation:-15.258,x:1141.25,y:34.6},0).wait(1).to({rotation:-12.5968,x:1144.8,y:31},0).wait(1).to({rotation:-9.9357,x:1148.4,y:27.45},0).wait(1).to({rotation:-7.2745,x:1152.05,y:23.9},0).wait(1).to({rotation:-4.6133,x:1155.65,y:20.3},0).wait(1).to({rotation:-1.9522,x:1159.3,y:16.75},0).wait(1).to({rotation:0.709,x:1162.9,y:13.2},0).wait(1).to({rotation:-1.3416,x:1160.95,y:12.7},0).wait(1).to({rotation:-3.3923,x:1158.95,y:12.15},0).wait(1).to({rotation:-5.4429,x:1157.05,y:11.7},0).wait(1).to({rotation:-7.4936,x:1155.15,y:11.15},0).wait(1).to({rotation:-9.5442,x:1153.15,y:10.65},0).wait(1).to({rotation:-11.5949,x:1151.2,y:10.2},0).wait(1).to({rotation:-13.6455,x:1149.3,y:9.65},0).wait(1).to({rotation:-15.6961,x:1147.35,y:9.1},0).wait(1).to({rotation:-17.7468,x:1145.4,y:8.6},0).wait(1).to({rotation:-19.7974,x:1143.45,y:8.1},0).wait(1).to({rotation:-21.8481,x:1141.5,y:7.6},0).wait(1).to({rotation:-23.8987,x:1139.6,y:7.05},0).wait(1).to({rotation:-25.9494,x:1137.65,y:6.6},0).wait(1).to({rotation:-28,x:1135.7,y:6.05},0).wait(1).to({rotation:-25.6875,x:1139.4,y:0.35},0).wait(1).to({rotation:-23.3751,x:1143.1,y:-5.35},0).wait(1).to({rotation:-21.0626,x:1146.8,y:-11.1},0).wait(1).to({rotation:-18.7502,x:1150.5,y:-16.85},0).wait(1).to({rotation:-16.4377,x:1154.15,y:-22.6},0).wait(1).to({rotation:-14.1253,x:1157.85,y:-28.3},0).wait(1).to({rotation:-11.8128,x:1161.5,y:-34.1},0).wait(1).to({rotation:-9.5004,x:1165.2,y:-39.8},0).wait(1).to({rotation:-7.1879,x:1168.95,y:-45.55},0).wait(1).to({rotation:-4.8755,x:1172.65,y:-51.25},0).wait(1).to({rotation:-2.563,x:1176.3,y:-57.05},0).wait(1).to({rotation:-0.2506,x:1180,y:-62.75},0).wait(1).to({rotation:2.0619,x:1183.65,y:-68.5},0).wait(1).to({rotation:4.3743,x:1187.35,y:-74.15},0).wait(1).to({rotation:6.6868,x:1191,y:-79.9},0).wait(1).to({rotation:8.9993,x:1194.7,y:-85.65},0).wait(8));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-646.7,-272.1,2122.4,1133.7);


(lib.lampI = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol5();
	this.instance.setTransform(30.6,6.6,1,1,0,0,0,71.4,113.1);

	this.instance_1 = new lib.Symbol6();
	this.instance_1.setTransform(37.2,6.6,1,1,0,0,0,78,113.1);
	this.instance_1._off = true;

	this.instance_2 = new lib.Symbol7();
	this.instance_2.setTransform(37.2,6.6,1,1,0,0,0,78,113.1);
	this.instance_2._off = true;

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AgSAGQADgCADgBQALgDAJgCQADgBAEgBIAEgB");
	this.shape.setTransform(0.075,91.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AiWoWIBtGWIApCaQAYBXAHBWQA2DVAuBaQADAEACADABkIXQAJgOAOgEQAPgEANAH");
	this.shape_1.setTransform(-11.775,38.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(4,1,1).p("ADFqzQAIgHgJANQAAAEAAAEIhABHIhKBVQADABACACQAKAJgQAWQgOAXgYAZQgXAYgWAHQgVAGgBAGQgBAFg0AvQAIgSAHgQQAJgSAOgSQAOgSAwgwQAwgxBGhOQBHhNAJgHQAAADgBADQgNATgzA8AEsssIhoCHABsMkQgBAFgBAEABmMlQACgBADAAQAAAAABAAAiwldQAGACAFADQAUAMAGAWQABADABACQAEAVgKASQgLATgUAHQgDABgCAAQgBABgBAAQgWAFgTgMQgHgEgGgFQAHAnAXgMQAZgLgbAaQgbAagYAPQgNAHgIADQgGABgDgCQgIgEgDgIQgCgJAFgIQAEgHAXgtQABgCABgBQASgoAJgXQAEgKAGgIAjFleQALgDAKAEAjrj+QgFgEgEgFAkNjzQARgSAIgCQgCgDgBgEQAAAAgWAbgAhllYIgkAnAhWl6QgzgKgnAnAkXihQgEDMDVCEQEBChhPHU");
	this.shape_2.setTransform(-8.8286,8.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(6,1,1).p("AgYAyQgUgKgEgbQgGgbALgRQAKgRATgFQASgGAVAMQAVALAEATQADASgFAWQgEAWgYAIQgTAHgZgKg");
	this.shape_3.setTransform(23.6764,-78.1294);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(3,1,1).p("AgrwVQgXgGgFgVQAAgSAJgJQABgBAAAAQAKgHARAAQAVAIAEAUQgUAPgOATgAB6wbQgSg0gvgLQgoANgaAWAC0vtQAZgDAcAEQBgANAuAdQAvAeARAOQATAQAkApQAkAqgHAFADjoPQAEgOAJgPQAMgTAOgSQAigsAygvQAzguAtghQATgNATgLQA+glAUAYQAUAWgUA5QgUA6hBA+QhCA+hOA1QhNA1gdggQgUgXAQgnQhAgMgrg2Qgsg2gghtQgehsA9hNQArg4A+gIQgggzgaAFQhpApgaBqQgkgSgcg5QAJglAVgdAg+xLQh/hbgjCwQgEARgCAVQgIBNBPCGQAPAhgDA4AjVNFQAwgJAwAOQAxAQAJAjQAKAjgqAjQgrAjg8AQQg7APgtgGQgtgHgKgkQgKglAdglQAcgnAmgQAjsMzQBZgHBVAeQBUAgAjAsQAmArhPA2QhOA1hsAmQhsAlhYgRQhYgRgPg+QgPg+BEhCQBEhBBqgiAo6k9QADgDACgCQABgBABAAAoxlEQAAAAAAABQgEAEgJAHQAXgRAEgBQAAgBABgDAo/k4QAAAAABAAQABgCACgB");
	this.shape_4.setTransform(25.6813,6.6414);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ACfMoQgRgPgHgaQgHgaAHgVQABgFADgEIASgGIAGgCIAEgBIgEABIgGACIgVAGIgGADQAJgPAOgEQAPgDANAHIADgBIAAAAIAJAGQAQAQAHAaQAHAagGAVQgIAVgQAEIgIABQgNAAgNgLgAjlkeQgIgEgCgJQgCgJAFgHIAbg1IAWgaIADAHQgJACgQARQAQgRAJgCQAHgBACAJIAAABQgGgEgDgFQADAFAGAEQAGAmAYgLQAYgMgaAaQgcAagXAPQgNAIgIACIgFABIgFgBgAjBn+Qg7hOgFgUQgGgUAMgTQAMgRAVgGQAWgGAUAJQATALAFAUQAFAUAAAsQAAAsADAcQACAVgCAGIgCADIgJAGIgBAAIgBABIgKAIIgGAEIAIgGIAHgGIACgCQgKAEgHAKIgBAAQAJgTgcgogAgan2QAIgTAPgSQANgSAwgwQAwgwBHhOQBGhOAKgHIgCAHQgNATgzA8IhKBVQADAAACADQAKAIgPAXQgPAXgYAYQgXAZgWAGQgVAGgBAGQgCAFgyAwIAPgigAEBswQAIgGgKANIACgHg");
	this.shape_5.setTransform(-14.7561,20.645);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FED279").s().p("AhlEhQhui4APg7QAPg6A1AtIBtDWQgIA1gjAAQgRAAgWgLgAgcAfQgognARglQBFgDCWBfQAqBEhOARQh4g9gogogAAbiZQgigyBFgKIDpA6QAzA8hJAeQjUgngigxgAkZhOQgdgQgEghIAAgOQACgrAugpQAugqAkgVQAagPAYAGQgtAhgzAvQgyAvgiArQAigrAygvQAzgvAtghQAJADAIAGQAgAVAHAkQAGAjgdAgQgdAeg5AmQgmAYgcAAQgPAAgNgGgAiGkpIAAAAg");
	this.shape_6.setTransform(83.7863,-40.0048);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:62.8,x:22},0).wait(12).to({_off:true},1).wait(46));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).wait(14).to({_off:true},1).wait(31));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(29).to({_off:false},0).wait(14).to({_off:true},1).wait(16));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.8,-108,156.2,229.3);


(lib.graphic = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.instance = new lib.CachedBmp_268();
	this.instance.setTransform(828.7,587.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Pencils_s_cup
	this.instance_1 = new lib.Pencils_s_cup();
	this.instance_1.setTransform(179.25,568.45,1,1,0,0,0,63.1,90.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer_1
	this.instance_2 = new lib.CachedBmp_269();
	this.instance_2.setTransform(122.2,98.6,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.graphic, new cjs.Rectangle(116.1,98.6,1047.1000000000001,560.8), null);


(lib.glassesD = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol13();
	this.instance.setTransform(-7.85,-0.05,1,1,-4.2108,0,0,62.3,23.9);

	this.instance_1 = new lib.Symbol14();
	this.instance_1.setTransform(-7.6,0.35,1,1,-4.2108,0,0,70.3,30.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.glassesD, new cjs.Rectangle(-79.9,-35.3,145,71.8), null);


(lib.coffeeD = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// cup
	this.instance = new lib.Symbol8();
	this.instance.setTransform(7.25,-5.6,1,1,0,0,0,65.7,68.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(63));

	// shadow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0.157)").s().p("Aj5CZQhHgMg8gTQidgzAAhHQAAgXARgVQAigsBqgiQCegyDeAAQDfAACeAyQBqAiAiAsQARAVAAAXQAABHidAzQg9AThFAMQh9AUh+AAQh8AAh9gUg");
	this.shape.setTransform(-5.4,55.7352);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(63));

	// fume1
	this.instance_1 = new lib.fume1();
	this.instance_1.setTransform(37.15,-73.05,1,1,0,0,0,0.6,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:1.4145,scaleY:1.4145,y:-74.1},0).wait(1).to({scaleX:1.8291,scaleY:1.8291,y:-75.25},0).wait(1).to({scaleX:2.2436,scaleY:2.2436,y:-76.35},0).wait(1).to({scaleX:2.391,scaleY:2.391,y:-76.95},0).wait(1).to({scaleX:2.5385,scaleY:2.5385,x:37.1,y:-77.65},0).wait(1).to({scaleX:2.6859,scaleY:2.6859,y:-78.3},0).wait(1).to({scaleX:2.8333,scaleY:2.8333,y:-78.95},0).wait(1).to({scaleX:2.9808,scaleY:2.9808,x:37.15,y:-79.6},0).wait(1).to({scaleX:3.1282,scaleY:3.1282,y:-80.3},0).wait(1).to({scaleX:3.2757,scaleY:3.2757,x:37.1,y:-80.9},0).wait(1).to({scaleX:3.3973,scaleY:3.3973,x:37.15,y:-81.4},0).wait(1).to({scaleX:3.519,scaleY:3.519,x:37.1,y:-81.85},0).wait(1).to({scaleX:3.6406,scaleY:3.6406,x:37.15,y:-82.3},0).wait(1).to({scaleX:3.7623,scaleY:3.7623,x:37.1,y:-82.8},0).wait(1).to({scaleX:3.884,scaleY:3.884,x:37.15,y:-83.25},0).wait(1).to({scaleX:4.0056,scaleY:4.0056,x:37.1,y:-83.7},0).wait(1).to({scaleX:4.1273,scaleY:4.1273,x:37.15,y:-84.2},0).wait(1).to({scaleX:4.4339,scaleY:4.4339,x:37.1,y:-85.05},0).wait(1).to({scaleX:4.7405,scaleY:4.7405,x:37.15,y:-86},0).wait(1).to({scaleX:5.0471,scaleY:5.0471,y:-86.95},0).wait(1).to({scaleX:5.3537,scaleY:5.3537,x:37.1,y:-87.8},0).wait(1).to({scaleX:5.6603,scaleY:5.6603,x:37.15,y:-88.75},0).wait(1).to({scaleX:5.9669,scaleY:5.9669,y:-89.7},0).wait(1).to({scaleX:6.2735,scaleY:6.2735,x:37.1,y:-90.55},0).wait(1).to({scaleX:6.6187,scaleY:6.6187,y:-91.6},0).wait(1).to({scaleX:6.9639,scaleY:6.9639,x:37.15,y:-92.6},0).wait(1).to({scaleX:7.3091,scaleY:7.3091,y:-93.6},0).wait(1).to({scaleX:7.6543,scaleY:7.6543,y:-94.6},0).wait(1).to({scaleX:7.9995,scaleY:7.9995,y:-95.6},0).wait(1).to({scaleX:8.3447,scaleY:8.3447,x:37.1,y:-96.6},0).wait(1).to({scaleX:8.6899,scaleY:8.6899,y:-97.65},0).wait(1).to({scaleX:9.0351,scaleY:9.0351,y:-98.6},0).wait(1).to({scaleX:9.3803,scaleY:9.3803,x:37.15,y:-99.6},0).wait(1).to({scaleX:9.7255,scaleY:9.7255,y:-100.65},0).wait(1).to({scaleX:10.0707,scaleY:10.0707,y:-101.6},0).wait(1).to({scaleX:10.4159,scaleY:10.4159,y:-102.6},0).wait(1).to({scaleX:10.7611,scaleY:10.7611,x:37.1,y:-103.65},0).wait(1).to({scaleX:11.1063,scaleY:11.1063,y:-104.65},0).wait(1).to({scaleX:11.4515,scaleY:11.4515,y:-105.6},0).wait(1).to({scaleX:11.7967,scaleY:11.7967,x:37.15,y:-106.65},0).wait(1).to({scaleX:12.1419,scaleY:12.1419,y:-107.65},0).wait(1).to({scaleX:12.4871,scaleY:12.4871,y:-108.65},0).wait(1).to({scaleX:12.8323,scaleY:12.8323,y:-109.65},0).wait(1).to({scaleX:13.1775,scaleY:13.1775,x:37.1,y:-110.65},0).wait(1).to({scaleX:13.5227,scaleY:13.5227,y:-111.65},0).wait(1).to({scaleX:13.8679,scaleY:13.8679,y:-112.7},0).wait(1).to({scaleX:14.2131,scaleY:14.2131,x:37.15,y:-113.65},0).wait(16));

	// fume2
	this.instance_2 = new lib.fume1();
	this.instance_2.setTransform(18.05,-76.95,1,1,0,0,0,0.6,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({scaleX:1.1133,scaleY:1.1133,x:18,y:-77.35},0).wait(1).to({scaleX:1.2267,scaleY:1.2267,y:-77.8},0).wait(1).to({scaleX:1.34,scaleY:1.34,x:17.95,y:-78.2},0).wait(1).to({scaleX:1.4533,scaleY:1.4533,x:17.9,y:-78.6},0).wait(1).to({scaleX:1.5667,scaleY:1.5667,y:-79.05},0).wait(1).to({scaleX:1.68,scaleY:1.68,x:17.85,y:-79.45},0).wait(1).to({scaleX:1.7852,scaleY:1.7852,y:-79.75},0).wait(1).to({scaleX:1.8904,scaleY:1.8904,x:17.9,y:-80},0).wait(1).to({scaleX:1.9956,scaleY:1.9956,y:-80.25},0).wait(1).to({scaleX:2.1009,scaleY:2.1009,x:17.85,y:-80.55},0).wait(1).to({scaleX:2.2061,scaleY:2.2061,y:-80.8},0).wait(1).to({scaleX:2.3113,scaleY:2.3113,x:17.9,y:-81.05},0).wait(1).to({scaleX:2.4165,scaleY:2.4165,y:-81.3},0).wait(1).to({scaleX:2.5132,scaleY:2.5132,x:17.85,y:-81.7},0).wait(1).to({scaleX:2.6098,scaleY:2.6098,x:17.8,y:-82.1},0).wait(1).to({scaleX:2.7065,scaleY:2.7065,x:17.75,y:-82.5},0).wait(1).to({scaleX:2.8031,scaleY:2.8031,y:-82.9},0).wait(1).to({scaleX:2.8998,scaleY:2.8998,x:17.7,y:-83.25},0).wait(1).to({scaleX:2.9965,scaleY:2.9965,x:17.65,y:-83.65},0).wait(1).to({scaleX:3.0931,scaleY:3.0931,x:17.6,y:-84},0).wait(1).to({scaleX:3.3406,scaleY:3.3406,x:17.55,y:-84.7},0).wait(1).to({scaleX:3.588,scaleY:3.588,x:17.5,y:-85.4},0).wait(1).to({scaleX:3.8354,scaleY:3.8354,x:17.45,y:-86.05},0).wait(1).to({scaleX:4.0829,scaleY:4.0829,x:17.4,y:-86.75},0).wait(1).to({scaleX:4.3303,scaleY:4.3303,x:17.35,y:-87.4},0).wait(1).to({scaleX:4.5778,scaleY:4.5778,x:17.3,y:-88.1},0).wait(1).to({scaleX:4.8118,scaleY:4.8118,x:17.1,y:-88.85},0).wait(1).to({scaleX:5.0459,scaleY:5.0459,x:16.9,y:-89.6},0).wait(1).to({scaleX:5.2799,scaleY:5.2799,x:16.65,y:-90.3},0).wait(1).to({scaleX:5.514,scaleY:5.514,x:16.45,y:-91},0).wait(1).to({scaleX:5.748,scaleY:5.748,x:16.3,y:-91.75},0).wait(1).to({scaleX:5.9821,scaleY:5.9821,x:16.1,y:-92.45},0).wait(1).to({scaleX:6.2161,scaleY:6.2161,x:15.9,y:-93.15},0).wait(1).to({scaleX:6.4502,scaleY:6.4502,x:15.65,y:-93.85},0).wait(1).to({scaleX:6.6842,scaleY:6.6842,x:15.45,y:-94.6},0).wait(1).to({scaleX:6.9183,scaleY:6.9183,x:15.25,y:-95.35},0).wait(1).to({scaleX:7.1523,scaleY:7.1523,x:15.1,y:-96.05},0).wait(1).to({scaleX:7.3864,scaleY:7.3864,x:14.9,y:-96.8},0).wait(1).to({scaleX:7.6204,scaleY:7.6204,x:14.65,y:-97.5},0).wait(1).to({scaleX:7.8545,scaleY:7.8545,x:14.45,y:-98.2},0).wait(1).to({scaleX:8.0885,scaleY:8.0885,x:14.25,y:-98.95},0).wait(1).to({scaleX:8.3225,scaleY:8.3225,x:14.1,y:-99.65},0).wait(1).to({scaleX:8.5566,scaleY:8.5566,x:13.9,y:-100.35},0).wait(1).to({scaleX:8.7906,scaleY:8.7906,x:13.65,y:-101.05},0).wait(1).to({scaleX:9.0247,scaleY:9.0247,x:13.45,y:-101.85},0).wait(1).to({scaleX:9.2587,scaleY:9.2587,x:13.25,y:-102.55},0).wait(1).to({scaleX:9.4928,scaleY:9.4928,x:13.1,y:-103.25},0).wait(1).to({scaleX:9.7268,scaleY:9.7268,x:12.9,y:-104},0).wait(15));

	// fume3
	this.instance_3 = new lib.fume2();
	this.instance_3.setTransform(-5.85,-79.9,0.8259,0.8259);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:0.6,regY:2.5,scaleX:1.1717,scaleY:1.0923,x:-5.15,y:-78.5},0).wait(1).to({scaleX:1.5176,scaleY:1.3588,x:-4.95,y:-79.2},0).wait(1).to({scaleX:1.8634,scaleY:1.6252,x:-4.75,y:-79.9},0).wait(1).to({scaleX:2.2092,scaleY:1.8917,x:-4.5,y:-80.55},0).wait(1).to({scaleX:2.3172,scaleY:1.9887,x:-4.45,y:-80.95},0).wait(1).to({scaleX:2.4252,scaleY:2.0857,y:-81.35},0).wait(1).to({scaleX:2.5332,scaleY:2.1827,y:-81.75},0).wait(1).to({scaleX:2.6412,scaleY:2.2797,x:-4.4,y:-82.15},0).wait(1).to({scaleX:2.7492,scaleY:2.3767,y:-82.55},0).wait(1).to({scaleX:2.8572,scaleY:2.4737,y:-82.95},0).wait(1).to({scaleX:2.9652,scaleY:2.5707,x:-4.35,y:-83.35},0).wait(1).to({scaleX:3.0732,scaleY:2.6677,y:-83.8},0).wait(1).to({scaleX:3.1812,scaleY:2.7647,y:-84.2},0).wait(1).to({scaleX:3.2391,scaleY:2.8299,x:-4.4,y:-84.35},0).wait(1).to({scaleX:3.2969,scaleY:2.8952,x:-4.5,y:-84.5},0).wait(1).to({scaleX:3.3547,scaleY:2.9604,x:-4.6,y:-84.7},0).wait(1).to({scaleX:3.4126,scaleY:3.0257,x:-4.7,y:-84.85},0).wait(1).to({scaleX:3.4704,scaleY:3.0909,x:-4.75,y:-85},0).wait(1).to({scaleX:3.5282,scaleY:3.1561,x:-4.9,y:-85.2},0).wait(1).to({scaleX:3.5861,scaleY:3.2214,x:-4.95,y:-85.4},0).wait(1).to({scaleX:3.6439,scaleY:3.2866,x:-5.05,y:-85.55},0).wait(1).to({scaleX:3.7017,scaleY:3.3519,x:-5.15,y:-85.7},0).wait(1).to({scaleX:3.7596,scaleY:3.4171,x:-5.25,y:-85.9},0).wait(1).to({scaleX:3.8174,scaleY:3.4824,x:-5.35,y:-86.1},0).wait(1).to({scaleX:3.9633,scaleY:3.5799,x:-5.3,y:-86.35},0).wait(1).to({scaleX:4.1092,scaleY:3.6774,x:-5.35,y:-86.6},0).wait(1).to({scaleX:4.2551,scaleY:3.7749,y:-86.85},0).wait(1).to({scaleX:4.401,scaleY:3.8724,y:-87.1},0).wait(1).to({scaleX:4.5469,scaleY:3.9699,x:-5.3,y:-87.4},0).wait(1).to({scaleX:4.6928,scaleY:4.0674,x:-5.35,y:-87.65},0).wait(1).to({scaleX:4.8386,scaleY:4.1649,y:-87.9},0).wait(1).to({scaleX:4.9845,scaleY:4.2624,y:-88.15},0).wait(1).to({scaleX:5.1304,scaleY:4.3599,y:-88.4},0).wait(1).to({scaleX:5.2672,scaleY:4.5357,y:-88.85},0).wait(1).to({scaleX:5.404,scaleY:4.7115,x:-5.3,y:-89.3},0).wait(1).to({scaleX:5.5408,scaleY:4.8874,x:-5.35,y:-89.8},0).wait(1).to({scaleX:5.6777,scaleY:5.0632,x:-5.3,y:-90.25},0).wait(1).to({scaleX:5.8145,scaleY:5.239,x:-5.25,y:-90.75},0).wait(1).to({scaleX:5.9513,scaleY:5.4148,x:-5.3,y:-91.2},0).wait(1).to({scaleX:6.0881,scaleY:5.5906,x:-5.25,y:-91.65},0).wait(1).to({scaleX:6.2249,scaleY:5.7665,x:-5.2,y:-92.15},0).wait(1).to({scaleX:6.3617,scaleY:5.9423,x:-5.25,y:-92.65},0).wait(1).to({scaleX:6.6615,scaleY:6.3379,x:-5.4,y:-93.7},0).wait(1).to({scaleX:6.9614,scaleY:6.7335,x:-5.6,y:-94.75},0).wait(1).to({scaleX:7.2612,scaleY:7.1291,x:-5.8,y:-95.85},0).wait(1).to({scaleX:7.5611,scaleY:7.5247,x:-6,y:-96.9},0).wait(1).to({scaleX:7.8609,scaleY:7.9202,x:-6.25,y:-97.95},0).wait(1).to({scaleX:8.1608,scaleY:8.3158,x:-6.4,y:-99},0).wait(1).to({scaleX:8.4606,scaleY:8.7114,x:-6.6,y:-100.1},0).wait(1).to({scaleX:8.7605,scaleY:9.107,x:-6.8,y:-101.2},0).wait(1).to({scaleX:9.0603,scaleY:9.5026,x:-7,y:-102.25},0).wait(1).to({scaleX:9.3602,scaleY:9.8982,x:-7.25,y:-103.3},0).wait(1).to({scaleX:9.66,scaleY:10.2938,x:-7.4,y:-104.35},0).wait(1).to({scaleX:9.9599,scaleY:10.6894,x:-7.6,y:-105.45},0).wait(1).to({scaleX:10.2597,scaleY:11.085,x:-7.85,y:-106.55},0).wait(8));

	// fume4
	this.instance_4 = new lib.fume1();
	this.instance_4.setTransform(-28.45,-76.75,1,1,0,0,0,0.6,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({scaleX:1.1664,scaleY:1.1664,x:-28.4,y:-77.15},0).wait(1).to({scaleX:1.3328,scaleY:1.3328,y:-77.5},0).wait(1).to({scaleX:1.4992,scaleY:1.4992,y:-77.95},0).wait(1).to({scaleX:1.6656,scaleY:1.6656,y:-78.35},0).wait(1).to({scaleX:1.832,scaleY:1.832,y:-78.75},0).wait(1).to({scaleX:1.9984,scaleY:1.9984,y:-79.15},0).wait(1).to({scaleX:2.1648,scaleY:2.1648,y:-79.6},0).wait(1).to({scaleX:2.1822,scaleY:2.2291,y:-79.9},0).wait(1).to({scaleX:2.1997,scaleY:2.2934,y:-80.15},0).wait(1).to({scaleX:2.2171,scaleY:2.3577,x:-28.35,y:-80.45},0).wait(1).to({scaleX:2.2346,scaleY:2.422,y:-80.8},0).wait(1).to({scaleX:2.252,scaleY:2.4863,y:-81.1},0).wait(1).to({scaleX:2.2694,scaleY:2.5506,y:-81.35},0).wait(1).to({scaleX:2.2869,scaleY:2.6149,y:-81.65},0).wait(1).to({scaleX:2.3043,scaleY:2.6792,x:-28.3,y:-81.95},0).wait(1).to({scaleX:2.4735,scaleY:2.8426,y:-82.35},0).wait(1).to({scaleX:2.6426,scaleY:3.0059,y:-82.75},0).wait(1).to({scaleX:2.8117,scaleY:3.1693,y:-83.15},0).wait(1).to({scaleX:2.9809,scaleY:3.3327,y:-83.5},0).wait(1).to({scaleX:3.15,scaleY:3.496,y:-83.9},0).wait(1).to({scaleX:3.3192,scaleY:3.6594,y:-84.25},0).wait(1).to({scaleX:3.4883,scaleY:3.8227,y:-84.65},0).wait(1).to({scaleX:3.6574,scaleY:3.9861,y:-85.05},0).wait(1).to({scaleX:3.8266,scaleY:4.1495,y:-85.45},0).wait(1).to({scaleX:3.9343,scaleY:4.2123,x:-28.35,y:-85.7},0).wait(1).to({scaleX:4.042,scaleY:4.2752,y:-86},0).wait(1).to({scaleX:4.1497,scaleY:4.338,x:-28.4,y:-86.3},0).wait(1).to({scaleX:4.2575,scaleY:4.4009,x:-28.45,y:-86.55},0).wait(1).to({scaleX:4.3652,scaleY:4.4638,x:-28.5,y:-86.85},0).wait(1).to({scaleX:4.4729,scaleY:4.5266,x:-28.45,y:-87.15},0).wait(1).to({scaleX:4.5806,scaleY:4.5895,x:-28.5,y:-87.45},0).wait(1).to({scaleX:4.6884,scaleY:4.6523,x:-28.55,y:-87.7},0).wait(1).to({scaleX:4.7961,scaleY:4.7152,y:-88},0).wait(1).to({scaleX:4.9038,scaleY:4.7781,x:-28.6,y:-88.3},0).wait(1).to({scaleX:5.0115,scaleY:4.8409,x:-28.65,y:-88.6},0).wait(1).to({scaleX:5.1894,scaleY:5.0806,y:-89.15},0).wait(1).to({scaleX:5.3672,scaleY:5.3202,y:-89.7},0).wait(1).to({scaleX:5.545,scaleY:5.5598,x:-28.6,y:-90.25},0).wait(1).to({scaleX:5.7229,scaleY:5.7995,y:-90.8},0).wait(1).to({scaleX:5.9007,scaleY:6.0391,y:-91.35},0).wait(1).to({scaleX:6.0785,scaleY:6.2788,y:-91.9},0).wait(1).to({scaleX:6.2563,scaleY:6.5184,y:-92.5},0).wait(1).to({scaleX:6.4342,scaleY:6.7581,y:-93.05},0).wait(1).to({scaleX:6.612,scaleY:6.9977,y:-93.6},0).wait(1).to({scaleX:6.7898,scaleY:7.2374,y:-94.15},0).wait(1).to({scaleX:6.9677,scaleY:7.477,x:-28.55,y:-94.7},0).wait(1).to({scaleX:7.1455,scaleY:7.7167,y:-95.25},0).wait(1).to({y:-95.35},0).wait(1).to({y:-95.4},0).wait(1).to({y:-95.45},0).wait(1).to({y:-95.55},0).wait(1).to({y:-95.6},0).wait(1).to({y:-95.65},0).wait(1).to({y:-95.75},0).wait(1).to({y:-95.8},0).wait(1).to({y:-95.85},0).wait(1).to({y:-95.95},0).wait(1).to({y:-96},0).wait(1).to({y:-96.05},0).wait(1).to({y:-96.15},0).wait(1).to({y:-96.2},0).wait(1).to({y:-96.25},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.9,-149.5,134.5,222.6);


(lib.clockI = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol1();
	this.instance.setTransform(-13.65,-45.5,1,1,-7.4805,0,0,6.2,32.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:5.3,regY:17.3,rotation:-7.4811,x:-16.5,y:-60.2},0).wait(3).to({regX:5.8,regY:31.7,rotation:64.457,x:-11.2,y:-47.65},0).wait(1).to({regX:5.3,regY:17.3,rotation:64.4573,x:1.6,y:-54.3},0).wait(4).to({regX:5.2,regY:30,rotation:118.1652,x:-7.15,y:-47.7},0).wait(1).to({regX:5.3,regY:17.3,rotation:118.166,x:4,y:-41.6},0).wait(4).to({regX:6.5,regY:32.8,scaleX:0.9999,scaleY:0.9999,rotation:170.6956,x:-8.6,y:-46.55},0).wait(5).to({regX:4,regY:26.6,rotation:232.894,x:-11.15,y:-38.85},0).wait(1).to({regX:5.3,regY:17.3,x:-19.35,y:-34.25},0).wait(4).to({regX:5.7,regY:29.4,rotation:291.9462,x:-11.15,y:-43.3},0).wait(1).to({regX:5.3,regY:17.3,rotation:291.9464,x:-22.5,y:-47.45},0).wait(4).to({regX:5.9,regY:31.7,rotation:353.331,x:-13.6,y:-45.55},0).wait(1));

	// Layer_1
	this.instance_1 = new lib.Symbol4();
	this.instance_1.setTransform(11.15,-71,1,1,-6.4658,0,0,103.8,111.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:104,regY:111.8,rotation:-6.4664,x:11.45,y:-70.35},0).wait(29));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106.2,-195.4,235.3,249.9);


(lib.conffettiR = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.conffettiL();
	this.instance.setTransform(117.75,10.5,1,1,0,0,180,150.8,12.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.conffettiR, new cjs.Rectangle(-29.3,0,264.8,10.9), null);


(lib.conffettiCR = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.conffettiCL();
	this.instance.setTransform(-62.95,58.95,1,1,0,0,180,88.5,55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.conffettiCR, new cjs.Rectangle(0,0,65.3,10.9), null);


(lib.forcomb = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.startbtn = new lib.ForComboTxt();
	this.startbtn.name = "startbtn";
	this.startbtn.setTransform(196.45,234.3,1.1296,0.9278,0,0,0,52.4,17);

	this.instance = new lib.CachedBmp_251();
	this.instance.setTransform(-124.65,46.1,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_250();
	this.instance_1.setTransform(-110.85,-25.95,0.5,0.5);

	this.mycb = new lib.an_ComboBox({'id': 'mycb', 'label':'', 'items':'dummy, dummy, items, 2, label, 0, , , data, 0, , , 4, בחר נושא, 0, צמחים, 1, זמרים, 2, , ', 'value':'0', 'disabled':false, 'visible':true, 'class':'ui-combobox'});

	this.mycb.name = "mycb";
	this.mycb.setTransform(0,1,2.0372,2.0372,0,0,0,50,11);

	this.instance_2 = new lib.CachedBmp_249();
	this.instance_2.setTransform(-123.95,43.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.mycb},{t:this.instance_1},{t:this.instance},{t:this.startbtn}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.forcomb, new cjs.Rectangle(-124.6,-25.9,251.2,159.5), null);


(lib.comboC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.startbtn = new lib.ForComboTxt();
	this.startbtn.name = "startbtn";
	this.startbtn.setTransform(321.1,181.15,1.1296,0.9278,0,0,0,52.4,17);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FE8783").s().p("Ay/GZIgEgBQgIgDABgJIACgHQgCgGAAgLIAAhKIAAhcQAAg1AFgoQAGgtABgWQAFgtAAg1IAAgKIAAhcQgDhNgEgmIgIg1QgDgYAZg+IAJAGIABgHIABABQAAASADAeIAIAzIgCAIIAEAOQAHAhgBAfIgDAAIAAAjQADBEAAAgIAAAaQgBAngEAiIgIBCQgDAnAAA3IAABcIAABLQAAAKACAFQgCAEAAAEQgDAHAJAEIAAACIAEAAQAHAEAHAAMAk5AABIAPAAQAKgBAFgEIAAAEQgCAMgKAJIgDAAIgCADIAFADIgKAAQgDACgDAAIAIACg");
	this.shape.setTransform(122.6638,46.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ASKGoMgk5gACQgHAAgHgEIgEAAIAAgBQgJgEADgIQAAgEACgEQgCgEAAgKIAAhMIAAhcQAAg3ADgmIAIhDQAEgjAAgmIABgaQAAgggDhEIAAgjIADAAQABgfgHghIgEgOIACgIIgIgzQgDgdAAgTIgBAAIgBgEQgEgIAFgEQABgEAFgCQAEgMAHgBQAGgCAFAHQADABABACIHWgVQCLgHBMAAQB1gDBdAFQAmACBIAGIBtAIICmAHICpAAIEUgEIBaAAQA0gBAngEQARgCAqgHQAlgFAXgCQAtgEBSABIDaAAQANAAAGAHQABgBAAAAQAAAAABAAQAAAAABAAQABAAAAABQALADABATIAOEPQAHB+AABJQAAA2gEAgIgGAoQgFAUgCAQIAABEIAABKQAAAIgEAGIgBAMQgJAJgGACIgCAAQgFAEgKACIgPAAgAokl4IqCAXQABASAFAcIAFAtQAAADAEAGQADAQACAbIAAArIAAAQQABBDgEBCQgCAsgEAtIgHBMQgGAyAABBIACByQAAAHgCAGMAk3gAUIAKAAQgBg+ABgbQAAgUAKhBQANh6gIh5IgGhWIgGhTQgEg3ABhtQgFABgLgBQhggFh+AFIjaANQjiAMi7ADQjcABjCgMIhygKQhBgGgwAAIgjAAQhGAAhuAEg");
	this.shape_1.setTransform(126.1861,42.34);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.startbtn}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.comboC, new cjs.Rectangle(0,0,249.3,87.7), null);


(lib.greenC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.greenCardLeft();
	this.instance.setTransform(-9.4,-8.4,1,1,0,0,0,79.9,99.5);

	this.instance_1 = new lib.greenCardRight();
	this.instance_1.setTransform(0.25,-12.35,1,1,0,0,0,72.1,107.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:80.1,regY:99.6,x:-9.2,y:-8.3},0).wait(8).to({_off:true},1).wait(11).to({_off:false,regX:79.9,regY:99.5,x:-9.4,y:-8.4},0).wait(1).to({regX:80.1,regY:99.6,x:-9.2,y:-8.3},0).wait(8).to({_off:true},1).wait(54));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).wait(1).to({regX:72,regY:107.5,x:0.15,y:-12.25},0).wait(9).to({_off:true},1).wait(10).to({_off:false,regY:107.3,rotation:-8.0002,x:0.2,y:-12.35},0).wait(54));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.2,-129.6,176.8,234.89999999999998);


(lib.buttonCQ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("המשך בשאלה", "normal 400 26px 'Alef'");
	this.text.textAlign = "center";
	this.text.lineHeight = 37;
	this.text.lineWidth = 175;
	this.text.parent = this;
	this.text.setTransform(-17.7,-16.25);
	if(!lib.properties.webfonts['Alef']) {
		lib.webFontTxtInst['Alef'] = lib.webFontTxtInst['Alef'] || [];
		lib.webFontTxtInst['Alef'].push(this.text);
	}

	this.instance = new lib.Play_Icon();
	this.instance.setTransform(83.35,-6.1,0.0768,0.0768,0,0,0,87.3,-9.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ARRF4MgjEgACQgJAAgGgCIgDgBIAAgBQgJgEABgHIACgGQgCgGAAgIIAAhDIAAhSQAAguAFgkIAHg7QAEgoABgwIgChYIgBgeIACAAQABgegGgbIgDgNIABgHIgIguQgDgYABgRIgBgBIgBgCQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQgDgHAEgFIABgBIAEgDIAAgBQAEgJAIgBQAFgBAGAEIAEAEIG/gUQCEgGBGgBQBwgCBaAFIBoAHIBoAIQBHAEBYACQA1ABBqgBIEJgCIBVgBQAxgBAmgEIA4gIQAjgFAVgCQApgEBSABIDOABQAMAAAGAEQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAIABAAQAIAEAAARIAPDwQAGBwABBAQAAAvgEAeIgGAiIgFAgQgDAYABAmQABAugBARIgDAOQAAAGgDAFQgDAEgEAEIgFADIgBAAQgGADgJABIgQAAgAoKlPIphAXQABAOADAaIAFAoIADAIQAEAQAAAWQACANgCAaIAAAOQADBjgJBhIgHBEQgEArAAA6IABBlQAAAIgBAFMAjEgASIAKAAQgDg3ACgZQABgSAIg5QANhtgHhrIgHhLIgGhKQgDgyAChhIgSAAQhagEh3AEIjQAMQjYAMiyACQjRACi4gNIhtgIQg+gFgugBIgkgBQhDAAhmAEg");
	this.shape.setTransform(0.3979,-5.21);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FE8783").s().p("AyFFsIgCgBQgJgEABgJIACgEQgCgHAAgIIAAhCIAAhTQABguAEgkIAHg7QAFgoAAgwIgBhYQgChFgFgjIgHgwQgDgTAag3IAFAFIACgHIABACIABABQgBARADAYIAIAuIgBAIIADAMQAGAbgBAeIgCAAIABAeIACBZQgBAwgEAnIgHA7QgFAkAAAuIAABSIAABDQAAAIACAGIgCAGQgBAHAJAEIgBADIAEAAQAGACAJAAMAjEAABIAQAAQAJgBAGgCIAAACQgCAMgLAFIgCABIgDACIAFADIgLAAIgEABIAHAEgADelAIBqgBIgdABIgnAAIgmAAg");
	this.shape_1.setTransform(-2.9014,-1.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AxtFLIgChlQAAg6AEgrIAHhEQAKhhgDhjIAAgOQABgagBgNQgBgWgEgQIgCgIIgFgoQgEgaAAgOIJhgXQCFgFBIACQAtABA/AFIBsAIQC5ANDQgCQCzgCDXgMIDRgMQB2gEBbAEIARAAQgCBhADAyIAGBKIAHBLQAIBrgOBtQgIA5gBASQgBAZACA3IgKAAMgjEAASQACgFAAgIgAC6kcQAmABAogBIAcAAg");
	this.shape_2.setTransform(0.6339,-5.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.buttonCQ, new cjs.Rectangle(-119.7,-42.8,237.3,77.8), null);


(lib.buttonCG = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("המשך במשחק", "normal 400 26px 'Alef'");
	this.text.textAlign = "center";
	this.text.lineHeight = 37;
	this.text.lineWidth = 175;
	this.text.parent = this;
	this.text.setTransform(-17.7,-16.25);
	if(!lib.properties.webfonts['Alef']) {
		lib.webFontTxtInst['Alef'] = lib.webFontTxtInst['Alef'] || [];
		lib.webFontTxtInst['Alef'].push(this.text);
	}

	this.instance = new lib.Play_Icon();
	this.instance.setTransform(83.35,-6.1,0.0768,0.0768,0,0,0,87.3,-9.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ARRF4MgjEgACQgJAAgGgCIgDgBIAAgBQgJgEABgHIACgGQgCgGAAgIIAAhDIAAhSQAAguAFgkIAHg7QAEgoABgwIgChYIgBgeIACAAQABgegGgbIgDgNIABgHIgIguQgDgYABgRIgBgBIgBgCQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQgDgHAEgFIABgBIAEgDIAAgBQAEgJAIgBQAFgBAGAEIAEAEIG/gUQCEgGBGgBQBwgCBaAFIBoAHIBoAIQBHAEBYACQA1ABBqgBIEJgCIBVgBQAxgBAmgEIA4gIQAjgFAVgCQApgEBSABIDOABQAMAAAGAEQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAIABAAQAIAEAAARIAPDwQAGBwABBAQAAAvgEAeIgGAiIgFAgQgDAYABAmQABAugBARIgDAOQAAAGgDAFQgDAEgEAEIgFADIgBAAQgGADgJABIgQAAgAoKlPIphAXQABAOADAaIAFAoIADAIQAEAQAAAWQACANgCAaIAAAOQADBjgJBhIgHBEQgEArAAA6IABBlQAAAIgBAFMAjEgASIAKAAQgDg3ACgZQABgSAIg5QANhtgHhrIgHhLIgGhKQgDgyAChhIgSAAQhagEh3AEIjQAMQjYAMiyACQjRACi4gNIhtgIQg+gFgugBIgkgBQhDAAhmAEg");
	this.shape.setTransform(0.3979,-5.21);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FE8783").s().p("AyFFsIgCgBQgJgEABgJIACgEQgCgHAAgIIAAhCIAAhTQABguAEgkIAHg7QAFgoAAgwIgBhYQgChFgFgjIgHgwQgDgTAag3IAFAFIACgHIABACIABABQgBARADAYIAIAuIgBAIIADAMQAGAbgBAeIgCAAIABAeIACBZQgBAwgEAnIgHA7QgFAkAAAuIAABSIAABDQAAAIACAGIgCAGQgBAHAJAEIgBADIAEAAQAGACAJAAMAjEAABIAQAAQAJgBAGgCIAAACQgCAMgLAFIgCABIgDACIAFADIgLAAIgEABIAHAEgADelAIBqgBIgdABIgnAAIgmAAg");
	this.shape_1.setTransform(-2.9014,-1.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AxtFLIgChlQAAg6AEgrIAHhEQAKhhgDhjIAAgOQABgagBgNQgBgWgEgQIgCgIIgFgoQgEgaAAgOIJhgXQCFgFBIACQAtABA/AFIBsAIQC5ANDQgCQCzgCDXgMIDRgMQB2gEBbAEIARAAQgCBhADAyIAGBKIAHBLQAIBrgOBtQgIA5gBASQgBAZACA3IgKAAMgjEAASQACgFAAgIgAC6kcQAmABAogBIAcAAg");
	this.shape_2.setTransform(0.6339,-5.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.buttonCG, new cjs.Rectangle(-119.7,-42.8,237.3,77.8), null);


// stage content:
(lib.SETIT = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		//יישור טקסט לימין
		canvas.style.direction = "rtl";
		
		//טעינת סאונד
		loadSound();
		
		//הטמעת פונטים
		WebFontConfig = {
			google: {
				families: ['Alef'] //כאן בחרו את הפונט
			}
		};
		
		(function font() {
			var wf = document.createElement('script');
			wf.src = ('https' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
			wf.type = 'text/javascript';
			wf.async = true;
			var s = document.getElementsByTagName('script')[0];
		
			s.parentNode.insertBefore(wf, s);
		})();
		
		//הגדרת משתנים גלובליים
		var mychoice = 0; //משתנה לבחירת נושא המשחק
		var orientationCount; //משתנה לשמירת תשובות נכונות
		var countDown; //משתנה להגדרת אינטרוול 
		var saveTimeCount; //משתנה לשמירת הזמן בעת עצירה
		var timeCount; //משתנה המכיל את שניות הזמן
		var allTimeGame = 0; //משתנה הסופר את סך הזמן של כל השאלות ביחד 
		var qnum; //משתנה שאחראי על מספר השאלה
		var saveQnum; //משתנה שאחראי לשמור את מספר השאלה שנענתה לא נכון
		var clickCount; //משתנה לספירת בחירות המשתמש
		var buttonCheck; //משתנה לצורך לחיצה על כפתור בדוק
		var myTextChanges = new createjs.Text(); //משתנה לתיבת טקסט גלובלית- הגדלה ומשובים
		var mGlass = new lib.bigMG(); //משתנה גלובלי ליצירה וביטול של זכוכית מגדלת 
		var myGlass; //משתנה גלובלי ליצירת זכוכית מגדלת במסיחי התמונות
		var myGlassQ; //משתנה גלובלי ליצירת זכוכית מגדלת בגזע השאלה
		var countFalseAnswers = 0; //מתשנה לשמירת שגיאות בתשובה
		var myTimeText; //משתנה לתיבת טקסט לצורך ספירת הזמן
		var myNum; //משתנה לצורך שמירת מספר הקלף הנבחר
		var score = 0; //משתנה לצורך ניקוד השחקן
		var allCountFalseAnswers = 0; //משתנה המכיל את סך כל השגיאות במשחק
		var photoInQuestion = false; //משתנה הבודק האם ישנה תמונה בגזע השאלה
		var photoInAnswer = true; //משתנה הבודק האם ישנן תמונות במסיחי השאלה
		var myTopicText = ""; //משתנה לצורך שם נושא המשחק
		var pauseIcon; //משתנה לצורך יצירת כפתור השהייה
		var myGame; //משתנה לצורך מערך המכיל את שאלות המשחק
		var selectedArray = ["", "", ""]; //משתנה לצורך מערך המכיל את הקלפים הנבחרים
		var checkGlass = false; //יצירת משתנה לבדיקת לחיצה על זכוכית מגדלת 
		var checkContainer = false; //משתנה גלובלי לצורך בדיקת העלאת קונטיינר
		var playAgain = false; //משתנה לצורך בדיקה האם זהו המשחק הראשון
		var soundON = true; //משתנה גלובלי הבודק האם השחקן השתיק את הסאונד או לא 
		var onCheck = false; //משתנה גלובלי הבדוק האם בוצעה לחיצה על כפתור הבדוק
		
		//יצירה דינמית של הרקע
		//לוח עץ
		var treeBackground = new lib.treeBK();
		stage.addChild(treeBackground);
		
		//לוח לבן
		var whiteBoard = new lib.whiteB();
		stage.addChild(whiteBoard);
		whiteBoard.x = 645;
		whiteBoard.y = 360;
		
		//אייקון סאונד
		var soundIcon = new lib.soundI();
		stage.addChild(soundIcon);
		soundIcon.x = 42;
		soundIcon.y = 40;
		soundIcon.gotoAndStop(0);
		soundIcon.cursor = "pointer";
		//הוספת אירוע לחיצה על אייקון הסאונד מוביל לפונקציית עצירת סאונד
		soundIcon.addEventListener("click", soundStop);
		
		//פונקציית עצירת סאונד
		function soundStop() {
			//הפיכה של משתנה הסאונד ללא פעיל
			soundON = false;
			soundIcon.gotoAndStop(1);
			soundIcon.removeEventListener("click", soundStop);
			//הוספת אירוע לחיצה על אייקון הסאונד בשנית מוביל לפונקציית ניגון הסאונד
			soundIcon.addEventListener("click", soundPlay);
		}
		
		//פונקציית ניגון הסאונד
		function soundPlay() {
			//הפיכה של משתנה הסאונד לפעיל
			soundON = true;
			soundIcon.gotoAndStop(0);
			soundIcon.removeEventListener("click", soundPlay);
			soundIcon.addEventListener("click", soundStop);
		}
		
		
		
		//יצירת קונטיינרים
		var startPage = new createjs.Container();
		var gamePage = new createjs.Container();
		var timeOutPage = new createjs.Container();
		var pauseTimePage = new createjs.Container();
		var allOptionsCards = new createjs.Container();
		var endPage = new createjs.Container();
		var animation = new createjs.Container();
		
		//הוספה של עמוד הפתיחה לבמה
		stage.addChild(startPage);
		
		//מסגרת עמוד פתיחה
		var startPageFrame = new lib.startPF();
		startPage.addChild(startPageFrame);
		startPageFrame.x = 650;
		startPageFrame.y = 420;
		
		//לוגו
		var logo = new lib.logoSI();
		startPage.addChild(logo);
		logo.x = 670;
		logo.y = 121;
		
		//הופסת סימבול המכיל את האלמנטים הגרפיים במסך הפתיחה
		var graphic = new lib.graphic();
		startPage.addChild(graphic);
		graphic.name = "graphic";
		
		//הגדרת הקומבו והוספתו לבמה
		var forcombo = new lib.forcomb();
		forcombo.x = 655;
		forcombo.y = 400;
		startPage.addChild(forcombo);
		forcombo.startbtn.alpha = 0.3;
		
		//מאזין לשינוי הערכים בקומבו
		$("#dom_overlay_container").on("change", "#mycb", mycb_change);
		
		//פונקציה הבודקת את בחירת המשתמש בקומבו
		function mycb_change(evt) {
			mychoice = evt.currentTarget.value;
			//אם נבחר הערך הראשון- בחר נושא
			if (mychoice == 0) {
				forcombo.startbtn.alpha = 0.3;
				forcombo.startbtn.removeEventListener("click", fl_ClickToPosition);
				//הוספת אופציית מעבר עכבר לאלמנט
				var frequency = "out";
				stage.removeMouseOver(frequency);
			} else {
				stage.enableMouseOver(frequency);
				//הוספת סמן עכבר לחיץ
				forcombo.cursor = "pointer";
				forcombo.startbtn.alpha = 1;
				//הוספת אירוע לחיצה
				forcombo.addEventListener("click", fl_ClickToPosition);
			}
		}
		
		
		//פונקצייה לאחר לחיצה בקומבו
		function fl_ClickToPosition() {
			if (mychoice == 1) {
				myTopicText = "צמחים";
				//קריאה לפונקציית המשחק בנושא צמחים
				firstGameFunc();
			} else if (mychoice == 2) {
				myTopicText = "זמרים";
				//קריאה לפונקציית המשחק בנושא זמרים
				secondGameFunc();
			}
		}
		
		//פונקציית משחק בנושא צמחים
		function firstGameFunc() {
			//איפוס משתנים גלובליים: זמן הכולל של המשחק, כמות תשובות נכונות ,ציון וספירת כל התשובות הלא נכונות
			allTimeGame = 0;
			orientationCount = 0;
			score = 0;
			allCountFalseAnswers = 0
			myGame = [
				//שאלה ראשונה
				[
					["מיהם הצמחים המשתייכים למשפחת צמחי התבלין?", 140, "", 1],
					[lib.nana, 355, 298, true, "נענע", 336, 365],
					[lib.diyonea, 545, 298, false, "דיונאה", 520, 365],
					[lib.hodaya, 735, 298, false, "הודיה", 710, 365],
					[lib.timin, 925, 298, true, "טימין", 905, 365],
					[lib.gefen, 355, 508, false, "גפן", 342, 572],
					[lib.talilit, 545, 508, false, "טללית", 521, 572],
					[lib.bazil, 735, 508, true, "בזיליקום", 701, 572],
					[lib.kisosHahoresh, 925, 508, false, "קיסוס החורש", 874, 572],
				],
				//שאלה שנייה
				[
					["מיהם הצמחים הדורשים מעט השקייה?", 215, "", 1],
					[lib.yakinton, 355, 298, false, "יקינטון", 329, 365],
					[lib.kaktus, 545, 298, true, "קקטוס", 520, 365],
					[lib.regila, 735, 298, false, "ריג'לה", 710, 365],
					[lib.shoshana, 925, 298, false, "שושנה", 902, 365],
					[lib.monestra, 355, 508, true, "מונסטרה", 321, 572],
					[lib.sigalit, 545, 508, false, "סיגלית", 521, 572],
					[lib.oranit, 735, 508, false, "אורנית לוהבת", 682, 572],
					[lib.sensiviriya, 925, 508, true, "סנסיוויריה", 883, 572],
				],
				//שאלה שלישית
				[
					["מיהם הצמחים המוגנים?", 280, "", 1],
					[lib.dardar, 355, 298, true, "דרדר כחול", 312, 365],
					[lib.darlingtonia, 545, 298, false, "דרלינגטויה", 501, 365],
					[lib.damHamacabim, 735, 298, true, "דם המכבים", 692, 365],
					[lib.petel, 925, 298, false, "פטל", 908, 365],
					[lib.pisteya, 355, 508, false, "פיסטיה", 325, 572],
					[lib.oponetzia, 545, 508, false, "אופונציה", 510, 572],
					[lib.calanit, 735, 508, true, "כלנית", 712, 572],
					[lib.nana, 925, 508, false, "נענע", 906, 572],
				],
				//שאלה רביעית
				[
					["מיהם הצמחים המשתייכים למשפחת הצמחים הטורפים?", 116, "", 1],
					[lib.darlingtonia, 355, 298, true, "", 310, 365],
					[lib.narkis, 545, 298, false, "", 523, 365],
					[lib.aloiArisyeya, 735, 298, false, "", 696, 365],
					[lib.kaktus, 925, 298, false, "", 900, 365],
					[lib.marva, 355, 508, false, "", 330, 572],
					[lib.talilit, 545, 508, true, "", 520, 572],
					[lib.diyonea, 735, 508, true, "", 711, 572],
					[lib.sigalit, 925, 508, false, "", 898, 572],
				],
				//שאלה חמישית
				[
					["מיהם הצמחים המשתייכים למשפחת הצמחים המטפסים?", 108, "", 1],
					[lib.kaktus, 355, 298, false, "קקטוס", 327, 365],
					[lib.kisosHahoresh, 545, 298, true, "קיסוס החורש", 494, 365],
					[lib.shoshana, 735, 298, false, "שושנה", 710, 365],
					[lib.oranit, 925, 298, true, "אורנית לוהבת", 870, 365],
					[lib.darlingtonia, 355, 508, false, "דרלינגטויה", 308, 572],
					[lib.monestra, 545, 508, false, "מונסטרה", 510, 572],
					[lib.gefen, 735, 508, true, "גפן", 723, 572],
					[lib.narkis, 925, 508, false, "נרקיס", 903, 572],
				],
				//שאלה שישית
				[
					["מיהם הצמחים אשר מניבים פרי?", 250, "", 1],
					[lib.calanit, 355, 298, false, "כלנית", 333, 365],
					[lib.gefen, 545, 298, true, "גפן", 532, 365],
					[lib.yakinton, 735, 298, false, "יקינטון", 705, 365],
					[lib.talilit, 925, 298, false, "טללית", 900, 365],
					[lib.socolant, 355, 508, false, "סוקולנט", 320, 572],
					[lib.petel, 545, 508, true, "פטל", 526, 572],
					[lib.shzeif, 735, 508, true, "שזיף סיני", 696, 572],
					[lib.diyonea, 925, 508, false, "דיונאה", 899, 572],
				],
				//שאלה שביעית
				[
					["מיהם הצמחים אשר משתייכים למשפחת הצמח שבתמונה?", 100, lib.cactus, 1],
					[lib.oponetzia, 355, 298, true, "אופונציה", 318, 365],
					[lib.yakinton, 545, 298, false, "יקינטון", 516, 365],
					[lib.cafanitAfarfara, 735, 298, true, "כפנית אפרפרה", 678, 365],
					[lib.shoshana, 925, 298, false, "שושנה", 896, 365],
					[lib.timin, 355, 508, false, "טימין", 333, 572],
					[lib.aloiArisyeya, 545, 508, true, "אלוי נמוך", 505, 572],
					[lib.regila, 735, 508, false, "ריג'לה", 710, 572],
					[lib.nimpia, 925, 508, false, "נימפיה לבנה", 874, 572],
				],
				//שאלה שמינית
				[
					["מיהם צמחי המים?", 310, "", 1],
					[lib.petel, 355, 298, false, "", 338, 365],
					[lib.marva, 545, 298, false, "מרווה", 523, 365],
					[lib.nimpia, 735, 298, true, "נימפיה לבנה", 685, 365],
					[lib.gefen, 925, 298, false, "", 913, 365],
					[lib.lotus, 355, 508, true, "לוטוס הקדוש", 302, 572],
					[lib.bazil, 545, 508, false, "", 509, 572],
					[lib.pisteya, 735, 508, true, "פיסטיה", 706, 572],
					[lib.dardar, 925, 508, false, "דרדר כחול", 882, 572],
				],
				//שאלה תשיעית
				[
					["מיהם הצמחים אשר שמותיהם מוזכרים בשירי ישראל?", 235, "", 1],
					["", "", "", false, "נענע", 372, 303],
					["", "", "", false, "גפן", 555, 303],
					["", "", "", true, "שושנה", 760, 303],
					["", "", "", true, "כלנית", 948, 303],
					["", "", "", false, "לוטוס הקדוש", 406, 510],
					["", "", "", true, "יקינטון", 574, 510],
					["", "", "", false, "טימין", 755, 510],
					["", "", "", false, "דם המכבים", 970, 510],
				],
				//שאלה עשירית
				[
					["מיהם הצמחים אשר על שמם נקראות ילדות בישראל?", 200, "", 1],
					["", "", "", false, "לוטוס הקדוש", 405, 303],
					["", "", "", true, "נרקיס", 567, 303],
					["", "", "", false, "מונסטרה", 769, 303],
					["", "", "", false, "דם המכבים", 968, 303],
					["", "", "", false, "בזיליקום", 389, 510],
					["", "", "", false, "דרדר כחול", 589, 510],
					["", "", "", true, "סיגלית", 760, 510],
					["", "", "", true, "יסמין", 945, 510],
				],
			];
			//בדיקה על מנת לדעת אם זהו המשחק הראשון
			if (playAgain == false) {
				//קריאה לפונקציית אנימציה
				startAnimation();
			} else {
				//קריאה לפונקציית שאלה חדשה
				startGame()
			}
		}
		
		//פונקציית משחק בנושא זמרים
		function secondGameFunc() {
			//איפוס משתנים גלובליים: זמן הכולל של המשחק, כמות תשובות נכונות ,ציון וספירת כל התשובות הלא נכונות
			allTimeGame = 0;
			orientationCount = 0;
			score = 0;
			allCountFalseAnswers = 0;
			myGame = [
				//שאלה ראשונה
				[
					["מיהם שלושת הזמרים אשר נולדו אחרי הזמר שבתמונה?", 285, lib.natanG, 1],
					[lib.assafA, 355, 298, false, "אסף אמדורסקי", 297, 365],
					[lib.miriM, 545, 298, false, "מירי מסיקה", 499, 365],
					[lib.liranD, 735, 298, true, "לירן דנינו", 695, 365],
					[lib.saritH, 925, 298, false, "שרית חדד", 886, 365],
					[lib.noaK, 355, 508, true, "נועה קירל", 316, 572],
					[lib.omerA, 545, 508, true, "עומר אדם", 506, 572],
					[lib.eyalG, 735, 508, false, "אייל גולן", 699, 572],
					[lib.yehudaP, 925, 508, false, "יהודה פוליקר", 873, 572],
				],
				//שאלה שנייה
				[
					["מי מבין הציטוטים שייכים לשיריו של שלמה ארצי?", 130, "", 1],
					["", "", "", false, "לחלומות שלנו כוח שאין לתאר...", 402, 265],
					["", "", "", true, "כמו הרבה צללים, כמו הרבה שבילים...", 591, 265],
					["", "", "", true, "לפעמים אני עוד מחפש, אושר אקספרס...", 785, 265],
					["", "", "", false, "את עולמי עם שחר את לי כל היום...", 978, 265],
					["", "", "", false, "שתישרף האהבה כמו כל החלומות שלנו...", 405, 472],
					["", "", "", false, "הלוואי שהייתי יכול להיות מי שאת רוצה...", 596, 472],
					["", "", "", false, "ואם יכולתי לשחק עם הזמן, קצת לחזור לאחור...", 785, 472],
					["", "", "", true, "הנה שוב השיר שלך את מתעוררת...", 977, 472],
				],
		
				//שאלה שלישית
				[
					["מי מבין הזמרים משתייכים להרכב מוזיקלי?", 285, "", 1],
					[lib.edenBZ, 355, 298, false, "עדן בן זקן", 313, 365],
					[lib.leaS, 545, 298, false, "לאה שבת", 509, 365],
					[lib.duduT, 735, 298, false, "דודו טסה", 698, 365],
					[lib.guyM, 925, 298, true, "גיא מנטש", 886, 365],
					[lib.tuna, 355, 508, false, "טונה", 338, 572],
					[lib.ilayB, 545, 508, true, "עילי בוטנר", 501, 572],
					[lib.oritS, 735, 508, true, "אורית שחף", 693, 572],
					[lib.hananBA, 925, 508, false, "חנן בן-ארי", 881, 572],
				],
				//שאלה רביעית
				[
					["מיהם הזמרים שהתגלו בתוכנית ריאלטי?", 330, "", 1],
					[lib.yuvalD, 355, 298, true, "יובל דיין", 318, 365],
					[lib.staticon, 545, 298, false, "סטטיק", 516, 365],
					[lib.itayL, 735, 298, false, "איתי לוי", 703, 365],
					[lib.avrahamT, 925, 298, false, "אברהם טל", 884, 365],
					[lib.idanA, 355, 508, true, "עידן עמדי", 316, 572],
					[lib.duduT, 545, 508, false, "דודו טסה", 506, 572],
					[lib.harelS, 735, 508, true, "הראל סקעת", 689, 572],
					[lib.sabliminal, 925, 508, false, "סבלימינאל", 882, 572],
				],
				//שאלה חמישית
				[
					["מי מבין הציטוטים שייכים לשירים שייצגו את ישראל בארוויזיון?", 150, "", 1],
					["", 355, 298, false, "וריחמת עליי כמו אם, וניצחת איתי הכל...", 402, 265],
					["", 545, 298, true, "חי חי חי, כן אני עוד חי...", 593, 265],
					["", 735, 298, false, "יש יום מאושר או עצב שבא חוזר פתאום...", 787, 265],
					["", 925, 298, true, "הללויה עם השיר, הללויה על יום שמאיר...", 978, 265],
					["", 355, 508, false, "ולא הכל ורוד, אבל הכל זה טוב, טוב בחיי...", 407, 472],
					["", 545, 508, false, "תעשי רק מה שאת אוהבת...", 596, 472],
					["", 735, 508, false, "זה רק אני, הפאוץ' והחום של ישראל...", 785, 472],
					["", 925, 508, true, "לילה ואתה השקט שנשאר...", 977, 472],
				],
		
				//שאלה שישית
				[
					["מיהם הזמרים שהשתתפו בסרטים?", 370, "", 1],
					[lib.assafA, 355, 298, false, "אסף אמדורסקי", 296, 365],
					[lib.yirmiK, 545, 298, false, "ירמי קפלן", 507, 365],
					[lib.mayaB, 735, 298, true, "מיה בוסקילה", 685, 365],
					[lib.arikI, 925, 298, true, "אריק אינשטיין", 868, 365],
					[lib.yehoramG, 355, 508, true, "יהורם גאון", 313, 572],
					[lib.kobiA, 545, 508, false, "קובי אפללו", 500, 572],
					[lib.yehudaP, 735, 508, false, "יהודה פוליקר", 684, 572],
					[lib.harelS, 925, 508, false, "הראל סקעת", 877, 572],
				],
				//שאלה שביעית
				[
					["מי מבין הזמרים משמש גם כמפיק מוזיקלי?", 225, "", 1],
					[lib.idanR, 355, 298, true, "עידן רייכל", 312, 365],
					[lib.natanG, 545, 298, false, "נתן גושן", 510, 365],
					[lib.ivriL, 735, 298, true, "עברי לידר", 693, 365],
					[lib.harelM, 925, 298, false, "הראל מויאל", 880, 365],
					[lib.yehoramG, 355, 508, false, "", 314, 572],
					[lib.avivG, 545, 508, true, "", 509, 572],
					[lib.saritH, 735, 508, false, "שרית חדד", 695, 572],
					[lib.mosheP, 925, 508, false, "", 888, 572],
				],
				//שאלה שמינית
				[
					["מיהם הזמרים ששם הבמה שלהם שונה משמם הפרטי?", 225, "", 1],
					[lib.ninetT, 355, 298, false, "", "", ""],
					[lib.yirmiK, 545, 298, false, "", "", ""],
					[lib.kerenP, 735, 298, false, "", "", ""],
					[lib.sabliminal, 925, 298, true, "", "", ""],
					[lib.ramiF, 355, 508, false, "", "", ""],
					[lib.staticon, 545, 508, true, "", "", ""],
					[lib.tuna, 735, 508, true, "", "", ""],
					[lib.harelS, 925, 508, false, "", "", ""],
				],
				//שאלה תשיעית
				[
					["מי מבין הזמרים שימש כשופט בתוכנית ריאלטי?", 265, "", 1],
					[lib.kerenP, 355, 298, true, "קרן פלס", 321, 365],
					[lib.ilayB, 545, 298, false, "עילי בוטנר", 499, 365],
					[lib.hananBA, 735, 298, false, "חנן בן-ארי", 691, 365],
					[lib.mosheP, 925, 298, true, "משה פרץ", 887, 365],
					[lib.yehudaP, 355, 508, false, "יהודה פוליקר", 303, 572],
					[lib.liranD, 545, 508, false, "לירן דנינו", 506, 572],
					[lib.idanA, 735, 508, false, "עידן עמדי", 696, 572],
					[lib.ramiF, 925, 508, true, "רמי פורטיס", 878, 572],
				],
				//שאלה עשירית
				[
					["מיהם הזמרים המשתייכים למשפחת בנאי המפורסמת?", 235, "", 1],
					[lib.natanG, 355, 298, false, "", 340, 365],
					[lib.eviatarB, 545, 298, true, "", 518, 365],
					[lib.avrahamT, 735, 298, false, "", 708, 365],
					[lib.yuvalB, 925, 298, true, "", 908, 365],
					[lib.kobiA, 355, 508, false, "", 334, 572],
					[lib.edenBZ, 545, 508, false, "", 528, 572],
					[lib.ehudB, 735, 508, true, "", 715, 572],
					[lib.assafA, 925, 508, false, "", 909, 572],
				],
			];
			//בדיקה על מנת לדעת אם זהו המשחק הראשון
			if (playAgain == false) {
				//קריאה לפונקציית אנימציה
				startAnimation();
			} else {
				//קריאה לפונקציית שאלה חדשה
				startGame()
			}
		}
		
		//פונקצייה לצורך מעבר בין שאלות
		function clean() {
			//איפוס משתנה הבודק האם השחקן לחץ על כפתור הבדוק
			onCheck = false;
			//איפוס משתנה הסופר את מספר המסיחים שלא נכונים שנענו בשאלה
			countFalseAnswers = 0;
			//הורדה של כל הילדים בקונטיינרים
			allOptionsCards.removeAllChildren();
			gamePage.removeAllChildren();
			timeOutPage.removeAllChildren();
			//שליחה לפונקציית הגרת שאלה חדשה
			startGame();
		}
		
		//פונקציית אנימציית פתיחה
		function startAnimation() {
			//קריאת לפונקייה לצורך יצירת אנימציה
			playAnimation();
			//משתנה לספירת זמן
			timeCount2 = 4;
			//הגדרת אינטרוול
			countDown2 = setInterval(startCount2, 1000);
			function startCount2() {
				timeCount2--;
				//אם הזמן נגמר
				if (timeCount2 == 0) {
					clearInterval(countDown2);
					//מחיקת הקונטיינר
					stage.removeChild(startPage);
					//קריאה לפונקצייה לצורך יצירת שאלה
					startGame();
				}
			}
		}
		
		//פונקצייה ליצירת אנימציה
		function playAnimation() {
			//מחיקת הגרפיקה הקודמת מן המסך
			startPage.removeChild(startPage.getChildByName("graphic"));
			//יצירת גרפיקה חדשה
			newGraphic = new lib.newG();
			newGraphic.gotoAndPlay(0);
			//הוספת הגרפיקה לקונטיינר
			animation.addChild(newGraphic);
			//הוספת הקונטיינר לבמה
			stage.addChild(animation);
		}
		
		//פונקצייה לצורך יצירת שאלה
		function startGame() {
			stage.removeChild(startPage);
			stage.addChild(gamePage);
			createGrapicTime();
			createCards();
			stopTime();
			createQuestion();
		}
		
		//פונקצייה ליצירת אלמנטים גרפיים וספירת זמן
		function createGrapicTime() {
			//איפוס משתנה ספירת בחירות הקלפים בכל שאלה
			clickCount = 0;
			//איפוס משתנה הזמן ל-45 בכל שאלה
			timeCount = 45;
		
			//יצירת לוגו קטן
			var logoS = new lib.logoSI();
			gamePage.addChild(logoS);
			logoS.x = 650;
			logoS.y = 24;
			logoS.scaleX = 0.4;
			logoS.scaleY = 0.4;
		
			//יצירת רקע לשאלה
			var yellowStroke = new lib.yellowS();
			gamePage.addChild(yellowStroke);
			yellowStroke.x = 93;
			yellowStroke.y = 76;
		
			//יצירת פתקית להצגת הנושא
			var topicFrame = new lib.topicF();
			gamePage.addChild(topicFrame);
			topicFrame.x = 190;
			topicFrame.y = 270;
			//יצירת טקסט להצגת הנושא
			topicText = new createjs.Text();
			gamePage.addChild(topicText);
			topicText.text = myTopicText;
			topicText.color = "black";
			topicText.font = "23px alef";
			topicText.x = 161;
			topicText.y = 242;
			topicText.name = "topicText";
		
			//יצירת אורינטצייה
			//קלפי אוריינטציה
			var blueCards = new lib.blueC();
			gamePage.addChild(blueCards);
			blueCards.x = 1110;
			blueCards.y = 232;
			//טקסט אוריינטציה
			var orientationText = new createjs.Text();
			gamePage.addChild(orientationText);
			orientationText.text = orientationCount + "/10";
			orientationText.color = "black";
			orientationText.font = "25px alef";
			orientationText.x = 1089;
			orientationText.y = 277;
			orientationText.name = "orientationText";
		
			//יצירת כפתור בדוק
			buttonCheck = new lib.buttonC();
			gamePage.addChild(buttonCheck);
			gamePage.name = "buttonCheck";
			buttonCheck.gotoAndStop(0);
			buttonCheck.x = 195;
			buttonCheck.y = 625;
		
			//יצירת תיבת טקסט לצורך ספירת זמן
			myTimeText = new createjs.Text();
			gamePage.addChild(myTimeText);
			myTimeText.color = "black";
			myTimeText.font = "27px alef";
			myTimeText.x = 1110;
			myTimeText.y = 26;
			myTimeText.name = "timeText";
			//משתנה לספירת זמן
			timeCount = 45;
		
			//הגדרת אינטרוול
			countDown = setInterval(startCount, 1000);
		
			//פונקציית ספירת זמן
			function startCount() {
				myTimeText.text = "00:" + timeCount;
				if (timeCount < 10) {
					myTimeText.text = "00:0" + timeCount;
				}
				if (timeCount == 0) {
					clearInterval(countDown);
					//שליחה לפונקציית עמוד נגמר הזמן
					timeOut();
				}
				timeCount--;
			}
		
		}
		
		//פונקציית יצירת הקלפים
		function createCards() {
			gamePage.addChild(allOptionsCards);
			//הפעלה של האזנה למעברי עכבר
			stage.enableMouseOver(24);
			var myCard;
			//לולאה היוצרת את 8 קלפי המסיחים
			for (var i = 0; i < 8; i++) {
				myCard = new lib.allCards();
				myCard.name = "myNumCard" + (i + 1);
				allOptionsCards.addChild(myCard);
				if (i >= 4) {
					myCard.x = -405 + i * 190;
					myCard.y = 515;
				} else {
					myCard.x = 355 + i * 190;
					myCard.y = 310;
				}
				myCard.gotoAndStop(0);
		
				//הוספת אירוע מעבר עכבר על כל הקלפים וקורא לפונקציית הוספת סמן עכבר
				myCard.addEventListener("mouseover", addCursor)
		
				//הוספת אירוע לחיצה על הקלף 
				myCard.addEventListener("click", clickAcard);
		
			}
		
		
			//פונקציית בחירת קלף
			function clickAcard(event) {
				//בדיקה האם מצב השהייה אינו פעיל והאם מצב הגדלת תמונה אינו פעיל
				if (checkContainer == false && checkGlass == false) {
					clickCount++;
					//קריאה לפונקצייה הבודקת את מספר הקלפים הנבחרים
					check();
					event.currentTarget.addEventListener("mouseover", addCursor2);
					//מערך אשר מכניס לתוכו את השם של הקלפים הנלחצים על ידי השחקן
					selectedArray[clickCount - 1] = event.currentTarget.name.charAt(9);
					//ביטול אפשרות לחיצה על הקלף הנבחר 
					event.currentTarget.removeEventListener("click", clickAcard);
					//שינו צבע הקלף לכחול
					event.currentTarget.gotoAndStop(1);
					//הוספת אפשרות לחיצה על הקלף הנבחר לצורך אי בחירתו
					event.currentTarget.addEventListener("click", unClickAcard);
					allOptionsCards.removeChild(myGlass);
				}
			}
			//פונקציית ביטול בחירת קלף
			function unClickAcard(event) {
				//בדיקה האם מצב השהייה אינו פעיל והאם מצב הגדלת תמונה אינו פעיל
				if (checkContainer == false && checkGlass == false) {
					clickCount = clickCount - 1;
					//קריאה לפונקצייה הבודקת את מספר הקלפים הנבחרים
					check();
					//ביטול אפשרות הלחיצה לצורך ביטול בחירת קלף
					event.currentTarget.removeEventListener("click", unClickAcard)
		
					//לולאה שבודקת את הקלף שבחירתו בוטלה והוצאתו ממערך הקלפים הנבחרים
					for (i = 0; i < selectedArray.length; i++) {
						//בדיקה האם התא במערך שווה למספר הקלף הנלחץ, אם כן להוריד אותו מהמערך
						if (selectedArray[i] == (event.currentTarget.name.slice(9))) {
							selectedArray.splice(i, 1)
						}
					}
					event.currentTarget.gotoAndStop(0);
					event.currentTarget.addEventListener("click", clickAcard);
					allOptionsCards.removeChild(myGlass);
				}
			}
		
			//פונקצייה הבודקת את מספר הקלפים הנבחרים
			function check() {
				//הוספה והורדה של אירועי לחיצה בהתאם לבחירה או אי בחירה של קלף
				if (clickCount == 3) {
					for (i = 1; i < 9; i++) {
						if (selectedArray[i] != i) {
							allOptionsCards.getChildByName("myNumCard" + i).removeEventListener("click", clickAcard);
						}
					}
		
					buttonCheck.gotoAndStop(1);
		
					//הוספת סמן עכבר לחיץ על כפתור בדוק
					buttonCheck.addEventListener("mouseover", addCursorBC)
					//הוספת אירוע לחיצה על כפתור בדוק לצורך בדיקת התשובות
					buttonCheck.addEventListener("click", checkAnswers);
		
				} else {
					for (var i = 1; i < 9; i++) {
						allOptionsCards.getChildByName("myNumCard" + i).addEventListener("click", clickAcard);
					}
					buttonCheck.cursor = "auto";
					buttonCheck.gotoAndStop(0);
				}
			}
		
			function addCursorBC() {
				if (checkGlass == false) {
					buttonCheck.cursor = "pointer";
				} else {
					buttonCheck.cursor = "auto";
				}
			}
		
			//פונקציית לבדיקת הקלפים שנבחרו
			function checkAnswers() {
		
				//בדיקה האם מצב הגדלת קלף אינו פעיל
				if (checkGlass == false) {
					//הפיכה של משתנה גלובלי הבודק האם בוצעה לחיצה על כפתור הבדוק לפעיל
					onCheck = true;
					var soundCorrect = 0;
		
					for (i = 1; i < 9; i++) {
						//ביטול אפשרויות לחיצה על הקליפ והוספה של מעבר עכבר המוביל לפונקציית שינוי סמן עכבר
						allOptionsCards.getChildByName("myNumCard" + i).removeEventListener("click", clickAcard);
						allOptionsCards.getChildByName("myNumCard" + i).removeEventListener("click", unClickAcard);
						allOptionsCards.getChildByName("myNumCard" + i).removeEventListener("mouseover", addCursor);
						allOptionsCards.getChildByName("myNumCard" + i).addEventListener("mouseover", removeCursor);
					}
					//עצירה של ספירת זמן לשאלה
					clearInterval(countDown);
					var x = 45 - timeCount;
					//הוספה של ספירת הזמן פר שאלה לספירת הזמן הכללית במשחק
					allTimeGame += x;
		
					//לולאה שרצה על מערך הקלפים הנבחרים ובודקת עבור כל מסיח האם הוא נכון או לא
					for (var i = 0; i < (selectedArray.length); i++) {
						myNum = selectedArray[i];
						if (myGame[qnum][myNum][3] == true) {
							//יצירה של קלף ירוק רוקד
							var myCorrectCard = new lib.greenC();
							allOptionsCards.addChild(myCorrectCard);
							myCorrectCard.x = allOptionsCards.getChildByName("myNumCard" + (myNum)).x;
							myCorrectCard.y = allOptionsCards.getChildByName("myNumCard" + (myNum)).y;
							//מחיקת הקלף הכחול הנבחר
							allOptionsCards.removeChild(allOptionsCards.getChildByName("myNumCard" + (myNum)));
							myCorrectCard.gotoAndPlay(0);
							//עלייה במשתנה הסופר את כמות המסיחים הנכונים בשאלה
							soundCorrect++
		
						} else if (myGame[qnum][myNum][3] == false) {
							//משתנה לצורך שמירת מספר השאלה
							saveQnum = qnum;
							allOptionsCards.getChildByName("myNumCard" + myNum).gotoAndStop(3);
							//משתנה לספירת מסיחים שגויים
							countFalseAnswers++;
							myTextChanges.text = "לא הצלחת להשלים את הסט..נסה שוב בהמשך!";
							gamePage.removeChild(mGlass);
							//הפיכת כפתור בדוק לכפתור המשך
							buttonCheck.gotoAndStop(2);
						}
					}
					//תנאי הבודק האם כפתור המוזיקה עובד ובדיקת משוב קולי בהתאם לכמות תשובות נכונות
					if (soundON == true) {
						if (soundCorrect == 3) {
							//במידה וכן שליחה לסאונד חיובי
							playYes();
						} else {
							//במידה וכן שליחה לסאונד שלילי
							playNo();
						}
					}
		
					//ביטול כפתור הבדוק		
					buttonCheck.removeEventListener("click", checkAnswers);
					//הפעלת כפתור ההמשך
					buttonCheck.addEventListener("click", clean);
					//קריאה לפונקצייה הסופרת את כמות נסיונות המענה על השאלה
					trying();
				}
			}
		
			//פונקצייה הסופרת את כמות נסיונות המענה על השאלה
			function trying() {
				if (countFalseAnswers != 0) {
					//עליה של התא במערך שסופר את כמות נסיונות המענה של שאלה ספציפית
					myGame[qnum][0][3]++;
					//עלייה במשתנה הסופר את כלל שגיאות השחקן במהלך המשחק
					allCountFalseAnswers++
				} else {
					//במידה ולא קיימות שגיאות חישוב ציון בעבור השאלה
					score += Math.floor(100 / (10 * myGame[qnum][0][3]));
					//עלייה במשתנה המציג את האורינטצייה במשחק
					orientationCount += 1;
					//הוצאה של השאלה מתוך המערך
					myGame.splice(qnum, 1);
					myTextChanges.text = "כל הכבוד! הצלחת להשלים את הסט.."
					gamePage.removeChild(mGlass);
					buttonCheck.gotoAndStop(2);
				}
		
				//בדיקה האם נגמרו השאלות במערך
				if (myGame.length == 0) {
					//אם כן תוסיף לכפתור אירוע לחיצה לפונקציית סיום
					buttonCheck.removeEventListener("click", clean);
					buttonCheck.addEventListener("click", endGamePage);
				} else {
					//אם לא תוסיף לכפתור אירוע לחיצה לפונקציית ניקיון
					buttonCheck.addEventListener("click", clean);
				}
			}
		}
		
		
		//פונקציית עצירת הזמן בעת השהיית משחק
		function stopTime() {
			//יצירת כפתור השהייה
			pauseIcon = new lib.pauseI();
			gamePage.addChild(pauseIcon);
			pauseIcon.x = 1225;
			pauseIcon.y = 40;
			pauseIcon.name = "pauseI";
			//הוספת סמן עכבר לחיץ
			pauseIcon.cursor = "pointer";
			//אירוע לחיצה על כפתור השהייה
			pauseIcon.addEventListener("click", pausePage);
		
			//פונקציה האחראית לעמוד הפסקה של השחקן מהמשחק 
			function pausePage() {
				//שמירת הזמן שעת השהיית המשחק
				saveTimeCount = timeCount;
				//עצירה של ירידת הזמן הכללית של המשחק
				clearInterval(countDown);
				checkContainer = true;
				//הוספה של קונטיינר
				gamePage.addChild(pauseTimePage);
		
				//יצירת אלמנטים גרפיים
				var whiteBoard = new lib.whiteB();
				pauseTimePage.addChild(whiteBoard);
				whiteBoard.x = 645;
				whiteBoard.y = 360;
		
				var pausePageFrame = new lib.pausePF();
				pauseTimePage.addChild(pausePageFrame);
				pausePageFrame.x = 650;
				pausePageFrame.y = 375;
		
				var coffee = new lib.coffeeD();
				pauseTimePage.addChild(coffee);
				coffee.x = 380;
				coffee.y = 588;
		
				var cookie = new lib.cookieD();
				pauseTimePage.addChild(cookie);
				cookie.x = 325;
				cookie.y = 628;
		
				var glasses = new lib.glassesD();
				pauseTimePage.addChild(glasses);
				glasses.x = 495;
				glasses.y = 625;
		
				//יצירת טקסט ראשי
				var mainTextPause = new createjs.Text();
				pauseTimePage.addChild(mainTextPause);
				mainTextPause.text = "קח את הזמן!"
				mainTextPause.color = "black";
				mainTextPause.font = "41px alef";
				mainTextPause.textAlign = "center";
				mainTextPause.lineWidth = 500;
				mainTextPause.x = 645;
				mainTextPause.y = 215;
		
				//יצירת טקסט משני
				var secondTextPause = new createjs.Text();
				pauseTimePage.addChild(secondTextPause);
				secondTextPause.text = "רק אל תשכח הקלפים מחכים לך..."
				secondTextPause.color = "black";
				secondTextPause.font = "24px alef";
				secondTextPause.textAlign = "center";
				secondTextPause.lineWidth = 1000;
				secondTextPause.x = 620;
				secondTextPause.y = 320;
		
				//כפתור המשך
				var buttonF = new lib.buttonCQ();
				pauseTimePage.addChild(buttonF);
				buttonF.x = 640;
				buttonF.y = 450;
				//הוספת סמן
				buttonF.cursor = "pointer";
				//הוספת אירוע לחיצה לפונקציה החוזרת למשחק לאחר השהייתו
				buttonF.addEventListener("click", removeContainer);
		
				//פונקציה החוזרת למשחק לאחר השהייתו
				function removeContainer() {
					checkContainer = false;
					pauseTimePage.removeAllChildren();
					//במידה והמשתמש לא לחץ על כפתור בדוק הזמן ממשיך
					if (onCheck == false) {
						myTimeText.text = "";
		
						timeCount = saveTimeCount;
						countDown = setInterval(startCount, 1000);
						//פונקציה להחזרת הזמן מהרגע שהופסק
						function startCount() {
							myTimeText.text = "00:" + timeCount;
							if (timeCount < 10) {
								myTimeText.text = "00:0" + timeCount;
							}
							//אם נגמר הזמן קריאה לפונקציית נגמר הזמן
							if (timeCount == 0) {
								myTimeText.text = "עמוד נגמר זמן";
								clearInterval(countDown);
								timeOut();
							}
							timeCount--;
						}
					}
				}
			}
		}
		
		//פונקצייה לצורך יצירת שאלות
		function createQuestion() {
			qrand();
			createQ();
			createA();
		}
		
		//פונקציית הגרלת שאלה 
		function qrand() {
			qnum = Math.floor(Math.random() * myGame.length);
			//כל עוד נותרה יותר משאלה אחת במערך, והמספר שהוגרל שווה למספר השאלה שנענתה לא נכון- תגריל מחדש
			if (myGame.length != 1) {
				while (qnum == saveQnum) {
					qrand();
				}
			}
		
		}
		
		//פונקציית יצירת גזע השאלה
		function createQ() {
			//משתנה לתיבת טקסט לצורך השאלה
			var questionText = new createjs.Text();
			gamePage.addChild(questionText);
			questionText.name = "questionText";
			questionText.text = myGame[qnum][0][0];
			questionText.color = "black";
			questionText.font = "33px alef";
			questionText.Width = 800;
			questionText.textAlign = "center";
			questionText.y = 85;
			//מיקומים שאלות ארוכות
			if ((myGame[qnum][0][1]) = "long") {
				questionText.x = 635;
			}
			//מיקום שאלות קצרות
			if ((myGame[qnum][0][1]) = "medium") {
				questionText.x = 651;
			} else {
				questionText.x = 644;
			}
		
			//ייחוד שאלות בעלות תמונה בגזע השאלה
			if ((myGame[qnum][0][2]) != "") {
				var myImageQ = new(myGame[qnum][0][2]);
				myImageQ.x = 210;
				myImageQ.y = 132;
				gamePage.addChild(myImageQ);
				myImageQ.name = "myImageQ";
				photoInQuestion = true;
			} else {
				photoInQuestion = false;
			}
			//משתנה לתיבת טקסט לצורך הוראה
			var instructionsText = new createjs.Text();
			gamePage.addChild(instructionsText);
			instructionsText.name = "instructionsText";
			instructionsText.text = "בחר עם העכבר את שלושת הקלפים המתאימים";
			instructionsText.color = "black";
			instructionsText.font = "26px alef";
			instructionsText.x = 418;
			instructionsText.y = 125;
			instructionsText = "center";
		}
		
		//פונקציה ליצירת מסיחים לשאלה
		function createA() {
			for (var i = 1; i < myGame[qnum].length; i++) {
				photoInAnswer = true;
				//ייחוד שאלות בעלות תמונה במסיחים
				if ((myGame[qnum][i][0]) != "") {
					//יצירת תמונות במסיחים
					var myImage = new(myGame[qnum][i][0]);
					myImage.name = "image" + i;
					myImage.x = myGame[qnum][i][1];
					myImage.y = myGame[qnum][i][2];
					gamePage.addChild(myImage);
				} else {
					photoInAnswer = false;
				}
		
				//הכנסת טקסט במשתנה טקסט גלובלי לצורך הוראת הגדלה לתמונה
				gamePage.addChild(myTextChanges);
				myTextChanges.color = "black";
				myTextChanges.font = "25px alef";
				myTextChanges.x = 448;
				myTextChanges.y = 630;
				myTextChanges.name = "sizeText";
				myTextChanges.text = "";
				if (photoInAnswer == true) {
					myTextChanges.text = "להגדלת התמונה- עבור על הקלף ולחץ על";
					//יצירת זכוכית מגדלת
					gamePage.addChild(mGlass);
					mGlass.x = 410;
					mGlass.y = 632;
				}
				//יצירת טקסט במסיחים
				var imageText = new createjs.Text();
				imageText.name = "imageText" + i;
				imageText.text = myGame[qnum][i][4];
				imageText.x = myGame[qnum][i][5];
				imageText.y = myGame[qnum][i][6];
				imageText.color = "black";
				imageText.font = "20px alef";
				//ייחוד שאלות בעלות טקסט בלבד
				if ((myGame[qnum][i][0]) == "") {
					imageText.textAlign = "right";
					imageText.lineWidth = 110;
				}
				gamePage.addChild(imageText);
			}
			//בדיקה האם ישנה תמונה בזגע השאלה אם כן הוספה של מעברי עכבר 
			if (photoInQuestion == true) {
				gamePage.getChildByName("myImageQ").addEventListener("mouseover", addGlassQ);
				gamePage.getChildByName("myImageQ").addEventListener("mouseout", outGlassQ);
			}
		
			//בדיקה האם ישנן תמונות במסיחי השאלה, אם כן- הוספה של מעברי עכבר 
			if (photoInAnswer == true) {
				for (var i = 1; i < 9; i++) {
					allOptionsCards.getChildByName("myNumCard" + i).addEventListener("mouseover", addGlassCard);
					allOptionsCards.getChildByName("myNumCard" + i).addEventListener("mouseout", outGlassCard);
				}
			}
		
			//פונקציית מעבר עכבר לצורך הוספת זכוכית מגדלת
			function addGlassCard(event) {
				//בדיקה האם עמוד השהייה בפעיל ובדיקה האם השחקן לחץ על כפתור הבדוק
				if (checkContainer == false && onCheck == false) {
					myGlass = new lib.mGlass();
					allOptionsCards.addChild(myGlass);
					myGlass.name = "myGlass" + event.currentTarget.name;
					myGlass.scaleX = 0.6;
					myGlass.scaleY = 0.6;
					myGlass.x = event.currentTarget.x + 37;
					myGlass.y = event.currentTarget.y - 76;
					//הוספת סמן עכבר לחיץ
					myGlass.cursor = "pointer";
					//הוספת אירוע לחיצה על זכוכית מגדלת
					myGlass.addEventListener("click", biggerCard);
				}
			}
		
			//פונקציית יציאה ממעבר עכבר על הקלף לצורך הורדת זכוכית מגדלת
			function outGlassCard(event) {
				allOptionsCards.removeChild(myGlass);
			}
		
			//פונקציית הגדלת קלף
			function biggerCard(event) {
				checkGlass = true;
				sliceNum = event.currentTarget.name.slice(-1);
				//הגדלת מימדי מסיחים- קלף, תמונה וטקסט
				allOptionsCards.getChildByName("myNumCard" + sliceNum).scaleX = 1.2;
				allOptionsCards.getChildByName("myNumCard" + sliceNum).scaleY = 1.2;
				gamePage.getChildByName("image" + sliceNum).scaleX = 1.3;
				gamePage.getChildByName("image" + sliceNum).scaleY = 1.3;
				gamePage.getChildByName("imageText" + sliceNum).scaleX = 1.2;
				gamePage.getChildByName("imageText" + sliceNum).scaleY = 1.2;
				gamePage.getChildByName("imageText" + sliceNum).x -= 8.5;
				gamePage.getChildByName("imageText" + sliceNum).y += 10;
				allOptionsCards.removeChild(myGlass);
				//הוספת איקס לצורך יציאה ממצב הגדלה
				myX = new lib.XbigC();
				allOptionsCards.addChild(myX);
				myX.name = "myX" + event.currentTarget.name;
				myX.x = event.currentTarget.x;
				myX.y = event.currentTarget.y;
				//הוספת סמן עכבר לחיץ
				myX.cursor = "pointer";
				//ביטול אפשרות מעבר עכבר על קלפים אחרים
				for (var i = 1; i < 9; i++) {
					allOptionsCards.getChildByName("myNumCard" + i).removeEventListener("mouseover", addGlassCard);
					allOptionsCards.getChildByName("myNumCard" + i).removeEventListener("mouseout", outGlassCard);
				}
				//הוספת אירוע לחיצה על איקס 
				myX.addEventListener("click", exitX);
			}
		
			//פונקציית יציאה ממצב הגדלה
			function exitX(event) {
				checkGlass = false;
				allOptionsCards.removeChild(myX);
				//החזרת מימדי המסיחים לגודלם המקורי ולמיקומם
				allOptionsCards.getChildByName("myNumCard" + sliceNum).scaleX = 1;
				allOptionsCards.getChildByName("myNumCard" + sliceNum).scaleY = 1;
				gamePage.getChildByName("image" + sliceNum).scaleX = 1;
				gamePage.getChildByName("image" + sliceNum).scaleY = 1;
				gamePage.getChildByName("imageText" + sliceNum).scaleX = 1;
				gamePage.getChildByName("imageText" + sliceNum).scaleY = 1;
				gamePage.getChildByName("imageText" + sliceNum).x += 8.5;
				gamePage.getChildByName("imageText" + sliceNum).y -= 10;
				//החזרת מעברי עכבר שמחזירים את אפשרות הופעת זכוכית המגדלת
				for (var i = 1; i < 9; i++) {
					allOptionsCards.getChildByName("myNumCard" + i).addEventListener("mouseover", addGlassCard);
					allOptionsCards.getChildByName("myNumCard" + i).addEventListener("mouseout", outGlassCard);
				}
			}
		
			//פונקציית  מעבר עכבר על תמונה בגוף השאלה לצורך הוספת זכוכית מגדלת	
			function addGlassQ(event) {
				myGlassQ = new lib.mGlassQ();
				gamePage.addChild(myGlassQ);
				myGlassQ.name = "myGlassQ";
				myGlassQ.scaleX = 0.6;
				myGlassQ.scaleY = 0.6;
				myGlassQ.x = event.currentTarget.x + 22;
				myGlassQ.y = event.currentTarget.y - 40;
				//הוספת סמן עכבר לחיץ
				myGlassQ.cursor = "pointer";
				//הוספת אירוע לחיצה על זכוכית מגדלת
				myGlassQ.addEventListener("click", biggerImageQ);
				gamePage.getChildByName("myImageQ").removeEventListener("mouseover", addGlassQ);
				gamePage.getChildByName("myImageQ").removeEventListener("mouseout", outGlassQ);
			}
		
			//פונקציית יציאה ממעבר עכבר על תמונה בגוף השאלה לצורך הורדת זכוכית מגדלת
			function outGlassQ(event) {
				gamePage.removeChild(myGlassQ);
			}
		
			//פונקציית הגדלת תמונה בגזע השאלה 
			function biggerImageQ(event) {
				gamePage.removeChild(myGlassQ);
				gamePage.getChildByName("myImageQ").scaleX = 1.3;
				gamePage.getChildByName("myImageQ").scaleY = 1.3;
				//הוספת איקס לצורך יציאה ממצב הגדלה
				var myXQ = new lib.XbigImageQ();
				gamePage.addChild(myXQ);
				myXQ.name = "myXQ";
				myXQ.x = event.currentTarget.x - 6;
				myXQ.y = event.currentTarget.y;
				//הוספת סמן עכבר לחיץ
				myXQ.cursor = "pointer";
		
				//הוספת אירוע לחיצה על יציאה 
				myXQ.addEventListener("click", exitXQ);
			}
		
			//פונקציית יציאה ממצב הגדלת תמונה בגזע השאלה	
			function exitXQ(event) {
				gamePage.removeChild(gamePage.getChildByName("myXQ"));
				gamePage.removeChild(myGlassQ);
				//החזרת מימדי המסיחים לגודלם המקורי ולמיקומם
				gamePage.getChildByName("myImageQ").scaleX = 1;
				gamePage.getChildByName("myImageQ").scaleY = 1;
				gamePage.getChildByName("myImageQ").addEventListener("mouseover", addGlassQ);
				gamePage.getChildByName("myImageQ").addEventListener("mouseout", outGlassQ);
			}
		}
		
		//פונקציה האחראית ליצירת העמוד נגמר הזמן 
		function timeOut() {
			//מחיקה של קונטיינר 
			stage.removeChild(gamePage);
			//הוספה של קונטיינר
			stage.addChild(timeOutPage);
		
			//העלאה של מספר נסיונות המענה בעבור השאלה הספציפית והעלאה של כלל התשובות השגויות
			myGame[qnum][0][3]++;
			allCountFalseAnswers++;
		
			//יצירת אלמנטים גרפיים לעמוד
			var timeOutFrame = new lib.timeOF();
			timeOutPage.addChild(timeOutFrame);
			timeOutFrame.x = 650;
			timeOutFrame.y = 375;
		
			var clock = new lib.clockI();
			timeOutPage.addChild(clock);
			clock.x = 1035;
			clock.y = 545;
		
			var lamp = new lib.lampI();
			timeOutPage.addChild(lamp);
			lamp.x = 270;
			lamp.y = 200;
		
			//יצירת טקסט ראשי
			var mainText = new createjs.Text();
			timeOutPage.addChild(mainText);
			mainText.text = "אופס... אזל הזמן!"
			mainText.color = "black";
			mainText.font = "41px alef";
			mainText.textAlign = "center";
			mainText.lineWidth = 180;
			mainText.x = 645;
			mainText.y = 215;
		
			//יצירת טקסט משני
			var secondText = new createjs.Text();
			timeOutPage.addChild(secondText);
			secondText.text = "תהיה לך הזדמנות נוספת לענות על השאלה"
			secondText.color = "black";
			secondText.font = "24px alef";
			secondText.textAlign = "center";
			secondText.lineWidth = 500;
			secondText.x = 635;
			secondText.y = 320;
		
			//כפתור המשך
			var buttonF = new lib.buttonCG();
			timeOutPage.addChild(buttonF);
			buttonF.x = 640;
			buttonF.y = 450;
			//הוספת סמן
			buttonF.cursor = "pointer";
			//הוספת אירוע לחיצה
			buttonF.addEventListener("click", clean);
		}
		
		
		//פונקציית עמוד סיום
		function endGamePage() {
		
			var secondsORminutes;
			//בדיקה וחישוב הזמן שלקח לשחקן לסיים את המשחק
			if (allTimeGame < 60) {
		
				secondsORminutes = allTimeGame + " שניות";
			} else {
				var numRest;
				secondsORminutes = Math.floor(allTimeGame / 60) + ":";
				numRest = (Math.floor(allTimeGame / 60)) * 60;
				if ((allTimeGame - numRest) < 10) {
					secondsORminutes += "0" + (allTimeGame - numRest) + " דקות";
				} else {
					secondsORminutes += (allTimeGame - numRest) + " דקות";
				}
			}
			//מחיקה של קונטיינר
			stage.removeChild(gamePage);
			//הוספה של קונטיינר
			stage.addChild(endPage);
		
			//בדיקה האם כפתור הסאונד פעיל
			if (soundON == true) {
				//קריאה לפונקציה לצורך הפעלת סאונד סיום 
				playDone();
			}
		
			//יצירת אלמנטים גרפיים
			var whiteBoard = new lib.whiteB();
			endPage.addChild(whiteBoard);
			whiteBoard.x = 645;
			whiteBoard.y = 360;
		
			var endPageFrame = new lib.endPF();
			endPage.addChild(endPageFrame);
			endPageFrame.x = 650;
			endPageFrame.y = 375;
		
			var medal = new lib.medalD();
			endPage.addChild(medal);
			medal.x = 403;
			medal.y = 370;
		
			var victoryCup = new lib.victoryCD();
			endPage.addChild(victoryCup);
			victoryCup.x = 895;
			victoryCup.y = 290;
		
			//יצירת טקסט ראשי
			var mainText = new createjs.Text();
			endPage.addChild(mainText);
			mainText.text = "עבודה טובה!"
			mainText.color = "black";
			mainText.font = "41px alef";
			mainText.textAlign = "center";
			mainText.lineWidth = 300;
			mainText.x = 645;
			mainText.y = 190;
		
			//יצירת טקסט משני
			var secondText = new createjs.Text();
			endPage.addChild(secondText);
			secondText.text = "הצלחת להשלים את כל הסטים וסיימת את המשחק"
			secondText.color = "black";
			secondText.font = "28px alef";
			secondText.textAlign = "center";
			secondText.lineWidth = 330;
			secondText.x = 645;
			secondText.y = 250;
		
			//מלל להצגת הציון
			var gradeText = new createjs.Text();
			endPage.addChild(gradeText);
			gradeText.text = "הציון שלך: " + score;
			gradeText.color = "black";
			gradeText.font = "25px alef";
			gradeText.textAlign = "center";
			gradeText.x = 655;
			gradeText.y = 335;
		
			//מלל להצגת הזמן הכולל
			var totalTimeText = new createjs.Text();
			endPage.addChild(totalTimeText);
			totalTimeText.text = "זמן כולל: " + secondsORminutes;
			totalTimeText.color = "black";
			totalTimeText.font = "25px alef";
			totalTimeText.textAlign = "center";
			totalTimeText.x = 655;
			totalTimeText.y = 385;
		
			//מלל להצגת השגיאות
			var mistakeText = new createjs.Text();
			endPage.addChild(mistakeText);
			mistakeText.text = "כמות שגיאות: " + allCountFalseAnswers;
			mistakeText.color = "black";
			mistakeText.font = "25px alef";
			mistakeText.textAlign = "center";
			mistakeText.x = 655;
			mistakeText.y = 435;
		
			//כפתור המשך
			var buttonEndPage = new lib.buttonRG();
			endPage.addChild(buttonEndPage);
			buttonEndPage.x = 752;
			buttonEndPage.y = 515;
			//הוספת סמן
			buttonEndPage.cursor = "pointer";
			//הוספת אירוע לחיצה על כפתור שחק שוב
			buttonEndPage.addEventListener("click", restart);
		
			//פונקציית לחיצה על כפתור שחק שוב
			function restart() {
				playAgain = true;
				clearContainers();
				if (mychoice == 1) {
					firstGameFunc();
				} else if (mychoice == 2) {
					secondGameFunc();
				}
			}
		
			//כפתור סיום
			var buttonEndGame = new lib.buttonEG();
			endPage.addChild(buttonEndGame);
			buttonEndGame.x = 562;
			buttonEndGame.y = 515;
			//הוספת סמן
			buttonEndGame.cursor = "pointer";
			//הוספת אירוע לחיצה
			buttonEndGame.addEventListener("click", ending);
		
			var conffettiRight = new lib.conffettiR();
			endPage.addChild(conffettiRight);
			conffettiRight.x = 960;
		
			var conffettiCenterR = new lib.conffettiCR();
			endPage.addChild(conffettiCenterR);
			conffettiCenterR.x = 920;
		
			var conffettiCenterL = new lib.conffettiCL();
			endPage.addChild(conffettiCenterL);
			conffettiCenterL.x = 350;
		
			var conffettiLeft = new lib.conffettiL();
			endPage.addChild(conffettiLeft);
			conffettiLeft.x = 53;
		
			//פונקציית לחיצה על כפתור סיום
			function ending() {
				//מחיקת הקויינטרים מן הבמה
				clearContainers();
				//הוספת קונטיינר 
				stage.addChild(startPage);
				//הוספת הגרפיקה ההתחלתית
				startPage.addChild(graphic);
		
			}
		
			//פונקצייה שמוחקת את הקונטיינרים
			function clearContainers() {
				gamePage.removeAllChildren();
				allOptionsCards.removeAllChildren();
				timeOutPage.removeAllChildren();
				pauseTimePage.removeAllChildren();
				endPage.removeAllChildren();
			}
		}
		
		//פונקציית טעינת סאונד
		function loadSound() {
			createjs.Sound.registerSound("sounds/correctmp3.mp3", "YES");
			createjs.Sound.registerSound("sounds/worngmp3.mp3", "NO");
			createjs.Sound.registerSound("sounds/donemp3.mp3", "DONE");
		}
		
		function playYes() {
			var instance = createjs.Sound.play("YES");
		}
		
		function playNo() {
			var instance = createjs.Sound.play("NO");
		}
		function playDone() {
			var instance = createjs.Sound.play("DONE");
		}
		
		
		//פונקציית הוספרת סמן עכבר לחיץ על הקלפים
		function addCursor() {
			//בדיקה האם עמוד השהייה אינו פעיל, האם מצב הגדלת תמונה אינו פעיל והאם מספר הבחירות קטן משלוש
			if (checkContainer == false && checkGlass == false && clickCount < 3) {
				for (i = 1; i < 9; i++) {
					allOptionsCards.getChildByName("myNumCard" + i).cursor = "pointer";
				}
			} else {
				for (i = 1; i < 9; i++) {
					allOptionsCards.getChildByName("myNumCard" + i).cursor = "auto";
				}
			}
		}
		
		//פונקציית הוספת סמן עכבר עבור קלפים שנלחצו, לצורך ביטול בחירתם
		function addCursor2(event) {
			//בדיקה האם עמוד השהייה אינו פעיל והאם מצב הגדלת תמונה אינו פעיל
			if (checkContainer == false && checkGlass == false) {
				event.currentTarget.cursor = "pointer";
			}
		}
		
		//פונקציית הסרת סמן עכבר לחיץ 
		function removeCursor(event) {
			//בדיקה האם בוצעה לחיצה על כפתור הבדוק ומצב בדיקת התשובות פעיל
			if (onCheck == true) {
				event.currentTarget.cursor = "auto";
			}
		}
		playSound("worngmp3");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);
// library properties:
lib.properties = {
	id: 'CF926FC97C7A459FA89F4151477D264F',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/CachedBmp_363.png?1613206996363", id:"CachedBmp_363"},
		{src:"images/CachedBmp_362.png?1613206996363", id:"CachedBmp_362"},
		{src:"images/CachedBmp_269.png?1613206996363", id:"CachedBmp_269"},
		{src:"images/SET IT_atlas_1.png?1613206994887", id:"SET IT_atlas_1"},
		{src:"images/SET IT_atlas_2.png?1613206994890", id:"SET IT_atlas_2"},
		{src:"images/SET IT_atlas_3.png?1613206994891", id:"SET IT_atlas_3"},
		{src:"sounds/Correctmp3.mp3?1613206996363", id:"Correctmp3"},
		{src:"sounds/donemp3.mp3?1613206996363", id:"donemp3"},
		{src:"sounds/worngmp3.mp3?1613206996363", id:"worngmp3"},
		{src:"https://code.jquery.com/jquery-3.4.1.min.js?1613206996363", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js?1613206996363", id:"sdk/anwidget.js"},
		{src:"components/ui/src/combobox.js?1613206996363", id:"an.ComboBox"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['CF926FC97C7A459FA89F4151477D264F'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
function _updateVisibility(evt) {
	var parent = this.parent;
	var detach = this.stage == null || this._off || !parent;
	while(parent) {
		if(parent.visible) {
			parent = parent.parent;
		}
		else{
			detach = true;
			break;
		}
	}
	detach = detach && this._element && this._element._attached;
	if(detach) {
		this._element.detach();
		this.dispatchEvent('detached');
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	if(this._element && this._element._attached) {
		var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
		var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
		var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
		mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
		this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
		var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
		var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
		var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
		this._element.setProperty('transform', tx);
		this._element.setProperty('width', w);
		this._element.setProperty('height', h);
		this._element.update();
	}
}

function _tick(evt) {
	var stage = this.stage;
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}
function _componentDraw(ctx) {
	if(this._element && !this._element._attached) {
		this._element.attach($('#dom_overlay_container'));
		this.dispatchEvent('attached');
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;