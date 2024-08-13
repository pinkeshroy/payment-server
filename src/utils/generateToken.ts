import jwt from 'jsonwebtoken';

export const generateToken = (user: IUser) => {
    return jwt.sign({ user }, process.env.JWT_SECRET as string, {
        expiresIn: '24h'
    });
};

