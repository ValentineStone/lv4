<template>
    <div>
        <div v-for="event in events" :key="event.id" class="event">
            <h2 class="title">{{event.title}}</h2>
            <img class="image" :src=event.image alt="Example">
            <p>{{event.text}}</p>
            <router-link to="/" class="detail-btn">Читать далее...</router-link>
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
                    views: 54,
                    comments: 12,
                    like: 38,
                    dislike: 12
                },
                {
                    id: 2,
                    title: 'Тайны Вселенной. Снимки далеких экзопланет, галактик и звездных скоплений: что покажет самая крупная орбитальная станция?',
                    image: 'example2.png',
                    text: 'Долгожданные снимки далеких экзопланет, галактик и звездных скоплений, полученные на космический телескоп НАСА «Джеймс Уэбб».',
                    views: 54,
                    comments: 13,
                    like: 38,
                    dislike: 20
                },
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

    .detail-btn {
        font-size: 24px;
        line-height: 30px;
        font-weight: 500;
        background-color: #54A9F8;
        color: #F3F6FF;
        width: 330px;
        height: 35px;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
        border-radius: 30px;
        display: flex;
	    align-items: center;
	    justify-content: center;
        margin-left: auto;
        margin-right: auto;
        margin-top: 15px;
    }

    .detail-btn:hover {
  	    text-decoration: none;
	    color: #F3F6FF;
    }

    .statistic {
        display: grid;
        grid-template-columns: 120px auto 120px 120px;
        margin-left: 30px;
        margin-top: 15px;
        padding-bottom: 15px;
    }
</style>