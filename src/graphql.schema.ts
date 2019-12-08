
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export interface DeviceInput {
    name?: string;
    commands?: string[];
    links?: LinkInput[];
}

export interface LinkInput {
    to?: string;
}

export interface Device {
    id?: string;
    name?: string;
    commands?: string[];
    links?: Link[];
}

export interface Link {
    to?: string;
}

export interface IMutation {
    createDevice(device: DeviceInput): Device | Promise<Device>;
    deleteDevices(ids: string[]): string | Promise<string>;
    updateDevice(id: string, data: DeviceInput): Device | Promise<Device>;
}

export interface IQuery {
    device(id: string): Device | Promise<Device>;
    devices(): Device[] | Promise<Device[]>;
}
