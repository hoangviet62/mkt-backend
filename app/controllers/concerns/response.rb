module Response
  def response_data(object, meta_data = nil, status = :ok)
    obj = { data: object }
    obj[:meta] = meta unless meta_data.nil?
    render json: obj, status: status
  end

  def response_errors(messages, status = :unprocessable_entity)
    render json: { errors: messages }, status: status
  end
end
