from myapp.models import Image
from rest_framework import serializers
from .models import Post


class ImageSerializer(serializers.HyperlinkedModelSerializer):
    image = serializers.ImageField(use_url=True)
    
    class Meta:
        model = Image
        fields = '__all__'

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'