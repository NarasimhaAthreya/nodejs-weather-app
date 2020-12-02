const req = require("request")
let url="http://api.weatherstack.com/current?access_key=7d3044abe61bbbacbcd708fb0e539667&query="


// Callback function demo
const weather = (place, callback) => {
    console.log(url)
    url=url+place
    console.log(url)

    req({ url: url, json:true },(error,response) => {
        if(error) {
            console.log("Something went wrong with request")
        } else {
           const output = response.body.current
           callback(error,output)
        }
        })
        
}

module.exports = weather
