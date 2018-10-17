import React, { Component } from "react";
import InternshipData from "../../../database/InternshipData.json";
import "./style.css";
class InternshipItem extends Component {
  render() {
    //console.log(`this is item ${this.props.internship_title}`);
    return (
      <div className="card-item">
        <div className="card-item-info">
          <h1 className="card-title">{this.props.title}</h1>
          <h2 className="card-category">{this.props.category}</h2>
          <h2 className="card-organisation">{this.props.organisation_name}</h2>
          <p className="card-description">
            {this.props.organisation_description}
          </p>
        </div>
      </div>
    );
  }
}

class InternshipsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      InternshipData,
      nextId: 4
    };
  }

  render() {
    JSON.stringify(this.state.InternshipData);
    return (
      <div className="card-list-container">
        <div className="card-list">
          {this.state.InternshipData.map(internship => {
            return (
              <InternshipItem
                title={internship.internship_title}
                id={internship.id}
                key={internship.id}
                category={internship.internship_category}
                organisation_name={internship.organisation_name}
                organisation_description={internship.organisation_description}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default InternshipsList;
