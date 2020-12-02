const req = require("request")



// Callback function demo
const weather = (place, callback) => {
    var url="http://api.weatherstack.com/current?access_key=7d3044abe61bbbacbcd708fb0e539667&query="
    console.log(url)
    url=url+place
    console.log(url)

    req({ url: url, json:true },(error,response) => {
        if(error) {
            console.log("Something went wrong with request -- From App.js")
        } else {
           const output = response.body
           callback(error,output)
         
        }
        })
        
}

module.exports = weather
