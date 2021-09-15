class User < ApplicationRecord
    validates :session_token, presence: true, uniqueness: true
    validates :email, uniqueness: true, presence: true,format: { with: URI::MailTo::EMAIL_REGEXP }    
    validates :first_name, presence: true
    validates :password_digest, presence: true
    validates :password, length: {minimum: 6, allow_nil: true}

    attr_reader :password 
    after_initialize :ensure_session_token

    has_many :products,
        foreign_key: :seller_id,
        class_name: :Product
    
    has_many :reviews,
        foreign_key: :author_id,
        class_name: :Review

    has_many :cart_items,
        foreign_key: :user_id,
        class_name: :CartItem

    has_many :products,
        through: :cart_items,
        source: :products

    # if we want to call the cart-items associated with the user, we can do current_user.products
    # which will return instances of product table to be associated with users 

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        user && user.is_password?(password) ? user : nil
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end

    def reset_session_token!
        self.session_token = User.generate_session_token
        self.save!
        self.session_token
    end
end