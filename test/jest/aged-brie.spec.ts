import { expect } from "chai";
import { Item, GildedRose } from "@/gilded-rose";

describe("Aged Brie", () => {
  it("quality of Aged Brie goes up by 1", () => {
    const gildedRose = new GildedRose([new Item("Aged Brie", 1, 1)]);
    const items = gildedRose.updateQuality();
    const item = items[0];
    expect(item.quality).to.equal(2);
    expect(item.sellIn).to.equal(0);
  });

  it("should have max quality of 50", () => {
    const gildedRose = new GildedRose([new Item("Aged Brie", 1, 50)]);
    const items = gildedRose.updateQuality();
    const item = items[0];
    expect(item.quality).to.equal(50);
    expect(item.sellIn).to.equal(0);
  });
  it("should increase quality 2x id pass sellin", () => {
    const gildedRose = new GildedRose([new Item("Aged Brie", -10, 10)]);
    const items = gildedRose.updateQuality();
    const item = items[0];
    expect(item.quality).to.equal(12);
    expect(item.sellIn).to.equal(-11);
  });
});
