class Api::CategoriesController < ApplicationController
  def index
    @categories = Category.all.map do |category|
      {
        id: category.id,
        name: category.name
      }
    end
    render json: @categories
  end
end
