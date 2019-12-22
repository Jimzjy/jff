
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export class DeviceInput {
    name?: string;
    commands?: string[];
    links?: LinkInput[];
}

export class LinkInput {
    to?: string;
}

export class UserInput {
    name?: string;
}

export class Device {
    id?: string;
    name?: string;
    commands?: string[];
    links?: Link[];
}

export class Link {
    to?: string;
}

export abstract class IMutation {
    abstract createDevice(device: DeviceInput): Device | Promise<Device>;

    abstract deleteDevices(ids: string[]): string | Promise<string>;

    abstract updateDevice(id: string, data: DeviceInput): Device | Promise<Device>;

    abstract createUser(id?: string): User | Promise<User>;

    abstract deleteUser(id?: string): User | Promise<User>;

    abstract updateUser(id?: string): User | Promise<User>;
}

export abstract class IQuery {
    abstract device(id: string): Device | Promise<Device>;

    abstract devices(): Device[] | Promise<Device[]>;

    abstract users(): User[] | Promise<User[]>;

    abstract user(id?: string): User | Promise<User>;
}

export class User {
    id?: string;
    name?: string;
}
