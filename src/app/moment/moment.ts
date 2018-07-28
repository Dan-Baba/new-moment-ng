import { Injectable } from '@angular/core';
// export const MOMENT_TOKEN = new InjectionToken('Moment');
@Injectable()
export class MomentService {
    public moment: Moment;
    constructor() {
        this.moment = require('moment');
    }
}
export interface Moment {
    (date?: String, format?: String): MomentObject;
    local(): String;
}

export interface MomentObject {
    fromNow(): String;
    subtract(amount: number, time: String): MomentObject;
    calendar(): String;
}
