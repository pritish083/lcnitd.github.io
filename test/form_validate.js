<script type="text/javascript">
    function validate()
    {
        var x=document.forms["signup"]["name1"].value
        if (x==null || x=="")
        {
          alert("Name should not be empty");
          return false;
        }
        else
        {
         var letters = /^[A-Za-z ]+$/;  
         if(!x.match(letters))  
         {  
          alert('Name must contain letters only.');  
          return false;  
         }  
         if(x.length<=2)
         {
          alert("Name should contain atleast 3 letters.");
          return false;
         }
        }
       
     var x=document.forms["signup"]["institute1"].value
       if (x==null || x=="")
       {
        alert('Enter your Institute.');
        return false;
       }
       else
       {
         var letters = /^[A-Za-z ]+$/;  
         if(!x.match(letters))  
         {  
          alert('College must contain letters only.');  
          return false;  
         }  
         if(x.length<=2)
         {
          alert("College must contain atleast 3 letters.");
          return false;
         }
       }
     var x=document.forms["signup"]["city1"].value
       if (x==null || x=="")
       {
        alert("Enter your City.");
        return false;
       }
       else
       {
        var letters = /^[A-Za-z ]+$/;  
        if(!x.match(letters))  
        {  
         alert('City must contain letters only.');  
         return false;  
        }  
        if(x.length<=2)
        {
          alert("City must contain atleast 3 letters.");
          return false;
        }
       }
     
       var x=document.forms["signup"]["contact1"].value
       if (x==null || x=="" || x.length!=10)
       {
        alert("Contact must be valid that should be of 14 digits.");
        return false;
       }
     else
     {
     var digits =/^(\+91-|\+91|0)?\d{10}$/;
     if(!x.match(digits))
     {
      alert("Please match the requested format of contact");
    return false;
     }
     }
     
       var x=document.forms["signup"]["email1"].value
       var atpos=x.indexOf("@");
       var dotpos=x.lastIndexOf(".");
       var letters = /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+[a-zA-Z0-9_-]+@[a-zA-Z0-9]+[a-zA-Z0-9.-]+[a-zA-Z0-9]+.[a-z]{2,4}$/;
       if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
       {
        alert("Not a valid e-mail address");
        return false;
       }
       else if(!x.test(letters))
       {
        alert("Not a valid e-mail address");
        return false;
       }
     var y=document.forms["signup"]["councilpref1"].value
     alert(y);
       
       
   }
   function validateip()
   {
   
        var x=document.forms["ip"]["name2"].value
        if (x==null || x=="")
        {
          alert("Name should not be empty");
          return false;
        }
        else
        {
         var letters = /^[A-Za-z ]+$/;  
         if(!x.match(letters))  
         {  
          alert('Name must contain letters only.');  
          return false;  
         }  
         if(x.length<=2)
         {
          alert("First name should contain atleast 3 letters.");
          return false;
         }
        }
       
     var x=document.forms["ip"]["institute2"].value
       if (x==null || x=="")
       {
        alert('Enter your Institute.');
        return false;
       }
       else
       {
         var letters = /^[A-Za-z ]+$/;  
         if(!x.match(letters))  
         {  
          alert('College must contain letters only.');  
          return false;  
         }  
         if(x.length<=2)
         {
          alert("College must contain atleast 3 letters.");
          return false;
         }
       }
     var x=document.forms["ip"]["city2"].value
       if (x==null || x=="")
       {
        alert("Enter your City.");
        return false;
       }
       else
       {
        var letters = /^[A-Za-z ]+$/;  
        if(!x.match(letters))  
        {  
         alert('City must contain letters only.');  
         return false;  
        }  
        if(x.length<=2)
        {
          alert("City must contain atleast 3 letters.");
          return false;
        }
       }
     
       var x=document.forms["ip"]["contact2"].value
       if (x==null || x=="" || x.length!=10)
       {
        alert("Contact1 must be valid that should be of 10 digits.");
        return false;
       }
     else
     {
     var digits =/^(\+91-|\+91|0)?\d{10}$/;
     if(!x.match(digits))
     {
      alert("Please match the requested format of contact");
    return false;
     }
     }
     
       var x=document.forms["ip"]["email2"].value
       var atpos=x.indexOf("@");
       var dotpos=x.lastIndexOf(".");
       var letters = /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+[a-zA-Z0-9_-]+@[a-zA-Z0-9]+[a-zA-Z0-9.-]+[a-zA-Z0-9]+.[a-z]{2,4}$/;
       if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
       {
        alert("Not a valid e-mail address");
        return false;
       }
       else if(!x.test(letters))
       {
        alert("Not a valid e-mail address");
        return false;
       }
   }
   </script>  