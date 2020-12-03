const express = require('express')
const path = require('path')
const hbs = require('hbs')
const app1 = require('./app.js')
//require('bootstrap')

const app = express()
app.set('view engine','hbs')
app.set('views',path.join(__dirname,'../views'))
app.use(express.static(path.join(__dirname,'../public')))
hbs.registerPartials(path.join(__dirname,'../partials'))


app.get("/weather", (req, res) => {
console.log(req.query)

 app1(req.query.place,(error,data) => {
     if(error) {

        res.redirect("/")
     } else if (data.error){
         res.redirect("/")
     }else{

        var weather = {
            appName: "Weather Application",
            Place: data.location.name,
            Temp: data.current.temperature,
            icon: data.current.weather_icons[0],
            Country: data.location.country,
            localtime: data.location.localtime,
            observationtime: data.current.observation_time,
            weatherdesc: data.current.weather_descriptions[0],
            windspeed: data.current.wind_speed,
            winddirection: data.current.wind_dir,
            humidity: data.current.humidity,
            feelslike: data.current.feelslike
        }
        res.render("index", weather)
    }
    })

})

app.get("/", (req, res) => {

    res.render("input")
})
app.listen(3000,()=>{
    console.log("Server is up")
})