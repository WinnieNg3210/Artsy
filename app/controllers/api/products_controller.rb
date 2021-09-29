class Api::ProductsController < ApplicationController 
    def index 
        @products = Product.all 
        render :index 
    end

    def show 
        @product = Product.find(params[:id])
        render :show
    end

    def search
        @products = Product.where("title LIKE ?", "%" + params[:q] + "%")
        render json :search
    end
end