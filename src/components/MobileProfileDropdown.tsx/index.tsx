import { Disclosure } from '@headlessui/react';
import { BellIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { classNames } from '@/util';
import { NAVIGATION, USER_NAVIGATION } from '@/constants/navigation';

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};

export default function MobileProfileDropdown() {
  return (
    <Disclosure.Panel className="md:hidden">
      <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
        {NAVIGATION.map((item) => (
          <Disclosure.Button
            key={item.name}
            as="a"
            href={item.href}
            className={classNames(
              item.current
                ? 'bg-gray-900 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
              'block rounded-md px-3 py-2 text-base font-medium'
            )}
            aria-current={item.current ? 'page' : undefined}
          >
            {item.name}
          </Disclosure.Button>
        ))}
      </div>
      <div className="border-t border-gray-700 pb-3 pt-4">
        <div className="flex items-center px-5">
          <div className="flex-shrink-0">
            <Image
              className="h-10 w-10 rounded-full"
              src={user.imageUrl}
              alt=""
              width={80}
              height={80}
            />
          </div>
          <div className="ml-3">
            <div className="text-base font-medium leading-none text-white">
              {user.name}
            </div>
            <div className="text-sm font-medium leading-none text-gray-400">
              {user.email}
            </div>
          </div>
          <button
            type="button"
            className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            <span className="absolute -inset-1.5" />
            <span className="sr-only">View notifications</span>
            <BellIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-3 space-y-1 px-2">
          {USER_NAVIGATION.map((item) => (
            <Disclosure.Button
              key={item.name}
              as="a"
              href={item.href}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
            >
              {item.name}
            </Disclosure.Button>
          ))}
        </div>
      </div>
    </Disclosure.Panel>
  );
}
