# Generated by Django 3.0.1 on 2019-12-23 20:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0003_auto_20191223_2035'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='account_type',
            field=models.CharField(blank=True, max_length=10),
        ),
    ]
