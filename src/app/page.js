import React from "react";
import PropTypes from "prop-types";
import { Button } from "@/components/ui/button";
import { MacbookScroll } from "@/components/ui/macbook-scroll";

const page = (props) => {
  return (
    <div>
      <MacbookScroll />
    </div>
  );
};

page.propTypes = {};

export default page;
