import { useForm } from "react-hook-form";
import { formSchema } from "./formSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(data) {
    // console.log(errors);
    console.log(data);
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <form
        className="w-full max-w-5xl bg-white p-8 rounded-xl border border-gray-200 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Row 1 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Select country
          </label>
          <select
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("country")}
          >
            <option disabled selected>
              Select country
            </option>
            <option value="pakistan">Pakistan</option>
          </select>
          {errors.country?.message && <p>{errors.country?.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Select class preference
          </label>
          <select
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("class")}
          >
            <option disabled selected value="">
              Select class preference
            </option>
            <option value="online">Online</option>
            <option value="onsite">Onsite</option>
          </select>
          {errors.class?.message && <p>{errors.class?.message}</p>}
        </div>

        {/* Row 2 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Select gender
          </label>
          <select
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("gender")}
          >
            <option disabled selected value="">
              Select gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.gender?.message && <p>{errors.gender?.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Select city
          </label>
          <select
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("city")}
          >
            <option disabled selected value="">
              Select city
            </option>
            <option value="karachi">Karachi</option>
            <option value="lahore">Lahore</option>
          </select>
          {errors.city?.message && <p>{errors.city?.message}</p>}
        </div>

        {/* Row 3 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Select course or event
          </label>
          <select
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("course")}
          >
            <option disabled selected value="">
              Select course or event
            </option>
            <option value="agentic-ai">Agentic AI</option>
            <option value="shopify">Shopify Ecommerce</option>
            <option value="web-dev">Modern Web Application Development</option>
          </select>
          {errors.course?.message && <p>{errors.course?.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full name
          </label>
          <input
            type="text"
            placeholder="Full name"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("name")}
          />
          {errors.name?.message && <p>{errors.name?.message}</p>}
        </div>

        {/* Row 4 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Father name
          </label>
          <input
            type="text"
            placeholder="Father name"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("father-name")}
          />
          {errors["father-name"]?.message && (
            <p>{errors["father-name"]?.message}</p>
          )}
        </div>
        <div>
          {/* <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label> */}
          <input
            placeholder="Email"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            {...register("email")}
          />
          {errors.email?.message && <p>{errors.email?.message}</p>}
        </div>

        {/* Row 5 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone
          </label>
          <input
            type="text"
            placeholder="Phone"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("phone")}
          />
          {errors.phone?.message && <p>{errors.phone?.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            CNIC
          </label>
          <input
            type="text"
            placeholder="CNIC"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("cnic")}
          />
          {errors.cnic?.message && <p>{errors.cnic?.message}</p>}
        </div>

        {/* Row 6 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Father’s CNIC (optional)
          </label>
          <input
            type="text"
            placeholder="Father’s CNIC (optional)"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("father-cnic")}
          />
          {errors["father-cnic"]?.message && (
            <p>{errors["father-cnic"]?.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date of birth
          </label>
          <input
            type="date"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("dob")}
          />
          {errors.dob?.message && <p>{errors.dob?.message}</p>}
        </div>

        {/* Row 7 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Select your computer proficiency
          </label>
          <select
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("computer-proficiency")}
          >
            <option disabled selected value="">
              Select your computer proficiency
            </option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
          {errors["computer-proficiency"]?.message && (
            <p>{errors["computer-proficiency"]?.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Do you have a Laptop?
          </label>
          <select
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("laptop")}
          >
            <option disabled selected value="">
              Do you have a Laptop?
            </option>
            <option value="yes">YES</option>
            <option value="no">No</option>
          </select>
          {errors.laptop?.message && <p>{errors.laptop?.message}</p>}
        </div>

        {/* Row 8 */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            What is your last Qualification ?
          </label>
          <select
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("qualification")}
          >
            <option disabled selected value="">
              Last Qualification
            </option>
            <option value="matric">Matric</option>
            <option value="inter">Intermediate</option>
            <option value="graduate">Graduate</option>
          </select>
          {errors.qualification?.message && (
            <p>{errors.qualification?.message}</p>
          )}
        </div>

        {/* Row 9 */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Address
          </label>
          <input
            type="text"
            placeholder="Address"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("address")}
          />
          {errors.address?.message && <p>{errors.address?.message}</p>}
        </div>

        {/* Submit button */}
        <div className="md:col-span-2 flex justify-end mt-4">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
