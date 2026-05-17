import { bus } from "../../core/event-bus";

bus.on("call.incoming", (event) => {
  console.log("CALL EVENT RECEIVED:", event);
});

bus.emit({
  id: "evt_1",
  type: "call.incoming",
  source: "2n.frontdoor",
  tenant: "demo",
  timestamp: Date.now(),
  payload: {
    from: "frontdoor",
    to: "101"
  }
});
