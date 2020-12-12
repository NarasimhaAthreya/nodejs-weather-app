const req = require("request")

const systemInfo = (callback) => {

    var url = "http://localhost:8080/details"
    req({ url: url, json: true }, (error, response) => {
        if (error) {
            console.log("Something wrong in connection to url " + url)
        } else if (response.error) {

            const output = response.error
        } else {
            const output = response.body
            callback(error, output)

        }
    })

}

module.exports = systemInfo
