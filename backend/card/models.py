from django.db import models
from user.models import User

class Card(models.Model): 
    class Meta: 
        db_table = 'payment_card'

    id = models.AutoField(primary_key=True)
    user_id = models.ForeignKey(User, on_delete=models.RESTRICT, db_column='user_id')
    card_type = models.CharField(max_length=255)
    card_number = models.CharField(max_length=255)
    valid_date = models.DateField()
    cvv = models.CharField(max_length=255)
