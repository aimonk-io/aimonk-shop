"use client";
import React, { useState } from 'react';
import { Button } from '../Button/Button';
import { motion } from 'framer-motion';
import { FormInput } from './FormInput';
import { FormTextarea } from './FormTextarea';

interface FormData {
  source: string | number | readonly string[] | undefined;
  company: string | number | readonly string[] | undefined;
  name: string;
  email: string;
  goal: string;
  phone: string | number | readonly string[] | undefined;
  details: string;
  privacyPolicy: boolean;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    source: '',
    company: '',
    name: '',
    email: '',
    goal: '',
    phone: '',
    details: '',
    privacyPolicy: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    try {
      const response = await fetch('/api/email/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Email sent successfully!');
      } else {
        alert('Failed to send email. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, type, value, checked } = e.target as HTMLInputElement;
    console.log(e.target);
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };


  return (
    <div className="w-full min-h-screen bg-white text-black py-[8rem]">
      <div className="w-full lg:h-4/5 md:h-2/4 bg-white text-black py-[6rem] sm:py-[8rem] md:p-8 pl-0 flex flex-col">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-normal mb-2">
            LET&apos;S <span className="bg-gradient-to-r from-[#9CA] to-[#E9A] text-transparent bg-clip-text">CONNECT</span>
          </h1>
          <p className="text-gray-400 mb-6 mt-6">Contact us by email or fill out the form below</p>
        </motion.div>
      </div>

      <div className="w-full md:p-10 mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }}>
          <p className="text-sm text-gray-400 mb-6 mt-6">FILL THE FORM BELOW:</p>
          <form onSubmit={handleSubmit} className="h-auto space-y-8">

            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-col md:flex-row w-full md:w-1/2">
                <label className="md:text-3xl text-2xl font-normal leading-tight w-full md:w-[50%] mb-2">Hi! My name is</label>
                <FormInput
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name*"
                  required
                  className="w-full"
                />
              </div>
              <div className="flex flex-col md:flex-row w-full md:w-1/2">
                <label className="md:text-3xl text-2xl font-normal text-left md:text-center leading-tight w-full md:w-[50%] mb-2">and my phone</label>
                <FormInput
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="99000 00000*"
                  required
                  className="w-full"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <label className="md:text-3xl text-2xl font-normal leading-tight">I heard about you from</label>
              <FormInput
                name="source"
                value={formData.source}
                onChange={handleChange}
                placeholder="Source*"
                required
                className="w-full md:w-auto flex-grow"
              />
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <label className="md:text-3xl text-2xl font-normal leading-tight">and I&apos;m seeking assistance with</label>
              <FormInput
                name="goal"
                value={formData.goal}
                onChange={handleChange}
                placeholder="Goal*"
                required
                className="w-full md:w-auto flex-grow"
              />
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <label className="md:text-3xl text-2xl font-normal leading-tight">You can reach me at</label>
              <FormInput
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@email.com*"
                required
                className="w-full md:w-auto flex-grow"
              />
              <span className="md:text-3xl text-2xl hidden md:block ml-2">to start the conversation.</span>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-4">
              <label className="md:text-3xl text-2xl font-normal leading-tight">Additionally, I want to know about:</label>
              <FormTextarea
                name="details"
                value={formData.details}
                onChange={handleChange}
                placeholder="Product details*"
                className="w-full md:w-auto flex-grow"
              />
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-8">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="privacyPolicy"
                  checked={formData.privacyPolicy}
                  onChange={handleChange}
                  className="w-4 h-4 rounded border-gray-700"
                  required
                />
                <label className="text-sm">
                  I agree with the{' '}
                  <a href="#" className="underline">Privacy Policy</a>
                </label>
              </div>

            </div>
            <Button text="SEND INQUIRY" type="submit" />


          </form>
        </motion.div>
      </div>
    </div>
  );
}