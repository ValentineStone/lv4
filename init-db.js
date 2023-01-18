const db = db.getSiblingDB('levach')

const test_comments = [{
  content: 'no u',
  comments: [{
    content: 'no u',
    comments: [{
      content: 'no u',
      comments: [{
        content: 'no u',
      }, {
        content: 'no u 2',
      }, {
        content: 'no u 3',
      }]
    }, {
      content: 'history schmistory',
    }]
  }, {
    content: 'вовоу а по русски!',
  }]
}, {
  content: 'понаехали тут',
  comments: [{
    content: 'сам понаехал(а)!',
  }]
}, {
  content: `
> history schmistory

шлёпанный крот, кожанный мяч

<script>alert('хаха, я взломал ваш сайт!')</script>
  `,
}]



const test_comments_2 = [{
  level: 0,
  content: 'no u',
}, {
  level: 1,
  content: 'no u',
}, {
  level: 2,
  content: 'no u',
}, {
  level: 3,
  content: 'no u',
}, {
  level: 3,
  content: 'no u 2',
}, {
  level: 3,
  content: 'no u 3',
}, {
  level: 2,
  content: 'history schmistory',
}, {
  level: 1,
  content: 'вовоу а по русски!',
}, {
  level: 0,
  content: 'понаехали тут',
}, {
  level: 1,
  content: 'сам понаехал(а)!',
}, {
  level: 0,
  content:`
> history schmistory

шлёпанный крот, кожанный мяч

<script>alert('хаха, я взломал ваш сайт!')</script>
`,
}]

db.posts.drop()
db.posts.insertMany([{
  lang: 'ru-RU',
  title: 'Советский вопрос',
  content: 'Манипуляции с исторической ролью Советского Союза начались давно, но после того, как в Украину въехали танки с красными флагами, игнорировать это стало невозможно.',
  comments: test_comments
}, {
  lang: 'ru-RU',
  title: 'Конец капитализма',
  content: 'Первый шаг в выработке политпрограммы — создание модели посткапиталистического общества будущего. И первый шаг в создании этой модели — определить, как будет выглядеть конец капитализма.',
  comments: test_comments
}, {
  lang: 'ru-RU',
  title: 'А чего мы, собственно, хотим?',
  content:
    `
Допустим, что мы построили социализм и запустили плановую экономику.
Но что именно мы вложим в эту плановую экономику в качестве целевой функции?
Вопрос гораздо более философский, и, в то же время, гораздо более приближенный
жизни **каждого конкретного человека**, чем может показаться на первый взгляд.
`,
}, {
  lang: 'en-US',
  title: 'mic-check',
  content: 'mic-check',
}])