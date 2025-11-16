import z from "zod";

export const formSchema = z.object({
  country: z.enum(["pakistan"], {
    message: "Select any one options",
  }),

  class: z.enum(["online", "onsite"], {
    message: "Select any one options",
  }),

  gender: z.enum(["male", "female"], {
    message: "Select any one options",
  }),

  city: z.enum(["karachi", "lahore"], {
    message: "Select any one options",
  }),

  course: z.enum(["agentic-ai", "shopify", "web-dev"], {
    message: "Select any one options",
  }),

  name: z
    .string()
    .min(3, { message: "Name should not be less than 3 characters" })
    .max(20, { message: "Name should not be more than 20 characters" }),

  "father-name": z
    .string()
    .min(3, { message: "Father Name should not be less than 3 characters" })
    .max(20, { message: "Father Name should not be more than 20 characters" }),

  email: z.string().regex(/^\S+@\S+\.\S+$/, { message: "Email is not valid" }),

  phone: z
    .string()
    .regex(/^\d+$/, { message: "Phone must contain digits only" })
    .regex(/^(03\d{9}|923\d{9})$/, { message: "Invalid phone number format" }),

  cnic: z
    .string()
    .regex(/^\d{13}$/, { message: "CNIC must be exactly 13 digits" }),

  "father-cnic": z
    .string()
    .regex(/^\d{13}$/, { message: "CNIC must be exactly 13 digits" }),

  dob: z.coerce.date().refine(
    (date) => {
      const today = new Date();
      const age = today.getFullYear() - date.getFullYear();

      const adjustedAge =
        today.getMonth() > date.getMonth() ||
        (today.getMonth() === date.getMonth() &&
          today.getDate() >= date.getDate())
          ? age
          : age - 1;

      return adjustedAge >= 18;
    },
    {
      message: "Student must be at least 18 years old",
    }
  ),

  "computer-proficiency": z.enum(["beginner", "intermediate", "advanced"], {
    message: "Select any one options",
  }),

  laptop: z.enum(["yes", "no"], {
    message: "Select any one options",
  }),

  qualification: z.enum(["matric", "inter", "graduate"], {
    message: "Select any one options",
  }),

  address: z.string().min(1, { error: "Address is required" }),
});
