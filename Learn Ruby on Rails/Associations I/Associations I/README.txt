Codecademy > Learn Ruby on Rails > Associations I > Associations I
https://www.codecademy.com/courses/learn-rails/lessons/one-many/exercises/one-many-adding-data?action=lesson_resume
I am working on the Codecademy Full Stack Web Developer Program. This is an interactive lesson in the Learn Ruby on Rails track titled Associations I. In the last section, we were introduced to building an app that stores data with a single model. This course will cover representing data with two separate models. I’ve copied over the Codecademy prompts, their individual answers and helpful hints that Codecademy provides and anything else that I might think of.
1.	Create a new app named TravelApp
a.	$ rails new TravelApp
2.	Install the gems
a.	$ cd TravelApp
b.	$ bundle install
3.	Run the local server and visit http://localhost:8000
a.	$ rails s -p 8000
4.	We need four parts to build the travel app: models, controllers, routes , and views. Generate a model named Tag.
a.	$ rails generate model Tag
5.	Generate another model named Destination
a.	$ rails generate model Destination
6.	In app/models/tag.rb add a has_many method, like this: 
class Tag < ActiveRecord::Base has_many :destinations end
a.	has_many :destinations denotes that a single Tag can have multiple Destinations.
7.	In app/models/destination.rb, add a belongs_to method: 
a.	belongs_to :tag
b.	belongs_to :tag denotes that each Destination belongs to a single Tag
c.	The has_many / belongs_to pair is frequently used to define one-to-many relationships. 
8.	Now that there’s an association between Tag and Destination, let’s continue and add columns to the migration files. Open the migration file in db/migrate/ for the tags table, and add the following columns:
a.	A string column called title
i.	t.string :title
b.	A string column called image
i.	t.string :image
c.	These two additions added two string columns title and image to the tags table.
9.	Next in the migration file for the destinations table, add the following columns:
a.	A string column called name
i.	t.string :name
b.	A string column called image
i.	t.string :image
c.	A string column called description
i.	t.string :description
d.	This added three string columns name, image, and description to the destinations table. 
e.	The line: t.references :tag
f.	This adds a foreign key pointing to the tags table. 
10.	Run the migration to update the database with Tag and Destination
a.	$ rake db:migrate
11.	Open up db/seeds.rb. We’ve added a few items here to seed the database with tags and destinations. Run rake db:seed to seed the database with the data in db/seeds.rb.
a.	This runs the migrations to update the database, and seeded the database with the data in db/seeds.rb.
12.	We’ve successfully finished adding models! We still need to create a controller, a route, and a view. Generate a controller named Tags
a.	$ rails generate controller Tags
13.	In the routes file, add a new route that maps requests to /tags to the Tags controller’s index action. 
a.	get ‘/tags’ => ‘tags#index’
14.	Then in the Tags controller, add the index action to display a list of all tags. To do this, fetch all tags from the database and store them in variable @tags.
def index
  @tags = Tag.all
end
In app/views/tags/index.html.erb at line 12, iterate through each tag in the @tags array. Then for each tag, display its title and image. We’ve provided CSS in app/assets/stylesheets/application.css. 
              <% @tags.each do |t| %>
