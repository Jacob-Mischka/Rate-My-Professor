<%-- 
    Document   : Pick My Professor Homepage
    Created on : Nov 15, 2013, 11:51:52 PM
    Author     : Bobby and the Lites
--%>

<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link href="Content/bootstrap.css" rel="stylesheet">
        <link href="Content/bootstrap-responsive.css" rel="stylesheet">
        <title>Pick My Professor HomePage</title>
        <script src="main.js"></script>       
    </head>
    <body>
    <div class="container">
        <div class="row">
        <div class= "span5 centered">
            <img src="Images/WhitewaterLogo.gif" alt="Whitewater Logo">
        </div>
        </br>    
        <div class="span4 centered">    
        <select class="span4" id="subjects" onmousedown="writeSubjects()"> 
                <option>Select Course</option>                             
       </select>
       </br>       
       <select class="span4" id="courses" onmousedown="writeCourses()" style="visibility:hidden">
                <option>Select Catalog Number</option>                           
       </select>
       </div>
       <div class= "span5 centered">
            <table class="table table-bordered" id="teachers">
                <tr>
                  <td>Professor Name</td>               
                </tr>
                <tr>
                  <td>Professor Name</td>               
                </tr>
            </table>
       </div>
        <div class= "span11 centered"style="height:40%;">
            <iframe src="" style="width:100%; height:950px; border:2px solid;border-radius:25px;" scrolling="no"></iframe>
        </div>             
        </div>
    </div>    
    </body>
</html>
