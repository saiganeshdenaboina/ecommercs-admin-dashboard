from django.contrib import admin
from django.urls import path, include
from dashboard.views import admin_dashboard  # Import the dashboard view

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('dashboard.urls')),  # Use include to manage dashboard routes
]
