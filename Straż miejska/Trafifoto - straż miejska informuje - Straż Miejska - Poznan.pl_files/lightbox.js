




/*
     FILE ARCHIVED ON 2:16:40 sie 21, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:09:12 lut 24, 2016.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
	Lightbox JS: Fullsize Image Overlays
	by Lokesh Dhakar - /web/20150821021640/http://www.huddletogether.com

	For more information on this script, visit:
	/web/20150821021640/http://huddletogether.com/projects/lightbox/

	Licensed under the Creative Commons Attribution 2.5 License - /web/20150821021640/http://creativecommons.org/licenses/by/2.5/
	(basically, do anything you want, just leave my name and link)

	Table of Contents
	-----------------
	Configuration

	Functions
	- getPageScroll()
	- getPageSize()
	- pause()
	- getKey()
	- listenKey()
	- showLightbox()
	- hideLightbox()
	- initLightbox()
	- addLoadEvent()

	- move(direction)
	- getCurrentPictureId(objSrc)
	- getPicturesIds(objSrc)
	- createNewPicture(next, objSrc)

	Function Calls
	- addLoadEvent(initLightbox)

*/

//
// Configuration
//
// If you would like to use a custom loading image or close button reference them in the next two lines.
var loadingImage = '/mim/wspolne/.js/lightbox/loading.gif';
var closeButton = '/mim/wspolne/.js/lightbox/close.gif';
var nextButton = '/mim/wspolne/.js/lightbox/next.gif';
var previousButton = '/mim/wspolne/.js/lightbox/previous.gif';
var slideshowButton = '/mim/wspolne/.js/lightbox/slideshow.gif';


var closeMessage = new Array();
closeMessage['pl'] = 'Kliknij aby zamknąć okno';
closeMessage['en'] = 'Click to close';
closeMessage['de'] = 'Klicken zum zu schließen';
closeMessage['fr'] = 'Clic a se fermer';
closeMessage['es'] = 'Tecleo a cerrarse';
closeMessage['it'] = 'Click to close';
closeMessage['hr'] = 'Click to close';
closeMessage['pt'] = 'Click to close';

var pressCloseMessage = new Array();
pressCloseMessage['pl'] = 'naciśnij <a href="#" onclick="hideLightbox(); return false;"><kbd>x</kbd></a> aby zamknąć okno';
pressCloseMessage['en'] = 'press <a href="#" onclick="hideLightbox(); return false;"><kbd>x</kbd></a> to close';
pressCloseMessage['de'] = 'betätigen, <a href="#" onclick="hideLightbox(); return false;"><kbd>x</kbd></a> um zu schließen';
pressCloseMessage['fr'] = 'serrer <a href="#" onclick="hideLightbox(); return false;"><kbd>x</kbd></a> pour se fermer';
pressCloseMessage['es'] = 'presionar <a href="#" onclick="hideLightbox(); return false;"><kbd>x</kbd></a> para cerrarse';
pressCloseMessage['pt'] = 'press <a href="#" onclick="hideLightbox(); return false;"><kbd>x</kbd></a> to close';
pressCloseMessage['it'] = 'press <a href="#" onclick="hideLightbox(); return false;"><kbd>x</kbd></a> to close';
pressCloseMessage['hr'] = 'press <a href="#" onclick="hideLightbox(); return false;"><kbd>x</kbd></a> to close';

var previousMessage = new Array();
previousMessage['pl'] = 'poprzedni [strzałka w lewo]';
previousMessage['en'] = 'previous [left arrow]';
previousMessage['de'] = 'previous [left arrow]';
previousMessage['es'] = 'previous [left arrow]';
previousMessage['it'] = 'previous [left arrow]';
previousMessage['hr'] = 'previous [left arrow]';
previousMessage['pt'] = 'previous [left arrow]';
previousMessage['fr'] = 'previous [left arrow]';
previousMessage['ru'] = 'previous [left arrow]';

var nextMessage = new Array();
nextMessage['pl'] = 'następny [strzałka w prawo]';
nextMessage['en'] = 'next [right arrow]';
nextMessage['de'] = 'next [right arrow]';
nextMessage['es'] = 'next [right arrow]';
nextMessage['it'] = 'next [right arrow]';
nextMessage['hr'] = 'next [right arrow]';
nextMessage['pt'] = 'next [right arrow]';
nextMessage['fr'] = 'next [right arrow]';
nextMessage['ru'] = 'next [right arrow]';

