# Generated by Django 4.2.1 on 2023-06-01 14:56

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Cart',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('user_id', models.DecimalField(decimal_places=0, max_digits=10)),
                ('prod_id', models.DecimalField(decimal_places=0, max_digits=10)),
            ],
            options={
                'db_table': 'cart',
            },
        ),
    ]
