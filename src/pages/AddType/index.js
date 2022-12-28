import React from "react";
import {
    Form, Button, ButtonGroup
} from "react-bootstrap";
import {FormInput, StyledContainer} from "../../components";
import useAddType from "./useAddType";
import {addCourseType} from "../../store/actions/courseTypesAction";
import {connect} from "react-redux";

const AddType = ({onNavigate, addType}) => {
    const {getter, setter} = useAddType();
    const handleSubmit = () => {
        addType(getter)
        onNavigate("/course-type");
    };

    return (
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
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addType: (data) => dispatch(addCourseType(data))
    }
}

export default connect(null, mapDispatchToProps)(AddType);