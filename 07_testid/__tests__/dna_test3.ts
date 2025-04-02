import { findRepeats } from "../dna3";

test("Finds repeated patterns of given length", () => {
    expect(findRepeats("ATCATCATC", 3)).toEqual(["ATC", "TCA", "CAT"]);
    expect(findRepeats("AAAAAA", 2)).toEqual(["AA"]);
});

