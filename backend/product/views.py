from django.shortcuts import render, get_object_or_404
from .models import Product

# Create your views here.
def product_list(request): 
    products = Product.objects.all()
    return render(request, "product/product_list.html", {"products": products})

def product_detail(request, item_id): 
    product = get_object_or_404(Product, id=item_id)
    return render(request, "product/product_detail.html", {"product": product})