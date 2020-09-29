import React from "react";

export const Problems = props => {
	console.log("######################solo de props-->>", props);
	if (props.problemas === undefined) {
		return <td />;
	} else {
		return <td>pepitorf</td>;
	}
};
