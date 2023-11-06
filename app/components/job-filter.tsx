import { useNavigate } from "@remix-run/react";

export const JobFilter = ({ locations }) => {
    const navigate = useNavigate();
   
    return (
        <div>
            <div className="form-control w-full">
            <label className="label">Contract Type</label>
            <select onClick={(event) => {
                navigate(`/jobs?contractType=${event.currentTarget.value}`)
            }} name="contractType" className="select select-bordered">
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
                navigate(`/jobs?contractLength=${event.currentTarget.value}`)
            }} name="contractLength" className="select select-bordered">
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
                navigate(`/jobs?location=${event.currentTarget.value}`)
            }} >
                {locations.map((location: Record<'location', string>) => {
                    return <option value={location.location}>{location.location}</option>
                })}
            </select>
            </div>
        </div>
    )
}
