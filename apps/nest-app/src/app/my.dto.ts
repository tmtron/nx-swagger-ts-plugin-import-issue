import {Temporal} from "@js-temporal/polyfill";

export class MyDto {
    id: string;
    count: number;
    dateTime = Temporal.Now.instant().toString()
}
