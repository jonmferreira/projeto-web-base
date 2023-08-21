import {ColumnBodyOptions} from "primereact/column";
import React from "react";
import DataFormatter from "@/components/formatters/DataFormatter.tsx";

const DatetimeTemplate = (
    data: any,
    optionsTable: ColumnBodyOptions,
) => {
    return <DataFormatter
        date={data[optionsTable.field]} />
}

export default DatetimeTemplate;
