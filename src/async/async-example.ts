import jwt, { type SignCallback } from 'jsonwebtoken';

export function generateToken(userEmail: string, doneFn: SignCallback) {
  jwt.sign({ email: userEmail }, 'secret123', doneFn);
}

export function generateTokenPromise(userEmail: string) {
  const promise = new Promise<string>((resolve, reject) => {
    jwt.sign({ email: userEmail }, 'secret123', (error: Error | null, token: string | undefined) => {
      if (error) {
        reject(error);
      } else {
        resolve(token as string);
      }
    });
  });

  return promise;
}

// generateToken('test@test.com', (err, token) => {
//   console.log(token);
// });

// generateTokenPromise('test@test.com').then((token) => console.log(token));
