from django.urls import path
from . import views

urlpatterns = [
    path('', views.category, name='category'),
    path('categories/', views.my_categories, name='categories'),
]