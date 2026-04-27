import { jobs } from "../../data/Jobs";
export const selectJobs = (state) => state.jobs.list;
/*
export const selectCategoryFilter = createSelector(
  [jobs],
  (jobs) => {
    return Object.entries(
      jobs.reduce((acc, job) => {
        acc[job.title] = (acc[job.title] || 0) + 1;
        return acc;
      }, {})
    ).map(([title, count]) => ({ title, count }));
  }
);

*/

export const selectCategoryFilter = ()=> jobs
