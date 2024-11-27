from django.db import models

# Create your models here.


class Task(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    completed = models.BooleanField(default=False)
    dueDate = models.DateTimeField()
    priority = models.CharField(
        max_length=20, choices=[("low", "Low"), ("medium", "Medium"), ("high", "High")]
    )

    def __str__(self):
        return self.title


class User(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=255, unique=True)
    password = models.CharField(max_length=255)

    def __str__(self):
        return self.username
