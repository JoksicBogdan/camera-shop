from django.urls import path 
from .import views 

urlpatterns = [
    path("", views.camera_list, name="camera_list"), 
    path("id=<int:item_id>", views.camera_detail, name="camera_detail")
]