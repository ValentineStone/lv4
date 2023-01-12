db = db.getSiblingDB("levach");

db.posts.drop();
db.posts.insertMany([
    {
        //"id": 1,
        "lang": "ru-RU",
        "title": "Советский вопрос",
        "revisions": [
            "Манипуляции с исторической ролью Советского Союза начались давно, но после того, как в Украину въехали танки с красными флагами, игнорировать это стало невозможно."
        ],
        "comments": []
    },
    {
        //"id": 2,
        "lang": "ru-RU",
        "title": "Конец капитализма",
        "revisions": [
            "Первый шаг в выработке политпрограммы — создание модели посткапиталистического общества будущего. И первый шаг в создании этой модели — определить, как будет выглядеть конец капитализма."
        ],
        "comments": []
    },
    {
        //"id": 3,
        "lang": "ru-RU",
        "title": "А чего мы, собственно, хотим?",
        "revisions": [
            "Допустим, что мы построили социализм и запустили плановую экономику. Но что именно мы вложим в эту плановую экономику в качестве целевой функции? Вопрос гораздо более философский, и, в то же время, гораздо более приближенный жизни каждого конкретного человека, чем может показаться на первый взгляд."
        ],
        "comments": []
    },
]);