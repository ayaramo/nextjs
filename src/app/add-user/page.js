"use client";

import { useState } from "react";
import { z } from "zod";

// Define Zod schema for validation
const userSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must be at most 15 digits"),
});

export default function NewUser() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); // Reset previous messages

    // Validate form using Zod
    const result = userSchema.safeParse(formData);

    if (!result.success) {
      const errorMessages = result.error.format();
      setErrors(errorMessages);
      return;
    }

    setErrors({}); // Clear errors if validation passes

    const res = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setMessage("User added successfully!");
      setFormData({ name: "", email: "", phone: "" });
    } else {
      setMessage("Failed to add user.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-12">
      <div className="bg-gray-100 p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl text-black font-bold mb-4">Add a New User</h1>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="p-2 border rounded text-black"
          />
          {errors.name && (
            <p className="text-red-500">{errors.name._errors[0]}</p>
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="p-2 border rounded text-black"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email._errors[0]}</p>
          )}

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="p-2 border rounded text-black"
          />
          {errors.phone && (
            <p className="text-red-500">{errors.phone._errors[0]}</p>
          )}

          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Add User
          </button>
        </form>
        {message && <p className="mt-4 text-center text-gray-700">{message}</p>}
      </div>
    </div>
  );
}
