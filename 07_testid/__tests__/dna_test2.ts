import { containsSequence } from "../dna2";

test("Detects a certain sequence inside the DNA", () => {
    expect(containsSequence("ATCGTTCGGA", "TTCGGA")).toBe(true);
    expect(containsSequence("ATCGATCG", "GGGG")).toBe(false);
});

