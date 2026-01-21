import { useEffect, useState } from "react";

export default function ContactModal({ open, setOpen }) {
    const [form, setForm] = useState({
        name: "",
        email: "",
        mobile: "",
    });

    const [errors, setErrors] = useState({});

    // 🔒 Disable background scroll
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        // Cleanup (important)
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [open]);

    const validate = () => {
        let newErrors = {};

        if (!form.name.trim()) newErrors.name = "Name is required";
        if (!form.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            newErrors.email = "Enter valid email";
        }

        if (!form.mobile.trim()) {
            newErrors.mobile = "Mobile number is required";
        } else if (!/^[0-9]{10}$/.test(form.mobile)) {
            newErrors.mobile = "Enter 10 digit mobile number";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;

        console.log("Form Data:", form);
        setForm({ name: "", email: "", mobile: "" });
        setOpen(false);
    };

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center
            transition-opacity duration-300
            ${open ? "opacity-100 visible" : "opacity-0 invisible"}
            bg-black/50`}
        >
            <div
                className={`bg-white w-full max-w-md rounded-lg p-6 relative
                transform transition-all duration-300
                ${open ? "scale-100 translate-y-0" : "scale-95 translate-y-6"}`}
            >
                <button
                    onClick={() => setOpen(false)}
                    className="absolute top-3 right-3 text-gray-500 hover:text-black"
                >
                    ✕
                </button>

                <h2 className="text-[22px] font-semibold text-[#012A3C] mb-4 text-center">
                    Contact Us
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full border rounded px-3 py-2"
                        value={form.name}
                        onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                        }
                    />
                    {errors.name && (
                        <p className="text-red-500 text-sm">{errors.name}</p>
                    )}

                    <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full border rounded px-3 py-2"
                        value={form.email}
                        onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                        }
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm">{errors.email}</p>
                    )}

                    <input
                        type="tel"
                        placeholder="Mobile Number"
                        className="w-full border rounded px-3 py-2"
                        value={form.mobile}
                        onChange={(e) =>
                            setForm({ ...form, mobile: e.target.value })
                        }
                    />
                    {errors.mobile && (
                        <p className="text-red-500 text-sm">{errors.mobile}</p>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-[#012A3C] text-white py-2 rounded"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
