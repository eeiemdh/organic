
 


/////////////////////////////Registration Form//////////////////////////////////////////////  
  
 ///////// code from class tutorial ///////////////////////////// 
  
		 
		 

$(document).ready( function() {
	$('#register').submit( function() {
		if( !isEmail( this.email.value ) ) {
			$('#email').css('background-color','#f7bebe');
			$('#emailTip').show();
			return false;
		}
		if((this.fname.value ===null) || (this.fname.value==="" )){
		    $('#fname').css('background-color','#f7bebe');
			$('#FnameTip').show();
		    return false;
		}
		if((this.LName.value ===null) || (this.LName.value==="" )){
		    $('#LName').css('background-color','#f7bebe');
			$('#LNameTip').show();
		    return false;
		}
		if((this.address.value ===null) || (this.address.value==="" )){
		    $('#address').css('background-color','#f7bebe');
			$('#addressTip').show();
		    return false;
		}
		
	
	});
	
});







$(document).ready( function() {
	  $('#email').blur( function() {
		while( !isEmail( this.value ) ) {
			$('#email').css('background-color','#f7bebe');
			$('#emailTip').show();
			return false;
		}
		 $('#emailTip').hide();
		 $('#email').css('background-color','#fcfef5');
 });
 });
 
 $(document).ready( function() {
	  $('#fname').blur( function() {
		while( (this.value ===null) || (this.value==="" ) ) {
			$('#fname').css('background-color','#f7bebe');
			$('#FnameTip').show();
			return false;
		}
		 $('#FnameTip').hide();
		 $('#fname').css('background-color','#fcfef5');
 });
 });
 
 $(document).ready( function() {
	  $('#LName').blur( function() {
		while( (this.value ===null) || (this.value==="" ) ) {
			$('#LName').css('background-color','#f7bebe');
			$('#LnameTip').show();
			return false;
		}
		 $('#LnameTip').hide();
		 $('#LName').css('background-color','#fcfef5');
 });
 });
 
 $(document).ready( function() {
	  $('#address').blur( function() {
		while( (this.value ===null) || (this.value==="" ) ) {
			$('#address').css('background-color','#f7bebe');
			$('#addressTip').show();
			return false;
		}
		 $('#addressTip').hide();
		 $('#address').css('background-color','#fcfef5');
 });
 });


function isEmail(string)
{
	// A variable containing a regular expression representing an email address
	var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; 

	if (emailPattern.test(string))
	{
		return true;
	}
	else 
	{
		return false; // Stops form details from being submitted
	}
}

////////////////////////End Registration ////////////////////////////////////

////////////////////Home page Rollup//////////////////////////////////////////

//JQuery code from JQuery in Action by Bear Bibeault//////////////////////////////////

$(function(){
             $('div.div_right2_3 img').click(function()
			 {  
			 $(this).closest('div.div_right2_2').find('div.body').slideToggle();
                $.stop("true");			
			  });
			
		    });
			 




////////////////////////User switch style sheets///////////////////////////////////



var defaultStyleLink;
var otherStyleLink;

defaultStyleLink = document.getElementById("advanced");
otherStyleLink = document.getElementById("basic");

defaultStyleLink.onclick = function()
      {
       setActiveStyleSheet(this.id);
      };
 
otherStyleLink.onclick = function()
      {
       setActiveStyleSheet(this.id);
      };

 
 function setActiveStyleSheet(styleId)
        { 
		  var linkItem, linkArray;
          linkArray = document.getElementsByTagName("link");
   
          for(i=0; i < linkArray.length; i++) 
             {
		      linkItem=linkArray[i];
		      if(linkItem.getAttribute("rel").indexOf("style") != -1 && linkItem.getAttribute("title")) 
		         {
			      linkItem.disabled = true;
			      if(linkItem.getAttribute("title") == styleId) 
				    {
				     linkItem.disabled = false;
			        } // end if
		          } // end if
 
	          } // end for
 
        } // end function setActiveStyleSheet


 ////////////////////////////////End User switch stylesheets/////////////////////////////////////////////
 
 
 ////////////////////////////////Begin Cookies /////////////////////////////////////////////////////////
 function Enable_Cookie(name, value, days)
 
       {
	    var UserName;
        if(UserName = readCookie(name, value))
		   {
		   alert ( "Hello, " + UserName);
		   }else{createCookie (name, value, days);}
} // end function Enable_Cookie   

  function createCookie(name, value, days)
          {
		   var expires;
           if(days)
		     {
              var date = new Date();
              date.setTime(date.getTime()+ (days*24*60*60*1000));
              expires="; expires=" + date.toGMTString();
			 }else { expires = "";}

           document.cookie = name + "=" + value + expires + "; path=/";

           } // end function createCookie


function readCookie (name)
         {
          var nameEquals = name + "=";
          var cookieArray = document.cookie.split(';');
          for (var i =0; i < cookieArray.length; i++)
               {
                var c = cookieArray[i];
                while(c.charAt(0) == ' ')
                     {
                      c = c.substring (1, c.length);
                      } // end while
		     if((c.indexOf(nameEquals) ==0))
			{
			 return c.substring (nameEquals.length, c.length);
			}
			 } // end for
			 return null;
} // end function readCookie
							 
	
function getActiveStyleSheet()
	   { 
	    var i = 0;
	    var linkItem, linkArray;
	    linkArray = document.getElementsByTagName("link");
	    for(i=0; i < linkArray.length; i++)
	       {
		     linkItem = linkArray[i];
		     if(linkItem.getAttribute("rel").indexOf("style") != -1
		       && linkItem.getAttribute("title") && !linkItem.disabled)
			   {
			    return linkItem.getAttribute("title");
			   }
			} // end for
		return null;
	    } // end function getActiveStyleSheet

		
 window.onload = function()
   {
     var cookie = readCookie("style");
     var title;
     if(cookie)
	    {
		 title = cookie;
		 setActiveStyleSheet(title);
		 }
	}; // end window.onload()
	
window.onunload = function()
	{
	 var title = getActiveStyleSheet();
	 createCookie("style", title, 30);
	 };
	
  
 


	//////////////////////////End Cookies////////////////////////////////////////////////////////