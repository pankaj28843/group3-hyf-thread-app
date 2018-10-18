import React, { Component } from "react";

class InternshipCard extends Component {
  render() {
    //console.log(`this is item ${this.props.internship_title}`);
    return (
      <div className="internship-item">
        <div className="internship-item-info">
          <img src={this.props.internship_theme_image} alt="" />
          <h1 className="internship-title">{this.props.internship_title}</h1>
          <h2 className="internship-category">
            {this.props.internship_category}
          </h2>
          <h2 className="internship-organisation">
            {this.props.organisation_name}
          </h2>
          <p className="internship-description">
            {this.props.internship_description}
          </p>
          <p className="organisation-description">
            {this.props.organisation_description}
          </p>
          <p className="application-requirements">
            {this.props.application_requirements}
          </p>
          <p className="internship-availabiltiy-schedule">
            {this.props.internship_availabiltiy_schedule}
          </p>
          <p className="internship-add-date">
            {this.props.internship_add_date}
          </p>
          <p className="closing-date">{this.props.closing_date}</p>
          <p className="internship_deadline">
            {this.props.internship_deadline}
          </p>
          <p className="contact_person">{this.props.contact_person}</p>
          <p className="phone_contact">{this.props.phone_contact}</p>
          <p className="email_contact">{this.props.email_contact}</p>
          <p className="organisation_address">
            {this.props.organisation_address}
          </p>
          <p className="organisation_website">
            {this.props.organisation_website}
          </p>
        </div>
      </div>
    );
  }
}

export default InternshipCard;
