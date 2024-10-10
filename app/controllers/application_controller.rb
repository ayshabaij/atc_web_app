class ApplicationController < ActionController::Base
  # Restricts access to admin-only areas
  def admin_only
    unless current_admin_user&.admin?
      redirect_to root_path, alert: "You are not authorized to access this page."
    end
  end

  # Logs in the given admin user.
  def log_in_admin(admin_user)
    session[:admin_user_id] = admin_user.id
  end

  # Logs out the current admin user.
  def log_out_admin
    session.delete(:admin_user_id)
    @current_admin_user = nil
  end

  # Returns the currently logged-in admin user (if any).
  def current_admin_user
    @current_admin_user ||= AdminUser.find_by(id: session[:admin_user_id])
  end

  # Checks if an admin user is logged in.
  def logged_in_admin?
    !current_admin_user.nil?
  end
end
