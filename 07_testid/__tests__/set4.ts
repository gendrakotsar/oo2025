import { IDcode } from "../class1";

test("gender", ()=> {
    expect(new IDcode("37605030299").gender()).toBe("M");
    expect(new IDcode("47605030299").gender()).toBe("N");
    expect(new IDcode("57605030299").gender()).toBe("M");
    expect(new IDcode("67605030299").gender()).toBe("N");
}
)

test("birthyear", ()=> {
    expect(new IDcode("37605030299").getBirthYear()).toBe(1976);
    expect(new IDcode("47605030299").getBirthYear()).toBe(1976);
    expect(new IDcode("50105030299").getBirthYear()).toBe(2001);
    expect(new IDcode("60405030299").getBirthYear()).toBe(2004);
})
