import React from "react";

const InputForm = () => {
  return (
    <form className="bg-white shadow-md bg-tertiary rounded p-8 max-w-md">
      <div className="mb-4">
        <button class="bg-transparent hover:bg-primary text-primary font-semibold hover:text-tertiary py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          1 Tree
        </button>
      </div>
    </form>
  );
};

export default InputForm;
