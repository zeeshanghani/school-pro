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
export default function SchoolOnboardingForm({
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
      <form className="" onSubmit={handleSubmit(saveStudent)}>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl text-center font-extrabold tracking-tight first:mt-0">
          Welcome School OnBording
        </h2>
        <p className="leading-7 [&:not(:first-child) ]:mt-2 text-center">
          Complete Your School's Profile to get Started with School Pro{" "}
        </p>
        <div className="grid grid-cols-12 gap-6 py-8">
          <div className="lg:col-span-12 col-span-full space-y-3">
            <div className="grid gap-6">
              <div className="grid gap-3">
                <TextInput
                  register={register}
                  errors={errors}
                  label="School Name"
                  name="School Name"
                />
              </div>
              <div className="grid p-6">
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
