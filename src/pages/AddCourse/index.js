import React from 'react';
import {
    Form, Button, ButtonGroup
} from "react-bootstrap";
import {FormInput, StyledContainer} from "../../components";

import useAddCourse from "./useAddCourse";
import {addCourse} from "../../store/actions/coursesAction";
import {connect} from "react-redux";
import {useNavigate} from "react-router-dom";
import constants from "../../constants";

const FORM_LIST = [
    {id: "title", label: "Title", type: "text", placeholder: "Enter course title"},
    {id: "description", label: "Description", type: "textarea", placeholder: "Enter course description"},
    {id: "typeId", label: "Type Id", type: "text", placeholder: "Enter course type id"},
    {id: "courseFile", label: "Course Material", type: "file", placeholder: "Choose course material"},
    {id: "level", label: "Level", type: "text", placeholder: "Enter course level"},
    {id: "duration", label: "Duration", type: "text", placeholder: "Enter course duration"}
]

const AddCourse = ({addCourse}) => {
    const onNavigate = useNavigate();
    const {getter, setter} = useAddCourse();
    const handleSubmit = () => {
        addCourse(getter);

        onNavigate(constants.ROUTES.COURSE_LIST);
    }

    return (
        <StyledContainer>
            <Form>
                {FORM_LIST.map(item => (
                    <FormInput
                        label={item.label}
                        type={item.type}
                        value={getter[item.id]}
                        onChange={setter[item.id]}
                        placeholder={item.placeholder}
                        key={item.id}
                    />
                ))}
                <ButtonGroup>
                    <Button variant="success" onClick={handleSubmit} disabled={getter.isDisable}>
                        Submit
                    </Button>
                    <Button variant="secondary" onClick={() => onNavigate(constants.ROUTES.COURSE_LIST)}>
                        Cancel
                    </Button>
                </ButtonGroup>
            </Form>
        </StyledContainer>
    )
}

const mapDispatchToProps =(dispatch) => {
    return {
        addCourse: (data) => dispatch(addCourse(data))
    }
}

export default connect(null, mapDispatchToProps)(AddCourse);
