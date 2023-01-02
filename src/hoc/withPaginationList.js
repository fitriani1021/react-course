import React from "react";
import {Button} from "react-bootstrap";
import {StyledContainer, EmptyState, Pagination} from "../components";
import {useNavigate} from "react-router-dom";

export default (ListComponent, opts) => {
    return (props) => {
        const onNavigate = useNavigate();
        const { label, targetLabel } = opts;
        const [currentPage, setCurrentPage] = React.useState(1);
        const [recordsPerPage] = React.useState(3);

        const indexOfLastRecord = currentPage * recordsPerPage;
        const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
        const currentRecords = props.listData?.slice(indexOfFirstRecord,indexOfLastRecord)
        const totalPage = Math.ceil(props.listData?.length / recordsPerPage);

        return (
            <>
                <StyledContainer>
                    <Button variant="outline-success" onClick={() => onNavigate(opts.navAdd)}>Add {label}</Button>
                    {currentRecords?.length > 0 ? (
                        <>
                        <ListComponent {...props} data={currentRecords} />

                        <Pagination
                            totalPage={totalPage}
                            onChangeCurrentPage={setCurrentPage}
                            currentPage={currentPage}
                        />
                        </>) : <EmptyState text={`Data ${label} Kosong...`} />}
                </StyledContainer>
            </>
        )
    }
}
