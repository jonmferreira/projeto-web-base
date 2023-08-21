import {ColumnBodyOptions} from "primereact/column";
import React from "react";
import {TimeFormatter} from "@/components/formatters/TimeFormatter.tsx";

const TimeTemplate = (
    data: any,
    optionsTable: ColumnBodyOptions,
) => {
    return <TimeFormatter
        datetime={data[optionsTable.field]} />
}

export default TimeTemplate;
