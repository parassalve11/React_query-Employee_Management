import React, { useState } from "react";
import { InputProps } from "./ui/input";
import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";
import { FloatingLabelInput } from "./FloatingInput";


const PasswordInput = React.forwardRef<HTMLInputElement , InputProps>(
    ({className,type,...props} ,ref) =>{
        const[showPassword,setShowPassword] = useState(false);

        return(
            <div className="relative">
                <FloatingLabelInput 
                label="Password"
                type={showPassword ?'text':'password'}
                className={cn('pe-10',className)}
                ref={ref}
                {...props}
                />
                <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-16 top-1/4 -translate-1/2 transform text-muted-foreground"
                >
                    {showPassword ? <Eye className="size-5"  /> : <EyeOff className="size-5" />}
                </button>
            </div>
        )


    }
);

PasswordInput.displayName = 'PasswordInput';

export{PasswordInput}