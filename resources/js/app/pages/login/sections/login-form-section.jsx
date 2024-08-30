import Input from '@/app/_components/input';
import Select from '@/app/_components/select';
import React, { useEffect, useState } from 'react'

export default function LoginFormSection() {

    const [form, setForm] = useState({})

    useEffect(() => {
        setForm({
            email: "",
            password: ""
        })
    }, []);

    function form_handler(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    console.log('form', form)
    return (
        <div>
            <form action="#" method="POST" className="space-y-6">
                <Input
                    name="email"
                    type="text"
                    onChange={form_handler}
                    value={form?.email ?? ""}
                    required={true}
                />
<Input
                    name="password"
                    type="password"
                    onChange={form_handler}
                    value={form?.password ?? ""}
                    required={true}
                />


                {/* <div>
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                        Password
                    </label>
                    <div className="mt-2">
                        <input
                            name="password"
                            type="password"
                            onChange={form_handler}
                            value={form.password ?? ""}
                            required
                            autoComplete="current-password"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div> */}

                <Select
                    label="Country"
                    onChange={form_handler}
                    name="country"
                    data={[
                        {name:"", value:""},
                        {name:"United States", value:"United States"},
                        {name:"Philippines", value:"Philippines"}
                    ]}
                />

                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label htmlFor="remember-me" className="ml-3 block text-sm leading-6 text-gray-900">
                            Remember me
                        </label>
                    </div>

                    <div className="text-sm leading-6">
                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                            Forgot password?
                        </a>
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Sign in
                    </button>
                </div>
            </form>
        </div>
    )
}
