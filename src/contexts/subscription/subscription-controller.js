import { BehaviorSubject } from "rxjs";

export class SubscriptionController {
  constructor() {
    this.subscriptors = {};

    // WARNING: This subject can target multiple renders,
    // if needed we can make a custom subject with batched updates
    this.$onStatusChange = new BehaviorSubject({});
  }

  /**
   * Subscribes a children from the context
   */
  register(id) {
    console.log("registered", id);

    this.subscriptors[id] = (this.subscriptors[id] || 0) + 1;

    return () => {
      console.log("unregistered", id);

      this.subscriptors[id] = this.subscriptors[id] - 1;
    };
  }

  getStatuses() {
    console.log("gettings statuses for", this.subscriptors);

    // call service w/ subscriptors
    this.$onStatusChange.next({
      "Version/1": {
        displayName: "Approved",
        code: "Apr"
      },
      "Version/3": {
        displayName: "X",
        code: "x"
      }
    });
  }
}
