from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('auth/', include('dashboard.auth_urls')),  # ✅ This includes authentication routes
    path('', include('dashboard.urls')),  # ✅ Includes dashboard routes
]
