import { isBalanced } from "../dna4";

test("Checks if the number of A and T, and C and G bases are approximately equal", () => {
    expect(isBalanced("AATTCCGG")).toBe(true);
    expect(isBalanced("AAAACCCGGG")).toBe(false);
});
