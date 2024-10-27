# Clear all existing data in the categories table
Category.delete_all

# Reset the primary key sequence to start from 1
ActiveRecord::Base.connection.reset_pk_sequence!('categories')

# Seed new data into the categories table
Category.create(name: "Gaming Accessories", description: "Gaming Accessories category")
Category.create(name: "Laptops", description: "Laptops category")
Category.create(name: "Monitors", description: "Monitors category")
Category.create(name: "Accessories", description: "Accessories category")
Category.create(name: "Desktops", description: "Desktops category")
Category.create(name: "Switches", description: "Switches category")
Category.create(name: "Routers", description: "Routers category")
Category.create(name: "Projectors", description: "Projectors category")
Category.create(name: "Printers", description: "Printers category")
Category.create(name: "Toners", description: "Toners category")
