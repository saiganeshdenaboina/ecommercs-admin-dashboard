from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.contrib.auth.decorators import login_required


def admin_dashboard(request):
    return render(request, 'dashboard/dashboard.html')

# ✅ LOGIN VIEW
def login_view(request):
    if request.user.is_authenticated:
        return redirect("dashboard")  # If already logged in, go to dashboard

    if request.method == "POST":
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect("dashboard")  # Redirect to dashboard on success
        else:
            messages.error(request, "Invalid username or password.")

    return render(request, "dashboard/login.html")

# ✅ LOGOUT VIEW
def logout_view(request):
    logout(request)
    return redirect("login")  # Redirect to login page after logout

# ✅ PROTECTED DASHBOARD VIEW
@login_required(login_url="login")  # Only allow logged-in users
def dashboard_view(request):
    return render(request, "dashboard/dashboard.html")
