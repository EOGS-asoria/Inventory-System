import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { UserPlusIcon } from '@heroicons/react/24/outline'
import Select from '@/app/_components/select'
import Input from '@/app/_components/input'

export default function UsersCreateSection() {
    const [open, setOpen] = useState(false)
    return (
        <>
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold leading-6 text-gray-900">Users</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        A list of all the users in your account including their name, title, email and role.
                    </p>
                </div>
                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">

                    <button
                        type="button"
                        onClick={() => setOpen(true)}
                        className="inline-flex rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        <UserPlusIcon aria-hidden="true" className="-ml-0.5 mr-1 h-5 w-5" />
                        Add user
                    </button>
                </div>
            </div>
            <Dialog open={open} onClose={setOpen} className="relative z-10">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
                />

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <DialogPanel
                            transition
                            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-3xl data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                        >
                            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                <div>
                                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                        <div className='flex gap-2'>
                                            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                                                <UserPlusIcon aria-hidden="true" className="h-7 w-7 text-blue-600" />
                                            </div>
                                            <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                                New User
                                            </DialogTitle>
                                        </div>

                                        <div className='flex flex-1 w-full gap-2'>
                                            <div className="mt-5 w-full">


                                                <Input
                                                    name="name"
                                                    type="text"
                                                    required
                                                    label="Name"
                                                />

                                            </div>
                                            <div className="mt-5 w-full">


                                                <Input
                                                    name="email"
                                                    type="email"
                                                    required
                                                    label="Email"
                                                />

                                            </div>
                                        </div>
                                        <div className="mt-5">
                                            <Select
                                                // onChange={formHandler}
                                                name='department'
                                                // value={form.isHasEmail}
                                                label='Department'
                                                errorMessage=''
                                                data={[
                                                    {
                                                        value: '',
                                                        name: ''
                                                    },
                                                    {
                                                        value: 'I.T Department',
                                                        name: 'I.T Department'
                                                    },
                                                    {
                                                        value: 'HR Department',
                                                        name: 'HR Department'
                                                    },
                                                    {
                                                        value: 'Operations',
                                                        name: 'Operations'
                                                    }
                                                ]}
                                            />
                                        </div>
                                        <div className="mt-5">
                                        <Select
                                                // onChange={formHandler}
                                                name='role'
                                                // value={form.isHasEmail}
                                                label='Role'
                                                errorMessage=''
                                                data={[
                                                    {
                                                        value: '',
                                                        name: ''
                                                    },
                                                    {
                                                        value: 'Admin',
                                                        name: 'Admin'
                                                    },
                                                    {
                                                        value: 'User',
                                                        name: 'User'
                                                    }
                                                ]}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button
                                    type="button"
                                    onClick={() => setOpen(false)}
                                    className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                                >
                                    Save
                                </button>
                                <button
                                    type="button"
                                    data-autofocus
                                    onClick={() => setOpen(false)}
                                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                >
                                    Cancel
                                </button>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    )
}