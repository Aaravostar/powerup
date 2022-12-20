from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from .models import Product_category
from .serializer import Product_categorySerializer

def category(req):
    return HttpResponse("<h1>Product categories</h1><br><h3>to get the data add categories/ to the url</h3>")

def my_categories(req):
    all_products = Product_categorySerializer(Product_category.objects.all(), many=True).data
    return JsonResponse(all_products, safe=False)