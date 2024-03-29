import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { MdClose } from "react-icons/md";

function Sidebar() {
  const [open, setOpen] = useState(true);
  useEffect(() => {
    // settimeout to close the sidebar after 3 seconds
    const timeout = setTimeout(() => {
      // setOpen(true);
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [open]);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-100 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full">
              <Transition.Child
                as={Fragment}
                // enter from left to right and leave from right to left
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-72">
                  <div className="flex h-full flex-col overflow-y-auto bg-white py-6 shadow-xl">
                    <div className="px-4 flex justify-between ">
                      <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                        Panel title
                      </Dialog.Title>
                      <button
                        type="button"
                        className="relative rounded-md text-gray-300 hover:text-black focus:outline-none focus:ring-2 focus:ring-gray-100"
                        onClick={() => setOpen(false)}
                      >
                        <MdClose size={24} aria-hidden="true" />
                      </button>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      {/* Your content */}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default Sidebar;
