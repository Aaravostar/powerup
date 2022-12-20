from django.db import models

# Create your models here.
class Product_category(models.Model):
    category_name = models.CharField(max_length=50,null=False,blank=False)
    category_desc = models.CharField(max_length=50,null=True,blank=True)
    createdTime=models.DateTimeField(auto_now_add=True)
    fields =['category_name','category_desc']
 
    def __str__(self):
           return self.category_name
