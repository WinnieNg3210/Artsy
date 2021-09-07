class Api::SessionsController < ApplicationController 
    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])

        if @user.nil?
            render json: ["Invalid credentials, please try again"], status: 401
        else
            login(@user)
            render "api/users/show"
        end
    end

    def destroy
        if current_user
            logout!
            # render "api/users/show"
            render json: {}
        else
            render json: ["No users are signed in"], status: 404
        end
    end
end