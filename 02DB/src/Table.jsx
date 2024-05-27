import React from "react";
import "./Table.css";

function Table() {
    // Line 6 - 79 is a object/variable which contains the data about the employees
  const employeeData = [
    {
      Rank: 1,
      Name: "Rakesh Sharma",
      Designation: "UI/UX Designer",
      "No Of Hour Worked": "7(42)",
      Changes: "1.5hrs",
      isIncrease: true,
    },
    {
      Rank: 2,
      Name: "Ankita Thakur",
      Designation: "HR Recruiter",
      "No Of Hour Worked": "7(41)",
      Changes: "1.5hrs",
      isIncrease: false,
    },
    {
      Rank: 3,
      Name: "Sarah Yadav",
      Designation: "Product Manager",
      "No Of Hour Worked": "7(40)",
      Changes: "1.5hrs",
      isIncrease: true,
    },
    {
      Rank: 4,
      Name: "Harsha Shivhare",
      Designation: "Designer",
      "No Of Hour Worked": "7(37)",
      Changes: "1.5hrs",
      isIncrease: true,
    },
    {
      Rank: 5,
      Name: "Vanhi Rai",
      Designation: "Video Editor",
      "No Of Hour Worked": "7(37)",
      Changes: "1.5hrs",
      isIncrease: false,
    },
    {
      Rank: 6,
      Name: "Bhanu Sharma",
      Designation: "Business Analyst",
      "No Of Hour Worked": "7(32)",
      Changes: "1.5hrs",
      isIncrease: false,
    },
    {
      Rank: 7,
      Name: "Sunil Yadav",
      Designation: "Developer",
      "No Of Hour Worked": "7(24)",
      Changes: "1.5hrs",
      isIncrease: true,
    },
    {
      Rank: 8,
      Name: "Akash Roy",
      Designation: "Business Analyst",
      "No Of Hour Worked": "7(21)",
      Changes: "1.5hrs",
      isIncrease: false,
    },
    {
      Rank: 9,
      Name: "Rohit Soni",
      Designation: "Developer",
      "No Of Hour Worked": "7(18)",
      Changes: "1.5hrs",
      isIncrease: false,
    },
  ];
  //End of Data

  return (
    <>
      <div className="content">
        {/* Line 86 - 110: Adds the header and content for the employee activity table */}
        <table className="left">
          <thead>
            {/* Start of Header */}
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Designation</th>
              <th>No. of hours worked</th>
              <th>Changes</th>
            </tr>
            {/* End os Header */}
          </thead>

          <tbody>
            {/* Start of content of the table */}
            {/* Uses a loop to navigate to each data value in the 'employeeData' object and prints its */}
            {employeeData.map((item, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-white dark:border-white"
              >
                <td className="px-6 py-4">{item.Rank}</td>
                <td className="px-6 py-4">{item.Name}</td>
                <td className="px-6 py-4">{item.Designation}</td>
                <td className="px-6 py-4">{item["No Of Hour Worked"]}</td>
                <td className="px-6 py-4">{item.Changes}</td>
              </tr>
            ))}
            {/* End of content of the table */}
          </tbody>
        </table>
        {/* Line 118 - 139: Adding a div to show the Employee of the Month details */}
        <div className="right">
       
          <div className="employee-of-the-month-container">
            <div className="employee-of-the-month">
                {/* Displaying Employee Image */}
              <img
                src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1746"
                alt="Employee"
                className="employee-image"
              />
              {/* Displaying Employee Information */}
              <div className="employee-details">
                <h2 className="title">Employee of the Month</h2>
                <p className="name">Rakesh Sharma</p>
                <p className="designation">UI/UX Designer</p>
                {/* Displaying growth image */}
                <img
                  className="growth-image"
                  src="https://smartcity.eletsonline.com/wp-content/uploads/2014/04/growth-rate.jpg"
                  alt="Growth"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Table;
