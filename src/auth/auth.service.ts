import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService {
    signup() {
        return {msg: 'Signup page'};
    }

    signin() {
        return {msg: 'signin page'};
    }
}