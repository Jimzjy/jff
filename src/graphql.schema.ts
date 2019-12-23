
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
    from?: string;
    to?: string;
    toID?: string;
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
    from?: string;
    to?: string;
    toID?: string;
}

export abstract class IMutation {
    abstract createDevice(device: DeviceInput): Device | Promise<Device>;

    abstract deleteDevices(ids: string[]): string | Promise<string>;

    abstract updateDevice(id: string, data: DeviceInput): Device | Promise<Device>;

    abstract createUser(user: UserInput): User | Promise<User>;

    abstract deleteUsers(ids: string[]): string | Promise<string>;

    abstract updateUser(id: string, user: UserInput): User | Promise<User>;
}

export abstract class IQuery {
    abstract device(id: string): Device | Promise<Device>;

    abstract devices(): Device[] | Promise<Device[]>;

    abstract users(): User[] | Promise<User[]>;

    abstract user(id: string): User | Promise<User>;
}

export class User {
    id?: string;
    name?: string;
}
