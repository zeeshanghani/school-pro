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
import { InfoBanner } from "@/components/info-banner";

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
export default function SingleStudentForm({
  editingId,
  initialData,
}: SingleStudentFormProps) {
  //Parents
  const parents = [
    {
      label: "John Deo",
      value: "1234",
    },
    {
      label: "Ghani Bro",
      value: "123455",
    },
  ];
  const [selectedParents, setSelectedParents] = useState<any>(null);
  // Class
  const classes = [
    {
      label: "S1",
      value: "1234",
    },
    {
      label: "S2",
      value: "123455",
    },
  ];
  const [selectedClass, setSelectedClass] = useState<any>(null);
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
    <div className="shadow-3xl shadow-4xl border border text-center rounded-lg p-2 mb-2">
      <h2 className="text-3xl fount-bold mb-4 text-blue-400">
        Single Student Admission Form
       </h2>
      <p className=" text-muted-foreground ">
        Form of admitting a single student would go here{" "}
        </p>
    </div>
    <form  className="" onSubmit={handleSubmit(saveStudent)}>
      
      <FormHeader
        href="/students"
        parent=""
        title="student"
        editingId={editingId}
        loading={loading}
      />

      <div className="grid grid-cols-12 gap-6 py-8">
        
        <div className="lg:col-span-12 col-span-full space-y-3">
          <div className="grid gap-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              <TextInput
                register={register}
                errors={errors}
                label="Student First Name"
                name="firstName"
              />
              <TextInput
                register={register}
                errors={errors}
                label="Student Last Name"
                name="lastName"
              />
              <TextInput
                register={register}
                errors={errors}
                label="Email"
                name="Email"
                type="email"
              />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 ">
              <FormSelectInput
                label="Parents"
                options={parents}
                option={selectedParents}
                setOption={setSelectedParents}
                toolTipText="Add New Perants"
                href="/dashboard/users/parents/new"
              /><FormSelectInput
              label="Class"
              options={classes}
              option={selectedClass}
              setOption={setSelectedClass}
              toolTipText="Add New Class"
              href="/dashboard/academics/classes"
            />
            <FormSelectInput
              label="Stream / Section"
              options={streams}
              option={selectedStream}
              setOption={setSelectedStream}
              toolTipText="Add New Stream"
              href="/dashboard/academics/classes"
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
              {/* ye pending hai   */}
              <FormSelectInput
                label="Nationality"
                options={genders}
                option={selectedGender}
                setOption={setSelectedGender}
              />
              <PasswordInput
                register={register}
                errors={errors}
                label="Student Password"
                name="Password"
                type="password"
                toolTipText="Password will be used by student on the student Portal"
              />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              <TextInput
                register={register}
                errors={errors}
                label="State/Village"
                name="State"
              />
              <TextInput
                register={register}
                errors={errors}
                label="Birth Certificate No."
                name="BCN"
              />
              <FormSelectInput
                label="Religion"
                options={religions}
                option={selectedReligion}
                setOption={setSelectedReligion}
              />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 ">
            <FormSelectInput
                label="Gender"
                options={genders}
                option={selectedGender}
                setOption={setSelectedGender}
                isSearchable={false}
              />
              <TextInput
                register={register}
                errors={errors}
                label="Date of Brith"
                name="DOB"
                type="date"
              />
              <TextInput
                register={register}
                errors={errors}
                label="Roll Number"
                name="roll No."
              />
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="">
                <div className="grid  gap-3 ">
                  <TextInput
                    register={register}
                    errors={errors}
                    label="Registration NO."
                    name="regNo."
                  />
                  <TextInput
                    register={register}
                    errors={errors}
                    label="Admission Date."
                    name="admission Date."
                  />
                </div>
                <div className="grid gap-3">
                  <TextArea
                    register={register}
                    errors={errors}
                    label="Description"
                    name="description"
                  />
                </div>
              </div>
              <div className="grid ">
                <ImageInput
                  title="Student Profile Image"
                  imageUrl={imageUrl}
                  setImageUrl={setImageUrl}
                  endpoint="studentProfileImage"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <FormFooter
        href="/students"
        editingId={editingId}
        loading={loading}
        title="Student"
        parent=""
      />
    </form>
    </div>
  );
}

