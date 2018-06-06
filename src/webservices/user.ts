import axios from 'axios';
import {
    User,
} from '../models/user';

class UserWebservice {
    
    /**
     * Call the login method on api
     *
     * @param username Email address
     * @param password Password
     */
    public login(email: string, password: string) {
        return axios.post("/auth/login", {
            grant_type: "password",
            email: email,
            password: password
        })
    }

    public register(user: User) {
        return axios.post('/auth/register', {
            grant_type: "password",
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            password: user.password,
            password_confirmation: user.password_confirmation
        })
    }

    public logout() {
        return axios.post('/auth/logout');
    }

    public getUserInfo() {
        return axios.get('/userinfo');
    }

    public changeNameAndAddress(user:User) {
        return axios.post('account/updateNameAndAddress', {
            firstname: user.firstname,
            lastname: user.lastname,
            address : user.address,
            address_addition: user.address_addition,
            postcode : user.postcode,
            city : user.city,
            country : user.country,
        });
    }

    public changeEmail(new_email:string) {
        return axios.post('account/updateEmail', {
            new_email: new_email,
        });
    }

    public changePassword(current_password:string,new_password: string) {
        return axios.post('account/updatePassword', {
            current_password: current_password,
            new_password: new_password,
        });
    }

    public confirmEmail(emailConfirmationToken: string) {
        return axios.post('/auth/emailConfirmation', {
            email_confirmation_token: emailConfirmationToken,
        });
    }

    public resendEmailConfirmationToken() {
        return axios.post('/auth/resendEmailConfirmationToken', {
        });
    }
}

export const userWebservice = new UserWebservice();
