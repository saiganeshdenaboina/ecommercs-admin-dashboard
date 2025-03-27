from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.contrib.auth.decorators import login_required, user_passes_test

# Login View
def login_view(request):
    if request.user.is_authenticated:
        return redirect("dashboard")  # Redirect to dashboard if already logged in

    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")
        user = authenticate(request, username=username, password=password)
        if user:
            login(request, user)
            return redirect("dashboard")
        messages.error(request, "Invalid username or password.")

    return render(request, "auth/login.html")

# Logout View
def logout_view(request):
    logout(request)
    return redirect("login")

# Dashboard View
@login_required(login_url="login")
def dashboard_view(request):
    # Example data (replace with actual data from your database)
    context = {
        "total_revenue": 5000,  # Replace with actual revenue calculation
        "total_orders": 120,   # Replace with actual orders count
        "total_customers": 45, # Replace with actual customers count
        "products_in_stock": 300, # Replace with actual stock count
        "overview_labels": ["January", "February", "March", "April"], # Replace with actual labels
        "overview_data": [1000, 1500, 2000, 2500], # Replace with actual data
    }
    return render(request, "dashboard/dashboard.html", context)

# Other Views
@login_required(login_url="login")
def orders_view(request):
    return render(request, "dashboard/orders.html")

from django.shortcuts import render
from django.contrib.auth.decorators import login_required

@login_required(login_url="login")
def products_view(request):
    return render(request, "dashboard/products.html")  # Ensure the template path is correct

@login_required(login_url="login")
def customers_view(request):
    return render(request, "dashboard/customers.html")

@login_required(login_url="login")
def sales_view(request):
    return render(request, "dashboard/sales.html")

@login_required(login_url="login")
def transactions_view(request):
    return render(request, "dashboard/transactions.html")

@login_required(login_url="login")
def analytics_view(request):
    return render(request, "dashboard/analytics.html")

@login_required(login_url="login")
def inventory_view(request):
    return render(request, "dashboard/inventory.html")

@login_required(login_url="login")
def settings_view(request):
    return render(request, "dashboard/settings.html")

def is_admin(user):
    return user.is_superuser

@login_required(login_url="login")
@user_passes_test(is_admin, login_url="dashboard")
def user_management_view(request):
    return render(request, "dashboard/user_management.html")
