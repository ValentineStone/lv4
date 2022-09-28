export const state = () => ({
  structure: []
})
export const mutations = {
  setNavigate (state, pay) {
    state.structure = pay;
  }
}
export const actions = {
  // Получение левой панели навигации с сервера
  async getNavigate ({commit}) {
    // const res = await this.$axios.$post('https://api.nuxtjs.dev/posts');
    const res = {
      error: false,
      nav: [
        {
          name: 'Статьи редакции',
          url: '/articles/from_editors/',
          auth: false,
          rule: '',
          child: [
            {
              name: 'Категория',
              url: '/articles/from_editors/cat/',
              auth: true,
              rule: '',
              child: [
                {
                  name: 'Категория категории',
                  url: '/articles/from_editors/cat2/cat2-1/',
                  auth: false,
                  rule: '',
                  child: []
                },
                {
                  name: 'Очень длинное название катогрии категории',
                  url: '/articles/from_editors/cat2/cat2-2/',
                  auth: false,
                  rule: '',
                  child: []
                },
              ]
            },
            {
              name: 'Категория2',
              url: '/articles/from_editors/cat2/',
              auth: true,
              rule: '',
              child: []
            },
          ]
        },
        {
          name: 'Статьи одобренные редакцией',
          url: '/articles/approved/',
          auth: false,
          rule: '',
          child: []
        },
        {
          name: 'Песочница',
          url: '/articles/from-readers/',
          auth: false,
          rule: '',
          child: []
        }
      ]
    }
    try {
      if (res.error) throw new Error(res.error.message);
      await commit('setNavigate', res.nav);
    } catch (error) {
      // commit('core/addModalInfo', {title: 'Ошибка', text: error.message},{root:true})
    }
  }
}
