from django.contrib import admin
from django.urls import path, include
from .views import ProductView, CategoryView, CreateProductView, GetProduct, GetProductsByCategory

urlpatterns = [
    path('products', ProductView.as_view()),
    path('categories', CategoryView.as_view()),
    path('create-pdt', CreateProductView.as_view()),
    path('get-pdt', GetProduct.as_view()),
    path('get-category-pdts', GetProductsByCategory.as_view()),
    
]
