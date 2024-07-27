import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import KErrorMessage from "./KErrorMerssage";

const validationSchema = yup.object({
    name: yup.string().required("Name is not define"),
    phone: yub.string(),
    password: "",
    gender: yub.string().required("Gender is  required"),
    date: yub.date().required("Date is  required"),
    income: "",
    about: "",
    social: {
        facebook: "",
        tiktok: "",
    },
});

function FormikTutorial() {
    return (
        <div>
            <Formik
                validationSchema={validationSchema}
                initialValues={{
                    name: "",
                    phone: "",
                    password: "",
                    gender: "",
                    date: "",
                    income: "",
                    about: "",
                    social: {
                        facebook: "",
                        tiktok: "",
                    },
                }}
                onSubmit={(values) => console.log(values)}
            >
                <Form>
                    <label htmlFor="name"> Name</label>
                    <Field name="name" type="text" />
                    <KErrorMessage name="name" />

                    <br />
                    <label htmlFor="phone"> Phone</label>
                    <Field name="phone" type="text" />
                    <br />

                    <label htmlFor="password"> Password</label>
                    <Field name="password" type="password" />
                    <br />

                    <label htmlFor="gender">Geder</label>
                    <br />
                    <label htmlFor="male">Male</label>
                    <Field name="gender" value="male" type="radio" />
                    <label htmlFor="female">Female</label>
                    <Field name="gender" value="female" type="radio" />
                    <br />

                    <label htmlFor="date"> Date</label>
                    <Field name="date" type="date" />
                    <br />

                    <label htmlFor="income"> Income</label>
                    <Field name="income" as="select">
                        <option value="0">0</option>
                        <option value="100">100</option>
                        <option value="1000">1000</option>
                    </Field>
                    <br />

                    <label htmlFor="about"> About</label>
                    <Field name="about" as="textarea" />
                    <br />

                    <label> Social</label>
                    <br />
                    <label htmlFor="facebook"> Facebook: </label>
                    <Field name="facebook" type="text" />

                    <label htmlFor="tiktok"> Tiktok: </label>
                    <Field name="tiktok" type="text" />
                    <br />

                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    );
}

export default FormikTutorial;
