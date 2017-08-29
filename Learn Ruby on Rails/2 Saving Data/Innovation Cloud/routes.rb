Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'thanks' => 'pages#thanks'
  resources :signups
  get 'new' => 'signups#new'
  post 'create' => 'signups#create'
  root 'signups#new'
end
