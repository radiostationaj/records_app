require 'spec_helper'

describe PagesController do
  render_views

  describe "GET 'home'" do
    it "should be successful" do
      get 'home'
      response.should be_success
    end
  end

  describe "GET 'artist'" do
    it "should be successful" do
      get 'artist'
      response.should be_success
    end
  end

  describe "GET 'tour'" do
    it "should be successful" do
      get 'tour'
      response.should be_success
    end
  end

  describe "GET 'street_team'" do
    it "should be successful" do
      get 'street_team'
      response.should be_success
    end
  end

  describe "GET 'forum'" do
    it "should be successful" do
      get 'forum'
      response.should be_success
    end
  end

  describe "GET 'test'" do
    it "should be successful" do
      get 'test'
      response.should be_success
    end
  end
end