var slideshowMessage = new Array();
slideshowMessage['pl'] = 'pokaz slajdów [s]';
slideshowMessage['en'] = 'slideshow [s]';
slideshowMessage['de'] = 'slideshow [s]';
slideshowMessage['es'] = 'slideshow [s]';
slideshowMessage['it'] = 'slideshow [s]';
slideshowMessage['hr'] = 'slideshow [s]';
slideshowMessage['pt'] = 'slideshow [s]';
slideshowMessage['fr'] = 'slideshow [s]';
slideshowMessage['ru'] = 'slideshow [s]';


function getCloseMessage(objLink) {
	if (closeMessage['pl']) {
		return closeMessage['pl'];
	} else {
		return closeMessage['pl'];
	}
}

function getPressCloseMessage(objLink) {
	if (pressCloseMessage['pl']) {
		return pressCloseMessage['pl'];
	} else {
		return pressCloseMessage['pl'];
	}
}

function getPreviousMessage(objLink) {
	if (previousMessage['pl']) {
		return previousMessage['pl'];
	} else {
		return previousMessage['pl'];
	}
}

function getNextMessage(objLink) {
	if (nextMessage['pl']) {
		return nextMessage['pl'];
	} else {
		return nextMessage['pl'];
	}
}

function getSlideshowMessage(objLink) {
	if (slideshowMessage['pl']) {
		return slideshowMessage['pl'];
	} else {
		return slideshowMessage['pl'];
	}
}


//zmienne uzywane przez licznik zdjec

var picturesTab = null;
var actualIndex = null;

//wyswietla licznik zdjec
function counter(){
	var objSrc = document.getElementById('lightboxImage').src;
	if(objSrc != null){
		picturesTab = getPicturesIds(objSrc);
		var currentPicture = getCurrentPictureId(objSrc);
		for(var i = 0; picturesTab != null && i < picturesTab.length; i++){
			if(picturesTab[i] == currentPicture){
				actualIndex = i + 1;
			}
		}
		var counter = document.getElementById('counter');
		if(picturesTab != null){
			counter.innerHTML = actualIndex + "/" + picturesTab.length;
		}
	}
}
//
// getPageScroll()
// Returns array with x,y page scroll values.
// Core code from - quirksmode.org
//
function getPageScroll(){

	var yScroll;

	if (self.pageYOffset) {
		yScroll = self.pageYOffset;
	} else if (document.documentElement && document.documentElement.scrollTop){	 // Explorer 6 Strict
		yScroll = document.documentElement.scrollTop;
	} else if (document.body) {// all other Explorers
		yScroll = document.body.scrollTop;
	}

	arrayPageScroll = new Array('',yScroll)
	return arrayPageScroll;
}



//
// getPageSize()
// Returns array with page width, height and window width, height
// Core code from - quirksmode.org
// Edit for Firefox by pHaez
//
function getPageSize(){

	var xScroll, yScroll;

	if (window.innerHeight && window.scrollMaxY) {
		xScroll = document.body.scrollWidth;
		yScroll = window.innerHeight + window.scrollMaxY;
	} else if (document.body.scrollHeight > document.body.offsetHeight){ // all but Explorer Mac
		xScroll = document.body.scrollWidth;
		yScroll = document.body.scrollHeight;
	} else { // Explorer Mac...would also work in Explorer 6 Strict, Mozilla and Safari
		xScroll = document.body.offsetWidth;
		yScroll = document.body.offsetHeight;
	}

	var windowWidth, windowHeight;
	if (self.innerHeight) {	// all except Explorer
		windowWidth = self.innerWidth;
		windowHeight = self.innerHeight;
	} else if (document.documentElement && document.documentElement.clientHeight) { // Explorer 6 Strict Mode
		windowWidth = document.documentElement.clientWidth;
		windowHeight = document.documentElement.clientHeight;
	} else if (document.body) { // other Explorers
		windowWidth = document.body.clientWidth;
		windowHeight = document.body.clientHeight;
	}

	// for small pages with total height less then height of the viewport
	if(yScroll < windowHeight){
		pageHeight = windowHeight;
	} else {
		pageHeight = yScroll;
	}

	// for small pages with total width less then width of the viewport
	if(xScroll < windowWidth){
		pageWidth = windowWidth;
	} else {
		pageWidth = xScroll;
	}

	arrayPageSize = new Array(pageWidth,pageHeight,windowWidth,windowHeight)
	return arrayPageSize;
}


