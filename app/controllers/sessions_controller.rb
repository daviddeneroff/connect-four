class SessionsController < ApplicationController

  def new
    @user = User.new
  end

  def create
    if user = User.find_by(username: params[:session][:username]).try(:authenticate, params[:session][:password])
      session[:user_id] = user.id
      redirect_to "/"
    else
    end
  end

  def destroy
    session.clear
    redirect_to '/'
  end
end