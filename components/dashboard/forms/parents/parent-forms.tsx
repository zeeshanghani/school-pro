"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import FormHeader from "../FormHeader";
import TextInput from "@/components/FormInputs/TextInput";
import TextArea from "@/components/FormInputs/TextAreaInput";
import ImageInput from "@/components/FormInputs/ImageInput";
import FormFooter from "../FormFooter";
import toast from "react-hot-toast";
import PasswordInput from "@/components/FormInputs/PasswordInput";
import FormSelectInput from "@/components/FormInputs/FormSelectInput";

export type SelectOptionProps = {
  label: string;
  value: string;
};
type SingleStudentFormProps = {
  editingId?: string | undefined;
  initialData?: any | undefined | null;
};
export type studentProps = {
  name: string;
  email: string;
  password: string;
  imageUrl: string;
};
export default function ParentForm({
  editingId,
  initialData,
}: SingleStudentFormProps) {
  //Relation Ship
  const relationships = [
    {
      label: "Mother",
      value: "Mother",
    },
    {
      label: "Father",
      value: "Father",
    },
    {
      label: "Guardian",
      value: "Guardian",
    },
    {
      label: "Others",
      value: "Others",
    },
  ];
  const [selectedRelationship, setSelectedRelationship] = useState<any>(
    relationships[1]
  );
  //Titles
  const titles = [
    {
      label: "Mr",
      value: "Mr",
    },
    {
      label: "Mrs",
      value: "Mrs",
    },
  ];
  const [selectedTitle, setSelectedTitle] = useState<any>(null);
  // Class
  const contactMethods = [
    {
      label: "Phone",
      value: "Phone",
    },
    {
      label: "Email",
      value: "Email",
    },
    {
      label: "Whatsup No",
      value: "Whatsup No",
    },
  ];
  const [selectedMethod, setSelectedMethod] = useState<any>(null);
  //Section/streams
  const streams = [
    {
      label: "S1A",
      value: "1234",
    },
    {
      label: "S2B",
      value: "123455",
    },
  ];
  const [selectedStream, setSelectedStream] = useState<any>(null);
  //Gender
  const genders = [
    {
      label: "MALE",
      value: "MALE",
    },
    {
      label: "FEMALE",
      value: "FEMALE",
    },
  ];
  const [selectedGender, setSelectedGender] = useState<any>(null);

  //Nationality(ye pending hai countries add kerna hai)
  // const initalCountryCode = "UG";
  // const initialCountry = countries.find(
  //   (item) => item.countryCode === initialCountryCode
  // );
  // const [selectedNationality, setSelectedNationality] = useState<any>(initialCountry);

  // Religion
  const religions = [
    {
      label: "Islam",
      value: "Islam",
    },
    {
      label: "Hindu",
      value: "Hindu",
    },
    {
      label: "Cristions",
      value: "Cristions",
    },
  ];
  const [selectedReligion, setSelectedReligion] = useState<any>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<studentProps>({
    defaultValues: {
      name: "",
    },
  });
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const initialImage = initialData?.imageUrl || "/student.png";
  const [imageUrl, setImageUrl] = useState(initialImage);

  async function saveStudent(data: studentProps) {
    try {
      setLoading(true);
      data.imageUrl = imageUrl;

      if (editingId) {
        // await updateCategoryById(editingId, data);
        // setLoading(false);
        // // Toast
        // toast.success("Updated Successfully!");
        // //reset
        // reset();
        // //route
        // router.push("/dashboard/categories");
        // setImageUrl("/placeholder.svg");
      } else {
        // await createCategory(data);
        // setLoading(false);
        // // Toast
        // toast.success("Successfully Created!");
        // //reset
        // reset();
        // setImageUrl("/placeholder.svg");
        // //route
        // router.push("/dashboard/categories");
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
  return (
    <div>
      <div>
        <h2 className="text-2xl fount-bold mb-4 text-blue-400 shadow-3xl">
          Parents form
        </h2>
        <p className=" text-muted-foreground">
          Form of admitting a single student would go here{" "}
        </p>
      </div>
      <form className="" onSubmit={handleSubmit(saveStudent)}>
        <FormHeader
          href="/parents"
          parent="users"
          title="Parents"
          editingId={editingId}
          loading={loading}
        />
        <div className="grid grid-cols-12 gap-6 py-8">
          <div className="lg:col-span-12 col-span-full space-y-3">
            <div className="grid gap-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                <FormSelectInput
                  label="Titles"
                  options={titles}
                  option={selectedTitle}
                  setOption={setSelectedTitle}
                />
                <TextInput
                  register={register}
                  errors={errors}
                  label="First Name"
                  name="firstName"
                />
                <TextInput
                  register={register}
                  errors={errors}
                  label="Last Name"
                  name="lastName"
                />
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 ">
                <FormSelectInput
                  label="Relationship"
                  options={relationships}
                  option={selectedRelationship}
                  setOption={setSelectedRelationship}
                />
                <TextInput
                  register={register}
                  errors={errors}
                  label="National ID / Passport"
                  name="NIN"
                />
                <FormSelectInput
                  label="Gender"
                  options={genders}
                  option={selectedGender}
                  setOption={setSelectedGender}
                  isSearchable={false}
                />
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                
              <PasswordInput
                  register={register}
                  errors={errors}
                  label="Parent Password"
                  name="Password"
                  type="password"
                  toolTipText="Password will be used by parents on the student Portal"
                />
                <TextInput
                  register={register}
                  errors={errors}
                  label="Date of Brith"
                  name="DOB"
                  type="date"
                />
                {/* ye pending hai   */}
                <FormSelectInput
                  label="Nationality"
                  options={genders}
                  option={selectedGender}
                  setOption={setSelectedGender}
                />
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              <TextInput
                  register={register}
                  errors={errors}
                  label="Phone"
                  name="phone"
                  type="tel"
                />
                <TextInput
                register={register}
                errors={errors}
                label="Email"
                name="Email"
                type="email"
              />
                <TextInput
                  register={register}
                  errors={errors}
                  label="WhatsUp No."
                  name="Wtsup No."
                />
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="">
                  <div className="grid  gap-3 ">
                    <FormSelectInput
                      label="Religion"
                      options={religions}
                      option={selectedReligion}
                      setOption={setSelectedReligion}
                    />
                    <FormSelectInput
                      label="Preferred Contact Method"
                      options={contactMethods}
                      option={selectedMethod}
                      setOption={setSelectedMethod}
                    />
                    <TextInput
                      register={register}
                      errors={errors}
                      label="Occupations"
                      name="Occupations"
                    />
                  </div>
                  <div className="grid gap-3">
                    <TextArea
                      register={register}
                      errors={errors}
                      label="Address"
                      name="Address"
                    />
                  </div>
                </div>
                <div className="grid ">
                  <ImageInput
                    title="Parents Profile Image"
                    imageUrl={imageUrl}
                    setImageUrl={setImageUrl}
                    endpoint="parentProfileImage"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <FormFooter
          href="/parents"
          editingId={editingId}
          loading={loading}
          title="Parent"
          parent="users"
        />
      </form>
    </div>
  );
}
