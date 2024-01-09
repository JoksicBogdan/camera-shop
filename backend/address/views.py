from django.shortcuts import render
from .models import Address

def address_list(request): 
    addresses = Address.objects.all()
    return render(request, "address/address_list.html", {'addresses': addresses})

def adderess_list_by_user(request, u_id): 
    addresses = Address.objects.filter(user_id=u_id)
    return render(request, "address/address_list_by_user.html", {'addresses': addresses})
