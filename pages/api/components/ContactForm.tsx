"use client";

import FormInput from "./FormInput";
import { ContactFormSchema } from "./ContactFormSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FC } from "react";

export enum ContactFormFieldsEnum {
  Name = "name",
  Email = "email",
  Text = "text",
}

interface ContactFormProps {
  onFormSubmit: () => void;
}
interface ContactFormValues {
  [ContactFormFieldsEnum.Name]: string;
  [ContactFormFieldsEnum.Email]: string;
  [ContactFormFieldsEnum.Text]?: string;
}

const ContactForm: FC<ContactFormProps> = ({ onFormSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: yupResolver(ContactFormSchema()),
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_id: "service_duimoh9",
            template_id: "template_3bsc3rf",
            user_id: "SCXYjos0FEOg5yZFs",
            template_params: {
              name: data[ContactFormFieldsEnum.Name],
              email: data[ContactFormFieldsEnum.Email],
              text: data[ContactFormFieldsEnum.Text] || "",
              to_email: "grzywinski.bartosz@gmail.com",
            },
          }),
        },
      );

      if (response.ok) {
        onFormSubmit();
      } else {
        console.log("Błąd podczas wysyłania wiadomości");
      }
    } catch (error) {
      console.error("Wystąpił błąd", error);
    }
    reset();
  };

  return (
    <>
      <form
        className="rounded-2xl py-8 shadow-white shadow-2xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormInput
          error={errors.name}
          label="Imię lub nazwa firmy"
          className="w-full 2xl:p-3 p-2 rounded-2xl outline-none mt-2"
          {...register(ContactFormFieldsEnum.Name)}
        />
        <FormInput
          error={errors.email}
          label="Email"
          className="w-full 2xl:p-3 p-2 rounded-2xl outline-none mt-2"
          {...register(ContactFormFieldsEnum.Email)}
        />
        <div className="px-6 mt-4">
          <label
            htmlFor={ContactFormFieldsEnum.Text}
            className="text-white 2xl:text-[18px] text-10"
          >
            Jak możemy Ci pomóc?
          </label>
          <textarea
            id={ContactFormFieldsEnum.Text}
            className="w-full 2xl:p-3 p-2 rounded-2xl outline-none min-h-[100px] text-[15px] mt-2"
            {...register(ContactFormFieldsEnum.Text)}
          />
          <button
            type="submit"
            className="w-full py-4 bg-amber-500 rounded-2xl font-bold hover:opacity-60 transition transform active:scale-110 mt-20"
          >
            Wyślij
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
