const req = require("request")
const url="http://api.weatherstack.com/current?access_key=7d3044abe61bbbacbcd708fb0e539667&query=mysore"

req({ url: url },(error,response) => {

    const data = JSON.parse(response.body)
    console.log(data.current)
})




