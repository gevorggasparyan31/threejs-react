import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { EarthCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

const INITIAL_STATE = Object.fromEntries(
    Object.keys(config.contact.form).map((input) => [input, ""])
);

const emailjsConfig = {
  serviceId: "service_mqub5ci",
  templateId: "template_5jr1r9m",
  accessToken: "S6fr6STFm25ewgdI_",
};

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [form, setForm] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        // Concatenate form data into a single message
        const message = `Name: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`;

        // Use EmailJS to send the concatenated message
        emailjs
            .send(
                emailjsConfig.serviceId,
                emailjsConfig.templateId,
                { message },
                emailjsConfig.accessToken
            )
            .then(
                () => {
                    setLoading(false);
                    setShowMessage(true);
                    setForm(INITIAL_STATE);
                },
                (error) => {
                    setLoading(false);
                    console.log(error);
                    alert("Something went wrong.");
                }
            );
    };


    return (
      <div className={`flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row`}>
          <motion.div
              variants={slideIn("left", "tween", 0.2, 1)}
              className="bg-black-100 flex-[0.75] rounded-2xl p-8"
          >
              <Header useMotion={false} {...config.contact} />
              <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className={`mt-12 flex flex-col gap-8 ${showMessage ? 'h-full' : 'h-auto'}`}
              >
                  {Object.keys(config.contact.form).map((input) => {
                      const {span, placeholder} = config.contact.form[input as keyof typeof config.contact.form];
                      const Component = input === "message" ? "textarea" : "input";

                      return (
                          <label key={input} className="flex flex-col">
                              <span className="mb-4 font-medium text-white">{span}</span>
                              <Component
                                  type={input === "email" ? "email" : "text"}
                                  name={input}
                                  value={form[`${input}`]}
                                  onChange={handleChange}
                                  placeholder={placeholder}
                                  style={{
                                      background: "linear-gradient(to right, rgb(0, 47, 166), rgb(8, 1, 82))",
                                  }}
                                  className="bg-tertiary placeholder:text-secondary rounded-lg border-none px-6 py-4 font-medium text-white outline-none"
                                  {...(input === "message" && {rows: 7})}
                              />
                          </label>
                      );
                  })}
                  <button
                      type="submit"
                      className="bg-tertiary shadow-primary w-fit rounded-xl px-8 py-3 font-bold text-white shadow-md outline-none"
                  >
                      {loading ? "Sending..." : "Send"}
                  </button>
                  {showMessage && (
                      <p className="text-white mt-2">Thank you. I will get back to you as soon as possible.</p>
                  )}
              </form>
          </motion.div>
          <motion.div
              variants={slideIn("right", "tween", 0.2, 1)}
              className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
          >
              <EarthCanvas/>
          </motion.div>
      </div>
  );
};

export default SectionWrapper(Contact, "contact");
