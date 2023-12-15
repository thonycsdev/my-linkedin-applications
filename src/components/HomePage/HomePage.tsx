import React from "react";

function HomePage() {
  return (
    <div className="w-3/4 flex flex-col items-center h-auto rounded-2xl bg-gray-100 bg-opacity-75 mx-auto mt-10 p-12">
      <div className="text-3xl font-light">My Linkedin Applications</div>
      <main className="flex flex-col items-center justify-center text-xl text-center gap-16 pt-10">
        <p>
          To track all my LinkedIn applications, I have developed a project
          called
          <b> "My LinkedIn Applications"</b>.
        </p>
        <p>
          This project is built using React and consists of a homepage component
          where I can view and manage all my applications. The homepage displays
          a list of applications with relevant details such as the company name,
          position applied for, and application status.
        </p>
        <p>
          Additionally, I have implemented features to add new applications,
          update existing ones, and track the progress of each application. With
          this project, I can easily keep track of my LinkedIn applications and
          stay organized throughout the job application process.
        </p>
      </main>
    </div>
  );
}

export default HomePage;
