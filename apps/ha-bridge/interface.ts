export interface HomeAssistantEvent {
  type: string;
  source: string;
  timestamp: number;
  payload?: any;
}
