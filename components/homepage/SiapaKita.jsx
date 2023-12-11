import React from "react";

const SiapaKita = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-semibold mb-6">About Us</h2>
          <p className="text-gray-700 text-center max-w-2xl mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget
            ex eu ante commodo ultrices. Fusce commodo consequat dolor, vel
            sagittis urna tristique id.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src="https://placekitten.com/200/200" // Replace with team member image URL
                alt="Team Member 1"
                className="rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">John Doe</h3>
              <p className="text-gray-600">Co-Founder</p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src="https://placekitten.com/201/201" // Replace with team member image URL
                alt="Team Member 2"
                className="rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
              <p className="text-gray-600">Lead Developer</p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src="https://placekitten.com/202/202" // Replace with team member image URL
                alt="Team Member 3"
                className="rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Bob Johnson</h3>
              <p className="text-gray-600">Marketing Specialist</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SiapaKita;