<div class=”card col-xs-4”>
<%= image_tag t.image %>
<h2><%= t.title %></h2>
<%= link_to “Learn more”, tag_path(t) %>
</div>
<% end %>
15.	Visit http://localhost:8000/tags in the browswer.
16.	Let’s add another action to display a specific tag. Looking at the seven standard controller actions, we need to use the show action. Let’s set it up now. First in the routes file, add this route: 
a.	get ‘tags/:id’ => ‘tags#show’, as: :tag
17.	Then in the Tags controller, add the show action:
def show
@tag = Tag.find(params[:id])
@destinations = @tag.destinations
end
18.	In app/views/tags/show.html.erb inside the <h2> element, display a tag’s title.
a.	<h2 class=”tag-title”> <%= @tag.title %> </h2>
19.	Then in <div class=”cards”>…<?div>, iterate through each destination in the @destinations array and display its name, image and description. 
<div class=”cards row”>
<% @destinations.each do |t| %>
<div class=”card col-xs-4”>
<%t.image %>
<h2><% t.name %></h2>
<p><%= t.description %></p>
</div>
<% end %>
</div>
20.	Finally in app/views/tag/index.html.erb within the <% @tags.each do |t| %>…<% end % > block, add this link:
<%= link_to “Learn more”, tag_path(t) %>
a.	By giving the route in step 1 the name “tag”, Rails automatically creates a helper method named tag_path. We use tag_path(t) here to generate the URL to a specific tag’s path, for example /tag/1. 
21.	Visit http://localhost:8000/tags in the browser. Click on a ‘Learn more’ to see all destinations under that tag. 
a.	When a user visits http://localhost:8000/tags/1, the route get ‘/tags/:id’ => ‘tags#show’ sends this request to the Tags controller’s show action with {id: 1} in params.
b.	The @destinations = @tag.destinations retrieves all the destinations that belong to the tag, and stores them in @destinations. The has_many / belongs_to association lets us query for destinations like this. The tag and its destinations are sent to the view to be displayed.  
22.	Let’s add functionality to see a destination. Generate a controller named Destinations.
a.	$ rails generate controller Destinations
23.	Next in the routes file, map requests to /destinations/:id to the Destinations controller’s show action. Use as: to name this route “destination”.
a.	get ‘/destinations/:id’ => ‘destinations#show’, as: :destination
24.	Then in the Destinations controller, set up the show action. Use params to find a destination by id, and save it in @destination.
25.	Then in the view app/views/destinations/show.html.erb, display the destination’s image, name, and description.
        <%= image_tag @destination.image %>
        <h2><%= @destination.name %></h2>
        <p><%= @destination.description %></p>
26.	Finally in app/views/tags/show.html.erb below a destination’s description, use link_to to add a link to that destination
a.	<p><%= link_to "See more", destination_path(d) %></p>
b.	By giving the show route a name of “destination” Rails automatically creates a helper method named destination_path. Use destination_path to generate a URL to a specific destination’s path. 
27.	Visit http://localhost:8000/tags/1 in the browswer. Click on a destination to see its show page.
28.	We still need to add actions to update a destination’s name and description. We need to use the edit and update actions to do this. 
29.	First in the routes file (config/routes.rb), add these routes:
get '/destinations/:id/edit' => 
'destinations#edit', as: :edit_destination patch '/destinations/:id' => 'destinations#update'
30.	Then in the Destinations controller below the show action, add an edit action:
def edit @destination = Destination.find(params[:id]) end
31.	Below the edit action, add a private method named destination_params:
private def destination_params params.require(:destination).permit(:name, :description) end
32.	Between the dit action and the private method, add an update action:
def update @destination = Destination.find(params[:id]) if @destination.update_attributes(destination_params) redirect_to(:action => 'show', :id => @destination.id) else render 'edit' end end
33.	In app/views/destinations/edit.html.erb inside <div class=”container”>…</div>, use form_for to create a form with the fields of the @destination object.
34.	In app/views/destinations/edit.html.erb inside <div class=”container”>…</div>, use form_for to create a form with the fields of the @destination object. 
<%= form_for(@destination) do |f| %> <%= f.text_field :name %> <%= f.text_field :description %> <%= f.submit "Update", :class => "btn" %> <% end %>
35.	Finally in app/views/destinations/show.html.erb use link_to to create a link to the destination’s edit path:
<%= link_to "Edit", edit_destination_path(@destination) %>
36.	Awesome! Now we can update a destination’s name and description!
a.	When you visit http://localhost:8000/destinations/1/edit to edit a desination, it triggers the first turn of the request/response cycle:
i.	The browser makes a HTTP GET request for the URL /destinations/1/edit
ii.	The Rails router maps this URL to the Destinations controller’s edit action. The edit action finds the destination with id 1, stores it in @destination, and passes it on to the view app/views/destinations/edit.html.erb
iii.	In the view, form_for creates a form with the fields of the @destinations object.
iv.	Then, when you fill out the form and submit it, it triggers the second turn of the request/response cycle. 
v.	The browswer sends the data to the Rails app via an HTTP POST request to ther URL /destinations/update.
vi.	This time, the Rails router maps this URL to the update action.
vii.	The update uses the destination_params method to safely collect data from the form. It fiends the destination in the database, updates its attributes, and redirects to the destination’s show page. 


