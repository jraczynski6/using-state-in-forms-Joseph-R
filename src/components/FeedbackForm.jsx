import { useState } from "react";
export default function UserForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        feedBack: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }
    return (
        <div>
            <h1>User-Form</h1>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </label>
            </form>
            <h2>Preview</h2>
            <p>Name:{formData.name}</p>
        </div>
    )
}