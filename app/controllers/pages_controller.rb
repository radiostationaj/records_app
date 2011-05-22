class PagesController < ApplicationController

  def home
    @title = "Home"
  end

  def artist
    @title = "Artists"
  end

  def tour
    @title = "Tour"
  end

  def street_team
    @title = "Street Team"
  end

  def forum
    @title = "Forum"
  end

  def contact
    @title = "Contact"
  end
end
