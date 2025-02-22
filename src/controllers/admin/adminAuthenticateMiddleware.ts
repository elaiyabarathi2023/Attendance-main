import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

async function adminAuthenticateMiddleware(req: Request, res: Response, next: NextFunction) {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({ message: 'Authorization token is missing' });
    }

    try {
        const decoded = jwt.verify(token, '#thdgdf9') as jwt.JwtPayload;

        // Now TypeScript knows that 'decoded' is of type JwtPayload
        if (typeof decoded === 'string') {
            return res.status(401).json({ message: 'Invalid token format' });
        }

        next(); // Call next here to pass control to the next middleware
    } catch (error) {
        res.status(401).json({ message: 'Authentication failed' });
    }
}

export default adminAuthenticateMiddleware;
