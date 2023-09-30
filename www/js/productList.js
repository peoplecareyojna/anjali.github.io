var productListing = (function(){
	var availableDownloads_Link = function (ProductVersion, ProductName, ProductCode) {
		document.ComponentList.ProductCode.value = btoa(ProductCode);
		document.ComponentList.ProductName.value = btoa(ProductName);
		document.ComponentList.ProductVersion.value = btoa(ProductVersion);
		document.ComponentList.selectedCategoriesText.value = btoa(selectedCategoriesSession.join(','));
		document.ComponentList.searchTextSession.value = btoa(searchTextSession);
		document.ComponentList.sessionLatestVersionCB.value = btoa(sessionLatestVersionCB);
		
		productListingForm.postProductListing();
	};
	var validCheck = function(data) {
		if ((undefined || null) == data) {
			return '';
		} else 
			return data;
	};
 	var createProductTableBody = function(downloadCodes) {
		var htmlData = '';
		var counter = 1;
		var showLatestStr=$('#productListingData').attr('data-checkboxLabel');
		if (Object.keys(downloadCodes).length < 1) {
			return false;
		}
		$.each(downloadCodes, function(key, val) {

			htmlData+='<div class="gt-row">\n';
			htmlData+='<div>\n';
			htmlData+='<details id="CURRENTVERSION_'+counter+'">\n';
			htmlData+='<summary>'+val.description;
			htmlData+=(val.newFlag == 'Y') ? '<sup style="color: red; font-weight: bold">New!</sup>': "";
			htmlData+='</summary>\n';
			htmlData+='<div class="form-check fs-6"> \
					   <input type="checkbox" checked="" onclick="productListing.getCurrentVersionData(this, '+counter+');" id="showLatest'+counter+'"> \
					   <label for="showLatest'+counter+'"><small>'+showLatestStr+'</small></label> \
					   </div>';
			htmlData += createProductBodyTd(validCheck(val.categories), counter);		   
			htmlData+='</div>\n';
			htmlData+='<div>\n';
			htmlData+=createMessageSectionTd(validCheck(val.messages), validCheck(val.links));
			htmlData+='</div>\n';
			htmlData+='</div>\n';
			$('#productListingContent').append(htmlData);
			htmlData = '';
			counter++;
		});
	};
	var createProductBodyTd = function(categories, counter) {
		var htmlDataTmp = '';
		$.each(categories, function(key, val) {
			if ($.isArray(val)) {
				for(var i = 0; i < val.length; i++) {
					htmlDataTmp += '<ul class="heead"><small><strong>' + val[i].name + '</strong></small>\n';
					htmlDataTmp += createProductList(validCheck(val[i].products));
					htmlDataTmp += '</ul>\n';
				}
			} else {
				htmlDataTmp += '<ul class="heresd"><small><strong>' + val.Name + '</strong></small>\n';
				htmlDataTmp += createProductList(validCheck(val.products));
				htmlDataTmp += '</ul>\n';
			}
			
		});
		
		return htmlDataTmp;
	};
	var createMessageSectionTd = function(messages, links) {
		var htmlDataTmp = '';
		if (Object.keys(messages).length > 0) {
			$.each(messages, function(key, val) {
				if ($.isArray(val)) {
					if (val.length < 1)
						return false;
					for(var i = 0; i < val.length; i++) {
						if (val[i].type == 'SUBHEADING')
							htmlDataTmp += '<div>' + val[i].text + '</div>\n';
						else if (val[i].type == 'DETAIL')
							htmlDataTmp += '<p class="prodalert">' + val[i].text + '</p>\n';
					}
				} else {
					if (val.type == 'SUBHEADING')
						htmlDataTmp += '<div>' + val.text + '</div>\n';
					else if (val.type == 'DETAIL')
						htmlDataTmp += '<p class="prodalert">' + val.text + '</p>\n';
				}
			});
		}
		if (Object.keys(links).length > 0) {
			var flag = false;
			$.each(links, function(key, val) {
				if ($.isArray(val)) {
					if (val.length > 0) {
						htmlDataTmp += '<h5>Related Links</h5>\n<ul class="indentedList">\n';
						flag = true;
					}
					else 
						return false;
					for(var i = 0; i < val.length; i++) {
						htmlDataTmp += '<li><a href="' + val[i].dcodeUrl + '" target="_blank">' + val[i].dcodeUrlText + '</a></li>\n';
					}
				} else {
					htmlDataTmp += '<h5>Related Links</h5>\n<ul class="indentedList">\n';
					htmlDataTmp += '<li><a href="' + val.dcodeUrl + '" target="_blank">' + val.dcodeUrlText + '</a></li>\n';
					flag = true;
				}
			});
			if (flag)
				htmlDataTmp += '</ul>';
		}
		return htmlDataTmp;
	};
	var createProductList = function(products) {
		var htmlDataTmp = '';
		$.each(products, function(key, val) {
			if ($.isArray(val)) {
				for(var i = 0; i < val.length; i++) {
					htmlDataTmp += '<li style="padding-bottom: 0; display: ' + ((val[i].currentVersion == undefined || val[i].currentVersion == "ISCURRENTVERSION_No") ? "none": "block")+ '" class="' + (val[i].currentVersion == undefined ? "ISCURRENTVERSION_No": val[i].currentVersion) + '"><a href="javascript: productListing.availableDownloads_Link( \''+ val[i].productVersionId + '\', \'' + val[i].productName +'\', \'' + val[i].productVersion +'\');">' + val[i].productName +'&nbsp;'+val[i].productVersionId+'&nbsp;';
					htmlDataTmp += ((val[i].newFlag == "Y") ? '<sup style="color: red; font-weight: bold">New!</sup>\n': "") ;
					htmlDataTmp += '</a></li>\n';
				}
			} else 
				htmlDataTmp += '<li style="padding-bottom: 0; display: ' + ((val.currentVersion == undefined || val.currentVersion == "ISCURRENTVERSION_No") ? "none": "block")+ '" class="' + (val.currentVersion == undefined ? "ISCURRENTVERSION_No": val.currentVersion) + '"><a href="javascript: productListing.availableDownloads_Link( \''+ val.productVersionId + '\', \'' + val.productName +'\', \'' + val.productVersion +'\');">' + val.productName +'&nbsp;'+val.productVersionId+'&nbsp;';
				htmlDataTmp += ((val.newFlag == "Y") ? '<sup style="color: red; font-weight: bold">New!</sup>\n': "") ;
				htmlDataTmp += '</a></li>\n';
		});
		
		return htmlDataTmp;
	};
	var getCurrentVersionData = function (objData, rowID) {
		var getUpdatedProductList = "#CURRENTVERSION_" + rowID;
		var getSelectedSectionData = $(getUpdatedProductList);
		var getUlList = $(getSelectedSectionData).find('ul');
		if (objData.checked) {

			getUlList.find('.ISCURRENTVERSION_No').hide();
		} else {
			getUlList.find('.ISCURRENTVERSION_No').show();
		}
	};
	return {
        createProductTableBody: createProductTableBody,
		getCurrentVersionData: getCurrentVersionData,
		validCheck: validCheck,
		availableDownloads_Link: availableDownloads_Link

    };
})();

