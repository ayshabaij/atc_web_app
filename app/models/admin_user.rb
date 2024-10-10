class AdminUser < ApplicationRecord
  has_secure_password

  # Add any additional validations or logic here
  validates :email, presence: true, uniqueness: true
end
