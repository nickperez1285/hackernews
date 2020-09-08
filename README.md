# hackernews
react frontend
node backend 
to start backend  : " npm run server" or "npm start"
to run frontend : "npm start"


BACKEND STARTED 
Started login configuration 

created sessions login with knexsessions ( feel free to change if you know of something more simple or easier) ,

 password and login configured with Bcrypt , all routes can be password protected by adding "restricted" after the path name 




 Mohit  KYLE and CHRISTOPHER 
 Please create 3 database tables 

 -  users  -
 name
 username
 ID
 password 
 ( users have many posts,  have many comments )


 - posts - 
 ID
 title 
 content

 (belongs to users referenced by ID)


 - comments -
 ID
content 
 (belongs to users or posts referenced by ID)

 

