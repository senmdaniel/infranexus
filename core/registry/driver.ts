import { Device } from "../models/device";

export interface Driver {
  name: string;

  init(device: Device): Promise<void>;

  onEvent?(event: any): void;

  sendAction?(device: Device, action: any): Promise<void>;
}
