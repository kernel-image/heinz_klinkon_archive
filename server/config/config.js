import 'dotenv/config'

const validateEnv = () => {
    if (!process.env.POSTGRES_HOST) {
        throw new Error('POSTGRES_HOST is not defined');
    }
    if (!process.env.PG_PORT) {
        throw new Error('PG_PORT is not defined');
    }
    if (!process.env.POSTGRES_USER) {
        throw new Error('POSTGRES_USER is not defined');
    }
    if (!process.env.POSTGRES_PASSWORD) {
        throw new Error('POSTGRES_PASSWORD is not defined');
    }
    if (!process.env.POSTGRES_DATABASE) {
        throw new Error('POSTGRES_DATABASE is not defined');
    }
    console.log("env validated")
    /*
    for (const key in process.env) {
        if (key.startsWith('POSTGRES_')) {
            console.log(`${key} = ${process.env[key]}`);
        }
    }
    */
}

validateEnv()

function getConfig() {
    return {
        host: process.env.POSTGRES_HOST,
        port: process.env.PG_PORT,
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DATABASE,
        validate: function () {
            for (const key in this) {
                if (key !== 'validate')
                    console.log(`${key} = ${this[key]}`);
            }
        }
    };
}


export { getConfig };