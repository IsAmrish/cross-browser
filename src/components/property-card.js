import React from "react"

const PropertyCard = ({ propertyHead, propertyBody }) => {
  return (
    <div style={{ border: '1px solid grey', padding: "30px" }}>
      <div style={{ background: "lightblue", padding: "16px", marginBottom: "30px" }}>
        <h2 style={{ margin: "0px" }}>{propertyHead.title}</h2>
      </div>
      <div style={{ padding: "16px", backgroundColor: "#c2ddf0" }}>
        <h3>How to use it</h3>
        <code>
          <pre style={{ backgroundColor: "#e4ecf2" }}>
            {`
${propertyBody.code}
`}
          </pre>
        </code>
      </div>
    </div>
  )
}

export default PropertyCard;