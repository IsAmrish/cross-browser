import React from "react"
import PropertyCard from "./property-card"
import * as data from "../../data/property.json"
const ListOfPropertyCard = () => {
  return (
    <React.Fragment>
      {data.properties.map(property => {
        return (
          <div style={{ marginBottom: '20px' }} key={property["property-head"].name}>
            <PropertyCard propertyHead={property["property-head"]} propertyBody={property["property-body"]} />
          </div>
        )
      })}
    </React.Fragment>
  )
}

export default ListOfPropertyCard;