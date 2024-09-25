import EmployeRow from "@/components/EmpoyeeRow";
import db from "@/lib/db"




interface SearchPageProps{
    searchParams:{q:string}
};

export default async function SearchPage({searchParams:{q}}:SearchPageProps){
    const employee = await db.empoylee.findMany({
        where:{
            OR:[
                {name:{contains:q,mode:'insensitive'}}
            ]
        },
        orderBy:{id:'desc'}
    });

    if(employee.length === 0){
        return <p className="text-3xl text-center font-bold">Empoyee not existes.</p>
    }

    return(
        <div className=' flex justify-center items-center'>
        
    <div className="flex flex-col gap-y-10">
        <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
                <div className="border rounded-lg shadow overflow-hidden ">
                
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
    )
}