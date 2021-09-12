class Api::CartItemsController < ApplicationController 
    def index 
        @cart_items = CartItem.all 
        render :show
    end

    def show 
        render json: CartItem.find(params[:id])
    end

    def create 
        @cart_item = CartItem.new(cart_item_params)
        if @cartitem.save 
            render :show
        end
    end

    def destroy 
        @cart_item = CartItem.find_by(id: params[:id])
        @cartitem.destroy
        render: :show
    end

    def update 
        @cart_item = CartItem.find_by(id: params[:id])
        if @cartitem.update()
    end

    private

    def cart_item_params
        params.require(:cartitem).permit(:user_id, :product_id, :quantity)
    end
end