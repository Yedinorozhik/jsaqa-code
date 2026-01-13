const sorting = require("../../app");

describe("Books names test suite", () => {
  test("Books names should be sorted in ascending order", () => {
    const input = [
      "Гарри Поттер",
      "Властелин Колец",
      "Волшебник изумрудного города",
    ];
    const expected = [
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ];
    const output = sorting.sortByName(input);
    expect(output).toEqual(expected);
  });

  test("Should swap two books when order is reversed (executes > branch)", () => {
    const input = ["Гарри Поттер", "Властелин Колец"];
    const expected = ["Властелин Колец", "Гарри Поттер"];
    const output = sorting.sortByName(input);
    expect(output).toEqual(expected);
  });

  test("Should handle equal book names (executes equality branch)", () => {
    const input = ["Властелин Колец", "Властелин Колец"];
    const expected = ["Властелин Колец", "Властелин Колец"];
    const output = sorting.sortByName(input);
    expect(output).toEqual(expected);
  });
});
