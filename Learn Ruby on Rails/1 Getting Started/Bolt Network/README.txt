Learn Ruby on Rails > 1 Getting Started > Bolt Network
https://www.codecademy.com/courses/learn-rails/projects/learn-rails_bolt-network
1.	Create a new Rails app named bolt-network. 
  a.	The code for that is $ rails new bolt-network
2.	After you create the new app, switch to its folder. 
  a.	In the terminal, type: $ cd bolt-network
3.	Install the gems in the Gemfile. 
  a.	The code for that is $ bundle install
4.	Generate a controller named Pages. In the Pages controller (app/controllers/pages_controller.rb) make an action named home for the Home page and about for the About page. 
  a.	The code for that is $ rails generate controller Pages. Open the controller @ app/controllers/pages_controller.rb. Add this code to it:
class PagesController < ApplicationController def home end def about end end
5.	In the routes file (config/routes.rb), first set the home action as the root route. Second, create a new route to map the url /about to the about action.
  a.	The code for that is Rails.application.routes.draw do root 'pages#home' get '/about' => 'pages#about' end. Note that #s go before the action that they are meant for. Here pages#home is for the home action and pages#about is for the about action. The “root” initiator creates a root route. The “get” initiator is for finding browser requests.
6.	Start a Rails server to preview the app in the browser. 
  a.	In the terminal, type: rails s -p 4001 Then visit http://localhost:4001 in the browser.
7.	In the app/views/pages/ directory, create a new view called about.html.erb. Copy the HTML from < https://s3.amazonaws.com/codecademy-content/projects/3/bolt-network/about.html> and paste it inside app/views/pages/about.html.erb.
  a.	This step is explained in the question itself.
8.	Set up the layout file (app/views/layouts/application.html.erb):
  a.	In the <head> element below the <title>, add the CSS files for Bootstrap and the web font:
<link rel="stylesheet" href="https://s3.amazonaws.com/codecademy-content/projects/bootstrap.min.css"> <link href='https://fonts.googleapis.com/css?family=Oxygen:300,400,700' rel='stylesheet' type='text/css'>

