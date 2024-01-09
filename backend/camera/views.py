from django.shortcuts import render, get_object_or_404
from .models import Camera

# Create your views here.
def camera_list(request): 
    cameras = Camera.objects.all()
    print(cameras)
    return render(request, "camera/camera_list.html", {"cameras": cameras})

def camera_detail(request, item_id): 
    camera = get_object_or_404(Camera, id=item_id)
    return render(request, "camera/camera_detail.html", {"camera": camera})