import 'dotenv/config'

const validateEnv = () => {
    if (!process.env.PG_HOST) {
        throw new Error('PG_HOST is not defined');
    }
    if (!process.env.PG_PORT) {
        throw new Error('PG_PORT is not defined');
    }
    if (!process.env.PG_USER) {
        throw new Error('PG_USER is not defined');
    }
    if (!process.env.PG_PASSWORD) {
        throw new Error('PG_PASSWORD is not defined');
    }
    if (!process.env.PG_DATABASE) {
        throw new Error('PG_DATABASE is not defined');
    }
    console.log("env validated")
    /*
    for (const key in process.env) {
        if (key.startsWith('PG_')) {
            console.log(`${key} = ${process.env[key]}`);
        }
    }
    */
}

validateEnv()

function getConfig() {
    return {
        host: process.env.PG_HOST,
        port: process.env.PG_PORT,
        user: process.env.PG_USER,
        password: process.env.PG_PASSWORD,
        database: process.env.PG_DATABASE,
        validate: function () {
            for (const key in this) {
                if (key !== 'validate')
                    console.log(`${key} = ${this[key]}`);
            }
        }
    };
}


export { getConfig };