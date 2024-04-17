import type { Maybe, Nullable } from "ts-wiz";

interface PriceFormatOptions {
  unit?: Nullable<string>;
  isNegative?: boolean;
}

type SeparateThousandsType = Maybe<string | number>;
export default class PriceHelper {
  static format(
    price: SeparateThousandsType,
    options: PriceFormatOptions = {} as PriceFormatOptions
  ) {
    let { unit = "تومان" } = options || {};

    const separatedPrice = this.separateThousands(price);
    if (unit) unit = ` ${unit}`;
    else unit = "";

    return `${separatedPrice}${options.isNegative ? " - " : ""}${unit}`;
  }

  static separateThousands(price: SeparateThousandsType) {
    return String(price || 0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}
