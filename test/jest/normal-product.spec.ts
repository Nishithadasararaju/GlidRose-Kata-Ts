import { expect } from "chai";
import { Item, GildedRose } from "@/gilded-rose";

describe("Normal product", () => {

  it("should decrease quality by 1 for every day", () => {
    const gildedRose = new GildedRose([new Item("product", 1, 1)]);
    const items = gildedRose.updateQuality();
    const item = items[0];
    expect(item.quality).to.equal(0);
    expect(item.sellIn).to.equal(0);
  });

  it("should update quality 2x as fast for past sellin days", () => {
    const gildedRose = new GildedRose([new Item("product", 0, 4)]);
    const items = gildedRose.updateQuality();
    const item = items[0];
    expect(item.quality).to.equal(2);
    expect(item.sellIn).to.equal(-1);
  });

  it("quality should never go pass 0", () => {
    const gildedRose = new GildedRose([new Item("product", 0, 1)]);
    const items = gildedRose.updateQuality();
    const item = items[0];
    expect(item.quality).to.equal(0);
    expect(item.sellIn).to.equal(-1);
  });
});
