Codecademy > Learn Ruby on Rails > Associations I > Bookmarks
https://www.codecademy.com/courses/learn-rails/projects/learn-rails_bookmarks
I am working on the Codecademy Full Stack Web Developer Program. This is a freeform project that is part of the Associations I unit of the Codecademy Learn Ruby on Rails track. Bookmarks wants a Rails app for their best-seller list. Books are listed by rank on the main page. Clicking on a book takes users to a page where they can read editorial reviews. I’ve copied over the Codecademy prompts, their individual answers and helpful hints that Codecademy provides and anything else that I might think of.
1.	Create a new Rails app named bookmarks
a.	$ rails new bookmarks
2.	After you create the new app, switch to its folder.
a.	$ cd bookmarks
3.	Install the gems in the Gemfile
a.	$ bundle install
4.	Generate a model named Book
a.	$ rails generate model Book
5.	Generate a model named Review
a.	$ rails generate model Review
6.	Associate the Book model with the Review model using the has_many and belongs_to methods:
a.	Open up app/models/book.rb and add the has_many method
i.	has_many :reviews
b.	Open up app/models/review.rb and add the belongs_to method
i.	belongs_to :book
7.	Open the migration file in db/migrate/ for the books table, and add the following columns:
a.	A string column called title
i.	t.string :title
b.	A string column called author
i.	t.string :author
c.	A string column called description
i.	t.string :description
d.	A string column called publisher
i.	t.string :publisher
e.	An integer column called weeks_on_list
i.	t.integer :weeks_on_list
f.	An integer column called rank_this_week
i.	t.integer :rank_this_week
8.	Open the migration file in db/migrate/for the reviews table, and add the following columns:
a.	A string column called author
i.	t.string :author
b.	A string column called comment
i.	t.string :comment
c.	A references column to the Book model
i.	t.references :book
d.	Run a migration to update the database with the Book model and Review model
i.	$ rake db:migrate
9.	Codecademy has data to seed the database with … see the provided link. Copy the items and paste them into the db/seeds.rb file.
a.	Open the file Codecademy provides … notice the syntax. Replicate it and then save it in db/seeds.rb
10.	Run rake db:seed to seed the database with the data in db/seeds.rb
11.	Generate a controller named Books
a.	rails generate controller Books
12.	In the routes file, add the resource route for the Books controller
a.	resources :books
13.	Run the rake routes command in the terminal to view all of the new URLs that the resource route created. We need an action to display a list of all books, and another action to display a specific book. Looking at the Rail’s seven standard controller actions, we can use books#index and books#show.
14.	Set up the books#ndex controller action:
a.	def index @books = Book.all
15.	Open index.html.erb inside app/views/books directory. Finish the view to display a book’s details. See my uploaded index.html.erb file for this … it’s too complicated to list here. Essentially, we’re using Ruby to cycle through the migration file’s data on the books and then using HTML to post that.
16.	In the routes file, set the index action as the root route. View the result by running your project.
a.	root 'books#index'
17.	Set up the books#show controller action
a.	In the Books controller, make an action named show:
def show @book = Book.find(params[:id]) @reviews = @book.reviews end
18.	Restart the rails server and view the result by visiting http://localhost:4001/
