import { useState } from "react";

export default function UserForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        feedback: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    const isDisabled = !formData.name.trim() || !formData.email.trim() || !formData.feedback.trim();

    return (
        <div className="page-container">
            <div className="form-container">
                <form>
                    <fieldset>
                        <legend>User Form</legend>
                        <label>
                            Name:
                            <input type="text" name="name" value={formData.name} onChange={handleChange} />
                        </label>
                        <label>
                            Email:
                            <input type="text" name="email" value={formData.email} onChange={handleChange} />
                        </label>
                        <label>
                            Feedback:
                            <textarea name="feedback" value={formData.feedback} placeholder="Please write your feedback here." onChange={handleChange} maxLength="200" />
                        </label>
                        <br/>
                        <button type="submit" disabled={isDisabled}>Submit Form</button>
                    </fieldset>
                </form>
            </div>
            <div className="preview-container">
                <h2>Preview</h2>
                <p>Name: {formData.name}</p>
                <p>Email: {formData.email}</p>
                <p>Feedback: {formData.feedback}</p>
            </div>
        </div>
    )
}