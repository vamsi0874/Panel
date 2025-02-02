import React from 'react';

const EmployeeList = () => {
  return (
    <div className="bg-gray-50 text-gray-800 p-4 shadow-sm">
      <h1 className="text-2xl font-semibold mb-4">Employee List</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Position</th>
            <th className="py-2 px-4 border-b">Department</th>
          </tr>
        </thead>
        <tbody>
          {/* Example row */}
          <tr>
            <td className="py-2 px-4 border-b">John Doe</td>
            <td className="py-2 px-4 border-b">Software Engineer</td>
            <td className="py-2 px-4 border-b">Engineering</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;
