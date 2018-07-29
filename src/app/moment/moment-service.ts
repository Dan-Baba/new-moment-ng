import { Injectable } from '@angular/core';

@Injectable()
export class MomentService {
    public moment: Moment;
    constructor() {
        this.moment = require('moment');
    }
}

export interface Moment {
    (dateTime?: String, format?: String | String[]): MomentObject;
    (dateObject: Date): MomentObject;
    (dateArray: number[]): MomentObject; // tslint:disable-line
    local(): String;
    unix(unixTime: number): MomentObject;
    // TODO: Finish UTC signature.
    utc(dateTime?: number | String);
    updateLocale(): void;
}

export interface MomentObject {
    calendar(): String;
    format(localeFormat: String, localeSettings: LocaleSettings): String;
    fromNow(): String;
    isValid(): Boolean;
    subtract(amount: number, time: String): MomentObject;
    utc(): MomentObject;
}

export interface LocaleSettings {
    test(): String;
}
