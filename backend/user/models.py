from django.db import models

class User(models.Model): 
    class Meta: 
        db_table = 'user'
    
    id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=255)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
