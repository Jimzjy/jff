
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export interface DeviceInput {
    id?: string;
    name?: string;
}

export interface Device {
    id?: string;
    name?: string;
}

export interface IMutation {
    createDevice(device: DeviceInput): Device | Promise<Device>;
}

export interface IQuery {
    device(id: string): Device | Promise<Device>;
    devices(): Device[] | Promise<Device[]>;
}
