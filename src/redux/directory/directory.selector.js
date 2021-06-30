import { createSelector } from "reselect"

const selectDirectory = state => state.directory

export const selectDiirectorySections = createSelector(
    [selectDirectory],
    directory => directory.sections
)