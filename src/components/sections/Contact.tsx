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
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  accessToken: import.meta.env.VITE_EMAILJS_ACCESS_TOKEN,
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

        const { name, email, message } = form;
        const time = new Date().toLocaleString();

        // Template 1: Auto-reply to user
        const autoReplyParams = {
          name,
          message,
          email,
        };

        // Template 2: Send to yourself
        const internalParams = {
          name,
          email,
          message,
          time,
        };

        const sendToUser = emailjs.send(
          emailjsConfig.serviceId,
          emailjsConfig.templateId, // auto-reply to user
          autoReplyParams,
          emailjsConfig.accessToken
        );

        const sendToMe = emailjs.send(
          emailjsConfig.serviceId,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID2, // send to yourself
          internalParams,
          emailjsConfig.accessToken
        );

        Promise.all([sendToUser, sendToMe])
          .then(() => {
            setLoading(false);
            setShowMessage(true);
            setForm(INITIAL_STATE);
          })
          .catch((error) => {
            setLoading(false);
            console.error(error);
            alert("Oops, something went wrong. Please try again.");
          });
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
                                      background: "#000000",
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
