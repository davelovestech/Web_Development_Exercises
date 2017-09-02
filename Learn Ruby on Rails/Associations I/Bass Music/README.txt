Codecademy > Learn Ruby on Rails > Associations I > Bass Music
https://www.codecademy.com/courses/learn-rails/projects/learn-rails_bass-music
Bass wants a Rails app for their music streaming service. Albums need to be displayed on the main page. Clicking on an album takes users to a page where they can see an album’s track listing. We need to build a few things for this app. The first piece of data we need to store is an album. An album contains a cover, title, and a artist. This means we’ll need an Album model to store this data. The second piece of data we need to store is a track. A track contains a song’s name and duration. This means we’ll need a Track model to store this data. We can connect  an album to its tracks using a  has_many/belongs_to association. I do not claim ownership over any of the following text. I’ve copied over the Codecademy prompts, their individual answers and helpful hints that Codecademy provides and anything else that I might think of.
1.	To preview your app at any point:
a.	In the terminal, type rails s -p 4001
b.	In the browser, visit http://localhost:4001
2.	Create a new Rails app named bass-music
a.	$ rails new bass-music
3.	After you create the new app, switch to its folder. In the terminal type:
a.	$ cd bass-music
4.	Install the gems in the Gemfile
a.	$ bundle install
5.	Generate a model named Album
a.	$ rails generate model Album
6.	Generate a model named Track
a.	$ rails generate model Track
7.	Associate the Album model with the Track model using the has_many and belongs_to methods.
a.	In app>models>album.rb
i.	Add the line: has_many : tracks
b.	In app>models>track.rb 
i.	Add the line: belongs_to :album
8.	Open up the migration file in db/migrate/ for the albums table, and add the following columns:
a.	A string column called cover: t.string :cover
b.	A string column called title: t.string :title
c.	A string column called artist: t.string :artist
9.	Open the migration file in db/migrate for the tracks table, and add the following columns:
a.	A string column called name: t.string :name
b.	A string column called minutes: t.string :minutes
c.	A references column to the Album model: t.references ;album, index: true
10.	Run a migration to update the database with the Album model and Track model.
a.	$ rake db:migrate
11.	Seed the database with the items that Codecademy provides in the db/seeds.rb file. Add at least onew more album with track records to add to the db/seeds.rb file. 
a.	Follow the syntax for the rest of the seeds.rb file to create new entries. See my db/seeds.rb file for example if you have trouble understanding.
12.	Generate a controller named Albums
a.	$ rails generate controller Albums
13.	In the routes file, add the resource route for the Albums controller.	
a.	resources :albums
14.	Run the rake routes command in the terminal to view all of the new URLs that the resource route created. We need an action to display a list of all albums, and another action to display a specific album. Looking at Rail’s seven standard controller actions, we can use albums#index and albums#show.
15.	Codecademy has prepared a layout file for the project. Find the provided link and copy the HTML and past it into your app/views/alyaouts/application.html.erb
16.	Set up the albums#index controller action:
a.	In the Albums controller, make an action named index that retrieves all albums from the database, and saves it into a variable named @albums.
i.	def index @albums = Album.all end
b.	In the view app/views/albums/index.html.erb, loop through each element in @albums and display an album’s details.
i.	The solution for this is too long to fit here. Go to my uploaded file for app/views/albums/index.html.erb for the solution.
c.	In the routes file, set the index action as the root route. View the result by running your project.
i.	root 'albums#index'
d.	Start a Rails server to preview the app in the browswer. In the terminal, type:
i.	$ rails s -p 4001
ii.	Go to http://localhost:4001
17.	In the albums controller, make an action named show. Retrieve a single album, and save it in @album. Then rerieve all of its tracks, and save them in @tracks.
a.	def show @album = Album.find(params[:id]) @tracks = @album.tracks end
18.	Finish the view in app/views/albums/show.html.erb. First display an album’s details again. Then, loop through each track and display its information. The code for this answer is too long. Look it up in the file that I upload.
