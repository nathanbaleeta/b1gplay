from django.contrib import admin
from django.urls import path, include
from django.conf.urls import url, include

from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework import permissions

# Swagger prerequisite imports

schema_view = get_schema_view(
    openapi.Info(
        title="B1gplay API",
        default_version='v1',
        description="Test description",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="nbaleeta@gmail.com"),
        license=openapi.License(name="BSD License"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path('', include('djoser.urls')),
    path('admin/', admin.site.urls),

    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.authtoken')),

    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),

    # Yet another Swagger generator
    path('swagger', schema_view.with_ui('swagger',
                                        cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc',
                                       cache_timeout=0), name='schema-redoc'),

    # Add security deterrent layer: Redirect to admin authentication page if no url matched
    url(r'^(.*)', include('djoser.urls')),
]
