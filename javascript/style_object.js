



/////////////////////////////Registration Form//////////////////////////////////////////////  


$(document).ready( function() {
// @author Enda McDonagh X12100871
// @reference: class tutorial
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
// @author Enda McDonagh X12100871
// @reference Class tutorial
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
// @author Enda McDonagh X12100871
// @reference Class tutorial
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
// @author Enda McDonagh X12100871
// @reference Class tutorial
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
// @author Enda McDonagh X12100871
// @reference Class tutorial
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
    // @reference Class tutorial
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
$(function(){
// @author Enda McDonagh X12100871
// @reference "JQuery in Action" by Bear Bibeault Yehuda Katz
    $('div.div_right2_3 img').click(function()
    {
        $(this).closest('div.div_right2_2').find('div.body').slideToggle();
        $.stop("true");
    });

});

//////////////////////Set active link //////////////////////////////////

$(document).ready(function(){
// @author Enda McDonagh X12100871
// @reference http://www.jessenicola.com/blog/jquery-set-active-links-current-url
    var pathname = window.location.pathname;
    var pathname = pathname.split('/');
    var tester = pathname[pathname.length-1];

    $('#links a').each(function(){
        var test = $(this).attr('href');
        var test = test.split('./');
        var test = test[test.length-1];
        if(test == tester){
            $(this).addClass('active');
        }
    });
});




////////////////////////User switch style sheets///////////////////////////////////



var defaultStyleLink;
var otherStyleLink;

defaultStyleLink = document.getElementById("advanced");
otherStyleLink = document.getElementById("basic");

defaultStyleLink.onclick = function()
// @reference class tutorial
{
    setActiveStyleSheet(this.id);
};

otherStyleLink.onclick = function()
// @reference class tutorial
{
    setActiveStyleSheet(this.id);
};


function setActiveStyleSheet(styleId)
// @reference class tutorial
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

/////////////////////////////////Courses page //////////////////////////////////////////////////////
var bannerImg = new Array();
bannerImg[0]="./images/cheese3.jpg";
bannerImg[1]="./images/cheese4.jpg";
bannerImg[2]="./images/cheese5.jpg";
bannerImg[3]="./images/cheese6.jpg";
bannerImg[4]="./images/cheese7.jpg";

var newBanner = 0;
var totalBan = bannerImg.length;
function cycleBan(){
// @author Enda McDonagh X12100871
// @reference http://www.go4expert.com/forums/showthread.php?t=1012
    var id = new Array();
    id[0] = document.getElementById("banner1");
    id[1] = document.getElementById("banner2");
    id[2] = document.getElementById("banner3");
    id[3] = document.getElementById("banner4");
    id[4] = document.getElementById("banner5");
    newBanner++;

    if(newBanner == totalBan)
    { newBanner=0;
    }

    for( i = 0; i< 5; i++){
        id[i].src=bannerImg[newBanner];
    }

// set time for length of image display
    setTimeout("cycleBan()", 4*1000);
} // end function cycleBan	


$(document).ready( function() {
    cycleBan()
	});


////////////////////////////////Begin Cookies /////////////////////////////////////////////////////////
function Enable_Cookie(name, value, days)
// @reference class tutorial 
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
//@reference class tutorial
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
{// @reference class tutorial
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
{// @reference class tutorial
    var cookie = readCookie("style");
    var title;
    if(cookie)
    {
        title = cookie;
        setActiveStyleSheet(title);
    }
}; // end window.onload()

window.onunload = function()
{// @reference class tutorial
    var title = getActiveStyleSheet();
    createCookie("style", title, 30);
};





//////////////////////////End Cookies////////////////////////////////////////////////////////