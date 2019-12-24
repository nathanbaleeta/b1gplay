# Generated by Django 3.0.1 on 2019-12-24 08:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0004_auto_20191223_2049'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='cover_photo',
            field=models.ImageField(default='cover_photos/cover.jpg', upload_to='cover_photos'),
        ),
        migrations.AddField(
            model_name='user',
            name='profile_photo',
            field=models.ImageField(default='profile_photos/avatar1.png', upload_to='profile_photos'),
        ),
        migrations.AddField(
            model_name='user',
            name='tag',
            field=models.CharField(blank=True, max_length=100),
        ),
    ]
