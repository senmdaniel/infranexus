export type DeviceType = "sip_phone" | "intercom" | "loxone_io";

export interface Device {
  id: string;
  tenant: string;
  name: string;
  type: DeviceType;
  driver: string;
  config: Record<string, any>;
}
