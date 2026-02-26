import { FaDollarSign } from "react-icons/fa"
import { useForm } from "react-hook-form"
import { Link } from "react-router";

const Login = () => {


    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => console.log(data)



    return <section className="container mx-auto p-5 min-h-screen w-full flex items-center justify-center">

        <div className="max-w-120 w-full  border border-gray-200 rounded-lg flex flex-col px-6 py-8 items-center">


            {/* Logo part  */}
            <div className="flex items-center flex-col">
                <FaDollarSign className="text-4xl text-green-600" />
                <span className="font-bold text-lg mt-2">Fund Savings</span>
                <p className="mt-4 font-normal">Login to access your dashboard</p>
            </div>


            {/* Inputs */}
            <form className="mt-6 w-full" onSubmit={handleSubmit(onSubmit)}>

                <div >
                    <label htmlFor="email">
                        <span className="font-medium mb-1 block">Email</span>
                        <input className={`w-full outline-green-600 border ${errors?.email ? "border-red-500" : "border-gray-200"} rounded-md px-3 py-2`} type="email" name="email" {...register("email", { required: true })} placeholder="example@email.com" />
                    </label>
                    {errors?.email?.type == "required" && <span className=" text-xs font-medium text-red-500">Email address is required</span>}
                </div>

                <div className="mt-2" >
                    <label htmlFor="password">
                        <span className="font-medium mb-1 block">Password</span>
                        <input className={`w-full outline-green-600 border ${errors?.password ? "border-red-500" : "border-gray-200"} rounded-md px-3 py-2`} type="password" name="password" {...register("password", { required: true, minLength: 6 })} placeholder="Enter your password" />
                    </label>
                    {errors?.password?.type == "required" && <span className=" text-xs font-medium text-red-500">Password is required</span>}
                    {errors?.password?.type == "minLength" && <span className=" text-xs font-medium text-red-500">Password must be at least 6 character</span>}
                </div>

                <input className="w-full mt-5 font-medium bg-green-600 hover:bg-green-700 rounded-md py-2 text-white cursor-pointer transition-all duration-300" type="submit" value="Login" />

            </form>

            <p className="mt-8 text-base">Don't have an account? <Link to={"/register"} className="text-green-600 hover:underline">Register</Link></p>

        </div>


    </section>


}

export default Login