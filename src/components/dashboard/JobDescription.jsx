import { Ellipse } from "./Content";

function JobDescription() {
  return (
    <div className="py-8">
      <h5 className="text-sm text-[#6E6D6D] font-medium pb-2">About the job</h5>
      <div className="text-custom-gray-800 text-base font-medium leading-7">
        <ol>
          <li>1. Handle the UI/UX research design</li>
          <li>
            2. Work on researching on latest web applications design & trends
          </li>
          <li>3. Work on conceptualizing and visualizing</li>
          <li>
            4. Work on creating graphics content and other graphics related
            works
          </li>
        </ol>
        <p>Benefits:</p>
        <ul>
          <li className="flex items-center gap-1">
            <Ellipse fill="#6E6D6D" /> Health insurance
          </li>
          <li className="flex items-center gap-1">
            <Ellipse fill="#6E6D6D" /> Provident fund
          </li>
        </ul>
        <p>Schedule:</p>
        <ul>
          <li className="flex items-center gap-1">
            <Ellipse fill="#6E6D6D" /> Day shift
          </li>
        </ul>
        <p>Supplemental pay types:</p>
        <ul>
          <li className="flex items-center gap-1">
            <Ellipse fill="#6E6D6D" /> Performance bonus
          </li>
          <li className="flex items-center gap-1">
            <Ellipse fill="#6E6D6D" /> Yearly bonus
          </li>
        </ul>
        <p>Work location: In person</p>
      </div>
    </div>
  );
}
export default JobDescription;
