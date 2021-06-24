from django.contrib import admin
from django.urls import path, include
from django.conf.urls import url, include
from rest_framework import routers
from myapp import views
from django.conf import settings
from django.conf.urls.static import static

router = routers.DefaultRouter()
router.register(r'Images', views.ImageViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('myapp.urls')),
    url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)