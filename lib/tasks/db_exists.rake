# frozen_string_literal: true

namespace :db do
  desc 'DB: create if not exist and migration'
  task :exists do
    Rake::Task['environment'].invoke
    ActiveRecord::Base.connection
  rescue StandardError
    exit 1
  else
    exit 0
  end
end
