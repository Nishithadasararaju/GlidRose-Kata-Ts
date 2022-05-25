import { decreaseQuality, increaseQuality } from "./utils";

export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach((item: Item) => {
      switch (item.name) {
        case "Sulfuras, Hand of Ragnaros": {
          item.quality = 80; // Quality for Sulfuras will never decrease and will always be equal to 80
          break;
        }
        case "Aged Brie": {
          item.quality = increaseQuality(
            item.quality,
            item.sellIn <= 0 ? 2 : 1
          ); // Quality incresease by 2 when last date has passed or 1 when there is time left
          item.sellIn--;
          break;
        }

        case "Backstage passes to a TAFKAL80ETC concert": {
          let qualityIncrement = 1;
          if (item.sellIn <= 10) {
            qualityIncrement = 2; // increase quality by 2 when no of days are between 10-6
          }
          if (item.sellIn <= 5) {
            qualityIncrement = 3; // increase quality by 3 when no of days are between 3-1
          }

          item.quality =
            item.sellIn === 0
              ? 0
              : increaseQuality(item.quality, qualityIncrement);
          item.sellIn--;
          break;
        }
        case "Conjured": {
          item.quality = decreaseQuality(
            item.quality,
            item.sellIn <= 0 ? 4 : 2
          ); // decrease quality as twice a normal item
          item.sellIn--;
          break;
        }

        default: {
          item.quality = decreaseQuality(
            item.quality,
            item.sellIn <= 0 ? 2 : 1
          );
          item.sellIn--;
          break;
        }
      }
    });

    return this.items;
  }
}
