Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :products, only: [:index, :show] do 
      resources :reviews, only: [:index, :create, :destroy, :update]
    end
    resources :cart_items, only: [:create, :show, :index, :destroy, :update]
    # resources :products, only: [:search]
  end

  get "/api/search", to: "api/products#search"
  post "/api/search", to: "api/products#search"

end
