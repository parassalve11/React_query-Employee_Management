import AddEmpolyeeDialog from "@/components/AddEmpolyeeDiaLog";
import EmployeRow from "@/components/EmpoyeeRow";
import db from "@/lib/db";
import Link from "next/link";
import AddEmployeePage from "./add-empoyee/page";


export default async function Home() {

  const employee = await db.empoylee.findMany({
    orderBy:{id:'desc'}
  })
  return (
    <div className=' flex flex-col w-full  '>
        
    <div className="flex flex-col gap-y-10 ">
    <AddEmployeePage />
        <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
                <div className="border rounded-lg shadow overflow-hidden ">
                
                    <div className="p-2 bg-gray-50 border-b flex gap-2 items-center">
                        <Link href='/'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </Link>
                        <h1 className=' text-center text-2xl font-semibold'>Employee Detail List</h1>
                    </div>
                    <table className=" w-full divide-y divide-gray-200 ">
                        <thead className="bg-gray-50 ">
                            <tr>
                              
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase "
                                >
                                    Name
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase "
                                >
                                    Email
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase "
                                >
                                    Address
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase "
                                >
                                    Salary
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase "
                                >
                                    Action
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase "
                                >
                                    Delete/Action
                                </th>
                            </tr>
                        </thead>
                        {employee.map((employe) =>(
                          <EmployeRow emaploye={employe} key={employe.id} />
                        ))}
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}
