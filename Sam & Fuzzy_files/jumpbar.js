/* Hiveworks Comix Jumpbar Lite version 1.0
Copyright (c) 2008-2015 Kisai c/o PixieTrix Comix, all rights reserved.
This script has been written specificly for use on the Pixietrix/Hiveworks
sites and is not permitted to be used on any site other than those as
listed on the www.pixietrixcomix.com and www.thehiveworks website.

For any questions about the technical operation of this script please
contact kisai at kisai dot org

The hiveworks jumpbar header goes inside the html container of which it
is to appear.

*/

var U_NONE=0x0;
var U_SUNDAY=0x1;
var U_MONDAY=0x2;
var U_TUESDAY=0x4;
var U_WEDNESDAY=0x8;
var U_THURSDAY=0x10;
var U_FRIDAY=0x20;
var U_SATURDAY=0x40;
var U_RATINGR=0x400; //RATING R

var TZ_PST=0x1000; //offset 8
var TZ_MST=0x2000; //offset 7
var TZ_CST=0x4000; //offset 6
var TZ_EST=0x8000; //offset 5

var todaydom=new Date();
var prng_w = todaydom.getDate()*(todaydom.getHours()+1);
console.log(prng_w);
var prng_z = 987654321;
var prng_mask = 0xffffffff;

function hwrandom(){

    prng_z = (36969 * (prng_z & 65535) + (prng_z >> 16)) & prng_mask;
    prng_w = (18000 * (prng_w & 65535) + (prng_w >> 16)) & prng_mask;
    var result = ((prng_z << 16) + prng_w) & prng_mask;
    result /= 4294967296;
    return result + 0.5;
}

    var cstripdiv= document.createElement('div');
	cstripdiv.setAttribute('id','pixiestrip');
	cstripdiv.style.position="relative";
	cstripdiv.style.overflow="hidden";
	
	var acstripimg=document.createElement('img');
	acstripimg.setAttribute('width','74');
	acstripimg.setAttribute('height','43');
	acstripimg.setAttribute('border','0');
	acstripimg.style.border="0px";
	acstripimg.style.width="54px";
	acstripimg.style.height="43px";
if(typeof hwjumpadmode != 'undefined' ){
	acstripimg.style.margin="0px 0px 0px 0px";
	acstripimg.style.width="54px";
	acstripimg.style.height="43px";

}else{
	acstripimg.style.margin="3px 2px 3px 2px";
	acstripimg.style.width="54px";
	acstripimg.style.height="43px";


}
	acstripimg.style.left="0px";
	acstripimg.style.top="0px";
	//acstripimg.style.position="relative";
	
	acstripimg.setAttribute('src',"http://cdn.thehiveworks.com/images/Pixietrix_bar.png");
	acstripimg.setAttribute('id',"jumptocomicimg");
	var cstripdivbutton= document.createElement('div');
	cstripdivbutton.setAttribute('id','pixiestripbutton');
	cstripdivbutton.style.position="absolute";
	cstripdivbutton.style.left="70px";
	cstripdivbutton.style.top="0px";
	
	function movefbar(){
if(typeof hwjumpadmode != 'undefined' ){
for(var ih=0;ih<8;ih++){
	cstripdivbutton.insertBefore(cstripdivbutton.firstChild,cstripdivbutton.lastChild.nextSibling);

}

}else{
var ihmax=3;
if(typeof jumpbarmoveit != 'undefined'){ihmax=jumpbarmoveit; }
for(var ih=0;ih<ihmax;ih++){
	cstripdivbutton.insertBefore(cstripdivbutton.firstChild,cstripdivbutton.lastChild.nextSibling);


}



}

	}
	function moverbar(){
if(typeof hwjumpadmode != 'undefined' ){
for(var ih=0;ih<8;ih++){
	
	cstripdivbutton.insertBefore(cstripdivbutton.lastChild,cstripdivbutton.firstChild);
}
}else{
var ihmax=3;
if(typeof jumpbarmoveit != 'undefined'){ihmax=jumpbarmoveit; }
for(var ih=0;ih<ihmax;ih++){

	cstripdivbutton.insertBefore(cstripdivbutton.lastChild,cstripdivbutton.firstChild);
}

}
	}

function shufflebar(){
if(localStorage.getItem('hwshowall')=="true")
{
console.log("Not shuffling full jumpbox.");
}
else
{
var i;
var n = cstripdivbutton.childNodes.length;
while(n){
var xx=hwrandom();
i = Math.floor(xx * n--);
//console.log(n+" "+xx);
        cstripdivbutton.insertBefore(cstripdivbutton.childNodes[n], cstripdivbutton.childNodes[i]);
} 
}

}
	
	
	var cprevbar = document.createElement('img');
	cprevbar.setAttribute('src',"http://cdn.thehiveworks.com/images/prev_bar.png");
	cprevbar.setAttribute('width','9');
	cprevbar.setAttribute('height','43');
	cprevbar.setAttribute('border','0');
	cprevbar.style.position="absolute";
	cprevbar.style.left="58px";
	cprevbar.style.top="0px";
	cprevbar.style.border="0px";
	cprevbar.style.width="9px";
	cprevbar.style.height="43px";
	cprevbar.style.margin="3px 2px 3px 2px";
	cprevbar.onclick=moverbar;
	cprevbar.setAttribute('id','jumptocomicprev');
	
	
	
	var cnextbar=document.createElement('img');
	cnextbar.setAttribute('src',"http://cdn.thehiveworks.com/images/next_bar.png");
	cnextbar.setAttribute('width','9');
	cnextbar.setAttribute('height','43');
	cnextbar.setAttribute('border','0');
	
	cnextbar.style.position="absolute";
	cnextbar.style.right="0px";
	cnextbar.style.top="0px";
	
	
	
	cnextbar.style.border="0px";
	cnextbar.style.width="9px";
	cnextbar.style.height="43px";
	cnextbar.style.margin="3px 2px 3px 2px";
	cnextbar.onclick=movefbar;
	cnextbar.setAttribute('id','jumptocomicnext');
	
	
	
	cstripdiv.appendChild(acstripimg);
	cstripdiv.appendChild(cprevbar);
	cstripdiv.appendChild(cstripdivbutton);
	cstripdiv.appendChild(cnextbar);

