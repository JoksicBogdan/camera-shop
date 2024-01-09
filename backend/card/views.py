from django.shortcuts import render
from .models import Card

def card_list(request): 
    cards = Card.objects.all()
    return render(request, "card/card_list.html", {'cards': cards})

def card_list_by_user(request, u_id): 
    cards = Card.objects.filter(user_id=u_id)
    return render(request, "card/card_list_by_user.html", {'cards': cards})
