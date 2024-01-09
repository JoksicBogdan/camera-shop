from django.urls import path 
from .import views 

urlpatterns = [
    path("", views.accessory_list, name="accessory_list"), 
    path("id=<int:item_id>", views.accessory_detail, name="accessory_detail")
]