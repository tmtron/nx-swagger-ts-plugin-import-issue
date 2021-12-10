import {Temporal} from "@js-temporal/polyfill";
import Instant = Temporal.Instant;

export class MyDto {
    id!: string;
    count!: number;
    dateTime!: Instant;
}
