import { useNavigate } from "@remix-run/react";
import React from "react";

export const JobFilter = ({ locations, companies }) => {
    const navigate = useNavigate();
    const [contractType, setContractType] = React.useState('')
    const [contractLength, setContractLength] = React.useState('')
    const [location, setLocation] = React.useState('')
    const [company, setCompany] = React.useState('')

    React.useEffect(() => {
      let filterURL = `/jobs?`

      if(contractType) filterURL += `contractType=${contractType}&`
      if(contractLength) filterURL += `contractLength=${contractLength}&`
      if(location) filterURL += `location=${location}%`
      if(company) filterURL += `company=${company}`

      navigate(filterURL)
    }, [contractType, contractLength, location, company])

    return (
        <div>
            <div className="form-control w-full">
            <label className="label">Contract Type</label>
            <select onClick={(event) => {
                setContractType(event.currentTarget.value)
            }} name="contractType" className="select select-secondary text-black">
              <option value='' >
                All Types
              </option>
              <option  value='Full-time'>Full-time</option>
              <option  value='Part-time'>Part-time</option>
            </select>
          </div>

          <div className="form-control w-full">
            <label className="label">Contract Length</label>
            <select onClick={(event) => {
                setContractLength(event.currentTarget.value)
            }} name="contractLength" className="select select-secondary text-black">
              <option value=''>
                All Lengths
              </option>
              <option value='Permanent'>Permanent</option>
              <option value='12 Months'>12 Months</option>
              <option value='6 Months'>6 Months</option>
              <option value='3 Months'>3 Months</option>
            </select>
          </div>

          <div className="form-control w-full">
            <label className="label">Location</label>
            <select onClick={(event) => {
                setLocation(event.currentTarget.value)
            }} name="location" className="select select-secondary text-black">
              <option value=''>
                All Locations
              </option>
                {locations.map((location: Record<'location', string>, index: number) => {
                    return <option key={index} value={location.location}>{location.location}</option>
                })}
            </select>
          </div>

          <div className="form-control w-full">
            <label className="label">Company</label>
            <select onClick={(event) => {
                setCompany(event.currentTarget.value)
            }} name="company" className="select select-secondary text-black">
              <option value=''>
                All Companies
              </option>
                {companies.map((company: Record<'name', string>, index: number) => {
                    return <option key={index} value={company.name}>{company.name}</option>
                })}
            </select>
          </div>
        </div>
    )
}
