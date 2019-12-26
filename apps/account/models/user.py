from django.db import models
from django.contrib.auth.models import AbstractUser, Group
#from django.contrib.auth.models import Group
import uuid
from django.urls import reverse
from django.contrib.auth.models import BaseUserManager


class UserManager(BaseUserManager):
    def create_user(self,
                    first_name,
                    last_name,
                    email,
                    password,
                    gender,
                    country_of_origin,
                    birth_date,
                    account_type=None,
                    profile_photo=None,
                    cover_photo=None,
                    tag=None,
                    club=None,
                    club_location=None,
                    affiliation=None,
                    media_house=None,
                    position=None,
                    height=None,
                    weight=None,
                    ):
        user = self.model(first_name=first_name,
                          last_name=last_name,
                          email=email,
                          password=password,
                          gender=gender,
                          country_of_origin=country_of_origin,
                          birth_date=birth_date,
                          account_type=account_type,
                          profile_photo=profile_photo,
                          cover_photo=cover_photo,
                          tag=tag,
                          club=club,
                          club_location=club_location,
                          affiliation=affiliation,
                          media_house=media_house,
                          position=position,
                          height=height,
                          weight=weight,

                          )
        user.set_password(password)
        user.is_staff = False
        user.is_superuser = False
        user.save(using=self._db)
        return user

    def create_superuser(self,
                         first_name,
                         last_name,
                         email,
                         gender,
                         password,
                         country_of_origin,
                         birth_date,
                         account_type=None,
                         profile_photo=None,
                         cover_photo=None,
                         tag=None,
                         club=None,
                         club_location=None,
                         affiliation=None,
                         media_house=None,
                         position=None,
                         height=None,
                         weight=None,
                         ):
        user = self.model(first_name=first_name,
                          last_name=last_name,
                          email=email,
                          password=password,
                          gender=gender,
                          country_of_origin=country_of_origin,
                          birth_date=birth_date,
                          account_type=account_type,
                          profile_photo=profile_photo,
                          cover_photo=cover_photo,
                          tag=tag,
                          club=club,
                          club_location=club_location,
                          affiliation=affiliation,
                          media_house=media_house,
                          position=position,
                          height=height,
                          weight=weight,
                          )
        user.set_password(password)
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

    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False
    )
    email = models.EmailField(max_length=255, unique=True)
    first_name = models.CharField(max_length=30)  # Make firstname mandatory
    last_name = models.CharField(max_length=30)  # Make lastname mandatory
    username = models.CharField(max_length=30, blank=True)

    gender = models.CharField(max_length=6)
    country_of_origin = models.CharField(
        max_length=100
    )
    birth_date = models.DateField()

    account_type = models.CharField(max_length=10, blank=True)

    tag = models.CharField(max_length=100, blank=True)
    profile_photo = models.ImageField(
        upload_to='profile_photos', default='profile_photos/avatar1.png', blank=True)
    cover_photo = models.ImageField(
        upload_to='cover_photos', default='cover_photos/cover.jpg', blank=True)

    # general info concerning either player, team, media, coach or fan...
    club = models.CharField(max_length=100, blank=True)
    club_location = models.CharField(
        max_length=100,
        blank=True
    )
    affiliation = models.CharField(max_length=100, blank=True)
    media_house = models.CharField(max_length=100, blank=True)

    # Player details
    position = models.CharField(max_length=100, blank=True)
    height = models.DecimalField(
        max_digits=6,
        decimal_places=2,
        null=True,
        blank=True,
        default=0
    )
    weight = models.DecimalField(
        max_digits=6,
        decimal_places=2,
        null=True,
        blank=True,
        default=0
    )
    wingspan = models.DecimalField(
        max_digits=6,
        decimal_places=2,
        null=True,
        blank=True
    )
    vertical_leap = models.DecimalField(
        max_digits=6,
        decimal_places=2,
        null=True,
        blank=True
    )
    time_to_run_40m = models.DecimalField(
        max_digits=6,
        decimal_places=2,
        null=True,
        blank=True
    )
    time_to_run_100m = models.DecimalField(
        max_digits=6,
        decimal_places=2,
        null=True,
        blank=True
    )

    # Use this setting to leverage djoser auth User model and simply extend it
    REQUIRED_FIELDS = [
        'first_name',
        'last_name',
        'gender',
        'country_of_origin',
        'birth_date',
        'account_type',
        'club',
        'club_location',
        'tag',
        'profile_photo',
        'cover_photo',
        'affiliation',
        'media_house',
        'position',
        'height',
        'weight'
    ]

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
