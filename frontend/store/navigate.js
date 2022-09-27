export const state = () => ({
  structure: []
})
export const mutations = {
  setNavigate (state) {
    state.showModalPayment = !state.showModalPayment;
  }
}
export const actions = {
  // Получение левой панели навигации с сервера
  async getNavigate (state, commit) {
    // const res = await this.$axios.$post('/main/get_nav/');
    const res = {
      error: false,
      nav: [
        {
          name: 'Статьи редакции',
          url: '/red/',
          auth: false,
          rule: '',
          child: [
            {
              name: 'Категория',
              url: '/red/cat/',
              auth: true,
              rule: '',
              child: [
                {
                  name: 'Категория категории',
                  url: '/red/cat/cat/',
                  auth: false,
                  rule: '',
                  child: []
                },
              ]
            }
          ]
        },
        {
          name: 'Статьи одобренные редакцией',
            url: '/red2/',
          auth: false,
          rule: '',
          child: []
        },
        {
          name: 'Песочница',
            url: '/red2/',
          auth: false,
          rule: '',
          child: []
        }
      ]
    }
    try {
      if (res.error) throw new Error(res.error.message);
      commit('setNavigate', res.nav);
    } catch (error) {
      commit('core/addModalInfo', {title: 'Ошибка', text: error.message},{root:true})
    }
  }
}
