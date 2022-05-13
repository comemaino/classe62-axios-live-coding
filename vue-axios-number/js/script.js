const app = new Vue(
    {
        el: '#root',
        data: {
            number: null
        },
        created() {
            this.generateNumber();
        },
        methods: {
            generateNumber() {
                axios
                .get('https://ﬂynn.boolean.careers/exercises/api/random/int')
                .then((resp) => {
                    this.number = resp.data.response;
                });
            }
        }
    }
) 