from django.shortcuts import render, redirect
from .models import Article, Comment


def home(request):
    articles = Article.objects.all()
    return render(request, '../templates/home.html', {'articles': articles})


def article(request, article_id):
    article = Article.objects.get(pk=article_id)
    comments = Comment.objects.filter(article=article, parent=None)
    if request.method == 'POST':
        content = request.POST['content']
        rating_change = int(request.POST['rating_change'])
        parent_id = int(request.POST.get('parent_id', '0'))
        parent = Comment.objects.get(pk=parent_id) if parent_id != 0 else None

        comment = Comment(content=content, rating=0, article=article, parent=parent)
        comment.save()

        if parent:
            parent.rating += rating_change
            parent.save()
        else:
            article.rating += rating_change
            article.save()

        return redirect('article', article_id=article.id)

    return render(request, '../templates/article.html', {'article': article,
                                              'comments': comments})


def submit_article(request):
    if request.method == 'POST':
        title = request.POST['title']
        content = request.POST['content']
        article = Article(title=title, content=content, rating=0)
        article.save()
        return redirect('home')

    return render(request, '../templates/submit-article.html')
