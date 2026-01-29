import dotenv from 'dotenv';
dotenv.config();

 const environment=process.env.NODE_ENV;
 const PORT=process.env.PORT;
export const DB_URL=process.env.DATABASE_URL;
// console.log(DB_URL);
 const corsUrl = process.env.CORS_URL;
export const SECRET1=process.env.SECRET;

 const tokenInfo = {
  accessTokenValidity: parseInt(process.env.ACCESS_TOKEN_VALIDITY_SEC || '0'),
  refreshTokenValidity: parseInt(process.env.REFRESH_TOKEN_VALIDITY_SEC || '0'),
  issuer: process.env.TOKEN_ISSUER || '',
  audience: process.env.TOKEN_AUDIENCE || '',
};



 export {environment,PORT,corsUrl,tokenInfo}