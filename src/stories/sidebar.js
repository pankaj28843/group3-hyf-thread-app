import React from "react";

import { storiesOf } from "@storybook/react";

import SideBar from "../components/sidebar/sidebar";
const myText=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur illo quo tempora explicabo omnis mollitia ipsam, pariatur totam nam! Quibusdam error unde mollitia optio quo porro atque, obcaecati ad?Necessitatibus earum inventore mollitia doloremque, perferendisquidem, illum distinctio est quos rem fugit expedita unde amet nihil velit perspiciatis. Non, nihil?";

storiesOf("SideBar", module).add("base", () => (
  <SideBar text={myText}/>
));