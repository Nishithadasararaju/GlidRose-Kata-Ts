import { expect } from "chai";
import { Item, GildedRose } from "@/gilded-rose";

describe("Gilded Rose", () => {
  it("should add new item", () => {
    const gildedRose = new GildedRose([new Item("product", 0, 0)]);
    const added = gildedRose.items[0];
    expect(added.name).to.equal("product");
    expect(added.quality).to.equal(0);
    expect(added.sellIn).to.equal(0);
  });
});
