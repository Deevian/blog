import React, {Fragment} from "react";

export default ({ year }) => (
    <Fragment>
        <div className="divider">
            <span>{year}</span>
            <hr/>
        </div>
    </Fragment>
);
