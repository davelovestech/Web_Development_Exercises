
Broadway wants to build a Rails app for their home page. We'll need to build a route, a controller, and a view. To preview the app, type $ rails s -p 4001 and then go to http://localhost:4001.

The first prompt is to create a new Rails app named broadway. The command for that is $ rails new broadway.
The second question is to switch to the folder of broadway. That calls for $ cd broadway. We need to switch to the destination folder before installing the gems. The next step is to install the gems in the Gemfile. The command for that is $ bundle install.
Now, we need to generate a controller named Pages. The command for that is $ rails generate controller Pages.
In the Pages controller (app/controllers/pages_controller.rb) make an action named home for the home page. After navigating to that file, you'll need to add def home end in between the 'class PagesController < ApplicationController" and the final "end."
In the routes file (config/routes.rb), map the request for the url /pages/home to Pages controller's home action. This request is similar to the Getting Started activity in that the same location is used. This route file needs to have the same formatting as that last activity, BUT instead of using this code:
Rails.application.routes.draw do
get 'welcome' => 'pages#home'
end
We need to have this code:
Rails.application.routes.draw do
  get 'pages/home' => 'pages#home'
end
The only change is the initial hyperlink. Instead of having /welcome as the destination hyperlink, this time we need to have pages/home BECAUSE that's what step 6 asks for. 
Awesome! this site is lookin' good :D
Now, step 8 is asking for updating the app/views/pages/home.html.erb file by adding about, Work, Team and Contact to the header. This is easy HTML stuff ... as a reminder, make outer <ul></ul> tags for the unordered list and then have <li></li> tages for each of the four 
items. 
The next part of step 8 is to write CSS in app/assets/stylesheets/pages.css.scss to display them on the same line. The CSS part is easy. That's .nav li {display: inline; } 
It also asks to change the background of the jumbotron section. We need background: url(the-url) for that. I've copied the relevant code here:
.jumbotron {
  background: url(https://s3.amazonaws.com/codecademy-content/projects/broadway/bg.jpg) no-repeat center center;
  background-size: cover;
  height: 800px;
}
It also asks for styling a link that says get started. Here's the CSS for that:
.btn-primary {
  background-color: #333;
  color: #fff;
  padding: 16px 40px;
}
And here's the HTML for that: <a class="btn-primary" href="#">Get started</a>
Now it asks to change the confing/routes.rb file to set the home action as the app's home page. You could get rid of the get'pages/home' => 'pages#home' line, but I've left it. The only addition is that I have added a line below that states "root 'pages#home'
In the terminal press Ctrl+C to shut down the server. Then type rails server -p 4001 to restart the server. It should be lookin' good :D
