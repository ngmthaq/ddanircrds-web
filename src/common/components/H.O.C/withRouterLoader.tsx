import { FC, Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import { CircularLoading } from "../generics";

export type LoaderFC<L = any> = FC<{ loaderData: L }>;

export function withRouterLoader<L>(Element: LoaderFC<L>) {
  const Wrapper: FC = () => {
    const loaderData: any = useLoaderData();

    return (
      <Suspense fallback={<CircularLoading />}>
        <Await resolve={loaderData.data}>{(resolveLoaderData) => <Element loaderData={resolveLoaderData} />}</Await>
      </Suspense>
    );
  };

  return Wrapper;
}
