import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  login(username: string, password: string) {
    // Mock simple
    if (username === 'admin' && password === '1234') {
      return { access_token: 'fake-jwt-token', user: { username } };
    }
    return { message: 'Invalid credentials' };
  }
}
