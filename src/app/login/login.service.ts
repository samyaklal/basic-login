import { Injectable } from '@angular/core';

const credentials: object = {
  admin: "admin",
  username: "password"
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  validateCredentials(userName: string, password: string): Promise<boolean> {
    return new Promise(resolve => {
      resolve(credentials[userName] && password === credentials[userName]);
    }) as Promise<boolean>;
  }
}
