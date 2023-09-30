var allCategoryData = [], allProductListingData = [], selectedCategories = [], sessionCategories = [], sessionLatestVersionCB = '',
	latestVersionData = [], allVersionData = [], productsTable, findProductSortOrder = '', scrollFlagAtFDLoad = true;
var selectedCategoriesSession = [], searchTextSession = '';

function backButton() {
  
    window.history.pushState(null, "", window.location.href);
    window.onpopstate = function () {
        window.history.pushState(null, "", window.location.href);
    };
	var sessionTimeOutPageURL=window.location.pathname.substr(0, window.location.pathname.lastIndexOf("/")) + "/expired.html";
    setTimeout(function () { 
	window.location = sessionTimeOutPageURL }, 1800000);

}

function sortByFindProdNameAsce(a, b){
		var aName = a.Product_Name.toLowerCase();
		var bName = b.Product_Name.toLowerCase(); 
		return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
}

function sortByFindProdNameDesc(a, b){
	var aName = a.Product_Name.toLowerCase();
	var bName = b.Product_Name.toLowerCase(); 
	return ((aName > bName) ? -1 : ((aName < bName) ? 1 : 0));a
}
var findProduct = (function(){
	var validCheck = function(data) {
		if ((undefined || null) == data) {
			return '';
		} else 
			return data;
	};
	var createUniqueCategoryList = function(categoryName) {
		var result = [];
		$.each(categoryName, function(i, e) {
			if ($.inArray(e, result) == -1) result.push(e);
		});
		return result;
	};
	var getFacetFilteredData = function(el) {
		var checkForCurrentVersion = (undefined == $('#showCurrentVersionCB').attr('checked') || false == $('#showCurrentVersionCB').attr('checked')) ? false : true;
		var checkforSelectedCategories = (selectedCategories.length > 0) ? true : false;
		var searchVal = $('#inputProductName').val();

		if (checkForCurrentVersion && checkforSelectedCategories) 
			return el.CurrentVersion == 'ISCURRENTVERSION_Yes' && selectedCategories.indexOf(el.Category_Name) > -1;
		else if (checkForCurrentVersion && !checkforSelectedCategories) 
			return el.CurrentVersion == 'ISCURRENTVERSION_Yes';
		else if (!checkForCurrentVersion && checkforSelectedCategories) 
			return selectedCategories.indexOf(el.Category_Name) > -1;
		else 
			return true;
	};
	var getSearchFilteredData = function(el) {
		var searchVal = $.trim($('#inputProductName').val()).toLowerCase();
		if (searchVal !== '') 
			return (el.Product_Name.toLowerCase()).indexOf(searchVal) > -1;
		else 
			return true;
	};
	var getUniqueProductData = function() {
		var resultArray = [];
		$.each(allProductListingData, function (i, e) {
			var matchingItems = $.grep(resultArray, function (item) {
			   return item.Product_Name === e.Product_Name && item.Product_Version_Id === e.Product_Version_Id;
			});
			if (matchingItems.length === 0) resultArray.push(e);
		});
		return resultArray;
	};
 	var createProductTable = function(productsData) {
		var htmlData = '';
		var counter = 1;
		var tempStr = '<table id="productsTable" class="table search-table mb-6">\n<thead>\n<tr class="gt-head">\n<th class="cell-span-5 position-sticky bg-gray-500">' + $("#findProductData").attr("data-firstcol") + '</a></th>\n<th 	class="text-center position-sticky bg-gray-600 text-white">' + $("#findProductData").attr("data-secCol") + '</th>\n<th class="position-sticky cell-span-3 bg-gray-700 text-white">' + $("#findProductData").attr("data-thirdCol") + '</th>\n</tr>\n</thead>\<tbody id="productsTableBody"></tbody>\n</table>';
		$('#cbWrapperDiv').after(tempStr);
		
		if (Object.keys(productsData).length < 1) {
			return false;
		}
		$.each(productsData, function(key, val) {
			htmlData += '<tr id="TR_' + counter + '" class="' + (val.CurrentVersion == undefined ? "ISCURRENTVERSION_No": val.CurrentVersion)+ ' gt-row" data-category="' + val.Category_Name + '">\n' +
						'	<td class="cell-span-5">\n<a href="javascript: productListing.availableDownloads_Link( \''+ val.Product_Version_Id + '\', \'' + val.Product_Name +'\', \'' + val.Product_Version +'\');">' + val.Product_Name + '</a>';
			htmlData += (val.isNewProduct == "Y") ? '<sup style="color: red; font-weight: bold">New!</sup>\n': "";
			htmlData += '	<td class="text-center">' + val.Product_Version_Id + '</td>\n';
			htmlData += '	</td><td class="cell-span-3">' + val.Category_Name + '</td>\n';
			htmlData += '</tr>\n';
			counter++;
		});
		
		$('tbody#productsTableBody').append(htmlData);	
	};
	var createAllCategoryData = function(productsData) {
		if (Object.keys(productsData).length < 1) {
			return false;
		}
		$.each(productsData, function(key, val) {
			allCategoryData.push(val.Category_Name);
		});
		allCategoryData = createUniqueCategoryList(allCategoryData);
	};
	var createCategoryFacet = function(allCategoryData) {
		var sortCategoryData = allCategoryData.sort();
		var htmlData = '';
		var counter = 1;
		if (Object.keys(allCategoryData).length < 1) {
			return false;
		}
		$.each(sortCategoryData, function(key, val) {
			htmlData += '<div class="checkbox">';
			if (undefined != sessionCategories && sessionCategories.length > 0 && $.inArray(val, sessionCategories) > -1) {
				htmlData += '	<input type="checkbox" class="facetInput" checked id="category-' + counter + '" data-category="' + val +'">\n';
				selectedCategories.push(val);
			} else {
				htmlData += '	<input type="checkbox" class="facetInput" id="category-' + counter + '" data-category="' + val +'">\n';
			}	
			htmlData += '	<label for="category-' + counter + '">' + val + '</label>\n</div>\n';
			counter++;
		});
		$('#mfilters').append(htmlData).show();	
	};
	var redesignTable = function(){
		if (undefined != $('.dataTable') && $('.dataTable').length > 0) {
			$('.dataTable').each(function() {
				dt = $(this).dataTable();
				dt.remove();
			});
		}
		productsTable = $('#productsTable').dataTable();
		productsTable.fnDestroy();
		$('#productsTable_wrapper').remove();
		$('.backButtonLink.removeMe').remove();
		recreateTable();
		backButton();
	};
	var categoryFacetSelectEvent = function() {
		$('.facetInput').on("click", function(event) {
			var index = selectedCategories.indexOf($(this).attr('data-category'));
			if ($(this).is(':checked'))
				selectedCategories.push($(this).attr('data-category'));
			else {
				if (index > -1)
					selectedCategories.splice(index, 1);
			}
			redesignTable();
		});
	};
	var tableSortFindProduct = function() {
    console.log("sort table");
		if (findProductSortOrder == 'asce') {
			allProductListingData = allProductListingData.sort(sortByFindProdNameDesc);
			findProductSortOrder = 'desc';
		}  else {
			allProductListingData = allProductListingData.sort(sortByFindProdNameAsce);
			findProductSortOrder = 'asce';
		}
		redesignTable();
    };
	var clearCategoryFilters = function(type) {
		$('.facetInput').removeAttr('checked');
		selectedCategories = [];
		$('#inputProductName').val('');
		sessionLatestVersionCB = '';
		redesignTable();
    };
	var clearSearchFilters = function() {
		$('#clearSearchData').on("click", function(event) {
			event.preventDefault();
			$('#inputProductName').val('');
			redesignTable();
		});
		$('#findProductBtn').on("click", function(event) {
			event.preventDefault();
			redesignTable();
		});
    }
	var showCurrentVersionCBSelectEvent = function() {
		$('#showCurrentVersionCB').on("click", function(event) {
			sessionLatestVersionCB = '';
			if ($(this).is(':checked'))
				$(this).attr('checked', true);
			else {
				$(this).removeAttr('checked');
				sessionLatestVersionCB = 'notselected';
			}
			
			if (undefined != $('.dataTable') && $('.dataTable').length > 0) {
				$('.dataTable').each(function() {
					dt = $(this).dataTable();
					dt.remove();
				});
			}
			redesignTable();
		});
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
	var displayContentPagination = function(totalCount){
		var pageSize = $("select[name='productsTable_length']").val();
		if (undefined === pageSize) 
			pageSize = '10';
		pageSize = parseInt(pageSize);
        var windowWidth = $(window).width();
		if(totalCount <= pageSize) {
            $('#page-selection').hide();
			$('.pagination').show();
            return;
        } else {
			$('#page-selection').show();
			$('.pagination').show();
        }
        $('#productsTable_paginate').append('<li id="magic-line"></li>');
        $('#page-selection').find("a.paginate_button") .each(function () {
            var $magicLine = $($('#productsTable_paginate').find("li#magic-line"));
            if ($magicLine) {
                $magicLine
                    .width(jQuery('#productsTable_paginate' + " .current").outerWidth())
                    .css("left", jQuery('#productsTable_paginate' + " .current").position().left)
                    .data("origLeft", $magicLine.position() !== undefined ? $magicLine.position().left : 0)
                    .data("origWidth", $magicLine.width());
            }
            return false;
        });

        function setActive() {
            var $magicLine = $($('#productsTable_paginate').find("li#magic-line"));
			if ($magicLine.length > 0) {
            $magicLine
                .width(jQuery("#productsTable_paginate .current").outerWidth())
                .css("max-width",$("span .paginate_button").css("width"))
                .css("left", jQuery("#productsTable_paginate .current ").position().left)               
                .data("origLeft", $magicLine.position() !== undefined ? $magicLine.position().left : 0)
                .data("lineMaxWidth",$("span .paginate_button").css("width"))
                .data("origWidth", $magicLine.width());
			}
        }
        setActive();
        jQuery(window).on('resize', setActive);
        jQuery("#productsTable_paginate a").hover(function() {
            $el = jQuery(this);
            var $magicLine = $el.parent().parent().find("#magic-line");
            leftPos = $el.position().left;
            newWidth = $el.outerWidth();
            $magicLine.stop().animate({
                left: leftPos,
                width: newWidth,
                maxWidth: "100%"
            });
        }, function() {
            var $magicLine = jQuery(this).parent().parent().find("#magic-line");
            $magicLine.stop().animate({
                left: $magicLine.data("origLeft"),
                width: $magicLine.data("origWidth"),
                maxWidth: $magicLine.data("lineMaxWidth")
            });
        });
    };
	var recreateTable = function() {
		latestVersionData = allProductListingData.filter(findProduct.getSearchFilteredData);
		latestVersionData = latestVersionData.filter(findProduct.getFacetFilteredData);
		selectedCategoriesSession = selectedCategories;
		searchTextSession = $('#inputProductName').val();
		findProduct.createProductTable(findProduct.validCheck(latestVersionData));
		if ($('#productListingAttributes').length > 0) {
			if (undefined == $('#productListingAttributes').attr('data-pagination') || $('#productListingAttributes').attr('data-pagination').length < 1) {
				$('#productListingAttributes').attr('data-pagination', '10,20,50');
			}
			$.fn.DataTable.ext.pager.numbers_length = 5;
			var pageCountArr = $('#productListingAttributes').attr('data-pagination').split(',').map(function(i){return parseInt(i, 10);});
			productsTable = $('#productsTable').dataTable({
					"info": false,
					"searching": true,
                    "fixedHeader": { header: true},
					"destroy": true,
					"lengthMenu": pageCountArr,
					 "order": [[0, 'asc'], [1, 'desc']],
					  "columnDefs": [{ "targets": '_all', "orderable": false, }],
					 "language": {
						 "lengthMenu": $('#productListingAttributes').attr('data-pagination-text'),
						"paginate": {
						  "previous" : '‹ ' + $('#productListingAttributes').attr('data-previous-pagination'),
						  "next": $('#productListingAttributes').attr('data-next-pagination') + ' ›'
						}
					  },
					//"dom": 't<"pagination"<"#page-selection"p><"#show-select.show-select" l>>',
                    "dom": 't<"pagination"<"#page-selection"p>><"#show-select.show-select" l>',
					"fnDrawCallback": function( oSettings ) {
						setTimeout(function(){ findProduct.displayContentPagination(totalCount) }, 100);
						if (oSettings._iDisplayLength > oSettings.fnRecordsDisplay()) {
							$(oSettings.nTableWrapper).find('.dataTables_paginate').hide();
						} else {
							$(oSettings.nTableWrapper).find('.dataTables_paginate').show();
						}
						if (scrollFlagAtFDLoad) {
							$('html').animate({ scrollTop: $('#productsTable_wrapper').offset().top - 120 }, 'slow');//IE, FF
							$('body').animate({ scrollTop: $('#productsTable_wrapper').offset().top - 120 }, 'slow');
						}
					}
				}).on( 'page.dt',   function () { 
                   
                   $("#magic-line").css("max-width",$("span .paginate_button").css("width"));
                    console.log('set magic-line Page' );
                    
                    } );
			totalCount = productsTable.fnGetData().length;
			$("select[name='productsTable_length']").wrap('<span class="fake-select"></span>');
           
		}

        $('#findProductSearch1').on( 'keyup', function () {
    		 productsTable.fnFilter(this.value);
     	} );
        
        $('#findProductSearch').on('input propertychange paste change keyup', function() {     
         
    		 productsTable.fnFilter(this.value);
    
        });


         $('#clear_checkbox').click(function(e) {
         e.preventDefault();
				productsTable.fnFilter('');
                 $('#findProductSearch').val('');

         });
	};
	return {
        createProductTable: createProductTable,
		getCurrentVersionData: getCurrentVersionData,
		validCheck: validCheck,
		displayContentPagination: displayContentPagination,
		createCategoryFacet: createCategoryFacet,
		getFacetFilteredData: getFacetFilteredData,
		getSearchFilteredData: getSearchFilteredData,
		getUniqueProductData: getUniqueProductData,
		recreateTable: recreateTable,
		createAllCategoryData: createAllCategoryData,
		categoryFacetSelectEvent: categoryFacetSelectEvent,
		showCurrentVersionCBSelectEvent: showCurrentVersionCBSelectEvent,
		clearSearchFilters: clearSearchFilters,
		redesignTable: redesignTable,
		tableSortFindProduct: tableSortFindProduct,
		clearCategoryFilters: clearCategoryFilters


    };
})();
$(document).ready(function(){
	allProductListingData = $('#findProductData').attr('data-products');
	if (undefined !== allProductListingData) {
		allProductListingData = $.parseJSON(allProductListingData);
		sessionCategories = allProductListingData.SelectedCategories;
		var sessionSearchText = allProductListingData.SearchText;
		sessionLatestVersionCB = allProductListingData.sessionLatestVersionCB;
		if (undefined != sessionLatestVersionCB && sessionLatestVersionCB == 'notselected') {
			$('#showCurrentVersionCB').removeAttr('checked');
		}
		allProductListingData = allProductListingData.filterProductResponse;
		allProductListingData = allProductListingData.sort(sortByFindProdNameAsce);
		if (undefined !== allProductListingData) {
			if (undefined !== sessionSearchText) {
				$('#inputProductName').val(sessionSearchText);
			}
			findProductSortOrder = 'asce';
			allProductListingData = findProduct.getUniqueProductData();
			findProduct.createAllCategoryData(allProductListingData);
			findProduct.createCategoryFacet(allCategoryData);
			findProduct.categoryFacetSelectEvent();
			findProduct.clearSearchFilters();
			findProduct.recreateTable();
			findProduct.showCurrentVersionCBSelectEvent();
           
		}
		
	}
	backButton();
});

