import { countBases } from "../dna1";

test("Counts A, T, C ja G", () => {
    expect(countBases("AATCG")).toEqual({ A: 2, T: 1, C: 1, G: 1 });
    expect(countBases("GGGG")).toEqual({ A: 0, T: 0, C: 0, G: 4 });
});

/* counts the occurrences of each nucleotide (A, T, C, G) in a DNA sequence */
/* adenine (A), thymine (T), cytosine (C), and guanine (G) */