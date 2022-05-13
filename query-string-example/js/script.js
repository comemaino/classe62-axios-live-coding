const minValue = 100;
const maxValue = 1000;
const itemsLength = 10;

axios
.get(`https://ﬂynn.boolean.careers/exercises/api/array/integers?min=${minValue}&max=${maxValue}&items=${itemsLength}`)
.then( function(resp) {
    console.log(resp.data.response);
});


// .get(url, obj)
axios.get(
    'https://ﬂynn.boolean.careers/exercises/api/array/integers', 
    {
        params: {
            min: minValue,
            max: maxValue,
            items: itemsLength
        }
    }
)
.then(function(resp) {
    console.log(resp.data.response);
});