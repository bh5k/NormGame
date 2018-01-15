# NormGame

## Introduction
So you want to set this guy up, eh? 
Well that's cool. So long as you promise not to judge. This was one of my first forays into Angular.

## Dependencies
1. Apache2 server
2. PHP5 with mysqli
   - TBH, You probably already have this if you have the first thing
3. MySQL
   - Same as 2
4. Other stuff
   - There's a bunch of web depencies (like Angular) that the app will load in at page load from places like Google. You don't have to worry about these. 

## Install
1. Clone the repo into your html directory
2. Create a new mysql database. For all of these steps, I suggest names for stuff. You don't have to follow my suggestions though, since, on step 5 you'll tell the app what you named everything. 
   - CREATE DATABASE normgame;
3. Create the necessary table in that database. 
   - Something like this: CREATE TABLE emails ( email VARCHAR(60) NOT NULL,  score INT(6) NOT NULL,  timestamp TIMESTAMP );
4. Create a new mysql user with permissions.
   - Something like this: GRANT ALL ON normgame.* TO 'normgame' IDENTIFIED BY 'password';
5. Open api.php and update the variables at the top of the page with stuff you just created.
   - $urlpass is the thing that api.php expects to be able to see the page from the browser. EG. normgame.example.com/api.php?pass=normsarecool
```
$urlpass = "normsarecool";

$host = "localhost";
$user = "normgame";
$pass = "password";
$db = "normgame";
```
6. You can change the questions by opening up questions.json, or you can keep my already amazing questions.
7. Point your DNS to the site.
8. Give yourself a high five and let your boss know that you're done! You probably deserve a raise from how technically demanding installing this is. 

## Usage
Any user can visit the domain you install this to and complete the quiz. At the end they'll be asked for their email. If they fill that out, the app will record their email, their score, and the time they completed the quiz. You can quickly review the list of users who have completed the quiz by visiting /api.php?pass='whatever you set this to'. 

## Fun Stuff
The repo includes the Norms Poster, which would be good to reference if people haven't seen it.
You can change the images easily by replacing them without renaming. 
You can also click on the camera in the bottom right on any page in the app to open up a full view of the image. 
If you check out the git history of api.php, you can see me absent mindedly committing my old password and other information. Clearly, I am very cool. 

