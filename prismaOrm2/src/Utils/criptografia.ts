import crypto from 'crypto';
import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

const ALGORITHM = 'ripemd160WithRSA';
const SECRET_TOKEN_AUTENTICACAO = 'teste1234567890';

interface AuthRequest extends Request {
    id_usuario: string | number;
}

interface TokenPayload extends JwtPayload {
    id_usuario: string | number;
}

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

const gerarToken = (id_usuario: string | number) => {
    const token = jwt.sign({ id_usuario: id_usuario }, SECRET_TOKEN_AUTENTICACAO);
    return token;
};

const validartoken = ( req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['x-access-token'] as string;
    if (!token) {
        return res.status(401).json({
            autenticacao: false,
            mensagem: 'Token não encontrado'
        });
    }

    try {
        const decoded = jwt.verify(token, SECRET_TOKEN_AUTENTICACAO) as TokenPayload;
        next();
    } catch (erro) {
        return res.status(500).json({
            autenticacao: false,
            mensagem: 'Falha na autenticação do token'
        });
    }

}
    
export { hash, gerarToken, validartoken };