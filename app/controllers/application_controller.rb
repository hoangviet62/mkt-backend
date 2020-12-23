# frozen_string_literal: true

class ApplicationController < ActionController::API
  acts_as_token_authentication_handler_for User, fallback: :none
  include ExceptionHandler
  include Response
  before_action :authenticated_user

  protected

  def http_auth_header
    auth_header = request.headers['Authorization']
    return auth_header.split(' ').last if auth_header.present?

    raise(ExceptionHandler::MissingToken, I18n.t('auth.message.missing_auth_header'))
  end
  
  def current_user
    user_id = Auth::Jwt.decode(http_auth_header)[0]['user_id']
    User.find(user_id) if user_id
  rescue StandardError
    ENV['AUDITED_USER']
  end

  def authenticated_user
    @current_user || current_user
  end

  def meta_attributes(collection, extra_meta = {})
    {
      page: collection&.current_page || 0,
      per_page: collection&.per_page || 0,
      next_page: collection&.next_page || nil,
      prev_page: collection&.previous_page || nil,
      total_pages: collection&.total_pages || 0,
      total: collection&.total_entries || 0
    }.merge(extra_meta)
  end
end
