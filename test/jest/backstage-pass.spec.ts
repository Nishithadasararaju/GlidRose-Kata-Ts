import { expect } from "chai";
import { Item, GildedRose } from "@/gilded-rose";

describe("Backstage Pass", () => {
  it("should increase quality of by 1 when more than 10 days remaining", () => {
    const gildedRose = new GildedRose([
      new Item("Backstage passes to a TAFKAL80ETC concert", 11, 1),
    ]);
    const items = gildedRose.updateQuality();
    const item = items[0];
    expect(item.quality).to.equal(2);
    expect(item.sellIn).to.equal(10);
  });
  it("should increase quality of backstage passes by 2 when more than 5 days remaining", () => {
    const gildedRose = new GildedRose([
      new Item("Backstage passes to a TAFKAL80ETC concert", 6, 1),
    ]);
    const items = gildedRose.updateQuality();
    const item = items[0];
    expect(item.quality).to.equal(3);
    expect(item.sellIn).to.equal(5);
  });
  it("should increase quality of backstage passes by 3 when less than 5 days remaining", () => {
    const gildedRose = new GildedRose([
      new Item("Backstage passes to a TAFKAL80ETC concert", 3, 1),
    ]);
    const items = gildedRose.updateQuality();
    const item = items[0];
    expect(item.quality).to.equal(4);
    expect(item.sellIn).to.equal(2);
  });
  it("should set quality of backstage passes to 0 after concert", () => {
    const gildedRose = new GildedRose([
      new Item("Backstage passes to a TAFKAL80ETC concert", 0, 10),
    ]);
    const items = gildedRose.updateQuality();
    const item = items[0];
    expect(item.quality).to.equal(0);
    expect(item.sellIn).to.equal(-1);
  });
});