$(document).ready(function(){
	var productListingData = '{}';
	
	$("a.closePopup").on("click", function (e) {
		e.preventDefault();
		closePageErrorModal();
	});


	productListingData = $('#productListingData').attr('data-products');
	
	if (undefined !== productListingData) {
		productListingData = $.parseJSON(productListingData);
		
		if (undefined !==productListingData.downloadCodes && undefined !== productListingData.downloadCodes.downloadCode) {
			productListingData = productListingData.downloadCodes.downloadCode;
			productListing.createProductTableBody(productListing.validCheck(productListingData));
			$('div#noProductsDiv').hide();
		}
		else{
		$('table#downloadProductsTable').hide();
		}
	}
	
});


    function openPageErrorModal() {
        var vModal = document.getElementsByClassName('BackButton');
        for (i = 0; i < vModal.length; i++) {
            vModal[i].style.display = 'block';
        }

        var vFade = document.getElementsByClassName('Tabfade');
        for (i = 0; i < vFade.length; i++) {
            vFade[i].style.display = 'block';
        }
    }
    function closePageErrorModal() {
        var vModal = document.getElementsByClassName('BackButton');
        for (i = 0; i < vModal.length; i++) {
            vModal[i].style.display = 'none';
        }

        var vFade = document.getElementsByClassName('Tabfade');
        for (i = 0; i < vFade.length; i++) {
            vFade[i].style.display = 'none';
        }
}

