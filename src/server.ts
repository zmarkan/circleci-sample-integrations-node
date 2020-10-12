import app from './app'

const PORT = 3000 //TODO: heroku port

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})