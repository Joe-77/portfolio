import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });

  const form = useRef();

  const sendEmail = (e) => {
    emailjs
      .sendForm(
        "service_t3dbwlo",
        "template_az0gem7",
        form.current,
        "d45HPl57ZUSR2nUWW"
      )
      .then(
        (result) => {
          toast.success("Message Sent Successfully");
          document.getElementById("userName").value = "";
          document.getElementById("email").value = "";
          document.getElementById("subj").value = "";
          document.getElementById("msg").value = "";
        },
        (error) => {
          toast.error("Error!");
        }
      );
  };

  return (
    <form action="method" ref={form} onSubmit={handleSubmit(sendEmail)}>
      <div className="flex flex-col sm:flex-row gap-3 mt-5">
        <div className="w-full">
          <input
            id="userName"
            name="from_name"
            type="text"
            placeholder="Name"
            {...register("from_name", { required: true })}
            className="w-3/4 sm:w-full rounded-md bg-transparent outline-none px-2 h-10 text-[#ddd]/50 border-2 border-gray-700 border-opacity-50 shadow-lg shadow-[rgb(36,36,36)]"
          />
          {errors.from_name && (
            <small className="text-red-500 my-1 text-xs block">
              field is empty!
            </small>
          )}
        </div>
        <div className="w-3/4 sm:w-full">
          <input
            id="email"
            type="email"
            name="email"
            placeholder="email"
            {...register("email", { required: true })}
            className="w-full rounded-md bg-transparent outline-none px-2 h-10 text-[#ddd]/50 border-2 border-gray-700 border-opacity-50 shadow-lg shadow-[rgb(36,36,36)]"
          />
          {errors.email && (
            <small className="text-red-500 my-1 text-xs block">
              field is empty!
            </small>
          )}
        </div>
      </div>

      <div className="mt-3">
        <input
          id="subj"
          type="text"
          name="subject"
          placeholder="Subject"
          {...register("subject", { required: true })}
          className="w-3/4 sm:w-full h-14 rounded-md bg-transparent outline-none px-2 text-[#ddd]/50 border-2 border-gray-700 border-opacity-50 shadow-lg shadow-[rgb(36,36,36)]"
        />
        {errors.subject && (
          <small className="text-red-500 my-1 text-xs block">
            field is empty!
          </small>
        )}
      </div>

      <div className="my-3">
        <textarea
          id="msg"
          name="message"
          placeholder="Message"
          cols={50}
          rows={5}
          {...register("message", { required: true })}
          className="w-3/4 sm:w-full rounded-md bg-transparent outline-none px-2  resize-none  text-[#ddd]/50 border-2 border-gray-700 border-opacity-50 shadow-lg shadow-[rgb(36,36,36)]"
        />
        {errors.message && (
          <small className="text-red-500 my-1 text-xs block">
            field is empty!
          </small>
        )}
      </div>
      <button
        type="submit"
        className="w-3/4 sm:w-full duration-700 bg-orange-500 hover:bg-orange-700 p-2 text-white capitalize rounded-md"
      >
        send
      </button>
    </form>
  );
};

export default Form;
