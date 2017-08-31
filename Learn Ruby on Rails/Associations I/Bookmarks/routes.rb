Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  #resources :books
  get 'books' => 'books#index'
  get 'books/:id' => 'books#show', as: :review
  root 'books#index'
end
