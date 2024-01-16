import { Guid } from 'guid-typescript';
import { Plugin } from 'berry-plugin-manager';
import { DeviceCommand } from './device-command';
import { DeviceInfo } from './device-info';
import { DeviceDriver } from './device-driver';
export declare enum AuthenticationMethod {
    NONE = "NONE",
    PIN = "PIN",
    PASSWORD = "PASSWORD",
    USER_AND_PASSWORD = "USER_AND_PASSWORD"
}
export interface PairingCredentials {
}
export declare class PinPairingCredentials implements PairingCredentials {
    private _pin;
    get pin(): string;
    constructor(pin: string);
}
export declare class PasswordPairingCredentials implements PairingCredentials {
    private _password;
    get password(): string;
    constructor(password: string);
}
export declare class UserAndPasswordPairingCredentials implements PairingCredentials {
    private _user;
    private _password;
    get user(): string;
    get password(): string;
    constructor(user: string, password: string);
}
export declare abstract class DeviceDriverDescriptor<DeviceCommandType extends DeviceCommand, DeviceDriverType extends DeviceDriver<DeviceCommandType>, DeviceInfoType extends DeviceInfo> implements Plugin {
    abstract get pluginId(): Guid;
    abstract get displayName(): string;
    abstract get description(): string;
    abstract get authenticationMethod(): AuthenticationMethod;
    get needsAuthentication(): boolean;
    abstract getDevices(): DeviceInfoType[];
    abstract startPairing(deviceInfo: DeviceInfoType, remoteName: string): string;
    abstract finalizePairing(pairingRequest: string, credentials?: PairingCredentials): boolean;
    abstract createDriverInstance(deviceId: string): DeviceDriverType;
}
