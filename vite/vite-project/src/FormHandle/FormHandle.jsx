import { useState } from "react";

function FormHandle() {
    //Tao mot state gia tri khoi tao la 1 object voi cac phan tu la data trong form

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        jobs: "",
        gender: "",
        languages: [],
    });

    //  ham su li su kiem thay doi (onChange) cua tung input trong form
    const handleChange = (e) => {
        console.log(e);

        //Push value duoc check vao trong mang copy va set lai formdata
        if (e.target.name === "languages") {
            let copy = { ...formData };
            if (e.target.checked) {
                copy.languages.push(e.target.value);
            } else {
                copy.languages = copy.language.filter(
                    (item) => item !== e.target.value
                );
            }
            setFormData(copy);
        } else {
            //set lai form data theo ten cua input
            setFormData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
                <label htmlFor="username">User Name</label>
                <input
                    type="text"
                    className="form-control"
                    name="username"
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="email">Email </label>
                <input
                    type="email"
                    className="form-control"
                    name="email"
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="jobs"></label>
                <select
                    name="jobs"
                    id=""
                    className="form-select"
                    onChange={handleChange}
                >
                    <option value="student">Student</option>
                    <option value="employee">Employee</option>
                    <option value="orther">Orther</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="gender">Gender </label>
                <input
                    type="radio"
                    name="gender"
                    value="Male"
                    onChange={handleChange}
                />
                <label htmlFor="gender">Male </label>

                <input
                    type="radio"
                    name="gender"
                    value="Female"
                    onChange={handleChange}
                />
                <label htmlFor="gender">Female </label>

                <input
                    type="radio"
                    name="gender"
                    value="Orther"
                    onChange={handleChange}
                />
                <label htmlFor="gender">Order </label>
            </div>
            <div className="form-group">
                <label htmlFor="gender">Languages </label>
                <input
                    type="checkbox"
                    name="languages"
                    value="HTML"
                    onChange={handleChange}
                />
                <label htmlFor="languages">HTML </label>

                <input
                    type="checkbox"
                    name="languages"
                    value="CSS"
                    onChange={handleChange}
                />
                <label htmlFor="languages">CSS </label>

                <input
                    type="checkbox"
                    name="languages"
                    value="Orther"
                    onChange={handleChange}
                />
                <label htmlFor="languages">Order </label>
            </div>

            <button>Submit</button>
        </form>
    );
}

export default FormHandle;
