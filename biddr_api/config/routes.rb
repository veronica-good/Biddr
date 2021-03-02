Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :auctions do
    resources :bids, shallow: true, only: [:create]
  end
  resource :session, only:[:create, :destroy]
  resources :users, only:[:new, :create, :show]

  # API 
  namespace :api, defaults: { format: :json } do
    namespace :v1 do

      resources :auctions do
        resources :bids, only:[:create]
      end
      
      resource :session, only: [:create, :destroy]
      delete('/sign_out', to: 'sessions#destroy')
      resources :users, only: [:create]
      get('/current_user', to: 'sessions#get_current_user')
    end
  end

end
