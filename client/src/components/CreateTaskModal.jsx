import { useState } from "react";

const CreateTaskModal = ({
  isOpen,
  onClose,
  onCreate,
}) => {

  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  const [status, setStatus] = useState("todo");


  const submitHandler = (e) => {
    e.preventDefault();

    onCreate({
      title,
      description,
      status,
    });

    setTitle("");
    setDescription("");
    setStatus("todo");

    onClose();
  };


  if (!isOpen) return null;


  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-5">

      <div className="relative w-full max-w-2xl bg-slate-900/95 border border-slate-800 rounded-[32px] overflow-hidden">

        {/* TOP GRADIENT */}
        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-500"></div>

        {/* GLOW */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full"></div>

        <div className="relative z-10 p-8">

          {/* HEADER */}
          <div className="flex items-center justify-between mb-10">

            <div>

              <h2 className="text-4xl font-black mb-3">
                Create Task
              </h2>

              <p className="text-slate-400">
                Add a new task to your workspace.
              </p>

            </div>

            <button
              onClick={onClose}
              className="w-12 h-12 rounded-2xl bg-slate-800 hover:bg-slate-700 transition-all text-xl"
            >
              ✕
            </button>

          </div>


          {/* FORM */}
          <form
            onSubmit={submitHandler}
            className="space-y-7"
          >

            {/* TITLE */}
            <div>

              <label className="block mb-3 text-slate-300 font-medium">
                Task Title
              </label>

              <input
                type="text"
                placeholder="Design dashboard UI..."
                className="w-full bg-slate-950 border border-slate-800 p-5 rounded-2xl outline-none focus:border-blue-500 transition-all"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

            </div>


            {/* DESCRIPTION */}
            <div>

              <label className="block mb-3 text-slate-300 font-medium">
                Description
              </label>

              <textarea
                rows="5"
                placeholder="Describe task requirements..."
                className="w-full bg-slate-950 border border-slate-800 p-5 rounded-2xl outline-none focus:border-blue-500 transition-all resize-none"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />

            </div>


            {/* STATUS */}
            <div>

              <label className="block mb-3 text-slate-300 font-medium">
                Status
              </label>

              <select
                className="w-full bg-slate-950 border border-slate-800 p-5 rounded-2xl outline-none focus:border-blue-500 transition-all"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="todo">
                  Todo
                </option>

                <option value="progress">
                  In Progress
                </option>

                <option value="done">
                  Done
                </option>

              </select>

            </div>


            {/* BUTTONS */}
            <div className="flex justify-end gap-5 pt-4">

              <button
                type="button"
                onClick={onClose}
                className="px-8 py-4 rounded-2xl border border-slate-700 hover:border-slate-500 transition-all"
              >
                Cancel
              </button>

              <button
                className="relative overflow-hidden bg-blue-600 hover:bg-blue-700 transition-all px-10 py-4 rounded-2xl font-bold shadow-2xl shadow-blue-500/20"
              >
                Create Task
              </button>

            </div>

          </form>

        </div>

      </div>

    </div>
  );
};

export default CreateTaskModal;
