require 'spec_helper'

describe PagesController do
  render_views

  before(:each) do
    
    @base_title = "SuperPosition Records"
    
  end

  describe "GET 'home'" do
    it "should be successful" do
      get 'home'
      response.should be_success
    end

    it "should have the right title" do
      get 'home'
      response.should have_selector("title",
                                    :content => @base_title + " | Home")
    end
  end

  describe "GET 'artist'" do
    it "should be successful" do
      get 'artist'
      response.should be_success
    end

    it "should have the right title" do
      get 'artist'
      response.should have_selector("title",
                                    :content => @base_title + " | Artists")
    end
  end

  describe "GET 'tour'" do
    it "should be successful" do
      get 'tour'
      response.should be_success
    end

    it "should have the right title" do
      get 'tour'
      response.should have_selector("title",
                                    :content => @base_title + " | Tour")
    end
  end

  describe "GET 'street_team'" do
    it "should be successful" do
      get 'street_team'
      response.should be_success
    end

    it "should have the right title" do
      get 'street_team'
      response.should have_selector("title",
                                    :content => @base_title + " | Street Team")
    end
  end

  describe "GET 'forum'" do
    it "should be successful" do
      get 'forum'
      response.should be_success
    end

    it "should have the right title" do
      get 'forum'
      response.should have_selector("title",
                                    :content => @base_title + " | Forum")
    end
  end

  describe "GET 'contact'" do
    it "should be successful" do
      get 'contact'
      response.should be_success
    end

    it "should have the right title" do
      get 'contact'
      response.should have_selector("title",
                                    :content => @base_title + " | Contact")
    end
  end
end
