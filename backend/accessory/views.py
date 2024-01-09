from django.shortcuts import render, get_object_or_404
from .models import Accessory

# Create your views here.
def accessory_list(request): 
    accessories = Accessory.objects.all()
    return render(request, "accessory/accessory_list.html", {"accessories": accessories})

def accessory_detail(request, item_id): 
    accessory = get_object_or_404(Accessory, id=item_id)
    return render(request, "accessory/accessory_detail.html", {"accessory": accessory})
