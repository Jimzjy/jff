
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

export class DeleteResult {
    n?: number;
    ok?: number;
    deletedCount?: number;
}

export class Device {
    id?: string;
    name?: string;
    commands?: string[];
    links?: Link[];
}

export class History {
    username?: string;
    userID?: string;
    commmand?: string;
    device?: string;
    deviceID?: string;
    time?: string;
}

export class Link {
    from?: string;
    to?: string;
    toID?: string;
}

export abstract class IMutation {
    abstract createDevice(device: DeviceInput): Device | Promise<Device>;

    abstract deleteDevices(ids: string[]): DeleteResult | Promise<DeleteResult>;

    abstract updateDevice(id: string, data: DeviceInput): Device | Promise<Device>;

    abstract createUser(user: UserInput): User | Promise<User>;

    abstract deleteUsers(ids: string[]): DeleteResult | Promise<DeleteResult>;

    abstract updateUser(id: string, user: UserInput): User | Promise<User>;
}

export abstract class IQuery {
    abstract device(id: string): Device | Promise<Device>;

    abstract devices(): Device[] | Promise<Device[]>;

    abstract history(type: string): History[] | Promise<History[]>;

    abstract users(): User[] | Promise<User[]>;

    abstract user(id: string): User | Promise<User>;

    abstract userLogin(name?: string): boolean | Promise<boolean>;
}

export class User {
    id?: string;
    name?: string;
}
