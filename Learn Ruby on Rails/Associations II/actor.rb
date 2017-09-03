class Actor < ApplicationRecord
    has_many :parts 
    has_many :movies, through: :parts
end
