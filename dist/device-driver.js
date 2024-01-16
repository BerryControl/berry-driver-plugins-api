"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceDriver = void 0;
class DeviceDriver {
    getCommand(id) {
        const commands = this.getCommands().filter(cmd => cmd.id === id);
        if (commands.length === 0) {
            return null;
        }
        return commands[0];
    }
}
exports.DeviceDriver = DeviceDriver;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2aWNlLWRyaXZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9kZXZpY2UtZHJpdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQXFCQSxNQUFzQixZQUFZO0lBY3ZCLFVBQVUsQ0FBQyxFQUFVO1FBQ3hCLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFBO1FBRWhFLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUUsQ0FBQztZQUN4QixPQUFPLElBQUksQ0FBQTtRQUNmLENBQUM7UUFFRCxPQUFPLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUN0QixDQUFDO0NBeUJKO0FBL0NELG9DQStDQyJ9