from django.db import models
from product.models import Product

# Create your models here.
class Lens(models.Model): 
    class Meta:
        db_table = 'lens'
        
    id = models.OneToOneField(Product, on_delete=models.CASCADE, primary_key=True, db_column='id')

    def str(self): 
        return f"{self.model_name} ({self.model_number})"