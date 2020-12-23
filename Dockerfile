FROM ruby:2.7.2-alpine3.12

ENV APP_HOME mkt-backend

ENV BUILD_PACKAGES="curl-dev ruby-dev build-base bash git gcompat" \
  DEV_PACKAGES="zlib-dev libxml2-dev libxslt-dev tzdata yaml-dev mysql-dev linux-headers" \
  RUBY_PACKAGES="ruby-json yaml nodejs"

# Update and install base packages and nokogiri gem that requires a
# native compilation
RUN apk update && \
  apk upgrade && \
  apk add --update\
  $BUILD_PACKAGES \
  $DEV_PACKAGES \
  $RUBY_PACKAGES && \
  rm -rf /var/cache/apk/* && \
  gem install bundler

RUN mkdir /${APP_HOME}
WORKDIR /${APP_HOME}

ADD Gemfile /${APP_HOME}/Gemfile
ADD Gemfile.lock /${APP_HOME}/Gemfile.lock

RUN bundle config build.nokogiri --use-system-libraries && \
  bundle config build.google-protobuf --with-cflags=-D__va_copy=va_copy && \
  BUNDLE_FORCE_RUBY_PLATFORM=1 bundle install --jobs $(nproc) && \
  bundle clean --force

ADD . /${APP_HOME}

RUN mkdir -p /${APP_HOME}/tmp
RUN mkdir -p /${APP_HOME}/tmp/pids
