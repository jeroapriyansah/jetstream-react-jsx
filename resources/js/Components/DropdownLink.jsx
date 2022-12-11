import { InertiaLink } from '@inertiajs/inertia-react';

export default function DropdownLink({ as, href, children }) {
  return (
    <div>
      {(() => {
        switch (as) {
          case 'button':
            return (
              <button
                type="submit"
                className="block w-full px-4 py-2 text-sm leading-5 text-gray-700 text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition"
              >
                {children}
              </button>
            );
          case 'a':
            return (
              <a
                href={href}
                className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition"
              >
                {children}
              </a>
            );
          default:
            return (
              <InertiaLink
                href={href || ''}
                className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition"
              >
                {children}
              </InertiaLink>
            );
        }
      })()}
    </div>
  );
}
