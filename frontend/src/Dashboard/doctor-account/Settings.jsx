/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { BASE_URL } from '../../config';

const Settings = ({ doctorData, onUpdateProfile }) => {
  const [formData, setFormData] = useState({
    name: doctorData?.name || '',
    email: doctorData?.email || '',
    phone: doctorData?.phone || '',
    qualifications: doctorData?.qualifications?.join(', ') || '',
    bio: doctorData?.bio || '',
    ticketPrice: doctorData?.ticketPrice || '',
    experiences: doctorData?.experiences?.join(', ') || '',
    education: doctorData?.education || '',
    timeSlots: doctorData?.timeSlots?.join(', ') || '',
    specialization: doctorData?.specialization || '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/doctors/profile/me`, { // Fixed typo here
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
          ...formData,
          qualifications: formData.qualifications.split(',').map((item) => item.trim()),
          experiences: formData.experiences.split(',').map((item) => item.trim()),
          timeSlots: formData.timeSlots.split(',').map((item) => item.trim()),
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert(data.message || 'Profile updated successfully!');
        if (onUpdateProfile) onUpdateProfile(data.data); // Update profile on success
      } else {
        throw new Error(data.message || 'Failed to update profile');
      }
    } catch (err) {
      console.error(err.message);
      alert(err.message); // Handle error alert
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-6">Update Profile</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block font-medium">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block font-medium">Qualifications (comma-separated)</label>
          <input
            type="text"
            name="qualifications"
            value={formData.qualifications}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block font-medium">Bio</label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          ></textarea>
        </div>

        <div>
          <label className="block font-medium">Ticket Price</label>
          <input
            type="number"
            name="ticketPrice"
            value={formData.ticketPrice}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block font-medium">Experiences (comma-separated)</label>
          <input
            type="text"
            name="experiences"
            value={formData.experiences}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block font-medium">Education</label>
          <input
            type="text"
            name="education"
            value={formData.education}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block font-medium">Available Time Slots (comma-separated)</label>
          <input
            type="text"
            name="timeSlots"
            value={formData.timeSlots}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block font-medium">Specialization</label>
          <input
            type="text"
            name="specialization"
            value={formData.specialization}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        <button
          type="submit"
          className={`w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 ${loading ? 'opacity-50' : ''}`}
          disabled={loading}
        >
          {loading ? 'Submitting...' : 'Submit Changes'}
        </button>
      </form>
    </div>
  );
};

export default Settings;
