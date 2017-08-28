Rails.application.routes.draw do
    get 'pages/home' => 'pages#home'
    root 'pages#home'
  end
  
