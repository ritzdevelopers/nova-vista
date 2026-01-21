import { useEffect, useState } from "react";

export default function ContactModal({ open, setOpen }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const script_url = process.env.NEXT_PUBLIC_SCRIPT_URL || "";

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
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
      newErrors.mobile = "Mobile is required";
    } else if (!/^[6-9]\d{9}$/.test(form.mobile)) {
      newErrors.mobile = "Enter valid 10 digit number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    if (!script_url) {
      setStatus("Form not configured");
      return;
    }

    setLoading(true);
    setStatus("");

    const payload = {
      ...form,
      formType: "Contact Form"
    };

    try {
      await fetch(script_url, {
        method: "POST",
        
        body: JSON.stringify(payload),
      });

      setStatus("✅ Submitted successfully!");
      setForm({ name: "", email: "", mobile: "" });

      // Close after short delay
      setTimeout(() => setOpen(false), 800);
    } catch {
      setStatus("❌ Submission failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50
      transition-opacity duration-300
      ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
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
            placeholder="Full Name"
            className="w-full border rounded px-3 py-2"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

          <input
            placeholder="Email"
            className="w-full border rounded px-3 py-2"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

          <input
            placeholder="Mobile"
            className="w-full border rounded px-3 py-2"
            value={form.mobile}
            onChange={(e) => setForm({ ...form, mobile: e.target.value })}
          />
          {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#012A3C] text-white py-2 rounded"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>

          {status && (
            <p className="text-center text-sm mt-2 text-green-600">
              {status}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
