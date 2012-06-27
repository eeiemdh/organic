
    
 function validateForm()
{  var my_Fname=document.forms["Form_Register"]["Fname"].value;
   var my_Lname=document.forms["Form_Register"]["Lname"].value;
   var my_Address=document.forms["Form_Register"]["Address"].value;
   var my_Email=document.forms["Form_Register"]["Email"].value;
   var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
if (my_Fname==null || my_Fname=="")
  {
  alert("First name must be filled out");
  document.forms["Form_Register"].elements["Fname"].focus();
  return false;
  }
   if (my_Lname==null || my_Lname=="")
   {
   alert("Last name must be filled out");
   document.forms["Form_Register"].elements["Lname"].focus();
   return false;
   }
  
  if (my_Address==null || my_Address=="")
   {
   alert("Address must be filled out");
   document.forms["Form_Register"].elements["Address"].focus();
   return false;
   }
   

  
// This code from marketingtechblog.com   
            if (!filter.test(my_Email)) {
                 alert('Please provide a valid email address');
                 document.forms["Form_Register"].elements["Email"].focus();
				 return false;
                }
            else{alert("welcome " + my_Fname );}


 
  
  } // end validate_form
