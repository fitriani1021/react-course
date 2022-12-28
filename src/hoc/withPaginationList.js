import React from "react";
import {Button} from "react-bootstrap";
import {StyledContainer, EmptyState, Pagination} from "../components";

export default (ListComponent, opts) => {
    return (props) => {
        const { listData, label, targetLabel } = opts;
        const [data, setData] = React.useState(listData);
        const [currentPage, setCurrentPage] = React.useState(1);
        const [recordsPerPage] = React.useState(3);

        const indexOfLastRecord = currentPage * recordsPerPage;
        const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
        const currentRecords = data?.data?.slice(indexOfFirstRecord, indexOfLastRecord);
        const totalPage = Math.ceil(data?.data?.length / recordsPerPage);

        return (
            <>
                <header className="App-header">
                    <h1>{label} List</h1>
                </header>
                <StyledContainer>
                    <Button variant="outline-success" onClick={() => props.onNavigate(opts.navAdd)}>Add {label}</Button>
                    <Button variant="outline-success" onClick={() => props.onNavigate(opts.targetNavAdd)}>Add {targetLabel}</Button>
                    {currentRecords?.length > 0 ? (
                        <ListComponent data={currentRecords} />
                    ): <EmptyState text={`Data ${label} Kosong...`} />}
                </StyledContainer>
                <Pagination
                    totalPage={totalPage}
                    onChangeCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                />
            </>
        )
    }
}
