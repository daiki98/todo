from rest_framework import serealizers
from .models import Todo

class TodoSerealizer(serealizers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ('id', 'title', 'description', 'completed')