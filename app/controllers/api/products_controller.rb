class Api::ProductsController < ApplicationController 
    def index 
        if params[:search]
            # @products = Product.where("title LIKE ?", "%" + params[:search] + "%")
            @products = Product.all.select {|product| product.title.downcase.include?(params[:search].downcase)}
        else 
            @products = Product.all 
        end
        render :index 
    end

    def show 
        @product = Product.find(params[:id])
        render :show
    end

    private

    def product_params
        params.require(:product).permit(:title, :description, :seller_id, :price, :image)
    end

    # def search
    #     @products = Product.where("title LIKE ?", "%" + params[:search] + "%")
    #     render json :search
    # end
end