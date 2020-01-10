from django.db import models
from django.contrib.auth.models import AbstractUser, Group
# from django.contrib.auth.models import Group
import uuid
from django.urls import reverse
from django.contrib.auth.models import BaseUserManager


from django.db.models.signals import post_save
from django.dispatch import receiver
# from py2neo import neo4j
from py2neo import Database, Graph
from py2neo.data import Node, Relationship


class UserManager(BaseUserManager):
    def create_user(self,
                    first_name,
                    last_name,
                    email,
                    password,
                    gender,
                    country_of_origin,
                    birth_date,
                    account_type,
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
                    wingspan=None,
                    vertical_leap=None,
                    time_to_run_40m=None,
                    time_to_run_100m=None
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
                          wingspan=wingspan,
                          vertical_leap=vertical_leap,
                          time_to_run_40m=time_to_run_40m,
                          time_to_run_100m=time_to_run_100m
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
                         account_type,
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
                         wingspan=None,
                         vertical_leap=None,
                         time_to_run_40m=None,
                         time_to_run_100m=None
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
                          wingspan=wingspan,
                          vertical_leap=vertical_leap,
                          time_to_run_40m=time_to_run_40m,
                          time_to_run_100m=time_to_run_100m
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

    MALE = 'Male'
    FEMALE = 'Female'
    GENDER_CHOICES = (
        (MALE, 'Male'),
        (FEMALE, 'Female'),
    )

    COACH = 'Coach'
    PLAYER = 'Player'
    MEDIA = 'Media'
    FAN = 'Fan'
    AGENT = 'Agent'
    ROLE_CHOICES = (
        (COACH, 'Coach'),
        (PLAYER, 'Player'),
        (MEDIA, 'Media'),
        (FAN, 'Fan'),
        (AGENT, 'Agent'),
    )

    CENTER_FORWARD = 'Center forward'
    POINT_GUARD = 'Point guard'
    POWER_FORWARD = 'Power forward'
    SHOOTING_GUARD = 'Shooting guard'
    SMALL_FORWARD = 'Small forward'
    POSITION_CHOICES = (
        (CENTER_FORWARD, 'Center forward'),
        (POINT_GUARD, 'Point guard'),
        (POWER_FORWARD, 'Power forward'),
        (SHOOTING_GUARD, 'Shooting guard'),
        (SMALL_FORWARD, 'Small forward'),
    )

    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False
    )
    email = models.EmailField(
        max_length=255, unique=True)
    first_name = models.CharField(max_length=30)  # Make firstname mandatory
    last_name = models.CharField(max_length=30)  # Make lastname mandatory
    username = models.CharField(max_length=30, blank=True)

    gender = models.CharField(
        max_length=6,
        choices=GENDER_CHOICES,
    )
    country_of_origin = models.CharField(
        max_length=100
    )
    birth_date = models.DateField()

    account_type = models.CharField(
        max_length=10,
        choices=ROLE_CHOICES,
        # default=PLAYER,
    )

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
    # position = models.CharField(max_length=100, blank=True)
    position = models.CharField(
        max_length=20,
        choices=POSITION_CHOICES,
        blank=True,
        null=True
    )
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
        blank=True,
        default=0
    )
    vertical_leap = models.DecimalField(
        max_digits=6,
        decimal_places=2,
        null=True,
        blank=True,
        default=0
    )
    time_to_run_40m = models.DecimalField(
        max_digits=6,
        decimal_places=2,
        null=True,
        blank=True,
        default=0
    )
    time_to_run_100m = models.DecimalField(
        max_digits=6,
        decimal_places=2,
        null=True,
        blank=True,
        default=0
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
        'weight',
        'wingspan',
        'vertical_leap',
        'time_to_run_40m',
        'time_to_run_100m'
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


@receiver(post_save, sender=User)
def create_user_node(sender, instance, created, **kwargs):
    """
    Creates the user node on the graph database.
    """

    if created:
        graph = Graph(host="localhost", user="neo4j", password="admin1234")
        query = '''
            CREATE (n:User { 
            first_name : {fname}, 
            last_name : {lname},
            gender : {gender},
            country_of_origin : {country_of_origin},
            birth_date : {birth_date},
            account_type : {account_type},
            club : {club},
            club_location : {club_location}
            })
        '''

        # now execute the query
        graph.run(query, fname=instance.first_name,
                  lname=instance.last_name,
                  gender=instance.gender,
                  country_of_origin=instance.country_of_origin,
                  birth_date=instance.birth_date,
                  account_type=instance.account_type,
                  club=instance.club,
                  club_location=instance.club_location
                  ).evaluate()
