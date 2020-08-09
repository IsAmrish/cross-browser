import React from "react";
import renderer from "react-test-renderer";
import PropertyCard from "../property-card";

describe('ListOfPropertyCard component test', () => {
  it('Render ListOfPropertyCard', () => {
    const data = {
      "property-head": {
        "title": "abc property",
        "name": "abc"
      },
      "property-body": {
        "code": "selector {\n  -webkit-abc: hidden; /* Safari */\n  abc: hidden;\n}"
      }
    };
    const tree = renderer.create(<PropertyCard propertyHead={data["property-head"]} propertyBody={data["property-body"]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});