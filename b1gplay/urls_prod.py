from django.urls import path
from django.conf.urls import url, include


urlpatterns = [
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.authtoken')),

    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),


    # Add security deterrent layer: Redirect to authentication page if no url matched
    url(r'^(.*)', include('djoser.urls')),
]
