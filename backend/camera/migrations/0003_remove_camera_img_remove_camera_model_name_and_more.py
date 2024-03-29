# Generated by Django 4.2.1 on 2023-06-10 01:12

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0003_product_description'),
        ('camera', '0002_alter_camera_table'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='camera',
            name='img',
        ),
        migrations.RemoveField(
            model_name='camera',
            name='model_name',
        ),
        migrations.RemoveField(
            model_name='camera',
            name='retail_price',
        ),
        migrations.AlterField(
            model_name='camera',
            name='id',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to='product.product'),
        ),
    ]