//
// pause(numberMillis)
// Pauses code execution for specified time. Uses busy code, not good.
// Code from /web/20150821021640/http://www.faqts.com/knowledge_base/view.phtml/aid/1602
//
function pause(numberMillis) {
	var now = new Date();
	var exitTime = now.getTime() + numberMillis;
	while (true) {
		now = new Date();
		if (now.getTime() > exitTime)
			return;
	}
}

//
// getKey(key)
// Gets keycode. If 'x' is pressed then it hides the lightbox.
// if 's' is pressed starts slideshow,
// if left arrow move to previous picture, if right arrow move to next picture

function getKey(e){
	if (e == null) { // ie
		keycode = event.keyCode;
	} else { // mozilla
		keycode = e.which;
	}
	key = String.fromCharCode(keycode).toLowerCase();
	 switch(keycode)
	 {
	  case 39: //right arrow
		move(1);
	    break;
	  case 37://left arrow
	    move(0);
	    break;
	  case 83: // s key
	  	{ prepareSlideshow(); }
		break;
	  case 88: //x key
	  	{ StopTheClock(); hideLightbox(); }
	  	break;
	 }
	//if(key == 'x'){ StopTheClock(); hideLightbox(); }
}


//
// listenKey()
//
function listenKey () {	document.onkeyup = getKey; }


//
// showLightbox()
// Preloads images. Pleaces new image in lightbox then centers and displays.
//
function showLightbox(objLink)
{
	// prep objects
	var objOverlay = document.getElementById('overlay');
	var objLightbox = document.getElementById('lightbox');
	var objCaption = document.getElementById('lightboxCaption');
	var objImage = document.getElementById('lightboxImage');
	var objLoadingImage = document.getElementById('loadingImage');
	var objLightboxDetails = document.getElementById('lightboxDetails');
	var objNavigation = document.getElementById('navigation');

	var arrayPageSize = getPageSize();
	var arrayPageScroll = getPageScroll();

	// center loadingImage if it exists
	if (objLoadingImage) {
		objLoadingImage.style.top = (arrayPageScroll[1] + ((arrayPageSize[3] - 35 - objLoadingImage.height) / 2) + 'px');
		objLoadingImage.style.left = (((arrayPageSize[0] - 20 - objLoadingImage.width) / 2) + 'px');
		objLoadingImage.style.display = 'block';
	}

	// set height of Overlay to take up whole page and show
	objOverlay.style.height = (arrayPageSize[1] + 'px');
	objOverlay.style.display = 'block';

	// preload image
	imgPreload = new Image();

	imgPreload.onload=function(){
		objImage.src = objLink.href;

		// center lightbox and make sure that the top and left values are not negative
		// and the image placed outside the viewport
		var lightboxTop = arrayPageScroll[1] + ((arrayPageSize[3] - 35 - imgPreload.height) / 2);
		var lightboxLeft = ((arrayPageSize[0] - 20 - imgPreload.width) / 2);

		objLightbox.style.top = (lightboxTop < 0) ? "0px" : lightboxTop + "px";
		objLightbox.style.left = (lightboxLeft < 0) ? "0px" : lightboxLeft + "px";

		objLightboxDetails.style.width = imgPreload.width + 'px';

		if(objLink.getAttribute('title')){
			objCaption.style.display = 'block';
			//objCaption.style.width = imgPreload.width + 'px';
			objCaption.innerHTML = objLink.getAttribute('title');
		} else {
			objCaption.style.display = 'none';
		}

		// A small pause between the image loading and displaying is required with IE,
		// this prevents the previous image displaying for a short burst causing flicker.
		if (navigator.appVersion.indexOf("MSIE")!=-1){
			pause(250);
		}

		if (objLoadingImage) {	objLoadingImage.style.display = 'none'; }

		// Hide select boxes as they will 'peek' through the image in IE
		selects = document.getElementsByTagName("select");
        for (i = 0; i != selects.length; i++) {
                selects[i].style.visibility = "hidden";
        }


		objLightbox.style.display = 'block';

		// After image is loaded, update the overlay height as the new image might have
		// increased the overall page height.
		arrayPageSize = getPageSize();
		objOverlay.style.height = (arrayPageSize[1] + 'px');

		// Check for 'x' keypress
		listenKey();


		//wyswietla licznik
		counter();
		if(picturesTab == null) {
			objNavigation.style.display = 'none';
		}
		return false;
	}
	imgPreload.src = objLink.href;

}

