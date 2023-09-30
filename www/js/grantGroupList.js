var grantGroupForm = (function(){
    var blockedGrantNotExists=true;
    var validGrants=true;
	var postFormData = function(requestType, methodName) {
		var postData = $('form.groupnumberForm').serialize();
		productLoginPageURL = localStorage['productLoginPageURL'];
        console.log(postData);
		//Use JQuery AJAX request to post data to a Sling Servlet
		$.ajax({
			//type:  $('form.generalForm').attr('action'),  
			type:  'POST',   
			url: '/corpcomsvc/processForm' + "?reqType=" + requestType + "&methodName=" + methodName,
			data:  postData,
			contentType: 'application/x-www-form-urlencoded',
			success: function(msg){
				$('p.error-field').remove();
				var grandJSON = msg;
				var noGroupGrantAdded = "";
				var groupGrantNosList = "";
				var randomNumber=1 + Math.floor(Math.random() * 50000);
				if (undefined != grandJSON && Object.keys(grandJSON).length > 0) {
					noGroupGrantAdded = grandJSON.NoGrantNoAdded;
					groupGrantNosList = grandJSON.groupGrantNosList[0];
				}
				if (requestType == 'grantGroupNos' && methodName == 'SetNewGroupGrantNosList') {
					if (groupGrantNosList && Object.keys(groupGrantNosList).length > 0 && noGroupGrantAdded == "false") {
						console.log('invalid received');
						$('#groupForm').before('<p class="error-field"><span style="color: rgb(192, 24, 24);"><img style="display: block; margin-right: 10px; float: left; height: 20px; width: 6px; vertical-align: middle;" src="/etc/designs/enterprise/clientLibs/images/icon-chevron-right.png">' + $('#validationText').attr('data-validation') + '</span></p>');
						$('.invalid-feedback').remove();
						var closeGrantModal = true;
						$.each(groupGrantNosList, function(key, val) {
							$('.grantNumberInputField').each(function() {
								var element = $(this);
								if (key == $.trim(element.val()) && val == 'false') {
									$(this).after('<div class="invalid-feedback">Please enter valid grant number.</div>');
									$('.invalid-feedback').css('display','block');
									closeGrantModal = false;
									return false;
								}
							});
						});
						if (closeGrantModal)
							grantNoGroup.closeModal();
					}else if (undefined != noGroupGrantAdded && noGroupGrantAdded == "true") {
						console.log('NoGrantNoAdded received');
						window.location = productLoginPageURL+'?'+randomNumber;
					}else {
						var redirectData = $('#forwardURL').attr('data-forward') == undefined ? '': $('#forwardURL').attr('data-forward');
						var redirectURL = window.location.origin + redirectData+'?'+randomNumber;
						window.location = redirectURL;
					}
				}
			},
			error: function(msg){
				console.log('error in form submit');
			}
		});
    };



    var onFormSubmitClick = function() {
	    $('p.error-field').remove();
		if($(".invalid-feedback").hasClass())
		{
		$('.invalid-feedback').css('display', 'none');
		}
		var strlUrl = window.location.href;
		if (!validateGrantFields()) {
		if(!validGrants){
			$('#groupForm').before('<p class="error-field"><span><img style="display: block; margin-right: 10px; float: left; height: 20px; width: 6px; vertical-align: middle;" src="/etc/designs/enterprise/clientLibs/images/icon-chevron-right.png">' + $('#validationText').attr('data-validation') + '</span></p>');
			$('.invalid-feedback').css('display','block');
			}
			if(!blockedGrantNotExists){
			$('#groupForm').before('<p class="error-field"><span><img style="display: block; margin-right: 10px; float: left; height: 20px; width: 6px; vertical-align: middle;" src="/etc/designs/enterprise/clientLibs/images/icon-chevron-right.png">' + getBlockedDownloadValidationMsg() + '</span></p>');
			$('.invalid-feedback').css('display','block');
			}
			return false;
		}
		var requestType = $('form.groupnumberForm').attr('requesttype');
		var methodName = $('form.groupnumberForm').attr('method');
		var newURL = strlUrl + "?requestType=" + requestType + "&methodName=" + methodName;
		grantGroupForm.postFormData(requestType, methodName);
    }

    var endsWithStr=function(str,pattern){
             var lastIndex = str.lastIndexOf(pattern);
              return (lastIndex !== -1) && (lastIndex + pattern.length === str.length);
        }

     /* Gets the blocked grant list from the div value. If not present gets the value from local storage*/
     var getBlockedGrantList=function(){

        var blockedGrantListDivVal=$('#validationText').attr('data-blockedGrantList');
        if (undefined != blockedGrantListDivVal && $.trim(blockedGrantListDivVal)) {
        localStorage['blockedGrantList']=blockedGrantListDivVal;
        return blockedGrantListDivVal;
        }else{
        return localStorage['blockedGrantList'];
        }

     }

     var getBlockedDownloadValidationMsg=function(){
     var msg=$('#blockedGrantsvalidationText').text();
      if (undefined != msg && $.trim(msg)) {
       localStorage['blockedGrantListMsg']=msg;
        return msg;
      }else{
        return localStorage['blockedGrantListMsg'];
      }

     }

	var validateGrantFields = function(){
		$('.invalid-feedback').remove();
		var returnFlag = true;
        blockedGrantNotExists=true;
        validGrants=true;
		var blockedGrantList = getBlockedGrantList();
        var blockedGrantsArray = new Array();
        if (undefined != blockedGrantList && $.trim(blockedGrantList)) {
            blockedGrantsArray=	blockedGrantList.split(/\s*,\s*/);
        }

		$('.grantNumberInputField').each(function() {
			var element = $(this);
			if ($.trim(element.val()) == "") {
				element.after('<div class="invalid-feedback">Please enter valid grant number.</div>');
				returnFlag = false;
				validGrants=false;
			}else{
                    	blockGrantsLength=blockedGrantsArray.length;
                    	var elementVal=$.trim(element.val());
                    if (elementVal) {
                        for(var i=0;i<blockGrantsLength;i++)
                          {
                              if(endsWithStr(elementVal.toLowerCase(),blockedGrantsArray[i].toLowerCase()))
                              {
                              element.after('<div class="invalid-feedback">Please enter valid grant number.</div>');
                              returnFlag = false;
                              blockedGrantNotExists=false;
                              break;
                              }
                          }
                    }
                    }
		});
		return returnFlag;
	}
	var updateNewGrantField = function(){
		/*$('.grantNumberInputField').each(function() {
			var element = $(this);
			var newGrant = $('#validationText').attr('data-newgrant');
			if (undefined != newGrant && $.trim(element.val()) == $.trim(newGrant)) {
				element.before('<input value="*" class="astrikClass" disabled="" type="text">');
			}
		});*/
	}
    return {
        postFormData: postFormData,
		onFormSubmitClick : onFormSubmitClick,
		validateGrantFields : validateGrantFields,
		updateNewGrantField: updateNewGrantField
    };
})();

$(document).ready(function(){
	grantGroupForm.updateNewGrantField();
	if($("#groupGNModal").length > 0 && localStorage['cancelOnAuth'] != undefined && localStorage['cancelOnAuth'] == 'cancel' && undefined != localStorage['addGroupOnAuth'] && localStorage['addGroupOnAuth'] == 'add') {
		grantNoGroup.openModal();
		$("#groupGNModal").show();
		$('body').addClass('disableParentScreen');
		grantNoGroup.resizeModalPopup();
		localStorage['cancelOnAuth'] = '';
		localStorage['addGroupOnAuth'] = '';
	}
					
	$('.submitGrantGrp').on('click', function(event) {
		event.preventDefault();   
		grantGroupForm.onFormSubmitClick();
	});

	 var blockGrantListDivValue=$('#validationText').attr('data-blockedGrantList');
            if (undefined != blockGrantListDivValue && $.trim(blockGrantListDivValue)) {
            localStorage['blockedGrantList']=blockGrantListDivValue;
            }

      var blockGntmsg=$('#blockedGrantsvalidationText').text();
           if (undefined != blockGntmsg && $.trim(blockGntmsg)) {
            localStorage['blockedGrantListMsg']=blockGntmsg;
           }

});
