export type Event = {
  id: string;
  type: string;
  source: string;
  tenant: string;
  timestamp: number;
  payload?: any;
};

type Handler = (event: Event) => void;

export class EventBus {
  private handlers: Record<string, Handler[]> = {};

  on(type: string, handler: Handler) {
    if (!this.handlers[type]) this.handlers[type] = [];
    this.handlers[type].push(handler);
  }

  emit(event: Event) {
    console.log("[EVENT]", event);

    const handlers = this.handlers[event.type] || [];
    handlers.forEach(h => h(event));
  }
}

export const bus = new EventBus();
