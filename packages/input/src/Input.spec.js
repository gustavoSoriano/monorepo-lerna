import React from "react";

console.log(React);

import "jest-styled-components";
import renderer from "react-test-renderer";
import Input from "./Input";

describe("Input", () => {
    test("renders correctly", () => {
        const tree = renderer
            .create(<Input placeholder="user@gmail.com" />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
