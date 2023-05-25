from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('add-attendence/', views.CreateAttendenceView.as_view(), name='add-attendence'),
    path('employee-list/', views.EmployeeListView.as_view(), name='employee-list'),
    path('employee-detail/<int:pk>/', views.EmployeeDetailView.as_view(), name='employee-detail'),
    path('users/', views.AllUsersView.as_view(), name='users'),
    
    
    
]