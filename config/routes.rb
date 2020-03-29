Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static#index'
  namespace :v1, defaults: { format: 'json' } do 
  	get 'things', to: 'things#index'
  end
  #Forward all requests to StaticController#index but requests must be
  #non-Ajax (!req.xhr?) and HTML Mime type (req.format.html?).

  get '*page', to: 'static#index', constraints: ->(req) do
  	!req.xhr? && req.format.html?
  end

  #Forward root to StaticController#index
  root 'static#index'
end
