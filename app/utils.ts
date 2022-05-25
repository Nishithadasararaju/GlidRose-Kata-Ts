import { Item } from "./gilded-rose";

const QUALITY_MAX = 50
const QUALITY_MIN = 0

export const increaseQuality = (val: number, count: number = 1): number => {
    if(val === QUALITY_MAX) {
        return val;
    }
    return val + count;
}

export const decreaseQuality = (val: number, count: number = 1): number => {
    if(val === QUALITY_MIN) {
        return val;
    }
    const res = val - count;
    return  res < 0 ? 0 : res;
}
