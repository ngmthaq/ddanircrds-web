export type EventBusCallbackType<T> = (params: T) => void;

export type EventBusNameType = "changeTheme";

/**
 * EventBus configurations
 */
export class EventBusGenerator {
  private events: Record<string, EventBusCallbackType<any>[]> = {};

  /**
   * Add event listener
   *
   * @param eventName
   * @param callback
   */
  public on<T>(eventName: EventBusNameType, callback: EventBusCallbackType<T>) {
    if (this.events[eventName]) {
      this.events[eventName].push(callback);
    } else {
      this.events[eventName] = [callback];
    }
  }

  /**
   * Remove event listener
   *
   * @param eventName
   * @param callback
   */
  public off<T>(eventName: EventBusNameType, callback: EventBusCallbackType<T>) {
    if (this.events[eventName]) {
      this.events[eventName] = this.events[eventName].filter((cb) => cb !== callback);
    } else {
      this.events[eventName] = [];
    }
  }

  /**
   * Dispatch event
   *
   * @param eventName
   * @param params
   */
  public emit<T>(eventName: EventBusNameType, params?: T) {
    if (this.events[eventName]) {
      this.events[eventName].forEach((callback) => {
        callback(params);
      });
    }
  }

  /**
   * Add event listener for one time
   *
   * @param eventName
   * @param callback
   */
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

export const EventBus = new EventBusGenerator();