//
// hideLightbox()
//
function hideLightbox()
{
	StopTheClock();
	// get objects
	objOverlay = document.getElementById('overlay');
	objLightbox = document.getElementById('lightbox');

	// hide lightbox and overlay
	objOverlay.style.display = 'none';
	objLightbox.style.display = 'none';

	// make select boxes visible
	selects = document.getElementsByTagName("select");
    for (i = 0; i != selects.length; i++) {
		selects[i].style.visibility = "visible";
	}

	// disable keypress listener
	//document.onkeypress = '';
    document.onkeyup = '';

    var counter = document.getElementById('counter');
    counter.innerHTML = '';
}

//
//move to previous or next slide 0 previous element, 1 next element
// move(direction)
//
function move(direction)
{
	StopTheClock();
	var objSrc = document.getElementById('lightboxImage').src;

	//getting actual picture id
	var id = getCurrentPictureId(objSrc);

	//getting all pictures id's into gallery
	var tab = getPicturesIds(objSrc);

	var next = id;
	//get next picture id
	for(var i = 0; tab != null && i < tab.length; i++){
		if(direction == 1){
			if(tab[i] == id && i < tab.length - 1){
				next = tab[i + 1];
			}
		} else if(direction == 0){
			if(tab[i] == id && i > 0){
				next = tab[i - 1];
			}
		}
	}

	//build new picture element
	var newObj = createNewPicture(next, objSrc);

	showLightbox(newObj);
}

//
//creates new picture link based on original url to picture
//next - next picture id, objSrc - url of the picture
//return link to the new picture
//
function createNewPicture(next, objSrc)
{
	var newObj = document.createElement("a");

	if (!document.getElementsByTagName){ return; }
	var anchors = document.getElementsByTagName("a");

	// loop through all anchor tags
	for (var i=0; i<anchors.length; i++){
		var anchor = anchors[i];
		if (anchor.getAttribute("id") && anchor.getAttribute("rel") == "lightbox"){
			if(anchor.getAttribute("id") == "picture-"+next){
				newObj.setAttribute('title', anchor.getAttribute("title"));
			}
		}
	}
	//replace original picture id with new one
	var patt = /([0-9]+),show2/ig;
	var result = objSrc.replace(patt, next + ',show2');
	//var result = objSrc.substring(0, objSrc.indexOf("id") + 3) + next + objSrc.substring(objSrc.indexOf("id") + 3 + next.length);
	newObj.setAttribute('href', result);
	return newObj;
}

//
//gets current presenting picture id
//objSrc - url of current presenting picture
//return id of current presenting picture
//
function getCurrentPictureId(objSrc)
{
	var patt = /([0-9]+),show2/i;
	var res = objSrc.match(patt);
	return res[1];
//	var begin = objSrc.indexOf("id");
//	var end = (objSrc.substring(begin)).indexOf('&');
//	if(end == -1)
//		end = objSrc.length;
//	if(begin == -1 || end == -1)
//		return;

//	var id = objSrc.substring(begin+3, begin + end);
//	return id;
}

//
//gets all pictures in gallery
//objSrc url where from pictures id's are being get
//return array of all pictures id in the gallery
//
function getPicturesIds(objSrc){
	var begin = objSrc.indexOf("allId");
	var end = (objSrc.substring(begin+6, objSrc.length)).indexOf('&');
	if(end == -1)
		end = objSrc.length;
	if(begin == -1 || end == -1)
		return;

	var array = objSrc.substring(begin + 6, end);
	array = decodeURIComponent(array);
	var tab = array.split(',');
	return tab;
}

