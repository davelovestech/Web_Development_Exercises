Learn Ruby on Rails > 2 Saving Data > Saving Data
https://www.codecademy.com/courses/learn-rails/lessons/one-model/exercises/one-model-request-response-cycle?action=lesson_resume
The Codecademy course prompts are the numbered statements. My answers, and notes, are the lettered statements. I do not claim ownership for the bulk of what’s written below. It’s a condensed collection of notes from Codecademy, my own thoughts and information about the file names.
1.	Create a new Rails app named MessengerApp using the rails new command.
  a.	$ rails new MessengerApp
2.	Install the gems in Gemfile.
  a.	Cd to MessengerApp directory and then $ bundle install
3.	Run the local server to view the app at http://localhost:8000.
  a.	$ rails s -p 8000
4.	We need four parts to build a Rails app - a model, a route, a controller, and a view. Let's start here by creating a model. In the terminal, generate a new model named Message 
  a.	$ rails generate model Message
  b.	The rails generate model command created a new model named Message. In doing so, Rails created two files: a model file in app/models/message.rb. The model represents a table in the database. a migration file in db/migrate/. Migrations are a way to update the database.
5.	Open the migration file in db/migrate/ for the messages table. 
  a.	Inside the change method, add this line as line 4: t.text :content
  b.	The change method tells Rails what change to make to the database. Here it uses the create_table method to create a new table in the database for storing messages.
  c.	Inside create_table, we added t.text :content. This will create a text column called content in the messages tables.
  d.	The final line t.timestamps is a Rails command that creates two more columns in the messages table called created_at and updated_at. These columns are automatically set when a message is created and updated.
6.	Then in the terminal, run rake db:migrate
  a.	The rake db:migrate command updates the database with the new messages data model.
7.	Finally, run $rake db:seed
  a.	Finally the rake db:seed command seeds the database with sample data from db/seeds.rb.
8.	Generate a controller named Messages.
  a.	$ Rails generate controller Messages
9.	In the routes file, create a route that maps the URL /messages to the Messages controller's index action.
  a.	Open the routes file config/routes.rb and add this line: 
  get '/messages' => 'messages#index'
  b.	Rails provides seven standard controller actions for doing common operations with data. Here we want display a list of all messages, so we used the index action.
  c.	When a user visits http://localhost:8000/messages, the routes file maps this request to the Messages controller's index action.
  d.	The index action retrieves all messages from the database and stores them in variable @messages.
  e.	The @messages variable is passed on to the view. The view should display each message.
10.	In the Messages controller (app/controllers/messages_controller.rb), add an index action:
  def index @messages = Message.all end
11.	Open app/views/messages/index.html.erb. Under line 11, type the contents as you see here:
<% @messages.each do |message| %> 
<div class="message"> 
<p class="content"><%= message.content %></p> 
<p class="time"><%= message.created_at %></p> 
</div> 
<% end %>
  a.	The file index.html.erb is a web template. Web templates are HTML files that contain variables and control flow statements. Rather than write the same HTML over and over again for each message, we can use web templates to loop through and display data from the database.
  b.	<% @messages.each do |message| %> iterates through each message in @messages array. We created @messages in the Messages controller's index action.
  c.	For each message, we use <%= message.content %> and <%= message.created_at %> to display its content and the time when it was created.
12.	In the routes file, create a route that maps requests to messages/new to the Message controller's new action.
  a.	Open config/routes.rb
  b.	Add this line:  get '/messages/new' => 'messages#new'
13.	Then in the Messages controller below the index action, add the new action:
def new @message = Message.new end
14.	In the routes file, add this route to map requests to the Message controller's create action:
post 'messages' => 'messages#create'
15.	Then in the Messages controller below the new action, add a private method named message_params. 
private 
def message_params 
params.require(:message).permit(:content) 
end
16.	Between the new action and the private method, add the create action. Type:
def create 
@message = Message.new(message_params) 
if @message.save 
redirect_to '/messages' 
else 
render 'new' 
end 
end
17.	Next, in app/views/messages/new.html.erb under line 11, type in the contents as you see here:
<%= form_for(@message) do |f| %> 
<div class="field"> 
<%= f.label :message %><br> 
<%= f.text_area :content %> 
</div> 
<div class="actions"> 
<%= f.submit "Create" %> 
</div> 
<% end %>
18.	Finally in app/views/messages/index.html.erb below the <% @messages.each do |message| %>...<% end %> block, add:
  a.	<%= link_to 'New Message', "messages/new" %>
19.	When you visit http://localhost:8000/messages/new to create a new message, it triggers the first turn of the request/response cycle:
20.	The browser makes a HTTP GET request for the URL /messages/new.
21.	The Rails router maps this URL to the Messages controller's new action. The new action creates a new Message object @message and passes it on to the view in app/views/messages/new.html.erb.
22.	In the view, form_for creates a form with the fields of the @message object.
23.	Then when you fill out the form and press Create, it triggers the second turn of the request/response cycle:
24.	The browser sends the data to the Rails app via an HTTP POST request to the URL /messages.
25.	This time, the Rails router maps this URL to the create action.
26.	The create action uses the message_params method to safely collect data from the form and update the database.
