Codecademy > Learn Ruby on Rails > 2 Saving Data > Threadly
https://www.codecademy.com/en/courses/learn-rails/projects/learn-rails_threadly?link_content_target=interstitial_project
Threadly wants to create a Rails app for their commenting service. When a user types a comment into the box and clicks the Post button, the comment is saved into a database. We need to display a list of all posts to the user. Also, when a user posts a new comment, it needs to be added to the database. I do not claim ownership over any of the following text. I’ve copied over the Codecademy prompts, their individual answers and helpful hints that Codecademy provides and anything else that I might think of.
1.	Create a new Rails app named threadly
a.	$ rails new threadly
2.	After you create the new app, switch to its folder. In the terminal, type:
a.	$ cd threadly 
3.	Install the gems in Gemfile
a.	$ bundle install
4.	Generate a model named Post
a.	$ rails generate model Post
5.	Open the migration file in db/migrate/, and add a string column called comment.
a.	Add this line to the migration file: t.text :comment
6.	Run a migration to update the database with the Post model
a.	$ rake db:migrate
7.	Generate a controller named Posts
a.	$ rails generate controller Posts
8.	In the routes file, add the resource route resources :posts.
a.	Open config/routes.rb and add “resources :posts”
9.	Run the “rake routes” command in the terminal to view all of the new URLs that the resource route maps to the Posts controller's seven standard actions.
a.	We need a controller action to handle GET requests and another controller action to handle POST requests. According to the output of rake routes, we can use
i.	posts#index to handle GET requests by displaying all comments. 
ii.	posts#create to handle POST requests by saving a new post to the database.
10.	Set up the posts#index controller action to handle GET requests:
a.	In the routes file, add the line “get 'index' => 'posts#index'”
b.	In the Posts controller, make an action named index: 
i.	def index 
@new_post = Post.new 
@all_posts = Post.order(created_at: :desc).all 
end
c.	In app/views/posts/index.html, create a Rails form with the fields of the new @new_post object to post comments:
<%= form_for(@new_post) do |f|%> <div class="field"> 
<%= f.text_field :comment, :placeholder => "Share your thoughts" %> 
<%= f.submit "Post", class:'btn' %> 
</div> 
<% end %>
d.	Replace the hardcoded <ul> element by using @all_posts:
<ul class="comments"> 
<% @all_posts.each do |p| %> 
<li><%= p.comment %></li> 
<% end %> 
</ul>
i.	Here we loop through each element in @all_posts and display it in an <li> element.
e.	In the routes file, set the index action as the root route.
i.	Add this line to routes.rb:   root 'posts#index'
f.	Start a Rails server to preview the app in the browser. 
i.	In the terminal, type: $ rails s -p 4001 This command starts a Rails server listening on port 4001. Then visit http://localhost:4001 to see your app in the browser.
11.	Set up the posts#create controller action to handle POST requests:
a.	In the routes file, add the line “post 'create' => 'posts#create'”
b.	In the Posts controller, write a private method named post_params. Require the model name post and permit the column name comment.
private 
def post_params 
params.require(:post).permit(:comment) 
end
c.	In the Posts controller, make an action named create. Use post_params to create a new Post object. After saving to the database, redirect to root_path.
def create 
@new_post = Post.new(post_params) 
if @new_post.save 
redirect_to root_path 
else render 'index' 
end 
end
12.	Check that your comment saved to the database using the Rails console. 
a.	Open a new terminal tab by clicking the icon. Switch into your app's folder using cd. Then start the Rails console with “rails console” and retrieve all comments in the database using “Post.all”. Your comment should show up in the results.


