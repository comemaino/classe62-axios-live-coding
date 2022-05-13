
const myJson = `
{
    "users": [
        {
            "nome": "Olga",
            "email": "olga@gmail.com"
        },
        {
            "nome": "Karolina",
            "email": "karolina@gmail.com"
        }
    ]
}
`;


console.log(myJson, typeof(myJson));
console.log(JSON.parse(myJson));
