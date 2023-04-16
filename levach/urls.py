from django.urls import path
from . import views


urlpatterns = [
    path('', views.home, name='home'),
    path('article/<int:article_id>/', views.article, name='article'),
    path('submit-article/', views.submit_article, name='submit_article'),
]
