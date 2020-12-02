const app = require("./app.js")
const yargs = require("yargs")
const { demandOption } = require("yargs")

yargs.command({

    command: "Location",
    description : "Enter the place to look for temperature",
    builder:  {
        Name : {
            describe : "Enter the place name",
            demandOption: true
        }
    },
    handler: (argv)=> {
        app(argv.Name,(error,name)=> {
            if(error) {
                console.log("Something wrong with reqest")
            } else {
                console.log("This is from callback function ")
                console.log(name)
            }
            })
    }


})


yargs.parse()