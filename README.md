# User Management Web Application
In this project, we are going to create node web application with express and mongodb.

#### 1. To Run this project install modules using

`` npm install ``

#### 2. Then create .env file and add fields `PORT` and `MONGO_URI` Variable and specify Value. That's it. You are ready to go. To execute this project just type

`` npm start ``

### Documentation 
User management web application's back-end  is created Node.js ,Mogodb .The funcionality is consist of indicating names surnames,delate ,update ,adding new user and checking .
This application is sutaible not only at work but also at school for student table.Code is created in Visual studio .
Fornt -end is simple .Css .in green white black colours .It is table with id number.

First step installing Visual studio ,Node js ,Mogadb and using server .Command prompt and adding node.js.

### 1 Github repository 00013505/web-application 
- https://github.com/00013505/web-application
### 2 Hosting
- http://172.105.72.106:3030/

## Project structure:
Assets consists of Css and Js
src file consists of  controller  database ,model ,routes,services  ,serve.js
views consists of iclude
and
.env
.env.example
.gitignore .
License
package.js
Folders.

web-application-root name of the folder usually matches the name of your project
app.js the name of the file can be [app.js] or [index.js]
package.json project configuration file. usually initiated with [npm init]
.gitignore include /node_modules folder to this file. make sure not to upload the [node_modules]
folder itself to github or Intranet.
/public
/images
/javascripts
/styles
style.css
public folder is for keeping files essential for building user-interface (client-side)
/routes
index.js
users.js
route files will keep controllers/handlers for specific route groups. indicated route names are
examples and a student must name his/her own route files depending on the context.
/views
index.pug
layout.pug
[views] name for the ‘templates’ folder is expected but not required. This can be changed
but requires specific steps.