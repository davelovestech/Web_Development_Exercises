Codecademy > Learn Ruby on Rails > Associations II> Associations II
https://www.codecademy.com/courses/learn-rails/lessons/one-many/exercises/one-many-adding-data?action=lesson_resume
I am working on the Codecademy Full Stack Web Developer Program. This is an interactive lesson in the Learn Ruby on Rails track titled Associations II. In previous lessons, we’ve used has_many / belongs_to associations to model a one-to-many relationship between data. BUT, not all data is one-to-many … For example, a movie that has many actors in the cast, but each actor also has many movies she’s starred in. To model this data, we need a many-to-many relationship. Let’s see how to do this by building a Rails app for a movie website. I’ve copied over the Codecademy prompts, their individual answers and helpful hints that Codecademy provides and anything else that I might think of.
1.	Create a new app named MovieApp
a.	$ rails new MovieApp
2.	Install the gems
a.	$ cd MovieApp
b.	$ bundle install
3.	Run the local server and visit http://localhost:8000
4.	Generate a model named Movie
a.	$ rails generate model Movie
5.	Generate another model named Actor
a.	$ rails generate model Actor
6.	Generate a third model named Part
a.	$ rails generate model Part
7.	In app/models/movie.rb, inside the Movie class add the following methods:
a.	has_many :parts
b.	has_many :actors, through: :parts
8.	In app/models/actor.rb, add the following methods:
a.	has_many :parts
b.	has_many :movies, through: :parts
9.	In app/models/part.rb, add the following methods:
a.	belongs_to :movie
b.	belongs_to :actor
10.	We just created three models – Movie, Actor, and Part. In the models, we used the has_many :through association to connect the Movie model to the Actor model through the Part model. In this way, the has_many :through association sets up a many-to-many relationship between movies and actors. 
11.	Now that there’s an association between Movieand Actor, let’s continue and add columns to the migration files. Open the migration file in db/migrate/ for the movies table, and add the following columns:
a.	A string column called title: t.string :title
b.	A string column called image t.string :image
c.	A string column called release_year t.string :release_year
d.	A string column called plot: t.string :plot
12.	Next in the migration file for the actors table, add the following columns:
a.	A string column called first_name: t.string first_name
b.	A string column called last_name: t.string last_name
c.	A string column called image: t.string :image
d.	A string column called bio: t.string :bio
13.	In the migration file for the parts table, add the following lines:
t.belongs_to :movie, index: true t.belongs_to :actor, index: true
These lines add foreign keys that point to the movie and actor tables. This sets up the many-to-many relationship.
14.	Run the migration to update the database with the tree tables
a.	$ rake db:migrate
15.	Open up db/seeds.rb. Codecademy has provided initial data to seed the database with. Run rake db:seed to seed the database with the data in db/seeds.rb.
a.	$ rake db:seed
b.	This command updates the database, seeding it with the data in db/seeds.rb.
16.	Now that the models are set up, let’s move on to the rest of the request/response cycle and create the routes, controllers, and views. Generate a controller named movies.
a.	$ rails generate controller Movies
17.	In the routes file, create a new route that maps the URL /movies to the Movies controller’s index action. 
a.	get '/movies' => 'movies#index'
18.	In the Movies controller, add the index action to display a list of all movies. To do this, fetch all movies from the database and store them in variable @movies. 
a.	def index @movies = Movie.All end
19.	In app/views/movies/index.html.erb inside <div class=”main”> iterate through ach movie in @movies and display the image, title, and release year. 
a.	The code for this is too long to post here. Look at the file for the code.
20.	Run the local server and visit http://localhost:8000/movies in the browser.
21.	Let’s add another action to display a specific movie and its actors. Looking at the seven standard controller actions, we need to use the show action to do this. In the routes file, add another route to send requests to URLs like /movies/1 to the Movie controller’s show action. Use as: to name this route “movie”.
a.	Add this line to routes: 	get '/movies/:id' => 'movies#show', as: :movie
22.	Then in the Movies controller, add the show action to display a specific movie and its actors. First use Movie.find to find the movie by its id. Then retrieve all actors that belong to the movie, and store them in @actors.
a.	def show @movie = Movie.find(params[:id]) @actors = @movie.actors end
23.	Open app/view/movies/show.html.erb. Inside <div class=”movie”>..</div>, display the movie’s image, title, release year, and plot. Below <h2>Cast</h23>, iterate through each actor and display the image, first name, last name, and bio. 
a.	Open up the file I’ve uploaded as the answer is too long to post here. 
24.	Finally in app/views/movies/index.html.erb below a movie’s plot, use link_to to add a link to that movie. Use3 “Learn more” for the link text. By giving the show route a name of “movie”, Rails automatically creates a helper method named movie_path, so use it to generate a URL to a specific movie’s path.
a.	<%= link_to "Learn more", movie_path(movie) %>
25.	Let’s add the ability to see all movies an actor has appeared in. Generate a controller named Actors.
a.	$ rails generate controller Actors
26.	In the routes file, add a route that maps the URL /actors to the Actors controller’s index action. 
a.	get '/actors' => 'actors#index'
27.	Then in the controller, add the index action to display a list of actors
a.	def index @actors = Actor.all end
28.	In app/views/actors/index.html.erb, iterate through each actor and display the image, first name, and last name. See the file I’ve uploaded for this it’s … it’s too long to fit here.
29.	Back in the routes file, add another route to send requests to URLs like /actors/1 to the Actors controller’s show action. Use as: to name this route “actor”.
a.	get '/actors/:id' => 'actors#show', as: :actor
30.	Then in the controller, add the show action to display a specific actor and the filmography. To do this, first find an actor by id. Then retrieve all movies that belong to the actor.
a.	def show @actor = Actor.find(params[:id]) @movies = @actor.movies end
31.	In app/views/actors/show.html.erb, display the actor’s image, first name, last name and bio. Then iterate through each movie and display its title, image, and release year.
a.	See my code for this … it’s a long answer.
32.	Finally in app/views/actors/index.html.erb below an actor’s name, use link_to to add a link to that actor. Use “Learn more” for the link text. By giving the show route a name of “actor”, Rails automatically creates a helper method named actor_path, so use it to generate a URL to a specific actor’s path. 
a.	<%= link_to "Learn more", actor_path(actor) %>
33.	Vist http://localhost:8000/actors. Click on an actor to see what movies he’s appeared in. 
a.	$ rails s -p 8000
