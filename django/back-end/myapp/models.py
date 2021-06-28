from django.db import models

# Create your models here.

#class Image(models.Model):
    #image = models.ImageField(default='media/default_image.jpeg')

class Post(models.Model):
    image = models.ImageField(upload_to='post_images')
    
    def __str__(self):
        return self.title
        
class RunImage(models.Model):
    image = models.ImageField(upload_to='out_images')
    
    def __str__(self):
        return self.title
        
        