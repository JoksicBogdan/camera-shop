from django.db import models
from product.models import Product

# Create your models here.
class Accessory(models.Model): 
    class Meta:
        db_table = 'accessory'
        
    id = models.OneToOneField(Product, on_delete=models.CASCADE, primary_key=True, db_column='id')
    category = models.CharField(max_length=255)

    def str(self): 
        return f"{self.model_name} ({self.model_number})"
