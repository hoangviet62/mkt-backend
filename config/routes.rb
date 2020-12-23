# frozen_string_literal: true

Rails.application.routes.draw do
  resources :products
  devise_scope :user do
    # post "sign_up", to: "registrations#create"
    post "sign_in", to: "sessions#create"
  end
end
