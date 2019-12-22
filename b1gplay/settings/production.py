from b1gplay.settings.defaults import *

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

#SECRET_KEY = os.environ['SECRET_KEY']
SECRET_KEY = '&376#u(ycg17pmrb%*kz*)47vq)1z6-3wb==p2$w4hy!zgo%3e'

# SECURITY WARNING: update this when you have the production host
ALLOWED_HOSTS = ['127.0.0.1', 'localhost']


# ENVIRONMENT CONFIGURATION SETTINGS
LOCAL_DEV = False
PRODUCTION = True

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}
'''
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
'''

'''
if LOCAL_DEV:
    ROOT_URLCONF = 'b1gplay.urls_dev'
elif PRODUCTION:
    ROOT_URLCONF = 'b1gplay.urls_prod'
'''