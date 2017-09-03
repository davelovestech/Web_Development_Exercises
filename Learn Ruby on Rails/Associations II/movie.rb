class Movie < ApplicationRecord
    has_many :parts 
    has_many :actors, through: :parts
end
