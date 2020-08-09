import React from "react";
import renderer from "react-test-renderer";
import Header from "../header";

describe('Header component test', () => {
  it('Render Header', () => {
    const tree = renderer.create(<Header siteTitle="Cross Browser header" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});