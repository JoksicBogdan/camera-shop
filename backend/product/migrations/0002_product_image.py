# Generated by Django 4.2.1 on 2023-06-02 15:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='image',
            field=models.URLField(default='null'),
            preserve_default=False,
        ),
    ]
