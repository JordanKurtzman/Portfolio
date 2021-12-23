const fs = require('fs')
const envData = [
    `MAILTRAP_PASSWORD=${MAILTRAP_PASSWORD.process.env}`,
    `MAILTRAP_USERNAME=${MAILTRAP_USERNAME.process.env}`,
    `RECEIVER_EMAIL=${RECEIVER_EMAIL.process.env}`
]

fs.writeFileSync('./.env.', envData.join('\n'))