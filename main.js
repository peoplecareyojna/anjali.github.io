class MyHeader extends HTMLElement {
Connectedcallback(){
    this.innerHTML = `
    <script type="text/javascript">
	var digitalData = {
		"page":{ 
			"pageInfo": {
				"pageName" :  "en-us:about",
				"pageNameGlobal" : "about",
				"pageLanguage" : "English",
				"pageType" : "",
				"country" : "us",
				"geo" : "NA",
				"onsiteSearchTerm" : "",
		        "onsiteSearchType" : "",
			    "searchSubType" : "", 
				"metaData" : {
					"contentType": "",
					"englishName": "",
					"onDate":  "",
					"siteSection": "",
					"productCategory": "",
					"product": "",
					"customerNarrative": "",
					"campaignTheme": "",
					"solution": "",
					"industry": "",
					"contentTopics": "",
					"audienceSegments": "",
					"buyingStages": "",
					"personas": ""
				},
				"category": {
					"category": "about",
					"subCategory1":""
				}
			}
		},
		"user": { 
			"userInfo": {
				"ip":"89.105.219.131"
			}
		}
	}	
</script>
  <!-- Preloads --> 
  <link rel="preload" as="font" href="../www/fonts/AventaVF.woff2" type="font/woff2" crossorigin="anonymous"> 
  <!-- Stylesheets --> 
  <link rel="stylesheet" href="../www/css/fancybox.min.css" type="text/css"> 
  <link rel="stylesheet" href="../www/css/newco.min3661.css?v=2.0" type="text/css"> 
  <link rel="stylesheet" href="../www/css/common.min3661.css?v=2.0" type="text/css"> 
  <link rel="stylesheet" href="../www/css/icons.min.css" type="text/css"> 
  <link rel="stylesheet" href="../www/css/tables-charts.min.css" type="text/css"> 
  <!-- 3rd Party JS Libraries --> 
  <script type="text/javascript" src="../www/js/newco.min.js" async></script> 
  <script type="text/javascript" src="../../assets.adobedtm.com/f0febc6281f5/daaefd9d8423/launch-675ffef2af24.min.js" async></script>  
  <!-- JS Functionality --> 
  <script type="text/javascript" src="../www/js/header-footer-control.min.js" defer></script> 
  <script type="text/javascript" src="../www/js/form-control.min.js" defer></script> 
  <script type="module" src="../www/js/fancyapps-control.min.js" defer></script> 
  <!-- Global Schema Tag --> 
  <div id="__next"> 
    <div class="custom-content-wrap">
      <header class="custom-header bg-white custom-thin-shadow"> 
        <!-- Blue Nav Bar --> 
        <div class="d-none d-lg-block" id="topNav"> 
         <nav class="container-xl px-md-6"> 
          <a class="btn btn-primary bi bi-newspaper d-flex gap-2 align-items-center px-3" href="about/newsroom.html" datalink-id="newco:en-us:about:newsroom" datalink-type="internal">News</a> 
          <a class="btn btn-primary bi bi-envelope d-flex gap-2 align-items-center px-3" href="contact-us.html" datalink-id="newco:en-us:contact-us" datalink-type="internal">Contact</a> 
          <button class="btn btn-primary btn-mobile-search bi bi-search d-flex align-items-center px-3" type="button" id="desktopSearchButton" aria-controls="mobileSearchMenu"><span class="hide-text" style="width:0">Search</span></button> 
          <div class="bi bi-globe2 d-flex gap-2 align-items-center" id="langCont"> 
           <select id="lang-sel" class="btn btn-primary text-white"> <option value="de-de">Deutsch (Deutschland)</option> <option value="en-au">English (Australia)</option> <option value="en-ca">English (Canada)</option> <option value="en-gb">English (United Kingdom)</option> <option value="en-hk">English (Hong Kong SAR China)</option> <option value="en-in">English (India)</option> <option value="en-sg">English (Singapore)</option> <option value="en-us">English (United States)</option> <option value="es-es">español (España)</option> <option value="es-mx">español (México)</option> <option value="fr-ca">français (Canada)</option> <option value="fr-fr">français (France)</option> <option value="it-it">italiano (Italia)</option> <option value="ja-jp">日本語 (日本)</option> <option value="ko-kr">한국어(대한민국)</option> <option value="pt-br">português (Brasil)</option> <option value="ru-ru">русский (Россия)</option> <option value="zh-cn">中文 (简体，中国)</option> <option value="zh-tw">中文 (繁體，台灣)</option> </select> 
          </div> 
         </nav> 
        </div> 
        <!-- Search Bar --> 
        <div class="custom-search-bar bg-gray-light custom-thin-shadow" style="display: none"> 
         <form class="container-xl px-md-6 d-flex py-2 gap-3" id="searchForm"> 
          <input class="flex-grow-1 form-control custom-mobile-search-field p-2 border-1 rounded-0" placeholder="Search" aria-label="Search" id="msearch" data-result-path="search.html"> 
          <button class="btn btn-primary" type="submit">Submit</button> 
          <div class="d-none d-lg-flex gap-2 align-items-center"> 
           <a href="#" onclick="document.getElementById('msearch').value = ''" datalink-type="internal" datalink-id="newco:#">Clear</a> 
           <span>|</span> 
           <a id="searchTip" class="no-break" href="#" data-bs-toggle="modal" data-bs-target="#searchTipModal" datalink-type="internal" datalink-id="newco:#">Search Tips</a> 
          </div> 
         </form> 
        </div> 
        <!-- Main Nav Bar --> 
        <div class="bg-white container-xl px-md-6 custom-header-nav-container d-flex justify-content-between align-items-center"> 
         <!-- Anjali Sharper Key Logo --> 
         <a href="index.html" datalink-id="newco:en-us:index" datalink-type="internal"> <img id="trellix-logo-desktop" src="assets/logos/logo 1st.png" title="Anjali Sharper Key Logo" alt="Anjali Sharper Key Logo" > </a> 
         <!-- Desktop Items --> 
         <div class="d-none d-lg-flex flex-wrap align-items-center justify-content-end flex-wrap-reverse links gap-2"> 
          <span data-container-name="content-1" aria-controls="desktopMenu" class="navigation-link">Why Anjali Sharper Key?</span> 
          <span data-container-name="content-2" aria-controls="desktopMenu" class="navigation-link">Products</span> 
          <span data-container-name="content-3" aria-controls="desktopMenu" class="navigation-link">Research</span> 
          <span data-container-name="content-4" aria-controls="desktopMenu" class="navigation-link">Support</span> 
          <span data-container-name="content-5" aria-controls="desktopMenu" class="navigation-link">Partners</span> 
          <span data-container-name="content-6" aria-controls="desktopMenu" class="navigation-link">Resources</span> 
         </div> 
         <!-- Mobile Items --> 
         <div class="d-flex d-lg-none justify-content-end flex-wrap gap-x-3 gap-y-1"> 
          <button class="btn btn-mobile-search custom-search-icon hide-text p-0 shadow-none" type="button" id="mobileSearchButton" aria-controls="mobileSearchMenu">Search</button> 
          <button class="btn btn-mobile-hamburger custom-hamburger-icon hide-text p-0 shadow-none" type="button" data-bs-target="#mobileMenu" aria-controls="mobileMenu">Menu</button> 
         </div> 
        </div> 
        <!-- Mobile Navigation Dropdown Menu --> 
        <div class="custom-mobile-menu-wrapper"> 
         <div class="custom-mobile-menu offcanvas offcanvas-end d-lg-none bg-gray-light position-relative" tabindex="-1" id="mobileMenu" aria-label="Navigation Menu" data-bs-scroll="true" data-bs-backdrop="false"> 
          <div id="mobile-main-menu" class="offcanvas-body px-6 pb-6"> 
           <div class="custom-mobile-subnav-link d-flex justify-content-between custom-border-bottom custom-right-arrow" data-target="#mobile-content-1"> 
            <div class="align-self-center">
             Why Anjali Sharper Key
            </div> 
           </div> 
           <div class="custom-mobile-subnav-link d-flex justify-content-between custom-border-bottom custom-right-arrow" data-target="#mobile-content-2"> 
            <div class="align-self-center">
             Products
            </div> 
           </div> 
           <div class="custom-mobile-subnav-link d-flex justify-content-between custom-border-bottom custom-right-arrow" data-target="#mobile-content-3"> 
            <div class="align-self-center">
             Research
            </div> 
           </div> 
           <div class="custom-mobile-subnav-link d-flex justify-content-between custom-border-bottom custom-right-arrow" data-target="#mobile-content-4"> 
            <div class="align-self-center">
             Support
            </div> 
           </div> 
           <div class="custom-mobile-subnav-link d-flex justify-content-between custom-border-bottom custom-right-arrow" data-target="#mobile-content-5"> 
            <div class="align-self-center">
             Partners
            </div> 
           </div> 
           <div class="custom-mobile-subnav-link d-flex justify-content-between custom-border-bottom custom-right-arrow" data-target="#mobile-content-6"> 
            <div class="align-self-center">
             Resources
            </div> 
           </div> 
           <div class="d-flex justify-content-between custom-border-bottom custom-right-arrow"> 
            <div class="align-self-center"> 
             <a href="about/newsroom/stories.html" datalink-id="newco:en-us:about:newsroom:stories" datalink-type="internal">Stories</a> 
            </div> 
           </div> 
           <div class="d-flex justify-content-between custom-right-arrow"> 
            <div class="align-self-center"> 
             <a href="contact-us.html" datalink-id="newco:en-us:contact-us" datalink-type="internal">Contact Us</a> 
            </div> 
           </div> 
          </div> 
          <div class="mobileSubMenu" id="mobile-content-1"> 
           <div class="offcanvas-header p-0"> 
            <div class="custom-mobile-subnav-link mobile-subnav-back-button d-flex justify-content-between custom-left-arrow w-100 bg-gray-light"> 
             <div class="offcanvas-title align-self-center custom-weight">
              Main menu
             </div> 
            </div> 
           </div> 
           <div class="offcanvas-body pb-6 pt-0 px-6"> 
            <div class="d-flex justify-content-between custom-border-bottom align-items-center custom-body-title"> 
             <div>
              COMPANY
             </div> 
            </div> 
            <a href="about/why-trellix.html" class="d-block mt-3" datalink-id="newco:en-us:about:why-trellix" datalink-type="internal">Why Anjali sharper key?</a> 
            <a href="about.html" class="d-block mt-3" datalink-id="newco:en-us:about" datalink-type="internal">About Us</a> 
            <a href="about/why-trellix/industry-recognitions.html" class="d-block mt-3" datalink-id="newco:en-us:about:why-trellix:industry-recognitions" datalink-type="internal">Industry Recognitions</a> 
            <a href="about/leadership.html" class="d-block mt-3" datalink-id="newco:en-us:about:leadership" datalink-type="internal">Leadership</a> 
            <a href="https://careers.trellix.com/" target="_blank" class="d-block mt-3" datalink-type="external" datalink-id="newco:careers.trellix.com:">Careers</a> 
            <a href="contact-us.html" class="d-block mt-3" datalink-id="newco:en-us:contact-us" datalink-type="internal">Contact Us</a> 
           </div> 
          </div> 
          <div class="mobileSubMenu" id="mobile-content-2"> 
           <div class="offcanvas-header p-0"> 
            <div class="custom-mobile-subnav-link mobile-subnav-back-button d-flex justify-content-between custom-left-arrow w-100 bg-gray-light"> 
             <div class="offcanvas-title align-self-center custom-weight">
              Main menu
             </div> 
            </div> 
           </div> 
           <div class="offcanvas-body pb-6 pt-0 px-6"> 
            <div class="d-flex justify-content-between custom-border-bottom align-items-center custom-body-title"> 
             <div class="d-block">
              PRODUCTS
             </div> 
            </div> 
            <a href="platform/xdr.html" class="d-block mt-3" datalink-id="newco:en-us:platform:xdr" datalink-type="internal">Anjali Sharper Key XDR</a> 
            <a href="platform/endpoint-security.html" class="d-block mt-3" datalink-id="newco:en-us:platform:endpoint-security" datalink-type="internal">Endpoint Security</a> 
           </div> 
          </div> 
          <div class="mobileSubMenu" id="mobile-content-3"> 
           <div class="offcanvas-header p-0"> 
            <div class="custom-mobile-subnav-link mobile-subnav-back-button d-flex justify-content-between custom-left-arrow w-100 bg-gray-light"> 
             <div class="offcanvas-title align-self-center custom-weight">
              Main menu
             </div> 
            </div> 
           </div> 
           <div class="offcanvas-body pb-6 pt-0 px-6"> 
            <div class="d-flex justify-content-between custom-border-bottom align-items-center custom-body-title"> 
             <div>
              RESEARCH
             </div> 
            </div> 
            <a href="advanced-research-center.html" class="d-block mt-3" datalink-id="newco:en-us:advanced-research-center" datalink-type="internal">Advanced Research Center</a> 
           </div> 
          </div> 
          <div class="mobileSubMenu" id="mobile-content-4"> 
           <div class="offcanvas-header p-0"> 
            <div class="custom-mobile-subnav-link mobile-subnav-back-button d-flex justify-content-between custom-left-arrow w-100 bg-gray-light"> 
             <div class="offcanvas-title align-self-center custom-weight">
              Main menu
             </div> 
            </div> 
           </div> 
           <div class="offcanvas-body pb-6 pt-0 px-6"> 
            <div class="d-flex justify-content-between custom-border-bottom align-items-center custom-body-title"> 
             <div>
              SUPPORT
             </div> 
            </div> 
            <a href="support.html" class="d-block mt-3" datalink-id="newco:en-us:support" datalink-type="internal">Product Support</a> 
            <div class="d-flex justify-content-between custom-border-bottom align-items-center custom-body-title mt-4"> 
            </div> 
            </div>  
          </div> 
          <div class="mobileSubMenu" id="mobile-content-5"> 
           <div class="offcanvas-header p-0"> 
            <div class="custom-mobile-subnav-link mobile-subnav-back-button d-flex justify-content-between custom-left-arrow w-100 bg-gray-light"> 
             <div class="offcanvas-title align-self-center custom-weight">
              Main menu
             </div> 
            </div> 
           </div> 
           <div class="offcanvas-body pb-6 pt-0 px-6"> 
            <div class="d-flex justify-content-between custom-border-bottom align-items-center custom-body-title"> 
             <div>
              PARTNERS
             </div> 
            </div> 
            <a href="partners.html" class="d-block mt-3" datalink-id="newco:en-us:partners" datalink-type="internal">Partners Overview</a> 
            <!-- <a href="partners/solution-providers.html" class="d-block mt-3" datalink-id="newco:en-us:partners:solution-providers" datalink-type="internal">Solution Providers</a>  -->
            <a href="partners/security-innovation-alliance.html" class="d-block mt-3" datalink-id="newco:en-us:partners:security-innovation-alliance" datalink-type="internal">Security Innovation Alliance</a> 
            <div class="d-flex justify-content-between custom-border-bottom align-items-center custom-body-title mt-4"> 
             <div>
              PARTNER PORTAL
             </div> 
            </div> 
            <!-- <a href="https://partners.trellix.com/" target="_blank" class="d-block mt-3" datalink-type="external" datalink-id="newco:partners.trellix.com:">Anjali Sharper Key Partner Portal Login</a>  -->
           </div> 
          </div> 
          <div class="mobileSubMenu" id="mobile-content-6"> 
           <div class="offcanvas-header p-0"> 
            <div class="custom-mobile-subnav-link mobile-subnav-back-button d-flex justify-content-between custom-left-arrow w-100 bg-gray-light"> 
             <div class="offcanvas-title align-self-center custom-weight">
              Main menu
             </div> 
            </div> 
           </div> 
           <div class="offcanvas-body pb-6 pt-0 px-6"> 
            <div class="d-flex justify-content-between custom-border-bottom align-items-center custom-body-title"> 
             <div>
              RESOURCES
             </div> 
            </div> 
            <a href="services/education-services.html" class="d-block mt-3" datalink-id="newco:en-us:services:education-services" datalink-type="internal">Training and Education</a> 
            <!-- <a href="services.html" class="d-block mt-3" datalink-id="newco:en-us:services" datalink-type="internal">Consulting Services</a> 
            <a href="about/webinars.html" class="d-block mt-3" datalink-id="newco:en-us:about:webinars" datalink-type="internal">Webinars</a>  -->
            <a href="about/events.html" class="d-block mt-3" datalink-id="newco:en-us:about:events" datalink-type="internal">Events</a> 
            <a href="resource-library/case-studies.html" class="d-block mt-3" datalink-id="newco:en-us:resource-library:case-studies" datalink-type="internal">Case Studies</a> 
            <!-- <a href="resource-library.html" class="d-block mt-3" datalink-id="newco:en-us:resource-library" datalink-type="internal">Resource Library</a>  -->
            <div class="d-flex justify-content-between custom-border-bottom align-items-center custom-body-title mt-4"> 
             <div>
              MEDIA
             </div> 
            </div> 
            <a href="about/newsroom/press-releases.html" class="d-block mt-3" datalink-id="newco:en-us:about:newsroom:press-releases" datalink-type="internal">Press Releases</a> 
            <!--a href="/en-us/about/newsroom/news.html" class="d-block mt-3">News</a--> 
            <a href="about/newsroom/stories.html" class="d-block mt-3" datalink-id="newco:en-us:about:newsroom:stories" datalink-type="internal">Stories</a> 
            <a href="about/newsroom.html" class="d-block mt-3" datalink-id="newco:en-us:about:newsroom" datalink-type="internal"><b>View Newsroom</b></a> 
            <div class="d-flex justify-content-between custom-border-bottom align-items-center custom-body-title mt-4"> 
             <div>
              INTEGRATIONS
             </div> 
            </div> 
            <div class="d-flex justify-content-between custom-border-bottom align-items-center custom-body-title mt-4"> 
             <div>
              SECURITY AWARENESS
             </div> 
            </div> 
            <a href="security-awareness/endpoint/what-is-xdr.html" class="d-block mt-3" datalink-id="newco:en-us:security-awareness:endpoint:what-is-xdr" datalink-type="internal">What is XDR?</a> 
            <a href="security-awareness/endpoint/what-is-endpoint-security.html" class="d-block mt-3" datalink-id="newco:en-us:security-awareness:endpoint:what-is-endpoint-security" datalink-type="internal">What is Endpoint Security?</a> 
            <a href="security-awareness/endpoint/what-is-endpoint-detection-and-response.html" class="d-block mt-3" datalink-id="newco:en-us:security-awareness:endpoint:what-is-endpoint-detection-and-response" datalink-type="internal">What is EDR?</a> 
            <a href="security-awareness/cybersecurity/what-is-mitre-attack-framework.html" class="d-block mt-3" datalink-id="newco:en-us:security-awareness:cybersecurity:what-is-mitre-attack-framework" datalink-type="internal">What is MITRE?</a> 
            <a href="security-awareness/ransomware/what-is-ransomware.html" class="d-block mt-3" datalink-id="newco:en-us:security-awareness:ransomware:what-is-ransomware" datalink-type="internal">What is Ransomware?</a> 
            <a href="security-awareness.html" class="d-block mt-3" datalink-id="newco:en-us:security-awareness" datalink-type="internal"><b>View All Topics</b></a> 
           </div> 
          </div> 
         </div> 
        </div> 
        <!-- Desktop Navigation Dropdown Menu --> 
        <div class="custom-desktop-menu offcanvas offcanvas-top d-none d-lg-block bg-transparent position-absolute" tabindex="-1" id="desktopMenu" aria-label="Navigation Menu" data-bs-scroll="true" data-bs-backdrop="false"> 
         <div class="content-1 position-relative p-0 mega-menu container-xl px-md-4"> 
          <div class="p-6 bg-gray-light  gap-6 m-0 position-relative"> 
           <div class="links-wrapper"> 
            <div class="links-header d-block">
             COMPANY
            </div> 
            <hr class="w-100 m-0"> 
            <div class="w-100 d-flex flex-column justify-content-start"> 
             <a href="about/why-trellix.html" class="megamenu-link" datalink-id="newco:en-us:about:why-trellix" datalink-type="internal">Why Anjali Sharper Key?</a> 
             <a href="about.html" class="megamenu-link" datalink-id="newco:en-us:about" datalink-type="internal">About Us</a> 
             <a href="about/why-trellix/industry-recognitions.html" class="megamenu-link" datalink-id="newco:en-us:about:why-trellix:industry-recognitions" datalink-type="internal">Industry Recognitions</a> 
             <a href="about/leadership.html" class="megamenu-link" datalink-id="newco:en-us:about:leadership" datalink-type="internal">Leadership</a> 
             <a href="about/csr-sustainability.html" class="megamenu-link" datalink-id="newco:en-us:about:csr-sustainability" datalink-type="internal">Corporate Social Responsibility</a> 
             <a href="https://careers.trellix.com/" target="_blank" class="megamenu-link" datalink-type="external" datalink-id="newco:careers.trellix.com:">Careers</a> 
             <a href="contact-us.html" class="megamenu-link" datalink-id="newco:en-us:contact-us" datalink-type="internal">Contact Us</a> 
            </div> 
           </div> 
          </div> 
         </div> 
         <div class="content-2 position-relative p-0 mega-menu container-xl px-md-4"> 
          <div class="p-6 bg-gray-light d-flex gap-6 m-0 position-relative"> 
           <div class="links-wrapper"> 
            <div class="links-header d-block">
             PRODUCTS
            </div> 
            <hr class="w-100 m-0"> 
            <div class="w-100 d-flex flex-column justify-content-start"> 
             <a href="platform/xdr.html" class="megamenu-link" datalink-id="newco:en-us:platform:xdr" datalink-type="internal">Anjali Sharper Key XDR</a> 
             <a href="platform/endpoint-security.html" class="megamenu-link" datalink-id="newco:en-us:platform:endpoint-security" datalink-type="internal">Endpoint Security</a> 
             <a href="platform/data-security.html" class="megamenu-link" datalink-id="newco:en-us:platform:data-security" datalink-type="internal">Data Security</a> 
             <a href="platform/network-detection-and-response.html" class="megamenu-link" datalink-id="newco:en-us:platform:network-detection-and-response" datalink-type="internal">Network Detection and Response</a> 
             <a href="products.html" class="megamenu-overview-link megamenu-link" datalink-id="newco:en-us:products" datalink-type="internal">View All Products</a> 
            </div> 
           </div> 
          </div> 
         </div> 
         <div class="content-3 position-relative p-0 mega-menu container-xl px-md-4"> 
          <div class="p-6 bg-gray-light d-flex gap-6 m-0 position-relative"> 
           <div class="links-wrapper"> 
            <div class="links-header d-block">
             RESEARCH
            </div> 
            <hr class="w-100 m-0"> 
            <div class="w-100 d-flex flex-column justify-content-start"> 
             <a href="advanced-research-center.html" class="megamenu-link" datalink-id="newco:en-us:advanced-research-center" datalink-type="internal">Advanced Research Center</a> 
             <a href="advanced-research-center/adversarial-vulnerability-research.html" class="megamenu-link" datalink-id="newco:en-us:advanced-research-center:adversarial-vulnerability-research" datalink-type="internal">Adversarial &amp; Vulnerability Research</a> 
             <a href="advanced-research-center/threat-reports.html" class="megamenu-link" datalink-id="newco:en-us:advanced-research-center:threat-reports" datalink-type="internal">Reports</a> 
            </div> 
           </div> 
          </div> 
         </div> 
         <div class="content-4 position-relative p-0 mega-menu container-xl px-md-4"> 
          <div class="p-6 bg-gray-light d-flex gap-6 m-0 position-relative"> 
           <div class="links-wrapper"> 
            <div class="links-header d-block">
             SUPPORT
            </div> 
            <hr class="w-100 m-0"> 
            <div class="w-100% d-flex flex-row justify-content-start"> 
             <a href="support.html" class="megamenu-link" datalink-id="newco:en-us:support" datalink-type="internal">Product Support</a> 
             <a href="support/customer-success-plans.html" class="megamenu-link" datalink-id="newco:en-us:support:customer-success-plans" datalink-type="internal">Customer Success Plans</a> 
            </div> 
           </div> 
           </div> 
          </div> 
         <div class="content-5 position-relative p-0 mega-menu container-xl px-md-4"> 
          <div class="p-6 bg-gray-light d-flex gap-6 m-0 position-relative"> 
           <div class="links-wrapper"> 
            <a class="links-header d-block">PARTNERS</a> 
            <hr class="w-100 m-0"> 
            <div class="w-100 d-flex flex-column justify-content-start"> 
             <a href="partners.html" class="megamenu-link" datalink-id="newco:en-us:partners" datalink-type="internal">Partners Overview</a> 
         </div> 
         </div>
         </div>
         </div>
         <div class="content-6 position-relative p-0 mega-menu container-xl px-md-4"> 
          <div class="p-6 bg-gray-light d-flex gap-6 m-0 position-relative"> 
           <div class="links-wrapper"> 
            <div class="links-header d-block">
             RESOURCES
            </div> 
            <hr class="w-100 m-0"> 
            <div class="w-100 d-flex flex-column justify-content-start"> 
             <a href="services/education-services.html" class="megamenu-link" datalink-id="newco:en-us:services:education-services" datalink-type="internal">Training and Education</a> 
             <a href="about/events.html" class="megamenu-link" datalink-id="newco:en-us:about:events" datalink-type="internal">Events</a> 
             <a href="resource-library/case-studies.html" class="megamenu-link" datalink-id="newco:en-us:resource-library:case-studies" datalink-type="internal">Case Studies</a> 
             <!-- <a href="resource-library.html" class="megamenu-link" datalink-id="newco:en-us:resource-library" datalink-type="internal">Resource Library</a>  -->
            </div> 
           </div> 
           <div class="links-wrapper"> 
            <div class="links-header d-block">
             MEDIA
            </div> 
            <hr class="w-100 m-0"> 
            <div class="w-100 d-flex flex-column justify-content-start"> 
             <a href="about/newsroom/press-releases.html" class="megamenu-link" datalink-id="newco:en-us:about:newsroom:press-releases" datalink-type="internal">Press Releases</a> 
             <!--a href="/en-us/about/newsroom/news.html" class="megamenu-link">News</a--> 
             <a href="about/newsroom/stories.html" class="megamenu-link" datalink-id="newco:en-us:about:newsroom:stories" datalink-type="internal">Stories</a> 
             <a href="about/newsroom.html" class="megamenu-overview-link megamenu-link" datalink-id="newco:en-us:about:newsroom" datalink-type="internal">View Newsroom</a> 
            </div> 
           </div> 
           <div class="links-wrapper"> 
            <div class="w-100 d-flex flex-column justify-content-start"> 
            </div> 
           <div class="links-wrapper"> 
            <div class="links-header d-block">
             SECURITY AWARENESS
            </div> 
            <hr class="w-100 m-0"> 
            <div class="w-100 d-flex flex-column justify-content-start"> 
             <a href="security-awareness/endpoint/what-is-xdr.html" class="megamenu-link" datalink-id="newco:en-us:security-awareness:endpoint:what-is-xdr" datalink-type="internal">What is XDR?</a> 
             <a href="security-awareness/endpoint/what-is-endpoint-security.html" class="megamenu-link" datalink-id="newco:en-us:security-awareness:endpoint:what-is-endpoint-security" datalink-type="internal">What is Endpoint Security?</a> 
             <a href="security-awareness.html" class="megamenu-overview-link megamenu-link" datalink-id="newco:en-us:security-awareness" datalink-type="internal">View All Topics</a> 
            </div> 
           </div> 
          </div> 
         </div> 
        </div> 
       </header>`
}
}
customElements.define('my-header',MyHeader)