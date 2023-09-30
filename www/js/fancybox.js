$(function() {
	var isVideoTriggeredFlag = false;
	var bc_popupContainer = "<div id='videoOverlayContainer'><div id='int_videoFrame'><div class='containing-block'><a class='videoOverlayContainerClose'></a><div class='inner-container'></div></div> </div></div>";
	$("body").on("click","a.fancybox",function(e){
		if(!isVideoTriggeredFlag){
			isVideoTriggeredFlag = true;
			e.preventDefault();
			 if (typeof e.stopPropagation == "function") {
				e.stopPropagation();
			} else {
				e.cancelBubble = true;
			}
			var crrnt_href = $(this).attr("href");
			var videoid = /bctid=/g.test(crrnt_href)?crrnt_href.split("bctid=")[1]:(/videoId=/g.test(crrnt_href)?crrnt_href.split("videoId=")[1]: "");
			if(videoid){
				videoid = videoid.split("&")[0];
			}
			$("body").append(bc_popupContainer);	
			// namespace to keep the global clear of clutter
			var BCL = {};
			var myPlayer,
				playerHTML,
				playerData = {
				'accountId': '21712694001',
				'playerId': 'Sypf9RNV',
				'videoId': videoid
				};
			
			if(crrnt_href.match(/\/[0-9]{11}\//) != null){
				var crrnt_accountID = crrnt_href.match(/\/[0-9]{11}\//)[0];
				crrnt_accountID = crrnt_accountID.replace(/[\|/]/g,"");
				if(playerData.accountId != crrnt_accountID){
					playerData.accountId  = crrnt_accountID;
					if(/_default\//.test(crrnt_href)){					
						var crrnt_playerID = crrnt_href.split("_default/")[0];
						playerData.playerId = crrnt_playerID.split(playerData.accountId +"/")[1];
					}
				}
			}

			BCL.addPlayer = function () {
				// dynamically build the player video element
				playerHTML = "<div style=\"display: block; position: relative; max-width: 100%;\"><div style=\"padding-top: 56.25%;\">";
				playerHTML += '<video id=\"lightbox_bcvideo\" data-account=\"' + playerData.accountId + '\" data-video-id=\"' + playerData.videoId + '\" data-player=\"' + playerData.playerId + '\" data-embed=\"default\" class=\"video-js\" controls preload="auto" autoplay style="width: 100%; height: 100%; position: absolute; top: 0px; bottom: 0px; right: 0px; left: 0px;"></video>';	
				playerHTML += "</div></div>";
				// inject the player code into the DOM
				$("#int_videoFrame .inner-container").html(playerHTML);
				// add and execute the player script tag
				var s = document.createElement('script');
				s.src = "//players.brightcove.net/" + playerData.accountId + "/" + playerData.playerId + "_default/index.min.js?"+new Date().getTime();
				document.body.appendChild(s);
				s.onload= callback;
			}
			
			function callback(){
				bindVideoTrackers(videojs("lightbox_bcvideo"));
			}
		
			BCL.addPlayer();				
			resizePlayer();
			repositionPlayer();
		}else{return false;}
	});

	$("a.videoOverlayContainerClose").on("click",function(e){
		e.preventDefault();
		if($("#videoOverlayContainer").length > 0){
			isVideoTriggeredFlag = false;
			videojs("lightbox_bcvideo").dispose();
			$("#videoOverlayContainer").remove();
		}
	});

	$('body').on('click', '#videoOverlayContainer', function(e) {
		if(e.target.id == "int_videoFrame" || e.target.id == "videoOverlayContainer" || e.target.className == "videoOverlayContainerClose"){
			isVideoTriggeredFlag = false;
			videojs("lightbox_bcvideo").dispose();
			$(this).remove();
		};
	});

	$(window).on("orientationchange",function(){
		repositionPlayer();
	});
});

// Binding events to the new HTML5 Video Player
$(document).ready(function() {
	if(typeof(videojs) == "function"){
		$.each(videojs.players,function(){bindVideoTrackers(this)});
	}
});

function bindVideoTrackers(vidEl){
		vidEl["percentsAlreadyTracked"] = [];
		var eventCategory="Videos", eventLabel="", eventAction="";
		loaded = function () {
			//eventLabel = vidEl.mediainfo.id + ':' + vidEl.mediainfo.name;
			eventLabel = vidEl.mediainfo.name;
			//utag.link({"ga_eventCategory": eventCategory, "ga_eventLabel": eventLabel, "ga_eventAction": 'load'});
			//trackGaEvent ("Videos", "load", eventLabel);
		};
		timeupdate = function () {
			var currentTime, duration, percent, percentPlayed, _i;
			currentTime = Math.round(vidEl.currentTime());
			duration = Math.round(vidEl.duration());
			percentPlayed = Math.round(currentTime / duration * 100);
			var trackingPosArr = [25,50,75,90,95,100];
			trackingPosArr = trackingPosArr.sort();
			eventLabel = vidEl.mediainfo.name;
			if (percentPlayed !== 0) {
				for(var i=0;i<trackingPosArr.length;i++){
					if((percentPlayed == trackingPosArr[i] && vidEl.percentsAlreadyTracked.indexOf(trackingPosArr[i]) == -1)|| (percentPlayed > trackingPosArr[i] && vidEl.percentsAlreadyTracked.indexOf(trackingPosArr[i]) == -1)){
						vidEl.percentsAlreadyTracked.push(trackingPosArr[i]);
						trackGaEvent ("Videos", "video:"+trackingPosArr[i]+"% complete", eventLabel); 
						//utag.link({"ga_eventCategory": eventCategory, "ga_eventLabel": eventLabel, "ga_eventAction": 'play:'+percent, "video_25" : 1});
					}
				}
			}			
		};
		end = function () {
			eventLabel = vidEl.mediainfo.id + ':' + vidEl.mediainfo.name;
			//utag.link({"ga_eventCategory": eventCategory, "ga_eventLabel": eventLabel, "ga_eventAction": 'complete', 'video_100':1});							
		};
		play = function () {
			eventLabel = vidEl.mediainfo.name;
			//utag.link({"ga_eventCategory": eventCategory, "ga_eventLabel": eventLabel, "ga_eventAction": 'play'});
			trackGaEvent ("Videos", "video: play", eventLabel);
		};
		pause = function () {
			eventLabel = vidEl.mediainfo.id + ':' + vidEl.mediainfo.name;
			//utag.link({"ga_eventCategory": eventCategory, "ga_eventLabel": eventLabel, "ga_eventAction": 'pause'});							
		};
		resize = function () {
			eventLabel = vidEl.mediainfo.id + ':' + vidEl.mediainfo.name;
			//utag.link({"ga_eventCategory": eventCategory, "ga_eventLabel": eventLabel, "ga_eventAction": 'Resize'});							
		};
		error = function () {
			eventLabel = vidEl.mediainfo.id + ':' + vidEl.mediainfo.name;
			//utag.link({"ga_eventCategory": eventCategory, "ga_eventLabel": eventLabel, "ga_eventAction": 'error'});							
		};
		fullscreen = function () {
			eventLabel = vidEl.mediainfo.id + ':' + vidEl.mediainfo.name;
			//utag.link({"ga_eventCategory": eventCategory, "ga_eventLabel": eventLabel, "ga_eventAction": 'fullscreen'});							
		};
							
	  vidEl.on("loadedmetadata", loaded);
	  vidEl.on("timeupdate", timeupdate);
	  vidEl.on("ended", end);
	  vidEl.on("play", play);
	  vidEl.on("pause", pause);
	//vidEl.on("volumechange", volumeChange);
	  vidEl.on("resize", resize);
	  vidEl.on("error", error);
	  vidEl.on("fullscreenchange", fullscreen);
}

function resizePlayer(){
	var screenHeight = window.innerHeight - 50;
	var screenWidth = window.innerWidth;
	var playerHeight = $("#int_videoFrame .containing-block").height();
	var playerWidth = $("#int_videoFrame .containing-block").width();
	if(playerHeight >= screenHeight || (playerHeight+50) < screenHeight || playerWidth > screenWidth*0.80){
		var newPlayerWidth = (playerWidth/playerHeight)*screenHeight;	
		var optPlayerWidth = screenWidth*0.80;
		if(newPlayerWidth <= optPlayerWidth){
			$("#int_videoFrame .containing-block").css("width",newPlayerWidth);
		}else{
			$("#int_videoFrame .containing-block").css("width",optPlayerWidth);
		}
	}
	repositionPlayer();
}

function repositionPlayer(){
	var screenHeight = $(window).height();
	var videoPlayerHeight = $("#int_videoFrame .containing-block").height();
	if(screenHeight > videoPlayerHeight){
		var effectiveMargin = (screenHeight - videoPlayerHeight)/2;
		if(effectiveMargin > 200){
			effectiveMargin = 200;
		}
		$("#int_videoFrame").css({"marginTop":(effectiveMargin) + "px"})
	}
}
 
$(window).resize(function() {
	resizePlayer();
});