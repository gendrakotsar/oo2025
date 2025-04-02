import { averageSpeed } from "../f2";

test("average speed", ()=>{
    expect(averageSpeed(30, 60)).toBe(40);
    expect(averageSpeed(25, 25)).toBe(25);
}
);

// npx jest __tests__/set3.ts