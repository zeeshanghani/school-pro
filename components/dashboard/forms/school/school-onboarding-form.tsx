"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import TextInput from "@/components/FormInputs/TextInput";
import ImageInput from "@/components/FormInputs/ImageInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import { Send } from "lucide-react";

export type schoolProps = {
  name: string;
  imageUrl: string;
};
export default function SchoolOnboardingForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<schoolProps>({
    defaultValues: {
      name: "",
    },
  });
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const initialImage = "/Logoo.png";
  const [imageUrl, setImageUrl] = useState(initialImage);

  async function saveStudent(data: schoolProps) {
    try {
      setLoading(true);
      data.imageUrl = imageUrl;
      console.log(data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
  return (
    <div>
      <form className="" onSubmit={handleSubmit(saveStudent)}>
        <div className="text-center">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-extrabold tracking-tight first:mt-0 lg:text-3xl ">
            Welcome to Ghani School
          </h2>
          <p className="leading-7 [&:not(:first-child) ]:mt-2 ">
            Complete Your School's Profile to get Started with School Pro{" "}
          </p>
        </div>
        <div className="grid grid-cols-12 gap-6 py-6">
          <div className="lg:col-span-12 col-span-full space-y-3">
            <div className="grid gap-6">
              <div className="grid gap-3">
                <TextInput
                  register={register}
                  errors={errors}
                  label="School Name"
                  name="School Name"
                />
                <ImageInput
                  title="Custumized Your School Logo"
                  imageUrl={imageUrl}
                  setImageUrl={setImageUrl}
                  endpoint="schoolLogo"
                  className="object-contain mt-2"
                  size="sm"
                />
              </div>
            </div>
          </div>
        </div>
        <SubmitButton
          buttonIcon={Send}
          title="register School"
          loading={loading}
          loadingTitle="Creating please wait..."
        />
      </form>
    </div>
  );
}
