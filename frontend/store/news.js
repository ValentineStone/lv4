export const state = () => ({
  news: {
    list: [],
    cat: 0,
    count: 0,
    limit: 30,
    offset: 0,
    search: null
  },
  categories: {
    list: [],
    parent: {
      id: 0,
      name: ''
    },
    count: 0
  }

})
export const mutations = {
  setNews (state, pay) {
    state.news.list = pay.list;
    state.news.count = pay.count;
  },
  setNewsCat (state, pay) {
    state.news.cat = pay;
  },
  setNewsOffset (state, pay) {
    state.news.offset = pay;
  },
  setNewsSearch (state, pay) {
    state.news.search = pay;
  },
  setCats (state, pay) {
    state.categories.list = pay.list;
    state.categories.parent.name = pay.parentName;
    state.categories.count = pay.count;
  },
  setShowDetails (state,pay) {

  }
}
export const actions = {
  // Получение левой панели навигации с сервера
  async getNews ({commit}) {
    const res = {
      error: false,
      news: {
        list: [
          {
            id: 0,
            name: 'Опасное марксисткое говно',
            short: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto culpa cumque, dignissimos eum expedita facere ipsa labore laborum modi, odit officiis optio quasi quisquam?',
            comments_counts: 25,
            image: 'https://aroundpet.ru/wp-content/uploads/chem-stradayut-tolstye-koty.jpg',
            rate: 265,
            author: { // false если аноним
              id: 25,
              rate: -2453,
              name: 'Жопосраничк',
              image: 'https://aroundpet.ru/wp-content/uploads/chem-stradayut-tolstye-koty.jpg',
            },
            code: 'omg',
            url: '/cat2/cat22/cat222/omg/'
          },
          {
            id: 0,
            name: 'Опасное марксисткое говно',
            short: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto culpa cumque, dignissimos eum expedita facere ipsa labore laborum modi, odit officiis optio quasi quisquam?',
            comments_counts: 25,
            image: 'https://aroundpet.ru/wp-content/uploads/chem-stradayut-tolstye-koty.jpg',
            rate: 265,
            author: false,
            code: 'omg',
            url: '/cat2/cat22/cat222/omg/'
          },
          {
            id: 0,
            name: 'Опасное марксисткое говно',
            short: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto culpa cumque, dignissimos eum expedita facere ipsa labore laborum modi, odit officiis optio quasi quisquam?',
            comments_counts: 25,
            image: 'https://aroundpet.ru/wp-content/uploads/chem-stradayut-tolstye-koty.jpg',
            rate: 265,
            author: false,
            code: 'omg',
            url: '/cat2/cat22/cat222/omg/'
          },
          {
            id: 0,
            name: 'Опасное марксисткое говно',
            short: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto culpa cumque, dignissimos eum expedita facere ipsa labore laborum modi, odit officiis optio quasi quisquam?',
            comments_counts: 25,
            image: 'https://aroundpet.ru/wp-content/uploads/chem-stradayut-tolstye-koty.jpg',
            rate: 265,
            author: false,
            code: 'omg',
            url: '/cat2/cat22/cat222/omg/'
          },
          {
            id: 0,
            name: 'Опасное марксисткое говно',
            short: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto culpa cumque, dignissimos eum expedita facere ipsa labore laborum modi, odit officiis optio quasi quisquam?',
            comments_counts: 25,
            image: 'https://aroundpet.ru/wp-content/uploads/chem-stradayut-tolstye-koty.jpg',
            rate: 265,
            author: false,
            code: 'omg',
            url: '/cat2/cat22/cat222/omg/'
          },
          {
            id: 0,
            name: 'Опасное марксисткое говно',
            short: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto culpa cumque, dignissimos eum expedita facere ipsa labore laborum modi, odit officiis optio quasi quisquam?',
            comments_counts: 25,
            image: 'https://aroundpet.ru/wp-content/uploads/chem-stradayut-tolstye-koty.jpg',
            rate: 265,
            author: false,
            code: 'omg',
            url: '/cat2/cat22/cat222/omg/'
          },
          {
            id: 0,
            name: 'Опасное марксисткое говно',
            short: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto culpa cumque, dignissimos eum expedita facere ipsa labore laborum modi, odit officiis optio quasi quisquam?',
            comments_counts: 25,
            image: 'https://aroundpet.ru/wp-content/uploads/chem-stradayut-tolstye-koty.jpg',
            rate: 265,
            author: false,
            code: 'omg',
            url: '/cat2/cat22/cat222/omg/'
          },
          {
            id: 0,
            name: 'Опасное марксисткое говно',
            short: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto culpa cumque, dignissimos eum expedita facere ipsa labore laborum modi, odit officiis optio quasi quisquam?',
            comments_counts: 25,
            image: 'https://aroundpet.ru/wp-content/uploads/chem-stradayut-tolstye-koty.jpg',
            rate: 265,
            author: false,
            code: 'omg',
            url: '/cat2/cat22/cat222/omg/'
          },
          {
            id: 0,
            name: 'Опасное марксисткое говно',
            short: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto culpa cumque, dignissimos eum expedita facere ipsa labore laborum modi, odit officiis optio quasi quisquam?',
            comments_counts: 25,
            image: 'https://aroundpet.ru/wp-content/uploads/chem-stradayut-tolstye-koty.jpg',
            rate: 265,
            author: false,
            code: 'omg',
            url: '/cat2/cat22/cat222/omg/'
          },
          {
            id: 0,
            name: 'Опасное марксисткое говно',
            short: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto culpa cumque, dignissimos eum expedita facere ipsa labore laborum modi, odit officiis optio quasi quisquam?',
            comments_counts: 25,
            image: 'https://aroundpet.ru/wp-content/uploads/chem-stradayut-tolstye-koty.jpg',
            rate: 265,
            author: false,
            code: 'omg',
            url: '/cat2/cat22/cat222/omg/'
          },
          {
            id: 0,
            name: 'Опасное марксисткое говно',
            short: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto culpa cumque, dignissimos eum expedita facere ipsa labore laborum modi, odit officiis optio quasi quisquam?',
            comments_counts: 25,
            image: 'https://aroundpet.ru/wp-content/uploads/chem-stradayut-tolstye-koty.jpg',
            rate: 265,
            author: false,
            code: 'omg',
            url: '/cat2/cat22/cat222/omg/'
          },
          {
            id: 0,
            name: 'Опасное марксисткое говно',
            short: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto culpa cumque, dignissimos eum expedita facere ipsa labore laborum modi, odit officiis optio quasi quisquam?',
            comments_counts: 25,
            image: 'https://aroundpet.ru/wp-content/uploads/chem-stradayut-tolstye-koty.jpg',
            rate: 265,
            author: false,
            code: 'omg',
            url: '/cat2/cat22/cat222/omg/'
          },
          {
            id: 0,
            name: 'Опасное марксисткое говно',
            short: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto culpa cumque, dignissimos eum expedita facere ipsa labore laborum modi, odit officiis optio quasi quisquam?',
            comments_counts: 25,
            image: 'https://aroundpet.ru/wp-content/uploads/chem-stradayut-tolstye-koty.jpg',
            rate: 265,
            author: false,
            code: 'omg',
            url: '/cat2/cat22/cat222/omg/'
          },
          {
            id: 0,
            name: 'Опасное марксисткое говно',
            short: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto culpa cumque, dignissimos eum expedita facere ipsa labore laborum modi, odit officiis optio quasi quisquam?',
            comments_counts: 25,
            image: 'https://aroundpet.ru/wp-content/uploads/chem-stradayut-tolstye-koty.jpg',
            rate: 265,
            author: false,
            code: 'omg',
            url: '/cat2/cat22/cat222/omg/'
          },
        ],
        count: 804
      },
    }
    try {
      if (res.error) throw new Error(res.error.message);
      commit('setNews', res.news);
    } catch (error) {
      console.log(error)
      commit('core/addModalInfo', {title: 'Ошибка', text: error.message},{root:true})
    }
  },
  async getCategories ({commit}) {
    // const res = await this.$axios.$post('/main/get_nav/');
    const res = {
      error: false,
      categories: {
        list: [
          {id: 0, name: 'Категория 1', code: 'cat1', url: '/cat1/', count: 24},
          {id: 1, name: 'Категория 2', code: 'cat2', url: '/cat2/', count: 12},
          {id: 2, name: 'Категория 3', code: 'cat3', url: '/cat3/', count: 145},
          {id: 4, name: 'Категория 4', code: 'cat4', url: '/cat4/', count: 32},
          {id: 5, name: 'Категория 5', code: 'cat5', url: '/cat5/', count: 67},
        ],
        parentName: 'Все категории',
        count: 5
      },
    }
    try {
      if (res.error) throw new Error(res.error.message);
      await commit('setCats', res.categories);
    } catch (error) {
      commit('core/addModalInfo', {title: 'Ошибка', text: error.message},{root:true})
    }
  }
}
