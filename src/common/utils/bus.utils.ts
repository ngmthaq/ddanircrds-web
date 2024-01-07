export type EventBusCallbackType<T> = (params: T) => void;

export type EventBusNameType = "changeTheme";

class EventBusGenerator {
  private events: Record<string, EventBusCallbackType<any>[]> = {};

  public on<T>(eventName: EventBusNameType, callback: EventBusCallbackType<T>) {
    if (this.events[eventName]) {
      this.events[eventName].push(callback);
    } else {
      this.events[eventName] = [callback];
    }
  }

  public off<T>(eventName: EventBusNameType, callback: EventBusCallbackType<T>) {
    if (this.events[eventName]) {
      this.events[eventName] = this.events[eventName].filter((cb) => cb !== callback);
    } else {
      this.events[eventName] = [];
    }
  }

  public emit<T>(eventName: EventBusNameType, params?: T) {
    if (this.events[eventName]) {
      this.events[eventName].forEach((callback) => {
        callback(params);
      });
    }
  }

  public once<T>(eventName: EventBusNameType, callback: EventBusCallbackType<T>) {
    const handler = (params: T) => {
      callback(params);
      this.off(eventName, callback);
    };

    if (this.events[eventName]) {
      this.events[eventName].push(handler);
    } else {
      this.events[eventName] = [handler];
    }
  }
}

const EventBusUtils = new EventBusGenerator();

export default EventBusUtils;
