import { expect } from "chai";
import { Item, GildedRose } from "@/gilded-rose";

describe("Conjured", () => {
  it("should decrease quality by 2 for a sellin", () => {
    const gildedRose = new GildedRose([new Item("Conjured", 1, 2)]);
    const items = gildedRose.updateQuality();
    const item = items[0];
    expect(item.quality).to.equal(0);
    expect(item.sellIn).to.equal(0);
  });

  it("should decrease quality 4x as fast past sellin days", () => {
    const gildedRose = new GildedRose([new Item("Conjured", 0, 4)]);
    const items = gildedRose.updateQuality();
    const item = items[0];
    expect(item.quality).to.equal(0);
    expect(item.sellIn).to.equal(-1);
  });

  it("quality should not go below 0", () => {
    const gildedRose = new GildedRose([new Item("Conjured", 0, 1)]);
    const items = gildedRose.updateQuality();
    const item = items[0];
    expect(item.quality).to.equal(0);
    expect(item.sellIn).to.equal(-1);
  });
});
