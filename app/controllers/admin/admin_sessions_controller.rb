# app/controllers/admin/admin_sessions_controller.rb
class Admin::AdminSessionsController < ApplicationController
  def new
  end

  def create
    # Access params[:email] and params[:password] directly
    @admin_user = AdminUser.find_by(email: params[:email].downcase)
    if @admin_user && @admin_user.authenticate(params[:password])
      log_in_admin(@admin_user)
      redirect_to admin_dashboard_path, notice: 'Logged in successfully' # Change to your desired admin dashboard path
    else
      flash.now[:alert] = 'Invalid email/password combination'
      render 'new'
    end
  end

  def destroy
    log_out_admin if logged_in_admin?
    redirect_to root_path, notice: 'Logged out successfully'
  end
end
