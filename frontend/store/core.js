export const getters = {
  declOfNum: (state) => (data) => {
    return data.words[(data.number % 100 > 4 && data.number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(data.number % 10 < 5) ? Math.abs(data.number) % 10 : 5]];
  },
}
