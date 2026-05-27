import { useState } from "react";

const TaskDetailsModal = ({
  task,
  isOpen,
  onClose,
  onComment,
  users,
  onAssign,
}) => {

  const [comment, setComment] = useState("");

  if (!isOpen || !task) return null;


  const submitHandler = (e) => {
    e.preventDefault();

    if (!comment.trim()) return;

    onComment(task._id, comment);

    setComment("");
  };


  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-5">

      <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-[32px] overflow-hidden">

        {/* GLOW */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[140px] rounded-full"></div>

        <div className="relative z-10 p-8">

          {/* HEADER */}
          <div className="flex items-start justify-between mb-10">

            <div>

              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm mb-5">
                Workspace Task
              </div>

              <h2 className="text-4xl font-black mb-4">
                {task.title}
              </h2>

              <p className="text-slate-400 text-lg">
                {task.description}
              </p>

            </div>

            <button
              onClick={onClose}
              className="w-12 h-12 rounded-2xl bg-slate-800 hover:bg-slate-700 transition-all"
            >
              ✕
            </button>

          </div>

          {/* ASSIGN USER */}
          <div className="mb-10">

            <h3 className="text-2xl font-bold mb-5">
              Assign Team Member
            </h3>

            <div className="flex gap-4">

              <select
                onChange={(e) => onAssign(task._id, e.target.value)}
                className="flex-1 bg-slate-950 border border-slate-800 p-5 rounded-2xl outline-none focus:border-blue-500 transition-all"
                value={task.assignedTo?._id || ""}
              >

                <option value="">
                  Select Team Member
                </option>

                {users.map((user) => (

                  <option
                    key={user._id}
                    value={user._id}
                  >
                    {user.name}
                  </option>

                ))}

              </select>

            </div>

          </div>


          {/* COMMENTS */}
          <div className="mb-8">

            <h3 className="text-2xl font-bold mb-6">
              Team Discussion
            </h3>

            <div className="space-y-5 max-h-[350px] overflow-y-auto pr-2">

              {task.comments?.length === 0 ? (

                <div className="text-slate-500">
                  No comments yet.
                </div>

              ) : (

                task.comments.map((comment, index) => (

                  <div
                    key={index}
                    className="bg-slate-950 border border-slate-800 rounded-2xl p-5"
                  >

                    <div className="flex items-center gap-4 mb-3">

                      <div className="w-12 h-12 rounded-full bg-blue-500"></div>

                      <div>

                        <h4 className="font-semibold">
                          {comment.user?.name || "User"}
                        </h4>

                        <p className="text-slate-500 text-sm">
                          Team Member
                        </p>

                      </div>

                    </div>

                    <p className="text-slate-300 leading-relaxed">
                      {comment.text}
                    </p>

                  </div>

                ))

              )}

            </div>

          </div>


          {/* ADD COMMENT */}
          <form
            onSubmit={submitHandler}
            className="flex gap-4"
          >

            <input
              type="text"
              placeholder="Write a comment..."
              className="flex-1 bg-slate-950 border border-slate-800 p-5 rounded-2xl outline-none focus:border-blue-500 transition-all"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />

            <button
              className="bg-blue-600 hover:bg-blue-700 transition-all px-8 rounded-2xl font-semibold"
            >
              Send
            </button>

          </form>

        </div>

      </div>

    </div>
  );
};

export default TaskDetailsModal;
