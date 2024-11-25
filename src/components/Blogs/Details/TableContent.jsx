'use client';

import Link from 'next/link';
import { useEffect } from 'react';

const TableContent = ({ data }) => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Loop through each content section with an ID
      document.querySelectorAll('[id]').forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        // Check if the section is in the viewport
        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          // Get the corresponding table of content link
          const tocLink = document.querySelector(`a[href="#${section.id}"]`);

          // Highlight the corresponding table of content link
          if (tocLink) {
            // Remove highlight from all links
            document
              .querySelectorAll('#table-of-contents a')
              .forEach((link) => {
                link.classList.remove('activeLink');
              });

            // Add highlight to the current link
            tocLink.classList.add('activeLink');
          }
        }
      });
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="p-4 border border-[#00000021] rounded-[15px] h-auto">
      <h6 className="font-poppins text-[13px] font-[600] 2xl:text-[15px]">
        TABLE OF CONTENTS
      </h6>

      <div
        className="mt-6 flex flex-col gap-2 2xl:gap-4"
        id="table-of-contents"
      >
        {data.map((e, i) => (
          <Link
            href={e.link}
            key={i}
            className="text-[#263238] font-poppins text-[10px] 2xl:text-[13px] font-normal"
          >
            {e.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TableContent;
