from django.shortcuts import render, get_object_or_404
from .models import Lens

# Create your views here.
def lens_list(request): 
    lenses = Lens.objects.all()
    return render(request, "lens/lens_list.html", {"lenses": lenses})

def lens_detail(request, item_id): 
    lens = get_object_or_404(Lens, id=item_id)
    return render(request, "lens/lens_detail.html", {"lens": lens})