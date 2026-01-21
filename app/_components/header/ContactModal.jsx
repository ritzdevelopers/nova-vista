import { useEffect, useState } from "react";

export default function ContactModal({ open, setOpen }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
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

    if (!form.phone.trim()) {
      newErrors.phone = "Mobile is required";
    } else if (!/^[6-9]\d{9}$/.test(form.phone)) {
      newErrors.phone = "Enter valid 10 digit number";
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
      setForm({ name: "", email: "", phone: "", message: "" });

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
  className={`bg-white 
  w-[310px] sm:w-full max-w-md 
  rounded-lg p-6 relative
  transform transition-all duration-300
  ${open ? "scale-100 translate-y-0" : "scale-95 translate-y-6"}`}
>

        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          ✕
        </button>

        <h2 className="md:text-[36px] text-[28px] font-semibold mb-6 text-center">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit} className="space-y-7">
          <input
            type="text"
            placeholder="Name"
            className="w-full bg-[#FAFAFA] border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none"
            name="name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

          <input
            type="email"
            placeholder="Email Address"
            className="w-full bg-[#FAFAFA] border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none"
            name="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

          <input
            type="text"
            placeholder="Phone Number"
            className="w-full bg-[#FAFAFA] border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none"
            name="phone"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

          <textarea
            placeholder="Message"
            rows="4"
            className="w-full bg-[#FAFAFA] border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none"
            name="message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="text-white py-2 w-[200px] bg-[#062b3b] hover:bg-gray-800 transition"
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
