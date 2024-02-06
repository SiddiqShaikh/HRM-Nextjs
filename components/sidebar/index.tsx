import Image from "next/image";
import { CiFolderOn } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { MdOutlineSettings } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";

export default function Sidebar() {
  return (
    <div className="h-screen sticky top-0 w-64 bg-[#29A095] bg-[url('/images/siderb.png')] bg-opacity-75 text-white">
      <div className="text-xl font-bold p-4">
        <Image src="/images/hcmsider.png" alt="" width={122} height={100} />
      </div>
      <hr className="bg-white mx-6 mb-4" />
      {/* <nav>
        <ul className="font-bold">
          <li className="p-4 hover:bg-gray-600  flex items-center cursor-pointer">
            <RxDashboard size={22}/>
            <p className="ml-1 flex-1">Dashboard</p>
            <FaChevronDown />
          </li>
          <li className="p-4 hover:bg-gray-600 flex items-center cursor-pointer">
            <MdOutlineSettings size={22} />
            <p className="ml-1 flex-1">Attendance</p>
            <FaChevronDown  />
          </li>
        </ul>
      </nav> */}
      <ul className="menu">
        <li>
          <details>
            <summary>
              <RxDashboard size={22} /> Dashboard
            </summary>
            <ul>
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
              <li></li>
            </ul>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <MdOutlineSettings size={22} /> Attendance
            </summary>
            <ul>
              <li>
                <a>Attendance Request</a>
              </li>
              <li>
                <a>My Attendance</a>
              </li>
              <li>
                <a>Attendance Request</a>
              </li>
              <li>
                <a>My Shift Time</a>
              </li>
              <li>
                <a>Remote Work Request</a>
              </li>
              <li></li>
            </ul>
          </details>
        </li>
        <li>
          <details>
            <summary>
            <CiFolderOn size={22} /> Leave
            </summary>
            <ul>
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
              <li></li>
            </ul>
          </details>
        </li>
        <li>
          <details>
            <summary>
            <HiOutlineComputerDesktop size={22} /> Recruitment
            </summary>
            <ul>
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
              <li></li>
            </ul>
          </details>
        </li>
        <li>
          <details>
            <summary>
            <CiFolderOn size={22} />  Payroll
            </summary>
            <ul>
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
              <li></li>
            </ul>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <MdOutlineSettings size={22} /> Loan
            </summary>
            <ul>
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
              <li></li>
            </ul>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <MdOutlineSettings size={22} /> Others
            </summary>
            <ul>
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
              <li></li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  );
}
