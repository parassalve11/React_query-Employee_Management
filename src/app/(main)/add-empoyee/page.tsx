import AddEmployeForm from "./AddEmpoyeeForm";




export default function AddEmployeePage(){
    return(
        <div className=" flex items-center justify-center p-5">
            <div className="flex h-full w-full max-h-[40rem] max-w-[80rem] overflow-hidden bg-card rounded-2xl shadow-md">
                <div className="w-full overflow-y-auto p-10 space-y-10 ">
                    <div className=" space-y-1">
                        <h1 className="text-3xl font-bold">Add Employee</h1>
                        <p className="text-muted-foreground text-xs">a place were admin can add products.</p>
                    </div>
                    <div className="space-y-5">
                        <AddEmployeForm />
                    </div>
                </div>
            </div>
        </div>
    )
}