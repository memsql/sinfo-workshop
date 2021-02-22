import { isValidInput } from "../utils/input";

describe("valid input fn", () => {
    it("returns true for valid email", () => {
        expect(isValidInput("rferro@singlestore.com", "email")).toEqual(true);
    });

    it("returns 'Email is invalid.' for invalid email formats", () => {
        expect(isValidInput("rferro@singlestore", "email")).toEqual("Email is invalid.");
        expect(isValidInput("rferro.singlestore.com", "email")).toEqual("Email is invalid.");
    });

    it("returns true for valid urls", () => {
        expect(isValidInput("singlestore.com", "url")).toEqual(true);
        expect(isValidInput("https://singlestore.com", "url")).toEqual(true);
        expect(isValidInput("rferro.singlestore.com", "url")).toEqual(true);
    });

    it("returns 'Email is invalid.' for invalid urls", () => {
        expect(isValidInput("rferro", "url")).toEqual("Link is invalid.");
        expect(isValidInput("rferro@singlestore.com", "url")).toEqual("Link is invalid.");
    });
});