//
// initLightbox()
// Function runs on window load, going through link tags looking for rel="lightbox".
// These links receive onclick events that enable the lightbox display for their targets.
// The function also inserts html markup at the top of the page which will be used as a
// container for the overlay pattern and the inline image.
//
function initLightbox()
{

	if (!document.getElementsByTagName){ return; }
	var anchors = document.getElementsByTagName("a");

	// loop through all anchor tags
	for (var i=0; i<anchors.length; i++){
		var anchor = anchors[i];
		 
		if (anchor.getAttribute("href") && (anchor.getAttribute("rel") == "lightbox" || (anchor != null && anchor.getAttribute("class") != null && anchor.getAttribute("class").indexOf("lightbox") !=-1))){
			//alert("anchor " + anchor.getAttribute("href"));
			
			anchor.onclick = function () {showLightbox(this); return false;}
		}
	}

	// the rest of this code inserts html at the top of the page that looks like this:
	//
	//
	// <div id="overlay">
	//		<a href="#" onclick="hideLightbox(); return false;"><img id="loadingImage" /></a>
	//	</div>
	// <div id="lightbox">
	//		<div id="navigation">
	//			<a href="#" id="previous" onclick="move(0); return false;" title="poprzedni"><img src="" /></a>
	//			<a href="#" id="slideshow" onclick="prepareSlideshow(); return false;" title="pokaz slajdow"><img src="" /></a>
	//			<a href="#" id="next" onclick="move(1); return false;" title="nastepny"><img src="" /></a>
	//		</div>
	//		<a href="#" onclick="hideLightbox(); return false;" title="Click anywhere to close image">
	//			<img id="closeButton" />
	//			<img id="lightboxImage" />
	//		</a>
	//		<div id="lightboxDetails">
	//			<div id="lightboxCaption"></div>
	//			<div id="keyboardMsg"></div>
	//		</div>
	// </div>

	var objBody = document.getElementsByTagName("body").item(0);

	// create overlay div and hardcode some functional styles (aesthetic styles are in CSS file)
	var objOverlay = document.createElement("div");
	objOverlay.setAttribute('id','overlay');
	objOverlay.onclick = function () {hideLightbox(); return false;}
	objOverlay.style.display = 'none';
	objOverlay.style.position = 'absolute';
	objOverlay.style.top = '0';
	objOverlay.style.left = '0';
	objOverlay.style.zIndex = '90';
 	objOverlay.style.width = '100%';
	objBody.insertBefore(objOverlay, objBody.firstChild);

	var arrayPageSize = getPageSize();
	var arrayPageScroll = getPageScroll();

	// preload and create loader image
	var imgPreloader = new Image();

	// if loader image found, create link to hide lightbox and create loadingimage
	imgPreloader.onload=function(){

		var objLoadingImageLink = document.createElement("a");
		objLoadingImageLink.setAttribute('href','#');
		objLoadingImageLink.onclick = function () {hideLightbox(); return false;}
		objOverlay.appendChild(objLoadingImageLink);

		var objLoadingImage = document.createElement("img");
		objLoadingImage.src = loadingImage;
		objLoadingImage.setAttribute('id','loadingImage');
		objLoadingImage.style.position = 'absolute';
		objLoadingImage.style.zIndex = '150';
		objLoadingImageLink.appendChild(objLoadingImage);

		imgPreloader.onload=function(){};	//	clear onLoad, as IE will flip out w/animated gifs

		return false;
	}

	imgPreloader.src = loadingImage;

	// create lightbox div, same note about styles as above
	var objLightbox = document.createElement("div");
	objLightbox.setAttribute('id','lightbox');
	objLightbox.style.display = 'none';
	objLightbox.style.position = 'absolute';
	objLightbox.style.zIndex = '100';
	objBody.insertBefore(objLightbox, objOverlay.nextSibling);

	//create navigation box
	var objNavigation = document.createElement("div");
	objNavigation.setAttribute('id','navigation');
	objLightbox.appendChild(objNavigation);

	var counter = document.createElement("a");
	counter.setAttribute('id', 'counter');
	objNavigation.appendChild(counter);

	//create previous link
	var objPrevious = document.createElement("a");
	objPrevious.setAttribute('id','previous');
	objPrevious.setAttribute('href','#');
	objPrevious.setAttribute('title', getPreviousMessage(objLink));
	objPrevious.onclick = function () {move(0); return false;}
	objNavigation.appendChild(objPrevious);


	//preload and create previous button image
	var imgPreloadPreviousButton = new Image();

	// if close button image found,
	imgPreloadPreviousButton.onload=function(){

		var objPreviousButton = document.createElement("img");
		objPreviousButton.src = previousButton;
		objPrevious.appendChild(objPreviousButton);
		//o.appendChild(objPreviousButton);
		return false;
	}
	imgPreloadPreviousButton.src = previousButton;

	//create slideshow link
	var objSlides = document.createElement("a");
	objSlides.setAttribute('id','slideshow');
	objSlides.setAttribute('href','#');
	objSlides.setAttribute('title', getSlideshowMessage(objLink));
	objSlides.onclick = function () {prepareSlideshow(); return false;}
	objNavigation.appendChild(objSlides);

	//preload and create slideshow button image
	var imgPreloadSlideshowButton = new Image();

	// if close button image found,
	imgPreloadSlideshowButton.onload=function(){

		var objSlideshowButton = document.createElement("img");
		objSlideshowButton.src = slideshowButton;
		objSlides.appendChild(objSlideshowButton);
		return false;
	}
	imgPreloadSlideshowButton.src = slideshowButton;

	//create next link
	var objNext = document.createElement("a");
	objNext.setAttribute('id','next');
	objNext.setAttribute('href','#');
	objNext.setAttribute('title', getNextMessage(objLink));
	objNext.onclick = function () {move(1); return false;}
	objNavigation.appendChild(objNext);

	//	 preload and create next button image
	var imgPreloadNextButton = new Image();

	imgPreloadNextButton.onload=function(){

		var objNextButton = document.createElement("img");
		objNextButton.src = nextButton;
		objNext.appendChild(objNextButton);

		return false;
	}
	imgPreloadNextButton.src = nextButton;


	var objSeparator = document.createElement("br");
	objLightbox.appendChild(objSeparator);
	// create link
	var objLink = document.createElement("a");
	objLink.setAttribute('href','#');
	//objLink.setAttribute('title','Click to close');
	objLink.setAttribute('title', getCloseMessage(objLink));
	objLink.onclick = function () {StopTheClock(); hideLightbox(); return false;}
	objLightbox.appendChild(objLink);

	// preload and create close button image
	var imgPreloadCloseButton = new Image();

	// if close button image found,
	imgPreloadCloseButton.onload=function(){

		var objCloseButton = document.createElement("img");
		objCloseButton.src = closeButton;
		objCloseButton.setAttribute('id','closeButton');
		objCloseButton.style.position = 'absolute';
		objCloseButton.style.zIndex = '200';
		objLink.appendChild(objCloseButton);

		return false;
	}

	imgPreloadCloseButton.src = closeButton;

	// create image
	var objImage = document.createElement("img");
	objImage.setAttribute('id','lightboxImage');
	objLink.appendChild(objImage);

	// create details div, a container for the caption and keyboard message
	var objLightboxDetails = document.createElement("div");
	objLightboxDetails.setAttribute('id','lightboxDetails');
	objLightbox.appendChild(objLightboxDetails);

	// create caption
	var objCaption = document.createElement("div");
	objCaption.setAttribute('id','lightboxCaption');
	objCaption.style.display = 'none';
	objLightboxDetails.appendChild(objCaption);

	// create keyboard message
	var objKeyboardMsg = document.createElement("div");
	objKeyboardMsg.setAttribute('id','keyboardMsg');
	//objKeyboardMsg.innerHTML = 'press <a href="#" onclick="hideLightbox(); return false;"><kbd>x</kbd></a> to close';
	objKeyboardMsg.innerHTML = getPressCloseMessage(objLink);
	objLightboxDetails.appendChild(objKeyboardMsg);

}

