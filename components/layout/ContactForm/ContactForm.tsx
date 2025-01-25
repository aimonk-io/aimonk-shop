/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { Button } from "@/components/ui/Button/Button";
import { motion } from "framer-motion";
import { FormInput } from "../../ui/FormInput/FormInput";
import { FormTextarea } from "../../ui/FormTextarea/FormTextarea";
import { toast } from "@/libs/hooks/use-toast";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

export default function ContactForm() {
  // Define validation schema
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name must not exceed 50 characters"),
    phone: Yup.string()
      .required("Phone number is required")
      .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits"),
    email: Yup.string()
      .required("Email is required")
      .email("Email is invalid"),
    details: Yup.string()
      .required("Details are required")
      .min(10, "Details must be at least 10 characters"),
    privacyPolicy: Yup.boolean()
      .oneOf([true], "You must agree with the Privacy Policy"),
  });

  // Use React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      details: "",
      privacyPolicy: false,
    },
  });

  // Handle form submission
  const onSubmit = async (data: any) => {
    try {
      const response = await fetch("/api/contact/route", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast({
        title: "Success!",
        description: "Your message has been sent successfully.",
      });

      reset(); // Clear form
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
        duration: 5000, // Dismiss after 5 seconds
      });
    }
  };

  return (
    <div className="w-full min-h-screen bg-white text-black py-[8rem]">
      <div className="w-full lg:h-4/5 md:h-2/4 bg-white text-black py-[1rem] sm:py-[4rem] md:p-8 pl-0 flex flex-col">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-normal mb-2">
            <span className="bg-gradient-to-r from-[#9CA] to-[#E9A] text-transparent bg-clip-text">
              CONTACT
            </span>{" "}
            US
          </h1>
          <p className="text-gray-400 mb-6 mt-6">
            Contact us by email or fill out the form below
          </p>
        </motion.div>
      </div>

      <div className="w-full md:p-10 flex justify-center items-center">
        <motion.div
          className="w-[90%] md:w-[80%] lg:w-[60%]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <p className="text-sm text-gray-400 mb-6 mt-6">FILL THE FORM BELOW:</p>
          <form onSubmit={handleSubmit(onSubmit)} className="h-auto space-y-8">
            {/* Name */}
            <div className="flex flex-col w-full space-y-2">
              <label className="md:text-3xl text-2xl font-normal leading-tight">
                Hi! My name is
              </label>
              <FormInput
                {...register("name")}
                placeholder="Enter your name*"
                className="w-full"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

            {/* Phone */}
            <div className="flex flex-col w-full space-y-2">
              <label className="md:text-3xl text-2xl font-normal leading-tight">
              my phone
              </label>
              <FormInput
                {...register("phone")}
                placeholder="99000 00000*"
                className="w-full"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone.message}</p>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col w-full space-y-2">
              <label className="md:text-3xl text-2xl font-normal leading-tight">
                and my email
              </label>
              <FormInput
                {...register("email")}
                placeholder="example@email.com*"
                className="w-full"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            {/* Details */}
            <div className="flex flex-col w-full space-y-2">
              <label className="md:text-3xl text-2xl font-normal leading-tight mb-5">
                Additionally, I want to know about:
              </label>
              <FormTextarea
                {...register("details")}
                placeholder="Product details*"
                className="w-full lg:w-auto flex-grow "
              />
              {errors.details && (
                <p className="text-red-500 text-sm">{errors.details.message}</p>
              )}
            </div>

            {/* Privacy Policy */}
            {/* Privacy Policy */}
            <div className="flex flex-col lg:flex-row justify-between items-start md:items-center pt-8">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  {...register("privacyPolicy")}
                  className="w-4 h-4 rounded border-gray-700"
                />
                <label className="text-sm">
                  I agree with the{" "}
                  <a href="#" className="underline">
                    Privacy Policy
                  </a>
                </label>
              </div>

            </div>
            {errors.privacyPolicy && (
              <p className="lg:text-left text-red-500 text-sm">
                {errors.privacyPolicy.message}
              </p>
            )}

            {/* Submit Button */}
            <div className="flex justify-between items-start md:items-center pt-8">
              <Button text="SEND INQUIRY" type="submit" variant="black" />
            </div>
          </form>
        </motion.div>
      </div>
    </div>

  );
}


