
import env from 'dotenv';
import envvar from 'env-var';

// Cargar las variables de entorno desde el archivo .env
env.config();

export const envs = {
    PORT: envvar.get('PORT').required().asPortNumber(),
    PUBLIC_PATH: envvar.get('PUBLIC_PATH').default('public').asString()
};