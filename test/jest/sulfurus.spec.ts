import { expect } from "chai";
import { Item, GildedRose } from "@/gilded-rose";

describe("Sulfuras", () => {
  it("should keep quality equal to 80", () => {
    const gildedRose = new GildedRose([
      new Item("Sulfuras, Hand of Ragnaros", 1, 1),
    ]);
    const items = gildedRose.updateQuality();
    const item = items[0];
    expect(item.quality).to.equal(80);
    expect(item.sellIn).to.equal(1);
  });
});
