import { bus } from "../../core/event-bus";

console.log("InfraNexus simulator started");

// Simuleer 2N deurbel
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

// Simuleer knop druk
setTimeout(() => {
  bus.emit({
    id: "evt_2",
    type: "button.pressed",
    source: "2n.frontdoor",
    tenant: "demo",
    timestamp: Date.now(),
    payload: {
      button: 1
    }
  });
}, 2000);
