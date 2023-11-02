const express = require('express')
const path = require('path')

const app = express()

//Definindo template engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'public/views'))

//Definindo arquivos publicos
app.use(express.static(path.join(__dirname, 'public')))


// Habilita o server para receber dados via post form

app.use(express.urlencoded( {extended: true} ))

//Rotas 

app.get('/', (req, res) => {
    res.render('index', {
        title:'Titulo teste'
    })
})

//404 error
app.use((req, res) => {
    res.send('Pagina não encontrada')
})

//Executando o servidor 
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))