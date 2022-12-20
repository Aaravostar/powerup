from rest_framework import serializers
from .models import Product_category

class Product_categorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Product_category
        fields = '__all__'