function addpsite(a,b,c,d){
	//a= TextName
	//b= URL to site
	//c= button
	//d= update schedule
	var gofirst=false;
	var todaycurrent=new Date();
	var UTCDate=new Date();
	UTCDate.setTime(todaycurrent.getTime()+todaycurrent.getTimezoneOffset()*60000);
	var todaydow=new Date();
	var UTCoffset=-5;
	//Put code here for comic-specific timezones;

	if(d & TZ_PST){
	UTCoffset=-8;
	}
	if(d & TZ_MST){
	UTCoffset=-7;
	}
	if(d & TZ_CST){
	UTCoffset=-6;
	}
	if(d & TZ_EST){
	UTCoffset=-5;
	}
	todaydow.setTime(UTCDate.getTime()+UTCoffset*3600000);

	var bardefaults=false;
	if(todaydow.getDay()==0 &&(d & U_SUNDAY)){
		gofirst=true;
	}
	if(todaydow.getDay()==1 &&(d & U_MONDAY)){
		gofirst=true;
	}

	if(todaydow.getDay()==2 &&(d & U_TUESDAY)){
		gofirst=true;
	}

	if(todaydow.getDay()==3 &&(d & U_WEDNESDAY)){
		gofirst=true;
	}

	if(todaydow.getDay()==4 &&(d & U_THURSDAY)){
		gofirst=true;
	}
	if(todaydow.getDay()==5 &&(d & U_FRIDAY)){
		gofirst=true;
	}
	if(todaydow.getDay()==6 &&(d & U_SATURDAY)){
		gofirst=true;
	}

	

	if((typeof pxjumpbarrestricted != 'undefined') && (d & U_RATINGR)){c=undefined;}
	
	//new 20131023
	if((todaydow.getDay()>0 && todaydow.getDay()<6) && gofirst !=true )
	{ 
	    if(localStorage.getItem('hwshowall')=="true"){
	    }else{
	    c=undefined;
	    }
	    if(localStorage.getItem('alphatest')=="true")
	    {
	    console.log(a+" - Today is "+todaydow.getDay()+" and not showing for today. GMT:"+UTCDate.getTime()+" Offset:"+todaydow.getTime()+"\n");
	    }
	}
	else
	{
	    if(hwrandom()>0.5){
	    if(localStorage.getItem('alphatest')=="true"){console.log(a+" pre-shuffle \n"); }
	    //console.log("gofirst removed\n"); 
	    gofirst=false;
	    }
	    else
	    {
	    //console.log("gofirst ok\n"); 
	    gofirst=true;
	    }
	    
	    if(localStorage.getItem('alphatest')=="true")
	    {
	//	console.log(a+" is "+todaydow.getDay());
	    }
	}

	if(typeof c != 'undefined')
	{
	var cstriplink=document.createElement('a');
	cstriplink.setAttribute('href',b);
	cstriplink.setAttribute('target',"_blank");
	
	cstriplink.setAttribute('class','cstriplinks');
	if(typeof window._gaq!="undefined" ){cstriplink.setAttribute('onclick',"hivepix._link(\""+b+"\");return false;");}
	
	var cstripimg=document.createElement('img');
	if(localStorage.getItem('alphatest')=="true")
	{
    	    var Ustring="\n[";
	    if(d & U_SUNDAY){   Ustring=Ustring+"S|";}else{Ustring=Ustring+"-|";}
	    if(d & U_MONDAY){   Ustring=Ustring+"M|";}else{Ustring=Ustring+"-|";}
	    if(d & U_TUESDAY){  Ustring=Ustring+"T|";}else{Ustring=Ustring+"-|";}
	    if(d & U_WEDNESDAY){Ustring=Ustring+"W|";}else{Ustring=Ustring+"-|";}
	    if(d & U_THURSDAY){ Ustring=Ustring+"T|";}else{Ustring=Ustring+"-|";}
	    if(d & U_FRIDAY){   Ustring=Ustring+"F|";}else{Ustring=Ustring+"-|";}
	    if(d & U_SATURDAY){ Ustring=Ustring+"S"; }else{Ustring=Ustring+"-";}
    	    Ustring=Ustring+"]";
	    cstripimg.setAttribute('title',a+Ustring);
	}
	else
	{
    	    cstripimg.setAttribute('title',a);
	}
	cstripimg.setAttribute('width','73');
	cstripimg.setAttribute('height','43');
	cstripimg.setAttribute('border','1');
	cstripimg.style.border="1px solid white";
	cstripimg.style.width="73px";
	cstripimg.style.height="43px";
	if(typeof hwjumpadmode != 'undefined' )
	{
	    cstripimg.style.margin="0px 1px 0px 1px";
	}
	else
	{
	    cstripimg.style.margin="2px 1px 2px 1px";
	}	
	cstripimg.setAttribute('src',c);
	cstriplink.appendChild(cstripimg);
	
	if(gofirst==true)
	{
	    cstripimg.style.opacity="1.0";
	    cstripdivbutton.insertBefore(cstriplink,cstripdivbutton.firstChild);
	}
	else
	{
	    if(localStorage.getItem('hwshowall')=="true"){
	    cstripimg.style.opacity="0.75";
	    }
	    cstripdivbutton.appendChild(cstriplink);
	}
    }
}



