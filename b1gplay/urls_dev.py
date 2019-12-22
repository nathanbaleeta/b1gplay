from django.contrib import admin
from django.urls import path, include
from django.conf.urls import url, include

urlpatterns = [
    path('', include('djoser.urls')),
    path('admin/', admin.site.urls),

    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.authtoken')),

    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),

    # Add security deterrent layer: Redirect to admin authentication page if no url matched
    url(r'^(.*)', include('djoser.urls')),
]
