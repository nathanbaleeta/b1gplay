from b1gplay.settings.defaults import *

SECRET_KEY = '&376#u(ycg17pmrb%*kz*)47vq)1z6-3wb==p2$w4hy!zgo%3e'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = []

# ENVIRONMENT CONFIGURATION SETTINGS
LOCAL_DEV = True
STAGING = False
PRODUCTION = False

if LOCAL_DEV:
    ROOT_URLCONF = 'b1gplay.urls_dev'
elif PRODUCTION:
    ROOT_URLCONF = 'b1gplay.urls_prod'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}





