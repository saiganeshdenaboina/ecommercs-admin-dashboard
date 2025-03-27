from django.urls import path
from . import views

urlpatterns = [
    path("", views.dashboard_view, name="dashboard"),
    path("orders/", views.orders_view, name="orders"),
    path("products/", views.products_view, name="products"),  # Ensure this exists
    path("customers/", views.customers_view, name="customers"),
    path("sales/", views.sales_view, name="sales"),
    path("transactions/", views.transactions_view, name="transactions"),
    path("analytics/", views.analytics_view, name="analytics"),
    path("inventory/", views.inventory_view, name="inventory"),
    path("settings/", views.settings_view, name="settings"),
]
