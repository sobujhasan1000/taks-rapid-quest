import Link from "next/link";

const CommonLayOut = ({ children }) => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col ">
        {/* Page content here */}
        {children}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-40 min-h-full bg-cyan-200 text-base-content space-y-6">
          {/*site bar  */}

          <li>
            <Link href="/">home</Link>
          </li>
          <li>
            <Link href="/">Dashboard Home</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default CommonLayOut;
