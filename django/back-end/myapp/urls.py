
from django.urls import path
from . import views

urlpatterns = [
    path('myapp/', views.PostView.as_view(), name= 'posts_list'),
]