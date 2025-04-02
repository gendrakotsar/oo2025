import { kasPositiivne } from "../f1";

test("positiivne", () => {
    expect(kasPositiivne(3)).toBe(true);
    expect(kasPositiivne(0)).toBe(false);
    expect(kasPositiivne(-3)).toBe(false);
}
);

// npx jest __tests__/set2.ts