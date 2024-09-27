Rails.application.routes.draw do
  root 'home#index'

  namespace :api do
    resources :categories, only: [:index]
  end
end
