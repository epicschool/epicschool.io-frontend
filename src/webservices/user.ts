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
        return axios.post('/auth/login', {
            grant_type: 'password',
            email,
            password,
        });
    }

    public register(user: User) {
        return axios.post('/auth/register', {
            grant_type: 'password',
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            password: user.password,
            password_confirmation: user.password_confirmation,
        });
    }

    public logout() {
        return axios.post('/auth/logout');
    }

    public getUserInfo() {
        return axios.get('/auth/userinfo');
    }

    public changeNameAndAddress(user: User) {
        return axios.post('/auth/changeNameAndAddress', {
            firstname: user.firstname,
            lastname: user.lastname,
            address : user.address,
            address_addition: user.address_addition,
            postcode : user.postcode,
            city : user.city,
            country : user.country,
        });
    }

    public changeEmail(newEmail: string) {
        return axios.post('/auth/changeEmail', {
            new_email: newEmail,
        });
    }

    public changePassword(currentPassword: string, newPassword: string) {
        return axios.post('/auth/changePassword', {
            current_password: currentPassword,
            new_password: newPassword,
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
