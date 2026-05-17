import { Driver } from "../../core/registry/driver";

export const TwoNDriver: Driver = {
  name: "2n",

  async init(device) {
    console.log("2N intercom init:", device.name);
  },

  async sendAction(device, action) {
    if (action.type === "unlock") {
      console.log("Unlock door via 2N:", device.config.ip);
    }
  }
};
