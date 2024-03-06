import { createContext } from "react";
import { MusicSubmissionModel } from "@/api/models";

export type AdminMusicSubmissionPageContextType = {
  page: number;
  totalPages: number;
  submissions: MusicSubmissionModel[];
  selectedSubmission: MusicSubmissionModel | null;
  searchValue: string;
  handleChangePage: (page: number) => void;
  handleChangeSearchValue: (value: string) => void;
  handleRefetch: () => void;
  handleSetSelectSubmission: (submission: MusicSubmissionModel | null) => void;
};

export const AdminMusicSubmissionPageContext = createContext<AdminMusicSubmissionPageContextType>({
  page: 1,
  totalPages: 1,
  submissions: [],
  selectedSubmission: null,
  searchValue: "",
  handleChangePage: () => {},
  handleChangeSearchValue: () => {},
  handleRefetch: () => {},
  handleSetSelectSubmission: () => {},
});
