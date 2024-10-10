module ApplicationHelper
  def log_in_admin(admin_user)
    session[:admin_user_id] = admin_user.id
  end

  def current_admin_user
    @current_admin_user ||= AdminUser.find_by(id: session[:admin_user_id])
  end

  def logged_in_admin?
    !current_admin_user.nil?
  end

  def log_out_admin
    session.delete(:admin_user_id)
    @current_admin_user = nil
  end
end
