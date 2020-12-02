const express = require('express')
const path = require('path')
const hbs = require('hbs')
//require('bootstrap')

const app = express()
app.set('view engine','hbs')
app.set('views',path.join(__dirname,'../views'))
app.use(express.static(path.join(__dirname,'../public')))
hbs.registerPartials(path.join(__dirname,'../partials'))


app.get("/", (req, res) => {

    res.render("index", {
        appName: "Weather Application"
    })

})

app.listen(3000,()=>{
    console.log("Server is up")
})