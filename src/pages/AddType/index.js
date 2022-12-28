import React from "react";
import {
    Form, Button, ButtonGroup
} from "react-bootstrap";
import {FormInput, StyledContainer} from "../../components";
import {StyledTitle} from "../AddCourse/styles";
import useAddType from "./useAddType";

const AddType = ({onNavigate, setTypes}) => {
    const {getter, setter} = useAddType();
    const handleSubmit = () => {
        setTypes((prevState) => {
            const newTypes = {...prevState};
            const payload = {
                ...getter,
                courseTypeId: Math.random().toString()
            }
            newTypes?.data?.push(payload);
            return newTypes;
        })
        onNavigate("/course-type");
    };

    return (
        <>
            <header className="App-header">
                <StyledTitle>Add Type</StyledTitle>
            </header>
            <StyledContainer>
                <Form>
                    <FormInput
                        label="Course Type"
                        type="text"
                        value={getter["typeName"]}
                        onChange={setter["typeName"]}
                        placeholder="Enter Course Type Name"
                        key="typeName"
                    />
                    <ButtonGroup>
                        <Button variant="success" onClick={handleSubmit} disabled={getter.isDisable}>
                            Submit
                        </Button>
                        <Button variant="secondary" onClick={() => onNavigate("/course-type")}>
                            Cancel
                        </Button>
                    </ButtonGroup>
                </Form>
            </StyledContainer>
        </>
    )
}

export default AddType