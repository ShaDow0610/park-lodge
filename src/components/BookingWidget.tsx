'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faUser, faDoorClosed, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function BookingWidget() {
  return (
    <div className="relative z-[5] mx-auto -mt-[58px] max-w-wrap px-5 md:px-8">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="grid grid-cols-1 gap-5 rounded border-t-2 border-brass-500 bg-stone-50 p-[22px] shadow-[0_24px_60px_-20px_rgba(20,31,16,0.35)] sm:grid-cols-2 md:grid-cols-[1fr_1fr_1fr_1fr_auto] md:items-end md:gap-[22px] md:p-[26px_30px]"
      >
        <label className="flex min-w-0 flex-col gap-2">
          <span className="flex items-center gap-1.5 text-[10.5px] uppercase tracking-[0.12em] text-grey-400">
            <FontAwesomeIcon icon={faCalendar} className="h-3 w-3 text-brass-500" /> Check-in
          </span>
          <input
            type="date"
            className="w-full min-w-0 border-0 border-b border-line bg-transparent py-1.5 text-[14.5px] text-ink-900 outline-none focus:border-brass-500"
          />
        </label>
        <label className="flex min-w-0 flex-col gap-2">
          <span className="flex items-center gap-1.5 text-[10.5px] uppercase tracking-[0.12em] text-grey-400">
            <FontAwesomeIcon icon={faCalendar} className="h-3 w-3 text-brass-500" /> Check-out
          </span>
          <input
            type="date"
            className="w-full min-w-0 border-0 border-b border-line bg-transparent py-1.5 text-[14.5px] text-ink-900 outline-none focus:border-brass-500"
          />
        </label>
        <label className="flex min-w-0 flex-col gap-2">
          <span className="flex items-center gap-1.5 text-[10.5px] uppercase tracking-[0.12em] text-grey-400">
            <FontAwesomeIcon icon={faUser} className="h-3 w-3 text-brass-500" /> Guests
          </span>
          <select className="w-full min-w-0 border-0 border-b border-line bg-transparent py-1.5 text-[14.5px] text-ink-900 outline-none focus:border-brass-500">
            <option>1 Guest</option>
            <option>2 Guests</option>
            <option>3 Guests</option>
            <option>4+ Guests</option>
          </select>
        </label>
        <label className="flex min-w-0 flex-col gap-2">
          <span className="flex items-center gap-1.5 text-[10.5px] uppercase tracking-[0.12em] text-grey-400">
            <FontAwesomeIcon icon={faDoorClosed} className="h-3 w-3 text-brass-500" /> Room Type
          </span>
          <select className="w-full min-w-0 border-0 border-b border-line bg-transparent py-1.5 text-[14.5px] text-ink-900 outline-none focus:border-brass-500">
            <option>Any</option>
            <option>Standard Room</option>
            <option>Executive Suite</option>
            <option>Self-Catering Apartment</option>
          </select>
        </label>
        <button
          type="submit"
          className="col-span-full flex items-center justify-center gap-2.5 whitespace-nowrap rounded-sm bg-brass-500 px-[26px] py-3.5 text-[13px] font-semibold uppercase tracking-[0.08em] text-pine-950 transition-colors hover:bg-brass-300 sm:col-span-2 md:col-span-1"
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} className="h-3.5 w-3.5" /> Check Availability
        </button>
      </form>
    </div>
  );
}
