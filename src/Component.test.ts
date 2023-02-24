import { render } from "@testing-library/svelte";

import Comp from "./Component.svelte";

it("gets context", () => {
  render(Comp, { context: new Map([["foo", "bar"]]) });
});
