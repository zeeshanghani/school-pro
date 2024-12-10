"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextInput from "../FormInputs/TextInput";
import SubmitButton from "../FormInputs/SubmitButton";
import { Mail, Send } from "lucide-react";
import TextArea from "../FormInputs/TextAreaInput";
import PhoneInput from "../FormInputs/PhoneInput";
import FormSelectInput from "../FormInputs/FormSelectInput";

export type RegisterInputProps = {
  fullName: string;
  email: string;
  password: string;
  phone: string;
};

const ContactUs: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterInputProps>();
  const roles = [
    {
      label:  "Principal/Leadership/mgt",
      value:  "Principal",
    },
    {
      label:  "School Administor",
      value:  "Administor",
    },
    {
      label:  "Head Teacher",
      value:  "Headteacher",
    },
    {
      label:  "Teacher/Parent/Student",
      value:  "teacher/parent/student",
    },
    {
      label:  "Consultant/Resellor",
      value:  "consultant/resaller",
    },
    {
      label:  "Other",
      value:  "other",
    },
    
  ]
  const [selectedRoe, setSelectedRole] = useState<any>(null);
  async function onSubmit(data: RegisterInputProps) {
    console.log(data);
  }
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex item-center justify-center">
          <div className="col-span-2 bg-white p-6 rounded-2xl shadow">
            <h3 className="text-2xl text-center font-semibold mb-4">
              Sing up to get your school onboard
            </h3>
            <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
              <TextInput
                label="Your Full Name"
                register={register}
                name="NAME"
                errors={errors}
                placeholder="Zeeshan Ghani"
              />
              <div className="grid md:grid-cols-2 gap-4">
                <TextInput
                  label="School"
                  register={register}
                  name="school"
                  errors={errors}
                  placeholder="Ghani Schools systum"
                />
                <TextInput
                  label="Country"
                  register={register}
                  name="Country"
                  errors={errors}
                  placeholder="phone"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <TextInput
                  label="Email Address"
                  register={register}
                  name="email"
                  type="email"
                  errors={errors}
                  placeholder="Eg. johndoe@gmail.com"
                  icon={Mail}
                />
                <TextInput
                  label="Phone"
                  register={register}
                  name="phone"
                  errors={errors}
                  placeholder="phone"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <TextInput
                  label="School Website/Social Media Page(fb, linkdin)"
                  register={register}
                  name="SchoolPage"
                  type="email"
                  errors={errors}
                  placeholder="https:www.ghanischool.com "
                />
                <TextInput
                  label="Number of students"
                  register={register}
                  name="students"
                  errors={errors}
                  placeholder="300000"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <FormSelectInput
                  label="Your Role"
                  options={roles}
                  option={selectedRoe}
                  setOption={setSelectedRole}   
                              
                />
                <TextInput
                  label="Product Interest(Which features are you looking for...)"
                  register={register}
                  name="phone"
                  errors={errors}
                  placeholder="phone"
                  
                />
                <TextArea
                  label="Text Area (Which features are you looking for...)"
                  register={register}
                  name="phone"
                  errors={errors}
                />
                <TextInput
                  label="How did you here about us"
                  register={register}
                  name="phone"
                  errors={errors}
                  placeholder="phone"
                />
              </div>
              <SubmitButton
                buttonIcon={Send}
                title="Submit"
                loading={isLoading}
                loadingTitle="Sending in please wait..."
              />
            </form>
          </div>
        </div>
        <div className="py-8  grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-800 text-white p-6 rounded-2xl">
            <h3 className="font-semibold text-xl mb-2">
              Speak to someone in sales
            </h3>
            <p className="text-sm mb-4 py-4">
              To create a more value-added solution, is essential to an analysis
              of the possibilities of improvement.
            </p>
            <button className="bg-white text-green-800 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition duration-300">
              Book Appointment
            </button>
          </div>
          <div className="bg-lime-400 p-6 rounded-2xl">
            <h3 className="font-semibold mb-2 text-xl">Contact to our team</h3>
            <p className="text-sm mb-4 py-4">
              To create a more value-added solution, is essential to an analysis
              of the possibilities of improvement.
            </p>
            <button className="bg-green-800 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-green-700 transition duration-300">
              Send a Mail
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
