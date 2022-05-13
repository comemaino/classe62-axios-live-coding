const app = new Vue({
  el: "#root",
  data: {
    userNumber: null,
    computerNumber: null,
  },
  computed: {
    resultMessage() {
      let message;
      if (this.userNumber > this.computerNumber) {
        message = "Hai vinto tu";
      } else if (this.computerNumber > this.userNumber) {
        message = "Ha vinto il computer";
      } else {
        message = "Pareggio";
      }
      return message;
    },
  },
  methods: {
    startGame() {
      axios
        .get("https://ﬂynn.boolean.careers/exercises/api/random/int")
        .then((resp) => {
          this.userNumber = resp.data.response;
        });

      axios
        .get("https://ﬂynn.boolean.careers/exercises/api/random/int")
        .then((resp) => {
          this.computerNumber = resp.data.response;
        });
    },
  },
});
