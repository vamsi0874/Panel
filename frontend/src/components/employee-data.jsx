import React from 'react'
import { IKImage } from 'imagekitio-react'

export const EmployeeData = ({employee}) => {

  const urlEndpoint = import.meta.env.VITE_IMAGE_KIT_ENDPOINT
  return (
    <>
                  <td className="border p-2">{employee._id.slice(-3)}</td>
                  <td className="border p-2"><IKImage 
                  urlEndpoint={urlEndpoint}
                  src={`${employee.image}`} height={100} width={100}/></td>
                  <td className="border p-2">{employee.name}</td>
                  <td className="border p-2">{employee.email}</td>
                  <td className="border p-2">{employee.mobile}</td>
                  <td className="border p-2">{employee.designation}</td>
                  <td className="border p-2">{employee.gender}</td>
                  <td className="border p-2">{employee.course.join(', ')}</td>
                  <td className="border p-2">{new Date(employee.createdAt).toLocaleDateString()}</td>
    </>
  )
}
