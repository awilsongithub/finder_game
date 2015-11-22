#app.rb is our app and all routes
#requires bunlder to bundle in the gems etc.

# !!!!!!!!! RUN bundle AFTER any RUBY FILE CHANGES   !!!!!!!!!
# !!!!!!!!! THEN bundle exec rackup TO LAUNCH SERVER !!!!!!!!!

require 'bundler'
Bundler.require # Bundler class

################ routes #####################################

# get layout first (how??) then get this at root
# get '/' do
#    main_hash = {
#       :name => 'small animals',
#       :message => 'some animals'
#    }
#    return main_hash.to_json
# end

#try putting erb route to layout html file at root....
get '/' do
   erb :layout
end

get '/content/' do
   erb :content
end
