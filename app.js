const express = require('express');
const app = express();

const PORT = 8877;

app.get('/about', (req, res) => {
    res.json({
        name: 'Luiz Jolo',
        email: 'luizfelipe.jolo@gmail.com',
        github: 'https://github.com/luiz-jolo',
        salary_claim: 5000,
        skills: [
            {
                name: 'chatbot developer',
                description: 'ibm watson developer'
            },
            {
                name: 'node developer',
                description: 'api rest'
            }
        ]
    })
})

app.get('/contributors', (req, res) => {
    res.json({
        team: [
        {
            name: 'Paulo Cezar',
            office: 'Back-end developer',
            wage: 5000,
            admission: '01-01-2015',
            registration: 'A02113'
        },
        {
            name: 'Marcos Luiz',
            office: 'Product Manager',
            wage: 5000,
            admission: '01-06-2019',
            registration: 'A02113'
        },
        {
            name: 'Adriana Alves',
            office: 'Team Leader',
            wage: 8000,
            admission: '01-01-2016',
            registration: 'A02113'
        },
        {
            name: 'Larissa Marinho',
            office: 'Ux design',
            wage: 7000,
            admission: '01-01-2019',
            registration: 'A02113'
        },
        ]
    })
})

app.get('/', (req, res) => {
    res.json({
        msg: 'OK'
    })
})



app.listen(PORT, () => {
    console.log('server running in port '+ PORT);
})