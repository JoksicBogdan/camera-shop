from django.urls import path 
from .import views 

urlpatterns = [
    path("user=<int:u_id>", views.cart_items_by_user_id, name="cart_item_by_user_id"),
    path("total_price/user=<int:u_id>", views.total_price_by_user_id, name="total_price_by_user_id"),
    path("delete/user=<int:user_id>&id=<int:row_id>", views.delete_by_id, name="delete_by_id"),
    path("update/user=<int:uid>&id=<int:row_id>&qty=<int:qty>", views.update_by_id, name="update_by_id"),
    path("post", views.post_by_user_id, name="post_by_user_id")
]