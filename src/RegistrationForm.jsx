import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useForm } from "react-hook-form"

export default function RegistrationForm() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <form className="w-full max-w-5xl bg-white p-8 rounded-xl border border-gray-200 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Row 1 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Select country
          </label>
          <select className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option disabled>Select country</option>
            <option>Pakistan</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Select class preference
          </label>
          <select className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option disabled>Select class preference</option>
            <option>Online</option>
            <option>Onsite</option>
          </select>
        </div>

        {/* Row 2 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Select gender
          </label>
          <select className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option disabled>Select gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Select city
          </label>
          <select className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option disabled>Select city</option>
            <option>Karachi</option>
            <option>Lahore</option>
          </select>
        </div>

        {/* Row 3 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Select course or event
          </label>
          <select className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option disabled>Select course or event</option>
            <option>Agentic AI</option>
            <option>Shopify Ecommerce</option>
            <option>Modern Web Application Development</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full name
          </label>
          <input
            type="text"
            placeholder="Full name"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
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
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
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
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            CNIC
          </label>
          <input
            type="text"
            placeholder="CNIC"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
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
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date of birth
          </label>
          <input
            type="date"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Row 7 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Select your computer proficiency
          </label>
          <select className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option disabled>Select your computer proficiency</option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Do you have a Laptop?
          </label>
          <select className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option disabled>Do you have a Laptop?</option>
            <option>YES</option>
            <option>No</option>
          </select>
        </div>

        {/* Row 8 */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Last qualification
          </label>
          <input
            type="text"
            placeholder="Last qualification"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
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
          />
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
