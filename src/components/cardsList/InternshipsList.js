import React, { Component } from "react";
import InternshipCard from "../cards/InternshipCard";
import Header from "../Header";
// import InternshipData from "../../database/InternshipData.json";

class InternshipsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: []
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
      .then(parsedJSON => console.log("thing" + parsedJSON.results))
      .catch(error => console.log(error));
  }

  render() {
    JSON.stringify(this.state.InternshipData);
    return (
      <>
        <Header />
        <div className="cards-list-container">
          <div className="cards-list">
            <h1>intefasfa</h1>
            {/* {this.state.InternshipData.map(internship => {
            return (
              <InternshipCard
                title={internship.internship_title}
                id={internship.id}
                key={internship.id}
                category={internship.internship_category}
                organisation_name={internship.organisation_name}
                organisation_description={internship.organisation_description}
              />
            );
          })} */}
          </div>
          <div className="loader">
            <div className="icon" />
          </div>
        </div>
      </>
    );
  }
}

export default InternshipsList;
