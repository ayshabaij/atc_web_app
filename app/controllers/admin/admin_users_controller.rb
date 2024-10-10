# app/controllers/admin/admin_users_controller.rb
module Admin
  class AdminUsersController < ApplicationController
    def new
      @admin_user = AdminUser.new
    end

    def create
      @admin_user = AdminUser.new(admin_user_params)
      if @admin_user.save
        flash[:success] = "Admin account created successfully"
        redirect_to admin_login_path # Redirect to login page after successful sign-up
      else
        flash.now[:alert] = "There was an issue creating the admin account"
        render :new
      end
    end

    private

    def admin_user_params
      params.require(:admin_user).permit(:email, :password, :password_confirmation)
    end
  end
end
