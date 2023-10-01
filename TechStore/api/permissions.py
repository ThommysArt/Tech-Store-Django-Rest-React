from rest_framework.permissions import BasePermission
from .models import Product

class IsOwner(BasePermission):

   def has_permission(self, request, view):
      return True