function buildreportform()
{
    var formExist=document.getElementById("reportScript");
    if(typeof(formExist) != 'undefined' && formExist != null)
    	{
	console.log("Form Already loaded.");
        displayReportForm();
	}
	else
	{
        console.log("Loading Report Form");
	var formhead=document.getElementsByTagName('head')[0];
        var formscript=document.createElement('script');
	formscript.setAttribute('id','reportScript');
        formscript.src="//www.thehiveworks.com/reportDOM.js";
        formscript.type="text/javascript";
	formhead.appendChild(formscript);
	}
}

function loadOptions()
{
//Authorized options
var queryString = {};
var pxurl=window.location.href;
pxurl.replace(
    new RegExp("([^?=&]+)(=([^&]*))?", "g"),
    function($0, $1, $2, $3) { queryString[$1] = $3; }
);
if(queryString['alphatest']=="true" || localStorage.getItem('alphatest')=="true"){
if(localStorage.getItem('alphatest')==undefined || localStorage.getItem('alphatest')=="false" )
{
localStorage.setItem('alphatest',"true");
}
}

if(queryString['hwshowall']=="true" || localStorage.getItem('hwshowall')=="true"){
if(localStorage.getItem('hwshowall')==undefined || localStorage.getItem('hwshowall')=="false" )
{
localStorage.setItem('hwshowall',"true");
}
}

if(localStorage.getItem('alphatest')=="true")
{
//Test Whitelisted options
    if(localStorage.getItem('optionbar')=="true" || queryString['apikey']=="OB201310")
    {
	var optionhead=document.getElementsByTagName('head')[0];
        var optionscript=document.createElement('script');
	optionscript.setAttribute('id','optionbar');
        optionscript.src="http://www.thehiveworks.com/optionbar.js";
        optionscript.type="text/javascript";
	optionhead.appendChild(optionscript);
    }


}



if(queryString['alphatest']=="false")
    {
    if(localStorage.getItem('alphatest')=="true")
        {
    	    localStorage.setItem('alphatest',"false");
	}
    }

}



	

	function pixiebar(a){
		var pixieplace = document.getElementById(a);
		pixieplace.insertBefore(cstripdiv,pixieplace.firstChild);
	}
	//NAME IN HEADER,LINK IN BAR/HEADER, BAR IMAGE,UPDATE DAYS


	function buildbarheader(){
//DO NOT EDIT THIS PART -START-
var trackhow=0;
var gatrack=true;
if(typeof buzziness == "undefined" ){
//disable
gatrack=false;
}else{if(buzziness==false){gatrack=false;}}

if(gatrack==true){
if(typeof window._gaq=="undefined" ){
trackhow=1;
var _gaq = _gaq || [];
    var ga = document.createElement('script'); 
    ga.type = 'text/javascript'; 
    ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; 
    s.parentNode.insertBefore(ga, s);
window._gaq=_gaq;
  }

//console.log("GA"+trackhow);


if(typeof window._gaq !="undefined"){
trackhow=2;
  window._gaq.push(['hivepix._setAccount', 'UA-39177236-1']);
  window._gaq.push(['hivepix._setDomainName', 'none']);
  window._gaq.push(['hivepix._setAllowLinker', true]);
  window._gaq.push(['hivepix._setSampleRate', '100']);
  window._gaq.push(['hivepix._trackPageview']);
}


//Experimental
//console.log("GA"+trackhow);

/*  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','__gaJMPa');
            
  __gaJMPa('create', 'UA-39177236-1', 
  {
  'sampleRate':100,
  'name':'HiveMark',
  'alwaysSendReferrer':true,
  'allowLinker':true
  });
  __gaJMPa('HiveMark.send', 'pageview');
*/
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','__gaJMPb');
            
  __gaJMPb('create', 'UA-43318206-1', 
  {
  'sampleRate':100,
  'name':'HiveTech',
  'alwaysSendReferrer':true,
  'allowLinker':true
  });
  __gaJMPb('HiveTech.send', 'pageview');
                


//-END-
        
}


	//C&P from http://www.pixietrixcomix.com/pixieplus.js
	addpsite("Fragile","http://www.fragilestory.com/","http://uscdn.pixietrixcomix.com/images/FR_bar.png",U_TUESDAY|U_THURSDAY);
	addpsite("Dangerously Chloe","http://www.dangerouslychloe.com/","http://uscdn.pixietrixcomix.com/images/DC_bar.png",U_MONDAY|U_THURSDAY);
	addpsite("Eerie Cuties","http://www.eeriecuties.com/","http://uscdn.pixietrixcomix.com/images/EC_bar.png",U_MONDAY|U_WEDNESDAY);
	addpsite("Magick Chicks","http://www.magickchicks.com/","http://uscdn.pixietrixcomix.com/images/MC_bar.png",U_TUESDAY|U_FRIDAY);
	addpsite("Ma3 (Rated R)","http://www.menagea3.net/","http://uscdn.pixietrixcomix.com/images/MA3_bar.png",U_TUESDAY|U_THURSDAY|U_SATURDAY|U_RATINGR);
	addpsite("Vampire Cheerleaders","http://www.vampirecheerleaders.net/","http://cdn.pixietrixcomix.com/images/VC_bar.png");
	addpsite("Sticky Dilly Buns","http://www.stickydillybuns.com/","http://uscdn.pixietrixcomix.com/images/SDB_bar.png",U_MONDAY|U_FRIDAY);
	addpsite("Sandra On The Rocks","http://www.sandraontherocks.com/","http://uscdn.pixietrixcomix.com/images/SOTR_bar.png",U_TUESDAY|U_FRIDAY);

	addpsite("Candi","http://www.candicomics.com/","http://uscdn.pixietrixcomix.com/images/candi_jump.png",U_THURSDAY);


	//Alphabetical
	addpsite("Agents of the Realm","http://www.agentsoftherealm.com/","http://cdn.thehiveworks.com/images/aotrjump.jpg",U_THURSDAY,U_SUNDAY);
	addpsite("A Ghost Story","http://www.aghoststorycomic.com/","http://cdn.thehiveworks.com/images/aghoststory-73x43.png",U_WEDNESDAY,U_SATURDAY);
	addpsite("Alice and the Nightmare","http://aliceandthenightmare.com","http://cdn.thehiveworks.com/images/aliceandthenightmarejump.png",U_TUESDAY|U_FRIDAY);	
	addpsite("Amya Chronicles","http://www.amyachronicles.com/","http://cdn.thehiveworks.com/images/amyajump.jpg",U_MONDAY|U_WEDNESDAY);
	addpsite("Aquapunk","http://www.aquapunk.co/","http://cdn.thehiveworks.com/images/aquapunkjump.jpg",U_TUESDAY|U_THURSDAY);

	addpsite("Astral Aves","http://www.astralaves.com/","http://cdn.thehiveworks.com/images/astralavesjump.jpg",U_THURSDAY|U_FRIDAY);
	addpsite("Atomic Robo","http://www.atomic-robo.com/","http://cdn.thehiveworks.com/images/73x43_robo.png",U_MONDAY|U_WEDNESDAY|U_FRIDAY);
//b...?
	addpsite("Awaken","http://awakencomic.com","http://cdn.thehiveworks.com/images/awakenjump.png",U_MONDAY|U_WEDNESDAY|U_FRIDAY);	
	addpsite("The Black Brick Road of Oz","http://blackbrickroadofoz.com","http://cdn.thehiveworks.com/images/bbrozjump.png",U_SUNDAY);	
	addpsite("Between Failures","http://www.betweenfailures.com/","http://cdn.thehiveworks.com/images/bfjump.png",U_MONDAY|U_WEDNESDAY|U_FRIDAY);
	addpsite("Blaster Nation","http://www.blasternation.com/","http://cdn.thehiveworks.com/images/blasternationjump.png",U_WEDNESDAY|U_FRIDAY|U_SUNDAY|TZ_CST);
	addpsite("Black Grass","http://www.blackgrasscomic.com/","http://cdn.thehiveworks.com/images/blackgrassjump.png",U_MONDAY|U_WEDNESDAY|U_FRIDAY);
	addpsite("Blindsprings","http://www.blindsprings.com/","http://cdn.thehiveworks.com/images/blindspringsjump.png",U_TUESDAY|U_THURSDAY|U_SATURDAY);
	addpsite("Broken Telephone","http://www.broken-telephone.com/","http://cdn.thehiveworks.com/images/brokentele-jump.jpg",U_MONDAY|U_FRIDAY);
	addpsite("Broodhollow","http://www.broodhollow.com/","http://cdn.thehiveworks.com/images/bh-73x43.png",U_MONDAY);
    
	addpsite("Demon Aid","http://www.demonaidcomic.com/","http://cdn.thehiveworks.com/images/demonaid74x43.jpg",U_MONDAY);
	addpsite("Boumeries","http://www.boumeries.com/","http://cdn.thehiveworks.com/images/boumeriesjump.png",U_MONDAY|U_WEDNESDAY|U_FRIDAY);
	addpsite("The Boy Who Fell","http://www.boywhofell.com/","http://cdn.thehiveworks.com/images/tbwfjump.jpg",U_TUESDAY|U_FRIDAY);
//Cas...?
	addpsite("Channelate","http://www.channelate.com/","http://cdn.thehiveworks.com/images/channelatejump.png",U_MONDAY|U_WEDNESDAY|U_FRIDAY);	
	addpsite("Clique Refresh","http://www.cliquerefresh.com/","http://cdn.thehiveworks.com/images/cliquerefreshjump.jpg",U_TUESDAY,U_FRIDAY);
	addpsite("Clockwork","http://www.clockwork-comic.com/","http://cdn.thehiveworks.com/images/clockwork_73x43.png",U_WEDNESDAY);

	addpsite("Daughter of the Lilies","http://daughterofthelilies.com/","http://cdn.thehiveworks.com/images/73x43_DotL.jpg",U_TUESDAY|U_THURSDAY);
	addpsite("Dove Tail","http://www.dovetailcomic.com/","http://cdn.thehiveworks.com/images/Dovetail_73x43.jpg",U_MONDAY);
	addpsite("Demon Street","http://demonstreet.co/","http://cdn.thehiveworks.com/images/demonstreet.png",U_MONDAY,U_THURSDAY);
	addpsite("The Din","http://www.dincomic.com/","http://cdn.thehiveworks.com/images/TheDin_JumpBar_73x43.png",U_MONDAY,U_FRIDAY);

	addpsite("Dumbing of Age","http://www.dumbingofage.com/","http://cdn.thehiveworks.com/images/doa_willis.png",U_SUNDAY|U_MONDAY|U_TUESDAY|U_WEDNESDAY|U_THURSDAY|U_FRIDAY|U_SATURDAY);
	addpsite("El Goonish Shive","http://www.egscomics.com","http://cdn.thehiveworks.com/images/egsjmp.png",U_MONDAY|U_TUESDAY|U_WEDNESDAY|U_THURSDAY|U_FRIDAY);
	addpsite("The End.","http://www.endcomic.com/","http://cdn.thehiveworks.com/images/endjump.png",U_TUESDAY|U_FRIDAY);
	addpsite("6 Gun Mage","http://www.6gunmage.com/","http://cdn.thehiveworks.com/images/6gmjump.png",U_MONDAY|U_WEDNESDAY|U_FRIDAY);
	addpsite("Erstwhile","http://www.erstwhiletales.com/","http://cdn.thehiveworks.com/images/erst-jump.png",U_MONDAY|U_TUESDAY);
//fan...?
	addpsite("Far to the North","http://www.farnorthcomic.com/","http://cdn.thehiveworks.com/images/fartothenorth-jump.png",U_WEDNESDAY|U_SUNDAY);
	addpsite("Floraverse","http://www.floraverse.com/","http://cdn.thehiveworks.com/images/florahiveworksmintiny1.png",U_MONDAY|U_WEDNESDAY|U_FRIDAY);
	addpsite("Forgotten Order","http://www.forgottenordercomic.com/","http://cdn.thehiveworks.com/images/fojump.png",U_MONDAY);	
        addpsite("The Intrepid Girlbot","http://www.intrepidgirlbot.com/","http://cdn.thehiveworks.com/images/girlbotjumpbox.png",U_TUESDAY|U_FRIDAY); 
	addpsite("Ghost Junk Sickness","http://ghostjunksickness.com/","http://cdn.thehiveworks.com/images/ghostjunksickness-jump.jpg",U_MONDAY|U_FRIDAY);	
	addpsite("Girl Genius","http://www.girlgeniusonline.com/comic.php","http://cdn.thehiveworks.com/images/girlgeniusjump.jpg",U_MONDAY|U_WEDNESDAY|U_FRIDAY);	
	addpsite("Girls With Slingshots","http://www.girlswithslingshots.com/","http://cdn.thehiveworks.com/images/gwsjump.png",U_MONDAY|U_TUESDAY|U_WEDNESDAY|U_THURSDAY|U_FRIDAY);
        addpsite("Goblins","http://www.goblinscomic.org/","http://cdn.thehiveworks.com/images/goblinsjmp.jpg",U_MONDAY|U_RATINGR); 
//god...?
	addpsite("Go Get A Roomie (Rated R)","http://www.gogetaroomie.com/","http://cdn.thehiveworks.com/images/ggarjump.png",U_MONDAY|U_WEDNESDAY|U_FRIDAY|U_RATINGR);
	addpsite("Guilded Age","http://guildedage.net/","http://cdn.thehiveworks.com/images/guildedtiny.png",U_MONDAY|U_TUESDAY|U_WEDNESDAY|U_THURSDAY|U_FRIDAY);
//	addpsite("Gastrophobia","http://www.gastrophobia.com/","http://cdn.thehiveworks.com/images/gastrophobiajump.png",U_TUESDAY|U_THURSDAY);	
	addpsite("Harpy Gee","http://www.harpygee.com/","http://cdn.thehiveworks.com/images/harpygee_73x43.jpg",U_MONDAY);	
	addpsite("Headless Bliss","http://www.headlessbliss.com/","http://cdn.thehiveworks.com/images/headless_jump.png",U_TUESDAY|U_THURSDAY);	

	addpsite("Helvetica","http://helvetica.jnwiedle.com/","http://cdn.thehiveworks.com/images/jumpbox-helvetica.png",U_MONDAY);	

//he...?
//hi...?
	addpsite("Hijinks Ensue","http://hijinksensue.com/","http://cdn.thehiveworks.com/images/hijinksjmp.png",U_MONDAY|U_WEDNESDAY|U_FRIDAY);
        addpsite("I Am ARG","http://iamarg.com/","http://cdn.thehiveworks.com/images/argtiny.jpg",U_MONDAY|U_WEDNESDAY|U_FRIDAY);
	addpsite("Jailbird","http://an.oddlookingbird.com/","http://cdn.thehiveworks.com/images/anoddlookingbirdjump.png",U_MONDAY|U_FRIDAY);
//ju...?
	addpsite("Johnny Wander","http://www.johnnywander.com/","http://cdn.thehiveworks.com/images/JW-73x43.png",U_TUESDAY);
	addpsite("Kiwi Blitz","http://www.kiwiblitz.com/","http://cdn.thehiveworks.com/images/kbthumb.jpg",U_FRIDAY);
	addpsite("Knights Errant","http://sparklermonthly.com/series/knights-errant/","http://cdn.thehiveworks.com/images/knightserranthive_jump.jpg",U_FRIDAY);

	addpsite("Let's Speak English","http://www.marycagle.com","http://cdn.thehiveworks.com/images/lsejump.jpg",U_WEDNESDAY);	
//le...?

	addpsite("The Lonely Vincent Bellingham","http://lonelyvincent.com","http://cdn.thehiveworks.com/images/lonelyvincentjump.png",U_WEDNESDAY|U_FRIDAY);	
	addpsite("Lost Nightmare","http://www.lostnightmare.com","http://cdn.thehiveworks.com/images/lostnightmare_73x43.png",U_TUESDAY|U_FRIDAY);
	addpsite("Love Not Found","http://www.lovenotfound.com","http://cdn.thehiveworks.com/images/lovenotfoundjump.jpg",U_MONDAY|U_WEDNESDAY|U_FRIDAY);
	addpsite("Manly Guys Doing Manly Things","http://www.thepunchlineismachismo.com/","http://cdn.thehiveworks.com/images/manly.jpg",U_MONDAY);
	addpsite("The Mash","http://mashcomic.com","http://cdn.thehiveworks.com/images/mashjump.jpg",U_SATURDAY);		
	addpsite("The Meek","http://www.meekcomic.com","http://cdn.thehiveworks.com/images/meekjump.png",U_WEDNESDAY|U_FRIDAY);		
	addpsite("Metacarpolis","http://www.metacarpolis.com","http://cdn.thehiveworks.com/images/metajump.jpg",U_MONDAY|U_WEDNESDAY|U_FRIDAY);
	addpsite("Maximumble","http://maximumble.thebookofbiff.com","http://cdn.thehiveworks.com/images/maximumblejmp.png",U_MONDAY|U_WEDNESDAY|U_FRIDAY);
	addpsite("Mare Internvm","http://www.marecomic.com","http://cdn.thehiveworks.com/images/Mare_jump.png",U_MONDAY|U_FRIDAY);
	
	addpsite("Misfile","http://www.misfile.com","http://cdn.thehiveworks.com/images/misfilejump.jpg",U_MONDAY|U_TUESDAY|U_WEDNESDAY|U_THURSDAY|U_FRIDAY);
	addpsite("Monsterkind","http://monsterkind.enenkay.com/comic/latest","http://cdn.thehiveworks.com/images/monsterkindjump.png",U_TUESDAY|U_FRIDAY);	
	addpsite("Monster Pulse","http://www.monster-pulse.com","http://cdn.thehiveworks.com/images/monsterpulsejump.jpg",U_MONDAY|U_WEDNESDAY|U_FRIDAY);
	addpsite("Namesake","http://www.namesakecomic.com","http://cdn.thehiveworks.com/images/namesakejumpbar.jpg",U_TUESDAY|U_THURSDAY|U_SATURDAY);
	addpsite("Nerf NOW!!","http://nerfnow.com","http://cdn.thehiveworks.com/images/nerfnowjump.png",U_MONDAY|U_TUESDAY|U_WEDNESDAY|U_THURSDAY|U_FRIDAY);	
	addpsite("Nemu Nemu","http://www.nemu-nemu.com","http://cdn.thehiveworks.com/images/nemunemujump.png",U_MONDAY|U_WEDNESDAY|U_FRIDAY);	
	addpsite("Never Satisfied","http://www.neversatisfiedcomic.com","http://cdn.thehiveworks.com/images/NeverSatisfied_jump.png",U_MONDAY|U_FRIDAY);

	addpsite("No Need for Bushido","http://www.nn4b.com/","http://cdn.thehiveworks.com/images/nnfb-jump.png",U_MONDAY);	
	addpsite("Not Drunk Enough","http://www.nde-comic.com/","http://cdn.thehiveworks.com/images/NDE_jumpbox.jpg",U_TUESDAY|U_THURSDAY);	

//ne...?
	addpsite("Ode","http://www.odecomic.com","http://cdn.thehiveworks.com/images/odejump.jpg",U_MONDAY|U_WEDNESDAY);	
//	addpsite("Olympus Overdrive","http://www.olympusoverdrive.com","http://cdn.thehiveworks.com/images/74x47olym.png",U_MONDAY|U_WEDNESDAY|U_FRIDAY);
//O...?
//Pa...?
	addpsite("Paranatural","http://www.paranatural.net","http://cdn.thehiveworks.com/images/paranaturaljump.png",U_TUESDAY|U_FRIDAY);
	addpsite("Parallax","http://www.parallaxcomic.com","http://cdn.thehiveworks.com/images/parallax73x43.png",U_MONDAY,U_WEDNESDAY);
//	addpsite("Petunia Violet","http://www.petuniaviolet.com","http://cdn.thehiveworks.com/images/petuniaviolet-jump.png",U_TUESDAY|U_THURSDAY);
	addpsite("Peritale","http://www.peritale.com","http://cdn.thehiveworks.com/images/peritale-jumpbox.png",U_WEDNESDAY|U_THURSDAY|U_FRIDAY|U_SATURDAY);

	addpsite("Platinum Black","http://platinumblackcomic.com","http://cdn.thehiveworks.com/images/platinumblackjump.png",U_WEDNESDAY);	
	addpsite("Prague Race","http://praguerace.com","http://cdn.thehiveworks.com/images/praguerace_jump.png",U_MONDAY|U_WEDNESDAY|U_FRIDAY);	


	addpsite("Quick$ilver","http://www.quicksilvercomic.com/","http://cdn.thehiveworks.com/images/qs73x43.png",U_TUESDAY);
	addpsite("Red String","http://www.redstring.strawberrycomics.com/","http://cdn.thehiveworks.com/images/redstringjump.png",U_NONE);
	//addpsite("The Rock Cocks","http://therockcocks.com","http://cdn.thehiveworks.com/images/rockcocksjump.png",U_TUESDAY|U_THURSDAY|U_RATINGR);	

	addpsite("Revolution","http://revolution.boumerie.com","http://cdn.thehiveworks.com/images/revolution-jump.png",U_TUESDAY|U_THURSDAY);	
	addpsite("Run Freak Run","http://www.runfreakrun.com","http://cdn.thehiveworks.com/images/runfreakrunjump.jpg",U_TUESDAY|U_THURSDAY);	
	addpsite("Saint for Rent","http://www.saintforrent.com","http://cdn.thehiveworks.com/images/sfrjump.png",U_MONDAY|U_TUESDAY|U_FRIDAY);
	addpsite("Sakana","http://www.sakana-comic.com","http://cdn.thehiveworks.com/images/sakana_jump.png",U_TUESDAY|U_FRIDAY);

	addpsite("Sam and Fuzzy","http://www.samandfuzzy.com","http://cdn.thehiveworks.com/images/samandfuzzyjump.png",U_MONDAY|U_WEDNESDAY|U_FRIDAY);
	addpsite("Scenes from a Multiverse","http://amultiverse.com","http://cdn.thehiveworks.com/images/multiverse_jumpbar.png",U_MONDAY|U_WEDNESDAY|U_FRIDAY);
//sc...?
//sh...?
//sh...?

	addpsite("Sfeer Theory","http://sfeertheory.littlefoolery.com/","http://cdn.thehiveworks.com/images/sfeer_73x43.png",U_FRIDAY);
	addpsite("Sharksplode","http://www.sharksplode.com","http://cdn.thehiveworks.com/images/sharksplode_jumpbar.png",U_MONDAY|U_TUESDAY|U_WEDNESDAY|U_THURSDAY);

	addpsite("Sister Claire","http://www.sisterclaire.com/","http://cdn.thehiveworks.com/images/sisterclairejump.png",U_MONDAY|U_WEDNESDAY|U_FRIDAY);
	addpsite("Skullkickers","http://comic.skullkickers.com/","http://cdn.thehiveworks.com/images/skullkickersjump.png",U_MONDAY|U_WEDNESDAY|U_FRIDAY);
	addpsite("Sleepless Domain","http://www.sleeplessdomain.com/","http://cdn.thehiveworks.com/images/sleeplessdomain-jump.png",U_TUESDAY|U_THURSDAY);
	addpsite("Slightly Damned","http://www.sdamned.com/","http://cdn.thehiveworks.com/images/slightlydamned73x43.png",U_SATURDAY);

	addpsite("Snow By Night","http://www.snowbynight.com/","http://cdn.thehiveworks.com/images/snowbynightjump.png",U_MONDAY|U_WEDNESDAY|U_FRIDAY);
	addpsite("Sparkler","http://www.sparklermonthly.com/","http://cdn.thehiveworks.com/images/sparklerhive_3.jpg",U_MONDAY|U_TUESDAY|U_WEDNESDAY|U_THURSDAY|U_FRIDAY);

	addpsite("Spiddrelli","http://www.spiddrelli.net/","http://cdn.thehiveworks.com/images/spidjump.png",U_WEDNESDAY|TZ_PST);
	addpsite("Spinnerette","http://www.spinnyverse.com/","http://cdn.thehiveworks.com/images/spin_74.jpg",U_MONDAY|U_WEDNESDAY|U_FRIDAY);
	addpsite("Solstoria","http://www.solstoria.net","http://cdn.thehiveworks.com/images/solsoriajump.png",U_WEDNESDAY);
	addpsite("Stand Still. Stay Silent","http://www.sssscomic.com/","http://cdn.thehiveworks.com/images/ssssjump.jpg",U_MONDAY|U_TUESDAY|U_THURSDAY|U_FRIDAY);

	addpsite("Star Hammer","http://www.starhammercomic.com/","http://cdn.thehiveworks.com/images/Jumpbar_starhammer.png",U_MONDAY|U_FRIDAY);
	addpsite("Star Trip","http://www.startripcomic.com/","http://cdn.thehiveworks.com/images/startripjump.png",U_SATURDAY|U_TUESDAY|U_THURSDAY);
	addpsite("Street Fighter","http://www.streetfightercomics.com/","http://cdn.thehiveworks.com/images/sf2_73x43_jumpbox.png",U_MONDAY|U_WEDNESDAY|U_FRIDAY);
	addpsite("Sufficiently Remarkable","http://www.sufficientlyremarkable.com/","http://cdn.thehiveworks.com/images/surejump.jpg",U_MONDAY|U_FRIDAY);
	addpsite("Supernormal Step","http://www.supernormalstep.com/","http://cdn.thehiveworks.com/images/supernormaljump.png",U_MONDAY|U_WEDNESDAY|U_FRIDAY);
//To..?
	addpsite("The Glass Scientists","http://www.theglassscientists.com","http://cdn.thehiveworks.com/images/theglassscientists-jump.png",U_MONDAY);
	addpsite("The Last Diplomat","http://www.thelastdiplomat.com","http://cdn.thehiveworks.com/images/lastdiplomat_jump.jpg",U_TUESDAY);

	addpsite("The Well by the House on the House on the Hill","http://www.maricomics.com","http://cdn.thehiveworks.com/images/thewellbythehousonthehill.png",U_SATURDAY);

	addpsite("Three Panel Soul","http://www.threepanelsoul.com","http://cdn.thehiveworks.com/images/TPS_73x43.png",U_MONDAY);
	addpsite("This is Not Fiction","http://www.thisisnotfiction.com","http://cdn.thehiveworks.com/images/thisisnotfiction73x43.png",U_TUESDAY,U_FRIDAY);
	addpsite("Trying Human","http://www.tryinghuman.com/","http://cdn.thehiveworks.com/images/tryinghumanjump.png",U_TUESDAY|U_THURSDAY);
	addpsite("Technicolor London","http://www.technicolorlondoncomic.com/","http://cdn.thehiveworks.com/images/tljump.jpg",U_TUESDAY|U_WEDNESDAY|U_FRIDAY);	
	addpsite("The Last Nerds on Earth","http://www.lastnerdsonearth.com/","http://cdn.thehiveworks.com/images/lnoejump.png",U_MONDAY|U_FRIDAY);
	addpsite("Tove","http://www.tovecomic.com/","http://cdn.thehiveworks.com/images/tovejump.jpg",U_MONDAY|U_WEDNESDAY);
	addpsite("Two Guys and Guy","http://www.twogag.com/","http://cdn.thehiveworks.com/images/twogagjump.png",U_MONDAY|U_WEDNESDAY|U_FRIDAY);
	addpsite("Vibe","http://www.vibecomic.com/","http://cdn.thehiveworks.com/images/vibejump.jpg",U_TUESDAY);
	addpsite("Whomp!","http://www.whompcomic.com/","http://cdn.thehiveworks.com/images/whomp73x43.png",U_MONDAY|U_WEDNESDAY|U_FRIDAY);
	addpsite("White Noise","http://www.white-noise-comic.com/","http://cdn.thehiveworks.com/images/jumpbox_whitenoise.jpg",U_SUNDAY);

	addpsite("Wilde Life","http://wildelifecomic.com","http://cdn.thehiveworks.com/images/wildelifejump.jpg",U_MONDAY|U_THURSDAY);	
	addpsite("Weregeek","http://weregeek.com","http://cdn.thehiveworks.com/images/weregeek_jump.png",U_MONDAY|U_TUESDAY|U_WEDNESDAY|U_THURSDAY|U_FRIDAY);	
//	addpsite("Wizard School","http://www.meetmyminion.com/","http://cdn.thehiveworks.com/images/minionjump.jpg",U_MONDAY|U_WEDNESDAY|U_FRIDAY);
	addpsite("Yellow Peril","http://www.ypcomic.com/","http://cdn.thehiveworks.com/images/ypjump.png",U_MONDAY|U_WEDNESDAY|U_FRIDAY);	
	addpsite("Zombie Roomie","http://www.zombieroomie.com/","http://cdn.thehiveworks.com/images/zombieroomiejump.png",U_MONDAY|U_TUESDAY|U_WEDNESDAY|U_THURSDAY|U_FRIDAY);


//show first by being last in the list... unlesss shuffled


window.addEventListener("keydown", function(e){

    //is comiccontrol?
    var cccheck=document.getElementById("cc-comic");
//console.log(cccheck);
    if(cccheck != null)
    {
    console.log("ComicControl Key Navigation allowed");
	if (e.keyCode == "27") 
	{
	    window.location=window.location.origin;    
	}
	if (e.keyCode == "37") 
	{
	    if(document.getElementsByClassName("prev")[0] != undefined){window.location=document.getElementsByClassName("prev")[0].href;}
	}
	if (e.keyCode == "39") 
	{
	    if(document.getElementsByClassName("next")[0] != undefined){window.location=document.getElementsByClassName("next")[0].href;}
	}
    }
}, true);
}
	


