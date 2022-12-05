<template>
    <div>
        <div v-for="event in events" :key="event.id" class="event">
            <h2 class="title">{{event.title}}</h2>
            <img class="image" :src=event.image alt="Example">
            <p>{{event.text}}</p>
            <a href="#" class="tags">{{event.tags}}</a>
            <p class="date">{{event.date}}</p>
            <div class="statistic">
            <div class="views"><img src="views.png" alt="Views"> {{event.views}}</div>
            <div class="comments"><img src="comments.png" alt="Comments"> {{event.comments}}</div>
            <div class="like"><img src="like.png" alt="Like"> {{event.like}}</div>
            <div class="dislike"><img src="dislike.png" alt="Dislike"> {{event.dislike}}</div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data () {
        return {
            events: [
                {
                    id: 1,
                    title: 'В смартфонах Apple появится поддержка спутниковой связи',
                    image: 'example.png',
                    text: 'В конце августа несколько известных аналитиков раскрыли новую функцию iPhone 14 — поддержку спутниковой связи.',
                    tags: '#технологии #айфон #иос',
                    date: '10:36 19.09.2022',
                    views: 54,
                    comments: 12,
                    like: 38,
                    dislike: 12
                }
            ]
        }
    }
}
</script>

<style lang="css">
    .event {
        width: auto;
        height: auto;
        background: #fff;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.35);
        border-radius: 15px;
        margin-top: 15px;
    }

    .title {
        font-size: 24px;
        font-weight: 700;
        line-height: 30px;
        display: block;
        margin-left: auto;
        margin-right: auto;
        padding-top: 15px;
    }

    .image {
        max-width: 100%;
        height: auto;
        padding-top: 10px;
    }

    .event p {
        font-weight: 500;
        font-size: 24px;
        line-height: 30px;
        display: block;
        margin-left: 30px;
        padding-top: 15px;
    }

    .tags {
        display: grid;
    }

    .date {
        display: grid;
        color: #797979;
    }

    .statistic {
        display: grid;
        grid-template-columns: 120px auto 120px 120px;
        margin-left: 30px;
        margin-top: 15px;
        padding-bottom: 15px;
    }
</style>