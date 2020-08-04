import React from "react"
import PropertyCard from "./property-card"
import * as data from "../../data/property.json"
const ListOfPropertyCard = () => {
    return (
        <React.Fragment>
            {data.properties.map(property => {
                return (<PropertyCard propertyHead={property["property-head"]} propertyBody={property["property-body"]} />)
            })}
        </React.Fragment>
    )
}

export default ListOfPropertyCard;