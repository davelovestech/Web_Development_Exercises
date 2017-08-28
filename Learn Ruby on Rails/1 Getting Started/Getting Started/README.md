I am working on the Codecademy Learn Ruby on Rails track. This note covers the steps and learnings from Unit 1 Getting Started.
This exercise is called Getting Started (in the track of Getting Started ... yea, it's confusing.) Here's how to get to the course
that I'm talking about:
Learn Ruby on Rails >  Getting Started > Hello Rails I
https://www.codecademy.com/en/courses/learn-rails/lessons/start/exercises/start-hello-rails
Here are the commands/steps and learnings from this exercise.

1.	$ rails new MySite
    a.	The rails new command is the starting point of every project. It created a new Rails app named MySite and generated the files and folders required. 
2.	$ bundle install 
    a.	It isn’t explained, but you’ll need to cd to the MySite directory to run this code IF you’re running this code on your own computer. The Codecademy site didn’t have issues. The bundle install command installed all the software packages needed by the new Rails app. 
3.	$ rails server
    a.	Codecademy has you go to http://localhost:8000., BUT my computer went straight to http://localhost:3000/. This command started the Rails development server, so we can preview the website. 
4.	rails generate controller Pages
    a.	The request hits the Rails router in config/routes.rb. The router recognizes the URL and sends the request to the controller. The controller receives the request and processes it. The controller passes the request to the view.
5.	Open app/controllers/pages_controller.rb and add a home method: 
class PagesController < ApplicationController def home end end
    a.	The rails generate controller Pages command generated a new controller named Pages. This created a file named app/controllers/pages_controller.rb. Inside the new Pages controller, we added a method called home. Methods in Rails controllers are also referred to as controller actions, so here we added the home action to the Pages controller.
6.	Open config/routes.rb and underneath line 1, type: get 'welcome' => 'pages#home'
    a.	Now when a user visits http://localhost:8000/welcome, the route get 'welcome' => 'pages#home' will tell Rails to send this request to the Pages controller's home action.
7.	Open app/views/pages/home.html.erb, and type in the following HTML. Fill in your own name.
#    <div class="main"> 
#      <div class="container"> 
#        <h1>Hello my name is David</h1> 
#          <p>I make Rails apps.</p>
#      </div>
#    </div>
8.	View your app by visiting http://localhost:8000/welcome in the browser.