function revealhiddentext(a)
{
if("ontouchstart" in window || navigator.msMaxTouchPoints){
//where a is the comic id usually "comic"
var findcomic = document.getElementById(a);

var ihidden=document.createElement('p');
ihidden.setAttribute('id','hwhiddentext');
ihidden.style.cssText="position:absolute;z-index:9001;left:40%;top:50%;width:250px;min-height:42px;border-radius: 15px;box-shadow: 0px 0px 15px #ffffff;background:white;padding: 15px;font-size: 20px;font-family: Tahoma, verdana, arial, sans-serif;opacity:0.0";
ihidden.style.transitionTimingFunction="ease-in-out";
ihidden.style.transitionDuration="1s";
ihidden.style.transitionProperty="opacity";

console.log("Looking for "+a);

if(findcomic.hasAttribute("title"))
{
//console.log("found(title): "+findcomic.getAttribute("title"));
var hiddentextdatatitle=document.createTextNode(findcomic.getAttribute("title"));
ihidden.appendChild(hiddentextdatatitle);

}
else if(findcomic.hasAttribute("alt")){
//console.log("found(alt): "+findcomic.getAttribute("alt"));
var hiddentextdataalt=document.createTextNode(findcomic.getAttribute("alt"));
ihidden.appendChild(hiddentextdataalt);
}
else
{
//for broken cms.
findcomic = document.getElementById(a).getElementsByTagName('img')[0];
var hiddentextdatatitle=document.createTextNode(findcomic.getAttribute("title"));
ihidden.appendChild(hiddentextdatatitle);

}


//and this part throws it in front of everything

var ihiddenbox=document.createElement('div');
ihiddenbox.setAttribute('id','hwhiddenbox');
ihiddenbox.style.cssText="background:black;opacity:0.0;margin:0 0px;position:absolute;z-index:9000;width:100%;height:100%";
ihiddenbox.style.transitionTimingFunction="ease-in-out";
ihiddenbox.style.transitionDuration="1s";
ihiddenbox.style.transitionProperty="opacity";

ihiddenbox.onclick=function(){
document.getElementById("hwhiddentext").style.opacity="0";
document.getElementById("hwhiddenbox").style.opacity="0";

    window.setTimeout(function(){
    document.body.removeChild(document.getElementById("hwhiddentext"));
    document.body.removeChild(document.getElementById("hwhiddenbox"));
    },1000);

};

document.body.insertBefore(ihiddenbox,document.body.firstChild);
document.body.insertBefore(ihidden,document.body.firstChild);
    window.setTimeout(function(){

document.getElementById("hwhiddentext").style.opacity="1.0";
document.getElementById("hwhiddenbox").style.opacity="0.7";
    },100);
}
else{

    }

}

function breakbadtoys(){
    var cccheck=document.getElementById("cc-comic");
//console.log(cccheck);
    if(cccheck != null){

//script kiddies and malware break html standards
var St = document.getElementsByTagName('style');
for( var x = 0; St[x]; x++ ) 
{
    if(St[x].parentNode!=document.head)
    {
    
	St[x].parentNode.removeChild(St[x]);
    }
}

}

//unauthorized third party tools
if (localStorage.getItem("cherryReadMode") === null) {
 
}else{localStorage.removeItem("cherryReadMode");}

if(document.getElementById("wcr_div"))
{
var rqz=document.getElementById("wcr_div");
rqz.id="c"+(Math.ceil(Math.random() * 65535)-1)+"";
var brqz=document.getElementById("wcr_imagen");
brqz.id="c"+(Math.ceil(Math.random() * 65535)-1)+"";

}

}


	buildbarheader();
shufflebar();
pixiebar("ibar");
loadOptions();
window.addEventListener("load",breakbadtoys,true);