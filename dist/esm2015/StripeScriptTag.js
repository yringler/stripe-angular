import { Injectable, Inject } from "@angular/core";
import { STRIPE_PUBLISHABLE_KEY, STRIPE_OPTIONS
//, StripeCard, StripeToken
 } from "./StripeTypes";
import * as i0 from "@angular/core";
import * as i1 from "./StripeTypes";
export class StripeScriptTag {
    constructor(key, options) {
        this.src = "https://js.stripe.com/v3/";
        this.load = this.injectIntoHead();
        if (key)
            this.setPublishableKey(key, options);
    }
    promiseStripe() {
        return this.load;
    }
    promiseInstance() {
        return this.promiseStripe()
            .then(stripe => {
            if (!this.StripeInstance) {
                const err = new Error("Stripe PublishableKey NOT SET. Use method StripeScriptTag.setPublishableKey()");
                err["code"] = "STRIPEKEYNOTSET";
                throw err;
                //return Promise.reject( err )
            }
            return this.StripeInstance;
        });
    }
    setPublishableKey(key, options) {
        return this.load.then(() => this.StripeInstance = this.Stripe(key, options));
    }
    injectIntoHead() {
        if (window["Stripe"]) {
            return Promise.resolve(this.Stripe = window["Stripe"]);
        }
        return new Promise((res, rej) => {
            const head = this.getTargetTagDropElement();
            const script = document.createElement("script");
            script.setAttribute("src", this.src);
            script.setAttribute("type", "text/javascript");
            script.addEventListener("load", () => {
                this.Stripe = this.grabStripe();
                res(this.Stripe);
            });
            head.appendChild(script);
        });
    }
    grabStripe() {
        return window["Stripe"];
    }
    getTargetTagDropElement() {
        let elm = document.getElementsByTagName("head");
        if (elm.length)
            return elm[0];
        return document.getElementsByTagName("body")[0];
    }
}
StripeScriptTag.ɵprov = i0.ɵɵdefineInjectable({ factory: function StripeScriptTag_Factory() { return new StripeScriptTag(i0.ɵɵinject(i1.STRIPE_PUBLISHABLE_KEY), i0.ɵɵinject(i1.STRIPE_OPTIONS)); }, token: StripeScriptTag, providedIn: "root" });
StripeScriptTag.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
StripeScriptTag.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [STRIPE_PUBLISHABLE_KEY,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [STRIPE_OPTIONS,] }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RyaXBlU2NyaXB0VGFnLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3NyYy8iLCJzb3VyY2VzIjpbIlN0cmlwZVNjcmlwdFRhZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUVsRCxPQUFPLEVBQzBDLHNCQUFzQixFQUFFLGNBQWM7QUFDckYsMkJBQTJCO0VBQzVCLE1BQU0sZUFBZSxDQUFBOzs7QUFFWSxNQUFNLE9BQU8sZUFBZTtJQU01RCxZQUNrQyxHQUFZLEVBQ3BCLE9BQStCO1FBUHpELFFBQUcsR0FBVSwyQkFBMkIsQ0FBQTtRQVN0QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQTtRQUNqQyxJQUFJLEdBQUc7WUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFBO0lBQy9DLENBQUM7SUFFRCxhQUFhO1FBQ1gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFBO0lBQ2xCLENBQUM7SUFFRCxlQUFlO1FBQ2IsT0FBTyxJQUFJLENBQUMsYUFBYSxFQUFFO2FBQzFCLElBQUksQ0FBQyxNQUFNLENBQUEsRUFBRTtZQUNaLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFO2dCQUN4QixNQUFNLEdBQUcsR0FBRyxJQUFJLEtBQUssQ0FBQywrRUFBK0UsQ0FBQyxDQUFBO2dCQUN0RyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsaUJBQWlCLENBQUE7Z0JBQy9CLE1BQU0sR0FBRyxDQUFBO2dCQUNULDhCQUE4QjthQUMvQjtZQUVELE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQTtRQUM1QixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxpQkFBaUIsQ0FDZixHQUFVLEVBQ1YsT0FBOEI7UUFFOUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBRSxHQUFFLEVBQUUsQ0FDekIsSUFBSSxDQUFDLGNBQWMsR0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FDOUMsQ0FBQTtJQUNILENBQUM7SUFFRCxjQUFjO1FBQ1osSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDcEIsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBUSxDQUFFLENBQUE7U0FDaEU7UUFFRCxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxFQUFFO1lBQzVCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFBO1lBQzNDLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUE7WUFDL0MsTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ3BDLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLGlCQUFpQixDQUFDLENBQUE7WUFFOUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBQyxHQUFFLEVBQUU7Z0JBQ2pDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO2dCQUMvQixHQUFHLENBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFBO1lBQ3BCLENBQUMsQ0FBQyxDQUFBO1lBRUYsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUMxQixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxVQUFVO1FBQ1IsT0FBTyxNQUFNLENBQUMsUUFBUSxDQUFRLENBQUM7SUFDakMsQ0FBQztJQUVELHVCQUF1QjtRQUNyQixJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUE7UUFFL0MsSUFBRyxHQUFHLENBQUMsTUFBTTtZQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBRTNCLE9BQU8sUUFBUSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ2pELENBQUM7Ozs7WUF2RUYsVUFBVSxTQUFDLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBQzs7O3lDQU8zQixNQUFNLFNBQUMsc0JBQXNCOzRDQUM3QixNQUFNLFNBQUMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCJcblxuaW1wb3J0IHtcbiAgU3RyaXBlLCBTdHJpcGVJbnN0YW5jZSwgU3RyaXBlSW5zdGFuY2VPcHRpb25zLCBTVFJJUEVfUFVCTElTSEFCTEVfS0VZLCBTVFJJUEVfT1BUSU9OU1xuICAvLywgU3RyaXBlQ2FyZCwgU3RyaXBlVG9rZW5cbn0gZnJvbSBcIi4vU3RyaXBlVHlwZXNcIlxuXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSkgZXhwb3J0IGNsYXNzIFN0cmlwZVNjcmlwdFRhZ3tcbiAgc3JjOnN0cmluZyA9IFwiaHR0cHM6Ly9qcy5zdHJpcGUuY29tL3YzL1wiXG4gIFN0cmlwZSE6U3RyaXBlLy9zZXQgYXQgcnVudGltZVxuICBTdHJpcGVJbnN0YW5jZSE6U3RyaXBlSW5zdGFuY2VcbiAgbG9hZDpQcm9taXNlPGFueT5cblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KFNUUklQRV9QVUJMSVNIQUJMRV9LRVkpIGtleT86IHN0cmluZyxcbiAgICBASW5qZWN0KFNUUklQRV9PUFRJT05TKSBvcHRpb25zPzogU3RyaXBlSW5zdGFuY2VPcHRpb25zXG4gICl7XG4gICAgdGhpcy5sb2FkID0gdGhpcy5pbmplY3RJbnRvSGVhZCgpXG4gICAgaWYgKGtleSkgdGhpcy5zZXRQdWJsaXNoYWJsZUtleShrZXksIG9wdGlvbnMpXG4gIH1cblxuICBwcm9taXNlU3RyaXBlKCk6UHJvbWlzZTxTdHJpcGU+e1xuICAgIHJldHVybiB0aGlzLmxvYWRcbiAgfVxuXG4gIHByb21pc2VJbnN0YW5jZSgpOlByb21pc2U8U3RyaXBlSW5zdGFuY2U+e1xuICAgIHJldHVybiB0aGlzLnByb21pc2VTdHJpcGUoKVxuICAgIC50aGVuKHN0cmlwZT0+e1xuICAgICAgaWYoICF0aGlzLlN0cmlwZUluc3RhbmNlICl7XG4gICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcihcIlN0cmlwZSBQdWJsaXNoYWJsZUtleSBOT1QgU0VULiBVc2UgbWV0aG9kIFN0cmlwZVNjcmlwdFRhZy5zZXRQdWJsaXNoYWJsZUtleSgpXCIpXG4gICAgICAgIGVycltcImNvZGVcIl0gPSBcIlNUUklQRUtFWU5PVFNFVFwiXG4gICAgICAgIHRocm93IGVyclxuICAgICAgICAvL3JldHVybiBQcm9taXNlLnJlamVjdCggZXJyIClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuU3RyaXBlSW5zdGFuY2VcbiAgICB9KVxuICB9XG5cbiAgc2V0UHVibGlzaGFibGVLZXkoXG4gICAga2V5OnN0cmluZyxcbiAgICBvcHRpb25zPzpTdHJpcGVJbnN0YW5jZU9wdGlvbnNcbiAgKTpQcm9taXNlPFN0cmlwZUluc3RhbmNlPntcbiAgICByZXR1cm4gdGhpcy5sb2FkLnRoZW4oICgpPT5cbiAgICAgIHRoaXMuU3RyaXBlSW5zdGFuY2U9dGhpcy5TdHJpcGUoa2V5LCBvcHRpb25zKVxuICAgIClcbiAgfVxuXG4gIGluamVjdEludG9IZWFkKCk6UHJvbWlzZTxTdHJpcGU+e1xuICAgIGlmKCB3aW5kb3dbXCJTdHJpcGVcIl0gKXtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoIHRoaXMuU3RyaXBlID0gd2luZG93W1wiU3RyaXBlXCJdIGFzIGFueSApXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMscmVqKT0+e1xuICAgICAgY29uc3QgaGVhZCA9IHRoaXMuZ2V0VGFyZ2V0VGFnRHJvcEVsZW1lbnQoKVxuICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKVxuICAgICAgc2NyaXB0LnNldEF0dHJpYnV0ZShcInNyY1wiLCB0aGlzLnNyYylcbiAgICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dC9qYXZhc2NyaXB0XCIpXG5cbiAgICAgIHNjcmlwdC5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCgpPT57XG4gICAgICAgIHRoaXMuU3RyaXBlID0gdGhpcy5ncmFiU3RyaXBlKClcbiAgICAgICAgcmVzKCB0aGlzLlN0cmlwZSApXG4gICAgICB9KVxuXG4gICAgICBoZWFkLmFwcGVuZENoaWxkKHNjcmlwdClcbiAgICB9KVxuICB9XG5cbiAgZ3JhYlN0cmlwZSgpOiBTdHJpcGUge1xuICAgIHJldHVybiB3aW5kb3dbXCJTdHJpcGVcIl0gYXMgYW55O1xuICB9XG5cbiAgZ2V0VGFyZ2V0VGFnRHJvcEVsZW1lbnQoKXtcbiAgICBsZXQgZWxtID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpXG5cbiAgICBpZihlbG0ubGVuZ3RoKXJldHVybiBlbG1bMF1cblxuICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIilbMF1cbiAgfVxufVxuIl19