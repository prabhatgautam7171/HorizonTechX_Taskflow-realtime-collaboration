import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import api from "../services/api";

import { logout } from "../redux/slices/authSlice";

import CreateProjectModal from "../components/CreateProjectModal";
import { useNavigate } from "react-router-dom";


const Home = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [projects, setProjects] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const fetchProjects = async () => {
    try {

      const { data } = await api.get("/projects", {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      });

      setProjects(data);

    } catch (error) {
      console.log(error);
    }
  };


  const createProjectHandler = async (projectData) => {
    try {

      const { data } = await api.post(
        "/projects",
        projectData,
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );

      setProjects([data, ...projects]);

    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    fetchProjects();
  }, []);

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-500/20 blur-[120px] rounded-full"></div>

      {/* NAVBAR */}
      <nav className="relative z-10 flex items-center justify-between px-8 lg:px-20 py-6 border-b border-slate-800">

        <h1 className="text-3xl font-bold tracking-wide">
          TaskFlow
        </h1>

        <div className="flex items-center gap-4">
          <button className="text-slate-300 hover:text-white transition-all">
            Features
          </button>

          <button className="text-slate-300 hover:text-white transition-all">
            About
          </button>

          <button
            onClick={logoutHandler}
            className="bg-red-500 hover:bg-red-600 transition-all px-5 py-2 rounded-xl font-medium"
          >
            Logout
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative z-10 px-8 lg:px-20 pt-10 pb-20">

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>

            <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 px-4 py-2 rounded-full mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>

              <span className="text-sm text-slate-300">
                Real-time Team Collaboration
              </span>
            </div>

            <h1 className="text-6xl lg:text-7xl font-black leading-tight mb-8">
              Manage Work
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500">
                Smarter & Faster
              </span>
            </h1>

            <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-xl">
              Create projects, assign tasks, collaborate with your team,
              and track progress in real-time with a modern productivity platform.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-5">

              <button className="bg-blue-600 hover:bg-blue-700 transition-all px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg shadow-blue-500/20">
                Start Managing
              </button>

              <button className="border border-slate-700 hover:border-slate-500 transition-all px-8 py-4 rounded-2xl font-semibold text-lg bg-slate-900/40 backdrop-blur-md">
                Live Demo
              </button>
            </div>

            {/* STATS */}
            <div className="flex gap-12 mt-16">

              <div>
                <h2 className="text-4xl font-bold mb-1">10K+</h2>
                <p className="text-slate-400">Tasks Managed</p>
              </div>

              <div>
                <h2 className="text-4xl font-bold mb-1">2K+</h2>
                <p className="text-slate-400">Teams Collaborating</p>
              </div>

              <div>
                <h2 className="text-4xl font-bold mb-1">99%</h2>
                <p className="text-slate-400">Productivity Boost</p>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE PREMIUM 3D UI */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex items-center justify-center perspective-[2500px]"
          >

            {/* BACKGROUND GLOW */}
            <div className="absolute w-[500px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full"></div>

            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-violet-500/10 blur-[140px] rounded-full"></div>

            {/* FLOATING CUBE 1 */}
            <motion.div
              animate={{
                y: [0, -25, 0],
                rotate: [0, 8, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-14 -right-10 w-28 h-28 rounded-[30px] bg-gradient-to-br from-blue-500/20 to-violet-500/20 border border-blue-500/20 backdrop-blur-2xl shadow-2xl"
            />

            {/* FLOATING CUBE 2 */}
            <motion.div
              animate={{
                y: [0, 30, 0],
                rotate: [0, -10, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/2 -left-16 w-20 h-20 rounded-[24px] bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/20 backdrop-blur-2xl shadow-2xl"
            />

            {/* FLOATING CUBE 3 */}
            <motion.div
              animate={{
                y: [0, -18, 0],
                x: [0, 12, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-10 right-10 w-16 h-16 rounded-[20px] bg-gradient-to-br from-violet-500/20 to-pink-500/20 border border-violet-500/20 backdrop-blur-2xl shadow-2xl"
            />

            {/* MAIN BOARD */}
            <motion.div
              animate={{
                rotateX: [0, 3, 0],
                rotateY: [0, -3, 0],
                y: [0, -10, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-full max-w-[700px] bg-slate-900/70 backdrop-blur-2xl border border-slate-800 rounded-[36px] p-8 shadow-[0_0_80px_rgba(59,130,246,0.15)] overflow-hidden"
            >

              {/* TOP LINE */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-500"></div>

              {/* HEADER */}
              <div className="flex items-center justify-between mb-10 relative z-10">

                <div>

                  <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm mb-4">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    Live Workspace
                  </div>

                  <h3 className="text-4xl font-black mb-2">
                    Product Launch
                  </h3>

                  <p className="text-slate-400 text-lg">
                    Team Collaboration Board
                  </p>

                </div>

                <div className="w-20 h-20 rounded-[28px] bg-gradient-to-br from-blue-500/20 to-violet-500/20 border border-blue-500/20 flex items-center justify-center text-4xl backdrop-blur-xl">
                  🚀
                </div>

              </div>

              {/* BOARD */}
              <div className="grid grid-cols-3 gap-5 relative z-10">

                {/* TODO */}
                <div className="bg-slate-950/90 border border-slate-800 rounded-[28px] p-5">

                  <div className="flex items-center justify-between mb-5">

                    <h4 className="font-bold text-slate-300">
                      Todo
                    </h4>

                    <span className="bg-slate-800 text-xs px-3 py-1 rounded-full">
                      2
                    </span>

                  </div>

                  <div className="">

                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      className="bg-slate-900 border border-slate-800 p-4 text-xs rounded-2xl"
                    >
                      Design Landing Page
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      className="bg-slate-900 border border-slate-800 p-4 text-xs rounded-2xl"
                    >
                      Setup Backend
                    </motion.div>

                  </div>

                </div>

                {/* PROGRESS */}
                <div className="bg-slate-950/90 border border-yellow-500/10 rounded-[28px] p-5">

                  <div className="flex items-center justify-between mb-5">

                    <h4 className="font-bold text-yellow-400">
                      Progress
                    </h4>

                    <span className="bg-yellow-500/10 text-yellow-400 text-xs px-3 py-1 rounded-full">
                      1
                    </span>

                  </div>

                  <div className="space-y-4">

                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      className="bg-slate-900 border border-yellow-500/20 p-4 text-xs rounded-2xl"
                    >
                      Authentication System
                    </motion.div>

                  </div>

                </div>

                {/* DONE */}
                <div className="bg-slate-950/90 border border-green-500/10 rounded-[28px] p-5">

                  <div className="flex items-center justify-between mb-5">

                    <h4 className="font-bold text-green-400">
                      Done
                    </h4>

                    <span className="bg-green-500/10 text-green-400 text-xs px-3 py-1 rounded-full">
                      2
                    </span>

                  </div>

                  <div className="space-y-4">

                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      className="bg-slate-900 border border-green-500/20 p-4 text-xs rounded-2xl"
                    >
                      Project Setup
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      className="bg-slate-900 border border-green-500/20 p-4 text-xs rounded-2xl"
                    >
                      UI Planning
                    </motion.div>

                  </div>

                </div>

              </div>

            </motion.div>

            {/* FLOATING ACTIVITY CARD */}
            <motion.div
              animate={{
                y: [0, 15, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-12 -left-10 bg-slate-900/90 backdrop-blur-2xl border border-slate-800 rounded-[28px] p-6 shadow-2xl w-[270px]"
            >

              <p className="text-slate-400 text-sm mb-3">
                Real-time Activity
              </p>

              <h3 className="text-2xl font-bold mb-5">
                New Comment Added
              </h3>

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center font-bold">
                  PG
                </div>

                <div>

                  <p className="font-semibold">
                    Prabhat
                  </p>

                  <p className="text-slate-500 text-sm">
                    2 mins ago
                  </p>

                </div>

              </div>

            </motion.div>

          </motion.div>

        </div>

      </section >

      {/* DASHBOARD SECTION */}
      < section className="relative z-10 px-8 lg:px-20 pb-24" >

        {/* TOP BAR */}
        < div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12" >

          <div>
            <h2 className="text-5xl font-bold mb-3">
              Your Projects
            </h2>

            <p className="text-slate-400 text-lg">
              Manage and collaborate with your team efficiently.
            </p>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 transition-all px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg shadow-blue-500/20"
          >
            + Create Project
          </button>

        </div >


        {/* PROJECT EXPERIENCE */}
        {
          projects.length === 0 ? (

            <div className="relative overflow-hidden bg-slate-900/50 backdrop-blur-2xl border border-slate-800 rounded-[40px] p-20 text-center">

              {/* BACKGROUND EFFECTS */}
              <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full"></div>

              <div className="absolute bottom-0 right-0 w-72 h-72 bg-violet-500/10 blur-[120px] rounded-full"></div>

              {/* GRID */}
              <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:60px_60px]"></div>

              {/* CONTENT */}
              <div className="relative z-10 max-w-2xl mx-auto">

                {/* ICON */}
                <div className="relative w-32 h-32 mx-auto mb-10">

                  <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 rounded-full"></div>

                  <div className="relative w-full h-full rounded-[32px] bg-gradient-to-br from-blue-500/20 to-violet-500/20 border border-blue-500/20 flex items-center justify-center text-6xl backdrop-blur-xl">
                    📄
                  </div>

                </div>

                {/* TITLE */}
                <h2 className="text-6xl font-black mb-6 leading-tight">
                  Build Your First
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500">
                    Team Workspace
                  </span>
                </h2>

                {/* DESCRIPTION */}
                <p className="text-slate-400 text-xl leading-relaxed mb-12 max-w-xl mx-auto">
                  Create projects, organize tasks, collaborate with your team,
                  and manage workflows in real-time.
                </p>

                {/* BUTTON */}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="group relative overflow-hidden bg-blue-600 hover:bg-blue-700 transition-all px-12 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-blue-500/20"
                >

                  <span className="relative z-10">
                    Create Your First Project
                  </span>

                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-violet-500 opacity-0 group-hover:opacity-20 transition-all"></div>

                </button>

              </div>

            </div>

          ) : (

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">

              {projects.map((project, index) => (

                <div
                  key={project._id}
                  className="group relative"
                >

                  {/* GLOW */}
                  <div className="absolute -inset-[1px] bg-gradient-to-br from-blue-500/30 via-violet-500/10 to-cyan-500/20 rounded-[32px] blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                  {/* CARD */}
                  <div className="relative h-full bg-slate-900/70 backdrop-blur-2xl border border-slate-800 rounded-[32px] p-8 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/40">

                    {/* TOP EFFECT */}
                    <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-500"></div>

                    {/* BACKGROUND ORB */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 blur-[90px] rounded-full"></div>

                    {/* HEADER */}
                    <div className="relative z-10 flex items-start justify-between mb-10">

                      <div>

                        <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm mb-5">
                          <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                          Active Workspace
                        </div>

                        <h3 className="text-3xl font-black leading-tight group-hover:text-blue-400 transition-all">
                          {project.title}
                        </h3>

                      </div>

                      <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 border border-blue-500/20 flex items-center justify-center text-3xl backdrop-blur-xl">
                        🚀
                      </div>

                    </div>

                    {/* DESCRIPTION */}
                    <p className="relative z-10 text-slate-400 leading-relaxed mb-10 min-h-[80px]">
                      {project.description}
                    </p>

                    {/* TASK PROGRESS */}
                    <div className="relative z-10 mb-10">

                      <div className="flex items-center justify-between mb-3">
                        <span className="text-slate-300 font-medium">
                          Workflow Progress
                        </span>

                        <span className="text-blue-400 font-bold">
                          78%
                        </span>
                      </div>

                      <div className="h-3 bg-slate-800 rounded-full overflow-hidden">

                        <div className="h-full w-[78%] bg-gradient-to-r from-blue-500 to-violet-500 rounded-full"></div>

                      </div>

                    </div>

                    {/* MINI TASKS */}
                    <div className="relative z-10 space-y-4 mb-10">

                      <div className="bg-slate-800/70 border border-slate-700 rounded-2xl p-4 flex items-center justify-between">
                        <span>Design Dashboard UI</span>

                        <span className="text-green-400 text-sm">
                          Done
                        </span>
                      </div>

                      <div className="bg-slate-800/70 border border-slate-700 rounded-2xl p-4 flex items-center justify-between">
                        <span>API Integration</span>

                        <span className="text-yellow-400 text-sm">
                          Progress
                        </span>
                      </div>

                    </div>

                    {/* FOOTER */}
                    <div className="relative z-10 flex items-center justify-between pt-6 border-t border-slate-800">

                      {/* USERS */}
                      <div className="flex -space-x-3">

                        <div className="w-11 h-11 rounded-full bg-blue-500 border-2 border-slate-900 flex justify-center items-center">PG</div>

                        <div className="w-11 h-11 rounded-full bg-violet-500 border-2 border-slate-900 flex justify-center items-center">AP</div>

                        <div className="w-11 h-11 rounded-full bg-cyan-500 border-2 border-slate-900 flex justify-center items-center">MP</div>

                      </div>

                      {/* OPEN BUTTON */}
                      <button
                        onClick={() =>
                          navigate(`/project/${project._id}`, {
                            state: {
                              project,
                            },
                          })
                        }
                        className="group/button relative overflow-hidden bg-slate-800 hover:bg-blue-600 transition-all px-6 py-3 rounded-2xl font-semibold"
                      >
                        <span className="relative z-10">
                          Open Workspace
                        </span>
                      </button>

                    </div>

                  

                  </div>

                </div>

              ))}

            </div>

          )
        }



      </section >


      <CreateProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreate={createProjectHandler}
      />



    </div >
  );
};

export default Home;


