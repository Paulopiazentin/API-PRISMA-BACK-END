import crypto from 'crypto';
import jwt from 'jsonwebtoken';

const ALGORITHM = 'ripemd160WithRSA';
const SECRET_TOKEN_AUTENTICACAO = 'teste1234567890';

const hash = (senha: string | number ) => {
    if (typeof(senha) === 'number') {
        senha = senha.toString();
    }

    senha = senha.split("").reverse().join();
    senha = crypto.createHash(ALGORITHM).update(senha).digest('hex');
    let salt = senha.substring(senha.length -10, senha.length);
    senha = crypto.createHmac(ALGORITHM, salt).update(senha).digest('hex');
    return senha;
};

export { hash, SECRET_TOKEN_AUTENTICACAO };
