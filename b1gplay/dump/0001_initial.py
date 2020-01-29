# Generated by Django 3.0.1 on 2020-01-16 17:21

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0011_update_proxy_permissions'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('is_staff', models.BooleanField(default=False, help_text='Designates whether the user can log into this admin site.', verbose_name='staff status')),
                ('is_active', models.BooleanField(default=True, help_text='Designates whether this user should be treated as active. Unselect this instead of deleting accounts.', verbose_name='active')),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now, verbose_name='date joined')),
                ('email', models.EmailField(max_length=255, unique=True)),
                ('first_name', models.CharField(max_length=30)),
                ('last_name', models.CharField(max_length=30)),
                ('username', models.CharField(blank=True, max_length=30)),
                ('gender', models.CharField(choices=[('Male', 'Male'), ('Female', 'Female')], max_length=6)),
                ('country_of_origin', models.CharField(max_length=100)),
                ('birth_date', models.DateField()),
                ('account_type', models.CharField(choices=[('Coach', 'Coach'), ('Player', 'Player'), ('Media', 'Media'), ('Fan', 'Fan'), ('Agent', 'Agent')], max_length=10)),
                ('tag', models.CharField(blank=True, max_length=100)),
                ('profile_photo', models.CharField(blank=True, max_length=100)),
                ('cover_photo', models.CharField(blank=True, max_length=100)),
                ('club', models.CharField(blank=True, max_length=100)),
                ('club_location', models.CharField(blank=True, max_length=100)),
                ('affiliation', models.CharField(blank=True, max_length=100)),
                ('media_house', models.CharField(blank=True, max_length=100)),
                ('position', models.CharField(blank=True, choices=[('Center forward', 'Center forward'), ('Point guard', 'Point guard'), ('Power forward', 'Power forward'), ('Shooting guard', 'Shooting guard'), ('Small forward', 'Small forward')], max_length=20, null=True)),
                ('height', models.FloatField(blank=True, default=0, null=True)),
                ('weight', models.FloatField(blank=True, default=0, null=True)),
                ('wingspan', models.FloatField(blank=True, default=0, null=True)),
                ('vertical_leap', models.FloatField(blank=True, default=0, null=True)),
                ('time_to_run_40m', models.FloatField(blank=True, default=0, null=True)),
                ('time_to_run_100m', models.FloatField(blank=True, default=0, null=True)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.Group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.Permission', verbose_name='user permissions')),
            ],
            options={
                'verbose_name': 'User',
                'verbose_name_plural': 'Users',
                'db_table': 'users',
            },
        ),
    ]