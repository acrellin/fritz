import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import * as alertsActions from "../ducks/alerts";

const AlertsSearchButton = ({ objID, ra, dec, radius = 3 }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(alertsActions.fetchAlerts({ object_id: objID, ra, dec, radius }));
  };

  return (
    <Link to="/alerts" onClick={handleClick}>
      <Button variant="contained">
        Search Nearby Alerts
      </Button>
    </Link>
  );
};

AlertsSearchButton.propTypes = {
  objID: PropTypes.string.isRequired,
  ra: PropTypes.number.isRequired,
  dec: PropTypes.number.isRequired,
  radius: PropTypes.number,
};
AlertsSearchButton.defaultProps = {
  radius: 3,
};

export default AlertsSearchButton;
