import { DeviceCommand } from './device-command';
export declare abstract class DeviceDriver<DeviceCommandType extends DeviceCommand> {
    abstract getCommands(): DeviceCommandType[];
    getCommand(id: number): DeviceCommandType | null;
    abstract execute(command: DeviceCommandType): void;
    abstract get remoteLayoutHeight(): number;
    abstract get remoteLayoutWidth(): number;
    abstract get remoteLayout(): number[][];
}
