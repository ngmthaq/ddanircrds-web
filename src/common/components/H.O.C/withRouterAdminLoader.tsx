import { FC, Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import { AdminLayout } from "@/common/layouts";
import { LoaderFC } from "./withRouterLoader";
import { Backdrop, Skeleton } from "@mui/material";

export function withRouterAdminLoader<L>(Element: LoaderFC<L>) {
  const Wrapper: FC = () => {
    const loaderData: any = useLoaderData();

    return (
      <Suspense
        fallback={
          <AdminLayout title="Loading" contentMaxWidth="100%">
            <Skeleton variant="circular" width="40px" height="40px" sx={{ mb: 2 }} />
            <Skeleton variant="rounded" width="50%" height="40px" sx={{ mb: 2 }} />
            <Skeleton variant="rounded" width="100%" height="40px" sx={{ mb: 2 }} />
            <Backdrop open={true} sx={{ background: "transparent" }} />
          </AdminLayout>
        }
      >
        <Await resolve={loaderData.data}>
          {(resolveLoaderData) => <Element loaderData={resolveLoaderData} />}
        </Await>
      </Suspense>
    );
  };

  return Wrapper;
}
