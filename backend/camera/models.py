from django.db import models
from product.models import Product

class Camera(models.Model): 
    class Meta:
        db_table = 'camera'
        
    id = models.OneToOneField(Product, on_delete=models.CASCADE, primary_key=True, db_column='id')
    release_date = models.DateField()

    def str(self): 
        return f"{self.model_name} ({self.model_number})"
