source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.7.2'
gem 'rails', '~> 6.1.0'
gem 'mysql2', '~> 0.5'
gem 'puma', '~> 5.0'

gem 'bootsnap', '>= 1.4.4', require: false
gem 'devise'
gem 'rack-cors'
gem 'rubocop', '~> 1.6', require: false

group :development, :test do
  gem 'dotenv-rails'
  gem 'pry-rails'
end

group :development do
  gem 'listen', '~> 3.3'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
