from django.db import models

from django.utils import timezone

# Create your models here.

class Category(models.Model):
    name = models.CharField(null=False, max_length=30)


class Product(models.Model):
    name = models.CharField(null=False, max_length=30)
    qty = models.IntegerField(default=0)
    unit_price = models.FloatField(default=0)
    description = models.TextField(default="")
    image = models.ImageField(default="", upload_to='TechStore/frontend/public/img/')
    created_at = models.DateTimeField(default=timezone.now)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)


class Cart(models.Model):
    products = models.ForeignKey(Product, on_delete=models.DO_NOTHING)
    credit_card_number = models.IntegerField(null=False)
    sold = models.BooleanField(default=False)



