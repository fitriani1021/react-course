import React from "react";
import {ButtonGroup, Form, Button} from "react-bootstrap";
import {FormInput, StyledContainer} from "../../components";
import constants from "../../constants";
import {getCourseById} from "../../services/courseApi";
import {deleteCourse, editCourse} from "../../store/actions/coursesAction"
import {connect} from "react-redux";
import data from "bootstrap/js/src/dom/data";

const initialData = {
    title: "",
    description: "",
    typeId: "",
    file: "null",
    duration: "",
    level: "",
}

const EditCourse = ({onNavigate, params, editCourse}) => {
    const [data, setData] = React.useState(initialData);

    React.useEffect(() => {
        const  course = getCourseById(params.id);
        console.log(params.id)
        setData(course)
    },[params.id])

    const handleChange = (name) => (e) => {
        setData((prevData) => ({
            ...prevData,
            [name]: e.target.value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            courseId: params.id,
            ...data
        };
        delete payload.file;
        delete payload.typeId;

        editCourse(payload)
        onNavigate(constants.ROUTES.COURSE_LIST);
    }

    const handleCancel = (e) => {
        e.preventDefault();
        onNavigate(constants.ROUTES.COURSE_LIST);
    }

    return(
        <StyledContainer>
            <Form>
                <FormInput
                    label={"Title"}
                    type={"text"}
                    placeholder={"Enter title"}
                    value={data.title}
                    onChange={handleChange("title")}
                />
                <FormInput
                    label={"Description"}
                    type={"textarea"}
                    placeholder={"Enter Description"}
                    value={data.description}
                    onChange={handleChange("description")}
                />
                <FormInput
                    label={"Course Type Id"}
                    type={"text"}
                    placeholder={"Enter course type"}
                    value={data.courseTypeId}
                    disabled={true}
                />
                <FormInput
                    label={"Course Material"}
                    type={"file"}
                    id={"file"}
                    disabled={true}
                />
                <FormInput
                    label={"Duration"}
                    type={"text"}
                    placeholder={"Enter duration"}
                    value={data.duration}
                    onChange={handleChange("duration")}
                />
                <FormInput
                    label={"Level"}
                    type={"text"}
                    placeholder={"Enter level"}
                    value={data.level}
                    onChange={handleChange("level")}
                />

                <ButtonGroup size={"lg"}>
                    <Button onClick={handleSubmit} variant={"success"}>Update</Button>
                    <Button onClick={handleCancel} variant={"danger"}>Cancel</Button>
                </ButtonGroup>
            </Form>
        </StyledContainer>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        editCourse: (data) => dispatch(editCourse(data))
    }
}

export default connect(null, mapDispatchToProps)(EditCourse);