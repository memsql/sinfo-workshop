import { isValidInput } from "../utils/input";

describe("fn isValidInput()", () => {
    it("returns true for rferro@singlestore.com", () => {
        expect(isValidInput("rferro@singlestore.com", "email")).toEqual(true);
    });

    it("returns 'Email is invalid.' for rferro@singlestore", () => {
        expect(isValidInput("rferro@singlestore", "email")).toEqual("Email is invalid.");
    });

    it("returns 'Email is invalid.' for rferro.singlestore.com", () => {
        expect(isValidInput("rferro.singlestore.com", "email")).toEqual("Email is invalid.");
    });

    it("returns true for singlestore.com", () => {
        expect(isValidInput("singlestore.com", "url")).toEqual(true);
    });

    it("returns true for https://singlestore.com", () => {
        expect(isValidInput("https://singlestore.com", "url")).toEqual(true);
    });

    it("returns true for rferro.singlestore.com", () => {
        expect(isValidInput("rferro.singlestore.com", "url")).toEqual(true);
    });

    it("returns 'Link is invalid.' for rferro", () => {
        expect(isValidInput("rferro", "url")).toEqual("Link is invalid.");
    });

    it("returns 'Link is invalid.' for rferro@singlestore.com", () => {
        expect(isValidInput("rferro@singlestore.com", "url")).toEqual("Link is invalid.");
    });
});

//📙 Testing Library jest-dom: https://github.com/testing-library/jest-dom
//   Testing with Storybook: https://storybook.js.org/docs/react/workflows/testing-with-storybook
