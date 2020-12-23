user = User.find_by_email('test@gmail.com')
User.create(email: 'test@gmail.com', password: '123456') if user.nil?