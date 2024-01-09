from django.db import models
from product.models import Product
from user.models import User 

class Cart(models.Model): 
    class Meta: 
        db_table = 'cart'
    
    id = models.AutoField(primary_key=True)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE, db_column='user_id')
    prod_id = models.ForeignKey(Product, on_delete=models.CASCADE, db_column='prod_id')
    prod_num = models.IntegerField()

    
