import atlassianRectangleImage from "../../assets/atlassian-rect.png";

function CompanyDetails() {
  return (
    <div className="py-8">
      <div className="flex items-center gap-3 py-[10px]">
        <img src={atlassianRectangleImage} alt="company logo" />
        <h3 className="text-[#4F4F4F] text-xl">Atlassian</h3>
      </div>
      <div className="max-w-[736px] flex items-center  gap-12 pt-4">
        <div className="flex flex-col gap-6 w-1/2">
          <CompanyDetailsText
            title="Company size"
            description="1k - 2k Employees"
          />
          <CompanyDetailsText
            title="Sector"
            description="Information Technology, Infrastructure"
          />
          <CompanyDetailsText title="Founded In" description="2019" />
        </div>
        {/* second */}
        <div className="flex flex-col gap-6 w-1/2">
          <CompanyDetailsText title="Type" description="Private" />
          <CompanyDetailsText title="Funding" description="Bootstrapped" />
          <CompanyDetailsText
            title="Funded By"
            description="Scott Farquhar, Mike Cannon-Brookes"
          />
        </div>
      </div>
    </div>
  );
}
export default CompanyDetails;

function CompanyDetailsText({ title, description }) {
  return (
    <div>
      <h4 className="text-sm text-[#6E6D6D] font-medium">{title}</h4>
      <p className="text-base text-custom-gray-800 font-medium">
        {description}
      </p>
    </div>
  );
}
