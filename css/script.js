
/***********************************************************
*	Menu Script
***********************************************************/

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.0
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && document.getElementById) x=document.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}



/***********************************************************
*	Menu Layer Script
***********************************************************/
window.onerror = null;
 var bName = navigator.appName;
 var bVer = parseInt(navigator.appVersion);
 var NS4 = (bName == "Netscape" && bVer >= 4);
 var IE4 = (bName == "Microsoft Internet Explorer" && bVer >= 4);
 var NS3 = (bName == "Netscape" && bVer < 4);
 var IE3 = (bName == "Microsoft Internet Explorer" && bVer < 4);
 var menuActive = 0
 var menuOn = 0
 var onLayer
 var timeOn = null
 var loaded = 0


// LAYER SWITCHING CODE
if (NS4 || IE4) {
 if (navigator.appName == "Netscape") {
  layerStyleRef="layer.";
  layerRef="document.layers";
  styleSwitch="";
  }else{
  layerStyleRef="layer.style.";
  layerRef="document.all";
  styleSwitch=".style";
 }
}


function layershow(){
   var i, visStr, args, theObj;
   args = layershow.arguments;

   for (i=0; i<(args.length-2); i+=3) {
      visStr   = args[i+2];

      if (navigator.appName == 'Netscape' && document.layers != null) {
          theObj = eval(args[i]);
          if (theObj) theObj.visibility = visStr;
      } else if (document.all != null) {
          if (visStr == 'show') visStr = 'visible';
          if (visStr == 'hide') visStr = 'hidden';
          theObj = eval(args[i+1]);
          if (theObj) theObj.style.visibility = visStr;
      }
   }
}



// SHOW MENU
function showLayer(layerName){
if (NS4 || IE4) {
 if (timeOn != null) {
  clearTimeout(timeOn)
  hideLayer(onLayer)
 }
 if (NS4 || IE4) {
    eval(layerRef+'["'+layerName+'"]'+styleSwitch+'.visibility="visible"');
 }
 onLayer = layerName
}
//	document.listForm.brandName.style.display = 'none';
//	document.listForm.ordertitle.style.display = 'none';

}

// HIDE MENU
function hideLayer(layerName){
 if (menuActive == 0) {
  if (NS4 || IE4) {
   eval(layerRef+'["'+layerName+'"]'+styleSwitch+'.visibility="hidden"');
  }
 }
	//document.listForm.brandName.style.display = '';
	//document.listForm.ordertitle.style.display = '';
}


// TIMER FOR BUTTON MOUSE OUT
function btnTimer() {
menuActive=0
 timeOn = setTimeout("btnOut()",300)
}

// BUTTON MOUSE OUT
function btnOut(layerName) {
menuActive=0
 if (menuActive == 0) {
  hideLayer(onLayer)
  }
}

// MENU MOUSE OVER
function menuOver(itemName) {
 clearTimeout(timeOn)
 menuActive = 1
// if (NS4 || IE4) {
//    if (NS4) {
//    document[onLayer].document.images[itemName].src = menu2.src
// } else {
//    document.all[itemName].src = menu2.src
// }
//}
}

// MENU MOUSE OUT
function menuOut(itemName) {
 menuActive = 0
// if (NS4 || IE4) {
//   if (NS4) {
//   document[onLayer].document.images[itemName].src = menu1.src
//  }
//   else {
//   document.all[itemName].src = menu1.src
// }
//}
  timeOn = setTimeout("hideLayer(onLayer)", 300)
 }




/************************************************************
* Link Blur Script 시작 -- 링크 점선 테두리 없애기
************************************************************/

function allblur()	{
	for (i = 0; i < document.links.length; i++)
		document.links[i].onfocus = document.links[i].blur;
}

allblur();
window.onload=new Function("allblur()");


/************************************************************
* 팝업창 띄우기
************************************************************/
function popWin(url,winname,wwidth,wheight)
{
	var conWidth = wwidth; conHeight = wheight;

	if(wwidth == null && wheight == null)
	{
		conWidth = 100;
		wHeight = 150;
	}
//	alert("초기 너비 :" + conWidth + "\n높이 :" + conHeight);
	conWidth = (screen.Width) / 2 - conWidth;
	conHeight = (screen.Height) / 2 - conHeight;
//	alert("설정 너비 :" + conWidth + "\n높이 :" + conHeight);
	focusWin= window.open(url,winname,'left=' + conWidth + ',top=' + conHeight + ',width=' + wwidth + ',height=' + wheight + ',scrollbars=no,resizable=no');
	focusWin.focus();
}

/************************************************************
* 메일 윈도우 띄우기
************************************************************/
function mailwin(URL) {
	var str = "left=0,top=0,width=843,height=600,menubar=0,resizable=1,toolbar=0,location=0,status=1,scrollbars=1,screenx=50,screeny=10";
//	var str = "width=843,height=600";
//	focusWin3=window.open(URL,'mailwin','width=843,height=600,resizable=yes,scrollbars=yes');
    var win = null;
    win = window.open(URL,"mailwin", str);
	win.focus();
}

function outlookwin(URL) {
	focusWin4=window.open(URL,'outlook','resizable=yes, scrollbars=yes,status=0,width=660,height=500');
	focusWin4.focus();
}