var productListingForm = (function(){

	var postProductListing = function() {
	 var productCode = document.ComponentList.ProductCode.value;
		var productName = document.ComponentList.ProductName.value;
		var productVersion= document.ComponentList.ProductVersion.value;
		var selectedCategoriesText=document.ComponentList.selectedCategoriesText.value;
		var searchTextSession= document.ComponentList.searchTextSession.value;
		var sessionLatestVersionCB =document.ComponentList.sessionLatestVersionCB.value;
        var requestType ="downloadPrdServ";
        var methodName ="GetProductComponents";
      //  postData= btoa(postData);
		//Use JQuery AJAX request to post data to a Sling Servlet
		$.ajax({
			//type:  $('form.generalForm').attr('action'),  
			type:  'POST',   
			url: '/corpcomsvc/processForm' + "?reqType=" + requestType + "&methodName=" + methodName+ "&productCode=" + productCode+ "&productName=" + productName+ "&productVersion=" + productVersion + "&selectedCategoriesText=" + selectedCategoriesText+"&searchTextSession="+searchTextSession+"&sessionLatestVersionCB="+sessionLatestVersionCB,
			contentType: 'application/x-www-form-urlencoded',
			success: function(msg){
            console.log(msg);
            if (msg['GetProductComponents'] == "false") {
				console.log('Service not responding');
                $('#productListingData').before('<p class="error-field">Service not responding! </p>');
			}else {
					var redirectData = $('#productListingData').attr('data-productListing') == undefined ? '': $('#productListingData').attr('data-productListing');
					if (redirectData != '') {
						localStorage['productDownloadsPageURL'] = redirectData;
					}
					var redirectURL = window.location.origin + redirectData + ".html";
					window.location = redirectURL;
					console.log('forwarded');
			}
		},
		error: function(msg){
			console.log('error in form submit');
		}
		});
    };

   
var	downloadFile = function (fileName,discription,path,productCode,productName,fileType) {
	 var sUrl="/corporate/products"+path+"/"+fileName; 
	 sUrl=btoa(sUrl);
	 var requestType ="getMD5PrdDownload";
     var methodName ="GetMD5";
     var filename= btoa(fileName);
     var description = btoa(discription);
     var encodedProductCode=btoa(productCode);
     var encodedProductName=btoa(productName);

    var downloded="false";
			$.ajax({
					url: '/corpcomsvc/processForm' + "?reqType=" + requestType + "&methodName=" + methodName + "&path=" + sUrl,
					type:  'POST',
					contentType: 'application/x-www-form-urlencoded',
					success: function (data) {
                	 var jsonObj = data['GetMD5'];

                if(jsonObj && jsonObj != ""){
                            window.open(jsonObj);
						}else{
                	 		console.log('Service not responding');
                        $('#downloadProductData').before('<p class="error-field">Unable to download. Please try later </p>');
           			 }
							
					},
					error: function(data){
		    			console.log('error in request getMD5PrdDownload');
		    		}
				});


		requestType ="insertPrddownlodedInfo";
     	methodName ="DownloadFileAuditLogForGrant";


                $.ajax({
        			//type:  $('form.generalForm').attr('action'),  
        			type:  'POST',   
        			url: '/corpcomsvc/processForm' + "?reqType=" + requestType + "&methodName=" + methodName,
        			contentType: 'application/x-www-form-urlencoded',
        			data:{
        			"fileName":filename,
        			"description":encodedProductName,
        			"productCode":encodedProductCode,
        			"fileType":fileType
        			},
        			success: function(msg){
                    console.log("insertPrddownlodedInfo::"+msg['DownloadFileAuditLogForGrant']);

        		},
        		error: function(msg){
        			console.log('error in insertPrddownlodedInfo');
        		}
        		});

    }
	
	
	
    return {
    	postProductListing: postProductListing,
    	downloadFile: downloadFile
    };
})();


