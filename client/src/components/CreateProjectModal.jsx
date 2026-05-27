import { useState } from "react";

const CreateProjectModal = ({
  isOpen,
  onClose,
  onCreate,
}) => {

  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    onCreate({
      title,
      description,
    });

    setTitle("");
    setDescription("");

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-100">

      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 w-full max-w-lg">

        <h2 className="text-3xl font-bold mb-6">
          Create New Project
        </h2>

        <form
          onSubmit={submitHandler}
          className="space-y-5"
        >

          <input
            type="text"
            placeholder="Project Title"
            className="w-full bg-slate-800 border border-slate-700 p-4 rounded-xl outline-none focus:border-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            placeholder="Project Description"
            rows="5"
            className="w-full bg-slate-800 border border-slate-700 p-4 rounded-xl outline-none focus:border-blue-500"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <div className="flex justify-end gap-4">

            <button
              type="button"
              onClick={onClose}
              className="px-5 py-3 rounded-xl border border-slate-700"
            >
              Cancel
            </button>

            <button
              className="bg-blue-600 hover:bg-blue-700 transition-all px-6 py-3 rounded-xl font-semibold"
            >
              Create
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default CreateProjectModal;
