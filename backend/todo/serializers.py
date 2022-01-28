from rest_framework import serializer
from .models import Todo

class TodoSerializer(serializer.ModelSerializer):
    class Meta:
        model = Todo
        fields = ('id', 'title', 'description', 'completed')