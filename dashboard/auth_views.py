from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.contrib import messages
from django.utils.http import urlsafe_base64_decode
from django.utils.encoding import force_str
from django.contrib.auth.tokens import default_token_generator

def login_view(request):
    if request.user.is_authenticated:
        return redirect("dashboard")  # Redirect to dashboard if already logged in

    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")
        user = authenticate(request, username=username, password=password)
        if user:
            login(request, user)
            messages.success(request, "Login Successful!")
            return redirect("dashboard")
        messages.error(request, "Invalid username or password.")

    return render(request, "auth/login.html")

# Logout View
def logout_view(request):
    logout(request)
    messages.success(request, "Logout Successful!")
    return redirect("login")

# Register View
def register_view(request):
    if request.method == "POST":
        username = request.POST.get("username")
        email = request.POST.get("email")
        password = request.POST.get("password")
        confirm_password = request.POST.get("confirm_password")

        if password != confirm_password:
            messages.error(request, "Passwords do not match.")
        elif User.objects.filter(username=username).exists():
            messages.error(request, "Username already exists.")
        elif User.objects.filter(email=email).exists():
            messages.error(request, "Email already exists.")
        else:
            user = User(username=username, email=email)
            user.set_password(password)  # Secure password hashing
            user.save()
            messages.success(request, "Account created successfully.")
            return redirect("login")

    return render(request, "auth/register.html")

# Forgot Password View
def forgot_password_view(request):
    if request.method == "POST":
        email = request.POST.get("email")
        # Logic to send password reset email goes here
        messages.success(request, "Password reset email sent.")
        return redirect("login")

    return render(request, "auth/forgot_password.html")

# Reset Password View
def reset_password_view(request, uidb64, token):
    if request.method == "POST":
        password = request.POST.get("password")
        confirm_password = request.POST.get("confirm_password")

        if password != confirm_password:
            messages.error(request, "Passwords do not match.")
        else:
            try:
                uid = force_str(urlsafe_base64_decode(uidb64))
                user = get_object_or_404(User, pk=uid)

                if default_token_generator.check_token(user, token):
                    user.set_password(password)
                    user.save()
                    messages.success(request, "Password reset successfully.")
                    return redirect("login")
            except User.DoesNotExist:
                messages.error(request, "Invalid reset link.")

    return render(request, "auth/reset_password.html")
