export const metadata = {
  title: "Timeline",
};

export default function Page() {
  return (
    <div className="space-y-4">
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Timeline
      </h2>
      <div>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Work
        </h3>
        <div className="flex flex-col items-start">
          <h3 className="text-xl font-bold">Sourcegraph</h3>
          <p>Consultant</p>
          <small className="text-sm text-zinc-500 mt-2 tracking-widest uppercase">
            Dec 2023 - Jan 2024
          </small>
          <p className="text-base text-zinc-400 my-4">
            One of my project from GitHub `saadfrhan/react-todoapp` was selected
            by Quinn, the founder of Sourcegraph. He bought this project and I
            helped the co-worker preparing the project for UX Research by the
            co-worker. Many developers were selected from around the world. Half
            of them added filter features and testing files using their AI
            product called Cody and half of them did this without any AI. 30+
            people has done one of the two tasks.
          </p>
        </div>
      </div>

      <div>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Volunteering
        </h3>
        <div className="flex flex-col items-start">
          <h3 className="text-xl font-bold">GIAIC</h3>
          <p>Teacher Assistant</p>
          <small className="text-sm text-zinc-500 mt-2 tracking-widest uppercase">
            Feb 2024 - Present
          </small>
          <p className="text-base text-zinc-400 my-4">
            I have been appointed as the Teacher Assistant for the Governor
            Sindh Initiative Faculty
          </p>
        </div>
      </div>
    </div>
  );
}
