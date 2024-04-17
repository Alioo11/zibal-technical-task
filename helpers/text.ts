import {
  englishToPersianDigitMap,
  persianToEnglishDigitMap,
} from "@/constants/digits";

export default class textHelper {
  static toPersianDigits(str: string) {
    return str.replace(/[0-9]/g, (match) => englishToPersianDigitMap[match]);
  }

  static toEnglishDigits(str: string) {
    return str.replace(/[۰-۹]/g, (match) => persianToEnglishDigitMap[match]);
  }
}
