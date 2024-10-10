Rails.application.routes.draw do
  # Devise routes for regular users
  devise_for :users
  
  # Home page route
  root 'home#index'

  # API namespace for JSON endpoints
  namespace :api do
    resources :categories, only: [:index]
  end

  # Admin namespace for admin-specific actions
  namespace :admin do
    # AdminUser sign-up routes
    resources :admin_users, only: [:new, :create] # Handles sign-up form and creation

    # Admin session management (login/logout)
    get 'login', to: 'admin_sessions#new'
    post 'login', to: 'admin_sessions#create'
    delete 'logout', to: 'admin_sessions#destroy'

    # Admin-specific resources
    resources :categories, only: [:new, :create, :index]
    resources :products, only: [:new, :create, :index]

    # Admin dashboard
    get 'dashboard', to: 'admin_dashboard#index'
  end

  # Custom route for checking the current user
  get '/users/current', to: 'users#current'
end
