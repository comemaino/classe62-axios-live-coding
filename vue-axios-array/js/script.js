const app = new Vue(
    {
        el: '#root',
        data: {
            numbersArray: [],
            minValue: 10,
            maxValue: 100,
            itemsNumber: 10
        },
        created() {
            axios.get('https://ﬂynn.boolean.careers/exercises/api/array/integers', {
                params: {
                    min: this.minValue,
                    max: this.maxValue,
                    items: this.itemsNumber
                }
            })
            .then((resp) => {
                const randomNumbers = resp.data.response;
                this.numbersArray = randomNumbers;
            });
        }
    }
) 