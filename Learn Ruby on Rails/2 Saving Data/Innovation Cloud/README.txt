Learn Ruby on Rails > 2 Saving Data > Innovation Cloud
https://www.codecademy.com/courses/learn-rails/projects/learn-rails_innovation-cloud
This activity revisits an earlier Codecademy exercise from the HTML & CSS track. Unit 7 HTML & CSS Projects has an HTML & CSS activity for Innovation Cloud. Back then, it was just a homepage for an upcoming conference. The Innovation Cloud Learn Ruby on Rails activity for unit 2 involves creating a rails app that collects email signups. I do not claim ownership over any of the following text. I’ve copied over the Codecademy prompts, their individual answers and helpful hints that Codecademy provides and anything else that I might think of.
1.	Create a new Rails app named innovation-cloud.
a.	$ rails new innovation-cloud
2.	After you create the new app, switch to its folder. In the terminal, type:
a.	$ cd innovation-cloud
3.	Install the gems in Gemfile. 	
a.	$ bundle install	
4.	Generate a model named Signup.
a.	$ rails generate model Signup
5.	Open the migration file in db/migrate/, and add a string column called email.
a.	Add “t.text :email” to line 4 of the migration file
6.	Run a migration to update the database with the Signup model.
a.	$ rake db:migrate
7.	Generate a controller named Signups.
a.	$ rails generate controller Signups
8.	We've prepared a controller named Pages in app/controllers/pages_controller.rb that has a action named thanks. In the routes file, map the request for the url /thanks to Pages controller's thanks action. We'll use this route later.
a.	Add this line to the routes file: get 'thanks' => 'pages#thanks'
9.	In the routes file, under the thanks route, add: 
a.	resources :signups
b.	This is called a resource route. It maps URLs to the Signups controller's seven standard actions
10.	In the terminal, run:
a.	$ rake routes
b.	This outputs all of the new URLs that the resource route created. 
c.	We need a controller action to handle GET requests and another controller action to handle POST requests. According to the output of rake routes, we can use:
i.	signups#new to handle GET requests by displaying the signup form. 
ii.	signups#create to handle POST requests by saving an email to the database.
d.	^That was just to note the URLs we can use for future steps. Nothing else is required for this step.
11.	Set up the signups#new controller action to handle GET requests:
a.	Inside the routes.rb file, add these two lines of code:
get 'new' => 'signups#new' 
post 'create' => 'signups#create'
b.	def new @signup = Signup.new end
c.	Inside app/views/signups/new.html.erb under line 37, create a form to gather email signups. Use form_for to create a form with the fields of the @signup object. Adapt your code from Saving Data Create messages I step 5/7.
<%= form_for(@signup) do |f|%> 
<div class="field"> 
<%= f.label :id %><br> 
<%= f.text_field :email, :placeholder => "Email" %> 
<%= f.submit "Join", class:'btn' %> 
</div> 
<% end %>
d.	In the routes file, set the new action as the root route.
i.	root 'signups#new'
e.	Start a Rails server to preview the app in the browser. 
i.	In the terminal, type: $ rails s -p 4001
12.	Set up the signups#create controller action to handle POST requests:
a.	In the Signups controller, write a private method named signup_params
private 
def signup_params 
params.require(:signup).permit(:email) 
end
i.	Strong parameters gives us a safe way to collect data from a form and update the Signup model. Here we require the model name signup and permit the column name email.
b.	In the Signups controller, make an action named create. Use signup_params to safely collect data from the form and update the database. After saving to the database, redirect to thanks_url. Adapt your code from the Saving Data exercise sub-step 5 "Create messages I."
def create 
@signup = Signup.new(signup_params) 
if @signup.save 
redirect_to '/thanks' 
else render 'new' 
end 
end
c.	Restart the Rails server and view the result by visiting http://localhost:4001/. Type in an email address and submit the form.
13.	Confirm that your email saved to the database. The Rails console is a useful tool to interact with Rails apps. We'll use it here to query the database.
a.	Make sure you’re in the app’s folder with $ cd innovation-cloud
b.	Start the Rails console by running: $ rails console
c.	When you enter the Rails console, retrieve all emails in the database by running the query: $ Signup.all
d.	To exit, type Ctrl+D



