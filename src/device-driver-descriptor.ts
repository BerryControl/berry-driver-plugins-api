/*
   Copyright 2024 Thomas Bonk

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
 */

import { Guid } from 'guid-typescript';
import { Plugin } from 'berry-plugin-manager'

import { DeviceCommand } from './device-command'
import { DeviceInfo } from './device-info'
import { DeviceDriver } from './device-driver'

/**
 * Authentication method for device drivers that require pairing.
 */
export enum AuthenticationMethod {
    NONE = 'NONE',
    PIN = 'PIN',
    PASSWORD = 'PASSWORD',
    USER_AND_PASSWORD = 'USER_AND_PASSWORD'
}

export interface PairingCredentials {

}

export class PinPairingCredentials implements PairingCredentials {
    private _pin: string

    public get pin(): string {
        return this._pin
    }

    public constructor(pin: string) {
        this._pin = pin
    }
}

export class PasswordPairingCredentials implements PairingCredentials {
    private _password: string

    public get password(): string {
        return this._password
    }

    public constructor(password: string) {
        this._password = password
    }
}

export class UserAndPasswordPairingCredentials implements PairingCredentials {
    private _user: string
    private _password: string

    public get user(): string {
        return this._user
    }

    public get password(): string {
        return this._password
    }

    public constructor(user: string, password: string) {
        this._user = user
        this._password = password
    }
}


/**
 * Abstract class that declares the interface for a device driver plugin.
 */
export abstract class DeviceDriverDescriptor
    <
        DeviceCommandType extends DeviceCommand,
        DeviceDriverType extends DeviceDriver<DeviceCommandType>,
        DeviceInfoType extends DeviceInfo
    > implements Plugin {

    /**
     * The ID of the plugin.
     *
     * @remark
     * The ID must remain constant, even accross versions. Best practise is to
     * generate a V1 UUID once and always return it.
     */
    public abstract get pluginId(): Guid

    /**
     * The plugin name that can be displayed by the host application.
     */
    public abstract get displayName(): string

    /**
     * Description for the plugin that can be displayed by the host application.
     *
     * @remark
     * The description shall be plain text.
     */
    public abstract get description(): string

    /**
     * Authentication method for device drivers that require pairing.
     */
    public abstract get authenticationMethod(): AuthenticationMethod

    /**
     * This flag determines whether authentication is needed when pairing
     * the device.
     */
    public get needsAuthentication(): boolean {
        return this.authenticationMethod !== AuthenticationMethod.NONE
    }

    /**
     * All devices that are supported or are available.
     *
     * @return the devices
     */
    public abstract getDevices(): DeviceInfoType[]

    /**
     * Start pairing with the given device.
     *
     * @param deviceInfo the device info of the device to pair with
     * @param remoteName the name of the remote
     * @returns pairing request ID
     */
    public abstract startPairing(deviceInfo: DeviceInfoType, remoteName: string): string

    /**
     * Finalize the pairing process.
     *
     * @param pairingRequest the pairing request id
     * @param credentials the credentials for pairing with the device
     */
    public abstract finalizePairing(pairingRequest: string, credentials?: PairingCredentials): boolean

    /**
     * Create a device driver instance for the device with the given ID.
     *
     * @param deviceId the device id for the device instance to be created
     * @return the instance of the device
     */
    public abstract createDriverInstance(deviceId: string): DeviceDriverType
}
