# frozen_string_literal: true

require 'logger'

logger = Logger.new(STDOUT)

DATABASE = ENV['MYSQL_DATABASE']

namespace :db do
  desc 'Create database and run migration'
  task :run do
    client = Mysql2::Client.new(
      host: ENV['MYSQL_HOST'],
      username: ENV['MYSQL_USERNAME'],
      password: ENV['MYSQL_PASSWORD']
    )
    created = false
    client.query("SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = '#{DATABASE}'").each do |row|
      logger.info "Database #{DATABASE} already created"
      created = true
    end

    unless created
      logger.info 'Creating database'
      statement = client.prepare("CREATE DATABASE #{DATABASE};")
      statement.execute
      logger.info 'Database created successfully'
    end

    logger.info 'Running migration'
    Rake::Task['db:migrate'].invoke
    logger.info 'Migration finished'
  end
end
