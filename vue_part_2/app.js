var app = new Vue({
    el: '#app',
    data: {
      messages: {
        count: 5
      },
      user: {
          gender: 'male'
      },
      currentTab: 2,
      frameworks: [
          { name: 'Vue',     creator: 'Evan You', stars: 79760},
          { name: 'React',   creator: 'Facebook', stars: 85623},
          { name: 'Angular', creator: 'Google',   stars: 31976}
        ],
      gifId: 'vFKqnCdLPNOKc'
    }
})