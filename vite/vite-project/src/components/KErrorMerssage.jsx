import { ErrorMessage } from "formik";

function KErrorMessage({ name }) {
    return (
        <div style={{ color: "red" }}>
            <br />
            <ErrorMessage name={name} />
        </div>
    );
}

export default KErrorMessage;
