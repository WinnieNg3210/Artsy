class Api::ProductsController < ApplicationController 
    def index 
        @products = product.all 
        render :index 
    end

    def show 
        product = Product.find(params[:id])
        render :show
    end
end