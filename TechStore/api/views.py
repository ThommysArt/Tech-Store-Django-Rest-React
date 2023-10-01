from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Product,Category
from .serializer import ProductSerializer, CategorySerializer, CreateCategorySerializer, CreateProductSerializer
from .permissions import IsOwner
# Create your views here.


class ProductView(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class CategoryView(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CreateProductView(generics.CreateAPIView):
    serializer_class = CreateProductSerializer

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            name = serializer.data.get('name')
            qty = serializer.data.get('qty')
            description = serializer.data.get('description')
            unit_price = serializer.data.get('unit_price')
            image = serializer.data['image']
            print(serializer.errors)


            category_id = serializer.data.get('category')
            categories = {
                1 : 'computers',
                2 : 'tablets',
                3 : 'cameras',
                4 : 'audio',
                5 : 'mobile',
                6 : 'tv',
            }

            category_name = categories[category_id]
            category = Category(id=category_id, name=category_name)

            pdt = Product(name=name, qty=qty, description=description, unit_price=unit_price, image=image, category=category)
            pdt.save()

            return Response(ProductSerializer(pdt).data, status=status.HTTP_201_CREATED)
        

class GetProduct(APIView):
    serializer_class = ProductSerializer
    lookup_url_kwargs = 'id'

    def get(self, request, format=None):
        id = request.GET.get(self.lookup_url_kwargs)
        if id != None:
            pdt = Product.objects.filter(id=id)
            if len(pdt) > 0:
                data = ProductSerializer(pdt[0]).data
                return Response(data, status=status.HTTP_200_OK)
            
            return Response({"Product Not Found": "Invalid Product id"}, status=status.HTTP_404_NOT_FOUND)
        return Response({"Bad Request": "Id parameter not found in request"}, status=status.HTTP_400_BAD_REQUEST)


class GetProductsByCategory(generics.ListAPIView):
    serializer_class = ProductSerializer
    lookup_url_kwargs = 'category'
    permission_classes = (IsOwner,)

    def get(self, request, format=None):
        category = request.GET.get(self.lookup_url_kwargs)
        if category != None:
            products = Product.objects.filter(category=category)
            if len(products) > 0:
                pdts = []
                for product in products:
                    p = ProductSerializer(product).data
                    pdts.append(p)
                    content = {
                        'status': 'owner users',
                        'data': pdts
                    }
                return Response(content, status=status.HTTP_200_OK)
            
            return Response({"Product Not Found": "Invalid Product id"}, status=status.HTTP_404_NOT_FOUND)
        return Response({"Bad Request": "Id parameter not found in request"}, status=status.HTTP_400_BAD_REQUEST)


