import React from "react";

import { storiesOf } from "@storybook/react";
import InternshipsList from "./Base/InternshipsList";

storiesOf("Pages", module).add("Internships Page Horizental", () => (
  <InternshipsList />
));
