# Generated by Django 4.2.1 on 2023-06-10 01:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('camera', '0005_remove_camera_model_number_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='camera',
            name='manufacturer',
        ),
    ]
