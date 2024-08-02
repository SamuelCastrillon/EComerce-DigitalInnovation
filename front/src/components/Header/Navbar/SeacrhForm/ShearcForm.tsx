import React from "react";

const ShearcForm: React.FC = () => {
  return (
    <form className="flex justify-between bg-white rounded w-fit">
      <input
        type="text"
        placeholder="Search Product..."
        className="p-1 w-[95%] text-sm rounded border-none"></input>
      <div className="flex items-center">
        <span className="mb-1 mr-1 text-xl font-semibold text-lime-600">|</span>
        <button type="submit" className="w-7">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJyZ2IoMTAxIDE2MyAxMykiIGQ9Ik0xNS41IDE0aC0uNzlsLS4yOC0uMjdhNi41IDYuNSAwIDAgMCAxLjQ4LTUuMzRjLS40Ny0yLjc4LTIuNzktNS01LjU5LTUuMzRhNi41MDUgNi41MDUgMCAwIDAtNy4yNyA3LjI3Yy4zNCAyLjggMi41NiA1LjEyIDUuMzQgNS41OWE2LjUgNi41IDAgMCAwIDUuMzQtMS40OGwuMjcuMjh2Ljc5bDQuMjUgNC4yNWMuNDEuNDEgMS4wOC40MSAxLjQ5IDBjLjQxLS40MS40MS0xLjA4IDAtMS40OXptLTYgMEM3LjAxIDE0IDUgMTEuOTkgNSA5LjVTNy4wMSA1IDkuNSA1UzE0IDcuMDEgMTQgOS41UzExLjk5IDE0IDkuNSAxNCIvPjwvc3ZnPg=="
            alt="Shearch button"
          />
        </button>
      </div>
    </form>
  );
};

export default ShearcForm;
