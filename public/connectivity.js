const { Sequelize } = require('sequelize');
require("dotenv").config()
// console.log(process.env.DB_URL)

const sequelize = new Sequelize(
    // 'postgres://admin:lkke9PVa4A7odq3nxEMY2wOEIm22l9EP@dpg-cmruecta73kc739h2ssg-a.oregon-postgres.render.com/customerdb_t80t'
    process.env.DB_URL,{
    dialect: "postgres",
    logging: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
})

sequelize
.sync()
.then(() => {
    console.log('DB Connected')
})
.catch((err) => {
    console.log(err)
})








    // console.log(sequelize.config.password)
// const { Client } = require('pg')

// const client = new Client ({
//     user: 'admin',
//     host: 'dpg-cmruecta73kc739h2ssg-a',
//     database:'customerdb_t80t',
//     password:'lkke9PVa4A7odq3nxEMY2wOEIm22l9EP',
//     port:'5432',
// })

// client.connect((err) => {
//     if(err) {
//         console.error('Connection error - ', err.stack)
//     }
//     else {
//         console.log('DB Connected')
//     }
// })

// module.exports = client;