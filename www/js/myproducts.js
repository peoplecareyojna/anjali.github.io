var grantNoGroup = (function() {
	var maskGrantNo = function() {
		var numList = $('p.maskGrantNumber');
		$.each(numList, function(key, val) {
			$(val).text($(val).text().slice(0, 3) + '*****-***').show();
		});
	};
	var openDialogForGrantNumbersGroup = function() {
	var grantModal;
	try{
	 grantModal= new bootstrap.Modal(document.querySelector('#groupGNModal'), {backdrop: 'static"}'})
	}
	catch(err) {
		console.log("Failed to load grant group modal");
	}		
		
		$("a[data-target='.groupGNModal']").on("click", function (e) {
			e.preventDefault();
			if ($("#groupGNModal").length > 0) {
				if(localStorage['cancelOnAuth'] != undefined && localStorage['cancelOnAuth'] == 'cancel') {
					var redirectData = $('#cancelAuthorization').attr('data-cancel-auth') == undefined ? '': $('#cancelAuthorization').attr('data-cancel-auth');
					var redirectURL = window.location.origin + redirectData;
					window.location = redirectURL;
				} else {
					//openModal();
					console.log("No cancelOnAuth");
					if(grantModal){
                        grantModal.show();
                    }
					//$('body').addClass('disableParentScreen');
					//resizeModalPopup();
				}
			}
		});
		$("Button[data-bs-dismiss='modal']").on("click", function (e) {
			if(grantModal){
				grantModal.hide();
			}
					
		});
	};
	var grantNoGroupEvents = function() {
		$(document).on('click', "a.remove", function(event) {
			event.preventDefault();
			$('p.error-field').remove();
			$(this).parent().remove();
		});
		$('#addBtn').on('click', function(event){
			event.preventDefault();
			var lastRecNo = 0;
			if ($('.typeText').length > 0) {
				lastRecNo = parseInt($('.typeText').last().attr('data-recno')) + 1;
			}
			var html = '<div class="grantNumDiv" style="overflow:hidden" id="' + lastRecNo + '"><input id="newGrant_img_' + lastRecNo + '" type="text" value="*" class="astrikClass" disabled=""><input id="grantText' + lastRecNo + '" data-recno="'+ lastRecNo +'" name="grantNumber" type="text" maxlength="40" size="80" class="typeText grantNumberInputField" required>\n' +
                       '  <a class="remove" data-recno="' + lastRecNo + '" href>x '+ $('div#data-removetext').attr('data-removetext')+ '</a><div>';
			$(html).insertBefore('#prependToBR');
		});
	};
	var resizeModalPopup = function () {
    //var minHeight = 300;
    //var paddingTop = 30;
    //var windowHeight = $(window).height();
    //var contentHeight = 300;//$("#int_popUpFrame .containing-block div.bg-gray-light-50").height();
    //if (windowHeight > (contentHeight + 30)) {
     //   $("#int_popUpFrame .containing-block").height(contentHeight);
     //   var marginVal = (windowHeight - contentHeight) / 2;
     //   $("#int_popUpFrame .containing-block").css("marginTop", marginVal + "px");
   // } else {
    //    $("#int_popUpFrame .containing-block").height(windowHeight - 30);
    //    $("#int_popUpFrame .containing-block").css("marginTop", "15px");
    //}
}
	var openModal = function () {
     //   var vModal = document.getElementsByClassName('Tabmodal');
     //   for (i = 0; i < vModal.length; i++) {
     //       vModal[i].style.display = 'block';
     //   }

     //   var vFade = document.getElementsByClassName('Tabfade');
     //   for (i = 0; i < vFade.length; i++) {
     //       vFade[i].style.display = 'block';
     //   }
    };
    var closeModal = function () {
      //  var vModal = document.getElementsByClassName('Tabmodal');
      //  for (i = 0; i < vModal.length; i++) {
      //      vModal[i].style.display = 'none';
      //  }

      //  var vFade = document.getElementsByClassName('Tabfade');
      //  for (i = 0; i < vFade.length; i++) {
       //     vFade[i].style.display = 'none';
       // }
    };
 var moveUp=function()
    {
    window.scrollTo(600, 0);
    };
	return {
		grantNoGroupEvents: grantNoGroupEvents,
		openDialogForGrantNumbersGroup: openDialogForGrantNumbersGroup,
		openModal: openModal,
		closeModal: closeModal,
		maskGrantNo : maskGrantNo,
		resizeModalPopup : resizeModalPopup,
		moveUp:moveUp
	}
})();
$(document).ready(function () {
    $("body").on("click", ".accTitle", function () {
        var div = $(this).next()
        if (div[0].style.display == 'block') {
            $(this).find("span").html('+&nbsp;&nbsp;');
            $(div).slideUp();
        } else { $(this).find("span").html('-&nbsp;&nbsp;&nbsp;'); $(div).slideDown(); }
    });
	$('body').on('click', '#popUpOverlayContainer', function (e) {

        //if (e.target.id == "int_popUpFrame" || e.target.id == "popUpOverlayContainer" || e.target.className == "popUpOverlayContainerClose") {
        if (e.target.className == "popUpOverlayContainerClose") {
			$("#popUpOverlayContainer").hide();
            $('body').removeClass('disableParentScreen');
            grantNoGroup.closeModal();
        };
    });
    
    /** Adding scroll on change of number of products to show START **/
    $("#pageSize").on("change", function () {
        $('html, body').animate({
            scrollTop: $("#findTableHeader").offset().top
        }, 1000);
    });
	
				$("#groupGNModal").removeClass('show');
					$("#groupGNModal").css("display", "none");
					$("#groupGNModal").attr("aria-hidden","true");
					$("#groupGNModal").removeAttr("aria-modal");
					$("#groupGNModal").removeAttr("role");
					
    /** Adding scroll on change of number of products to show END **/
	grantNoGroup.grantNoGroupEvents();
	grantNoGroup.openDialogForGrantNumbersGroup();
	grantNoGroup.maskGrantNo();
});

