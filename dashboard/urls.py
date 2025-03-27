from django.urls import path
from .views import login_view, logout_view, dashboard_view

urlpatterns = [
    path("login/", login_view, name="login"),
    path("logout/", logout_view, name="logout"),
    path("", dashboard_view, name="dashboard"),  # Dashboard is now protected
]
