from django.urls import path 
from .import views 

urlpatterns = [
    path("", views.address_list, name="address_list"),
    path("user=<int:u_id>", views.adderess_list_by_user, name="address_list_by_user")
]