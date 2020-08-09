import React from "react";
import renderer from "react-test-renderer";
import ListOfPropertyCard from "../list-of-property-card";

describe('ListOfPropertyCard component test', () => {
  it('Render ListOfPropertyCard', () => {
    const tree = renderer.create(<ListOfPropertyCard />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});