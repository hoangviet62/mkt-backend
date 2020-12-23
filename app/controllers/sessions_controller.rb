class SessionsController < ApplicationController
  before_action :sign_in_params, only: :create
  before_action :user, only: :create
  # sign in
  def create
    if user.valid_password?(sign_in_params[:password])
      sign_in "user", user
      response_data(user)
    else
      response_errors(['Signed In Failed - Unauthorized'], :unauthorized)
    end
  end

  private
  def sign_in_params
    params.permit :email, :password
  end

  def user
    user = User.find_for_database_authentication(email: sign_in_params[:email])
    response_errors(['Signed In Failed - Unauthorized'], :unauthorized) if user.nil?
    user
  end
end
