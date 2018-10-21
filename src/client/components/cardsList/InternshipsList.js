import React, { Component } from "react";
import InternshipCard from "../cards/InternshipCard";
import Header from "../Header";
// import InternshipData from "../../database/InternshipData.json";

class InternshipsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      internshipsData: []
    };
  }

  componentDidMount = () => {
    this.fetchData();
  };

  fetchData() {
    fetch(
      "https://raw.githubusercontent.com/paredesrichard/commandline/master/internships.json"
    )
      .then(response => response.json())
      .then(parsedJSON =>
        parsedJSON.map(internship => ({
          id: `${internship.id}`,
          internship_title: `${internship.internship_title}`,
          internship_category: `${internship.internship_category}`,
          department: `${internship.department}`,
          internship_description: `${internship.internship_description}`,
          organisation_description: `${internship.organisation_description}`,
          internship_agreement: `${internship.internship_agreement}`,
          internship_requirements: `${internship.internship_requirements}`,
          application_requirements: `${internship.application_requirements}`,
          internship_availabiltiy_schedule: `${
            internship.internship_availabiltiy_schedule
          }`,
          travel_expenses: `${internship.travel_expenses}`,
          location: `${internship.location}`,
          internship_add_date: `${internship.internship_add_date}`,
          closing_date: `${internship.closing_date}`,
          internship_deadline: `${internship.internship_deadline}`,
          contact_person: `${internship.contact_person}`,
          phone_contact: `${internship.phone_contact}`,
          email_contact: `${internship.email_contact}`,
          organisation_address: `${internship.organisation_address}`,
          organisation_website: `${internship.organisation_website}`,
          internship_theme_image: `${internship.internship_theme_image}`,
          active: `${internship.active}`
        }))
      )
      .then(internshipsData =>
        this.setState({
          internshipsData,
          isLoading: false
        })
      )
      .catch(error => console.log(error));
  }

  render() {
    // JSON.stringify(this.state.InternshipData);
    const { isLoading, internshipsData } = this.state;
    return (
      <>
        <Header />
        <section
          className={`cards-list-container ${isLoading ? "is-loading" : ""}`}
        >
          <div className="cards-list">
            {!isLoading && internshipsData.length > 0
              ? internshipsData.map(internship => {
                  const {
                    id,
                    internship_title,
                    internship_category,
                    organisation_name,
                    department,
                    internship_description,
                    organisation_description,
                    internship_agreement,
                    internship_requirements,
                    application_requirements,
                    internship_availabiltiy_schedule,
                    travel_expenses,
                    location,
                    internship_add_date,
                    closing_date,
                    internship_deadline,
                    contact_person,
                    phone_contact,
                    email_contact,
                    organisation_address,
                    organisation_website,
                    internship_theme_image,
                    active
                  } = internship;

                  return (
                    <InternshipCard
                      internship_title={internship_title}
                      id={id}
                      key={id}
                      department={department}
                      internship_category={internship_category}
                      organisation_name={organisation_name}
                      internship_description={internship_description}
                      organisation_description={organisation_description}
                      internship_agreement={internship_agreement}
                      internship_requirements={internship_requirements}
                      application_requirements={application_requirements}
                      internship_availabiltiy_schedule={
                        internship_availabiltiy_schedule
                      }
                      travel_expenses={travel_expenses}
                      location={location}
                      internship_add_date={internship_add_date}
                      closing_date={closing_date}
                      internship_deadline={internship_deadline}
                      contact_person={contact_person}
                      phone_contact={phone_contact}
                      email_contact={email_contact}
                      organisation_address={organisation_address}
                      organisation_website={organisation_website}
                      internship_theme_image={internship_theme_image}
                      active={active}
                    />
                  );
                })
              : null}
          </div>
          <div className="loader">
            <div className="icon" />
          </div>
        </section>
      </>
    );
  }
}

export default InternshipsList;
