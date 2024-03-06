import { MusicSubmissionModel } from "@/api/models";
import { CommonUtils } from "@/common/utils";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export type UseAdminMusicSubmissionPagePaginationProps = {
  submissions: MusicSubmissionModel[];
};

export const useAdminMusicSubmissionPagePagination = (
  props: UseAdminMusicSubmissionPagePaginationProps,
) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const rawPage = searchParams.get("page") || "1";
  const page = parseInt(rawPage);
  const search = searchParams.get("search") || "";
  const totalSubmissions = props.submissions;
  const rowNumberPerPage = 10;

  const [currentPage, setCurrentPage] = useState<number>(page);
  const [searchValue, setSearchValue] = useState<string>(search);
  const [filterSubmissions, setFilterSubmissions] = useState<MusicSubmissionModel[]>([]);

  const handleChangePage = (page: number) => {
    setCurrentPage(page);
  };

  const handleChangeSearchValue = (value: string) => {
    setCurrentPage(1);
    setSearchValue(value);
  };

  useEffect(() => {
    const submissions = totalSubmissions.filter((submission) => {
      const submissionName = submission.name.toLowerCase();
      const submissionEmail = submission.email.toLowerCase();
      const searchLowerCase = searchValue.toLowerCase();
      return submissionName.includes(searchLowerCase) || submissionEmail.includes(searchLowerCase);
    });

    setFilterSubmissions(submissions);
    setCurrentPage(1);
  }, [search, searchValue, totalSubmissions]);

  useEffect(() => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("page", currentPage.toString());
    newSearchParams.set("search", searchValue);
    if (newSearchParams.toString() !== searchParams.toString()) {
      setSearchParams(newSearchParams);
    }
  }, [currentPage, searchValue, searchParams, setSearchParams]);

  return {
    totalPages: Math.ceil(filterSubmissions.length / rowNumberPerPage),
    page: currentPage,
    submissions: CommonUtils.paginate(filterSubmissions, currentPage, rowNumberPerPage),
    searchValue: searchValue,
    handleChangePage: handleChangePage,
    handleChangeSearchValue: handleChangeSearchValue,
  };
};
