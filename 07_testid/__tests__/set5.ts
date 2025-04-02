import { TextAnalyser } from "../class2";

test("count 'a' occurrences", () => {
    expect(new TextAnalyser ("Apples and bananas").countLetterA()).toBe(4);
}
)

test("count vowels", () => {
    expect(new TextAnalyser ("Apples and bananas").countVowels()).toBe(5);
}
);