from django.urls import path
from .auth_views import login_view, logout_view, register_view, forgot_password_view, reset_password_view

urlpatterns = [
    path('login/', login_view, name='login'),  # Correctly defined
    path('logout/', logout_view, name='logout'),
    path('register/', register_view, name='register'),
    path('forgot-password/', forgot_password_view, name='forgot_password'),
    path('reset-password/<uidb64>/<token>/', reset_password_view, name='reset_password'),
]
