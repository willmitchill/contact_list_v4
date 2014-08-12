# Homepage (Root path)
get '/contacts' do
  contacts = Contact.all
  # erb "index.erb"
  content_type :json
  contacts.to_json
end

post '/contacts' do
  content_type :json

  @contact = Contact.new(params)

    if @contact.save
      @contact.to_json
    else
      halt 500
    end
end
