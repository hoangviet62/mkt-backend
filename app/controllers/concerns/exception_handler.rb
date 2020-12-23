module ExceptionHandler
  extend ActiveSupport::Concern

  included do
    rescue_from Exception, with: :handle_exception

    rescue_from ActionController::RoutingError, with: :route_not_found
    rescue_from ActionController::ActionControllerError, with: :route_not_found
    rescue_from ActionController::ParameterMissing, with: :bad_request

    def route_not_found(error = 'Api not found')
      render json: { error: 404, message: error }, status: :not_found
    end

    def bad_request(error)
      render json: { error: 400, message: error.message }, status: :bad_request
    end

    def statement_invalid(error)
      render json: { error: 400, message: error.message }, status: :bad_request
    end

    def record_not_found(error)
      render json: { error: 404, message: error.message }, status: :not_found
    end

    def handle_exception(error)
      render json: { error: 500, message: error.message }, status: :internal_server_error
    end
  end

  private

  def unprocessable_entity_request(error)
    render json: { messages: [error.message] }, status: :bad_request
  end

  def unauthorized_request(error)
    render json: { messages: [error.message] }, status: :unauthorized
  end
end
