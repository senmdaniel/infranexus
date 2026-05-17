import { Driver } from "../../core/registry/driver";

export const SipGenericDriver: Driver = {
  name: "sip-generic",

  async init(device) {
    console.log("SIP device ready:", device.name);
  },

  async sendAction(device, action) {
    console.log("SIP action:", device.id, action);
  }
};
