# app/controllers/admin/admin_dashboard_controller.rb
module Admin
  class AdminDashboardController < ApplicationController
    before_action :require_admin_login

    def index
      # Your admin dashboard logic here
    end

    private

    # Redirects to login page if admin is not logged in
    def require_admin_login
      unless logged_in_admin?
        redirect_to admin_login_path, alert: "Please log in to access the admin dashboard."
      end
    end
  end
end
