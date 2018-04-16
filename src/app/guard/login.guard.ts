import { CanActivate } from '@angular/router';

export class LoginGuard implements CanActivate {
    canActivate() {
        let loggedIn: boolean = Math.random() < 0.5;
        if(!loggedIn) {
            console.log("用户未登录");
            alert('你可能需要多点几下，这是路由守卫CanActivate的演示。');
        }
        return loggedIn;
    }
}