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

import { DeviceCommand } from './device-command'

/**
 * Abstract class that must extended by specific device drivers.
 */
export abstract class DeviceDriver<DeviceCommandType extends DeviceCommand> {
    /**
     * Get list of commands that are supported.
     *
     * @returns the list of supported commands
     */
    public abstract getCommands(): DeviceCommandType[]

    /**
     * Get the command with the specified ID.
     *
     * @param id the command ID
     * @returns the command if found, otherwise null
     */
    public getCommand(id: number): DeviceCommandType | null {
        const commands = this.getCommands().filter(cmd => cmd.id === id)

        if (commands.length === 0) {
            return null
        }

        return commands[0]
    }

    /**
     * Excute the specified command.
     *
     * @param command the command that shall be executed
     */
    public abstract execute(command: DeviceCommandType): void

    /**
     * The height of the remote layout when rendered in a UI.
     */
    public abstract get remoteLayoutHeight(): number

    /**
     * The width of the remote layout when rendered in a UI.
     */
    public abstract get remoteLayoutWidth(): number

    /**
     * The layout of the remote for rendering it in a UI.
     *
     * @remark The values are the command IDs.
     */
    public abstract get remoteLayout(): number[][]
}
