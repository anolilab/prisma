import { z } from "zod";

import AbstractDto from "./abstract-dto";

export const zCurrencyDto = z.string().length(3);

export type CurrencyDtoValue = z.infer<typeof zCurrencyDto>;

export class CurrencyDto extends AbstractDto {
    constructor(public value: CurrencyDtoValue) {
        super();

        zCurrencyDto.parse(value);

        Object.freeze(this);
    }

    static nullable(value: CurrencyDtoValue | null) {
        return value === null ? null : new CurrencyDto(value);
    }
}