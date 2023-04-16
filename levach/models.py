from django.db import models


class Article(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    rating = models.IntegerField(default=0)


class Comment(models.Model):
    content = models.TextField()
    rating = models.IntegerField(default=0)
    article = models.ForeignKey(Article, on_delete=models.CASCADE)
    parent = models.ForeignKey('self', null=True, blank=True, on_delete=models.CASCADE)
