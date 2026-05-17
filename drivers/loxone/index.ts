import { Driver } from "../../core/registry/driver";

export const LoxoneDriver: Driver = {
  name: "loxone",

  async sendAction(device, action) {
    await fetch(
      `http://${device.config.ip}/dev/sps/io/${action.target}`
    );
  }
};
