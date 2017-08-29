Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :posts
  get 'index' => 'posts#index'
  post 'create' => 'posts#create'
  root 'posts#index'
end
