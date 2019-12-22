from b1gplay.settings.defaults import *

SECRET_KEY = '&376#u(ycg17pmrb%*kz*)47vq)1z6-3wb==p2$w4hy!zgo%3e'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = []

# ENVIRONMENT CONFIGURATION SETTINGS
LOCAL_DEV = False
STAGING = True
PRODUCTION = False


REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.AllowAny',
    ),
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework.authentication.TokenAuthentication',
    )
}

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': os.getenv('DB_NAME', 'invalid_database_name'),
        'USER': os.getenv('DB_USER', 'invalid_database_user'),
        'PASSWORD': os.getenv('DB_PASS', 'invalid_database_password'),
        'HOST': os.getenv('DB_HOST', 'invalid_database_host'),
        'PORT': os.getenv('DB_PORT', 'invalid_database_port'),
    }
}

if LOCAL_DEV:
    ROOT_URLCONF = 'b1gplay.urls_dev'
elif STAGING:
    ROOT_URLCONF = 'b1gplay.urls_staging'
elif PRODUCTION:
    ROOT_URLCONF = 'b1gplay.urls_prod'

    