//
// addLoadEvent()
// Adds event to window.onload without overwriting currently assigned onload functions.
// Function found at Simon Willison's weblog - /web/20150821021640/http://simon.incutio.com/
//
function addLoadEvent(func)
{
	var oldonload = window.onload;
	if (typeof window.onload != 'function'){
    	window.onload = func;
	} else {
		window.onload = function(){
		oldonload();
		func();
		}
	}

}

function prepareSlideshow()
{
	InitializeTimer();
}

function slideshow(){
	var objSrc = document.getElementById('lightboxImage').src;

	//getting actual picture id
	var id = getCurrentPictureId(objSrc);

	//get next picture
	if(picturesTab == null){
		StopTheClock();
		return;
	}
	var next = picturesTab[actualIndex++%picturesTab.length];

	//build new picture element
	var newObj = createNewPicture(next, objSrc)

	showLightbox(newObj);

}

//timer function

var secs=0;
var timerID = null;
var timerRunning = true;
var delay = 2000;

function InitializeTimer()
{
  secs = 1; // Set the initial delay
  timerRunning = true;
  StartTheTimer();
}

function StopTheClock()
{
  if (timerRunning)
  {
    clearTimeout(timerID);
    timerRunning = false;
  }
}

function StartTheTimer()
{
  if (secs==0)
  {
    secs = 2; //-OR- timerRunning=false;
    slideshow(); //call the function when time expires
  }
  //self.status = secs;
  secs = secs - 1;
  if (timerRunning)
  {
    timerID = self.setTimeout("StartTheTimer()", delay);
  }
}
//end timer function
addLoadEvent(initLightbox);	// run initLightbox onLoad