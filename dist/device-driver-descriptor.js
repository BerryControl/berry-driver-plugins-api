"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceDriverDescriptor = exports.UserAndPasswordPairingCredentials = exports.PasswordPairingCredentials = exports.PinPairingCredentials = exports.AuthenticationMethod = void 0;
var AuthenticationMethod;
(function (AuthenticationMethod) {
    AuthenticationMethod["NONE"] = "NONE";
    AuthenticationMethod["PIN"] = "PIN";
    AuthenticationMethod["PASSWORD"] = "PASSWORD";
    AuthenticationMethod["USER_AND_PASSWORD"] = "USER_AND_PASSWORD";
})(AuthenticationMethod || (exports.AuthenticationMethod = AuthenticationMethod = {}));
class PinPairingCredentials {
    get pin() {
        return this._pin;
    }
    constructor(pin) {
        this._pin = pin;
    }
}
exports.PinPairingCredentials = PinPairingCredentials;
class PasswordPairingCredentials {
    get password() {
        return this._password;
    }
    constructor(password) {
        this._password = password;
    }
}
exports.PasswordPairingCredentials = PasswordPairingCredentials;
class UserAndPasswordPairingCredentials {
    get user() {
        return this._user;
    }
    get password() {
        return this._password;
    }
    constructor(user, password) {
        this._user = user;
        this._password = password;
    }
}
exports.UserAndPasswordPairingCredentials = UserAndPasswordPairingCredentials;
class DeviceDriverDescriptor {
    get needsAuthentication() {
        return this.authenticationMethod !== AuthenticationMethod.NONE;
    }
}
exports.DeviceDriverDescriptor = DeviceDriverDescriptor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2aWNlLWRyaXZlci1kZXNjcmlwdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2RldmljZS1kcml2ZXItZGVzY3JpcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUEwQkEsSUFBWSxvQkFLWDtBQUxELFdBQVksb0JBQW9CO0lBQzVCLHFDQUFhLENBQUE7SUFDYixtQ0FBVyxDQUFBO0lBQ1gsNkNBQXFCLENBQUE7SUFDckIsK0RBQXVDLENBQUE7QUFDM0MsQ0FBQyxFQUxXLG9CQUFvQixvQ0FBcEIsb0JBQW9CLFFBSy9CO0FBTUQsTUFBYSxxQkFBcUI7SUFHOUIsSUFBVyxHQUFHO1FBQ1YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFBO0lBQ3BCLENBQUM7SUFFRCxZQUFtQixHQUFXO1FBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFBO0lBQ25CLENBQUM7Q0FDSjtBQVZELHNEQVVDO0FBRUQsTUFBYSwwQkFBMEI7SUFHbkMsSUFBVyxRQUFRO1FBQ2YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFBO0lBQ3pCLENBQUM7SUFFRCxZQUFtQixRQUFnQjtRQUMvQixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQTtJQUM3QixDQUFDO0NBQ0o7QUFWRCxnRUFVQztBQUVELE1BQWEsaUNBQWlDO0lBSTFDLElBQVcsSUFBSTtRQUNYLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQTtJQUNyQixDQUFDO0lBRUQsSUFBVyxRQUFRO1FBQ2YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFBO0lBQ3pCLENBQUM7SUFFRCxZQUFtQixJQUFZLEVBQUUsUUFBZ0I7UUFDN0MsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUE7UUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUE7SUFDN0IsQ0FBQztDQUNKO0FBaEJELDhFQWdCQztBQU1ELE1BQXNCLHNCQUFzQjtJQXNDeEMsSUFBVyxtQkFBbUI7UUFDMUIsT0FBTyxJQUFJLENBQUMsb0JBQW9CLEtBQUssb0JBQW9CLENBQUMsSUFBSSxDQUFBO0lBQ2xFLENBQUM7Q0FpQ0o7QUF6RUQsd0RBeUVDIn0=