from django.urls import path 
from .import views 

urlpatterns = [
    path("", views.card_list, name="card_list"),
    path("user=<int:u_id>", views.card_list_by_user, name="card_list_by_user"),
]