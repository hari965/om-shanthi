import React from 'react';

const AsideBar = ({ children }) => {
    return (
        <aside className="sticky basis-1/5 top-[172px] h-[calc(85vh-172px)] p-8  overflow-y-scroll text-sm">
        <div className="flex flex-col gap-2 ml-8">
          <span className="font-semibold">On this Page</span>
          {children}
        </div>
      </aside>
    );
};

export default AsideBar;