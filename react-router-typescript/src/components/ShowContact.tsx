import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

type Props = {};

const ShowContact = (props: Props) => {
  const params = useParams();
  const navigate = useNavigate();
  let location = useLocation();

  if (params.id === "3") navigate("/nepostojecaRuta");

  return (
    <h1
      style={location?.state?.boja && { backgroundColor: location.state.boja }}
    >
      Trenutno pregledavate kontakt broj {params.id}
    </h1>
  );
};

export default ShowContact;
