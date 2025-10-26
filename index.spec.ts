import snorun, { $ } from "./index";

it("echo", async () => {
  expect(
    ((await snorun("echo asdf")) && (await snorun("echo succ"))) || (await snorun("echo fail")),
  ).toBe(true);
});


it("stdout", async () => {
  expect(await snorun("echo asdf").stdout).toBe("asdf");
});

it("tsa-composer echo", async () => {
  expect(
    ((await snorun`echo asdf && echo succ || echo fail`)),
  ).toBe(true);
});

it("tsa-composer stdout", async () => {
  expect((await snorun`echo asdf`.stdout)).toBe("asdf");
});

it('works with $ alias', async () => {
  expect(
    ((await $`echo asdf && echo succ || echo fail`)),
  ).toBe(true);
});
