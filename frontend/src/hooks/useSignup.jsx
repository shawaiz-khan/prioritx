import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function useSignup() {
    const navigate = useNavigate();
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [form, setForm] = useState({
        email: "",
        username: "",
        password: "",
        name: "",
        confirmPassword: "",
    });
    const [formErrors, setFormErrors] = useState({});
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleShowPassword = (e) => {
        e.preventDefault();
        setIsShowPassword((prev) => !prev);
    };

    const handleForm = (e) => {
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const validateForm = () => {
        const errors = {};
        if (!form.name.trim()) errors.name = "Name is required.";
        if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) {
            errors.email = "A valid email is required.";
        }
        if (!form.username.trim()) errors.username = "Username is required.";
        if (!form.password.trim()) errors.password = "Password is required.";
        if (form.password !== form.confirmPassword) {
            errors.confirmPassword = "Passwords do not match.";
        }
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setLoading(true);
        try {
            const response = await axios.post(`${import.meta.env.VITE_USERS_API_URL}/register`, form);
            setLoading(false);
            if (response.status === 201) {
                navigate("/login");
            }
        } catch (err) {
            setLoading(false);
            if (err.response && err.response.data) {
                setErrorMessage(err.response.data.message);
            } else {
                setErrorMessage("An error occurred during registration.");
            }
        }
    };

    return {
        isShowPassword,
        form,
        formErrors,
        errorMessage,
        loading,
        handleShowPassword,
        handleForm,
        handleSubmit,
    };
}