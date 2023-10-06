from rest_framework import serializers
from .models import Product, Category

##############################################################################################
# SERIALIZER FOR POST REQUESTS. CONVERTS JSON DATA INTO MODEL COMPATIBLE DATA

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id', 'name', 'qty', 'description', 'unit_price',
                  'image', 'created_at', 'category')

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name')



#################################################################################################
# SERIALIZER FOR GET REQUESTS. CONVERTS DATA GOTTEN FROM THE MODEL INTO JSON

class CreateProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('name', 'qty', 'description', 'unit_price',
                  'image', 'category')
        

class CreateCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id','name')
