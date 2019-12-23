from django.db import models
from django.contrib.auth.models import AbstractUser
import uuid
from django.urls import reverse
from django.contrib.auth.models import BaseUserManager


class UserManager(BaseUserManager):
    def create_user(self, first_name, last_name, email, password, gender, country_of_origin, birth_date):
        user = self.model(first_name=first_name,
                          last_name=last_name,
                          email=email,
                          password=password,
                          gender=gender,
                          country_of_origin=country_of_origin,
                          birth_date=birth_date)
        user.set_password(password)
        user.is_staff = False
        user.is_superuser = False
        user.save(using=self._db)
        return user

    def create_superuser(self, first_name, last_name, email, gender,  password, country_of_origin, birth_date):
        user = self.create_user(first_name=first_name,
                                last_name=last_name,
                                email=email,
                                password=password,
                                gender=gender,
                                country_of_origin=country_of_origin,
                                birth_date=birth_date)
        user.is_active = True
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user

    def get_by_natural_key(self, email_):
        print(email_)
        return self.get(email=email_)


class User(AbstractUser):
    """
    Person with an account on b1gplay
    """

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    email = models.EmailField(max_length=255, unique=True)
    first_name = models.CharField(max_length=30)  # Make firstname mandatory
    last_name = models.CharField(max_length=30)  # Make lastname mandatory
    username = models.CharField(max_length=30, blank=True)

    gender = models.CharField(max_length=6, blank=True)
    country_of_origin = models.CharField(
        max_length=100,
        blank=True
    )
    birth_date = models.DateField(null=True, blank=True)

    # Use this setting to leverage djoser auth User model and simply extend it
    REQUIRED_FIELDS = ['first_name', 'last_name',
                       'gender', 'country_of_origin', 'birth_date']
    USERNAME_FIELD = 'email'

    objects = UserManager()

    class Meta:
        verbose_name = "User"
        verbose_name_plural = "Users"
        db_table = 'users'

    def get_absolute_url(self):
        return reverse('user-detail', args=[str(self.id)])

    def __str__(self):
        return f'{self.first_name} {self.last_name}'
